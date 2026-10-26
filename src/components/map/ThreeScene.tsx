'use client';

import React, { useEffect, useRef, useState, useCallback, useMemo } from 'react';
import * as THREE from 'three';
import {
  THREE_VIEWPOINTS,
  MATTERHORN_SUMMIT_3D,
  THREE_OVERVIEW_CAMERA,
  MapViewpoint,
} from '@/lib/map-data';
import { VisibilityApiResponse } from '@/lib/types';
import Link from 'next/link';
import {
  Sun,
  Sunrise,
  Sunset,
  Moon,
  Cloud,
  Eye,
  Camera,
  RotateCcw,
  Sparkles,
  Radio,
  X,
  ExternalLink,
  ChevronRight,
  Layers,
  Compass,
  Play,
  Pause,
} from 'lucide-react';

type LightingTime = 'sunrise' | 'midday' | 'sunset' | 'night';

interface ThreeSceneProps {
  initialVisibilityData?: VisibilityApiResponse | null;
}

export default function ThreeScene({ initialVisibilityData }: ThreeSceneProps) {
  const mountRef = useRef<HTMLDivElement>(null);

  // Three.js internal references
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const dirLightRef = useRef<THREE.DirectionalLight | null>(null);
  const hemiLightRef = useRef<THREE.HemisphereLight | null>(null);
  const cloudMeshRef = useRef<THREE.Mesh | null>(null);
  const sightlinesRef = useRef<THREE.LineSegments | null>(null);
  const activeSightlineRef = useRef<THREE.Line | null>(null);

  // Animation states
  const targetCamPos = useRef<THREE.Vector3>(
    new THREE.Vector3(...THREE_OVERVIEW_CAMERA.position)
  );
  const targetCamLook = useRef<THREE.Vector3>(
    new THREE.Vector3(...THREE_OVERVIEW_CAMERA.lookAt)
  );
  const currentCamLook = useRef<THREE.Vector3>(
    new THREE.Vector3(...THREE_OVERVIEW_CAMERA.lookAt)
  );

  // UI Interactive states
  const [selectedViewpoint, setSelectedViewpoint] = useState<MapViewpoint | null>(null);
  const [lightingPreset, setLightingPreset] = useState<LightingTime>('sunrise');
  const [showInversionClouds, setShowInversionClouds] = useState<boolean>(true);
  const [cloudAltitude, setCloudAltitude] = useState<number>(2.4); // 2,400m
  const [showSightlines, setShowSightlines] = useState<boolean>(true);
  const [isOrbiting, setIsOrbiting] = useState<boolean>(false);
  const [activeWebcamUrl, setActiveWebcamUrl] = useState<string | null>(null);

  // Screen projections for 2D viewpoint markers overlay
  const [markerScreenPos, setMarkerScreenPos] = useState<
    Record<string, { x: number; y: number; visible: boolean }>
  >({});

  // Helper to fetch live score
  const getScoreForViewpoint = useCallback(
    (viewpoint: MapViewpoint): number | null => {
      if (!initialVisibilityData || !viewpoint.telemetryKey) return null;
      return initialVisibilityData.viewpoints[viewpoint.telemetryKey]?.currentScore ?? null;
    },
    [initialVisibilityData]
  );

  // Fly to viewpoint
  const flyToViewpoint = useCallback((vp: MapViewpoint) => {
    setIsOrbiting(false);
    setSelectedViewpoint(vp);
    targetCamPos.current.set(...vp.cameraPOV.position);
    targetCamLook.current.set(...vp.cameraPOV.lookAt);
  }, []);

  // Fly back to bird's eye overview
  const flyToOverview = useCallback(() => {
    setIsOrbiting(false);
    setSelectedViewpoint(null);
    targetCamPos.current.set(...THREE_OVERVIEW_CAMERA.position);
    targetCamLook.current.set(...THREE_OVERVIEW_CAMERA.lookAt);
  }, []);

  // Update lighting conditions
  useEffect(() => {
    if (!dirLightRef.current || !hemiLightRef.current || !sceneRef.current) return;
    const dir = dirLightRef.current;
    const hemi = hemiLightRef.current;
    const scene = sceneRef.current;

    switch (lightingPreset) {
      case 'sunrise':
        // Golden sunrise hitting the East Face of Matterhorn
        dir.position.set(12, 4, -2);
        dir.color.setHex(0xfda4af); // Peach / Rose Alpenglow
        dir.intensity = 2.4;
        hemi.color.setHex(0xfef08a);
        hemi.groundColor.setHex(0x1e1b4b);
        hemi.intensity = 0.9;
        scene.background = new THREE.Color(0xfbcfe8).lerp(new THREE.Color(0x38bdf8), 0.5);
        if (scene.fog) {
          scene.fog.color.setHex(0xfce7f3);
          (scene.fog as THREE.FogExp2).density = 0.015;
        }
        break;

      case 'midday':
        // High bright sun
        dir.position.set(5, 14, 4);
        dir.color.setHex(0xffffff);
        dir.intensity = 2.8;
        hemi.color.setHex(0xe0f2fe);
        hemi.groundColor.setHex(0x334155);
        hemi.intensity = 1.0;
        scene.background = new THREE.Color(0x0284c7);
        if (scene.fog) {
          scene.fog.color.setHex(0xbae6fd);
          (scene.fog as THREE.FogExp2).density = 0.012;
        }
        break;

      case 'sunset':
        // Low warm West light
        dir.position.set(-12, 3, 4);
        dir.color.setHex(0xf97316); // Amber / orange
        dir.intensity = 2.6;
        hemi.color.setHex(0xfb923c);
        hemi.groundColor.setHex(0x0f172a);
        hemi.intensity = 0.7;
        scene.background = new THREE.Color(0x7c2d12).lerp(new THREE.Color(0x1e1b4b), 0.6);
        if (scene.fog) {
          scene.fog.color.setHex(0x9a3412);
          (scene.fog as THREE.FogExp2).density = 0.016;
        }
        break;

      case 'night':
        // Moonlight & starry sky
        dir.position.set(4, 10, -6);
        dir.color.setHex(0x818cf8);
        dir.intensity = 0.4;
        hemi.color.setHex(0x1e1b4b);
        hemi.groundColor.setHex(0x020617);
        hemi.intensity = 0.3;
        scene.background = new THREE.Color(0x020617);
        if (scene.fog) {
          scene.fog.color.setHex(0x020617);
          (scene.fog as THREE.FogExp2).density = 0.02;
        }
        break;
    }
  }, [lightingPreset]);

  // Update cloud mesh visibility and altitude
  useEffect(() => {
    if (!cloudMeshRef.current) return;
    cloudMeshRef.current.visible = showInversionClouds;
    cloudMeshRef.current.position.y = cloudAltitude;
  }, [showInversionClouds, cloudAltitude]);

  // Update sightlines visibility
  useEffect(() => {
    if (!sightlinesRef.current) return;
    sightlinesRef.current.visible = showSightlines;
    if (activeSightlineRef.current) {
      activeSightlineRef.current.visible = showSightlines && selectedViewpoint !== null;
    }
  }, [showSightlines, selectedViewpoint]);

  // Update active sightline geometry when selected viewpoint changes
  useEffect(() => {
    if (!activeSightlineRef.current || !selectedViewpoint) {
      if (activeSightlineRef.current) activeSightlineRef.current.visible = false;
      return;
    }
    const points = [
      new THREE.Vector3(...selectedViewpoint.position3D),
      new THREE.Vector3(...MATTERHORN_SUMMIT_3D.position3D),
    ];
    activeSightlineRef.current.geometry.setFromPoints(points);
    activeSightlineRef.current.visible = showSightlines;
  }, [selectedViewpoint, showSightlines]);

  // Main Three.js Scene Setup
  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth;
    const height = container.clientHeight;

    // 1. Scene & Fog
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x38bdf8);
    scene.fog = new THREE.FogExp2(0xbae6fd, 0.015);
    sceneRef.current = scene;

    // 2. Camera
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(...THREE_OVERVIEW_CAMERA.position);
    camera.lookAt(...THREE_OVERVIEW_CAMERA.lookAt);
    cameraRef.current = camera;

    // 3. Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    rendererRef.current = renderer;
    container.appendChild(renderer.domElement);

    // 4. Lights
    const hemiLight = new THREE.HemisphereLight(0xffffff, 0x1e293b, 0.9);
    hemiLight.position.set(0, 20, 0);
    scene.add(hemiLight);
    hemiLightRef.current = hemiLight;

    const dirLight = new THREE.DirectionalLight(0xfda4af, 2.4);
    dirLight.position.set(12, 6, -2);
    dirLight.castShadow = true;
    dirLight.shadow.mapSize.width = 2048;
    dirLight.shadow.mapSize.height = 2048;
    dirLight.shadow.camera.near = 1;
    dirLight.shadow.camera.far = 40;
    dirLight.shadow.camera.left = -15;
    dirLight.shadow.camera.right = 15;
    dirLight.shadow.camera.top = 15;
    dirLight.shadow.camera.bottom = -15;
    scene.add(dirLight);
    dirLightRef.current = dirLight;

    // 5. Procedural Alpine Terrain & Matterhorn Geometry
    const terrainSize = 26;
    const terrainSegments = 140;
    const terrainGeo = new THREE.PlaneGeometry(terrainSize, terrainSize, terrainSegments, terrainSegments);
    terrainGeo.rotateX(-Math.PI / 2);

    const pos = terrainGeo.attributes.position;
    const colors = new Float32Array(pos.count * 3);

    for (let i = 0; i < pos.count; i++) {
      const x = pos.getX(i);
      const z = pos.getZ(i);

      // Distance from Matterhorn peak (at 0,0)
      const distFromPeak = Math.sqrt(x * x + z * z);

      // Matterhorn 4-sided pyramid formula
      // Faces: North (-Z), East (+X), South (+Z), West (-X)
      let pyramidElev = 0;
      if (distFromPeak < 4.2) {
        const pyramidFalloff = Math.max(0, 1 - distFromPeak / 4.2);
        // Ridge sharpening (pyramidal facets)
        const facetSharpness = 1 + 0.35 * Math.cos(4 * Math.atan2(z, x));
        // Classic steep Matterhorn curve
        pyramidElev = Math.pow(pyramidFalloff, 1.45) * 4.478 * facetSharpness;

        // Give the iconic slight eastward curve to Hörnli ridge
        if (x > 0 && z < 0.5) {
          pyramidElev += 0.25 * (1 - distFromPeak / 3.5);
        }
      }

      // Surrounding Alpine Topography:
      // Gornergrat ridge (around x: 7.5, z: -1.2, elev ~ 3.1)
      const distGornergrat = Math.sqrt(Math.pow(x - 7.5, 2) + Math.pow(z + 1.2, 2));
      const gornergratElev = Math.max(0, 3.089 - distGornergrat * 0.7);

      // Klein Matterhorn / Glacier Paradise ridge (around x: 2.8, z: 5.8, elev ~ 3.88)
      const distGlacier = Math.sqrt(Math.pow(x - 2.8, 2) + Math.pow(z - 5.8, 2));
      const glacierElev = Math.max(0, 3.883 - distGlacier * 0.85);

      // Rothorn ridge (around x: 7.2, z: -6.8, elev ~ 3.1)
      const distRothorn = Math.sqrt(Math.pow(x - 7.2, 2) + Math.pow(z + 6.8, 2));
      const rothornElev = Math.max(0, 3.103 - distRothorn * 0.75);

      // Zermatt valley floor depression (x: 5.2, z: -5.8)
      const distValley = Math.sqrt(Math.pow(x - 5.2, 2) + Math.pow(z + 5.8, 2));
      let valleyFloor = 1.6;
      if (distValley < 4.0) {
        valleyFloor = 1.6 - (1 - distValley / 4.0) * 0.3;
      }

      // Base undulating foothills noise
      const foothills =
        0.5 * Math.sin(x * 0.4) * Math.cos(z * 0.4) +
        0.25 * Math.sin(x * 0.9 + z * 0.7);

      // Combine terrain elevations
      const finalY = Math.max(
        valleyFloor + foothills * 0.4,
        pyramidElev,
        gornergratElev,
        glacierElev,
        rothornElev
      );

      pos.setY(i, finalY);

      // Terrain Shading & Colors by Elevation & Slope
      // Summit Snow (> 3.3m): Crisp White / Icy Blue
      // Mid Alpine Rock (2.4m - 3.3m): Slate Dark Gray
      // Meadows / Scree (1.8m - 2.4m): Olive scree
      // Valley Pine ( < 1.8m): Dark Alpine Green
      let r = 0.3, g = 0.35, b = 0.4; // default rock

      if (finalY > 3.35) {
        // High snow peak
        r = 0.96; g = 0.98; b = 1.0;
      } else if (finalY > 2.7) {
        // Upper rock & glacier ice
        r = 0.55; g = 0.6; b = 0.65;
      } else if (finalY > 2.1) {
        // Alpine scree & tundra
        r = 0.4; g = 0.45; b = 0.38;
      } else {
        // Low valley pine & meadows
        r = 0.16; g = 0.28; b = 0.18;
      }

      // Add subtle noise variation
      const noise = ((i % 7) - 3) * 0.02;
      colors[i * 3] = Math.min(1, Math.max(0, r + noise));
      colors[i * 3 + 1] = Math.min(1, Math.max(0, g + noise));
      colors[i * 3 + 2] = Math.min(1, Math.max(0, b + noise));
    }

    terrainGeo.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    terrainGeo.computeVertexNormals();

    const terrainMat = new THREE.MeshStandardMaterial({
      vertexColors: true,
      roughness: 0.85,
      metalness: 0.08,
      flatShading: true,
    });

    const terrainMesh = new THREE.Mesh(terrainGeo, terrainMat);
    terrainMesh.receiveShadow = true;
    terrainMesh.castShadow = true;
    scene.add(terrainMesh);

    // 6. Riffelsee Mirror Lake Water Plane
    const lakeGeo = new THREE.CircleGeometry(0.8, 32);
    lakeGeo.rotateX(-Math.PI / 2);
    const lakeMat = new THREE.MeshStandardMaterial({
      color: 0x38bdf8,
      roughness: 0.1,
      metalness: 0.8,
      transparent: true,
      opacity: 0.85,
    });
    const lakeMesh = new THREE.Mesh(lakeGeo, lakeMat);
    lakeMesh.position.set(5.6, 2.75, -1.0);
    scene.add(lakeMesh);

    // 7. Floating Inversion Cloud Deck Layer
    const cloudGeo = new THREE.PlaneGeometry(30, 30, 40, 40);
    cloudGeo.rotateX(-Math.PI / 2);
    const cloudMat = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.62,
      roughness: 1.0,
      metalness: 0.0,
    });
    const cloudMesh = new THREE.Mesh(cloudGeo, cloudMat);
    cloudMesh.position.y = 2.4;
    scene.add(cloudMesh);
    cloudMeshRef.current = cloudMesh;

    // 8. Sightline Rays to Summit
    const linePositions: number[] = [];
    THREE_VIEWPOINTS.forEach((vp) => {
      linePositions.push(...vp.position3D);
      linePositions.push(...MATTERHORN_SUMMIT_3D.position3D);
    });

    const sightlinesGeo = new THREE.BufferGeometry();
    sightlinesGeo.setAttribute(
      'position',
      new THREE.Float32BufferAttribute(linePositions, 3)
    );

    const sightlinesMat = new THREE.LineDashedMaterial({
      color: 0x38bdf8,
      dashSize: 0.3,
      gapSize: 0.15,
      linewidth: 1,
    });
    const sightlinesLines = new THREE.LineSegments(sightlinesGeo, sightlinesMat);
    sightlinesLines.computeLineDistances();
    scene.add(sightlinesLines);
    sightlinesRef.current = sightlinesLines;

    // Active Highlighted Sightline
    const activeLineGeo = new THREE.BufferGeometry();
    const activeLineMat = new THREE.LineBasicMaterial({
      color: 0xf59e0b,
      linewidth: 3,
    });
    const activeLine = new THREE.Line(activeLineGeo, activeLineMat);
    activeLine.visible = false;
    scene.add(activeLine);
    activeSightlineRef.current = activeLine;

    // 9. Summit Glowing Beacon Marker
    const beaconGeo = new THREE.ConeGeometry(0.12, 0.45, 16);
    beaconGeo.rotateX(Math.PI);
    const beaconMat = new THREE.MeshBasicMaterial({ color: 0xfbbf24 });
    const beaconMesh = new THREE.Mesh(beaconGeo, beaconMat);
    beaconMesh.position.set(0, 4.8, 0);
    scene.add(beaconMesh);

    // 10. Mouse Drag & Touch Controls (Orbiting & Panning)
    let isDragging = false;
    let prevMouseX = 0;
    let prevMouseY = 0;

    const handlePointerDown = (e: MouseEvent | TouchEvent) => {
      isDragging = true;
      const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
      const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
      prevMouseX = clientX;
      prevMouseY = clientY;
    };

    const handlePointerMove = (e: MouseEvent | TouchEvent) => {
      if (!isDragging) return;
      setIsOrbiting(false);

      const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
      const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;

      const deltaX = clientX - prevMouseX;
      const deltaY = clientY - prevMouseY;
      prevMouseX = clientX;
      prevMouseY = clientY;

      // Orbit around targetCamLook
      const cam = cameraRef.current;
      if (!cam) return;

      const offset = cam.position.clone().sub(currentCamLook.current);
      const radius = offset.length();
      let theta = Math.atan2(offset.x, offset.z);
      let phi = Math.acos(Math.max(-1, Math.min(1, offset.y / radius)));

      theta -= deltaX * 0.006;
      phi = Math.max(0.15, Math.min(Math.PI / 2.05, phi - deltaY * 0.006));

      offset.x = radius * Math.sin(phi) * Math.sin(theta);
      offset.y = radius * Math.cos(phi);
      offset.z = radius * Math.sin(phi) * Math.cos(theta);

      targetCamPos.current.copy(currentCamLook.current).add(offset);
    };

    const handlePointerUp = () => {
      isDragging = false;
    };

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      const cam = cameraRef.current;
      if (!cam) return;

      const offset = targetCamPos.current.clone().sub(targetCamLook.current);
      const newLen = Math.max(2.5, Math.min(22, offset.length() + e.deltaY * 0.01));
      offset.setLength(newLen);
      targetCamPos.current.copy(targetCamLook.current).add(offset);
    };

    const dom = renderer.domElement;
    dom.addEventListener('mousedown', handlePointerDown);
    dom.addEventListener('touchstart', handlePointerDown, { passive: true });
    window.addEventListener('mousemove', handlePointerMove);
    window.addEventListener('touchmove', handlePointerMove, { passive: true });
    window.addEventListener('mouseup', handlePointerUp);
    window.addEventListener('touchend', handlePointerUp);
    dom.addEventListener('wheel', handleWheel, { passive: false });

    // 11. Resize Observer
    const handleResize = () => {
      if (!container || !renderer || !camera) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', handleResize);

    // 12. Main Animation Loop
    let animId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const delta = clock.getDelta();
      const time = clock.getElapsedTime();

      // Continuous subtle summit orbit if enabled
      if (isOrbiting) {
        const cam = cameraRef.current;
        if (cam) {
          const offset = targetCamPos.current.clone().sub(targetCamLook.current);
          const radius = offset.length();
          let theta = Math.atan2(offset.x, offset.z) + delta * 0.15;
          const phi = Math.acos(Math.max(-1, Math.min(1, offset.y / radius)));

          offset.x = radius * Math.sin(phi) * Math.sin(theta);
          offset.z = radius * Math.sin(phi) * Math.cos(theta);
          targetCamPos.current.copy(targetCamLook.current).add(offset);
        }
      }

      // Smooth camera interpolation
      camera.position.lerp(targetCamPos.current, 0.08);
      currentCamLook.current.lerp(targetCamLook.current, 0.08);
      camera.lookAt(currentCamLook.current);

      // Subtle beacon bounce
      beaconMesh.position.y = 4.8 + Math.sin(time * 3) * 0.06;

      // Project 3D viewpoint locations to 2D screen positions
      const newPositions: Record<string, { x: number; y: number; visible: boolean }> = {};
      const halfW = container.clientWidth / 2;
      const halfH = container.clientHeight / 2;

      // Summit marker
      const summitVec = new THREE.Vector3(...MATTERHORN_SUMMIT_3D.position3D);
      summitVec.y += 0.5;
      summitVec.project(camera);
      newPositions['summit'] = {
        x: summitVec.x * halfW + halfW,
        y: -summitVec.y * halfH + halfH,
        visible: summitVec.z < 1.0,
      };

      // Viewpoint markers
      THREE_VIEWPOINTS.forEach((vp) => {
        const v = new THREE.Vector3(...vp.position3D);
        v.y += 0.25;
        v.project(camera);
        newPositions[vp.id] = {
          x: v.x * halfW + halfW,
          y: -v.y * halfH + halfH,
          visible: v.z < 1.0,
        };
      });

      setMarkerScreenPos(newPositions);

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
      dom.removeEventListener('mousedown', handlePointerDown);
      dom.removeEventListener('touchstart', handlePointerDown);
      window.removeEventListener('mousemove', handlePointerMove);
      window.removeEventListener('touchmove', handlePointerMove);
      window.removeEventListener('mouseup', handlePointerUp);
      window.removeEventListener('touchend', handlePointerUp);
      dom.removeEventListener('wheel', handleWheel);

      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, [isOrbiting]);

  const selectedScore = selectedViewpoint ? getScoreForViewpoint(selectedViewpoint) : null;

  return (
    <div className="relative w-full h-[calc(100vh-65px)] min-h-[600px] overflow-hidden bg-slate-950 font-sans select-none">
      {/* Three.js Canvas Container */}
      <div ref={mountRef} className="w-full h-full cursor-grab active:cursor-grabbing" />

      {/* Floating 2D Viewpoint Markers Projected from 3D World */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Summit Beacon Tag */}
        {markerScreenPos['summit']?.visible && (
          <div
            className="absolute transform -translate-x-1/2 -translate-y-full transition-all duration-75 pointer-events-auto cursor-pointer"
            style={{
              left: `${markerScreenPos['summit'].x}px`,
              top: `${markerScreenPos['summit'].y}px`,
            }}
            onClick={flyToOverview}
          >
            <div className="flex flex-col items-center group">
              <div className="px-2.5 py-1 rounded-full bg-slate-900/90 text-amber-300 border border-amber-400/80 text-[11px] font-mono font-bold shadow-2xl flex items-center gap-1.5 backdrop-blur-md hover:scale-105 transition-transform">
                <Sparkles className="w-3 h-3 text-amber-400 animate-pulse" />
                <span>MATTERHORN 4,478m</span>
              </div>
              <div className="w-0.5 h-3 bg-amber-400"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-amber-400 ring-2 ring-white shadow-lg"></div>
            </div>
          </div>
        )}

        {/* Viewpoint Pins */}
        {THREE_VIEWPOINTS.map((vp) => {
          const pos = markerScreenPos[vp.id];
          if (!pos || !pos.visible) return null;
          const score = getScoreForViewpoint(vp);
          const isSelected = selectedViewpoint?.id === vp.id;

          return (
            <div
              key={vp.id}
              className={`absolute transform -translate-x-1/2 -translate-y-full transition-all duration-75 pointer-events-auto cursor-pointer ${
                isSelected ? 'z-30' : 'z-20'
              }`}
              style={{
                left: `${pos.x}px`,
                top: `${pos.y}px`,
              }}
              onClick={() => flyToViewpoint(vp)}
            >
              <div className="flex flex-col items-center group">
                <div
                  className={`px-2 py-1 rounded-xl text-white shadow-2xl flex items-center gap-1.5 backdrop-blur-md transition-all hover:scale-110 ${
                    isSelected
                      ? 'bg-sky-600 border-2 border-white ring-4 ring-sky-500/40'
                      : 'bg-slate-900/85 hover:bg-slate-900 border border-sky-400/70'
                  }`}
                >
                  <span
                    className={`w-2 h-2 rounded-full ${
                      score && score >= 8 ? 'bg-emerald-400' : 'bg-sky-400'
                    }`}
                  />
                  <div className="flex flex-col text-left">
                    <span className="text-[11px] font-bold tracking-tight whitespace-nowrap">
                      {vp.shortName}
                    </span>
                    <span className="text-[9px] font-mono text-slate-300">
                      {vp.elevationLabel.split(' ')[0]}m
                    </span>
                  </div>
                  {score !== null && (
                    <span
                      className={`ml-0.5 px-1.5 py-0.5 rounded text-[10px] font-mono font-bold border ${
                        isSelected
                          ? 'bg-sky-950 text-sky-200 border-sky-300'
                          : 'bg-emerald-500/20 text-emerald-300 border-emerald-400/40'
                      }`}
                    >
                      {score}/10
                    </span>
                  )}
                </div>
                <div
                  className={`w-0.5 h-3 ${isSelected ? 'bg-white' : 'bg-sky-400'}`}
                ></div>
                <div
                  className={`w-2.5 h-2.5 rounded-full border-2 border-white shadow-md ${
                    isSelected ? 'bg-white ring-2 ring-sky-500' : 'bg-sky-400'
                  }`}
                ></div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Top Left Title Card & Sun Simulation Controls */}
      <div className="absolute top-4 left-4 z-20 max-w-sm sm:max-w-md bg-slate-900/90 backdrop-blur-xl border border-slate-700/80 rounded-2xl p-3 sm:p-4 text-white shadow-2xl">
        <div className="flex items-center justify-between gap-2 mb-1">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse" />
            <h1 className="text-xs sm:text-sm font-extrabold tracking-tight uppercase">
              Matterhorn 3D Silhouette & Lighting Simulator
            </h1>
          </div>
          <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-amber-950 text-amber-300 border border-amber-800">
            Three.js WebGL
          </span>
        </div>
        <p className="text-[11px] sm:text-xs text-slate-300 leading-relaxed">
          Full 3D pyramid geometry with lighting & alpine inversion simulation. See how the East
          Face lights up at sunrise and why Gornergrat sits above low valley clouds.
        </p>

        {/* Time of Day / Sunlight Presets */}
        <div className="mt-3 pt-3 border-t border-slate-800">
          <span className="text-[10px] font-mono text-slate-400 uppercase font-semibold block mb-1.5">
            Sunlight & Alpenglow Condition:
          </span>
          <div className="grid grid-cols-4 gap-1.5">
            <button
              type="button"
              onClick={() => setLightingPreset('sunrise')}
              className={`flex flex-col items-center justify-center p-1.5 rounded-xl border text-[10px] font-bold transition-all cursor-pointer ${
                lightingPreset === 'sunrise'
                  ? 'bg-rose-500/20 border-rose-400 text-rose-200 ring-1 ring-rose-400/40'
                  : 'bg-slate-800/80 border-slate-700 text-slate-400 hover:text-slate-200'
              }`}
            >
              <Sunrise className="w-3.5 h-3.5 mb-0.5 text-rose-400" />
              <span>Sunrise</span>
            </button>

            <button
              type="button"
              onClick={() => setLightingPreset('midday')}
              className={`flex flex-col items-center justify-center p-1.5 rounded-xl border text-[10px] font-bold transition-all cursor-pointer ${
                lightingPreset === 'midday'
                  ? 'bg-sky-500/20 border-sky-400 text-sky-200 ring-1 ring-sky-400/40'
                  : 'bg-slate-800/80 border-slate-700 text-slate-400 hover:text-slate-200'
              }`}
            >
              <Sun className="w-3.5 h-3.5 mb-0.5 text-amber-300" />
              <span>Midday</span>
            </button>

            <button
              type="button"
              onClick={() => setLightingPreset('sunset')}
              className={`flex flex-col items-center justify-center p-1.5 rounded-xl border text-[10px] font-bold transition-all cursor-pointer ${
                lightingPreset === 'sunset'
                  ? 'bg-amber-500/20 border-amber-400 text-amber-200 ring-1 ring-amber-400/40'
                  : 'bg-slate-800/80 border-slate-700 text-slate-400 hover:text-slate-200'
              }`}
            >
              <Sunset className="w-3.5 h-3.5 mb-0.5 text-amber-500" />
              <span>Golden</span>
            </button>

            <button
              type="button"
              onClick={() => setLightingPreset('night')}
              className={`flex flex-col items-center justify-center p-1.5 rounded-xl border text-[10px] font-bold transition-all cursor-pointer ${
                lightingPreset === 'night'
                  ? 'bg-indigo-500/20 border-indigo-400 text-indigo-200 ring-1 ring-indigo-400/40'
                  : 'bg-slate-800/80 border-slate-700 text-slate-400 hover:text-slate-200'
              }`}
            >
              <Moon className="w-3.5 h-3.5 mb-0.5 text-indigo-300" />
              <span>Night</span>
            </button>
          </div>
        </div>

        {/* Cloud Deck & Sightlines Toggles */}
        <div className="flex flex-wrap items-center gap-2 mt-3 pt-3 border-t border-slate-800 text-xs">
          <button
            type="button"
            onClick={() => setShowInversionClouds(!showInversionClouds)}
            className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg border text-[11px] font-semibold transition-all cursor-pointer ${
              showInversionClouds
                ? 'bg-sky-500/20 border-sky-400 text-sky-200'
                : 'bg-slate-800/80 border-slate-700 text-slate-300 hover:bg-slate-800'
            }`}
          >
            <Cloud className="w-3.5 h-3.5" />
            <span>Cloud Deck {showInversionClouds ? 'ON' : 'OFF'}</span>
          </button>

          <button
            type="button"
            onClick={() => setShowSightlines(!showSightlines)}
            className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg border text-[11px] font-semibold transition-all cursor-pointer ${
              showSightlines
                ? 'bg-sky-500/20 border-sky-400 text-sky-200'
                : 'bg-slate-800/80 border-slate-700 text-slate-300 hover:bg-slate-800'
            }`}
          >
            <Eye className="w-3.5 h-3.5" />
            <span>Sightlines</span>
          </button>

          <button
            type="button"
            onClick={() => setIsOrbiting(!isOrbiting)}
            className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg border text-[11px] font-semibold transition-all cursor-pointer ${
              isOrbiting
                ? 'bg-amber-500/20 border-amber-400 text-amber-200'
                : 'bg-slate-800/80 border-slate-700 text-slate-300 hover:bg-slate-800'
            }`}
          >
            {isOrbiting ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
            <span>{isOrbiting ? 'Pause Orbit' : 'Orbit Summit'}</span>
          </button>

          <button
            type="button"
            onClick={flyToOverview}
            className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg border border-slate-700 bg-slate-800/80 hover:bg-slate-800 text-slate-300 text-[11px] font-semibold transition-all cursor-pointer"
            title="Reset to Top-Down Alpine Panorama"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset</span>
          </button>
        </div>
      </div>

      {/* Bottom Viewpoint Quick Selection Carousel */}
      <div className="absolute bottom-4 left-4 right-4 sm:right-auto sm:left-4 z-20 flex gap-2 overflow-x-auto pb-1 max-w-[calc(100vw-32px)] sm:max-w-xl scrollbar-none">
        {THREE_VIEWPOINTS.map((vp) => {
          const isSelected = selectedViewpoint?.id === vp.id;
          const score = getScoreForViewpoint(vp);

          return (
            <button
              key={vp.id}
              type="button"
              onClick={() => flyToViewpoint(vp)}
              className={`shrink-0 flex items-center gap-2 px-3 py-2 rounded-xl border backdrop-blur-xl transition-all cursor-pointer text-left shadow-lg ${
                isSelected
                  ? 'bg-sky-600 text-white border-sky-400 ring-2 ring-sky-400/50 scale-105'
                  : 'bg-slate-900/85 hover:bg-slate-900 text-slate-200 border-slate-700/80'
              }`}
            >
              <div className="flex flex-col">
                <span className="text-xs font-bold whitespace-nowrap">{vp.shortName}</span>
                <span
                  className={`text-[10px] font-mono ${
                    isSelected ? 'text-sky-100' : 'text-slate-400'
                  }`}
                >
                  {vp.elevationLabel.split(' ')[0]}m • {vp.distanceKm}km away
                </span>
              </div>
              {score !== null && (
                <span
                  className={`px-1.5 py-0.5 rounded text-[10px] font-mono font-bold border ${
                    isSelected
                      ? 'bg-sky-900 text-sky-200 border-sky-300'
                      : 'bg-emerald-500/20 text-emerald-300 border-emerald-400/40'
                  }`}
                >
                  {score}/10
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* Viewpoint Inspection Drawer */}
      {selectedViewpoint && (
        <div className="absolute top-4 right-4 sm:right-4 z-30 w-80 sm:w-96 max-w-[calc(100vw-32px)] bg-slate-900/95 backdrop-blur-2xl border border-sky-500/40 rounded-2xl p-4 sm:p-5 text-white shadow-2xl animate-in fade-in slide-in-from-right-4 duration-200">
          <div className="flex items-start justify-between gap-3 mb-2">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-wider text-sky-400 font-bold">
                POV Viewpoint Active
              </span>
              <h2 className="text-base sm:text-lg font-black tracking-tight">
                {selectedViewpoint.name}
              </h2>
            </div>
            <button
              type="button"
              onClick={() => setSelectedViewpoint(null)}
              className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
              aria-label="Close Inspector"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Quick Stats Grid */}
          <div className="grid grid-cols-2 gap-2 my-3">
            <div className="bg-slate-800/80 rounded-xl p-2.5 border border-slate-700/60">
              <span className="text-[10px] font-mono text-slate-400 block uppercase">Elevation</span>
              <span className="text-sm font-bold font-mono text-white">
                {selectedViewpoint.elevationLabel}
              </span>
            </div>
            <div className="bg-slate-800/80 rounded-xl p-2.5 border border-slate-700/60">
              <span className="text-[10px] font-mono text-slate-400 block uppercase">
                Sightline Distance
              </span>
              <span className="text-sm font-bold font-mono text-white">
                {selectedViewpoint.distanceKm} km to Peak
              </span>
            </div>
          </div>

          {/* Silhouette Perspective */}
          <div className="bg-sky-950/40 border border-sky-800/60 rounded-xl p-2.5 mb-3">
            <span className="text-[10px] font-mono text-sky-400 block font-semibold uppercase">
              Mountain Profile & Aspect
            </span>
            <p className="text-xs text-sky-100 font-medium mt-0.5">{selectedViewpoint.aspect}</p>
          </div>

          {/* Description & Timing */}
          <div className="space-y-2 text-xs text-slate-300">
            <p>{selectedViewpoint.description}</p>
            <div className="p-2.5 rounded-xl bg-slate-800/60 border border-slate-700/50 text-[11px] text-slate-300">
              <span className="font-bold text-amber-300 block mb-0.5">📸 Golden Light Window:</span>
              {selectedViewpoint.photoTip}
            </div>
          </div>

          {/* Live Visibility Status */}
          {selectedScore !== null && (
            <div className="flex items-center justify-between mt-3 pt-3 border-t border-slate-800">
              <div className="flex items-center gap-2">
                <Radio className="w-4 h-4 text-emerald-400 animate-pulse" />
                <span className="text-xs font-bold text-slate-200">Live Visibility Score:</span>
              </div>
              <span className="px-2 py-0.5 rounded-md bg-emerald-500/20 border border-emerald-400/50 text-emerald-300 text-xs font-mono font-bold">
                {selectedScore} / 10
              </span>
            </div>
          )}

          {/* Action Links */}
          <div className="flex items-center gap-2 mt-4 pt-3 border-t border-slate-800">
            {selectedViewpoint.webcamId && (
              <button
                type="button"
                onClick={() =>
                  setActiveWebcamUrl(
                    `https://${
                      selectedViewpoint.webcamId === 'gornergrat'
                        ? 'gornergrat.roundshot.com/'
                        : selectedViewpoint.webcamId === 'rothorn'
                        ? 'zermatt.roundshot.com/rothorn/'
                        : selectedViewpoint.webcamId === 'trockener-steg'
                        ? 'zermatt.roundshot.com/trockener-steg/'
                        : 'zermatt.roundshot.com/zermatt-bergbahnen/'
                    }`
                  )
                }
                className="flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold border border-slate-700 transition-colors cursor-pointer"
              >
                <Camera className="w-3.5 h-3.5 text-sky-400" />
                <span>Live Cam</span>
              </button>
            )}

            {selectedViewpoint.slug && (
              <Link
                href={`/viewpoints/${selectedViewpoint.slug}`}
                className="flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-sky-600 hover:bg-sky-500 text-white text-xs font-bold transition-colors shadow-xs"
              >
                <span>Full Guide</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            )}
          </div>
        </div>
      )}

      {/* Live Webcam Modal */}
      {activeWebcamUrl && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 backdrop-blur-md p-4">
          <div className="relative w-full max-w-4xl bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl overflow-hidden flex flex-col h-[75vh]">
            <div className="flex items-center justify-between px-4 py-3 border-b border-slate-800 bg-slate-900/90 text-white">
              <div className="flex items-center gap-2">
                <Camera className="w-4 h-4 text-sky-400" />
                <span className="text-xs sm:text-sm font-bold">
                  Roundshot 360° Live Panorama Feed
                </span>
              </div>
              <div className="flex items-center gap-2">
                <a
                  href={activeWebcamUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors text-xs flex items-center gap-1"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Open in New Tab</span>
                </a>
                <button
                  type="button"
                  onClick={() => setActiveWebcamUrl(null)}
                  className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>
            <div className="flex-1 w-full h-full bg-black">
              <iframe
                src={activeWebcamUrl}
                title="Roundshot Live Cam"
                className="w-full h-full border-0"
                allow="fullscreen"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

import { ViewpointId } from './types';

export interface MapViewpoint {
  id: string;
  name: string;
  shortName: string;
  elevationMeters: number;
  elevationLabel: string;
  coordinates: [number, number]; // [longitude, latitude]
  position3D: [number, number, number]; // [x, y, z] in Three.js world space
  cameraPOV: {
    position: [number, number, number];
    lookAt: [number, number, number];
  };
  distanceKm: number;
  aspect: string;
  telemetryKey: ViewpointId | null;
  webcamId: 'gornergrat' | 'rothorn' | 'trockener-steg' | 'kirchbruecke' | null;
  slug?: string;
  description: string;
  photoTip: string;
}

export const MATTERHORN_SUMMIT_3D = {
  name: 'Matterhorn Summit',
  elevationMeters: 4478,
  coordinates: [7.6586, 45.9766] as [number, number],
  position3D: [0, 4.478, 0] as [number, number, number],
};

export const THREE_VIEWPOINTS: MapViewpoint[] = [
  {
    id: 'gornergrat',
    name: 'Gornergrat Ridge',
    shortName: 'Gornergrat',
    elevationMeters: 3089,
    elevationLabel: '3,089 m (10,135 ft)',
    coordinates: [7.7845, 45.984],
    position3D: [7.5, 3.089, -1.2],
    cameraPOV: {
      position: [7.8, 3.3, -1.1],
      lookAt: [0, 4.2, 0],
    },
    distanceKm: 9.8,
    aspect: 'East Face & Hörnli Ridge (Toblerone View)',
    telemetryKey: 'gornergrat',
    webcamId: 'gornergrat',
    slug: 'gornergrat',
    description:
      'The world-famous vantage point accessed via the historic Gornergrat cogwheel railway. Directly confronts the classic hooked pyramid and Monte Rosa glacier basin.',
    photoTip:
      'Morning (07:00–10:30 CET) offers direct sunlight on the East Face. Afternoon sun moves behind the summit into backlit shadow.',
  },
  {
    id: 'glacier-paradise',
    name: 'Matterhorn Glacier Paradise',
    shortName: 'Glacier Paradise',
    elevationMeters: 3883,
    elevationLabel: '3,883 m (12,740 ft)',
    coordinates: [7.7297, 45.9383],
    position3D: [2.8, 3.883, 5.8],
    cameraPOV: {
      position: [3.1, 4.05, 6.2],
      lookAt: [0, 4.3, 0],
    },
    distanceKm: 6.7,
    aspect: 'South Face & Theodul Glacier (Italian Border)',
    telemetryKey: 'glacier-paradise',
    webcamId: 'trockener-steg',
    slug: 'glacier-paradise',
    description:
      "Europe's highest cable car station (3,883m). Standing eye-to-eye across the glacier with the colossal trapezoidal South wall rather than the slender pyramid profile.",
    photoTip:
      'Midday to early afternoon (11:00–15:00 CET) delivers the best lighting on the southern rock wall. Bring Category 4 glacier sunglasses.',
  },
  {
    id: 'riffelsee',
    name: 'Riffelsee & Rotenboden',
    shortName: 'Riffelsee Mirror Lake',
    elevationMeters: 2757,
    elevationLabel: '2,757 m (9,045 ft)',
    coordinates: [7.7661, 45.9825],
    position3D: [5.6, 2.757, -1.0],
    cameraPOV: {
      position: [5.9, 2.85, -0.9],
      lookAt: [0, 4.2, 0],
    },
    distanceKm: 8.4,
    aspect: 'Iconic Mirror Reflection Angle',
    telemetryKey: 'gornergrat',
    webcamId: 'gornergrat',
    slug: 'sunnegga-riffelsee',
    description:
      'High alpine tarn sitting one stop below Gornergrat. Renowned for its still-water reflection of the Matterhorn pyramid.',
    photoTip:
      'Take the first 07:00 CET train to Rotenboden before thermal breezes pick up (wind must stay < 12 km/h for mirror reflection). If breezy, walk 100m to Lower Riffelsee.',
  },
  {
    id: 'rothorn',
    name: 'Unterrothorn & Sunnegga',
    shortName: 'Rothorn Panoramic',
    elevationMeters: 3103,
    elevationLabel: '3,103 m (10,180 ft)',
    coordinates: [7.7865, 46.0195],
    position3D: [7.2, 3.103, -6.8],
    cameraPOV: {
      position: [7.5, 3.3, -7.1],
      lookAt: [0, 4.2, 0],
    },
    distanceKm: 10.9,
    aspect: 'Northeast Panoramic Valley View',
    telemetryKey: 'gornergrat',
    webcamId: 'rothorn',
    slug: 'sunnegga-riffelsee',
    description:
      'Perched high above the Findel valley, Rothorn offers the widest perspective on the Matterhorn with panoramic framing over the five alpine reflection lakes.',
    photoTip:
      'Late afternoon golden hour illuminates the North Face while warm light coats the valley floor.',
  },
  {
    id: 'schwarzsee',
    name: 'Schwarzsee (Hörnli Base)',
    shortName: 'Schwarzsee Base',
    elevationMeters: 2583,
    elevationLabel: '2,583 m (8,474 ft)',
    coordinates: [7.7088, 45.9922],
    position3D: [2.5, 2.583, -2.1],
    cameraPOV: {
      position: [2.8, 2.7, -2.3],
      lookAt: [0, 4.4, 0],
    },
    distanceKm: 4.2,
    aspect: 'Close-Up Base Beneath Hörnli Ridge',
    telemetryKey: 'gornergrat',
    webcamId: 'trockener-steg',
    description:
      'Nestled right at the foot of the Matterhorn near the small Maria zum Schnee chapel. The starting point for climbers ascending to the Hörnli Hut.',
    photoTip:
      'Use a wide-angle lens (16–24mm) to fit the massive 1,500m sheer rock face towering directly overhead.',
  },
  {
    id: 'zermatt-village',
    name: 'Zermatt Village (Kirchbrücke)',
    shortName: 'Zermatt Village',
    elevationMeters: 1608,
    elevationLabel: '1,608 m (5,275 ft)',
    coordinates: [7.7476, 46.0198],
    position3D: [5.2, 1.608, -5.8],
    cameraPOV: {
      position: [5.4, 1.75, -6.0],
      lookAt: [0, 4.2, 0],
    },
    distanceKm: 8.9,
    aspect: 'Classic Village River Perspective',
    telemetryKey: 'gornergrat',
    webcamId: 'kirchbruecke',
    description:
      'The famous bridge in the heart of Zermatt village overlooking the Matter Vispa river. Where thousands gather at sunrise to watch the peak turn pink with alpenglow.',
    photoTip:
      'Arrive 20 minutes before sunrise. Check our atmospheric layers: if low fog sits in the valley, higher viewpoints will be clear while the village is shrouded.',
  },
];

export const THREE_OVERVIEW_CAMERA = {
  position: [11.0, 7.5, 7.5] as [number, number, number],
  lookAt: [0.5, 2.8, 0] as [number, number, number],
};

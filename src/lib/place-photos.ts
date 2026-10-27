import type { StaticImageData } from 'next/image';
import type { ViewpointId } from '@/lib/types';
import type { ViewpointPageSlug } from '@/lib/viewpoints';
import gornergratRidge from '../../public/places/matterhorn-gornergrat.webp';
import skiSlope from '../../public/places/ski-matterhorn.webp';
import gornergratTrain from '../../public/places/gornergrat-bahn.webp';
import glacierExpress from '../../public/places/glacier-express.webp';
import riffelsee from '../../public/places/riffelsee.webp';
import kleinMatterhorn from '../../public/places/klein-matterhorn.webp';
import rothorn from '../../public/places/rothorn.webp';
import zermattVillage from '../../public/places/zermatt-village.webp';

export interface PlacePhoto {
  src: StaticImageData;
  alt: string;
  credit: string;
  creditHref: string;
  objectPosition: string;
}

function photo(
  src: StaticImageData,
  alt: string,
  author: string,
  license: string,
  file: string,
  objectPosition = 'center'
): PlacePhoto {
  return {
    src,
    alt,
    credit: `Photo: ${author}, ${license}`,
    creditHref: `https://commons.wikimedia.org/wiki/File:${file}`,
    objectPosition,
  };
}

export const PLACE_PHOTOS = {
  gornergrat: photo(
    gornergratRidge,
    'The Matterhorn east face and the Riffelhorn seen from the Gornergrat ridge, with two alpine tarns in the foreground',
    'Ximonic (Simo Räsänen)',
    'CC BY-SA 4.0',
    'Matterhorn_and_Riffelhorn_as_seen_from_Gornergrat,_Wallis,_Switzerland,_2012_August.jpg',
    '32% center'
  ),
  glacierParadise: photo(
    kleinMatterhorn,
    'A cable car climbing the Klein Matterhorn toward the Glacier Paradise station above Zermatt',
    'Roy Egloff',
    'CC BY-SA 4.0',
    'CH.VS.Zermatt_2019-12-27_Klein-Matterhorn_6918_16x9-R_5K.jpg',
    '22% center'
  ),
  ski: photo(
    skiSlope,
    'Skiers on a groomed piste below the Matterhorn in the Zermatt ski area',
    'Doc Searls',
    'CC BY-SA 2.0',
    'Ski_Matterhorn.jpg',
    'center 40%'
  ),
  gornergratBahn: photo(
    gornergratTrain,
    'A red Gornergrat Bahn cogwheel train climbing through Zermatt',
    'Maksym Kozlenko',
    'CC BY-SA 4.0',
    'Gornergratbahn_Train,_Zermatt.jpg',
    'center'
  ),
  glacierExpress: photo(
    glacierExpress,
    'The red Glacier Express crossing a snowfield near the Oberalp Pass',
    'David Gubler',
    'CC BY-SA 3.0',
    'MGB_HGe_4-4_II_mit_Glacier_Express_kurz_vor_Oberalp_Passh%C3%B6he.jpg',
    '18% 62%'
  ),
  riffelsee: photo(
    riffelsee,
    'The Matterhorn reflected in the still water of Riffelsee at sunrise',
    'Deralpinbergsteiger',
    'CC BY-SA 4.0',
    'Matterhorn_reflection_in_the_Riffelsee_at_sunrise.jpg',
    'center'
  ),
  sunnegga: photo(
    rothorn,
    'Unterrothorn and the snowy Oberrothorn above the Sunnegga sector',
    'Whgler',
    'CC BY-SA 3.0',
    'Unter-_und_Oberrothorn.jpg',
    'center'
  ),
  zermattVillage: photo(
    zermattVillage,
    'Wooden chalets in Zermatt with the Matterhorn rising behind the rooftops',
    'Tiago Sanchez',
    'CC BY-SA 4.0',
    'View_of_the_Matterhorn_from_Zermatt_village.jpg',
    'center 22%'
  ),
} as const satisfies Record<string, PlacePhoto>;

export const VIEWPOINT_PHOTOS: Record<ViewpointPageSlug, PlacePhoto> = {
  gornergrat: PLACE_PHOTOS.gornergrat,
  'glacier-paradise': PLACE_PHOTOS.glacierParadise,
  sunnegga: PLACE_PHOTOS.sunnegga,
  riffelsee: PLACE_PHOTOS.riffelsee,
  'zermatt-village': PLACE_PHOTOS.zermattVillage,
};

export function photoForViewpoint(id: ViewpointId): PlacePhoto {
  return id === 'glacier-paradise' ? PLACE_PHOTOS.glacierParadise : PLACE_PHOTOS.gornergrat;
}

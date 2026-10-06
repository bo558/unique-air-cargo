// Regenerates the brand logo variants (src/assets/brand) and the dot-matrix world map
// (src/data/world-map.json) used by the WorldMap component.
// Usage: npm run assets -- [path/to/logo.png]
import fs from 'node:fs';
import path from 'node:path';
import { createRequire } from 'node:module';
import sharp from 'sharp';
import { geoNaturalEarth1, geoContains } from 'd3-geo';
import { feature } from 'topojson-client';

const root = process.cwd();
const require = createRequire(import.meta.url);

/* ---------------------------------------------------------------- Logos */
const logoSrc = process.argv[2] ?? path.join(root, 'UniqueAirCargoLogo-1.png');
const brandDir = path.join(root, 'src/assets/brand');
fs.mkdirSync(brandDir, { recursive: true });

await sharp(logoSrc).trim().toFile(path.join(brandDir, 'logo-color.png'));

// White variant for dark backgrounds: blue lettering → white, grey lettering → light grey,
// the pale swoosh strokes are kept as they are.
const { data, info } = await sharp(logoSrc).trim().ensureAlpha().raw().toBuffer({ resolveWithObject: true });
for (let i = 0; i < data.length; i += 4) {
  const [r, g, b] = [data[i], data[i + 1], data[i + 2]];
  const luma = 0.3 * r + 0.59 * g + 0.11 * b;
  const grey = Math.abs(r - g) < 18 && Math.abs(g - b) < 18;
  if (grey) {
    data[i] = 214;
    data[i + 1] = 222;
    data[i + 2] = 229;
  } else if (luma < 150) {
    data[i] = data[i + 1] = data[i + 2] = 255;
  }
}
await sharp(data, { raw: info }).png().toFile(path.join(brandDir, 'logo-white.png'));
fs.copyFileSync(path.join(brandDir, 'logo-color.png'), path.join(root, 'public/brand/logo.png'));

/* ---------------------------------------------------------------- World map */
const topology = require('world-atlas/land-110m.json');
const land = feature(topology, topology.objects.land);
const width = 1000;
const height = 520;
const step = 9;
const projection = geoNaturalEarth1().fitExtent(
  [
    [0, 0],
    [width, height],
  ],
  { type: 'Sphere' },
);

const round = (n) => Math.round(n * 10) / 10;
const dots = [];
for (let y = step / 2; y < height; y += step) {
  for (let x = step / 2; x < width; x += step) {
    const lonLat = projection.invert([x, y]);
    if (!lonLat || Number.isNaN(lonLat[0]) || lonLat[1] < -58) continue; // skip Antarctica
    if (geoContains(land, lonLat)) dots.push([round(x), round(y)]);
  }
}

// Hub and representative points for each region (lon, lat)
const places = {
  istanbul: [28.97, 41.01],
  europe: [2.35, 48.85],
  russia: [37.6, 55.75],
  cis: [69.2, 41.3],
  africa: [3.4, 6.5],
  africaE: [36.8, -1.3],
  middleEast: [46.7, 24.7],
  farEast: [121.5, 31.2],
  usa: [-74, 40.7],
};
const points = Object.fromEntries(Object.entries(places).map(([k, v]) => [k, projection(v).map(round)]));

fs.mkdirSync(path.join(root, 'src/data'), { recursive: true });
fs.writeFileSync(path.join(root, 'src/data/world-map.json'), JSON.stringify({ width, height, step, dots, points }));
console.log(`Logos written · world map: ${dots.length} dots`);

import type { Sector } from './sectors';

export type SectorText = Pick<Sector, 'title' | 'challenge' | 'body' | 'needs' | 'imageAlt' | 'context'>;

/** English copy for each sector, keyed by sector id. */
export const sectorsEn: Record<string, SectorText> = {
  enerji: {
    title: 'Energy, Oil & Gas',
    challenge: 'A stalled turbine or drilling rig means lost production every hour.',
    body: 'Power plants, drilling sites and refineries are often far from the scheduled air network, while the equipment they need is large, heavy and usually urgent. Choosing the nearest suitable airport to the site matters as much as choosing the aircraft.',
    needs: [
      'Generators, transformers and turbine components',
      'Drilling equipment, pipes and wellhead equipment',
      'Crew rotation flights for field personnel',
      'Field equipment containing dangerous goods',
    ],
    imageAlt: 'Freighter and tug on the apron at sunset',
  },
  'insaat-altyapi': {
    title: 'Construction & Infrastructure',
    challenge: 'On major projects, it is often a single piece of equipment that derails the schedule.',
    body: 'Bridges, metro lines, motorways and power lines depend on machinery parts, custom-built equipment and project teams arriving on time. When sea freight takes weeks, air freight keeps critical items on schedule.',
    needs: [
      'Machinery spares and critical components',
      'Custom-built project equipment',
      'Group flights for engineers and site teams',
      'Bulk shipments for site mobilisation',
    ],
    imageAlt: 'Truck-mounted crane loading bridge components at Hong Kong airport',
    context: {
      label: 'Market context · Gulf',
      text: 'Across the Gulf, and in Saudi Arabia in particular, billion-dollar investments are flowing into bridges, metro lines and road networks in fast-growing cities such as Riyadh — with Turkish contractors securing major contracts. Projects at this scale create demand for fast, flexible air transport of equipment, spare parts and personnel that must reach site on time.',
    },
  },
  'havacilik-denizcilik': {
    title: 'Aviation & Marine',
    challenge: 'An aircraft on ground (AOG) or a ship waiting in port is the most expensive wait there is.',
    body: 'A delayed engine, landing gear or critical ship component means cancelled flights, contractual penalties and knock-on operational losses. The shortest routing and an aircraft matched to the size of the part are planned together.',
    needs: [
      'Aircraft engines and large spare parts',
      'Urgent parts for AOG situations',
      'Ship engines and marine equipment',
      'Maintenance equipment and technical teams',
    ],
    imageAlt: 'Aircraft engine being loaded into a heavy-lift freighter',
  },
  'otomotiv-uretim': {
    title: 'Automotive & Manufacturing',
    challenge: 'In just-in-time production, one missing part can stop the entire line.',
    body: 'Supply chains in automotive and manufacturing run to the minute; when they break, the missing part has to reach the line within hours. For machinery, moulds and production equipment, dimension and weight planning takes centre stage.',
    needs: [
      'Urgent parts and components during line stoppages',
      'Production machinery, moulds and equipment',
      'Vehicle and prototype transport',
      'Bulk equipment transfers for plant set-ups',
    ],
    imageAlt: 'Industrial tanks prepared for air freight',
  },
  saglik: {
    title: 'Healthcare',
    challenge: 'In medical operations, time translates directly into patient safety.',
    body: 'From patient transfers to medical device and consumable shipments, air transport in healthcare demands care and the right equipment as much as speed.',
    needs: [
      'Patient transfers with intensive-care equipment',
      'Repatriation of patients from abroad',
      'Medical device and consumable shipments',
      'Urgent supply for healthcare facilities',
    ],
    imageAlt: 'Medical equipment crates secured in a freighter’s hold',
  },
  'kamu-insani-yardim': {
    title: 'Government & Humanitarian',
    challenge: 'In a crisis, getting the right supplies to the right place depends on the quality of planning.',
    body: 'Flights for government bodies, defence organisations and relief agencies require experienced coordination because of permit processes, confidentiality and conditions on the ground.',
    needs: [
      'Military equipment and vehicle transport',
      'Personnel and official delegation flights',
      'Relief supplies to disaster areas',
      'Shipments requiring diplomatic clearance',
    ],
    imageAlt: 'Heavy-lift freighter on the apron',
  },
  'eglence-spor': {
    title: 'Entertainment, Sports & Events',
    challenge: 'A sold-out event cannot be postponed.',
    body: 'Tours, film shoots and sporting events depend on crews and equipment being at a set place on a set date. For multi-stop programmes, the flight plan is built backwards from the event calendar.',
    needs: [
      'Stage, lighting and sound equipment',
      'Film set equipment',
      'Team, crew and supporter flights',
      'Racehorses and other animals for sporting purposes',
    ],
    imageAlt: 'Instruments waiting on stage',
  },
};

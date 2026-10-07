import type { Scenario } from './scenarios';

export type ScenarioText = Pick<Scenario, 'tab' | 'sector' | 'title' | 'situation' | 'need' | 'approach' | 'imageAlt'>;

/** English copy for each illustrative scenario, keyed by scenario id. */
export const scenariosEn: Record<string, ScenarioText> = {
  altyapi: {
    tab: 'Infrastructure project',
    sector: 'Construction & Infrastructure · Gulf',
    title: 'Heavy machinery down on site',
    situation:
      'On a large bridge and road project in a fast-growing city such as Riyadh, a critical machinery component fails. Sea freight would take weeks.',
    need: 'A heavy, single-piece component flown to the nearest suitable airport within days.',
    approach:
      'The aircraft type is selected by dimensions and weight, loading equipment is confirmed at destination, and flight and landing permits are aligned with the road transfer from airport to site in a single plan.',
    imageAlt: 'Outsized module being craned into a heavy-lift freighter',
  },
  aog: {
    tab: 'Aircraft on ground',
    sector: 'Aviation · AOG',
    title: 'An aircraft waiting for an engine change',
    situation:
      'An airline’s aircraft is grounded abroad with an engine failure (AOG). Every day means cancelled flights and passenger compensation.',
    need: 'A spare engine flown on the shortest routing, on an aircraft that can take its dimensions.',
    approach:
      'The engine’s dimensions and weight are taken together with its transport stand; aircraft with a suitable main-deck door are compared, and customs and delivery at destination are prepared before departure.',
    imageAlt: 'Aircraft engine being loaded into a heavy-lift freighter',
  },
  uretim: {
    tab: 'Line stoppage',
    sector: 'Automotive & Manufacturing',
    title: 'A production line stopped by a missing part',
    situation:
      'At a just-in-time plant, the supply chain breaks down; a single missing component brings the entire assembly line to a halt.',
    need: 'Parts collected from the supplier and flown the same day to the airport nearest the plant.',
    approach:
      'An aircraft sized to the shipment is selected, the transfer from pick-up point to airport is coordinated, and status updates are given throughout the operation.',
    imageAlt: 'Industrial equipment components prepared for air freight',
  },
  hasta: {
    tab: 'Patient transfer',
    sector: 'Healthcare',
    title: 'An intensive-care patient abroad',
    situation:
      'A patient who fell ill abroad needs to return home to continue treatment; travelling on a scheduled flight is not possible.',
    need: 'A safe transfer with an intensive-care equipped aircraft and medical crew.',
    approach:
      'Medical reports are reviewed, fitness to fly and equipment needs are assessed, and the flight is planned with a doctor and nurse alongside ground ambulance connections at both ends.',
    imageAlt: 'Aircraft on approach at night over runway lights',
  },
  yardim: {
    tab: 'Humanitarian air bridge',
    sector: 'Humanitarian Aid',
    title: 'Support in the first days after a disaster',
    situation:
      'After a natural disaster, the local airport operates at limited capacity; tents, generators, medicine and food are urgently needed.',
    need: 'Mixed consignments delivered regularly on aircraft suited to the destination airport’s capacity.',
    approach:
      'The cargo list is agreed with relief organisations and a load plan is prepared; urgent flight permits are followed up and an air bridge is established with recurring flights.',
    imageAlt: 'Prefabricated module inside a freighter’s hold',
  },
};

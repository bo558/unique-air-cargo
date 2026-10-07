import type { CategoryId, Service, Step } from './services';

/** English copy for each service, keyed by service id. Images, categories and relations come from services.ts. */
export type ServiceText = Omit<Service, 'slug' | 'category' | 'image' | 'detailImage' | 'related'>;

export const categoriesEn: Record<CategoryId, { label: string; description: string }> = {
  kargo: {
    label: 'Cargo & Special Freight',
    description: 'Shipments that scheduled capacity cannot handle, or that need special handling and permits.',
  },
  yolcu: {
    label: 'Passenger & Private Flights',
    description: 'Passenger, VIP and air ambulance flights planned around your schedule and route.',
  },
  kurum: {
    label: 'Government & Industry',
    description: 'Mission-driven operations for government, humanitarian and event clients.',
  },
};

export const defaultProcessEn: Step[] = [
  { title: 'Request', text: 'You share the route, dates and cargo or passenger details.' },
  { title: 'Planning', text: 'We assess suitable aircraft types, routings and timings.' },
  { title: 'Quotation', text: 'Options are presented in a clear quote at competitive market rates.' },
  { title: 'Coordination', text: 'Flight permits, ground handling and documentation are arranged.' },
  { title: 'Operation', text: 'The flight and delivery are monitored end to end by a single point of contact.' },
];

export const servicesEn: Record<string, ServiceText> = {
  /* ------------------------------------------------------------------ CARGO */
  'kargo-charter': {
    title: 'Cargo Charter',
    navTitle: 'Cargo Charter',
    summary: 'Full aircraft charter when scheduled capacity cannot meet your volume, timing or routing.',
    imageAlt: 'Freighter on the apron at sunset',
    detailImageAlt: 'Wide-body freighter being loaded at night',
    seo: {
      title: 'Cargo Charter Flights',
      description:
        'Full-aircraft cargo charter when scheduled capacity falls short: the right aircraft type, routing, permits and ground handling coordination.',
    },
    hero: {
      eyebrow: 'Cargo Charter',
      title: 'Don’t wait for capacity.',
      accent: 'Charter the aircraft.',
      lead: 'When scheduled flights are full, the route isn’t served, or the entire shipment has to move at once, we plan a freighter around your operation — not the other way round.',
    },
    intro: {
      heading: 'One shipment, one aircraft, one point of contact.',
      paragraphs: [
        'A cargo charter gives you the full capacity of an aircraft. Departure time, routing and the load plan are set by your operation, not by an airline timetable.',
        'We assess your request against the dimensions, weight, nature and delivery date of the cargo, compare suitable aircraft available in the market, present a competitive quote and manage the operation through to delivery.',
      ],
      quote: 'Your operation sets the departure time — not a timetable.',
    },
    useCases: {
      heading: 'When does a cargo charter make sense?',
      lead: 'A charter is not a luxury. It is the most direct answer to needs the scheduled network cannot meet.',
      items: [
        { title: 'No scheduled capacity', text: 'When space is unavailable during peak seasons or on constrained routes.' },
        { title: 'No direct connection', text: 'Direct flights to points with no scheduled service, or where transfers add risk.' },
        { title: 'High volume in one move', text: 'Project shipments, seasonal stock and bulk transfers in a single lift.' },
        { title: 'Control and security', text: 'Cargo travels end to end on one aircraft, without changing hands at transfer points.' },
      ],
    },
    advantages: [
      { title: 'Your schedule', text: 'Departure time and routing follow your production and delivery plan.' },
      { title: 'Right-sized capacity', text: 'An aircraft matched to the volume and weight of your cargo — no more, no less.' },
      { title: 'Less handling', text: 'One aircraft from loading point to destination, with no transfers.' },
      { title: 'Competitive pricing', text: 'Market options compared to deliver a quote in line with market conditions.' },
    ],
    capabilities: [
      'Aircraft selection based on the volume, weight and nature of the cargo',
      'Main-deck and lower-deck load planning',
      'Coordination of landing, take-off and overflight permits',
      'Ground handling and loading equipment arrangements',
      'Coordination of customs and documentation processes',
      'Status updates through a single point of contact throughout the operation',
    ],
  },
  'agir-yuk-charter': {
    title: 'Heavy & Outsized Cargo Charter',
    navTitle: 'Heavy & Outsized Cargo',
    summary: 'Shipments too large or too heavy for scheduled services, requiring a solution built around the cargo.',
    imageAlt: 'Truck-mounted crane lifting bridge components at Hong Kong International Airport',
    detailImageAlt: 'Crane loading a prefabricated module into a heavy-lift freighter',
    seo: {
      title: 'Heavy & Outsized Cargo Charter',
      description:
        'Charter planning for heavy and outsized cargo such as generators, turbines, drilling equipment, aircraft engines and vehicles: aircraft selection, load planning and permits.',
    },
    hero: {
      eyebrow: 'Heavy & Outsized Cargo',
      title: 'Oversized loads,',
      accent: 'tight deadlines.',
      lead: 'For generators, power plant components, drilling equipment, aircraft engines and vehicles that cannot travel on scheduled flights, we plan the aircraft, the load and the permits together.',
    },
    intro: {
      heading: 'Every heavy load needs its own engineering.',
      paragraphs: [
        'Large and heavy cargo comes with its own dimensions, weight and restrictions. It calls for a solution designed around the load, not an off-the-shelf product.',
        'Our team reviews dimensions, weight distribution, stacking and lashing requirements to select the right aircraft type, and plans the operation around loading equipment, runway and apron constraints at both ends.',
      ],
      quote: 'The right aircraft is chosen before the cargo reaches the door.',
    },
    useCases: {
      heading: 'Applications by industry',
      lead: 'Every day critical equipment is late to site becomes a cost to the project.',
      items: [
        { title: 'Energy', text: 'Power plant spares, generators, transformers and turbine components.' },
        { title: 'Oil & gas', text: 'Drilling equipment, pipes, field machinery and spare parts.' },
        { title: 'Construction & infrastructure', text: 'Machinery components and project equipment for large-scale sites.' },
        { title: 'Aviation & marine', text: 'Aircraft and ship engines, large spares and maintenance equipment.' },
        { title: 'Automotive & manufacturing', text: 'Production line machinery, moulds and critical machine parts.' },
        { title: 'Vehicles', text: 'Cars, off-road vehicles, caravans and helicopters.' },
      ],
    },
    advantages: [
      { title: 'Cargo-led aircraft choice', text: 'The right type for door size, floor loading and range.' },
      { title: 'Load planning', text: 'Weight distribution, lashing and stowage agreed before the flight.' },
      { title: 'Airport suitability', text: 'Runway, apron and ground equipment constraints checked at both ends.' },
      { title: 'Single coordination', text: 'Forwarders, ground handlers and permits managed by one team.' },
    ],
    process: [
      { title: 'Cargo data', text: 'Dimensions, weight, centre of gravity and special handling needs are collected.' },
      { title: 'Feasibility', text: 'Suitable aircraft types and airport compatibility are assessed for the cargo and route.' },
      { title: 'Load plan', text: 'Lashing, stowage and loading equipment requirements are confirmed.' },
      { title: 'Permits & coordination', text: 'Flight permits, ground handling and road transfers are aligned.' },
      { title: 'Flight & delivery', text: 'Loading, flight and offloading are followed through a single point of contact.' },
    ],
    capabilities: [
      'Sourcing aircraft suited to outsized and heavy single-piece cargo',
      'Feasibility assessment based on dimensions and weight data',
      'Loading and offloading equipment and special handling arrangements',
      'Ground handling coordination at origin and destination airports',
      'Flight and landing permits, including special permits where required',
      'Aligning road transfers between the airport and the site with the flight plan',
    ],
  },
  'tehlikeli-madde-charter': {
    title: 'Dangerous Goods Charter',
    navTitle: 'Dangerous Goods',
    summary: 'Planned from classification to delivery by a team trained in the IATA Dangerous Goods Regulations.',
    imageAlt: 'Dangerous goods consignment on the apron beside a Unique Air Cargo banner',
    detailImageAlt: 'Labelled dangerous goods packed in a container',
    seo: {
      title: 'Dangerous Goods (DG) Charter Flights',
      description:
        'Dangerous goods charter handled by a team trained in the IATA Dangerous Goods Regulations: acceptability review, diplomatic and special permits, authorised operators.',
    },
    hero: {
      eyebrow: 'Dangerous Goods',
      title: 'By the rules.',
      accent: 'Planned in full.',
      lead: 'Dangerous goods demand the strictest safety procedures, specialist equipment and meticulous planning. Our team, trained in the IATA Dangerous Goods Regulations, manages the charter from planning to execution.',
    },
    intro: {
      heading: 'Risk is managed at the planning stage.',
      paragraphs: [
        'There is no margin for error with dangerous goods. The class, quantity, packaging and declaration determine which aircraft, which routing and which permits can be used — and some shipments can only move under diplomatic clearance.',
        'We review acceptability from the outset, coordinate the permits and documentation required, and run the operation together with the carrier and ground handlers.',
      ],
      quote: 'With dangerous goods, safety starts long before the flight.',
    },
    useCases: {
      heading: 'Which shipments?',
      lead: 'Whatever the class or quantity, every shipment is first reviewed for acceptability.',
      items: [
        { title: 'Industrial chemicals', text: 'Classified chemicals for manufacturing and energy.' },
        { title: 'Batteries & energy storage', text: 'Battery modules and equipment containing lithium cells.' },
        { title: 'Government & defence', text: 'Shipments requiring special permits or diplomatic clearance.' },
        { title: 'Oil & gas equipment', text: 'Pressure vessels and field equipment containing dangerous goods.' },
      ],
    },
    advantages: [
      { title: 'Regulatory expertise', text: 'A team trained in the IATA Dangerous Goods Regulations.' },
      { title: 'Permit handling', text: 'Experience with shipments that need diplomatic or special permits.' },
      { title: 'Authorised carriers', text: 'Operators approved to carry dangerous goods.' },
      { title: 'Clear communication', text: 'Constraints and requirements shared openly from the start.' },
    ],
    process: [
      { title: 'Shipment data', text: 'UN number, class, quantity and safety data sheet (SDS) are collected.' },
      { title: 'Acceptability', text: 'We assess whether, and under which conditions, the shipment can fly.' },
      { title: 'Carrier & routing', text: 'An authorised operator and a permit-compliant routing are selected.' },
      { title: 'Permits & documents', text: 'Declarations, labelling and diplomatic or special permits are coordinated.' },
      { title: 'Flight & delivery', text: 'Ground handlers are briefed and the operation is tracked end to end.' },
    ],
    capabilities: [
      'Classification and acceptability pre-assessment under IATA DGR',
      'Coordination of declaration, packaging and labelling checks',
      'Aircraft sourced from operators authorised to carry dangerous goods',
      'Follow-up of diplomatic and special permit applications',
      'Ground handling coordination at origin and destination',
    ],
  },
  'acil-kritik-zamanli-charter': {
    title: 'Time-Critical Charter',
    navTitle: 'Time-Critical',
    summary: 'When a production line stops or a service is down: shipments where time is the most valuable item.',
    imageAlt: 'Aircraft engine on a transport stand beside a freighter',
    detailImageAlt: 'Forklift loading cargo into a freighter’s hold',
    seo: {
      title: 'Time-Critical & Urgent Charter Flights',
      description:
        'Charter flights for critical parts and equipment during line stoppages, AOG events and service outages: fast response, the shortest routing, end-to-end tracking.',
    },
    hero: {
      eyebrow: 'Time-Critical',
      title: 'When the line stops,',
      accent: 'the clock starts.',
      lead: 'When just-in-time supply breaks down, a production line stops or a service goes down, we work to get the critical part where it is needed as fast as possible.',
    },
    intro: {
      heading: 'When time is your most valuable cargo.',
      paragraphs: [
        'When something goes wrong and you urgently need a part, time becomes your most important commodity. These operations call for a fast response, a clear plan and one contact who follows everything through.',
        'From the moment we receive your request, we assess suitable aircraft and the fastest delivery scenario with you, and coordinate every step from collection to handover at destination.',
      ],
      quote: 'A stopped line usually costs more than the flight.',
    },
    useCases: {
      heading: 'Typical urgent shipments',
      lead: 'Each one is a case where delay means lost production, revenue or safety.',
      items: [
        { title: 'Automotive parts', text: 'Missing parts and components that bring a line to a halt.' },
        { title: 'Aircraft & ship spares', text: 'Engines and spares for an aircraft on ground (AOG) or a vessel waiting in port.' },
        { title: 'Factory machinery', text: 'Replacement machinery and parts for failed production equipment.' },
        { title: 'Medical equipment', text: 'Urgently needed medical devices and consumables.' },
        { title: 'Oil & gas', text: 'Critical equipment to keep field operations running.' },
        { title: 'Marine equipment', text: 'Urgent parts and equipment for vessels and offshore operations.' },
      ],
    },
    advantages: [
      { title: 'Fast response', text: 'Your request is assessed with suitable options as quickly as possible.' },
      { title: 'Shortest routing', text: 'Direct, time-optimised flight planning with no transfers.' },
      { title: 'Right-sized aircraft', text: 'From small freighters to wide-bodies, depending on the load.' },
      { title: 'Constant updates', text: 'Clear status reports at every stage of the operation.' },
    ],
    capabilities: [
      'Rapid comparison of available aircraft options',
      'Short-notice coordination of flight and landing permits',
      'Coordination of cargo collection and transfer to the airport',
      'Customs and delivery arranged in advance at destination',
      'A single point of contact and status updates throughout',
    ],
  },
  'canli-hayvan-charter': {
    title: 'Live Animal Charter',
    navTitle: 'Live Animals',
    summary: 'From racehorses to zoo species — flights planned around the needs of each animal.',
    imageAlt: 'Thoroughbred racehorses galloping on a dirt track',
    detailImageAlt: 'Heavy-lift freighter on the apron at dusk',
    seo: {
      title: 'Live Animal Charter Flights',
      description:
        'Species-specific charter flights for racehorses, cattle and sheep, dolphins and wild animals for zoos and reserves.',
    },
    hero: {
      eyebrow: 'Live Animals',
      title: 'Every animal has',
      accent: 'its own flight plan.',
      lead: 'Transporting live animals requires specialist equipment, comprehensive forward planning and a high level of care. We offer charter solutions shaped around the needs of each animal.',
    },
    intro: {
      heading: 'Care is the plan itself.',
      paragraphs: [
        'Every animal has different transport requirements: cabin temperature and ventilation, crates and stalls, journey time, attendants and the veterinary rules of the destination country are all defined from day one.',
        'We agree these requirements with you and plan the aircraft type, loading arrangement and arrival procedures with animal welfare at the centre.',
      ],
      quote: 'Every species has different needs — and so should every plan.',
    },
    useCases: {
      heading: 'Species we receive requests for',
      lead: 'Equipment, attendance and documentation are planned separately for each species.',
      items: [
        { title: 'Racehorses', text: 'Thoroughbred transfers for racing and breeding.' },
        { title: 'Cattle & sheep', text: 'Breeding and livestock shipments.' },
        { title: 'Dolphins', text: 'Marine animals requiring special tanks and constant attendance.' },
        { title: 'Wild animals', text: 'Species for zoos and wildlife reserves.' },
        { title: 'Poultry', text: 'Bulk shipments of chickens and other poultry.' },
        { title: 'Hunting birds', text: 'Transport of valuable falcons and other birds of prey.' },
      ],
    },
    advantages: [
      { title: 'Species-specific planning', text: 'Equipment, layout and duration assessed for each species.' },
      { title: 'Climate control', text: 'Cabin temperature and ventilation confirmed with the operator.' },
      { title: 'Documentation', text: 'Coordination of veterinary and health certificates.' },
      { title: 'Minimal ground time', text: 'Waiting during loading and offloading kept to a minimum.' },
    ],
    capabilities: [
      'Planning of species-appropriate crates, stalls and equipment',
      'Confirmation of cabin temperature and ventilation with the operator',
      'Inclusion of attendants and grooms on the flight',
      'Coordination of veterinary and health certificate processes',
      'Ground handling planned for fast handover at the destination airport',
    ],
  },

  /* ------------------------------------------------------------------ PASSENGER */
  'vip-ozel-jet-charter': {
    title: 'VIP & Private Jet Charter',
    navTitle: 'VIP & Private Jets',
    summary: 'Private jet flights for business or leisure, with the schedule and route set by you.',
    imageAlt: 'Long-range business jet on the apron at dusk',
    detailImageAlt: 'Private jet cabin with leather seats',
    seo: {
      title: 'VIP & Private Jet Charter',
      description:
        'VIP and private jet charter for business and leisure travel: suitable aircraft options, VIP terminal, transfers and catering, with privacy and flexibility.',
    },
    hero: {
      eyebrow: 'VIP & Private Jets',
      title: 'Your schedule,',
      accent: 'your route.',
      lead: 'Whether for business or leisure, we plan your private jet request down to the finest detail to get you to the most suitable airport at the most convenient time.',
    },
    intro: {
      heading: 'A flight plan that respects your time.',
      paragraphs: [
        'A private jet charter frees you from airline timetables, connections and crowds. Your flight is planned around your meeting or your programme.',
        'We compare aircraft options for your passenger count, range and comfort expectations, and organise the VIP terminal, transfers and catering through a single point of contact.',
      ],
      quote: 'Your flight is planned around your schedule — not the reverse.',
    },
    useCases: {
      heading: 'Who is it for?',
      lead: 'For every journey where privacy, time and flexibility come first.',
      items: [
        { title: 'Executives', text: 'Meetings in several cities on the same day.' },
        { title: 'Families', text: 'Comfortable private travel with full discretion.' },
        { title: 'Official delegations', text: 'Protocol visits and delegation flights.' },
        { title: 'Artists & crews', text: 'Tight touring and event schedules.' },
      ],
    },
    advantages: [
      { title: 'Privacy', text: 'A flight plan built for you, with your privacy protected.' },
      { title: 'Time savings', text: 'VIP terminals and fast-track to board without waiting.' },
      { title: 'Comfort', text: 'Light, midsize and heavy cabin options to suit your needs.' },
      { title: 'Flexibility', text: 'The airport and time of your choice, with room for changes.' },
    ],
    capabilities: [
      'Light, midsize and heavy business jet options',
      'VIP terminal and fast-track arrangements',
      'Bespoke catering and cabin requests',
      'Coordination of airport transfers',
      'Multi-leg itineraries and short-notice changes',
    ],
  },
  'yolcu-grup-charter': {
    title: 'Passenger & Group Charter',
    navTitle: 'Passenger & Group',
    summary: 'Group flights for tour operators, corporate events, sports teams and field personnel.',
    imageAlt: 'Passenger aircraft on the apron',
    detailImageAlt: 'Passenger aircraft at the gate at sunset with ground vehicles',
    seo: {
      title: 'Passenger & Group Charter Flights',
      description:
        'Passenger and group charter flights for tour groups, corporate events, sports teams, official delegations and field crews, with bespoke catering, VIP lounges and dedicated check-in.',
    },
    hero: {
      eyebrow: 'Passenger & Group Charter',
      title: 'The whole team,',
      accent: 'on one aircraft.',
      lead: 'For tour groups, travel agencies, corporate events, meetings and government bodies, we plan individual and group charters with bespoke catering, VIP lounge access and dedicated check-in.',
    },
    intro: {
      heading: 'Large groups, one plan.',
      paragraphs: [
        'On scheduled flights, seat availability, different departure times and connections get in the way of a group programme. With a charter, the whole group travels at the same time, on the same aircraft, direct.',
        'We select the aircraft to match the size of the group, the route and the expected level of service, and arrange every detail from catering to VIP lounge access.',
      ],
    },
    useCases: {
      heading: 'Who is it for?',
      lead: 'From individual travellers to groups of several hundred.',
      items: [
        { title: 'VIP groups', text: 'Group flights for distinguished guests and invitees.' },
        { title: 'Sports teams', text: 'Teams, technical staff and supporter groups.' },
        { title: 'Official & diplomatic', text: 'Flights for government bodies and diplomatic delegations.' },
        { title: 'Field personnel', text: 'Crew rotations for construction, oil and gas projects.' },
        { title: 'Corporate events', text: 'Meetings, congresses, launches and incentive programmes.' },
        { title: 'Tours', text: 'Crew flights for music and fashion tours.' },
      ],
    },
    advantages: [
      { title: 'One departure time', text: 'The whole group travels together, on one programme.' },
      { title: 'Direct flights', text: 'Non-stop routings save time and coordination.' },
      { title: 'Tailored service', text: 'Bespoke catering, VIP lounges and dedicated check-in.' },
      { title: 'Rotation planning', text: 'Regular crew flights to and from project sites.' },
    ],
    capabilities: [
      'Aircraft selection by group size and range',
      'Bespoke catering and cabin service requests',
      'VIP lounge and dedicated check-in arrangements',
      'Capacity planning for equipment and excess baggage',
      'Planning of recurring crew rotation flights',
    ],
  },
  'ambulans-ucak': {
    title: 'Air Ambulance',
    navTitle: 'Air Ambulance',
    summary: 'Medical transfers, repatriation and rescue with intensive-care equipped aircraft and medical crews.',
    imageAlt: 'Medical cabin fitted with a stretcher and patient-transfer equipment',
    detailImageAlt: 'Aircraft on approach at night over runway lights',
    seo: {
      title: 'Air Ambulance Services',
      description:
        '24/7 air ambulance for medical interventions, repatriation and rescue operations: intensive-care equipment, with at least one doctor and one licensed nurse on every flight.',
    },
    hero: {
      eyebrow: 'Air Ambulance',
      title: 'Flights where',
      accent: 'every minute counts.',
      lead: 'For medical interventions, repatriations and rescue operations, we are available 24/7 with an experienced team and intensive-care capable aircraft that can be arranged at short notice.',
    },
    intro: {
      heading: 'Patient safety at the centre of the plan.',
      paragraphs: [
        'The medical crews on our air ambulance flights are qualified in in-flight patient care. Every flight carries at least one doctor and one licensed nurse.',
        'The aircraft are fitted with advanced medical equipment to ensure the patient is transported with care. Through our global network of service providers, we respond quickly when time is critical.',
      ],
      quote: 'Health and patient safety always come first.',
    },
    useCases: {
      heading: 'When is it needed?',
      lead: 'For any medical situation in which travelling on a scheduled flight is impossible or unsafe.',
      items: [
        { title: 'International patient transfer', text: 'Transfer to a medical facility in another country for treatment.' },
        { title: 'Repatriation', text: 'Bringing a patient who fell ill abroad back home.' },
        { title: 'Rescue operations', text: 'Medical evacuation from disaster and crisis zones.' },
        { title: 'Insurance & assistance', text: 'Medical flights arranged on behalf of assistance companies.' },
      ],
    },
    advantages: [
      { title: 'Available 24/7', text: 'Rapid organisation for medical emergencies, day and night.' },
      { title: 'Intensive-care equipment', text: 'Aircraft equipped to provide full intensive care.' },
      { title: 'Expert medical crew', text: 'At least one doctor and one licensed nurse on every flight.' },
      { title: 'Current standards', text: 'Crews trained to current guidelines and regulations.' },
    ],
    process: [
      { title: 'Medical information', text: 'The patient’s condition and medical reports are shared.' },
      { title: 'Fitness to fly', text: 'The medical team assesses transfer conditions and equipment needs.' },
      { title: 'Aircraft & crew', text: 'A suitable air ambulance and medical crew are assigned.' },
      { title: 'Permits & transfers', text: 'Flight permits and ground ambulance connections are coordinated.' },
      { title: 'Flight & handover', text: 'The patient is accompanied by the medical crew to the destination.' },
    ],
    capabilities: [
      'Air ambulances with full intensive-care equipment',
      'At least one doctor and one licensed nurse on every flight',
      'Crews trained to current guidelines and regulations',
      'Pre-flight assessment of medical equipment requirements',
      'Rapid organisation through a global service provider network',
    ],
  },

  /* ------------------------------------------------------------------ INSTITUTIONAL */
  'devlet-askeri-charter': {
    title: 'Government & Military Charter',
    navTitle: 'Government & Military',
    summary: 'Cargo and personnel charter arranged for government bodies and military organisations.',
    imageAlt: 'Heavy-lift freighter on the apron at sunset',
    detailImageAlt: 'Four-engine military transport aircraft seen from below',
    seo: {
      title: 'Government & Military Charter Flights',
      description:
        'Military cargo and personnel charter for government bodies and military organisations: armoured vehicles, helicopters and naval equipment, with diplomatic clearance coordination.',
    },
    hero: {
      eyebrow: 'Government & Military',
      title: 'Sensitive missions,',
      accent: 'rigorous organisation.',
      lead: 'We organise military cargo charters for government bodies and military organisations, building the confidentiality, permit processes and timing discipline these operations demand into every step of the plan.',
    },
    intro: {
      heading: 'Permits, security and timing are part of one plan.',
      paragraphs: [
        'Military and government shipments differ from standard cargo operations because of the nature of the equipment, the permit requirements of the countries along the route and the sensitivity of the delivery time.',
        'Our team organises these processes urgently and in an orderly way, responding to your requests quickly and professionally.',
      ],
    },
    useCases: {
      heading: 'Equipment and missions',
      lead: 'From heavy and outsized military equipment to personnel and delegation flights.',
      items: [
        { title: 'Armoured fighting vehicles', text: 'Land vehicles that require heavy-lift aircraft.' },
        { title: 'Military helicopters', text: 'Helicopters transported partially dismantled or complete.' },
        { title: 'Naval equipment', text: 'Equipment and systems for naval forces.' },
        { title: 'Amphibious vehicles', text: 'Vehicles requiring specific dimensional and weight planning.' },
        { title: 'Personnel movements', text: 'Passenger charter for military personnel.' },
        { title: 'Official delegations', text: 'Diplomatic and official delegation flights.' },
      ],
    },
    advantages: [
      { title: 'Confidentiality', text: 'Information shared only to the extent the operation requires.' },
      { title: 'Permit processes', text: 'Coordination of diplomatic and overflight clearances.' },
      { title: 'Heavy equipment', text: 'Suitable aircraft types for outsized military loads.' },
      { title: 'Fast response', text: 'Urgent organisation for time-sensitive missions.' },
    ],
    capabilities: [
      'Sourcing aircraft suited to military and government cargo',
      'Coordination of diplomatic and overflight clearances',
      'Regulation-compliant planning for shipments containing dangerous goods',
      'Organisation of personnel and delegation flights',
      'Controlled information flow for operations requiring confidentiality',
    ],
  },
  'yardim-malzemesi-charter': {
    title: 'Humanitarian Aid Charter',
    navTitle: 'Humanitarian Aid',
    summary: 'Fast, orderly delivery of medicine, food, shelter and power equipment to disaster areas.',
    imageAlt: 'Crane lifting a prefabricated hospital module',
    detailImageAlt: 'Prefabricated module inside a freighter’s hold',
    seo: {
      title: 'Humanitarian Aid Charter Flights',
      description:
        'Urgent and orderly charter delivery of relief supplies to disaster areas: medicine, protective equipment, food, prefabricated shelters, tents and generators.',
    },
    hero: {
      eyebrow: 'Humanitarian Aid',
      title: 'Good intentions aren’t enough;',
      accent: 'logistics make the difference.',
      lead: 'We organise flights with our expert team so that relief supplies reach disaster-affected regions urgently and in an orderly way.',
    },
    intro: {
      heading: 'In a disaster zone, every hour counts.',
      paragraphs: [
        'Relief flights require organisation that is fast yet orderly, because of hard-to-reach airports, changing conditions on the ground and coordination between multiple agencies.',
        'Working with relief organisations, government bodies and companies, our team builds a flight plan suited to the nature of the cargo and the capacity of the destination airport.',
      ],
      quote: 'Aid only helps once it reaches the people who need it.',
    },
    useCases: {
      heading: 'Supplies we carry',
      lead: 'Cargo needed from the first days after a disaster through to reconstruction.',
      items: [
        { title: 'Medicine', text: 'Medicines for healthcare facilities and field hospitals.' },
        { title: 'Protective equipment', text: 'Masks, gloves, gowns and other protective supplies.' },
        { title: 'Food & essentials', text: 'Food parcels and basic living supplies.' },
        { title: 'Shelter', text: 'Prefabricated shelters and tents.' },
        { title: 'Power', text: 'Generators and field power equipment.' },
        { title: 'Field equipment', text: 'Drilling equipment and pipes.' },
      ],
    },
    advantages: [
      { title: 'Rapid organisation', text: 'Flight plans prepared at short notice in emergencies.' },
      { title: 'Agency coordination', text: 'Working smoothly with relief organisations and authorities.' },
      { title: 'Suitable aircraft', text: 'Selected for the capacity and constraints of the destination airport.' },
      { title: 'Steady flow', text: 'Recurring flights for a sustainable air bridge.' },
    ],
    capabilities: [
      'Operational coordination with relief organisations and government bodies',
      'Aircraft selection matched to destination airport capacity',
      'Load planning for mixed consignments',
      'Follow-up of urgent flight and landing permits',
      'Planning of recurring humanitarian air bridge flights',
    ],
  },
  'eglence-spor-charter': {
    title: 'Entertainment & Sports Charter',
    navTitle: 'Entertainment & Sports',
    summary: 'Flights locked to the calendar for tour equipment, film production gear and sporting events.',
    imageAlt: 'Instruments on a hazy stage under blue spotlights',
    detailImageAlt: 'Freighter with its nose door open for loading',
    seo: {
      title: 'Entertainment & Sports Charter Flights',
      description:
        'Charter for concert tours, film productions and sporting events: stage, sound, set and sports equipment, with crew and cargo planned around your calendar.',
    },
    hero: {
      eyebrow: 'Entertainment & Sports',
      title: 'Before the curtain rises,',
      accent: 'the kit is on stage.',
      lead: 'In entertainment and sport, tickets are sold in advance — missing a deadline is not an option. We plan the logistics of your tours, productions and sporting events around the calendar.',
    },
    intro: {
      heading: 'Fixed dates, zero tolerance.',
      paragraphs: [
        'A tour’s stage and sound system, a film set’s equipment or a sporting event’s kit has to be at a given place on a given date.',
        'We build the loading and flight plan around the event calendar and organise crew and equipment on the same or separate flights.',
      ],
      quote: 'Missing a deadline is not an option.',
    },
    useCases: {
      heading: 'Who is it for?',
      lead: 'For every event with a published date that cannot be moved.',
      items: [
        { title: 'Film productions', text: 'Set equipment for major productions.' },
        { title: 'Concerts & tours', text: 'Stage and sound equipment for world-class artists.' },
        { title: 'Sporting events', text: 'Sports equipment for top-level events.' },
        { title: 'Teams & crews', text: 'Athletes, technical staff and production crews.' },
      ],
    },
    advantages: [
      { title: 'Calendar-led', text: 'The flight plan is built backwards from the event date.' },
      { title: 'Sensitive equipment', text: 'Careful loading coordination for high-value equipment.' },
      { title: 'Crew + cargo', text: 'Passenger and cargo charter planned as one operation.' },
      { title: 'Multi-stop routings', text: 'Consecutive flights that follow the tour programme.' },
    ],
    capabilities: [
      'Multi-leg flight planning around the tour calendar',
      'Loading coordination for sensitive, high-value equipment',
      'Crew and equipment planned within the same operation',
      'Coordination of temporary import documents (e.g. ATA Carnet)',
      'Combined passenger and cargo charter organisation',
    ],
  },
};

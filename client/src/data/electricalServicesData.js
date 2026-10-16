export const SERVICE_CATEGORIES = [
  { id: 'all', name: 'All Services', icon: 'Layers' },
  { id: 'testing', name: 'Testing & Calibration', icon: 'ShieldCheck' },
  { id: 'installation', name: 'Installation & Erection', icon: 'Wrench' },
  { id: 'maintenance', name: 'Maintenance & AMC', icon: 'Activity' },
  { id: 'filtration', name: 'Oil Filtration & OLTC', icon: 'Cpu' },
  { id: 'cable', name: 'HT/LT Cable & Jointing', icon: 'Zap' },
  { id: 'safety', name: 'Safety Audit & Inspection', icon: 'AlertTriangle' },
  { id: 'contracting', name: 'Turnkey Contracting & Substation', icon: 'Building2' }
];

export const ELECTRICAL_SERVICES_LIST = [
  // ── 1. TESTING SERVICES ──
  {
    id: 'hv-circuit-breaker-testing',
    category: 'testing',
    title: 'High Voltage Circuit Breaker Testing Services',
    badge: 'NABL Calibrated Kit',
    badgeColor: '#0284c7',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80',
    shortDesc: 'Comprehensive timing analysis, dynamic contact resistance measurement (DCRM), and insulation testing for VCB, SF6, and ACB breakers up to 220kV.',
    features: [
      'Breaker Closing / Opening Time & Contact Bounce Measurement',
      'Contact Resistance Test (CRM / Micro-ohm meter)',
      'High Voltage Hi-Pot Testing & Vacuum Bottle Integrity',
      'Auxiliary contact sync & trip coil health analysis'
    ],
    standards: 'IS 13118 / IEC 62271-100',
    suitableFor: 'Industrial manufacturing plants, 11kV/33kV substations, utility grids, and solar parks.'
  },
  {
    id: 'transformer-testing-services',
    category: 'testing',
    title: 'Transformer Testing Services (Routine & Diagnostic)',
    badge: 'Core Diagnostic',
    badgeColor: '#059669',
    image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=800&q=80',
    shortDesc: 'Precision testing for power and distribution transformers including Turns Ratio (TTR), Winding Resistance, Magnetic Balance, and Tan Delta capacitance dissipation.',
    features: [
      'Insulation Resistance (IR) & Polarization Index (PI)',
      'Transformer Turns Ratio (TTR) & Vector Group confirmation',
      'Winding Resistance Measurement on all tap positions',
      'Capacitance & Tan Delta (Dielectric Dissipation Factor)'
    ],
    standards: 'IS 2026 / IEC 60076 / IEEE C57.12',
    suitableFor: 'Industrial units, power utilities, DISCOM approval, and pre-commissioning certification.'
  },
  {
    id: 'relay-testing-service',
    category: 'testing',
    title: 'Numerical & Numerical Relay Testing & Calibration',
    badge: 'Protection Relays',
    badgeColor: '#7c3aed',
    image: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=800&q=80',
    shortDesc: 'Secondary injection testing, pick-up/drop-off ratio, curve coordination, and protection relay calibration (Overcurrent, Earth Fault, Differential, REF).',
    features: [
      'Multi-phase Secondary Current/Voltage Injection',
      'IDMT & Definite Time Curve verification & validation',
      'Differential, REF & Under/Over Voltage protection checks',
      'Detailed test certificates for CEA & DISCOM audits'
    ],
    standards: 'IEC 60255 / CEA Safety Regulations 2010',
    suitableFor: 'Switchgear control panels, HT consumers, and substations.'
  },
  {
    id: 'earth-pit-testing-service',
    category: 'testing',
    title: 'Earth Pit & Soil Resistivity Testing Services',
    badge: 'Statutory Safety',
    badgeColor: '#d97706',
    image: 'https://images.unsplash.com/photo-1541888946425-d0fbb186156f?auto=format&fit=crop&w=800&q=80',
    shortDesc: 'Fall of potential 3-point / 4-point Wenner method soil resistivity and earthing pit resistance measurement using digital earth testers with certified compliance report.',
    features: [
      'Earth Electrode Resistance measurement (Value < 1.0 Ohm)',
      'Soil Resistivity survey for greenfield substation design',
      'Chemical earthing pit conditioning & electrode replacement',
      'Equipotential bonding & earthing grid continuity check'
    ],
    standards: 'IS 3043:2018 / IEEE 81 / CEA Rule 2010',
    suitableFor: 'Factories, hospital substations, commercial buildings, and solar plants.'
  },
  {
    id: 'bdv-kit-calibration',
    category: 'testing',
    title: 'BDV Test Kits & Electrical Calibration Service',
    badge: 'Traceable Standards',
    badgeColor: '#0891b2',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80',
    shortDesc: 'On-site and lab calibration for Transformer Oil Breakdown Voltage (BDV) test sets (up to 100kV), insulation megohmmeters, clamp meters, and micro-ohmmeters.',
    features: [
      'Precision calibration up to 100kV AC sparkover voltage',
      'Traceability certificates linked to National Physical Laboratory (NPL)',
      'Rate-of-rise voltage verification (2 kV/sec standard)',
      'Electrode gap gauge calibration (2.5mm standard gauge)'
    ],
    standards: 'IS 6792 / IEC 60156',
    suitableFor: 'Laboratories, manufacturing QA departments, and substation maintenance teams.'
  },

  // ── 2. INSTALLATION & ERECTION ──
  {
    id: 'transformer-installation-service',
    category: 'installation',
    title: 'Power & Distribution Transformer Installation',
    badge: 'Turnkey Installation',
    badgeColor: '#2563eb',
    image: 'https://images.unsplash.com/photo-1509390874185-004554b79c3f?auto=format&fit=crop&w=800&q=80',
    shortDesc: 'Complete foundation positioning, skidding, bushing mounting, radiator assembly, conservator fitting, nitrogen purging, and dry-out of transformers up to 25 MVA.',
    features: [
      'Plinth placement, alignment, and roller locking',
      'Conservator tank, silica gel breather, and Buchholz relay mounting',
      'Bushing and Marshalling Box wiring with interlock testing',
      'Pre-charging testing & DISCOM charging approval coordination'
    ],
    standards: 'IS 10028 (Code of Practice for Transformer Installation)',
    suitableFor: 'New industrial connections, captive power plants, and substation expansions.'
  },
  {
    id: 'ht-panel-installation-service',
    category: 'installation',
    title: 'HT Panel & Switchgear Installation Services',
    badge: '11kV / 33kV Panels',
    badgeColor: '#059669',
    image: 'https://images.unsplash.com/photo-1581092162384-8987c1d64718?auto=format&fit=crop&w=800&q=80',
    shortDesc: 'Erection, base channel fabrication, busbar coupling, control cabling, and inter-panel wiring of 11kV & 33kV Indoor/Outdoor Vacuum Circuit Breaker (VCB) panels.',
    features: [
      'Panel base frame leveling and grouting with vibration dampening',
      'Copper/Aluminum busbar torque tightening & heat shrink sleeving',
      'CT/PT connection, metering circuit wiring & DC battery bank hookup',
      'Mechanical interlocking & draw-out rack-in/rack-out validation'
    ],
    standards: 'IEC 62271-200 / IS 3427',
    suitableFor: 'Factory electrical rooms, commercial developments, and utility distribution grids.'
  },
  {
    id: 'substation-erection-services',
    category: 'installation',
    title: 'Electrical Substation Installation & Erection (11kV to 132kV)',
    badge: 'Substation EPC',
    badgeColor: '#b45309',
    image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=800&q=80',
    shortDesc: 'Turnkey erection of outdoor switchyards and indoor compact substations including structural gantries, isolators, lightning arrestors, and yard illumination.',
    features: [
      'Gantry structure erection, stringing & tension insulator assembly',
      'Gang Operated Switches (GOAB/Isolator) mounting & alignment',
      'Surge arrestor (LA) and current/voltage instrument transformers',
      'Yard fencing, gravel filling, earth mat interconnection & CEIG liaising'
    ],
    standards: 'CEA Regulations / CBIP Substation Manual',
    suitableFor: 'Heavy manufacturing plants, mining facilities, cement, steel, and solar parks.'
  },
  {
    id: 'earthing-installation-service',
    category: 'installation',
    title: 'Chemical Earthing & Lightning Arrester Installation',
    badge: 'Surge Protection',
    badgeColor: '#0d9488',
    image: 'https://images.unsplash.com/photo-1541888946425-d0fbb186156f?auto=format&fit=crop&w=800&q=80',
    shortDesc: 'Maintenance-free copper-bonded chemical earthing electrodes, Earth Enhancement Material (BFC), and Early Streamer Emission (ESE) lightning protection systems.',
    features: [
      'Copper bonded steel rods (250+ micron coating) with deep boring',
      'Advanced carbonaceous earth conductive backfill compound',
      'ESE lightning arrester installation with digital flash stroke counter',
      'Complete interconnection test with earth pits inspection chamber'
    ],
    standards: 'IS 3043:2018 / NFC 17-102 / IEC 62305',
    suitableFor: 'Sensitive electronic equipment, high-rise buildings, data centres, and factories.'
  },
  {
    id: 'dg-erection-services',
    category: 'installation',
    title: 'Diesel Generator (DG Set) & Synchronizing Panel Erection',
    badge: 'Backup Power',
    badgeColor: '#4f46e5',
    image: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=800&q=80',
    shortDesc: 'Turnkey installation of acoustic DG sets (up to 2000 kVA), exhaust chimney piping, fuel day-tank piping, and Auto Mains Failure (AMF) synchronizing panels.',
    features: [
      'DG base foundation positioning with anti-vibration mounts (AVM)',
      'MS exhaust flue gas piping with mineral wool lagging & cladding',
      'AMF & Auto Synchronizing Panel integration with PLC automation',
      'State Pollution Control Board (SPCB) acoustic & emission compliance'
    ],
    standards: 'CPCB IV+ Emission Norms / IS 10000',
    suitableFor: 'Continuous process industries, hospitals, hotels, and IT parks.'
  },

  // ── 3. MAINTENANCE & AMC ──
  {
    id: 'transformer-maintenance-service',
    category: 'maintenance',
    title: 'Power & Distribution Transformer Overhauling & Maintenance',
    badge: 'Preventive & Breakdown',
    badgeColor: '#e11d48',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80',
    shortDesc: 'Routine preventative, predictive, and emergency overhauling for oil-cooled and dry-type transformers to extend operational lifespan and eliminate outages.',
    features: [
      'Complete gasket replacement (cork / neoprene) to stop oil leakages',
      'Silica gel replacement, oil cup servicing & diaphragm check',
      'Bushing replacement, stud cleaning & terminal torque re-checking',
      'OTI & WTI temperature indicators calibration and alarm trip test'
    ],
    standards: 'IS 10028 Part-3 / IEEE C57.104',
    suitableFor: 'Industries requiring uninterrupted 24x7 power without sudden transformer failures.'
  },
  {
    id: 'electrical-amc-service',
    category: 'maintenance',
    title: 'Comprehensive & Non-Comprehensive Electrical AMC Services',
    badge: '24x7 SLA Support',
    badgeColor: '#059669',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80',
    shortDesc: 'Annual Maintenance Contracts (AMC) covering transformers, HT switchgear, LT distribution panels, APFC power factor capacitor banks, and cabling.',
    features: [
      'Scheduled monthly/quarterly preventive inspection visits',
      'Emergency breakdown attendance within guaranteed SLA window',
      'Capacitor health checkup to maintain PF > 0.98 and avoid DISCOM penalties',
      'Periodic thermography and contact tightening to prevent flashovers'
    ],
    standards: 'Indian Electricity Rules 1956 / CEA Guidelines',
    suitableFor: 'Textile mills, engineering units, shopping malls, and corporate towers.'
  },
  {
    id: 'switchgear-overhauling',
    category: 'maintenance',
    title: 'HT & LT Switchgear Servicing & Retrofitting',
    badge: 'Panel Modernization',
    badgeColor: '#0891b2',
    image: 'https://images.unsplash.com/photo-1581092162384-8987c1d64718?auto=format&fit=crop&w=800&q=80',
    shortDesc: 'Complete overhauling, contact lubrication, latch mechanism servicing, and old OCB/MOCB to modern VCB retrofitting with customized adapter trolleys.',
    features: [
      'Arc chute inspection, vacuum interrupter bottle condition check',
      'Operating mechanism greasing with high-grade synthetic lubricants',
      'Shunt trip and under-voltage coil impedance check',
      'Modern digital relay and protection upgrade retrofitting'
    ],
    standards: 'IEC 62271 / IS 13118',
    suitableFor: 'Older industrial plants seeking modernization without purchasing full new panels.'
  },

  // ── 4. OIL FILTRATION & OLTC ──
  {
    id: 'transformer-oil-filtration',
    category: 'filtration',
    title: 'Ultra-High Vacuum Transformer Oil Filtration & Dehydration',
    badge: 'On-Site Mobile Rig',
    badgeColor: '#2563eb',
    image: 'https://images.unsplash.com/photo-1509390874185-004554b79c3f?auto=format&fit=crop&w=800&q=80',
    shortDesc: 'High-vacuum double stage mobile dehydration plants (up to 6000 LPH) to eliminate moisture, dissolved gases, sludge, and boost BDV dielectric strength above 70 kV.',
    features: [
      'Dielectric breakdown voltage (BDV) enhancement from 25kV to > 70kV',
      'Moisture content reduction to < 10 ppm (parts per million)',
      'Dissolved gas removal (degasification) and carbon particle filtering',
      'Pre-filtration and post-filtration oil sample testing with lab report'
    ],
    standards: 'IS 1866 / IS 335 / IEC 60422',
    suitableFor: 'Distribution & Power transformers from 100 kVA up to 50 MVA.'
  },
  {
    id: 'oltc-spares-servicing',
    category: 'filtration',
    title: 'On-Load Tap Changer (OLTC) Servicing, Spares & Overhauling',
    badge: 'OLTC Specialists',
    badgeColor: '#b45309',
    image: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=800&q=80',
    shortDesc: 'Comprehensive servicing, divertor switch overhauling, contact resistance check, and genuine copper contact spares for CTR, Easun, Alstom, and BHEL OLTCs.',
    features: [
      'Divertor switch contact replacement & transition resistor test',
      'Motor Drive Unit (MDU) gears, limit switches & interlock repair',
      'Supply of 225 kVA, 315 kVA, 345 kVA copper OLTC contact spares',
      'OLTC oil filtration and compartment seal gasket replacement'
    ],
    standards: 'IEC 60214 / IS 8468',
    suitableFor: 'High capacity step-down substations and continuous steel/rolling mills.'
  },

  // ── 5. HT/LT CABLE & JOINTING ──
  {
    id: 'ht-cable-laying-service',
    category: 'cable',
    title: 'HT & LT Heavy Duty Cable Laying Services',
    badge: 'Trench & Trays',
    badgeColor: '#059669',
    image: 'https://images.unsplash.com/photo-1541888946425-d0fbb186156f?auto=format&fit=crop&w=800&q=80',
    shortDesc: 'Trench excavation, sand bedding, protective brick laying, cable tray installation, and mechanized laying of XLPE/PVC armored cables from 1.1kV to 33kV.',
    features: [
      'Underground trenching, road crossing via HDD (Horizontal Directional Drilling)',
      'Perforated / Ladder type GI cable tray erection with structural support',
      'Drum pulling with rollers to ensure zero jacket damage and elongation',
      'Cable route marker installation and post-laying Megger/Hi-Pot test'
    ],
    standards: 'IS 1255 (Code of Practice for Installation & Maintenance of Power Cables)',
    suitableFor: 'Solar parks, industrial townships, manufacturing units, and power plants.'
  },
  {
    id: 'cable-jointing-termination',
    category: 'cable',
    title: 'HT Cable Heat/Cold Shrink Jointing & Termination Services',
    badge: 'Raychem / 3M Certified',
    badgeColor: '#7c3aed',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80',
    shortDesc: 'Certified jointing technicians for 11kV, 22kV, and 33kV indoor/outdoor cable terminations, straight-through joints, and transition joints using branded kits.',
    features: [
      'Heat shrinkable and cold shrinkable kits (Raychem, 3M, Densons certified)',
      'Precision insulation stripping without damaging metallic screen or core',
      'Stress control mastic application and heavy-duty brass cable glands',
      'DC high voltage withstand test post-termination'
    ],
    standards: 'IS 13573 / IEC 60502-4 / IEEE 48',
    suitableFor: 'Connecting HT panels, transformers, overhead line transitions, and RMUs.'
  },
  {
    id: 'fire-retardant-cable-coating',
    category: 'cable',
    title: 'Fire Retardant Cable Coating & Fire Barrier Paint',
    badge: 'Fire Safety Certified',
    badgeColor: '#dc2626',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80',
    shortDesc: 'Application of intumescent fire retardant coatings and ablative paint on grouped power cables to prevent fire spread, flame propagation, and halogen release.',
    features: [
      'Intumescent coating expanding up to 50x to create thermal barrier',
      'Class 1 flame retardant rating according to BS 476 and IEC 60332',
      'Fire stop barrier pillows and sealants for wall/floor cable penetrations',
      'Insurance compliance certificate for reduced industrial fire risk premium'
    ],
    standards: 'IEC 60332-3 / IS 1255 / BS 476',
    suitableFor: 'Control rooms, cable tunnels, power generating stations, and basements.'
  },

  // ── 6. SAFETY AUDIT & INSPECTION ──
  {
    id: 'electrical-safety-audit',
    category: 'safety',
    title: 'Comprehensive Electrical Safety Audit & Compliance',
    badge: 'Statutory Audit',
    badgeColor: '#dc2626',
    image: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=800&q=80',
    shortDesc: 'Detailed statutory inspection by Chartered Engineers & certified auditors to identify shock hazards, fire ignition risks, overloads, and earthing faults.',
    features: [
      'Earthing network and loop impedance measurement',
      'Short circuit analysis, breaker coordination and arc-flash assessment',
      'Physical inspection of panel boards, fuses, wiring and protective PPE',
      'Actionable compliance report aligned with Central Electricity Authority (CEA) norms'
    ],
    standards: 'CEA Regulations 2010 / IS 14489 (Code of Practice on Occupational Safety Audits)',
    suitableFor: 'Factories Act compliance, DISCOM renewals, corporate audits, and insurance.'
  },
  {
    id: 'infrared-thermography-audit',
    category: 'safety',
    title: 'Infrared Thermography & Thermal Hotspot Inspection',
    badge: 'FLIR Thermal Camera',
    badgeColor: '#ea580c',
    image: 'https://images.unsplash.com/photo-1581092162384-8987c1d64718?auto=format&fit=crop&w=800&q=80',
    shortDesc: 'Non-contact online infrared scanning of electrical switchboards, busbars, circuit breakers, and cable joints under active load to detect thermal anomalies before failure.',
    features: [
      'High-resolution radiometric thermal images using FLIR industrial cameras',
      'Delta-T (temperature difference) classification per NETA guidelines',
      'Pinpoint detection of loose lug connections, unbalanced phases, and harmonic heating',
      'Prioritized corrective repair schedule to eliminate sudden plant shutdowns'
    ],
    standards: 'NETA MTS / ASTM E1934 (Thermography Examination of Electrical Installations)',
    suitableFor: 'Continuous process plants, data centres, paper mills, and pharmaceutical units.'
  },
  {
    id: 'third-party-electrical-inspection',
    category: 'safety',
    title: 'Third-Party Electrical Inspection & CEIG Approval Liaison',
    badge: 'Chartered Engineer Approval',
    badgeColor: '#0284c7',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80',
    shortDesc: 'Independent technical audit and certification by registered Chartered Engineers for new installations, solar grid integration, and Chief Electrical Inspector (CEIG) filings.',
    features: [
      'Pre-commissioning physical and electrical verification of equipment',
      'Verification of SLD (Single Line Diagrams) and CEA statutory safety norms',
      'Chartered Engineer inspection certificate and fitness report',
      'Assistance in filing and obtaining statutory CEIG energization approval'
    ],
    standards: 'Rule 63/46 of Indian Electricity Rules / CEA 2010',
    suitableFor: 'Solar MW projects, captive power plants, and industrial HT connections.'
  },

  // ── 7. CONTRACTING & SUBSTATION ──
  {
    id: 'ht-electrical-contracting',
    category: 'contracting',
    title: 'Turnkey HT/LT Electrical Contracting & Industrial Works',
    badge: 'Class-A Licensed Contractor',
    badgeColor: '#059669',
    image: 'https://images.unsplash.com/photo-1509390874185-004554b79c3f?auto=format&fit=crop&w=800&q=80',
    shortDesc: 'End-to-end design, procurement, supply, installation, testing, and commissioning of factory electrical infrastructure, rising mains, bus ducts, and lighting.',
    features: [
      'Turnkey electrical EPC for greenfield plants and commercial complexes',
      'Sandwich bus trunking and rising mains installation',
      'High-bay industrial LED lighting and automatic lux control systems',
      'Material procurement with strict quality inspection and test certificates'
    ],
    standards: 'National Electrical Code (NEC) / IS 732',
    suitableFor: 'Industrial developers, warehouse logistic hubs, and factory owners.'
  },
  {
    id: 'overhead-line-erection',
    category: 'contracting',
    title: '11kV / 33kV Overhead Transmission Line Erection Services',
    badge: 'Power Distribution',
    badgeColor: '#0284c7',
    image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=800&q=80',
    shortDesc: 'Erection of RSJ / PCC poles, steel tubular poles, lattice towers, ACSR conductor stringing, disc insulators, horn gaps, and lightning protection lines.',
    features: [
      'Pole pit excavation, muffing, stay wire installation & strut erection',
      'Dog, Panther, and Wolf ACSR conductor stringing with proper sag tensioning',
      'AB Switch (Air Break), DO Fuse, and Lightning Arrester installation',
      'Clearance compliance as per CEA Safety Regulations'
    ],
    standards: 'IS 5613 / CEA Transmission Guidelines',
    suitableFor: 'Dedicated power feeders, solar evacuation lines, and DISCOM village grids.'
  },
  {
    id: 'transformer-rental-services',
    category: 'contracting',
    title: 'Industrial Transformer Rental Services (100 kVA to 5000 kVA)',
    badge: 'Immediate Mobilization',
    badgeColor: '#d97706',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80',
    shortDesc: 'Quick emergency deployment of step-down/step-up oil cooled transformers on rental basis to restore production during sudden plant breakdowns.',
    features: [
      'Ready-to-dispatch stock of 11kV/433V and 33kV/433V transformers',
      'Complete pre-delivery test reports with BDV and ratio verified',
      'Transport, plinth positioning, cable termination, and site charging support',
      'Flexible short-term and long-term rental agreements'
    ],
    standards: 'IS 2026 / Pre-Tested Ready Units',
    suitableFor: 'Breakdown emergencies, seasonal factories, shutdown overhauls, and projects.'
  }
];

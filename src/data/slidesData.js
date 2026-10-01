export const slidesData = [
  {
    slideNumber: 1,
    title: "TITLE & TEAM IDENTIFICATION",
    headerTag: "Smart India Hackathon 2026",
    subtitle: "Problem Statement ID: 26021 | Ministry of MSME / KVIC",
    content: {
      problemId: "26021",
      teamId: "167577",
      teamName: "Arise",
      category: "Software (with Edge IoT Integration)",
      theme: "Agriculture, FoodTech & Rural Development",
      psTitle: "Honey Chain: A block chain-based system for honey traceability and smart beekeeping management.",
      mentor: "Dr. K Arun Kumar",
      teamLead: "Harini",
      members: ["Ananthi", "Amrin", "Bhubana", "Kaviya", "Subhaharini"],
      insights: [
        { title: "Adulteration Defense", desc: "Bypasses ₹20,000 lab tests using 5-second Optical Polarimetry ([α]D) to detect C3/C4 & rice syrups." },
        { title: "Anti-Clone & Anti-Refill", desc: "Enforces Mass-Conservation Smart Contracts (total jars = harvest scale weight) + Burn-On-Open tokens." },
        { title: "100% Traditional Hive Fit", desc: "ApiVera Pod retrofits onto Himalayan Wall Hives (Jalokha), Log Hives, Mud Pots, and old boxes in 10s." },
        { title: "Bio-Acoustic Pre-Emption", desc: "Detects 240–280 Hz queen piping to warn farmers 48 hours before swarming via regional WhatsApp audio." }
      ]
    }
  },
  {
    slideNumber: 2,
    title: "PROPOSED SOLUTION & INNOVATION",
    headerTag: "ApiVera Chain Architecture",
    subtitle: "Indigenous Bio-Optical & Mass-Conserved Honey Provenance Ecosystem",
    content: {
      architectureLayers: [
        { layer: "Hive Layer", title: "ApiVera Pod", desc: "Monitors acoustic frequencies, weight, and VOC gases to predict swarms and brood diseases." },
        { layer: "Harvest Layer", title: "ApiVera OptiLens", desc: "Verifies raw honey purity in 5 seconds via a ₹50 smartphone optical clip." },
        { layer: "Retail Layer", title: "ApiVera Ledger", desc: "Locks minted jars to harvested weight and burns tokens on first open to stop bottle refilling." }
      ],
      coreProblemSolving: [
        "Stops Adulteration: Detects synthetic C3/C4 syrups in-field, eliminating reliance on ₹20,000 lab NMR tests.",
        "Cuts Middlemen: Direct farm-to-consumer traceability increases beekeeper earnings from ₹90/kg to ₹380/kg.",
        "Prevents Colony Loss: Delivers native-language voice alerts 48 hours before swarming to save bee biomass."
      ],
      innovations: [
        { icon: "optical", title: "5-Second Optical Purity Check", desc: "Uses light rotation on a ₹50 mobile lens to instantly catch fake sugar syrups without expensive lab tests." },
        { icon: "seal", title: "Anti-Refill Smart Seal", desc: "Caps total jar QR codes to actual harvest weight and burns the digital token on first open to stop bottle refilling." },
        { icon: "acoustic", title: "Bio-Acoustic Swarm Warning", desc: "Listens to bee sound frequencies to alert the farmer 48 hours before bees escape (swarming)." },
        { icon: "moisture", title: "Smart Moisture Tracker", desc: "Measures nightly water evaporation to notify the farmer when honey is 100% ripe (≤18% moisture) before harvest." },
        { icon: "retrofit", title: "Universal 10-Second Retrofit", desc: "Fits traditional Himalayan Wall Hives, Hollow Logs, Mud Pots, and old wooden boxes with zero drilling." }
      ]
    }
  },
  {
    slideNumber: 3,
    title: "TECHNICAL APPROACH & METHODOLOGY",
    headerTag: "End-to-End System Topology",
    subtitle: "Hardware Edge Stack, Blockchain Integration & Traceability Flow",
    content: {
      hardwareStack: [
        { component: "ESP32-C3 RISC-V", desc: "Ultra-low-power dual-core MCU (14.2 µA deep-sleep) running FreeRTOS & STFT spectral analysis." },
        { component: "SX1262 LoRa (865 MHz)", desc: "Sub-GHz IN865 band mesh transmitting up to 10 km from deep forests without SIM cards." },
        { component: "Bosch BME688 + SGP40", desc: "Volatile organic compound gas sensor detecting Foulbrood isovaleric acid and alarm pheromones." },
        { component: "INMP441 I2S MEMS Mic", desc: "24-bit 8 kHz acoustic sensor capturing thoracic flight muscle vibrations in brood chamber." },
        { component: "NAU7802 24-bit ADC", desc: "Precision temperature-compensated 4-point load cell scale tracking nocturnal dm/dt evaporation." }
      ],
      blockchainStack: [
        { component: "Polygon PoA / Hyperledger", desc: "Sovereign private testnet ledger with sub-second finality and zero gas volatility." },
        { component: "Mass-Conservation Invariant", desc: "Smart contract strictly enforces: Total Jars = Floor(Harvest Weight / 500g)." },
        { component: "Burn-On-Open State Machine", desc: "Permanent on-chain token burn on first seal break, flagging duplicate refill attempts." }
      ]
    }
  },
  {
    slideNumber: 4,
    title: "FEASIBILITY & VIABILITY",
    headerTag: "Unique Operational Strengths",
    subtitle: "BOM Cost ₹1,450, 100% Backward Compatibility & Risk Mitigations",
    content: {
      bomTable: [
        { item: "Compute & Wireless (ESP32-C3 + LoRa)", cost: "₹410" },
        { item: "Bio-Acoustics (INMP441 MEMS Mic)", cost: "₹75" },
        { item: "Environmental & Gas (BME688)", cost: "₹380" },
        { item: "Precision Scale (NAU7802 + Strain Gauges)", cost: "₹260" },
        { item: "Power & Solar (LiFePO4 + CN3791 MPPT)", cost: "₹210" },
        { item: "Neem/Wax Treated Enclosure Shell", cost: "₹115" },
        { item: "TOTAL HARDWARE COST PER HIVE", cost: "₹1,450 (~$17.50)" }
      ],
      mitigations: [
        { challenge: "No Internet in Deep Forests", solution: "Sub-GHz LoRa mesh with offline-first SQLite Merkle queue on village gateway." },
        { challenge: "Low Digital Literacy in Villages", solution: "ApiVera Vaani automated 15-second WhatsApp audio notes in native mother tongues." },
        { challenge: "Propolis & Weather Damage", solution: "Hermetic food-grade beeswax & neem oil encapsulation naturally repelling termites/glue." },
        { challenge: "Monsoon Moisture Spoilage (>20%)", solution: "Smart contract lock physically refuses to mint QR tokens if moisture exceeds 18.0%." }
      ]
    }
  },
  {
    slideNumber: 5,
    title: "PROTOTYPE-TO-IMPACT & BENEFITS",
    headerTag: "Socio-Economic & Ecological Realization",
    subtitle: "From Hive Monitoring to Direct-to-Consumer Farmer Prosperity",
    content: {
      metrics: [
        { label: "Annual Honey Yield per Hive", before: "18.0 kg", after: "26.5 kg (+47% saved)" },
        { label: "Price Realization per kg", before: "₹90 / kg", after: "₹380 / kg (KVIC Certified)" },
        { label: "Colony Annual Mortality Rate", before: "40%", after: "<7% (Swarm Pre-Empted)" },
        { label: "Direct Consumer UPI Tipping", before: "₹0", after: "₹8,500 / year" },
        { label: "NET ANNUAL FARMER INCOME (10 Hives)", before: "₹16,200", after: "₹1,09,200 (6.7x Surge)" }
      ],
      fiveSteps: [
        "1. Hive Monitoring: ApiVera Pod monitors weight, sound, and VOC gases offline.",
        "2. Harvest Recording: Logged when nocturnal evaporation reaches dm/dt → 0.",
        "3. Quality Testing: ApiVera OptiLens verifies Levo-rotation in 5 seconds.",
        "4. Blockchain Record: Mass-conserved smart contract mints tamper-proof tokens.",
        "5. Consumer Verification: QR scan reveals farm story with direct UPI farmer tip."
      ]
    }
  },
  {
    slideNumber: 6,
    title: "RESEARCH & COMPREHENSIVE REFERENCES",
    headerTag: "Scientific & Government Alignment",
    subtitle: "Peer-Reviewed Literature, FSSAI Norms & Ministry Guidelines",
    content: {
      references: [
        { id: "01", name: "Honey Traceability & Authenticity Review", source: "Journal of Apicultural Science (2022)", support: "Honey origin authentication, IoT & blockchain applications" },
        { id: "02", name: "Fujairah Honey Chain", source: "Information (2025)", support: "Blockchain + IoT + smart contracts + honey batch traceability" },
        { id: "03", name: "Honey Authentication using AI-Based Pollen Analysis", source: "British Food Journal (2025)", support: "AI / ML for botanical origin and pollen classification" },
        { id: "04", name: "Cutting-edge Approaches for Honey Authentication", source: "JFCA (2025)", support: "Chemical, molecular & optical polarimetry authentication" },
        { id: "05", name: "Precision Apiculture System", source: "Sensors (2020)", support: "Temperature, humidity, weight & hive acoustics using IoT" },
        { id: "06", name: "KVIC Honey Mission Guidelines", source: "Ministry of MSME, Govt. of India", support: "Existing beekeeping clusters, toolkits & Khadi Gramodyog hubs" }
      ]
    }
  }
];

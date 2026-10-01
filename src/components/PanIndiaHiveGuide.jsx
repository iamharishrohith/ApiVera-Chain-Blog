import React, { useState } from 'react';
import { Layers, MapPin, CheckCircle2, Shield, Thermometer, Droplets, Sparkles, ChevronRight, Cpu } from 'lucide-react';

export default function PanIndiaHiveGuide({ setActiveTab }) {
  const [selectedHive, setSelectedHive] = useState(0);

  const hiveStructures = [
    {
      id: 'himalayan-wall',
      name: 'Himalayan Wall Hive (Jalokha / Dhaddi)',
      regions: 'Kashmir, Himachal Pradesh, Uttarakhand (Garhwal/Kumaon)',
      beeSpecies: 'Apis cerana indica (Indian Hive Bee)',
      climate: '-15°C Winter Snow to +25°C Summer',
      heritageStory: 'Built directly into the 18-inch mud-and-stone walls of traditional mountain houses for natural thermal insulation.',
      retrofitMethod: 'Non-invasive food-grade magnetic mount attached to the inner wooden inspection shutter.',
      image: '/assets/2_traditional_wall_hive_jalokha.jpg',
      benefits: ['Zero wood box costs', 'Extreme freeze defense (-15°C)', 'Natural Ahimsa harvest']
    },
    {
      id: 'hollow-log',
      name: 'Hollow Tree Log & Bamboo Hives',
      regions: 'Meghalaya, Nagaland, Arunachal Pradesh, Nilgiris',
      beeSpecies: 'Apis cerana indica & Apis dorsata',
      climate: 'Heavy Forest Rainfall (3500mm), High Humidity',
      heritageStory: 'Indigenous tribal beekeeping using hollowed fallen tree trunks and wild bamboo cylinders suspended in sacred groves.',
      retrofitMethod: 'Suspended centrally inside the log cavity using a biodegradable, neem-treated jute suspension cord.',
      image: '/assets/ChatGPT Image Oct 1, 2026, 12_17_47 AM.png',
      benefits: ['Propolis & moisture resistant', 'Forest canopy LoRa (3.2 km range)', 'Tribal livelihood surge']
    },
    {
      id: 'clay-pots',
      name: 'Terracotta Clay Pots (Earthen Matkas)',
      regions: 'Odisha, Madhya Pradesh, Chhattisgarh, Rural Bengal',
      beeSpecies: 'Apis cerana indica & Tetragonula (Stingless)',
      climate: '45°C Summer Heatwaves, Tropical Rain',
      heritageStory: 'Centuries-old earthen clay pots placed in rural courtyards and shaded mango orchards for natural evaporative cooling.',
      retrofitMethod: 'Slid into the inner neck of the inverted pot with a food-grade silicone tension ring.',
      image: '/assets/ChatGPT Image Oct 1, 2026, 12_21_57 AM.png',
      benefits: ['Zero thermal melt-down at 45°C', '₹0 infrastructure cost', '100% rural adaptability']
    },
    {
      id: 'langstroth-box',
      name: '10-Frame Langstroth & Newton Wooden Boxes',
      regions: 'Punjab, Haryana, Uttar Pradesh, Bihar, Rajasthan',
      beeSpecies: 'Apis mellifera (European Honey Bee)',
      climate: 'Commercial Migratory Plains, 48°C Heat to 4°C Winter',
      heritageStory: 'Standard KVIC Honey Mission wooden boxes transported on flatbed trucks following seasonal mustard, litchi, and eucalyptus blooms.',
      retrofitMethod: 'Elastic food-grade silicone bio-strap slung along the bottom super board (Zero drilling or screws required).',
      image: '/assets/ChatGPT Image Oct 1, 2026, 12_14_54 AM.png',
      benefits: ['Automatic GPS migration tracking', 'Nightly dm/dt harvest optimization', '6.7x income increase']
    }
  ];

  const current = hiveStructures[selectedHive];

  return (
    <section className="pan-india-section">
      <div className="section-container">
        {/* Section Header */}
        <div className="section-header-block">
          <div className="section-badge">
            <Layers size={14} />
            <span>Pan-India Cultural & Environmental Adaptability</span>
          </div>
          <h2 className="section-title">
            100% Backward Compatible with <span className="highlight-amber">India's "Old Infra" Hives</span>
          </h2>
          <p className="section-subtitle">
            Over 60% of rural and tribal beekeepers do not use modern factory boxes. Learn how the <strong>ApiVera Pod</strong> retrofits onto traditional Wall, Log, Mud Pot, and old wooden boxes in 10 seconds with zero drilling.
          </p>
        </div>

        {/* Tab Buttons for 4 Traditional Structures */}
        <div className="hive-tabs-row">
          {hiveStructures.map((hive, i) => (
            <button
              key={hive.id}
              className={`hive-tab-btn ${selectedHive === i ? 'active' : ''}`}
              onClick={() => setSelectedHive(i)}
            >
              <span className="tab-number">0{i + 1}</span>
              <span className="tab-title">{hive.name.split('(')[0].trim()}</span>
            </button>
          ))}
        </div>

        {/* Active Structure Showcase Card */}
        <div className="hive-showcase-card">
          <div className="showcase-img-col">
            <img 
              src={current.image} 
              alt={current.name} 
              className="showcase-img"
              onError={(e) => { e.target.src = '/assets/2_traditional_wall_hive_jalokha.jpg'; }}
            />
            <div className="img-overlay-badge">
              <MapPin size={14} />
              <span>{current.regions.split(',')[0]}</span>
            </div>
          </div>

          <div className="showcase-content-col">
            <div className="showcase-tag-row">
              <span className="badge-species"><Cpu size={14} /> {current.beeSpecies}</span>
              <span className="badge-climate"><Thermometer size={14} /> {current.climate}</span>
            </div>

            <h3 className="showcase-title">{current.name}</h3>
            <p className="showcase-story">{current.heritageStory}</p>

            <div className="retrofit-instruction-box">
              <div className="retrofit-label">
                <Sparkles size={16} className="text-amber" />
                <strong>Zero-Drilling ApiVera Pod Retrofit Method:</strong>
              </div>
              <p className="retrofit-text">{current.retrofitMethod}</p>
            </div>

            <div className="benefits-list">
              {current.benefits.map((b, idx) => (
                <div key={idx} className="benefit-item">
                  <CheckCircle2 size={16} className="text-emerald" />
                  <span>{b}</span>
                </div>
              ))}
            </div>

            <div className="showcase-footer-actions">
              <button className="btn-showcase-action" onClick={() => setActiveTab('optical-lab')}>
                <span>Test Honey Purity for this Flora</span>
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

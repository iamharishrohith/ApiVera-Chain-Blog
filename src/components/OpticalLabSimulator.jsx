import React, { useState, useMemo } from 'react';
import { Activity, Sparkles, AlertTriangle, CheckCircle2, RefreshCw, Zap, ShieldCheck, HelpCircle, Lightbulb } from 'lucide-react';

export default function OpticalLabSimulator() {
  const samples = [
    {
      id: 'kashmir-acacia',
      name: 'Pure Kashmir White Acacia Raw Honey',
      type: '100% Authentic Mono-Floral Raw Honey',
      trueRotation: -16.4,
      fructoseGlucoseRatio: 1.54,
      moisture: 17.2,
      purityStatus: 'AUTHENTIC_LEVO',
      color: '#D97706',
      description: 'High natural D-fructose content drives optical light rotation counter-clockwise to -16.4°.'
    },
    {
      id: 'punjab-mustard',
      name: 'Pure Punjab Mustard Blossom Raw Honey',
      type: '100% Authentic Raw Floral Honey',
      trueRotation: -12.8,
      fructoseGlucoseRatio: 1.28,
      moisture: 17.6,
      purityStatus: 'AUTHENTIC_LEVO',
      color: '#F59E0B',
      description: 'Natural raw multiflora sample with authentic Levo-rotation of -12.8°.'
    },
    {
      id: 'rice-syrup',
      name: 'Commercial Chinese Rice Syrup (SMR Adulterant)',
      type: 'Engineered Synthetic Adulterant',
      trueRotation: 24.2,
      fructoseGlucoseRatio: 0.62,
      moisture: 22.8,
      purityStatus: 'ADULTERATED_DEXTRO',
      color: '#EAB308',
      description: 'Engineered to pass basic chemical C4 tests, but synthetic dextrose forces light clockwise to +24.2°.'
    },
    {
      id: 'invert-corn-syrup',
      name: 'Industrial High-Fructose Corn Syrup (HFCS-55)',
      type: 'High-Density Sugar Invert Syrup',
      trueRotation: 18.5,
      fructoseGlucoseRatio: 0.81,
      moisture: 24.5,
      purityStatus: 'ADULTERATED_DEXTRO',
      color: '#F97316',
      description: 'High synthetic maltose and dextrin oligosaccharides resulting in positive dextrorotation of +18.5°.'
    }
  ];

  const [selectedSample, setSelectedSample] = useState(samples[0]);
  const [analyzerAngle, setAnalyzerAngle] = useState(0);
  const [opticalPathLength, setOpticalPathLength] = useState(1.0); // dm (10 cm)
  const [concentration, setConcentration] = useState(0.20); // g/ml

  // Calculated specific rotation based on Biot's Law: [alpha] = theta / (l * c)
  const measuredSpecificRotation = useMemo(() => {
    return (analyzerAngle / (opticalPathLength * concentration)).toFixed(1);
  }, [analyzerAngle, opticalPathLength, concentration]);

  // Match quality score between user analyzer angle and true sample extinction angle
  const angleDelta = Math.abs(analyzerAngle - selectedSample.trueRotation);
  const lightTransmission = Math.max(5, Math.min(100, Math.round(100 - (angleDelta * 3.2))));
  const isExtinctionReached = angleDelta <= 1.5;

  const handleSnapToExtinction = () => {
    setAnalyzerAngle(selectedSample.trueRotation);
  };

  return (
    <section className="optical-lab-section">
      <div className="section-container">
        {/* Lab Header */}
        <div className="section-header-block">
          <div className="section-badge">
            <Activity size={14} />
            <span>Interactive Virtual Polarimetry Physics Lab</span>
          </div>
          <h2 className="section-title">
            5-Second Optical Polarimetry <span className="highlight-amber">([α]D)</span> Simulator
          </h2>
          <p className="section-subtitle">
            Experience how Biot's Law of Optical Rotation exposes C3/C4 synthetic syrups by measuring the natural angular deflection of plane-polarized light.
          </p>
        </div>

        {/* Simulator Workspace Grid */}
        <div className="simulator-grid">
          {/* Left Column: Sample Selector & Controls */}
          <div className="sim-control-panel">
            <div className="panel-card-header">
              <span className="panel-title">1. Select Honey Test Sample</span>
              <span className="badge-live-sim">Live Physics Engine</span>
            </div>

            <div className="sample-list">
              {samples.map((sample) => {
                const isSelected = selectedSample.id === sample.id;
                const isLevo = sample.purityStatus === 'AUTHENTIC_LEVO';
                return (
                  <div
                    key={sample.id}
                    className={`sample-select-item ${isSelected ? 'selected' : ''}`}
                    onClick={() => {
                      setSelectedSample(sample);
                      setAnalyzerAngle(0);
                    }}
                  >
                    <div className="sample-icon-indicator" style={{ backgroundColor: sample.color }}>
                      <span className="sample-mini-dot"></span>
                    </div>
                    <div className="sample-details">
                      <div className="sample-name">{sample.name}</div>
                      <div className="sample-type">{sample.type}</div>
                    </div>
                    <div className={`purity-pill ${isLevo ? 'pure' : 'fake'}`}>
                      {isLevo ? 'Pure Levo' : 'Adulterated'}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Biot's Law Control Parameters */}
            <div className="biot-parameters-box">
              <div className="panel-card-header">
                <span className="panel-title">2. Laboratory Parameters (Biot's Law)</span>
              </div>
              <div className="param-slider-row">
                <div className="param-label">
                  <span>Optical Path Length ($l$):</span>
                  <strong>{opticalPathLength} dm (10 cm)</strong>
                </div>
                <input 
                  type="range" 
                  min="0.5" 
                  max="2.0" 
                  step="0.1" 
                  value={opticalPathLength}
                  onChange={(e) => setOpticalPathLength(parseFloat(e.target.value))}
                  className="custom-range-slider"
                />
              </div>

              <div className="param-slider-row">
                <div className="param-label">
                  <span>Sample Concentration ($c$):</span>
                  <strong>{concentration} g/mL</strong>
                </div>
                <input 
                  type="range" 
                  min="0.10" 
                  max="0.50" 
                  step="0.05" 
                  value={concentration}
                  onChange={(e) => setConcentration(parseFloat(e.target.value))}
                  className="custom-range-slider"
                />
              </div>
            </div>
          </div>

          {/* Center/Right Column: Interactive Polarimeter Chamber */}
          <div className="sim-visual-chamber">
            <div className="panel-card-header">
              <span className="panel-title">3. Polarizer Optical Chamber & Analyzer Dial</span>
              <button className="btn-snap-angle" onClick={handleSnapToExtinction}>
                <Sparkles size={14} />
                <span>Auto-Align Extinction Angle</span>
              </button>
            </div>

            {/* Photonic Beam Visualizer */}
            <div className="optical-beam-chamber">
              {/* Light Source */}
              <div className="optical-component source">
                <div className="comp-badge">589nm Sodium D</div>
                <div className="lamp-bulb-indicator"></div>
                <span className="comp-label">Unpolarized LED</span>
              </div>

              <div className="beam-arrow">──►</div>

              {/* Polarizer 1 */}
              <div className="optical-component polarizer">
                <div className="comp-badge">Filter 0°</div>
                <div className="polarizer-disc vertical">
                  <div className="grid-lines"></div>
                </div>
                <span className="comp-label">Fixed Polarizer</span>
              </div>

              <div className="beam-arrow">──►</div>

              {/* Honey Sample Tube */}
              <div className="optical-component sample-tube">
                <div className="comp-badge">{selectedSample.name.slice(0, 18)}...</div>
                <div className="cuvette-vial" style={{ borderColor: selectedSample.color }}>
                  <div className="liquid-fill" style={{ backgroundColor: selectedSample.color, opacity: 0.85 }}></div>
                  <div className="rotation-wave" style={{ transform: `rotate(${selectedSample.trueRotation}deg)` }}>
                    <div className="wave-core"></div>
                  </div>
                </div>
                <span className="comp-label">10ml Sample Vial</span>
              </div>

              <div className="beam-arrow">──►</div>

              {/* Analyzer Filter with Dial */}
              <div className="optical-component analyzer">
                <div className="comp-badge">Analyzer: {analyzerAngle > 0 ? `+${analyzerAngle}°` : `${analyzerAngle}°`}</div>
                <div 
                  className="polarizer-disc rotatable" 
                  style={{ transform: `rotate(${analyzerAngle}deg)` }}
                >
                  <div className="grid-lines analyzer-lines"></div>
                </div>
                <span className="comp-label">Rotating Analyzer</span>
              </div>

              <div className="beam-arrow">──►</div>

              {/* Photodetector Sensor Output */}
              <div className="optical-component detector">
                <div className="comp-badge">Transmission</div>
                <div 
                  className="sensor-light-spot"
                  style={{ 
                    backgroundColor: isExtinctionReached ? '#10B981' : '#F59E0B',
                    opacity: lightTransmission / 100,
                    boxShadow: isExtinctionReached ? '0 0 20px #10B981' : '0 0 10px #F59E0B'
                  }}
                >
                  <span className="transmission-pct">{lightTransmission}%</span>
                </div>
                <span className="comp-label">CMOS Sensor</span>
              </div>
            </div>

            {/* Interactive Angle Dial Slider */}
            <div className="rotary-slider-box">
              <div className="dial-header">
                <div className="dial-title">
                  <span>Rotate Analyzer Angle ($\\theta$):</span>
                  <strong className="text-amber">{analyzerAngle > 0 ? `+${analyzerAngle}°` : `${analyzerAngle}°`}</strong>
                </div>
                <div className="angle-quick-tags">
                  <span className="angle-tag levo">Levo Range: -10° to -25°</span>
                  <span className="angle-tag zero">0° Neutral</span>
                  <span className="angle-tag dextro">Dextro: &gt; +15°</span>
                </div>
              </div>

              <input 
                type="range" 
                min="-35" 
                max="35" 
                step="0.5" 
                value={analyzerAngle}
                onChange={(e) => setAnalyzerAngle(parseFloat(e.target.value))}
                className="analyzer-angle-slider"
              />

              <div className="slider-ticks-row">
                <span>-35° (Extreme Levo)</span>
                <span>-16.4° (Acacia Extinction)</span>
                <span>0° (Neutral)</span>
                <span>+18.5° (Syrup)</span>
                <span>+35° (Extreme Dextro)</span>
              </div>
            </div>

            {/* Real-Time Mathematical & Purity Evaluation Banner */}
            <div className={`purity-verdict-card ${selectedSample.purityStatus === 'AUTHENTIC_LEVO' ? 'pure-card' : 'alert-card'}`}>
              <div className="verdict-icon">
                {selectedSample.purityStatus === 'AUTHENTIC_LEVO' ? (
                  <CheckCircle2 size={36} className="text-emerald" />
                ) : (
                  <AlertTriangle size={36} className="text-red" />
                )}
              </div>
              <div className="verdict-content">
                <div className="verdict-headline">
                  {selectedSample.purityStatus === 'AUTHENTIC_LEVO' ? (
                    <span className="text-emerald">VERIFIED 100% PURE RAW HONEY (LEVO-ROTATORY)</span>
                  ) : (
                    <span className="text-red">CRITICAL ALERT: SYNTHETIC ADULTERATED SYRUP (DEXTRO-ROTATORY)</span>
                  )}
                </div>
                <p className="verdict-desc">{selectedSample.description}</p>
                <div className="verdict-stats-row">
                  <div className="stat-pill">
                    <span>Target True Extinction:</span>
                    <strong>{selectedSample.trueRotation}°</strong>
                  </div>
                  <div className="stat-pill">
                    <span>Measured [α]D:</span>
                    <strong>{measuredSpecificRotation}° dm⁻¹ (g/mL)⁻¹</strong>
                  </div>
                  <div className="stat-pill">
                    <span>Optical Alignment:</span>
                    <strong>{isExtinctionReached ? 'Extinction Aligned ✓' : 'Adjust Dial...'}</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Biot's Law Educational R&D Callout */}
        <div className="optical-education-card">
          <div className="edu-icon"><Lightbulb size={24} color="#D97706" /></div>
          <div className="edu-text">
            <h4>Why Biot's Law Outsmarts ₹20,000 Laboratory NMR Tests</h4>
            <p>
              Natural honeybees digest sucrose into D-fructose and D-glucose using the natural enzyme <em>invertase</em> in their hypopharyngeal glands. Fructose naturally polarizes light strongly counter-clockwise ([α]D = -92.4°), giving pure raw honey its unmistakable Levo-rotatory fingerprint. Industrial factories synthesize syrups with synthetic dextrose that rotates clockwise ([α]D &gt; +15°). <strong>Physics cannot be faked.</strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

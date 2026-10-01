import React, { useState, useEffect, useRef } from 'react';
import { Cpu, Play, Square, Volume2, AlertCircle, CheckCircle2, MessageSquare, Radio, Sparkles } from 'lucide-react';

export default function BioAcousticVisualizer() {
  const [activeMode, setActiveMode] = useState('normal');
  const [isPlaying, setIsPlaying] = useState(false);
  const audioContextRef = useRef(null);
  const oscillatorRef = useRef(null);
  const gainNodeRef = useRef(null);

  const modes = [
    {
      id: 'normal',
      name: 'Normal Foraging State (120 Hz Baseline)',
      frequency: 120,
      swarmIndex: 0.28,
      status: 'HEALTHY_FORAGING',
      alertLevel: 'green',
      color: '#10B981',
      description: 'Steady, calm flight wing-beat hum. Brood temperature is stable at 34.6°C. Zero swarm risk.'
    },
    {
      id: 'fanning',
      name: 'Active Nocturnal Fanning (200 Hz Dehydration)',
      frequency: 200,
      swarmIndex: 0.65,
      status: 'ACTIVE_DEHYDRATION',
      alertLevel: 'blue',
      color: '#3B82F6',
      description: 'Worker bees fanning wings across comb cells to evaporate water down to ≤18.0% moisture.'
    },
    {
      id: 'swarming',
      name: 'Queen Piping & Swarm Preparation (260 Hz Peak)',
      frequency: 260,
      swarmIndex: 2.85,
      status: 'SWARM_ALERT_48H',
      alertLevel: 'amber',
      color: '#F59E0B',
      description: 'CRITICAL ALERT: Thoracic flight muscle resonance indicates queen piping. Colony will swarm in 48 hours!'
    },
    {
      id: 'distress',
      name: 'Predator Attack / Alarm Pheromone (380 Hz)',
      frequency: 380,
      swarmIndex: 3.42,
      status: 'COLONY_DISTRESS',
      alertLevel: 'red',
      color: '#EF4444',
      description: 'High spectral entropy and erratic defensive buzzing. Guard bees releasing Isopentyl Acetate alarm pheromone.'
    }
  ];

  const currentModeData = modes.find(m => m.id === activeMode) || modes[0];

  // Stop sound when component unmounts or mode changes
  useEffect(() => {
    return () => {
      stopAudio();
    };
  }, []);

  const startAudio = (freq) => {
    try {
      if (!audioContextRef.current) {
        audioContextRef.current = new (window.AudioContext || window.webkitAudioContext)();
      }
      const ctx = audioContextRef.current;
      if (ctx.state === 'suspended') {
        ctx.resume();
      }

      stopAudio();

      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sawtooth'; // Mimics natural bee wing resonance buzz
      osc.frequency.setValueAtTime(freq, ctx.currentTime);

      // Low pass filter to warm the bee hum
      const filter = ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(freq * 3, ctx.currentTime);

      gain.gain.setValueAtTime(0.08, ctx.currentTime);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      oscillatorRef.current = osc;
      gainNodeRef.current = gain;
      setIsPlaying(true);
    } catch (e) {
      console.error('Web Audio API not supported or user gesture required', e);
    }
  };

  const stopAudio = () => {
    if (oscillatorRef.current) {
      try {
        oscillatorRef.current.stop();
        oscillatorRef.current.disconnect();
      } catch (e) {}
      oscillatorRef.current = null;
    }
    setIsPlaying(false);
  };

  const handleTogglePlay = () => {
    if (isPlaying) {
      stopAudio();
    } else {
      startAudio(currentModeData.frequency);
    }
  };

  const handleModeChange = (modeId) => {
    setActiveMode(modeId);
    const targetMode = modes.find(m => m.id === modeId);
    if (isPlaying && targetMode) {
      startAudio(targetMode.frequency);
    }
  };

  return (
    <section className="acoustic-ai-section">
      <div className="section-container">
        {/* Section Header */}
        <div className="section-header-block">
          <div className="section-badge">
            <Cpu size={14} />
            <span>Edge AI & Bio-Acoustic Signal Processing</span>
          </div>
          <h2 className="section-title">
            240–280 Hz Formant Shift & <span className="highlight-amber">Swarm Pre-Emption</span>
          </h2>
          <p className="section-subtitle">
            How Short-Time Fourier Transform (STFT) spectral analysis on the ESP32-C3 microcontroller detects queen piping harmonics 48 hours before swarming occurs.
          </p>
        </div>

        {/* Visualizer Workspace Grid */}
        <div className="acoustic-grid">
          {/* Mode Selector Column */}
          <div className="acoustic-selector-col">
            <div className="panel-card-header">
              <span className="panel-title">1. Select Biological Colony Acoustic State</span>
              <span className="badge-live-sim">I2S 8 kHz Model</span>
            </div>

            <div className="acoustic-mode-list">
              {modes.map((mode) => {
                const isSelected = activeMode === mode.id;
                return (
                  <div
                    key={mode.id}
                    className={`mode-card ${isSelected ? 'selected' : ''}`}
                    onClick={() => handleModeChange(mode.id)}
                  >
                    <div className="mode-card-top">
                      <span className="mode-freq-badge" style={{ backgroundColor: mode.color }}>
                        {mode.frequency} Hz
                      </span>
                      <span className="mode-index-tag">Swarm Index: {mode.swarmIndex}</span>
                    </div>
                    <div className="mode-name">{mode.name}</div>
                    <p className="mode-desc">{mode.description}</p>
                  </div>
                );
              })}
            </div>

            {/* Audio Controls */}
            <div className="audio-control-card">
              <button 
                className={`btn-play-audio ${isPlaying ? 'playing' : ''}`}
                onClick={handleTogglePlay}
              >
                {isPlaying ? <Square size={18} /> : <Play size={18} />}
                <span>{isPlaying ? 'Stop Synthesizer Audio' : `Listen to ${currentModeData.frequency} Hz Bee Buzz`}</span>
              </button>
              <div className="audio-tip">
                <Volume2 size={14} />
                <span>Audio synthesized using Web Audio API sawtooth oscillator with harmonic low-pass filtering.</span>
              </div>
            </div>
          </div>

          {/* Spectrum Analyzer & Alert Display */}
          <div className="acoustic-spectrum-col">
            <div className="panel-card-header">
              <span className="panel-title">2. Real-Time STFT Spectrum & Formant Ratio</span>
              <span className="live-sampling-rate">Sampling: 8,192 Hz PCM • 64 Mel Bands</span>
            </div>

            {/* Equalizer Frequency Bars Visualizer */}
            <div className="spectrum-canvas-card">
              <div className="spectrum-bars-row">
                {[60, 80, 100, 120, 140, 160, 180, 200, 220, 240, 260, 280, 300, 320, 350, 400, 450, 500].map((freq, i) => {
                  const dist = Math.abs(freq - currentModeData.frequency);
                  const barHeight = Math.max(12, Math.round(100 - (dist * 0.45)));
                  const isPeak = freq === currentModeData.frequency || Math.abs(freq - currentModeData.frequency) < 20;

                  return (
                    <div key={i} className="eq-bar-wrap">
                      <div 
                        className={`eq-bar ${isPeak ? 'peak-bar' : ''}`}
                        style={{ 
                          height: `${barHeight}%`,
                          backgroundColor: isPeak ? currentModeData.color : '#334155'
                        }}
                      ></div>
                      <span className="eq-freq-label">{freq}</span>
                    </div>
                  );
                })}
              </div>
              <div className="spectrum-axis-title">Acoustic Frequency Spectrum (Hz)</div>
            </div>

            {/* Swarm Index Gauge & Formula */}
            <div className="swarm-index-gauge-card">
              <div className="gauge-header">
                <div>
                  <span className="gauge-title">Swarm Formant Energy Ratio (SI)</span>
                  <div className="gauge-formula">
                    SI = ∫(240–280 Hz) df / ∫(100–150 Hz) df
                  </div>
                </div>
                <div className="gauge-score" style={{ color: currentModeData.color }}>
                  {currentModeData.swarmIndex}
                </div>
              </div>

              {/* Progress Bar */}
              <div className="gauge-progress-track">
                <div 
                  className="gauge-progress-fill"
                  style={{ 
                    width: `${Math.min(100, (currentModeData.swarmIndex / 3.5) * 100)}%`,
                    backgroundColor: currentModeData.color
                  }}
                ></div>
              </div>
              <div className="gauge-threshold-labels">
                <span>0.0 (Normal)</span>
                <span>1.0 (Alert Threshold)</span>
                <span>2.5+ (Critical Swarm Preparation)</span>
              </div>
            </div>

            {/* WhatsApp Audio & IVR Voice Alert Simulation */}
            <div className="whatsapp-alert-preview">
              <div className="wa-header">
                <MessageSquare size={16} className="text-emerald" />
                <span>ApiVera Vaani: Regional WhatsApp Voice Alert (Hindi Simulation)</span>
              </div>
              <div className="wa-bubble">
                <div className="wa-audio-player">
                  <div className="wa-play-icon">▶</div>
                  <div className="wa-waveform-mock">
                    <span style={{ height: '40%' }}></span>
                    <span style={{ height: '70%' }}></span>
                    <span style={{ height: '100%' }}></span>
                    <span style={{ height: '60%' }}></span>
                    <span style={{ height: '90%' }}></span>
                    <span style={{ height: '50%' }}></span>
                  </div>
                  <span className="wa-duration">0:15</span>
                </div>
                <div className="wa-transcript">
                  {activeMode === 'swarming' ? (
                    <strong className="text-amber">
                      "नमस्ते रामसिंह जी, बॉक्स नंबर 4 में मधुमक्खियों की ध्वनि 260 Hz पर पहुँच गई है। यह रानी मक्खी के झुंड छोड़ने (Swarm) का संकेत है। कृपया अगले 48 घंटे में नया सुपर लगाएं या बक्सा विभाजित करें।"
                    </strong>
                  ) : activeMode === 'fanning' ? (
                    <span>
                      "नमस्ते जी, बॉक्स नंबर 4 में रात को नमी सुखाई जा रही है (200 Hz Fanning)। शहद जल्द ही पकने वाला है।"
                    </span>
                  ) : activeMode === 'distress' ? (
                    <strong className="text-red">
                      "सावधान! बॉक्स नंबर 4 में असामान्य आवाज आ रही है। किसी कीट या ततैया के हमले की आशंका है। प्रवेश द्वार की जांच करें।"
                    </strong>
                  ) : (
                    <span>
                      "नमस्ते रामसिंह जी, आपकी सभी कॉलोनियां पूरी तरह स्वस्थ हैं। सामान्य परागण जारी है।"
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

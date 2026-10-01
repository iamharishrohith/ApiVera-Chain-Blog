import React from 'react';
import { ShieldCheck, Zap, Sparkles, Activity, Layers, ArrowRight, CheckCircle2, ChevronRight, QrCode, Lock, Volume2, Box, Microscope } from 'lucide-react';

export default function Hero({ setActiveTab, onOpenPassport }) {
  return (
    <section className="hero-section">
      <div className="hero-container">
        {/* Top Ministry & SIH Banner */}
        <div className="hero-badge-row">
          <span className="hero-badge primary">
            <Sparkles size={14} />
            Smart India Hackathon 2026 • Problem ID: 26021
          </span>
          <span className="hero-badge secondary">
            Ministry of MSME / KVIC Honey Mission
          </span>
          <span className="hero-badge success">
            Team Arise • National Finalist Architecture
          </span>
        </div>

        {/* Main Headline */}
        <div className="hero-grid">
          <div className="hero-content">
            <h1 className="hero-headline">
              The Sovereign <span className="highlight-amber">Bio-Optical</span> &amp; <span className="highlight-cyan">Blockchain</span> Nervous System for Indian Apiculture
            </h1>
            <p className="hero-lead">
              <strong>ApiVera Chain</strong> connects 2.5 Million rural beekeepers directly to consumers. Powered by the zero-drilling <strong>ApiVera Pod</strong> for traditional Himalayan &amp; tribal hives, 5-second <strong>ApiVera OptiLens</strong> optical purity checks, and mass-conserved <strong>Burn-on-Open</strong> tamper-proof smart seals.
            </p>

            {/* Quick Action CTA Buttons */}
            <div className="hero-cta-group">
              <button className="cta-btn primary-btn" onClick={() => setActiveTab('optical-lab')}>
                <Activity size={18} />
                <span>Launch Optical Lab (5s Test)</span>
                <ArrowRight size={16} />
              </button>
              <button className="cta-btn secondary-btn" onClick={() => setActiveTab('blog')}>
                <Zap size={18} />
                <span>Read 6 R&amp;D Deep-Dive Papers</span>
              </button>
              <button className="cta-btn outline-btn" onClick={onOpenPassport}>
                <QrCode size={18} />
                <span>Simulate Consumer QR Scan</span>
              </button>
            </div>

            {/* Quick Ground Highlights */}
            <div className="hero-highlights-list">
              <div className="highlight-item">
                <CheckCircle2 size={16} className="text-emerald" />
                <span><strong>5-Second Polarimetry ([α]D):</strong> Detects C3/C4 &amp; rice syrups for ₹50</span>
              </div>
              <div className="highlight-item">
                <CheckCircle2 size={16} className="text-emerald" />
                <span><strong>Burn-On-Open Seal:</strong> Destroys bottle-refilling black market</span>
              </div>
              <div className="highlight-item">
                <CheckCircle2 size={16} className="text-emerald" />
                <span><strong>100% Old Infra Retrofit:</strong> Fits Himalayan Wall, Log, Pot &amp; Box hives in 10s</span>
              </div>
              <div className="highlight-item">
                <CheckCircle2 size={16} className="text-emerald" />
                <span><strong>240–280 Hz Bio-Acoustics:</strong> 48h swarm pre-emption via WhatsApp voice</span>
              </div>
            </div>
          </div>

          {/* Hero Visual Card / Live Status */}
          <div className="hero-visual-card">
            <div className="visual-header">
              <div className="status-live">
                <span className="live-blip"></span>
                <span>LIVE KVIC CLUSTER NODE: PUNJAB-084</span>
              </div>
              <span className="network-tag">LoRa IN865: 866.1 MHz</span>
            </div>

            <div className="visual-body">
              <div className="visual-metric-grid">
                <div className="metric-box">
                  <span className="metric-label">Hive Scale Weight</span>
                  <span className="metric-val text-amber">24.8 kg</span>
                  <span className="metric-delta">+8.4 kg this bloom</span>
                </div>
                <div className="metric-box">
                  <span className="metric-label">Brood Core Temp</span>
                  <span className="metric-val text-emerald">34.6°C</span>
                  <span className="metric-delta">±0.4°C Homeostasis</span>
                </div>
                <div className="metric-box">
                  <span className="metric-label">Bio-Acoustic Formant</span>
                  <span className="metric-val text-cyan">132 Hz</span>
                  <span className="metric-delta">Foraging (0% Swarm)</span>
                </div>
                <div className="metric-box">
                  <span className="metric-label">Nocturnal dm/dt</span>
                  <span className="metric-val text-purple">0.008 kg/h</span>
                  <span className="metric-delta">Ripe (17.2% Moisture)</span>
                </div>
              </div>

              {/* Optical Polarimeter Live Preview */}
              <div className="optical-preview-bar">
                <div className="optical-preview-label">
                  <span>Specific Rotation [α]D Test</span>
                  <span className="badge-levo">LEVO-ROTATORY: -16.4° (100% PURE)</span>
                </div>
                <div className="polarimetry-bar-track">
                  <div className="polarimetry-center-mark"></div>
                  <div className="polarimetry-levo-zone" style={{ width: '45%' }}></div>
                  <div className="polarimetry-pointer" style={{ left: '32%' }}></div>
                </div>
                <div className="polarimetry-axis-labels">
                  <span>-25° (Pure Fructose)</span>
                  <span>0° Neutral</span>
                  <span>+20° (Synthetic Syrup)</span>
                </div>
              </div>

              {/* Action Link inside Card */}
              <div className="visual-footer">
                <button className="card-link-btn" onClick={() => setActiveTab('deck')}>
                  <span>View Official SIH PPT Slides (1 to 6)</span>
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Core Innovation Mini-Cards */}
        <div className="hero-innovations-strip">
          <div className="innovation-strip-card" onClick={() => setActiveTab('optical-lab')}>
            <div className="strip-icon-box amber"><Microscope size={20} className="text-amber" /></div>
            <div className="strip-card-text">
              <h4>5-Second Optical Polarimetry</h4>
              <p>Natural Levo-rotation ([α]D ≤ -10°) exposes synthetic Dextro syrups instantly for ₹50.</p>
            </div>
          </div>

          <div className="innovation-strip-card" onClick={() => setActiveTab('blockchain')}>
            <div className="strip-icon-box red"><Lock size={20} className="text-red" /></div>
            <div className="strip-card-text">
              <h4>Mass-Conserved Burn Seal</h4>
              <p>Jars minted locked to scale drop; digital token permanently burns on first open.</p>
            </div>
          </div>

          <div className="innovation-strip-card" onClick={() => setActiveTab('acoustic-ai')}>
            <div className="strip-icon-box blue"><Volume2 size={20} className="text-cyan" /></div>
            <div className="strip-card-text">
              <h4>240–280 Hz Swarm Pre-Emption</h4>
              <p>Acoustic formant ratio warns beekeepers 48 hours early via WhatsApp voice notes.</p>
            </div>
          </div>

          <div className="innovation-strip-card" onClick={() => setActiveTab('pan-india')}>
            <div className="strip-icon-box green"><Box size={20} className="text-emerald" /></div>
            <div className="strip-card-text">
              <h4>Universal 10-Second Retrofit</h4>
              <p>Fits Himalayan Wall Hives (Jalokha), Log Hives, Mud Pots &amp; Box hives with zero drilling.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import React from 'react';
import { Shield, Sparkles, Heart, ExternalLink, Download, Hexagon, Activity, Lock, Cpu, Droplets, Box } from 'lucide-react';

export default function Footer({ setActiveTab, onOpenPassport }) {
  return (
    <footer className="portal-footer">
      <div className="footer-container">
        {/* Top Footer Row */}
        <div className="footer-top-grid">
          {/* Brand Info */}
          <div className="footer-brand-col">
            <div className="footer-logo">
              <Hexagon size={24} className="text-amber" />
              <span>APIVERA <strong>CHAIN</strong></span>
            </div>
            <p className="footer-tagline">
              The Sovereign Bio-Optical & Blockchain Operating System for Indian Apiculture.
            </p>
            <div className="footer-sih-tag">
              <span>Smart India Hackathon 2026</span> • <span>Problem Statement ID: 26021</span>
            </div>
            <div className="footer-ministry-tag">
              Ministry of Micro, Small & Medium Enterprises (MoMSME) / KVIC
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="footer-links-col">
            <h4>Quick Navigation</h4>
            <ul>
              <li><button onClick={() => setActiveTab('overview')}>Overview</button></li>
              <li><button onClick={() => setActiveTab('blog')}>R&D Research Blog</button></li>
              <li><button onClick={() => setActiveTab('optical-lab')}>5s Optical Lab Simulator</button></li>
              <li><button onClick={() => setActiveTab('acoustic-ai')}>Bio-Acoustics Player</button></li>
              <li><button onClick={() => setActiveTab('blockchain')}>Ledger & Burn Explorer</button></li>
              <li><button onClick={() => setActiveTab('pan-india')}>Indian Hives Guide</button></li>
            </ul>
          </div>

          {/* Key Innovations */}
          <div className="footer-links-col">
            <h4>Key Innovations</h4>
            <ul className="footer-innovations-list">
              <li><span><Activity size={14} className="text-emerald" /> Optical Polarimetry ([α]D Test)</span></li>
              <li><span><Lock size={14} className="text-amber" /> Burn-on-Open Smart Seal</span></li>
              <li><span><Cpu size={14} className="text-cyan" /> 240–280 Hz Bio-Acoustic Pre-Emption</span></li>
              <li><span><Droplets size={14} className="text-blue" /> Nocturnal dm/dt ≤18% Ripening</span></li>
              <li><span><Box size={14} className="text-purple" /> 10s Zero-Drilling Retrofit Pod</span></li>
            </ul>
          </div>

          {/* Action Downloads */}
          <div className="footer-action-col">
            <h4>Prototype Downloads</h4>
            <a 
              href="/assets/ARISE - 26021.pdf" 
              download 
              className="footer-btn"
              target="_blank"
              rel="noreferrer"
            >
              <Download size={16} />
              <span>Download SIH PPT (PDF)</span>
            </a>
            <button className="footer-btn secondary" onClick={onOpenPassport}>
              <Sparkles size={16} />
              <span>Launch Honey Passport</span>
            </button>
          </div>
        </div>

        {/* Bottom Copyright Row */}
        <div className="footer-bottom-row">
          <p>© 2026 <strong>Team Arise</strong> (Harini, Ananthi, Amrin, Bhubana, Kaviya, Subhaharini). Mentored by Dr. K Arun Kumar.</p>
          <p className="footer-made-with">Built with <Heart size={14} className="text-red" /> for Rural Indian Beekeepers & KVIC Honey Mission.</p>
        </div>
      </div>
    </footer>
  );
}

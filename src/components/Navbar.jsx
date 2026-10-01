import React, { useState } from 'react';
import { Shield, Sparkles, QrCode, BookOpen, Activity, Cpu, Award, Layers, Menu, X, Radio } from 'lucide-react';

export default function Navbar({ activeTab, setActiveTab, onOpenPassport }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'overview', label: 'Overview', icon: Sparkles },
    { id: 'blog', label: 'R&D Blog', icon: BookOpen },
    { id: 'optical-lab', label: 'Optical Lab (5s)', icon: Activity },
    { id: 'acoustic-ai', label: 'Bio-Acoustics', icon: Cpu },
    { id: 'blockchain', label: 'Ledger Explorer', icon: Shield },
    { id: 'pan-india', label: 'Indian Hives', icon: Layers },
    { id: 'deck', label: 'SIH Slides (1-6)', icon: Award }
  ];

  return (
    <header className="navbar-header">
      <div className="navbar-container">
        {/* Brand Logo with Team Arise Official Logo */}
        <div className="brand-logo" onClick={() => setActiveTab('overview')}>
          <img 
            src="/assets/arise_logo.png" 
            alt="Team Arise Logo" 
            className="navbar-arise-logo" 
            onError={(e) => { e.target.style.display = 'none'; }}
          />
          <div className="brand-text">
            <div className="brand-title">
              APIVERA <span>CHAIN</span>
            </div>
            <div className="brand-subtitle">Team Arise • PS #26021 • KVIC MSME</div>
          </div>
        </div>

        {/* Live Network Status Pill */}
        <div className="network-pill-desktop">
          <span className="pulse-dot"></span>
          <Radio size={13} className="text-emerald" />
          <span className="pill-text">LoRa IN865: Connected • 100% Levo-Pure</span>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="desktop-nav">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                className={`nav-btn ${isActive ? 'active' : ''}`}
                onClick={() => {
                  setActiveTab(item.id);
                  setMobileMenuOpen(false);
                }}
              >
                <Icon size={15} />
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Action Button: Live QR Passport Scanner */}
        <div className="nav-actions">
          <button className="scan-passport-btn" onClick={onOpenPassport}>
            <QrCode size={16} />
            <span>Scan Passport</span>
          </button>
          
          <button 
            className="mobile-menu-toggle" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="mobile-nav-drawer">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                className={`mobile-nav-item ${isActive ? 'active' : ''}`}
                onClick={() => {
                  setActiveTab(item.id);
                  setMobileMenuOpen(false);
                }}
              >
                <Icon size={18} />
                <span>{item.label}</span>
              </button>
            );
          })}
          <button className="mobile-scan-btn" onClick={() => { onOpenPassport(); setMobileMenuOpen(false); }}>
            <QrCode size={18} />
            <span>Launch Honey Passport Simulator</span>
          </button>
        </div>
      )}
    </header>
  );
}

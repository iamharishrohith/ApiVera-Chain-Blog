import React, { useState } from 'react';
import { X, CheckCircle2, ShieldCheck, MapPin, Calendar, Droplets, Heart, Sparkles, Send, Award, QrCode, User, Flower2, Activity, Hexagon } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function HoneyPassportModal({ isOpen, onClose, batchData }) {
  const [tipAmount, setTipAmount] = useState(20);
  const [tipSent, setTipSent] = useState(false);

  if (!isOpen) return null;

  const handleSendTip = () => {
    setTipSent(true);
    confetti({ particleCount: 100, spread: 80, origin: { y: 0.6 } });
    setTimeout(() => {
      setTipSent(false);
    }, 4000);
  };

  const defaultBatch = {
    code: 'KVIC-PB-2026-084',
    beekeeper: 'Gurpreet Singh',
    location: 'Hoshiarpur, Punjab',
    flora: '100% Pure Mustard Blossom (Brassica juncea)',
    harvestDate: '18 October 2026',
    moisture: '17.2% (FSSAI Grade-A)',
    optical: '-16.2° (Levo-Rotatory Certified)',
    ayurvedicGuna: 'Katu-Madhura Rasa, Ushna Virya • Kapha-Vata Balancing',
    batchHash: '0x9f4a8b1e02cd7f3a91b4',
    sealStatus: 'AUTHENTIC_SEALED'
  };

  const data = batchData || defaultBatch;

  return (
    <div className="passport-modal-overlay" onClick={onClose}>
      <div className="passport-modal-card" onClick={(e) => e.stopPropagation()}>
        {/* Modal Header */}
        <div className="passport-header">
          <div className="passport-brand-row">
            <div className="passport-logo">
              <Hexagon size={20} className="text-amber" />
              <strong>APIVERA <span>PASSPORT</span></strong>
            </div>
            <button className="passport-close-btn" onClick={onClose}>
              <X size={20} />
            </button>
          </div>

          <div className="passport-verified-banner">
            <ShieldCheck size={28} className="text-emerald" />
            <div>
              <h3>100% Certified Authentic Raw Honey</h3>
              <p>Batch ID: {data.code} • Blockchain Verified on Polygon PoA</p>
            </div>
          </div>
        </div>

        {/* Modal Body */}
        <div className="passport-body">
          {/* Beekeeper Profile Card */}
          <div className="beekeeper-profile-box">
            <div className="farmer-avatar-circle">
              <User size={22} color="#D97706" />
            </div>
            <div className="farmer-text-info">
              <h4>{data.beekeeper}</h4>
              <p><MapPin size={13} /> {data.location} • KVIC Honey Mission Cluster</p>
              <span className="farmer-badge">Registered Master Beekeeper • 45 Hives</span>
            </div>
          </div>

          {/* Key Purity & Origin Metrics Grid */}
          <div className="passport-specs-grid">
            <div className="spec-card">
              <span className="spec-icon"><Flower2 size={20} color="#D97706" /></span>
              <div className="spec-info">
                <span className="spec-label">Botanical Flora Origin</span>
                <strong className="spec-val">{data.flora}</strong>
              </div>
            </div>

            <div className="spec-card">
              <span className="spec-icon"><Calendar size={20} color="#0284C7" /></span>
              <div className="spec-info">
                <span className="spec-label">Harvested & Extracted</span>
                <strong className="spec-val">{data.harvestDate}</strong>
              </div>
            </div>

            <div className="spec-card">
              <span className="spec-icon"><Activity size={20} color="#059669" /></span>
              <div className="spec-info">
                <span className="spec-label">Optical Polarimetry</span>
                <strong className="spec-val text-emerald">{data.optical}</strong>
              </div>
            </div>

            <div className="spec-card">
              <span className="spec-icon"><Droplets size={20} color="#D97706" /></span>
              <div className="spec-info">
                <span className="spec-label">Refractometer Moisture</span>
                <strong className="spec-val text-amber">{data.moisture}</strong>
              </div>
            </div>
          </div>

          {/* Ayurvedic Madhu-Guna Section */}
          <div className="ayurvedic-guna-card">
            <div className="guna-header">
              <Award size={16} className="text-amber" />
              <span>Ayurvedic Madhu-Guna Profile (Vedic Heritage)</span>
            </div>
            <p className="guna-text">{data.ayurvedicGuna}</p>
          </div>

          {/* Cryptographic Proof Verification Strip */}
          <div className="crypto-proof-strip">
            <div className="proof-row">
              <span>On-Chain Batch Digest:</span>
              <code>{data.batchHash}</code>
            </div>
            <div className="proof-row">
              <span>Smart Contract Integrity:</span>
              <strong className="text-emerald">Mass-Conserved (Zero Cloning) ✓</strong>
            </div>
          </div>

          {/* Direct Farmer UPI Tipping Widget */}
          <div className="farmer-tipping-card">
            <div className="tipping-header">
              <Heart size={18} className="text-red" />
              <div>
                <h4>Direct Support / Tip to {data.beekeeper}</h4>
                <p>100% of your tip goes directly to the beekeeper via Jan Dhan UPI (Zero middleman cut).</p>
              </div>
            </div>

            {tipSent ? (
              <div className="tip-success-msg">
                <CheckCircle2 size={24} className="text-emerald" />
                <span>Thank you! ₹{tipAmount} sent directly to {data.beekeeper} via UPI DBT.</span>
              </div>
            ) : (
              <div className="tipping-controls">
                <div className="tip-amounts-row">
                  {[20, 50, 100, 200].map((amt) => (
                    <button
                      key={amt}
                      className={`tip-btn ${tipAmount === amt ? 'selected' : ''}`}
                      onClick={() => setTipAmount(amt)}
                    >
                      ₹{amt}
                    </button>
                  ))}
                </div>
                <button className="btn-send-tip" onClick={handleSendTip}>
                  <Send size={16} />
                  <span>Send ₹{tipAmount} Farmer Tip via UPI</span>
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Modal Footer */}
        <div className="passport-footer">
          <div className="footer-seal">
            <ShieldCheck size={16} className="text-emerald" />
            <span>Authenticated by KVIC Honey Mission & MoMSME</span>
          </div>
          <button className="passport-done-btn" onClick={onClose}>
            Done
          </button>
        </div>
      </div>
    </div>
  );
}

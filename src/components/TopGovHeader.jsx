import React from 'react';
import { Shield, Award, CheckCircle2 } from 'lucide-react';

export default function TopGovHeader() {
  return (
    <div className="top-gov-header">
      <div className="gov-header-container">
        {/* Left: Ministry of MSME / Government of India */}
        <div className="gov-left-block">
          <img 
            src="/assets/msme_official_logo.png" 
            alt="Ministry of MSME, Govt. of India" 
            className="gov-msme-logo" 
          />
        </div>

        {/* Center: Problem Statement ID Banner */}
        <div className="gov-center-block">
          <span className="ps-id-badge">PS ID: 26021</span>
          <span className="ps-title-banner">Honey Chain: Blockchain Traceability &amp; Smart Beekeeping</span>
          <span className="gov-dept-tag">MoMSME Coordination Section</span>
        </div>

        {/* Right: SIH 2026 Official Logo & Team Arise Tag */}
        <div className="gov-right-block">
          <img 
            src="/assets/sih_logo.png" 
            alt="Smart India Hackathon 2026" 
            className="gov-sih-logo" 
            onError={(e) => { e.target.style.display = 'none'; }}
          />
          <div className="team-arise-tag">
            <img src="/assets/arise_logo.png" alt="Team Arise" className="team-arise-mini-logo" />
            <div className="team-tag-text">
              <span className="team-title">TEAM ARISE</span>
              <span className="team-id">ID: 167577</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

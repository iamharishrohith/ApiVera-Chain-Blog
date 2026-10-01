import React from 'react';
import { Users, Award, Heart, Sparkles, GraduationCap } from 'lucide-react';

export default function TeamSection() {
  const teamMembers = [
    { name: 'Harini', role: 'Team Lead & Full-Stack Architect', badge: 'Team Lead' },
    { name: 'Ananthi', role: 'Bio-Acoustics & Edge AI Engineer', badge: 'Edge AI' },
    { name: 'Amrin', role: 'Blockchain & Smart Contracts', badge: 'Web3' },
    { name: 'Bhubana', role: 'Hardware & IoT Circuit Designer', badge: 'IoT Hardware' },
    { name: 'Kaviya', role: 'Optical Polarimetry & QA Specialist', badge: 'Optics & QC' },
    { name: 'Subhaharini', role: 'UI/UX & Socio-Economic Research', badge: 'Frontend & UI' }
  ];

  return (
    <section className="team-section">
      <div className="section-container">
        {/* Section Header */}
        <div className="section-header-block">
          <div className="team-badge-row">
            <div className="section-badge">
              <Users size={14} />
              <span>Smart India Hackathon 2026 Team</span>
            </div>
            <div className="arise-team-badge">
              <img src="/assets/arise_logo.png" alt="Team Arise Logo" className="arise-badge-logo" />
              <span>TEAM ID: 167577</span>
            </div>
          </div>
          <h2 className="section-title">
            Meet <span className="highlight-amber">Team Arise</span>
          </h2>
          <p className="section-subtitle">
            A passionate multidisciplinary engineering team dedicated to empowering rural Indian beekeepers and solving honey adulteration with deep tech.
          </p>
        </div>

        {/* Mentor Spotlight Card */}
        <div className="mentor-spotlight-card">
          <div className="mentor-avatar-box">
            <GraduationCap size={36} color="#D97706" />
          </div>
          <div className="mentor-details">
            <span className="mentor-badge">Faculty Mentor & Project Guide</span>
            <h3 className="mentor-name">Dr. K Arun Kumar</h3>
            <p className="mentor-bio">
              Expert in Embedded Systems, IoT Mesh Networks, and Applied Apicultural Engineering. Guiding Team Arise in hardware optimization, field trials, and KVIC Honey Mission compliance.
            </p>
          </div>
        </div>

        {/* Team Members Grid */}
        <div className="team-members-grid">
          {teamMembers.map((member, i) => (
            <div key={i} className="team-member-card">
              <div className="member-avatar-circle">
                <span className="avatar-initials">{member.name[0]}</span>
              </div>
              <span className="member-role-badge">{member.badge}</span>
              <h4 className="member-name">{member.name}</h4>
              <p className="member-role">{member.role}</p>
            </div>
          ))}
        </div>

        {/* Team Mission Motto Banner */}
        <div className="team-motto-banner">
          <Sparkles size={20} className="text-amber" />
          <p>
            <em>"Team Arise was founded with a single mission: to build technology that enables rural India to RISE. With ApiVera Chain, we restore truth, purity, and prosperity to Indian apiculture."</em>
          </p>
        </div>
      </div>
    </section>
  );
}

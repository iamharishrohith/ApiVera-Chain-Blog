import React, { useState } from 'react';
import { Award, ChevronLeft, ChevronRight, Download, FileText, CheckCircle2, Shield, Users, Layers, ExternalLink, User, Activity, Lock, Cpu, Droplets, Box, Zap } from 'lucide-react';
import { slidesData } from '../data/slidesData';

export default function SlideDeckViewer() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const totalSlides = slidesData.length;
  const slide = slidesData[currentSlideIndex];

  const handlePrev = () => {
    if (currentSlideIndex > 0) {
      setCurrentSlideIndex(currentSlideIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentSlideIndex < totalSlides - 1) {
      setCurrentSlideIndex(currentSlideIndex + 1);
    }
  };

  const renderInnovationIcon = (type) => {
    switch (type) {
      case 'optical':
        return <Activity size={18} className="text-emerald" />;
      case 'seal':
        return <Lock size={18} className="text-amber" />;
      case 'acoustic':
        return <Cpu size={18} className="text-cyan" />;
      case 'moisture':
        return <Droplets size={18} className="text-blue" />;
      case 'retrofit':
        return <Box size={18} className="text-purple" />;
      default:
        return <CheckCircle2 size={18} className="text-emerald" />;
    }
  };

  return (
    <section className="deck-section">
      <div className="section-container">
        {/* Section Header */}
        <div className="section-header-block">
          <div className="section-badge">
            <Award size={14} />
            <span>Official Smart India Hackathon 2026 Submission</span>
          </div>
          <h2 className="section-title">
            SIH 2026 Official Slide Deck <span className="highlight-amber">(Slides 1 to 6)</span>
          </h2>
          <p className="section-subtitle">
            Interactive presentation viewer based on the official fresh SIH PPT template submitted by <strong>Team Arise</strong> for <strong>Problem Statement ID: 26021 (Ministry of MSME / KVIC)</strong>.
          </p>
        </div>

        {/* Presentation Stage Container */}
        <div className="deck-viewer-container">
          {/* Deck Controls Header */}
          <div className="deck-controls-bar">
            <div className="slide-meta-info">
              <span className="slide-counter-badge">Slide {slide.slideNumber} of {totalSlides}</span>
              <span className="slide-header-tag">{slide.headerTag}</span>
            </div>

            <div className="slide-nav-actions">
              <button 
                className="deck-nav-btn" 
                onClick={handlePrev} 
                disabled={currentSlideIndex === 0}
              >
                <ChevronLeft size={18} />
                <span>Previous</span>
              </button>
              <button 
                className="deck-nav-btn primary" 
                onClick={handleNext} 
                disabled={currentSlideIndex === totalSlides - 1}
              >
                <span>Next Slide</span>
                <ChevronRight size={18} />
              </button>
              <a 
                href="/assets/ARISE - 26021.pdf" 
                download 
                className="deck-download-btn"
                target="_blank" 
                rel="noreferrer"
              >
                <Download size={16} />
                <span>Download PDF</span>
              </a>
            </div>
          </div>

          {/* Slide Screen Canvas */}
          <div className="slide-canvas">
            {/* Slide Header Banner */}
            <div className="slide-canvas-header">
              <div className="sih-brand-tag">
                <span className="sih-logo-mark"><Zap size={14} /></span>
                <span>SMART INDIA HACKATHON 2026</span>
              </div>
              <div className="sih-team-tag">
                <span>Team Arise • Problem ID: 26021</span>
              </div>
            </div>

            {/* Slide Body Rendering based on slide number */}
            <div className="slide-canvas-body">
              <h2 className="slide-canvas-title">{slide.title}</h2>
              <div className="slide-canvas-subtitle">{slide.subtitle}</div>

              {/* SLIDE 1: Title & Team */}
              {slide.slideNumber === 1 && (
                <div className="slide1-content-layout">
                  <div className="slide1-meta-grid">
                    <div className="meta-box">
                      <strong>Problem Statement ID:</strong> {slide.content.problemId}
                    </div>
                    <div className="meta-box">
                      <strong>Team ID:</strong> {slide.content.teamId}
                    </div>
                    <div className="meta-box">
                      <strong>Team Name:</strong> {slide.content.teamName}
                    </div>
                    <div className="meta-box">
                      <strong>Category:</strong> {slide.content.category}
                    </div>
                    <div className="meta-box full-width">
                      <strong>Theme:</strong> {slide.content.theme}
                    </div>
                    <div className="meta-box full-width">
                      <strong>PS Title:</strong> {slide.content.psTitle}
                    </div>
                  </div>

                  <div className="slide1-team-card">
                    <div className="mentor-lead-row">
                      <span><strong>Mentor:</strong> {slide.content.mentor}</span>
                      <span><strong>Team Lead:</strong> {slide.content.teamLead}</span>
                    </div>
                    <div className="members-chips-list">
                      {slide.content.members.map((m, i) => (
                        <span key={i} className="member-chip"><User size={13} /> {m}</span>
                      ))}
                    </div>
                  </div>

                  <div className="slide1-insights-grid">
                    {slide.content.insights.map((ins, i) => (
                      <div key={i} className="insight-card">
                        <strong className="text-amber">✓ {ins.title}:</strong>
                        <p>{ins.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* SLIDE 2: Solution & Innovation */}
              {slide.slideNumber === 2 && (
                <div className="slide2-content-layout">
                  <div className="layers-row">
                    {slide.content.architectureLayers.map((l, i) => (
                      <div key={i} className="layer-card">
                        <span className="layer-tag">{l.layer}</span>
                        <h4>{l.title}</h4>
                        <p>{l.desc}</p>
                      </div>
                    ))}
                  </div>

                  <div className="slide2-innovations-grid">
                    {slide.content.innovations.map((inv, i) => (
                      <div key={i} className="slide-inv-item">
                        <span className="inv-icon">{renderInnovationIcon(inv.icon)}</span>
                        <div>
                          <strong>{inv.title}:</strong> {inv.desc}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* SLIDE 3: Technical Approach */}
              {slide.slideNumber === 3 && (
                <div className="slide3-content-layout">
                  <div className="slide3-col">
                    <h3 className="slide-sub-heading">Hardware Edge Stack (100% Offline)</h3>
                    <div className="stack-items-list">
                      {slide.content.hardwareStack.map((h, i) => (
                        <div key={i} className="stack-item">
                          <strong className="text-cyan">{h.component}:</strong> {h.desc}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="slide3-col">
                    <h3 className="slide-sub-heading">Blockchain & Provenance Integration</h3>
                    <div className="stack-items-list">
                      {slide.content.blockchainStack.map((b, i) => (
                        <div key={i} className="stack-item">
                          <strong className="text-amber">{b.component}:</strong> {b.desc}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* SLIDE 4: Feasibility & Viability */}
              {slide.slideNumber === 4 && (
                <div className="slide4-content-layout">
                  <div className="bom-table-box">
                    <h3 className="slide-sub-heading">Bill of Materials (BOM) Cost Breakdown</h3>
                    <table className="slide-data-table">
                      <thead>
                        <tr>
                          <th>Subsystem / Component</th>
                          <th>Unit Cost (INR)</th>
                        </tr>
                      </thead>
                      <tbody>
                        {slide.content.bomTable.map((row, i) => (
                          <tr key={i} className={i === slide.content.bomTable.length - 1 ? 'total-row' : ''}>
                            <td>{row.item}</td>
                            <td><strong>{row.cost}</strong></td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <div className="mitigations-box">
                    <h3 className="slide-sub-heading">Ground Realities & Technical Mitigations</h3>
                    <div className="mitigation-items-list">
                      {slide.content.mitigations.map((m, i) => (
                        <div key={i} className="mitigation-item">
                          <span className="badge-risk">Risk: {m.challenge}</span>
                          <span className="badge-sol">➔ Solved: {m.solution}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* SLIDE 5: Impact & Benefits */}
              {slide.slideNumber === 5 && (
                <div className="slide5-content-layout">
                  <div className="metrics-cards-grid">
                    {slide.content.metrics.map((met, i) => (
                      <div key={i} className="impact-metric-card">
                        <span className="impact-label">{met.label}</span>
                        <div className="impact-before-after">
                          <span className="val-before">Before: {met.before}</span>
                          <span className="val-after text-emerald">After: {met.after}</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="five-steps-box">
                    <h3 className="slide-sub-heading">5-Step Traceability in Action</h3>
                    <div className="steps-chips-row">
                      {slide.content.fiveSteps.map((step, i) => (
                        <div key={i} className="step-chip-item">
                          <CheckCircle2 size={16} className="text-emerald" />
                          <span>{step}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* SLIDE 6: Research & References */}
              {slide.slideNumber === 6 && (
                <div className="slide6-content-layout">
                  <h3 className="slide-sub-heading">Peer-Reviewed Scientific & Government References</h3>
                  <table className="slide-data-table refs-table">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Research / Reference</th>
                        <th>Source / Journal</th>
                        <th>Key Contribution</th>
                      </tr>
                    </thead>
                    <tbody>
                      {slide.content.references.map((r, i) => (
                        <tr key={i}>
                          <td><strong>{r.id}</strong></td>
                          <td>{r.name}</td>
                          <td><span className="source-tag">{r.source}</span></td>
                          <td>{r.support}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>

            {/* Slide Footer */}
            <div className="slide-canvas-footer">
              <span>Ministry of MSME / KVIC Honey Mission • Problem Statement 26021</span>
              <span>Slide {slide.slideNumber} of {totalSlides}</span>
            </div>
          </div>

          {/* Slide Selector Thumbnails */}
          <div className="deck-thumbnails-strip">
            {slidesData.map((s, idx) => (
              <button
                key={s.slideNumber}
                className={`thumb-btn ${currentSlideIndex === idx ? 'active' : ''}`}
                onClick={() => setCurrentSlideIndex(idx)}
              >
                <span className="thumb-num">0{s.slideNumber}</span>
                <span className="thumb-name">{s.title.split('&')[0].trim()}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

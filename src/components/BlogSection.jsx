import React, { useState } from 'react';
import { BookOpen, Clock, Tag, User, ArrowRight, X, Sparkles, ChevronRight, Share2, Check } from 'lucide-react';
import { blogArticles } from '../data/blogArticles';

export default function BlogSection({ setActiveTab, onOpenPassport }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeArticle, setActiveArticle] = useState(null);
  const [copied, setCopied] = useState(false);

  const categories = ['All', 'Optics & Purity', 'Bio-AI & IoT', 'Thermodynamics', 'Blockchain & Cryptography', 'Hardware Engineering', 'Rural Economics'];

  const filteredArticles = selectedCategory === 'All' 
    ? blogArticles 
    : blogArticles.filter(a => a.category === selectedCategory);

  const handleShare = (article) => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="blog-section">
      <div className="section-container">
        {/* Section Header */}
        <div className="section-header-block">
          <div className="section-badge">
            <BookOpen size={14} />
            <span>R&D Technical Blog & Whitepaper Series</span>
          </div>
          <h2 className="section-title">
            Deep-Tech Scientific Foundations of <span className="highlight-amber">ApiVera Chain</span>
          </h2>
          <p className="section-subtitle">
            Explore the peer-reviewed physics, entomological biology, optical spectroscopy, and sovereign cryptographic state machines powering our SIH 2026 solution.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="category-filter-row">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`category-filter-btn ${selectedCategory === cat ? 'active' : ''}`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Blog Cards Grid */}
        <div className="blog-cards-grid">
          {filteredArticles.map((article) => (
            <article key={article.id} className="blog-card" onClick={() => setActiveArticle(article)}>
              <div className="blog-card-img-wrapper">
                <img 
                  src={article.image} 
                  alt={article.title} 
                  className="blog-card-img" 
                  onError={(e) => { e.target.src = '/assets/1_honey_adulteration_problem.jpg'; }}
                />
                <span className="blog-card-category">{article.category}</span>
              </div>
              <div className="blog-card-body">
                <div className="blog-card-meta">
                  <span><Clock size={13} /> {article.readTime}</span>
                  <span>•</span>
                  <span>{article.date}</span>
                </div>
                <h3 className="blog-card-title">{article.title}</h3>
                <p className="blog-card-summary">{article.summary}</p>
                
                <div className="blog-card-tags">
                  {article.tags.slice(0, 3).map((tag, i) => (
                    <span key={i} className="blog-tag">#{tag}</span>
                  ))}
                </div>

                <div className="blog-card-footer">
                  <span className="read-more-link">
                    Read Full Paper <ChevronRight size={15} />
                  </span>
                  <span className="author-pill"><User size={12} /> {article.author}</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Interactive Lab Callout Banner */}
        <div className="blog-callout-banner">
          <div className="callout-text">
            <h3>Want to test the Optical Polarimetry Physics in real time?</h3>
            <p>Launch the interactive virtual polarimeter to see how pure Levo-rotatory raw honey bends light compared to synthetic C3/C4 syrups.</p>
          </div>
          <button className="callout-action-btn" onClick={() => setActiveTab('optical-lab')}>
            <span>Launch Virtual Polarimeter Lab</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </div>

      {/* Full Article Reader Modal */}
      {activeArticle && (
        <div className="article-modal-overlay" onClick={() => setActiveArticle(null)}>
          <div className="article-modal-card" onClick={(e) => e.stopPropagation()}>
            <div className="article-modal-header">
              <div className="modal-header-meta">
                <span className="modal-category-badge">{activeArticle.category}</span>
                <span className="modal-read-time"><Clock size={14} /> {activeArticle.readTime}</span>
                <span className="modal-date">• {activeArticle.date}</span>
              </div>
              <button className="modal-close-btn" onClick={() => setActiveArticle(null)}>
                <X size={20} />
              </button>
            </div>

            <div className="article-modal-body">
              <h1 className="article-modal-title">{activeArticle.title}</h1>
              <div className="article-author-row">
                <div className="author-info">
                  <div className="author-avatar">🐝</div>
                  <div>
                    <div className="author-name">{activeArticle.author}</div>
                    <div className="author-role">ApiVera Research & Team Arise • SIH 2026</div>
                  </div>
                </div>
                <button className="share-btn" onClick={() => handleShare(activeArticle)}>
                  {copied ? <Check size={16} className="text-emerald" /> : <Share2 size={16} />}
                  <span>{copied ? 'Link Copied!' : 'Share'}</span>
                </button>
              </div>

              {activeArticle.image && (
                <div className="article-hero-image-box">
                  <img src={activeArticle.image} alt={activeArticle.title} className="article-hero-img" />
                </div>
              )}

              <div className="article-rendered-content">
                {activeArticle.content.split('\n\n').map((paragraph, idx) => {
                  if (paragraph.startsWith('### ')) {
                    return <h3 key={idx} className="article-h3">{paragraph.replace('### ', '')}</h3>;
                  }
                  if (paragraph.startsWith('#### ')) {
                    return <h4 key={idx} className="article-h4">{paragraph.replace('#### ', '')}</h4>;
                  }
                  if (paragraph.startsWith('* ') || paragraph.startsWith('1. ') || paragraph.startsWith('2. ')) {
                    return (
                      <div key={idx} className="article-list-item">
                        {paragraph}
                      </div>
                    );
                  }
                  if (paragraph.startsWith('$$')) {
                    return (
                      <div key={idx} className="math-equation-block">
                        <code>{paragraph.replace(/\$\$/g, '')}</code>
                      </div>
                    );
                  }
                  if (paragraph.startsWith('| ')) {
                    return (
                      <div key={idx} className="article-table-raw">
                        <pre>{paragraph}</pre>
                      </div>
                    );
                  }
                  return <p key={idx} className="article-paragraph">{paragraph}</p>;
                })}
              </div>

              {/* Tags & Action in Modal */}
              <div className="article-modal-footer">
                <div className="modal-tags-list">
                  {activeArticle.tags.map((tag, i) => (
                    <span key={i} className="footer-tag">#{tag}</span>
                  ))}
                </div>
                <div className="modal-action-btns">
                  <button className="btn-modal-action" onClick={() => { setActiveArticle(null); setActiveTab('optical-lab'); }}>
                    Open Lab Simulator
                  </button>
                  <button className="btn-modal-action primary" onClick={() => { setActiveArticle(null); onOpenPassport(); }}>
                    Scan Honey Passport
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

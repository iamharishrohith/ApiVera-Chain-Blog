import React, { useState } from 'react';
import TopGovHeader from './components/TopGovHeader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BlogSection from './components/BlogSection';
import OpticalLabSimulator from './components/OpticalLabSimulator';
import BioAcousticVisualizer from './components/BioAcousticVisualizer';
import BlockchainExplorer from './components/BlockchainExplorer';
import PanIndiaHiveGuide from './components/PanIndiaHiveGuide';
import TeamSection from './components/TeamSection';
import HoneyPassportModal from './components/HoneyPassportModal';
import Footer from './components/Footer';
import './App.css';

export default function App() {
  const [activeTab, setActiveTab] = useState('overview');
  const [isPassportOpen, setIsPassportOpen] = useState(false);

  return (
    <div className="app-root">
      {/* Official Government & SIH Header */}
      <TopGovHeader />

      {/* Top Navigation */}
      <Navbar 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        onOpenPassport={() => setIsPassportOpen(true)} 
      />

      {/* Main Content Body */}
      <main className="main-content">
        {activeTab === 'overview' && (
          <>
            <Hero 
              setActiveTab={setActiveTab} 
              onOpenPassport={() => setIsPassportOpen(true)} 
            />
            <BlogSection 
              setActiveTab={setActiveTab} 
              onOpenPassport={() => setIsPassportOpen(true)} 
            />
            <OpticalLabSimulator />
            <BioAcousticVisualizer />
            <BlockchainExplorer 
              onOpenPassportWithBatch={() => setIsPassportOpen(true)} 
            />
            <PanIndiaHiveGuide 
              setActiveTab={setActiveTab} 
            />
            <TeamSection />
          </>
        )}

        {activeTab === 'blog' && (
          <BlogSection 
            setActiveTab={setActiveTab} 
            onOpenPassport={() => setIsPassportOpen(true)} 
          />
        )}

        {activeTab === 'optical-lab' && (
          <OpticalLabSimulator />
        )}

        {activeTab === 'acoustic-ai' && (
          <BioAcousticVisualizer />
        )}

        {activeTab === 'blockchain' && (
          <BlockchainExplorer 
            onOpenPassportWithBatch={() => setIsPassportOpen(true)} 
          />
        )}

        {activeTab === 'pan-india' && (
          <PanIndiaHiveGuide 
            setActiveTab={setActiveTab} 
          />
        )}

        {activeTab === 'team' && (
          <TeamSection />
        )}
      </main>

      {/* Honey Passport Modal Simulator */}
      <HoneyPassportModal 
        isOpen={isPassportOpen} 
        onClose={() => setIsPassportOpen(false)} 
      />

      {/* Footer */}
      <Footer 
        setActiveTab={setActiveTab} 
        onOpenPassport={() => setIsPassportOpen(true)} 
      />
    </div>
  );
}

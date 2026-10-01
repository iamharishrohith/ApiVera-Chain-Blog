import React, { useState } from 'react';
import { Shield, Lock, Unlock, Flame, CheckCircle2, AlertTriangle, QrCode, RefreshCw, Hash, Cpu, ArrowRight } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function BlockchainExplorer({ onOpenPassportWithBatch }) {
  const [harvestWeight, setHarvestWeight] = useState(10.0); // kg
  const [unitSize, setUnitSize] = useState(500); // grams
  const [beekeeperName, setBeekeeperName] = useState('Gurpreet Singh (Hoshiarpur)');
  const [clusterFlora, setClusterFlora] = useState('Punjab Pure Mustard Blossom');
  const [moistureScore, setMoistureScore] = useState(17.2);
  const [opticalRotation, setOpticalRotation] = useState(-16.2);

  // Initial Seed Batches
  const [batches, setBatches] = useState([
    {
      batchId: '0x9f4a8b1e02cd',
      batchCode: 'KVIC-PB-2026-084',
      beekeeper: 'Gurpreet Singh',
      cluster: 'Hoshiarpur, Punjab',
      flora: 'Mustard Blossom',
      weightKg: 10.0,
      totalJars: 20,
      moisture: 17.2,
      optical: -16.2,
      merkleRoot: '0x7b8c...4e1a',
      timestamp: '2026-10-01 10:14:22',
      jarsBurnedCount: 1,
      jars: Array.from({ length: 20 }, (_, i) => ({
        jarNum: i + 1,
        jarHash: `0x8a${(i + 1).toString(16).padStart(2, '0')}f7e...${(i * 3 + 12).toString(16)}`,
        isBurned: i === 0, // Jar #1 is burned as demo
        openedAt: i === 0 ? '2026-10-01 12:42:15 in New Delhi' : null
      }))
    }
  ]);

  const [activeBatchIndex, setActiveBatchIndex] = useState(0);
  const [verificationFeedback, setVerificationFeedback] = useState(null);

  const currentBatch = batches[activeBatchIndex];

  // Calculate allowed jars based on Mass-Conservation Law
  const calculatedMaxJars = Math.floor((harvestWeight * 1000) / unitSize);

  const handleMintBatch = (e) => {
    e.preventDefault();
    if (moistureScore > 18.0) {
      alert('Smart contract execution reverted: Honey moisture exceeds FSSAI 18.0% limit!');
      return;
    }
    if (opticalRotation >= 0) {
      alert('Smart contract execution reverted: Dextrorotatory optical angle indicates adulterated syrup!');
      return;
    }

    const newBatchId = '0x' + Math.random().toString(16).substring(2, 14);
    const newBatchCode = `KVIC-PB-2026-${Math.floor(100 + Math.random() * 900)}`;
    const newMerkleRoot = '0x' + Math.random().toString(16).substring(2, 10) + '...' + Math.random().toString(16).substring(2, 6);

    const newJars = Array.from({ length: calculatedMaxJars }, (_, i) => ({
      jarNum: i + 1,
      jarHash: '0x' + Math.random().toString(16).substring(2, 10) + '...' + (i + 1).toString(16),
      isBurned: false,
      openedAt: null
    }));

    const newBatch = {
      batchId: newBatchId,
      batchCode: newBatchCode,
      beekeeper: beekeeperName.split('(')[0].trim(),
      cluster: 'Hoshiarpur, Punjab',
      flora: clusterFlora,
      weightKg: harvestWeight,
      totalJars: calculatedMaxJars,
      moisture: moistureScore,
      optical: opticalRotation,
      merkleRoot: newMerkleRoot,
      timestamp: new Date().toISOString().replace('T', ' ').substring(0, 19),
      jarsBurnedCount: 0,
      jars: newJars
    };

    setBatches([newBatch, ...batches]);
    setActiveBatchIndex(0);
    confetti({ particleCount: 80, spread: 70, origin: { y: 0.6 } });
  };

  const handleVerifyAndBurnJar = (jarIndex) => {
    const jar = currentBatch.jars[jarIndex];
    if (jar.isBurned) {
      setVerificationFeedback({
        type: 'REFILL_FRAUD',
        jarNum: jar.jarNum,
        message: `CRITICAL ALERT: Jar #${jar.jarNum} was already opened and consumed on ${jar.openedAt}. DO NOT BUY — Potential bottle refill counterfeit!`
      });
      return;
    }

    // Burn token on first open
    const updatedJars = [...currentBatch.jars];
    const openTime = new Date().toISOString().replace('T', ' ').substring(0, 19) + ' in Chandigarh';
    updatedJars[jarIndex] = {
      ...jar,
      isBurned: true,
      openedAt: openTime
    };

    const updatedBatch = {
      ...currentBatch,
      jarsBurnedCount: currentBatch.jarsBurnedCount + 1,
      jars: updatedJars
    };

    const updatedBatches = [...batches];
    updatedBatches[activeBatchIndex] = updatedBatch;
    setBatches(updatedBatches);

    setVerificationFeedback({
      type: 'FIRST_OPEN_SUCCESS',
      jarNum: jar.jarNum,
      message: `✅ AUTHENTICATED: Jar #${jar.jarNum} successfully verified on blockchain. Single-use token permanently BURNED.`
    });

    confetti({ particleCount: 50, spread: 60, origin: { y: 0.7 } });
  };

  return (
    <section className="blockchain-section">
      <div className="section-container">
        {/* Section Header */}
        <div className="section-header-block">
          <div className="section-badge">
            <Shield size={14} />
            <span>Sovereign Blockchain & Mass-Conservation Registry</span>
          </div>
          <h2 className="section-title">
            Mass-Conservation Invariant & <span className="highlight-amber">Burn-On-Open</span> Explorer
          </h2>
          <p className="section-subtitle">
            See how smart contracts prevent token over-minting by capping total jars to scale weight ($\Delta W$) and destroy digital tokens upon seal break to prevent counterfeit bottle refilling.
          </p>
        </div>

        {/* Explorer Workspace Grid */}
        <div className="blockchain-grid">
          {/* Left Column: Harvest Scale Logger & Batch Minting Form */}
          <div className="batch-minting-panel">
            <div className="panel-card-header">
              <span className="panel-title">1. Log Harvest Drop & Mint Batch</span>
              <span className="badge-contract">ApiVeraProvenanceRegistry.sol</span>
            </div>

            <form onSubmit={handleMintBatch} className="mint-form">
              <div className="form-field">
                <label>Physical Harvest Scale Drop (ΔW):</label>
                <div className="input-group-unit">
                  <input 
                    type="number" 
                    step="0.5" 
                    min="1.0" 
                    max="100.0" 
                    value={harvestWeight}
                    onChange={(e) => setHarvestWeight(parseFloat(e.target.value) || 0)}
                    required
                  />
                  <span className="unit-badge">kg</span>
                </div>
              </div>

              <div className="form-field">
                <label>Unit Jar Size Packaging:</label>
                <select value={unitSize} onChange={(e) => setUnitSize(parseInt(e.target.value))}>
                  <option value={250}>250 grams (Small Jar)</option>
                  <option value={500}>500 grams (Standard KVIC Jar)</option>
                  <option value={1000}>1000 grams / 1 kg (Bulk Jar)</option>
                </select>
              </div>

              {/* Mass Conservation Calculation Box */}
              <div className="mass-conservation-calc-box">
                <div className="calc-header">
                  <span>Mass-Conservation Invariant Formula:</span>
                  <code>N_jars = ⌊ΔW_harvest / W_unit⌋</code>
                </div>
                <div className="calc-result-row">
                  <span>Calculated Maximum Allowed Jars:</span>
                  <strong className="text-amber">{calculatedMaxJars} Jars</strong>
                </div>
              </div>

              <div className="form-field">
                <label>Beekeeper & Apiary Origin:</label>
                <input 
                  type="text" 
                  value={beekeeperName} 
                  onChange={(e) => setBeekeeperName(e.target.value)} 
                  required 
                />
              </div>

              <div className="form-field-row">
                <div className="form-field">
                  <label>Refractometer Moisture:</label>
                  <input 
                    type="number" 
                    step="0.1" 
                    value={moistureScore} 
                    onChange={(e) => setMoistureScore(parseFloat(e.target.value))} 
                    required 
                  />
                  <span className="field-hint">Max FSSAI: 18.0%</span>
                </div>

                <div className="form-field">
                  <label>Optical Angle ([α]D):</label>
                  <input 
                    type="number" 
                    step="0.1" 
                    value={opticalRotation} 
                    onChange={(e) => setOpticalRotation(parseFloat(e.target.value))} 
                    required 
                  />
                  <span className="field-hint">Must be negative (Levo)</span>
                </div>
              </div>

              <button type="submit" className="btn-mint-submit">
                <Shield size={16} />
                <span>Execute Batch Minting on Polygon PoA</span>
                <ArrowRight size={16} />
              </button>
            </form>
          </div>

          {/* Right Column: Live On-Chain Batch & Jar Token Inspector */}
          <div className="batch-inspector-panel">
            <div className="panel-card-header">
              <span className="panel-title">2. On-Chain Batch Registry: {currentBatch.batchCode}</span>
              <span className="badge-merkle">Merkle Root: {currentBatch.merkleRoot}</span>
            </div>

            {/* Active Batch Summary Card */}
            <div className="batch-meta-card">
              <div className="meta-row">
                <div className="meta-item">
                  <span className="label">Batch Hash:</span>
                  <strong className="hash-val">{currentBatch.batchId}</strong>
                </div>
                <div className="meta-item">
                  <span className="label">Beekeeper:</span>
                  <strong>{currentBatch.beekeeper}</strong>
                </div>
              </div>

              <div className="meta-row">
                <div className="meta-item">
                  <span className="label">Total Scale Drop:</span>
                  <strong className="text-amber">{currentBatch.weightKg} kg</strong>
                </div>
                <div className="meta-item">
                  <span className="label">Mass-Locked Jars:</span>
                  <strong>{currentBatch.totalJars} Jars Minted</strong>
                </div>
                <div className="meta-item">
                  <span className="label">Burned / Consumed:</span>
                  <strong className="text-purple">{currentBatch.jarsBurnedCount} / {currentBatch.totalJars}</strong>
                </div>
              </div>
            </div>

            {/* Jar Verification Alert Banner */}
            {verificationFeedback && (
              <div className={`verification-banner ${verificationFeedback.type === 'FIRST_OPEN_SUCCESS' ? 'success' : 'fraud'}`}>
                {verificationFeedback.type === 'FIRST_OPEN_SUCCESS' ? (
                  <CheckCircle2 size={24} className="text-emerald" />
                ) : (
                  <AlertTriangle size={24} className="text-red" />
                )}
                <div className="banner-text">
                  <strong>{verificationFeedback.type === 'FIRST_OPEN_SUCCESS' ? 'Authentic First Scan' : 'Counterfeit Refill Alert'}</strong>
                  <p>{verificationFeedback.message}</p>
                </div>
              </div>
            )}

            {/* Interactive Jar Token Grid */}
            <div className="jar-token-grid-header">
              <span>Simulate Physical Jar Tamper Seal Verification:</span>
              <span className="token-count-label">{currentBatch.jars.length} Unique ERC-1155 Tokens</span>
            </div>

            <div className="jar-tokens-grid">
              {currentBatch.jars.map((jar, idx) => (
                <div 
                  key={idx} 
                  className={`jar-token-card ${jar.isBurned ? 'burned' : 'sealed'}`}
                  onClick={() => handleVerifyAndBurnJar(idx)}
                >
                  <div className="jar-token-top">
                    <span className="jar-num">Jar #{jar.jarNum}</span>
                    {jar.isBurned ? (
                      <span className="burn-badge"><Flame size={12} /> BURNED</span>
                    ) : (
                      <span className="sealed-badge"><Lock size={12} /> SEALED</span>
                    )}
                  </div>
                  <div className="jar-hash-preview">{jar.jarHash}</div>
                  <div className="jar-action-cue">
                    {jar.isBurned ? 'Click to test duplicate refill scan' : 'Click to break seal & verify'}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

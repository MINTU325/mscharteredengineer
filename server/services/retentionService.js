const DpdpStore = require('../models/dpdpStore');

class RetentionService {
  static init() {
    console.log('[DPDP Retention Service] Initializing statutory data retention engine (Section 8(7) DPDP Act 2023)...');
    
    // Run an initial pruning check 10 seconds after server startup
    setTimeout(() => {
      try {
        const result = DpdpStore.runRetentionPruning({ retentionDays: 180 });
        console.log(`[DPDP Retention Service] Startup prune complete. Anonymized: ${result.inquiriesAnonymized}, Consents pruned: ${result.consentsPruned}`);
      } catch (err) {
        console.error('[DPDP Retention Service] Error during startup prune:', err);
      }
    }, 10000);

    // Schedule daily background execution (every 24 hours = 86,400,000 ms)
    setInterval(() => {
      try {
        console.log('[DPDP Retention Service] Running daily statutory retention cycle...');
        const result = DpdpStore.runRetentionPruning({ retentionDays: 180 });
        console.log(`[DPDP Retention Service] Daily cycle finished. Anonymized: ${result.inquiriesAnonymized}, Consents pruned: ${result.consentsPruned}`);
      } catch (err) {
        console.error('[DPDP Retention Service] Error during daily retention cycle:', err);
      }
    }, 24 * 60 * 60 * 1000);
  }
}

module.exports = RetentionService;

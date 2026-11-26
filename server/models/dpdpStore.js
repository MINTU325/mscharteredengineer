const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const DATA_DIR = path.join(__dirname, '..', 'data');
const CONSENTS_FILE = path.join(DATA_DIR, 'dpdp_consents.json');
const GRIEVANCES_FILE = path.join(DATA_DIR, 'dpdp_grievances.json');
const RIGHTS_FILE = path.join(DATA_DIR, 'dpdp_rights_requests.json');
const RETENTION_AUDIT_FILE = path.join(DATA_DIR, 'dpdp_retention_audit.log');
const INQUIRIES_FILE = path.join(DATA_DIR, 'inquiries.json');

// Ensure data directory exists
if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
}

// Helper to safely read JSON
const readJson = (file, fallback = []) => {
  try {
    if (!fs.existsSync(file)) {
      fs.writeFileSync(file, JSON.stringify(fallback, null, 2), 'utf-8');
      return fallback;
    }
    const raw = fs.readFileSync(file, 'utf-8');
    return JSON.parse(raw);
  } catch (err) {
    console.error(`Error reading ${file}:`, err);
    return fallback;
  }
};

// Helper to safely write JSON
const writeJson = (file, data) => {
  try {
    fs.writeFileSync(file, JSON.stringify(data, null, 2), 'utf-8');
    return true;
  } catch (err) {
    console.error(`Error writing ${file}:`, err);
    return false;
  }
};

// Hash IP for DPDP-compliant pseudo-anonymization (Section 8)
const hashIdentifier = (val) => {
  if (!val) return 'anonymous';
  return crypto.createHash('sha256').update(val + (process.env.DPDP_SALT || 'ks_dpdp_salt_2026')).digest('hex').slice(0, 16);
};

// Seed initial files if missing
if (!fs.existsSync(CONSENTS_FILE)) writeJson(CONSENTS_FILE, []);
if (!fs.existsSync(GRIEVANCES_FILE)) writeJson(GRIEVANCES_FILE, []);
if (!fs.existsSync(RIGHTS_FILE)) writeJson(RIGHTS_FILE, []);

class DpdpStore {
  // ─────────────────────────────────────────────
  // 1. STATUTORY CONSENT REGISTER (Section 6 DPDP)
  // ─────────────────────────────────────────────
  static recordConsent({ choice, necessary = true, optional = false, ip = '', userAgent = '', referer = '', version = 'dpdp_2023_v1' }) {
    const list = readJson(CONSENTS_FILE, []);
    const ipHash = hashIdentifier(ip);

    const record = {
      consentId: 'CST-' + Date.now().toString(36).toUpperCase() + '-' + Math.floor(1000 + Math.random() * 9000),
      timestamp: new Date().toISOString(),
      choice: choice || (optional ? 'accepted_optional' : 'rejected_optional'),
      necessary: true,
      optional: !!optional,
      ipHash,
      userAgent: userAgent ? userAgent.slice(0, 140) : 'Standard Browser',
      referer: referer || '/',
      version,
      status: 'Active',
      expiresAt: new Date(Date.now() + 180 * 24 * 60 * 60 * 1000).toISOString() // 6 months (180 days)
    };

    list.unshift(record);
    // Keep max 5000 consent logs in local JSON to prevent file ballooning
    if (list.length > 5000) list.length = 5000;
    writeJson(CONSENTS_FILE, list);
    return record;
  }

  static getConsents({ limit = 50, search = '' } = {}) {
    let list = readJson(CONSENTS_FILE, []);
    if (search) {
      const q = search.toLowerCase();
      list = list.filter(c => c.consentId.toLowerCase().includes(q) || c.choice.toLowerCase().includes(q) || c.ipHash.includes(q));
    }
    return {
      total: list.length,
      consents: list.slice(0, Number(limit))
    };
  }

  // ─────────────────────────────────────────────
  // 2. PRIVACY GRIEVANCES (Section 13 DPDP)
  // ─────────────────────────────────────────────
  static createGrievance({ name, email, phone, grievanceType, description }) {
    const list = readJson(GRIEVANCES_FILE, []);
    const now = new Date();
    // DPDP statutory SLA is 30 calendar days
    const slaTarget = new Date(now.getTime() + 30 * 24 * 60 * 60 * 1000);

    const ticket = {
      ticketId: 'DPBI-GRV-' + Math.floor(100000 + Math.random() * 900000),
      createdAt: now.toISOString(),
      slaTargetDate: slaTarget.toISOString(),
      slaDaysRemaining: 30,
      name,
      email,
      phone: phone || 'Not provided',
      grievanceType: grievanceType || 'unauthorized_contact',
      description: description || '',
      status: 'Open', // Open | Under Review | Resolved | Rejected
      designatedOfficer: 'Grievance Officer, KS Chartered Engineers (Jaipur HQ)',
      resolutionNotes: '',
      resolvedAt: null
    };

    list.unshift(ticket);
    writeJson(GRIEVANCES_FILE, list);
    return ticket;
  }

  static getGrievances({ status = 'All', search = '' } = {}) {
    let list = readJson(GRIEVANCES_FILE, []);
    const now = Date.now();

    // Dynamically calculate SLA days remaining
    list = list.map(item => {
      const targetTime = new Date(item.slaTargetDate).getTime();
      const remainingDays = Math.max(0, Math.ceil((targetTime - now) / (1000 * 60 * 60 * 24)));
      return { ...item, slaDaysRemaining: item.status === 'Resolved' ? 0 : remainingDays };
    });

    if (status && status !== 'All') {
      list = list.filter(g => g.status.toLowerCase() === status.toLowerCase());
    }

    if (search) {
      const q = search.toLowerCase();
      list = list.filter(g => 
        g.ticketId.toLowerCase().includes(q) || 
        g.name.toLowerCase().includes(q) || 
        g.email.toLowerCase().includes(q) ||
        g.grievanceType.toLowerCase().includes(q)
      );
    }

    return list;
  }

  static updateGrievance(ticketId, { status, resolutionNotes }) {
    const list = readJson(GRIEVANCES_FILE, []);
    const idx = list.findIndex(g => g.ticketId === ticketId);
    if (idx === -1) return null;

    if (status) list[idx].status = status;
    if (resolutionNotes) list[idx].resolutionNotes = resolutionNotes;
    if (status === 'Resolved' && !list[idx].resolvedAt) {
      list[idx].resolvedAt = new Date().toISOString();
    }

    writeJson(GRIEVANCES_FILE, list);
    return list[idx];
  }

  // ─────────────────────────────────────────────
  // 3. DATA PRINCIPAL RIGHTS (Chapter III Sections 11-14)
  // ─────────────────────────────────────────────
  static createRightsRequest({ fullName, email, phone, requestType, details, nomineeName, nomineeRelationship, nomineeContact }) {
    const list = readJson(RIGHTS_FILE, []);
    const now = new Date();
    const slaTarget = new Date(now.getTime() + 30 * 24 * 60 * 60 * 1000);

    const ticket = {
      requestId: 'DPR-' + Math.floor(100000 + Math.random() * 900000),
      createdAt: now.toISOString(),
      slaTargetDate: slaTarget.toISOString(),
      fullName,
      email,
      phone: phone || 'Not provided',
      requestType, // access | correction | erasure | nomination
      details: details || '',
      nomineeDetails: requestType === 'nomination' ? {
        name: nomineeName,
        relationship: nomineeRelationship,
        contact: nomineeContact
      } : null,
      status: 'Received', // Received | In Verification | Processed | Rejected
      verificationStatus: 'Pending ID Verification',
      actionLog: [
        { timestamp: now.toISOString(), action: 'Statutory rights request logged under DPDP Act 2023.' }
      ]
    };

    list.unshift(ticket);
    writeJson(RIGHTS_FILE, list);
    return ticket;
  }

  static getRightsRequests() {
    return readJson(RIGHTS_FILE, []);
  }

  // ─────────────────────────────────────────────
  // 4. AUTOMATED DATA RETENTION ENGINE (Section 8(7))
  // ─────────────────────────────────────────────
  static runRetentionPruning({ retentionDays = 180, dryRun = false } = {}) {
    const cutoffTimestamp = Date.now() - (retentionDays * 24 * 60 * 60 * 1000);
    const cutoffDate = new Date(cutoffTimestamp);
    let inquiriesPruned = 0;
    let inquiriesAnonymized = 0;
    let consentsPruned = 0;

    // A. Prune or Anonymize old inquiries in inquiries.json
    let inquiries = readJson(INQUIRIES_FILE, []);
    inquiries = inquiries.map(inq => {
      const created = new Date(inq.createdAt || 0).getTime();
      if (created < cutoffTimestamp && inq.status !== 'Anonymized') {
        inquiriesAnonymized++;
        if (!dryRun) {
          // Statutory redaction of Personal Data
          return {
            ...inq,
            name: 'Data Principal (Redacted under DPDP)',
            company: 'Private Enterprise',
            email: 'redacted@dpdp-compliance.gov.in',
            phone: inq.phone ? inq.phone.slice(0, 4) + 'XXXXXX' : 'XXXXXX',
            projectScope: '[Confidential details purged after 180-day retention]',
            status: 'Anonymized',
            anonymizedAt: new Date().toISOString()
          };
        }
      }
      return inq;
    });

    if (!dryRun && inquiriesAnonymized > 0) {
      writeJson(INQUIRIES_FILE, inquiries);
    }

    // B. Prune expired consent logs (> 180 days)
    let consents = readJson(CONSENTS_FILE, []);
    const initialConsentCount = consents.length;
    consents = consents.filter(c => {
      const ts = new Date(c.timestamp || 0).getTime();
      return ts >= cutoffTimestamp;
    });
    consentsPruned = initialConsentCount - consents.length;

    if (!dryRun && consentsPruned > 0) {
      writeJson(CONSENTS_FILE, consents);
    }

    // C. Write to audit log
    const logEntry = `[${new Date().toISOString()}] RETENTION_PRUNE: retentionPeriod=${retentionDays}d, inquiriesAnonymized=${inquiriesAnonymized}, consentsPruned=${consentsPruned}, dryRun=${dryRun}\n`;
    try {
      fs.appendFileSync(RETENTION_AUDIT_FILE, logEntry, 'utf-8');
    } catch (e) {
      console.warn('Failed to append to retention audit log:', e);
    }

    return {
      success: true,
      timestamp: new Date().toISOString(),
      retentionDays,
      cutoffDate: cutoffDate.toISOString(),
      inquiriesAnonymized,
      consentsPruned,
      dryRun
    };
  }

  static getRetentionStatus() {
    let lastLog = 'No retention runs executed yet.';
    if (fs.existsSync(RETENTION_AUDIT_FILE)) {
      const logs = fs.readFileSync(RETENTION_AUDIT_FILE, 'utf-8').trim().split('\n');
      lastLog = logs[logs.length - 1] || 'No entries';
    }

    const inquiries = readJson(INQUIRIES_FILE, []);
    const consents = readJson(CONSENTS_FILE, []);
    const grievances = readJson(GRIEVANCES_FILE, []);
    const rights = readJson(RIGHTS_FILE, []);

    const anonymizedCount = inquiries.filter(i => i.status === 'Anonymized').length;

    return {
      policy: 'DPDP Act 2023 Statutory Retention Policy',
      standardRetentionDays: 180,
      grievanceRetentionDays: 365,
      totalInquiries: inquiries.length,
      anonymizedInquiries: anonymizedCount,
      activeConsentRecords: consents.length,
      totalGrievancesLogged: grievances.length,
      totalRightsRequests: rights.length,
      lastAuditLog: lastLog
    };
  }
}

module.exports = DpdpStore;

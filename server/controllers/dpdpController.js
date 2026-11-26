const DpdpStore = require('../models/dpdpStore');

// 1. Record Cookie Consent (Public)
exports.recordConsent = async (req, res) => {
  try {
    const { choice, necessary, optional, version } = req.body;
    const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress || '';
    const userAgent = req.headers['user-agent'] || '';
    const referer = req.headers['referer'] || '';

    const record = DpdpStore.recordConsent({
      choice,
      necessary,
      optional,
      ip,
      userAgent,
      referer,
      version
    });

    return res.status(201).json({
      success: true,
      message: 'Statutory consent recorded under Section 6 of DPDP Act 2023',
      consentId: record.consentId,
      expiresAt: record.expiresAt
    });
  } catch (err) {
    console.error('Error in recordConsent:', err);
    return res.status(500).json({ success: false, message: 'Server error recording consent' });
  }
};

// 2. Get All Consents (Admin)
exports.getConsents = async (req, res) => {
  try {
    const { limit = 50, search = '' } = req.query;
    const result = DpdpStore.getConsents({ limit, search });
    return res.status(200).json({ success: true, ...result });
  } catch (err) {
    console.error('Error in getConsents:', err);
    return res.status(500).json({ success: false, message: 'Server error fetching consent register' });
  }
};

// 3. Submit Privacy Grievance (Public)
exports.submitGrievance = async (req, res) => {
  try {
    const { name, email, phone, grievanceType, description } = req.body;

    if (!name || !email) {
      return res.status(400).json({
        success: false,
        message: 'Name and email are mandatory for statutory grievance registration.'
      });
    }

    const ticket = DpdpStore.createGrievance({
      name,
      email,
      phone,
      grievanceType,
      description
    });

    return res.status(201).json({
      success: true,
      message: 'Privacy grievance successfully logged. Assigned to Grievance Officer under Section 13.',
      ticketId: ticket.ticketId,
      slaTargetDate: ticket.slaTargetDate,
      data: ticket
    });
  } catch (err) {
    console.error('Error in submitGrievance:', err);
    return res.status(500).json({ success: false, message: 'Server error registering grievance' });
  }
};

// 4. Get All Grievances (Admin)
exports.getGrievances = async (req, res) => {
  try {
    const { status, search } = req.query;
    const list = DpdpStore.getGrievances({ status, search });
    return res.status(200).json({ success: true, count: list.length, data: list });
  } catch (err) {
    console.error('Error in getGrievances:', err);
    return res.status(500).json({ success: false, message: 'Server error retrieving grievances' });
  }
};

// 5. Update Grievance Status (Admin)
exports.updateGrievance = async (req, res) => {
  try {
    const { id } = req.params;
    const { status, resolutionNotes } = req.body;

    const updated = DpdpStore.updateGrievance(id, { status, resolutionNotes });
    if (!updated) {
      return res.status(404).json({ success: false, message: 'Grievance ticket not found' });
    }

    return res.status(200).json({ success: true, message: 'Grievance updated successfully', data: updated });
  } catch (err) {
    console.error('Error in updateGrievance:', err);
    return res.status(500).json({ success: false, message: 'Server error updating grievance' });
  }
};

// 6. Submit Data Principal Rights Request (Public)
exports.submitRightsRequest = async (req, res) => {
  try {
    const { fullName, email, phone, requestType, details, nomineeName, nomineeRelationship, nomineeContact } = req.body;

    if (!fullName || !email || !requestType) {
      return res.status(400).json({
        success: false,
        message: 'Full name, email, and request type are mandatory.'
      });
    }

    const request = DpdpStore.createRightsRequest({
      fullName,
      email,
      phone,
      requestType,
      details,
      nomineeName,
      nomineeRelationship,
      nomineeContact
    });

    return res.status(201).json({
      success: true,
      message: `Data Principal Right (${requestType.toUpperCase()}) successfully submitted under Chapter III of DPDP Act 2023.`,
      requestId: request.requestId,
      slaTargetDate: request.slaTargetDate,
      data: request
    });
  } catch (err) {
    console.error('Error in submitRightsRequest:', err);
    return res.status(500).json({ success: false, message: 'Server error submitting rights request' });
  }
};

// 7. Get Data Principal Rights Requests (Admin)
exports.getRightsRequests = async (req, res) => {
  try {
    const list = DpdpStore.getRightsRequests();
    return res.status(200).json({ success: true, count: list.length, data: list });
  } catch (err) {
    console.error('Error in getRightsRequests:', err);
    return res.status(500).json({ success: false, message: 'Server error fetching rights requests' });
  }
};

// 8. Retention Status & Manual Trigger (Admin)
exports.getRetentionStatus = async (req, res) => {
  try {
    const status = DpdpStore.getRetentionStatus();
    return res.status(200).json({ success: true, data: status });
  } catch (err) {
    console.error('Error in getRetentionStatus:', err);
    return res.status(500).json({ success: false, message: 'Server error checking retention status' });
  }
};

exports.triggerRetentionPrune = async (req, res) => {
  try {
    const { retentionDays = 180, dryRun = false } = req.body;
    const result = DpdpStore.runRetentionPruning({ retentionDays: Number(retentionDays), dryRun: !!dryRun });
    return res.status(200).json({ success: true, message: 'Retention pruning executed', data: result });
  } catch (err) {
    console.error('Error in triggerRetentionPrune:', err);
    return res.status(500).json({ success: false, message: 'Server error executing retention pruning' });
  }
};

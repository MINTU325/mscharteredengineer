const InquiryStore = require('../models/inquiryStore');

// Get all inquiries (with optional search/filter)
exports.getInquiries = async (req, res) => {
  try {
    const { status, service, search } = req.query;
    let list = InquiryStore.getAll();

    if (status && status !== 'All') {
      list = list.filter(item => item.status.toLowerCase() === status.toLowerCase());
    }

    if (service && service !== 'All') {
      list = list.filter(item => item.service.toLowerCase().includes(service.toLowerCase()));
    }

    if (search) {
      const q = search.toLowerCase();
      list = list.filter(item => 
        (item.name && item.name.toLowerCase().includes(q)) ||
        (item.company && item.company.toLowerCase().includes(q)) ||
        (item.email && item.email.toLowerCase().includes(q)) ||
        (item.phone && item.phone.includes(q)) ||
        (item.location && item.location.toLowerCase().includes(q))
      );
    }

    return res.status(200).json({
      success: true,
      count: list.length,
      data: list
    });
  } catch (error) {
    console.error('Error in getInquiries:', error);
    return res.status(500).json({ success: false, message: 'Server error retrieving inquiries' });
  }
};

const https = require('https');

// Helper function to send free automated WhatsApp notification to owner (+91 91586 58885)
const sendWhatsAppAlert = (entry) => {
  try {
    const ownerPhone = process.env.WHATSAPP_OWNER_PHONE || "919158658885";
    const apiKey = process.env.CALLMEBOT_API_KEY; // Optional CallMeBot Free API Key

    const messageText = 
`🔔 *NEW CLIENT INQUIRY RECEIVED*
━━━━━━━━━━━━━━━━━━━━━━
🆔 *Ref ID*: ${entry.id}
👤 *Name*: ${entry.name}
🏢 *Company*: ${entry.company}
📞 *Phone*: ${entry.phone}
📧 *Email*: ${entry.email}
🛠️ *Service*: ${entry.service}
📌 *Scope*: ${entry.subCategory}
📍 *Location*: ${entry.location}
💰 *Asset Scale*: ${entry.estimatedAssetValue}
⏱️ *Urgency*: ${entry.urgency}
📝 *Project Notes*: ${entry.projectScope}
━━━━━━━━━━━━━━━━━━━━━━
🌐 *MS Chartered Engineers Portal Alert*`;

    // If CallMeBot API key is present, trigger automatic background HTTP GET dispatch
    if (apiKey) {
      const encodedText = encodeURIComponent(messageText);
      const url = `https://api.callmebot.com/whatsapp.php?phone=${ownerPhone}&text=${encodedText}&apikey=${apiKey}`;
      https.get(url, (res) => {
        console.log(`[WhatsApp Alert] Dispatched for ${entry.id}`);
      }).on('error', (err) => {
        console.error('[WhatsApp Alert Error]:', err.message);
      });
    } else {
      console.log(`[WhatsApp Alert Prepared for ${ownerPhone}]:\n${messageText}`);
    }
  } catch (err) {
    console.error('Error preparing WhatsApp alert:', err);
  }
};

// Create new inquiry / consultation request
exports.createInquiry = async (req, res) => {
  try {
    const { name, email, phone, service, company, location, projectScope, estimatedAssetValue, urgency } = req.body;

    if (!name || !phone || !service) {
      return res.status(400).json({
        success: false,
        message: 'Please provide full name, contact phone number, and requested service.'
      });
    }

    const newEntry = InquiryStore.create({
      name,
      company: company || 'Individual / Proprietor',
      email: email || 'Not specified',
      phone,
      service,
      subCategory: req.body.subCategory || 'General Consultation',
      location: location || 'Pan India',
      projectScope: projectScope || 'Direct inquiry submitted via corporate web portal.',
      estimatedAssetValue: estimatedAssetValue || 'Under Assessment',
      urgency: urgency || 'Standard (1-2 Weeks)'
    });

    // Trigger instant WhatsApp notification to +91 91586 58885
    sendWhatsAppAlert(newEntry);

    return res.status(201).json({
      success: true,
      message: 'Consultation request submitted successfully. Our Chartered Engineer will contact you within 24 hours.',
      inquiryId: newEntry.id,
      data: newEntry
    });
  } catch (error) {
    console.error('Error in createInquiry:', error);
    return res.status(500).json({ success: false, message: 'Error processing inquiry submission' });
  }
};

// Update inquiry status
exports.updateInquiryStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    if (!status) {
      return res.status(400).json({ success: false, message: 'Status is required' });
    }

    const updated = InquiryStore.updateStatus(id, status);
    if (!updated) {
      return res.status(404).json({ success: false, message: 'Inquiry record not found' });
    }

    return res.status(200).json({
      success: true,
      message: 'Inquiry status updated successfully',
      data: updated
    });
  } catch (error) {
    console.error('Error updating inquiry:', error);
    return res.status(500).json({ success: false, message: 'Server error updating inquiry' });
  }
};

// Delete inquiry
exports.deleteInquiry = async (req, res) => {
  try {
    const { id } = req.params;
    const success = InquiryStore.delete(id);
    return res.status(200).json({ success: true, message: 'Inquiry record deleted' });
  } catch (error) {
    console.error('Error deleting inquiry:', error);
    return res.status(500).json({ success: false, message: 'Server error deleting inquiry' });
  }
};

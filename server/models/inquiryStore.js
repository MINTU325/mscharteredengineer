const fs = require('fs');
const path = require('path');

const DATA_DIR = path.join(__dirname, '..', 'data');
const DATA_FILE = path.join(DATA_DIR, 'inquiries.json');

// Ensure data directory and fallback JSON file exist
if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
}

if (!fs.existsSync(DATA_FILE)) {
  const initialData = [
    {
      id: "INQ-" + Date.now().toString().slice(-6),
      name: "Rajesh Sharma",
      company: "Apex Metal Industries Ltd.",
      email: "rajesh@apexmetal.in",
      phone: "+91 98290 12345",
      service: "Valuation Services",
      subCategory: "New & Old Machinery Valuation for Bank Financing",
      location: "Jaipur, Rajasthan",
      projectScope: "Valuation of 5 CNC Milling & Lathe machines for bank CC limit renewal.",
      estimatedAssetValue: "₹1.85 Cr",
      urgency: "Immediate (Within 3 Days)",
      status: "In Review",
      createdAt: new Date(Date.now() - 3600000 * 24).toISOString()
    },
    {
      id: "INQ-" + (Date.now() - 100).toString().slice(-6),
      name: "Vikram Malhotra",
      company: "SunRay Energy Solutions",
      email: "v.malhotra@sunray.com",
      phone: "+91 94140 67890",
      service: "Energy & Environmental Services",
      subCategory: "CEIG Certificate for Solar Project",
      location: "Jodhpur, Rajasthan",
      projectScope: "2.5 MW ground-mounted industrial captive solar plant CEIG inspection & drawing approval.",
      estimatedAssetValue: "₹11.2 Cr",
      urgency: "Standard (1-2 Weeks)",
      status: "New",
      createdAt: new Date().toISOString()
    }
  ];
  fs.writeFileSync(DATA_FILE, JSON.stringify(initialData, null, 2), 'utf-8');
}

class InquiryStore {
  static getAll() {
    try {
      const data = fs.readFileSync(DATA_FILE, 'utf-8');
      return JSON.parse(data);
    } catch (err) {
      console.error('Error reading inquiries:', err);
      return [];
    }
  }

  static create(inquiryData) {
    try {
      const currentList = this.getAll();
      const newInquiry = {
        id: "INQ-" + Math.floor(100000 + Math.random() * 900000),
        ...inquiryData,
        status: inquiryData.status || "New",
        createdAt: new Date().toISOString()
      };
      currentList.unshift(newInquiry);
      fs.writeFileSync(DATA_FILE, JSON.stringify(currentList, null, 2), 'utf-8');
      return newInquiry;
    } catch (err) {
      console.error('Error saving inquiry:', err);
      throw err;
    }
  }

  static updateStatus(id, newStatus) {
    try {
      const currentList = this.getAll();
      const itemIndex = currentList.findIndex(item => item.id === id);
      if (itemIndex === -1) return null;

      currentList[itemIndex].status = newStatus;
      currentList[itemIndex].updatedAt = new Date().toISOString();
      fs.writeFileSync(DATA_FILE, JSON.stringify(currentList, null, 2), 'utf-8');
      return currentList[itemIndex];
    } catch (err) {
      console.error('Error updating status:', err);
      throw err;
    }
  }

  static delete(id) {
    try {
      let currentList = this.getAll();
      const filtered = currentList.filter(item => item.id !== id);
      fs.writeFileSync(DATA_FILE, JSON.stringify(filtered, null, 2), 'utf-8');
      return true;
    } catch (err) {
      console.error('Error deleting inquiry:', err);
      throw err;
    }
  }
}

module.exports = InquiryStore;

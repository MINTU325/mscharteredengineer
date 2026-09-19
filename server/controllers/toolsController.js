// Smart Valuation & Engineering Estimation Algorithms

exports.calculateValuationEstimate = (req, res) => {
  try {
    const {
      assetType,
      originalCost,
      assetAgeYears,
      expectedTotalLifeYears,
      maintenanceCondition,
      usageIntensity
    } = req.body;

    const cost = parseFloat(originalCost) || 0;
    const age = parseFloat(assetAgeYears) || 0;
    const totalLife = parseFloat(expectedTotalLifeYears) || (assetType === 'Heavy Industrial Machinery' ? 15 : 10);

    if (cost <= 0) {
      return res.status(400).json({ success: false, message: 'Please provide a valid original asset cost.' });
    }

    // Engineering Remaining Useful Life (RUL)
    let conditionFactor = 1.0;
    if (maintenanceCondition === 'Excellent') conditionFactor = 1.15;
    else if (maintenanceCondition === 'Good') conditionFactor = 1.0;
    else if (maintenanceCondition === 'Fair') conditionFactor = 0.85;
    else if (maintenanceCondition === 'Poor') conditionFactor = 0.65;

    let intensityPenalty = 0;
    if (usageIntensity === 'Continuous 3-Shift') intensityPenalty = 0.15;
    else if (usageIntensity === '2-Shift') intensityPenalty = 0.08;

    // Remaining useful life estimation
    const effectiveElapsedLife = age * (1 + intensityPenalty) / (conditionFactor || 1);
    const calculatedRUL = Math.max(1, Math.round((totalLife - effectiveElapsedLife) * conditionFactor * 10) / 10);

    // Straight-Line Method (SLM) & Written Down Value (WDV) benchmark approximations
    const salvageValue = cost * 0.05; // 5% residual standard for engineering machinery
    const annualSLMDepr = (cost - salvageValue) / totalLife;
    const slmCurrentValue = Math.max(salvageValue, cost - (annualSLMDepr * age));

    // WDV depreciation rate (approx 15% - 20% for plant & machinery as per Companies Act Schedule II)
    const wdvRate = assetType === 'Heavy Industrial Machinery' ? 0.15 : 0.18;
    const wdvCurrentValue = Math.max(salvageValue, cost * Math.pow((1 - wdvRate), age));

    // Chartered Engineer estimated market fair value bracket
    const fairMarketValueMin = Math.round(Math.min(slmCurrentValue, wdvCurrentValue) * conditionFactor);
    const fairMarketValueMax = Math.round(Math.max(slmCurrentValue, wdvCurrentValue) * (conditionFactor * 1.08));

    return res.status(200).json({
      success: true,
      data: {
        assetType: assetType || 'Industrial Equipment',
        originalCost: cost,
        assetAge: age,
        estimatedRUL: `${calculatedRUL} Years`,
        fairMarketValueRange: {
          min: fairMarketValueMin,
          max: fairMarketValueMax,
          display: `₹ ${(fairMarketValueMin).toLocaleString('en-IN')} - ₹ ${(fairMarketValueMax).toLocaleString('en-IN')}`
        },
        slmDepreciatedValue: Math.round(slmCurrentValue),
        wdvDepreciatedValue: Math.round(wdvCurrentValue),
        recommendedAction: calculatedRUL <= 3 
          ? 'Urgent Remaining Useful Life (RUL) formal certification advised prior to financial audit or loan renewal.'
          : 'Eligible for official Chartered Engineer Machinery Valuation & Nexus Certification for bank hypothecation.',
        statutoryStandards: 'Compliant with Companies Act 2013, Schedule II & IBBI registered valuer guidelines.'
      }
    });
  } catch (error) {
    console.error('Error in calculateValuationEstimate:', error);
    return res.status(500).json({ success: false, message: 'Calculation error' });
  }
};

exports.checkCeigReadiness = (req, res) => {
  try {
    const { plantCapacityKw, installationType, connectionVoltage } = req.body;
    const capacity = parseFloat(plantCapacityKw) || 0;

    if (capacity <= 0) {
      return res.status(400).json({ success: false, message: 'Please provide valid plant capacity in kW.' });
    }

    let approvalCategory = '';
    let ceigRequirement = '';
    let ceCertRequired = '';
    let requiredCertificates = [];
    let processingTimeline = '';
    let feesEstimate = '';

    if (capacity <= 10) {
      approvalCategory = 'Low Voltage Micro Solar (Up to 10 kW)';
      ceigRequirement = 'Exempt from physical CEIG officer site inspection in most Indian states (DISCOM self-certification tier under MNRE & CEA Safety Amendment Regulations). Clearance handled via DISCOM field engineer verification.';
      ceCertRequired = 'Chartered Engineer roof structural stability undertaking recommended for industrial/commercial sheds and wind-load resistance certification.';
      requiredCertificates = [
        'DISCOM Approved Net-Metering Single Line Diagram (SLD)',
        'Earthing Pit Resistance Megger Report (< 5 Ohms for AC/DC equipment)',
        'Inverter Type Test Certificate & Anti-Islanding Compliance (IEC 62116 / IS 16221)',
        'Factory Roof Structural Stability Undertaking from Chartered Engineer'
      ];
      processingTimeline = '3 - 7 Working Days';
      feesEstimate = 'Nominal DISCOM Net-Metering Application & Meter Testing Fee (~₹1,500 - ₹3,000)';
    } else if (capacity <= 100) {
      approvalCategory = 'Commercial & Industrial Solar (11 kW to 100 kW)';
      ceigRequirement = 'Mandatory electrical drawing approval (SLD) & statutory CEIG electrical safety clearance under CEA Regulation 43 prior to DISCOM net-meter synchronization.';
      ceCertRequired = 'Mandatory Chartered Engineer Stamped Electrical Single Line Diagram (SLD) with cable ampacity, switchgear ratings, and Structural Wind Load Stability Certificate (IS 875 Part 3).';
      requiredCertificates = [
        'Chartered Engineer Stamped Electrical SLD with Switchgear & Protection Relay Ratings',
        'CEIG Form A/B Statutory Application & State Govt Treasury Challan',
        'Dual Earthing Pit Resistance Megger Test Reports (< 2 Ohms for LA, < 5 Ohms for AC/DC)',
        'Lightning Protection System (LPS) Risk Assessment & Radius Coverage Report (IS/IEC 62305)',
        'Structural Stability & Wind Load Certificate from Chartered Engineer (Up to 150 km/h)',
        'Inverter Factory Test Certificate & Grid Anti-Islanding Protection Report'
      ];
      processingTimeline = '7 - 14 Working Days';
      feesEstimate = 'State CEIG Treasury Challan (kW slab-based) + DISCOM Interconnection Charges';
    } else {
      approvalCategory = 'High Voltage (HT) / MW-Scale Solar Plant (> 100 kW to MW Scale)';
      ceigRequirement = 'Mandatory formal CEIG drawing pre-approval, HT Substation Breaker safety clearance, CT/PT calibration, and physical on-site audit by Chief Electrical Inspector prior to energization (CEA Regulation 43).';
      ceCertRequired = 'Comprehensive Chartered Engineer Substation Nexus, HT VCB/Transformer BDV Safety Certification, Structural Stability of Mounting Structures, and MEP Stamping.';
      requiredCertificates = [
        'Comprehensive SLD with HT VCB / SF6 Breaker & Protection Relay Settings Stamped by Chartered Engineer',
        'CEIG Formal Pre-Commissioning Electrical Safety Clearance & Charging Permission Certificate',
        'Transformer Oil Breakdown Voltage (BDV > 50 kV) & Tan Delta Insulation Test Report',
        'HT CT/PT Metering Cubicle Laboratory Calibration & Test Certificate',
        'Ground-Mount Tracker / Industrial Shed Structural Stability & Wind Load Compliance (IS 875 Part 3)',
        'Grid Interconnection Feasibility & Protection Relay Coordination Study (Overcurrent, Earth Fault & Anti-Islanding)'
      ];
      processingTimeline = '14 - 21 Working Days';
      feesEstimate = 'State CEIG Statutory Slab Fee (MW scale) + HT Bay / Substation Verification Treasury Challan';
    }

    return res.status(200).json({
      success: true,
      data: {
        capacityKw: capacity,
        installationType: installationType || 'Industrial Factory Rooftop',
        connectionVoltage: connectionVoltage || (capacity > 100 ? '11 kV HT Supply' : '415V LT Supply'),
        approvalCategory,
        ceigRequirement,
        ceCertRequired,
        requiredCertificates,
        processingTimeline,
        feesEstimate,
        consultantRole: 'MS Chartered Engineers provides end-to-end electrical drawing preparation, Chartered Engineer stamping, CEIG liaison, and physical testing certification.'
      }
    });
  } catch (error) {
    console.error('Error in checkCeigReadiness:', error);
    return res.status(500).json({ success: false, message: 'Error checking CEIG requirements' });
  }
};

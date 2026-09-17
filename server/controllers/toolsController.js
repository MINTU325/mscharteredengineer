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
    const { plantCapacityKw, installationType, connectionVoltage, hasSingleLineDiagram } = req.body;
    const capacity = parseFloat(plantCapacityKw) || 0;

    let approvalCategory = '';
    let requiredCertificates = [];
    let processingTimeline = '';

    if (capacity <= 0) {
      return res.status(400).json({ success: false, message: 'Please provide valid plant capacity in kW.' });
    }

    if (capacity <= 10) {
      approvalCategory = 'Low Voltage Rooftop Solar (Self-Certification / DISCOM Exemption tier)';
      requiredCertificates = ['DISCOM Work Completion Report', 'Vendor Net-Metering Testing Certificate'];
      processingTimeline = '3 - 7 Working Days';
    } else if (capacity <= 100) {
      approvalCategory = 'Medium Commercial/Industrial Solar (Mandatory CEIG Safety Inspection Tier)';
      requiredCertificates = [
        'CEIG Safety Approval Certificate (Chief Electrical Inspectorate to Govt)',
        'Approved Electrical Single Line Diagram (SLD) stamped by Chartered Engineer',
        'Earthing & Earth Resistance Test Reports',
        'Lightning Arrestor (LA) Coverage Verification Report'
      ];
      processingTimeline = '7 - 14 Working Days';
    } else {
      approvalCategory = 'High Voltage / HT Grid Interactive Solar (> 100 kW to MW Scale)';
      requiredCertificates = [
        'CEIG Formal Drawing Approval & Site Physical Inspection Clearance',
        'Detailed Chartered Engineer Stability & MEP Nexus Assessment',
        'Transformer / Substation HT Breaker Safety Clearance',
        'Interconnection Feasibility & Protection Relay Calibration Report'
      ];
      processingTimeline = '14 - 21 Working Days';
    }

    return res.status(200).json({
      success: true,
      data: {
        capacityKw: capacity,
        approvalCategory,
        requiredCertificates,
        processingTimeline,
        consultantRole: 'MS Chartered Engineers provides end-to-end electrical drawing preparation, Chartered Engineer stamping, CEIG liaison, and physical testing certification.'
      }
    });
  } catch (error) {
    console.error('Error in checkCeigReadiness:', error);
    return res.status(500).json({ success: false, message: 'Error checking CEIG requirements' });
  }
};

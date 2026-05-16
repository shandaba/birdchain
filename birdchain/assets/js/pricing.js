var USAGE_COEFFICIENTS = {
  '\u4e2a\u4eba': 1,
  '\u81ea\u5a92\u4f53': 2,
  '\u4f01\u4e1a\u5ba3\u4f20': 4,
  '\u5e7f\u544a\u8425\u9500': 8,
  '\u56fe\u4e66\u753b\u518c': 10,
  '\u6587\u521b\u5546\u54c1': 15,
  'AI\u4e8c\u521b': 5,
  'AI\u8bad\u7ec3': 50,
  '\u72ec\u5bb6': 100
}

var DURATION_COEFFICIENTS = {
  '\u5355\u6b21': 1,
  '\u4e00\u5e74': 2,
  '\u4e09\u5e74': 4,
  '\u6c38\u4e45': 8
}

var REGION_COEFFICIENTS = {
  '\u5355\u5730\u533a': 1,
  '\u5168\u56fd': 2,
  '\u5168\u7403': 4
}

var AI_MULTIPLIER = 5
var MERCH_MULTIPLIER = 3

function calculateLicensePrice(basePrice, usageType, duration, region, allowAI, allowMerch) {
  var usageCoeff = USAGE_COEFFICIENTS[usageType] || 1
  var durationCoeff = DURATION_COEFFICIENTS[duration] || 1
  var regionCoeff = REGION_COEFFICIENTS[region] || 1

  var aiCoeff = allowAI ? AI_MULTIPLIER : 1
  var merchCoeff = allowMerch ? MERCH_MULTIPLIER : 1

  var total = basePrice * usageCoeff * durationCoeff * regionCoeff * aiCoeff * merchCoeff

  return Math.round(total * 100) / 100
}

function generateCertificateId() {
  var now = new Date()
  var year = now.getFullYear()
  var month = String(now.getMonth() + 1).padStart(2, '0')
  var day = String(now.getDate()).padStart(2, '0')
  var random = Math.floor(10000 + Math.random() * 90000)

  return 'BC-' + year + '-' + month + '-' + day + '-' + random
}

function calculateLicenseBreakdown(basePrice, usageType, duration, region, allowAI, allowMerch) {
  var usageCoeff = USAGE_COEFFICIENTS[usageType] || 1
  var durationCoeff = DURATION_COEFFICIENTS[duration] || 1
  var regionCoeff = REGION_COEFFICIENTS[region] || 1
  var aiCoeff = allowAI ? AI_MULTIPLIER : 1
  var merchCoeff = allowMerch ? MERCH_MULTIPLIER : 1

  var baseAmount = basePrice
  var usageAmount = Math.round(basePrice * (usageCoeff - 1) * 100) / 100
  var durationAmount = Math.round(basePrice * usageCoeff * (durationCoeff - 1) * 100) / 100
  var regionAmount = Math.round(basePrice * usageCoeff * durationCoeff * (regionCoeff - 1) * 100) / 100
  var aiAmount = 0
  var merchAmount = 0

  if (allowAI) {
    aiAmount = Math.round(basePrice * usageCoeff * durationCoeff * regionCoeff * (aiCoeff - 1) * 100) / 100
  }
  if (allowMerch) {
    merchAmount = Math.round(basePrice * usageCoeff * durationCoeff * regionCoeff * aiCoeff * (merchCoeff - 1) * 100) / 100
  }

  var total = calculateLicensePrice(basePrice, usageType, duration, region, allowAI, allowMerch)

  return {
    basePrice: baseAmount,
    usageFee: usageAmount,
    usageType: usageType,
    usageCoeff: usageCoeff,
    durationFee: durationAmount,
    duration: duration,
    durationCoeff: durationCoeff,
    regionFee: regionAmount,
    region: region,
    regionCoeff: regionCoeff,
    aiFee: aiAmount,
    aiMultiplier: aiCoeff,
    merchFee: merchAmount,
    merchMultiplier: merchCoeff,
    total: total
  }
}

window.BirdChainPricing = {
  USAGE_COEFFICIENTS: USAGE_COEFFICIENTS,
  DURATION_COEFFICIENTS: DURATION_COEFFICIENTS,
  REGION_COEFFICIENTS: REGION_COEFFICIENTS,
  calculateLicensePrice: calculateLicensePrice,
  generateCertificateId: generateCertificateId,
  calculateLicenseBreakdown: calculateLicenseBreakdown
}
const STORAGE_KEYS = {
  favoriteWorks: 'bc_favoriteWorks',
  likedWorks: 'bc_likedWorks',
  followedCreators: 'bc_followedCreators',
  cartItems: 'bc_cartItems',
  licenseOrders: 'bc_licenseOrders',
  merchOrders: 'bc_merchOrders',
  aiCreationHistory: 'bc_aiCreationHistory',
  userWorks: 'bc_userWorks',
  publishedArticles: 'bc_publishedArticles',
  draftArticles: 'bc_draftArticles',
  eventSubmissions: 'bc_eventSubmissions',
  travelBookings: 'bc_travelBookings',
  stationApplications: 'bc_stationApplications',
  contactMessages: 'bc_contactMessages',
  newsletterSubscribers: 'bc_newsletterSubscribers',
  protectionDonations: 'bc_protectionDonations',
  completedTasks: 'bc_completedTasks',
  comments_data: 'bc_comments_data',
  theme_preference: 'bc_theme_preference'
}

function getItem(key, defaultVal) {
  try {
    var raw = localStorage.getItem(key)
    if (raw === null || raw === undefined) return defaultVal
    return JSON.parse(raw)
  } catch (e) {
    return defaultVal
  }
}

function setItem(key, val) {
  try {
    localStorage.setItem(key, JSON.stringify(val))
  } catch (e) {
    console.warn('Storage.setItem failed for key:', key, e)
  }
}

function addToArray(key, item) {
  var arr = getItem(key, [])
  arr.push(item)
  setItem(key, arr)
}

function removeFromArray(key, predicate) {
  var arr = getItem(key, [])
  var idx = arr.findIndex(predicate)
  if (idx !== -1) {
    arr.splice(idx, 1)
    setItem(key, arr)
    return true
  }
  return false
}

function isInArray(key, predicate) {
  var arr = getItem(key, [])
  return arr.some(predicate)
}

function toggleInArray(key, item, idKey) {
  var arr = getItem(key, [])
  var idx = arr.findIndex(function(existing) {
    return existing[idKey] === item[idKey]
  })
  if (idx !== -1) {
    arr.splice(idx, 1)
    setItem(key, arr)
    return false
  } else {
    arr.push(item)
    setItem(key, arr)
    return true
  }
}

function getCount(key) {
  var arr = getItem(key, [])
  return arr.length
}

window.BirdChainStorage = {
  KEYS: STORAGE_KEYS,
  getItem: getItem,
  setItem: setItem,
  addToArray: addToArray,
  removeFromArray: removeFromArray,
  isInArray: isInArray,
  toggleInArray: toggleInArray,
  getCount: getCount
}
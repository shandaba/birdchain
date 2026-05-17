var DataCache = {}
var DataLoadPromises = {}

async function loadData(filename) {
  if (DataCache[filename]) return DataCache[filename]
  if (DataLoadPromises[filename]) return DataLoadPromises[filename]

  DataLoadPromises[filename] = fetch('/data/' + filename + '.json')
    .then(function(res) {
      if (!res.ok) throw new Error('Failed to load ' + filename + ': ' + res.status)
      return res.json()
    })
    .then(function(data) {
      DataCache[filename] = data
      delete DataLoadPromises[filename]
      return data
    })
    .catch(function(err) {
      delete DataLoadPromises[filename]
      console.error('DataLoader error:', err)
      throw err
    })

  return DataLoadPromises[filename]
}

function findById(list, id) {
  if (!list || !id) return null
  return list.find(function(item) { return item.id === id || item.id === String(id) }) || null
}

async function getWorkById(id) {
  var data = await loadData('works')
  return findById(data, id)
}

async function getCreatorById(id) {
  var data = await loadData('creators')
  return findById(data, id)
}

async function getStationById(id) {
  var data = await loadData('stations')
  return findById(data, id)
}

async function getTopicById(id) {
  var data = await loadData('topics')
  return findById(data, id)
}

async function getProductById(id) {
  var data = await loadData('products')
  return findById(data, id)
}

async function getSpeciesById(id) {
  var data = await loadData('species')
  return findById(data, id)
}

async function searchWorks(query) {
  if (!query || query.trim() === '') return []
  var data = await loadData('works')
  var q = query.toLowerCase().trim()
  return data.filter(function(work) {
    return (work.title && work.title.toLowerCase().indexOf(q) !== -1) ||
           (work.description && work.description.toLowerCase().indexOf(q) !== -1) ||
           (work.tags && work.tags.some(function(t) { return t.toLowerCase().indexOf(q) !== -1 })) ||
           (work.creator && work.creator.toLowerCase().indexOf(q) !== -1) ||
           (work.category && work.category.toLowerCase().indexOf(q) !== -1) ||
           (work.species && work.species.toLowerCase().indexOf(q) !== -1)
  })
}

async function filterWorks(filters) {
  var data = await loadData('works')
  if (!filters || Object.keys(filters).length === 0) return data

  return data.filter(function(work) {
    var match = true

    if (filters.category && filters.category.length > 0) {
      match = match && filters.category.indexOf(work.category) !== -1
    }
    if (filters.license && filters.license.length > 0) {
      match = match && filters.license.indexOf(work.license) !== -1
    }
    if (filters.orientation && filters.orientation.length > 0) {
      match = match && filters.orientation.indexOf(work.orientation) !== -1
    }
    if (filters.region && filters.region.length > 0) {
      match = match && filters.region.indexOf(work.region) !== -1
    }
    if (filters.tags && filters.tags.length > 0) {
      match = match && work.tags && filters.tags.some(function(t) { return work.tags.indexOf(t) !== -1 })
    }
    if (filters.minPrice !== undefined && filters.minPrice !== null) {
      match = match && work.price >= filters.minPrice
    }
    if (filters.maxPrice !== undefined && filters.maxPrice !== null) {
      match = match && work.price <= filters.maxPrice
    }
    if (filters.creator) {
      match = match && work.creator === filters.creator
    }

    return match
  })
}

function sortWorks(works, sortBy) {
  if (!works || works.length === 0) return works

  var sorted = works.slice()

  switch (sortBy) {
    case 'newest':
      sorted.sort(function(a, b) { return new Date(b.createdAt || 0) - new Date(a.createdAt || 0) })
      break
    case 'oldest':
      sorted.sort(function(a, b) { return new Date(a.createdAt || 0) - new Date(b.createdAt || 0) })
      break
    case 'popular':
      sorted.sort(function(a, b) { return (b.likes || 0) - (a.likes || 0) })
      break
    case 'views':
      sorted.sort(function(a, b) { return (b.views || 0) - (a.views || 0) })
      break
    case 'price-asc':
      sorted.sort(function(a, b) { return (a.price || 0) - (b.price || 0) })
      break
    case 'price-desc':
      sorted.sort(function(a, b) { return (b.price || 0) - (a.price || 0) })
      break
    case 'title':
      sorted.sort(function(a, b) {
        var ta = (a.title || '').toLowerCase()
        var tb = (b.title || '').toLowerCase()
        if (ta < tb) return -1
        if (ta > tb) return 1
        return 0
      })
      break
    default:
      break
  }

  return sorted
}

window.BirdChainData = {
  loadData: loadData,
  getWorkById: getWorkById,
  getCreatorById: getCreatorById,
  getStationById: getStationById,
  getTopicById: getTopicById,
  getProductById: getProductById,
  getSpeciesById: getSpeciesById,
  searchWorks: searchWorks,
  filterWorks: filterWorks,
  sortWorks: sortWorks
}
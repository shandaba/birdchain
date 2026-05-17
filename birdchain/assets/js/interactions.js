var BC = window.BirdChainStorage

var TOAST_ICONS = {
  success: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="8 12 11 15 16 9"/></svg>',
  error: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>',
  warning: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 2 22 22 22"/><line x1="12" y1="10" x2="12" y2="14"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>',
  info: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>'
}

function showToast(message, type) {
  type = type || 'info'

  var container = document.querySelector('.bc-toast-container')
  if (!container) {
    container = document.createElement('div')
    container.className = 'bc-toast-container'
    document.body.appendChild(container)
  }

  var toast = document.createElement('div')
  toast.className = 'bc-toast ' + type

  var icon = document.createElement('span')
  icon.className = 'bc-toast-icon'
  icon.innerHTML = TOAST_ICONS[type] || TOAST_ICONS.info

  var msg = document.createElement('span')
  msg.className = 'bc-toast-msg'
  msg.textContent = message

  toast.appendChild(icon)
  toast.appendChild(msg)
  container.appendChild(toast)

  setTimeout(function() {
    toast.classList.add('removing')
    setTimeout(function() {
      if (toast.parentNode) {
        toast.parentNode.removeChild(toast)
      }
    }, 300)
  }, 3000)
}

function initLikeButtons() {
  document.addEventListener('click', function(e) {
    var btn = e.target.closest('[data-action="like"]')
    if (!btn) return

    e.preventDefault()
    var workId = btn.getAttribute('data-work-id')
    if (!workId) return

    var liked = BC.isInArray(BC.KEYS.likedWorks, function(item) { return item.id === workId })

    if (liked) {
      BC.removeFromArray(BC.KEYS.likedWorks, function(item) { return item.id === workId })
      btn.classList.remove('liked')
      showToast('\u5df2\u53d6\u6d88\u559c\u6b22', 'info')
    } else {
      BC.addToArray(BC.KEYS.likedWorks, { id: workId, time: Date.now() })
      btn.classList.add('liked')
      showToast('\u5df2\u8868\u793a\u559c\u6b22', 'success')
    }

    updateLikeCount(btn, workId)
  })

  initLikeButtonStates()
}

function initLikeButtonStates() {
  var likedWorks = BC.getItem(BC.KEYS.likedWorks, [])
  var buttons = document.querySelectorAll('[data-action="like"]')
  buttons.forEach(function(btn) {
    var workId = btn.getAttribute('data-work-id')
    if (workId && likedWorks.some(function(item) { return item.id === workId })) {
      btn.classList.add('liked')
    }
  })
}

function updateLikeCount(btn, workId) {
  var countEl = btn.querySelector('[data-count]')
  if (!countEl) {
    var parent = btn.closest('.bc-work-card-actions') || btn.parentElement
    if (parent) {
      countEl = parent.querySelector('[data-like-count]')
    }
  }
  if (!countEl) return
  var current = parseInt(countEl.textContent) || 0
  var liked = BC.isInArray(BC.KEYS.likedWorks, function(item) { return item.id === workId })
  countEl.textContent = liked ? current + 1 : Math.max(0, current - 1)
}

function initFavoriteButtons() {
  document.addEventListener('click', function(e) {
    var btn = e.target.closest('[data-action="favorite"]')
    if (!btn) return

    e.preventDefault()
    var workId = btn.getAttribute('data-work-id')
    if (!workId) return

    var favorited = BC.isInArray(BC.KEYS.favoriteWorks, function(item) { return item.id === workId })

    if (favorited) {
      BC.removeFromArray(BC.KEYS.favoriteWorks, function(item) { return item.id === workId })
      btn.classList.remove('favorited')
      showToast('\u5df2\u53d6\u6d88\u6536\u85cf', 'info')
    } else {
      BC.addToArray(BC.KEYS.favoriteWorks, { id: workId, time: Date.now() })
      btn.classList.add('favorited')
      showToast('\u5df2\u6dfb\u52a0\u5230\u6536\u85cf', 'success')
    }
  })

  initFavoriteButtonStates()
}

function initFavoriteButtonStates() {
  var favoriteWorks = BC.getItem(BC.KEYS.favoriteWorks, [])
  var buttons = document.querySelectorAll('[data-action="favorite"]')
  buttons.forEach(function(btn) {
    var workId = btn.getAttribute('data-work-id')
    if (workId && favoriteWorks.some(function(item) { return item.id === workId })) {
      btn.classList.add('favorited')
    }
  })
}

function initFollowButtons() {
  document.addEventListener('click', function(e) {
    var btn = e.target.closest('[data-action="follow"]')
    if (!btn) return

    e.preventDefault()
    var creatorId = btn.getAttribute('data-creator-id')
    var creatorName = btn.getAttribute('data-creator-name') || creatorId
    if (!creatorId) return

    var followed = BC.isInArray(BC.KEYS.followedCreators, function(item) { return item.id === creatorId })

    if (followed) {
      BC.removeFromArray(BC.KEYS.followedCreators, function(item) { return item.id === creatorId })
      btn.classList.remove('following')
      btn.textContent = btn.getAttribute('data-follow-text') || '\u5173\u6ce8'
      showToast('\u5df2\u53d6\u6d88\u5173\u6ce8 ' + creatorName, 'info')
    } else {
      BC.addToArray(BC.KEYS.followedCreators, { id: creatorId, name: creatorName, time: Date.now() })
      btn.classList.add('following')
      btn.textContent = btn.getAttribute('data-following-text') || '\u5df2\u5173\u6ce8'
      showToast('\u5df2\u5173\u6ce8 ' + creatorName, 'success')
    }
  })

  initFollowButtonStates()
}

function initFollowButtonStates() {
  var followedCreators = BC.getItem(BC.KEYS.followedCreators, [])
  var buttons = document.querySelectorAll('[data-action="follow"]')
  buttons.forEach(function(btn) {
    var creatorId = btn.getAttribute('data-creator-id')
    if (creatorId && followedCreators.some(function(item) { return item.id === creatorId })) {
      btn.classList.add('following')
      btn.textContent = btn.getAttribute('data-following-text') || '\u5df2\u5173\u6ce8'
    }
  })
}

function initCartButtons() {
  document.addEventListener('click', function(e) {
    var btn = e.target.closest('[data-action="add-to-cart"]')
    if (!btn) return

    e.preventDefault()
    var itemId = btn.getAttribute('data-item-id')
    var itemName = btn.getAttribute('data-item-name') || itemId
    var itemPrice = parseFloat(btn.getAttribute('data-item-price')) || 0
    var itemType = btn.getAttribute('data-item-type') || 'work'
    var itemImage = btn.getAttribute('data-item-image') || ''

    if (!itemId) return

    var cart = BC.getItem(BC.KEYS.cartItems, [])
    var existing = cart.find(function(item) { return item.id === itemId && item.type === itemType })

    if (existing) {
      existing.quantity = (existing.quantity || 1) + 1
    } else {
      cart.push({
        id: itemId,
        name: itemName,
        price: itemPrice,
        type: itemType,
        image: itemImage,
        quantity: 1
      })
    }

    BC.setItem(BC.KEYS.cartItems, cart)
    updateCartBadge()
    showToast('\u5df2\u6dfb\u52a0\u5230\u8d2d\u7269\u8f66: ' + itemName, 'success')
  })
}

function updateCartBadge() {
  var cart = BC.getItem(BC.KEYS.cartItems, [])
  var totalItems = cart.reduce(function(sum, item) { return sum + (item.quantity || 0) }, 0)
  var badges = document.querySelectorAll('[data-cart-count]')
  badges.forEach(function(badge) {
    badge.textContent = totalItems
    badge.style.display = totalItems > 0 ? 'flex' : 'none'
  })
}

function initCommentForms() {
  document.addEventListener('submit', function(e) {
    var form = e.target.closest('[data-action="comment-form"]')
    if (!form) return

    e.preventDefault()
    var input = form.querySelector('input, textarea')
    if (!input) return

    var content = input.value.trim()
    if (!content) {
      showToast('\u8bf7\u8f93\u5165\u8bc4\u8bba\u5185\u5bb9', 'warning')
      return
    }

    var targetId = form.getAttribute('data-target-id')
    var targetType = form.getAttribute('data-target-type') || 'work'

    var comments = BC.getItem(BC.KEYS.comments_data, {})
    var key = targetType + '_' + targetId
    if (!comments[key]) comments[key] = []

    comments[key].push({
      id: 'cmt_' + Date.now(),
      content: content,
      time: Date.now(),
      author: '\u7528\u6237'
    })

    BC.setItem(BC.KEYS.comments_data, comments)
    input.value = ''
    showToast('\u8bc4\u8bba\u53d1\u5e03\u6210\u529f', 'success')

    var event = new CustomEvent('bc:comment-added', { detail: { targetId: targetId, targetType: targetType } })
    document.dispatchEvent(event)
  })
}

function initNewsletterForm() {
  document.addEventListener('submit', function(e) {
    var form = e.target.closest('[data-action="newsletter-form"]')
    if (!form) return

    e.preventDefault()
    var input = form.querySelector('input[type="email"]')
    if (!input) return

    var email = input.value.trim()
    if (!email || email.indexOf('@') === -1) {
      showToast('\u8bf7\u8f93\u5165\u6709\u6548\u7684\u90ae\u7bb1\u5730\u5740', 'warning')
      return
    }

    var subscribers = BC.getItem(BC.KEYS.newsletterSubscribers, [])
    if (subscribers.indexOf(email) !== -1) {
      showToast('\u8be5\u90ae\u7bb1\u5df2\u7ecf\u8ba2\u9605\u4e86', 'info')
      return
    }

    subscribers.push(email)
    BC.setItem(BC.KEYS.newsletterSubscribers, subscribers)
    input.value = ''
    showToast('\u8ba2\u9605\u6210\u529f\uff01\u611f\u8c22\u60a8\u7684\u5173\u6ce8', 'success')
  })
}

function initThemeToggle() {
  var savedTheme = BC.getItem(BC.KEYS.theme_preference, 'light')
  applyTheme(savedTheme)

  document.addEventListener('click', function(e) {
    var btn = e.target.closest('[data-action="theme-toggle"]')
    if (!btn) return

    e.preventDefault()
    var currentTheme = document.documentElement.getAttribute('data-theme') || 'light'
    var newTheme = currentTheme === 'dark' ? 'light' : 'dark'

    applyTheme(newTheme)
    BC.setItem(BC.KEYS.theme_preference, newTheme)
  })
}

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme)

  var toggles = document.querySelectorAll('[data-action="theme-toggle"]')
  toggles.forEach(function(btn) {
    var lightIcon = btn.querySelector('[data-theme-icon="light"]')
    var darkIcon = btn.querySelector('[data-theme-icon="dark"]')
    if (lightIcon) lightIcon.style.display = theme === 'dark' ? 'none' : ''
    if (darkIcon) darkIcon.style.display = theme === 'dark' ? '' : 'none'
  })
}

function initMobileMenu() {
  document.addEventListener('click', function(e) {
    var btn = e.target.closest('[data-action="mobile-menu"]')
    if (btn) {
      e.preventDefault()
      toggleMobileMenu()
      return
    }

    var overlay = e.target.closest('.bc-mobile-overlay')
    if (overlay) {
      closeMobileMenu()
      return
    }

    var closeBtn = e.target.closest('[data-action="mobile-menu-close"]')
    if (closeBtn) {
      e.preventDefault()
      closeMobileMenu()
      return
    }
  })
}

function toggleMobileMenu() {
  var overlay = document.querySelector('.bc-mobile-overlay')
  var menu = document.querySelector('.bc-mobile-menu')

  if (menu && menu.classList.contains('open')) {
    closeMobileMenu()
  } else {
    openMobileMenu()
  }
}

function openMobileMenu() {
  var overlay = document.querySelector('.bc-mobile-overlay')
  var menu = document.querySelector('.bc-mobile-menu')

  if (overlay) overlay.classList.add('open')
  if (menu) menu.classList.add('open')
  document.body.classList.add('menu-open')
}

function closeMobileMenu() {
  var overlay = document.querySelector('.bc-mobile-overlay')
  var menu = document.querySelector('.bc-mobile-menu')

  if (overlay) overlay.classList.remove('open')
  if (menu) menu.classList.remove('open')
  document.body.classList.remove('menu-open')
}

function initSearchBar() {
  document.addEventListener('keydown', function(e) {
    if (e.key !== 'Enter') return

    var input = e.target.closest('[data-action="search"]')
    if (!input) return

    e.preventDefault()
    var query = input.value.trim()
    if (!query) return

    var searchUrl = input.getAttribute('data-search-url') || '/search.html'
    window.location.href = searchUrl + '?q=' + encodeURIComponent(query)
  })

  document.addEventListener('click', function(e) {
    var btn = e.target.closest('[data-action="search-submit"]')
    if (!btn) return

    e.preventDefault()
    var form = btn.closest('.bc-search-box') || btn.parentElement
    var input = form ? form.querySelector('input') : null
    if (!input) return

    var query = input.value.trim()
    if (!query) return

    var searchUrl = input.getAttribute('data-search-url') || '/search.html'
    window.location.href = searchUrl + '?q=' + encodeURIComponent(query)
  })
}

document.addEventListener('DOMContentLoaded', function() {
  initLikeButtonStates()
  initFavoriteButtonStates()
  initFollowButtonStates()
  updateCartBadge()
})

function initAll() {
  initThemeToggle()
  initMobileMenu()
  initSearchBar()
  initLikeButtons()
  initFavoriteButtons()
  initFollowButtons()
  initCartButtons()
  initCommentForms()
  initNewsletterForm()
  updateCartBadge()
}

window.BirdChainInteractions = {
  initAll: initAll,
  showToast: showToast,
  initLikeButtons: initLikeButtons,
  initFavoriteButtons: initFavoriteButtons,
  initFollowButtons: initFollowButtons,
  initCartButtons: initCartButtons,
  initCommentForms: initCommentForms,
  initNewsletterForm: initNewsletterForm,
  initThemeToggle: initThemeToggle,
  initMobileMenu: initMobileMenu,
  initSearchBar: initSearchBar,
  updateCartBadge: updateCartBadge,
  applyTheme: applyTheme
}
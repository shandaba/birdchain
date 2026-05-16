var TRANSPARENT_PIXEL = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'

var BIRD_GRADIENTS = [
  'linear-gradient(135deg, #1B4332, #2D6A4F)',
  'linear-gradient(135deg, #1B4F72, #2980B9)',
  'linear-gradient(135deg, #B8860B, #DAA520)',
  'linear-gradient(135deg, #6B4226, #8B6914)',
  'linear-gradient(135deg, #006D77, #83C5BE)',
  'linear-gradient(135deg, #457B9D, #A8DADC)',
  'linear-gradient(135deg, #D4A373, #FAEDCD)',
  'linear-gradient(135deg, #2D6A4F, #40916C)',
  'linear-gradient(135deg, #023E8A, #0077B6)',
  'linear-gradient(135deg, #606C38, #283618)',
  'linear-gradient(135deg, #6C584C, #A98467)',
  'linear-gradient(135deg, #52796F, #84A98C)',
  'linear-gradient(135deg, #3A5A40, #588157)',
  'linear-gradient(135deg, #BC6C25, #DDA15E)',
  'linear-gradient(135deg, #1B4965, #5FA8D3)',
  'linear-gradient(135deg, #386641, #A7C957)',
  'linear-gradient(135deg, #7B2D26, #C44536)',
  'linear-gradient(135deg, #2C3E50, #3498DB)',
  'linear-gradient(135deg, #8E6B3E, #C7A56D)',
  'linear-gradient(135deg, #1A535C, #4ECDC4)'
]

function bgGradient(dataImg) {
  if (dataImg) return 'background: ' + dataImg + ';'
  var idx = Math.floor(Math.random() * BIRD_GRADIENTS.length)
  return 'background: ' + BIRD_GRADIENTS[idx] + ';'
}

function imgTag(src, dataImg, alt, extraStyle) {
  alt = alt || ''
  var style = bgGradient(dataImg)
  if (extraStyle) style += ' ' + extraStyle
  return '<img src="' + (src || TRANSPARENT_PIXEL) + '" alt="' + alt + '" style="' + style + '" loading="lazy" />'
}

function esc(str) {
  if (!str) return ''
  return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')
}

function formatNumber(n) {
  if (n === null || n === undefined) return '0'
  if (n >= 10000) return (n / 10000).toFixed(1) + '\u4e07'
  if (n >= 1000) return (n / 1000).toFixed(1) + 'k'
  return String(n)
}

function formatPrice(p) {
  if (p === null || p === undefined) return '\u514d\u8d39'
  if (p === 0) return '\u514d\u8d39'
  return '\u00a5' + p.toFixed(2)
}

var LOGO_SVG = '<svg width="36" height="36" viewBox="0 0 48 48" fill="none"><circle cx="24" cy="24" r="22" fill="#16395C"/><path d="M24 8 C14 14 10 26 14 32 C18 38 30 38 34 32 C38 26 34 14 24 8Z" fill="#C7A56D" opacity="0.8"/><circle cx="24" cy="18" r="2" fill="#16395C"/><path d="M20 26 L24 30 L28 26" stroke="#F7F5F2" stroke-width="2" fill="none"/></svg>'

var SEARCH_ICON_SVG = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="7"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>'

var UPLOAD_ICON_SVG = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>'

var SUN_ICON_SVG = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>'

var MOON_ICON_SVG = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>'

var MESSAGE_ICON_SVG = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>'

var CART_ICON_SVG = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>'

var USER_ICON_SVG = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>'

var HEART_ICON_SVG = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>'

var STAR_ICON_SVG = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>'

var EMPTY_FOLDER_SVG = '<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg>'

var ARROW_LEFT_SVG = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"/></svg>'

var ARROW_RIGHT_SVG = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>'

var CHEVRON_DOWN_SVG = '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>'

var VERIFIED_SVG = '<svg width="14" height="14" viewBox="0 0 24 24" fill="#C7A56D"><circle cx="12" cy="12" r="10" fill="#C7A56D"/><polyline points="7 12 10 15 17 8" stroke="#fff" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>'

var EYE_ICON_SVG = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>'

var LOCATION_ICON_SVG = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>'

var CLOCK_ICON_SVG = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>'

var CALENDAR_ICON_SVG = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>'

var USERS_ICON_SVG = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>'

var COMMENT_ICON_SVG = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>'

var SHARE_ICON_SVG = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>'

var MENU_ICON_SVG = '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>'

var CLOSE_ICON_SVG = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>'

function renderHeader(currentPage) {
  currentPage = currentPage || ''

  var html = '<header class="bc-header" id="bcHeader">'
  html += '<div class="container">'

  html += '<a href="/" class="bc-logo">'
  html += '<span class="bc-logo-icon">' + LOGO_SVG + '</span>'
  html += '<span class="bc-logo-text">Bird<span>Chain</span></span>'
  html += '</a>'

  html += '<nav class="bc-nav">'
  html += renderNavItem('\u9996\u9875', '/', currentPage)
  html += renderNavItem('\u53d1\u73b0/\u7075\u611f', '/discover.html', currentPage)
  html += renderNavItem('\u7248\u6743\u5e02\u573a', '/market.html', currentPage)
  html += renderNavItem('\u4e13\u9898/\u6df1\u5ea6\u5206\u6790', '/topics.html', currentPage)
  html += renderNavItem('\u5168\u7403\u5730\u65b9\u7ad9', '/stations.html', currentPage)
  html += renderNavItem('\u9e1f\u7c7b\u89c6\u89c9\u5b9e\u9a8c\u5ba4', '/visual-lab.html', currentPage)
  html += renderNavItem('\u521b\u4f5c\u5468\u8fb9', '/merch.html', currentPage)

  html += '<div class="bc-nav-item">'
  html += '<span>\u66f4\u591a ' + CHEVRON_DOWN_SVG + '</span>'
  html += '<div class="bc-nav-dropdown">'
  html += '<a href="/events.html">\u8d5b\u4e8b/\u6d3b\u52a8</a>'
  html += '<a href="/travel.html">\u6444\u5f71\u65c5\u884c</a>'
  html += '<a href="/education.html">\u81ea\u7136\u6559\u80b2</a>'
  html += '<a href="/museum.html">AR/VR\u9e1f\u7c7b\u535a\u7269\u9986</a>'
  html += '<a href="/gear.html">\u6444\u5f71\u5668\u6750</a>'
  html += '<a href="/community.html">\u793e\u533a</a>'
  html += '<a href="/protection.html">\u4fdd\u62a4\u884c\u52a8</a>'
  html += '<a href="/about.html">\u5173\u4e8eBirdChain</a>'
  html += '</div>'
  html += '</div>'

  html += '</nav>'

  html += '<div class="bc-header-actions">'
  html += '<div class="bc-search-box">'
  html += '<span class="search-icon">' + SEARCH_ICON_SVG + '</span>'
  html += '<input type="text" placeholder="\u641c\u7d22\u4f5c\u54c1\u3001\u521b\u4f5c\u8005..." data-action="search" data-search-url="/search.html" />'
  html += '</div>'

  html += '<button class="btn-icon hide-mobile" data-action="theme-toggle" aria-label="\u5207\u6362\u4e3b\u9898">'
  html += '<span data-theme-icon="light">' + MOON_ICON_SVG + '</span>'
  html += '<span data-theme-icon="dark" style="display:none">' + SUN_ICON_SVG + '</span>'
  html += '</button>'

  html += '<button class="btn-icon hide-mobile" aria-label="\u4e0a\u4f20">' + UPLOAD_ICON_SVG + '</button>'

  html += '<button class="btn-icon hide-mobile" aria-label="\u8bed\u8a00\u5207\u6362">'
  html += '<span style="font-size:0.8rem;font-weight:600">\u4e2d</span>'
  html += '</button>'

  html += '<button class="btn-icon hide-mobile" aria-label="\u6d88\u606f">'
  html += MESSAGE_ICON_SVG
  html += '<span class="badge-count" data-cart-count style="display:none">0</span>'
  html += '</button>'

  html += '<button class="btn-icon hide-mobile" aria-label="\u8d2d\u7269\u8f66">'
  html += CART_ICON_SVG
  html += '<span class="badge-count" data-cart-count style="display:none">0</span>'
  html += '</button>'

  html += '<button class="btn-icon hide-mobile" aria-label="\u7528\u6237">' + USER_ICON_SVG + '</button>'

  html += '<button class="btn-icon bc-mobile-menu-btn" data-action="mobile-menu" aria-label="\u83dc\u5355">' + MENU_ICON_SVG + '</button>'
  html += '</div>'

  html += '</div>'
  html += '</header>'

  html += '<div class="bc-mobile-overlay"></div>'
  html += '<div class="bc-mobile-menu">'
  html += '<div class="bc-mobile-menu-header">'
  html += '<span class="bc-logo-text">Bird<span>Chain</span></span>'
  html += '<button class="bc-mobile-menu-close" data-action="mobile-menu-close">' + CLOSE_ICON_SVG + '</button>'
  html += '</div>'
  html += '<nav class="bc-mobile-nav">'
  html += '<a href="/">\u9996\u9875</a>'
  html += '<a href="/discover.html">\u53d1\u73b0/\u7075\u611f</a>'
  html += '<a href="/market.html">\u7248\u6743\u5e02\u573a</a>'
  html += '<a href="/topics.html">\u4e13\u9898/\u6df1\u5ea6\u5206\u6790</a>'
  html += '<a href="/stations.html">\u5168\u7403\u5730\u65b9\u7ad9</a>'
  html += '<a href="/visual-lab.html">\u9e1f\u7c7b\u89c6\u89c9\u5b9e\u9a8c\u5ba4</a>'
  html += '<a href="/merch.html">\u521b\u4f5c\u5468\u8fb9</a>'
  html += '<div class="bc-mobile-sub">'
  html += '<a href="/events.html">\u8d5b\u4e8b/\u6d3b\u52a8</a>'
  html += '<a href="/travel.html">\u6444\u5f71\u65c5\u884c</a>'
  html += '<a href="/education.html">\u81ea\u7136\u6559\u80b2</a>'
  html += '<a href="/museum.html">AR/VR\u9e1f\u7c7b\u535a\u7269\u9986</a>'
  html += '<a href="/gear.html">\u6444\u5f71\u5668\u6750</a>'
  html += '<a href="/community.html">\u793e\u533a</a>'
  html += '<a href="/protection.html">\u4fdd\u62a4\u884c\u52a8</a>'
  html += '<a href="/about.html">\u5173\u4e8eBirdChain</a>'
  html += '</div>'
  html += '</nav>'
  html += '</div>'

  return html
}

function renderNavItem(label, href, currentPage) {
  var isActive = (currentPage === href) || (href !== '/' && currentPage.indexOf(href.replace('.html', '')) !== -1)
  var cls = 'bc-nav-item' + (isActive ? ' active' : '')
  return '<a href="' + href + '" class="' + cls + '">' + esc(label) + '</a>'
}

function renderFooter() {
  var html = '<footer class="bc-footer">'
  html += '<div class="container">'
  html += '<div class="bc-footer-grid">'

  html += renderFooterCol('\u5e73\u53f0', [
    { label: '\u5173\u4e8eBirdChain', href: '/about.html' },
    { label: '\u52a0\u5165\u6211\u4eec', href: '/careers.html' },
    { label: '\u5408\u4f5c\u4f19\u4f34', href: '/partners.html' },
    { label: '\u5e7f\u544a\u5408\u4f5c', href: '/advertise.html' },
    { label: '\u8054\u7cfb\u6211\u4eec', href: '/contact.html' }
  ])

  html += renderFooterCol('\u521b\u4f5c', [
    { label: '\u4e0a\u4f20\u4f5c\u54c1', href: '/upload.html' },
    { label: '\u521b\u4f5c\u8005\u4e2d\u5fc3', href: '/creator-center.html' },
    { label: '\u7248\u6743\u4fdd\u62a4', href: '/copyright.html' },
    { label: '\u6388\u6743\u8bf4\u660e', href: '/licensing.html' },
    { label: '\u6536\u76ca\u63d0\u73b0', href: '/earnings.html' }
  ])

  html += renderFooterCol('\u5185\u5bb9', [
    { label: '\u53d1\u73b0\u4f5c\u54c1', href: '/discover.html' },
    { label: '\u4e13\u9898\u62a5\u9053', href: '/topics.html' },
    { label: '\u9e1f\u7c7b\u56fe\u9274', href: '/species.html' },
    { label: '\u89c6\u89c9\u5b9e\u9a8c\u5ba4', href: '/visual-lab.html' },
    { label: '\u521b\u4f5c\u5468\u8fb9', href: '/merch.html' }
  ])

  html += renderFooterCol('\u6d3b\u52a8', [
    { label: '\u6444\u5f71\u5927\u8d5b', href: '/contests.html' },
    { label: '\u6444\u5f71\u65c5\u884c', href: '/travel.html' },
    { label: '\u81ea\u7136\u6559\u80b2', href: '/education.html' },
    { label: '\u7ebf\u4e0b\u6d3b\u52a8', href: '/offline.html' },
    { label: '\u5c55\u89c8\u5c55\u793a', href: '/exhibitions.html' }
  ])

  html += renderFooterCol('\u8d44\u6e90', [
    { label: '\u6444\u5f71\u5668\u6750', href: '/gear.html' },
    { label: '\u62cd\u6444\u653b\u7565', href: '/guides.html' },
    { label: 'AR/VR\u535a\u7269\u9986', href: '/museum.html' },
    { label: '\u5730\u65b9\u7ad9\u5730\u56fe', href: '/stations.html' },
    { label: '\u793e\u533a\u8bba\u575b', href: '/community.html' }
  ])

  html += renderFooterCol('\u5173\u4e8e', [
    { label: '\u53d1\u5c55\u5386\u7a0b', href: '/history.html' },
    { label: '\u56e2\u961f\u4ecb\u7ecd', href: '/team.html' },
    { label: '\u65b0\u95fb\u52a8\u6001', href: '/news.html' },
    { label: '\u5e38\u89c1\u95ee\u9898', href: '/faq.html' },
    { label: '\u7528\u6237\u53cd\u9988', href: '/feedback.html' }
  ])

  html += renderFooterCol('\u6cd5\u5f8b', [
    { label: '\u670d\u52a1\u6761\u6b3e', href: '/terms.html' },
    { label: '\u9690\u79c1\u653f\u7b56', href: '/privacy.html' },
    { label: '\u7248\u6743\u653f\u7b56', href: '/copyright-policy.html' },
    { label: '\u793e\u533a\u89c4\u8303', href: '/community-guidelines.html' },
    { label: '\u6cd5\u5f8b\u58f0\u660e', href: '/legal.html' }
  ])

  html += '</div>'

  html += '<div class="bc-footer-bottom">'
  html += '<span>&copy; ' + new Date().getFullYear() + ' BirdChain. All rights reserved.</span>'
  html += '<div class="bc-footer-subscribe">'
  html += '<form data-action="newsletter-form">'
  html += '<input type="email" placeholder="\u8f93\u5165\u90ae\u7bb1\u8ba2\u9605\u6211\u4eec\u7684\u65b0\u95fb\u901a\u8baf" />'
  html += '<button type="submit">\u8ba2\u9605</button>'
  html += '</form>'
  html += '</div>'
  html += '</div>'

  html += '</div>'
  html += '</footer>'
  return html
}

function renderFooterCol(title, links) {
  var html = '<div class="bc-footer-col">'
  html += '<h4>' + esc(title) + '</h4>'
  links.forEach(function(link) {
    html += '<a href="' + link.href + '">' + esc(link.label) + '</a>'
  })
  html += '</div>'
  return html
}

function renderBreadcrumb(items) {
  if (!items || items.length === 0) return ''

  var html = '<nav class="bc-breadcrumb" aria-label="\u9762\u5305\u5c51\u5bfc\u822a">'
  html += '<a href="/">\u9996\u9875</a>'

  items.forEach(function(item, i) {
    html += '<span class="sep">/</span>'
    if (i === items.length - 1) {
      html += '<span class="current">' + esc(item.label) + '</span>'
    } else {
      html += '<a href="' + (item.href || '#') + '">' + esc(item.label) + '</a>'
    }
  })

  html += '</nav>'
  return html
}

function renderWorkCard(work) {
  if (!work) return ''

  var html = '<div class="bc-work-card" data-work-id="' + esc(work.id) + '">'
  html += '<div class="bc-work-card-img" style="aspect-ratio:' + (work.aspectRatio || '4/3') + '">'
  html += imgTag(work.image, work.dataImg, esc(work.title))
  html += '<div class="bc-work-card-overlay">'
  html += '<div class="bc-work-card-actions">'
  html += '<button data-action="favorite" data-work-id="' + esc(work.id) + '" aria-label="\u6536\u85cf">' + STAR_ICON_SVG + '</button>'
  html += '<button data-action="like" data-work-id="' + esc(work.id) + '" aria-label="\u559c\u6b22">' + HEART_ICON_SVG + '</button>'
  html += '<button data-action="add-to-cart" data-item-id="' + esc(work.id) + '" data-item-name="' + esc(work.title) + '" data-item-price="' + (work.price || 0) + '" data-item-type="work" aria-label="\u52a0\u5165\u8d2d\u7269\u8f66">' + CART_ICON_SVG + '</button>'
  html += '</div>'
  html += '</div>'
  html += '</div>'
  html += '<div class="bc-work-card-body">'
  html += '<div class="bc-work-card-title">' + esc(work.title) + '</div>'
  html += '<div class="bc-work-card-meta">'
  html += '<div class="bc-work-card-author">'
  html += imgTag(work.authorAvatar, work.authorDataImg, esc(work.author), 'width:20px;height:20px;border-radius:50%;')
  html += '<span>' + esc(work.author) + '</span>'
  html += '</div>'
  html += '<div class="bc-work-card-stats">'
  html += '<span>' + HEART_ICON_SVG + ' ' + formatNumber(work.likes || 0) + '</span>'
  html += '<span>' + EYE_ICON_SVG + ' ' + formatNumber(work.views || 0) + '</span>'
  html += '</div>'
  html += '</div>'
  html += '</div>'
  html += '</div>'
  return html
}

function renderCreatorCard(creator) {
  if (!creator) return ''

  var html = '<div class="bc-creator-card">'
  html += imgTag(creator.avatar, creator.dataImg, esc(creator.name), 'width:56px;height:56px;border-radius:50%;')
  html += '<div class="bc-creator-card-info">'
  html += '<div class="bc-creator-card-name">'
  html += esc(creator.name)
  if (creator.verified) html += VERIFIED_SVG
  html += '</div>'
  html += '<div class="bc-creator-card-meta">' + esc(creator.specialty || '') + '</div>'
  html += '<div class="bc-creator-card-stats">'
  html += '<span>' + formatNumber(creator.works || 0) + '</span> \u4f5c\u54c1'
  html += '<span>' + formatNumber(creator.followers || 0) + '</span> \u7c89\u4e1d'
  html += '</div>'
  html += '</div>'
  html += '<button class="btn btn-outline btn-sm" data-action="follow" data-creator-id="' + esc(creator.id) + '" data-creator-name="' + esc(creator.name) + '">\u5173\u6ce8</button>'
  html += '</div>'
  return html
}

function renderTopicCard(topic) {
  if (!topic) return ''

  var html = '<div class="bc-topic-card">'
  html += '<div class="bc-topic-card-img">'
  html += imgTag(topic.image, topic.dataImg, esc(topic.title))
  html += '</div>'
  html += '<div class="bc-topic-card-body">'
  html += '<div class="bc-topic-card-title">' + esc(topic.title) + '</div>'
  html += '<div class="bc-topic-card-meta">'
  html += '<span>' + formatNumber(topic.articles || 0) + ' \u7bc7\u6587\u7ae0</span>'
  html += '<span>' + formatNumber(topic.views || 0) + ' \u6d4f\u89c8</span>'
  html += '</div>'
  html += '</div>'
  html += '</div>'
  return html
}

function renderStationCard(station) {
  if (!station) return ''

  var html = '<div class="bc-station-card">'
  html += '<div class="bc-station-card-img">'
  html += imgTag(station.image, station.dataImg, esc(station.name))
  html += '</div>'
  html += '<div class="bc-station-card-body">'
  html += '<div class="bc-station-card-title">' + esc(station.name) + '</div>'
  html += '<div class="bc-station-card-region">' + LOCATION_ICON_SVG + ' ' + esc(station.region || '') + '</div>'
  html += '<div class="bc-station-card-stats">'
  html += '<span>' + formatNumber(station.works || 0) + ' \u4f5c\u54c1</span>'
  html += '<span>' + formatNumber(station.creators || 0) + ' \u521b\u4f5c\u8005</span>'
  html += '</div>'
  html += '</div>'
  html += '</div>'
  return html
}

function renderProductCard(product) {
  if (!product) return ''

  var html = '<div class="bc-product-card">'
  html += '<div class="bc-product-card-img">'
  html += imgTag(product.image, product.dataImg, esc(product.title))
  html += '</div>'
  html += '<div class="bc-product-card-body">'
  html += '<div class="bc-product-card-title">' + esc(product.title) + '</div>'
  html += '<div class="bc-product-card-category">' + esc(product.category || '') + '</div>'
  html += '<div class="bc-product-card-price">' + formatPrice(product.price) + '</div>'
  html += '</div>'
  html += '</div>'
  return html
}

function renderArticleCard(article) {
  if (!article) return ''

  var html = '<div class="bc-article-card">'
  html += '<div class="bc-article-card-img">'
  html += imgTag(article.image, article.dataImg, esc(article.title))
  html += '</div>'
  html += '<div class="bc-article-card-body">'
  html += '<div class="bc-article-card-title">' + esc(article.title) + '</div>'
  html += '<div class="bc-article-card-excerpt">' + esc(article.excerpt || '') + '</div>'
  html += '<div class="bc-article-card-meta">'
  html += '<span>' + CLOCK_ICON_SVG + ' ' + esc(article.readTime || '') + '</span>'
  html += '<span>' + CALENDAR_ICON_SVG + ' ' + esc(article.date || '') + '</span>'
  html += '</div>'
  html += '</div>'
  html += '</div>'
  return html
}

function renderEventCard(event) {
  if (!event) return ''

  var statusClass = ''
  var statusText = ''
  switch (event.status) {
    case 'live': statusClass = 'live'; statusText = '\u8fdb\u884c\u4e2d'; break
    case 'upcoming': statusClass = 'upcoming'; statusText = '\u5373\u5c06\u5f00\u59cb'; break
    case 'ended': statusClass = 'ended'; statusText = '\u5df2\u7ed3\u675f'; break
    default: statusClass = 'upcoming'; statusText = event.status || ''
  }

  var html = '<div class="bc-event-card">'
  html += '<div class="bc-event-card-img">'
  html += imgTag(event.image, event.dataImg, esc(event.title))
  html += '</div>'
  html += '<div class="bc-event-card-body">'
  html += '<span class="bc-event-status ' + statusClass + '">' + esc(statusText) + '</span>'
  html += '<h5>' + esc(event.title) + '</h5>'
  html += '<div class="bc-event-card-meta">'
  html += '<div>' + CALENDAR_ICON_SVG + ' ' + esc(event.date || '') + '</div>'
  html += '<div>' + LOCATION_ICON_SVG + ' ' + esc(event.location || '') + '</div>'
  html += '<div>' + USERS_ICON_SVG + ' ' + formatNumber(event.participants || 0) + ' \u53c2\u4e0e</div>'
  html += '</div>'
  html += '</div>'
  html += '</div>'
  return html
}

function renderTravelCard(route) {
  if (!route) return ''

  var html = '<div class="bc-travel-card">'
  html += '<div class="bc-travel-card-img">'
  html += imgTag(route.image, route.dataImg, esc(route.title))
  html += '</div>'
  html += '<div class="bc-travel-card-body">'
  html += '<h5>' + esc(route.title) + '</h5>'
  html += '<div class="bc-travel-card-location">' + LOCATION_ICON_SVG + ' ' + esc(route.location || '') + '</div>'
  html += '<div class="bc-travel-card-details">'
  html += '<span>' + CLOCK_ICON_SVG + ' ' + esc(route.duration || '') + '</span>'
  html += '<span>' + formatPrice(route.price) + '</span>'
  html += '<span>' + USERS_ICON_SVG + ' ' + formatNumber(route.booked || 0) + ' \u5df2\u62a5</span>'
  html += '</div>'
  html += '</div>'
  html += '</div>'
  return html
}

function renderCourseCard(course) {
  if (!course) return ''

  var html = '<div class="bc-course-card">'
  html += '<div class="bc-course-card-img">'
  html += imgTag(course.image, course.dataImg, esc(course.title))
  html += '</div>'
  html += '<div class="bc-course-card-body">'
  html += '<h5>' + esc(course.title) + '</h5>'
  html += '<div class="bc-course-card-age">' + esc(course.ageGroup || '') + '</div>'
  html += '<div class="bc-course-card-meta">'
  html += '<span>' + CLOCK_ICON_SVG + ' ' + esc(course.duration || '') + '</span>'
  html += '<span>' + formatPrice(course.price) + '</span>'
  html += '</div>'
  html += '</div>'
  html += '</div>'
  return html
}

function renderMuseumCard(exhibit) {
  if (!exhibit) return ''

  var html = '<div class="bc-museum-card">'
  html += '<div class="bc-museum-card-img">'
  html += imgTag(exhibit.image, exhibit.dataImg, esc(exhibit.title))
  html += '</div>'
  html += '<div class="bc-museum-card-body">'
  html += '<h5>' + esc(exhibit.title) + '</h5>'
  html += '<p>' + esc(exhibit.description || '') + '</p>'
  html += '</div>'
  html += '</div>'
  return html
}

function renderPostCard(post) {
  if (!post) return ''

  var html = '<div class="bc-post-card">'
  html += '<div class="bc-post-card-header">'
  html += imgTag(post.authorAvatar, post.authorDataImg, esc(post.author), 'width:36px;height:36px;border-radius:50%;')
  html += '<div>'
  html += '<div class="bc-post-author">' + esc(post.author) + '</div>'
  html += '<div class="bc-post-time">' + esc(post.time || '') + '</div>'
  html += '</div>'
  html += '</div>'
  html += '<div class="bc-post-card-body">'
  html += '<h5>' + esc(post.title) + '</h5>'
  html += '<p>' + esc(post.content || '') + '</p>'
  html += '</div>'
  html += '<div class="bc-post-card-stats">'
  html += '<span>' + HEART_ICON_SVG + ' ' + formatNumber(post.likes || 0) + '</span>'
  html += '<span>' + COMMENT_ICON_SVG + ' ' + formatNumber(post.comments || 0) + '</span>'
  html += '<span>' + SHARE_ICON_SVG + ' ' + formatNumber(post.shares || 0) + '</span>'
  html += '</div>'
  html += '</div>'
  return html
}

function renderProtectionCard(project) {
  if (!project) return ''

  var progress = project.progress || 0

  var html = '<div class="bc-protection-card">'
  html += '<div class="bc-protection-card-img">'
  html += imgTag(project.image, project.dataImg, esc(project.title))
  html += '</div>'
  html += '<div class="bc-protection-card-body">'
  html += '<h5>' + esc(project.title) + '</h5>'
  html += '<p>' + esc(project.description || '') + '</p>'
  html += '<div class="bc-protection-progress">'
  html += '<div class="bc-protection-progress-bar" style="width:' + progress + '%"></div>'
  html += '</div>'
  html += '<div class="flex-between text-sm mt-1">'
  html += '<span>' + progress + '% \u8fbe\u6210</span>'
  html += '<span>' + formatPrice(project.raised || 0) + ' / ' + formatPrice(project.goal || 0) + '</span>'
  html += '</div>'
  html += '</div>'
  html += '</div>'
  return html
}

function renderGearCard(gear) {
  if (!gear) return ''

  var html = '<div class="bc-gear-card">'
  html += '<div class="bc-gear-card-img">'
  html += imgTag(gear.image, gear.dataImg, esc(gear.title))
  html += '</div>'
  html += '<div class="bc-gear-card-body">'
  html += '<h5>' + esc(gear.title) + '</h5>'
  html += '<div class="bc-gear-card-brand">' + esc(gear.brand || '') + '</div>'
  html += '<div class="bc-gear-card-rating">'
  html += STAR_ICON_SVG + ' ' + (gear.rating || '0') + ' (' + (gear.reviews || 0) + ')'
  html += '</div>'
  html += '</div>'
  html += '</div>'
  return html
}

function renderSpeciesCard(species) {
  if (!species) return ''

  var html = '<div class="bc-species-card">'
  html += imgTag(species.image, species.dataImg, esc(species.name))
  html += '<div class="bc-species-card-body">'
  html += '<h5>' + esc(species.name) + '</h5>'
  html += '<div class="sci-name">' + esc(species.scientificName || '') + '</div>'
  html += '</div>'
  html += '</div>'
  return html
}

function renderHeroSlider(slides) {
  if (!slides || slides.length === 0) return ''

  var html = '<div class="bc-hero" id="bcHeroSlider">'

  slides.forEach(function(slide, i) {
    var activeClass = i === 0 ? ' active' : ''
    html += '<div class="bc-hero-slide' + activeClass + '" data-slide="' + i + '">'
    html += imgTag(slide.image, slide.dataImg, esc(slide.title))
    html += '<div class="bc-hero-slide-content">'
    html += '<h2>' + esc(slide.title) + '</h2>'
    if (slide.subtitle) html += '<p>' + esc(slide.subtitle) + '</p>'
    if (slide.link) html += '<a href="' + slide.link + '" class="btn btn-accent mt-2">\u67e5\u770b\u8be6\u60c5</a>'
    html += '</div>'
    html += '</div>'
  })

  html += '<div class="bc-hero-controls">'
  html += '<div class="bc-hero-dots">'
  slides.forEach(function(_, i) {
    html += '<span class="bc-hero-dot' + (i === 0 ? ' active' : '') + '" data-dot="' + i + '"></span>'
  })
  html += '</div>'
  html += '<div class="bc-hero-arrows">'
  html += '<button class="bc-hero-arrow" data-hero-action="prev">' + ARROW_LEFT_SVG + '</button>'
  html += '<button class="bc-hero-arrow" data-hero-action="next">' + ARROW_RIGHT_SVG + '</button>'
  html += '</div>'
  html += '</div>'

  html += '</div>'

  html += '<script>'
  html += '(function(){'
  html += 'var slider=document.getElementById("bcHeroSlider");if(!slider)return;'
  html += 'var slides=slider.querySelectorAll(".bc-hero-slide");'
  html += 'var dots=slider.querySelectorAll(".bc-hero-dot");'
  html += 'var current=0;var total=slides.length;'
  html += 'function goTo(i){'
  html += 'slides[current].classList.remove("active");'
  html += 'dots[current].classList.remove("active");'
  html += 'current=((i%total)+total)%total;'
  html += 'slides[current].classList.add("active");'
  html += 'dots[current].classList.add("active");'
  html += '}'
  html += 'slider.querySelector(".bc-hero-arrows").addEventListener("click",function(e){'
  html += 'var btn=e.target.closest("[data-hero-action]");if(!btn)return;'
  html += 'if(btn.getAttribute("data-hero-action")==="prev")goTo(current-1);'
  html += 'else goTo(current+1);'
  html += '});'
  html += 'slider.querySelector(".bc-hero-dots").addEventListener("click",function(e){'
  html += 'var dot=e.target.closest("[data-dot]");if(!dot)return;'
  html += 'goTo(parseInt(dot.getAttribute("data-dot")));'
  html += '});'
  html += 'setInterval(function(){goTo(current+1)},6000);'
  html += '})();'
  html += '</script>'

  return html
}

function renderPagination(current, total, onChange) {
  if (total <= 1) return ''

  current = current || 1
  var html = '<nav class="bc-pagination" aria-label="\u5206\u9875\u5bfc\u822a">'

  html += '<button data-page="' + (current - 1) + '"' + (current <= 1 ? ' disabled' : '') + '>' + ARROW_LEFT_SVG + '</button>'

  var pages = getPageRange(current, total)

  pages.forEach(function(p) {
    if (p === '...') {
      html += '<span style="padding:0 4px;color:var(--neutral-soft)">...</span>'
    } else {
      html += '<button data-page="' + p + '"' + (p === current ? ' class="active"' : '') + '>' + p + '</button>'
    }
  })

  html += '<button data-page="' + (current + 1) + '"' + (current >= total ? ' disabled' : '') + '>' + ARROW_RIGHT_SVG + '</button>'
  html += '</nav>'

  return html
}

function getPageRange(current, total) {
  if (total <= 7) {
    var arr = []
    for (var i = 1; i <= total; i++) arr.push(i)
    return arr
  }

  var pages = [1]

  if (current > 3) pages.push('...')

  var start = Math.max(2, current - 1)
  var end = Math.min(total - 1, current + 1)

  for (var i = start; i <= end; i++) {
    pages.push(i)
  }

  if (current < total - 2) pages.push('...')

  pages.push(total)

  return pages
}

function renderEmptyState(message, icon) {
  message = message || '\u6682\u65e0\u5185\u5bb9'
  icon = icon || EMPTY_FOLDER_SVG

  var html = '<div class="bc-empty">'
  html += '<div class="bc-empty-icon">' + icon + '</div>'
  html += '<h4>' + esc(message) + '</h4>'
  html += '</div>'
  return html
}

function renderLoading() {
  var html = '<div class="bc-loading">'
  html += '<div class="bc-spinner"></div>'
  html += '<span>\u52a0\u8f7d\u4e2d...</span>'
  html += '</div>'
  return html
}

window.BirdChainComponents = {
  renderHeader: renderHeader,
  renderFooter: renderFooter,
  renderBreadcrumb: renderBreadcrumb,
  renderWorkCard: renderWorkCard,
  renderCreatorCard: renderCreatorCard,
  renderTopicCard: renderTopicCard,
  renderStationCard: renderStationCard,
  renderProductCard: renderProductCard,
  renderArticleCard: renderArticleCard,
  renderEventCard: renderEventCard,
  renderTravelCard: renderTravelCard,
  renderCourseCard: renderCourseCard,
  renderMuseumCard: renderMuseumCard,
  renderPostCard: renderPostCard,
  renderProtectionCard: renderProtectionCard,
  renderGearCard: renderGearCard,
  renderSpeciesCard: renderSpeciesCard,
  renderHeroSlider: renderHeroSlider,
  renderPagination: renderPagination,
  renderEmptyState: renderEmptyState,
  renderLoading: renderLoading
}
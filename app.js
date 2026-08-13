(function () {
  'use strict';

  /* Storage Keys */
  var KEY = {
    rooms: 'hde_rooms_v3',
    bookings: 'hde_bookings_v3',
    reviews: 'hde_reviews_v3',
    food: 'hde_food_v3',
    settings: 'hde_settings_v3',
    promos: 'hde_promos_v3',
    deviceImgs: 'hde_device_imgs_v3'
  };

  /* Default Seed Data */
  var DEFAULT_ROOMS = [
    {
      id: 'room_1',
      title: 'Deluxe Executive Room',
      price: 2499,
      capacity: 2,
      status: 'Available',
      img: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=800&q=80',
      amenities: ['AC', 'Free Wi-Fi', 'King Bed', 'LED TV', '24/7 Room Service'],
      desc: 'Elegantly furnished room featuring a premium king-size bed, workstation, attached bath with rain shower, and quiet ambient lighting.'
    },
    {
      id: 'room_2',
      title: 'Super Deluxe Family Room',
      price: 3499,
      capacity: 4,
      status: 'Available',
      img: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=80',
      amenities: ['Twin Beds', 'AC', 'Breakfast Included', 'Tea/Coffee Maker', 'Free Parking'],
      desc: 'Spacious air-conditioned room ideal for families or corporate teams with double beds, seating area, and complimentary breakfast.'
    },
    {
      id: 'room_3',
      title: 'Diamond Luxury Suite',
      price: 4999,
      capacity: 2,
      status: 'Available',
      img: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80',
      amenities: ['Living Area', 'Solapur View', 'Mini Bar', 'Bathtub', 'VIP Amenities'],
      desc: 'Our flagship suite offering panoramic views of Chhatrapati Shivaji Maharaj Chowk, separate living parlor, plush bathtub, and premium service.'
    },
    {
      id: 'room_4',
      title: 'Presidential Executive Suite',
      price: 7999,
      capacity: 3,
      status: 'Available',
      img: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=800&q=80',
      amenities: ['Private Lounge', 'Free Breakfast & Dinner', 'Airport Transfer', 'Jacuzzi'],
      desc: 'Unrivaled luxury with private dining space, marble flooring, jacuzzi bath, and dedicated butler attendance.'
    }
  ];

  var DEFAULT_FOOD = [
    { id: 'f1', title: 'Solapuri Shenga Chutney & Jowar Bhakri Thali', price: 220, category: 'Solapuri Specialties', type: 'veg', desc: 'Authentic Solapur meal served with hot Jowar Bhakris, garlic peanut chutney, spicy curries, and buttermilk.' },
    { id: 'f2', title: 'Pithla Bhakri Special Combo', price: 180, category: 'Solapuri Specialties', type: 'veg', desc: 'Traditional Maharashtrian Pithla cooked in brass pot served with raw onion, thecha, and fresh bhakri.' },
    { id: 'f3', title: 'Executive South Indian Breakfast', price: 160, category: 'Breakfast', type: 'veg', desc: 'Crispy Butter Dosa, Idli Sambar, Medu Vada served with fresh coconut chutneys.' },
    { id: 'f4', title: 'Royal Butter Chicken & Garlic Naan', price: 340, category: 'Main Course', type: 'nonveg', desc: 'Tender chicken in rich creamy tomato gravy accompanied by 2 freshly baked butter garlic naans.' },
    { id: 'f5', title: 'Paneer Butter Masala & Jeera Rice', price: 280, category: 'Main Course', type: 'veg', desc: 'Fresh cottage cheese cubes cooked in mildly spiced aromatic butter gravy.' },
    { id: 'f6', title: 'Special Solapuri Cad-B Chocolate Shake', price: 120, category: 'Beverages', type: 'veg', desc: 'Thick creamy Cad-B chocolate shake topped with dark chocolate chips.' }
  ];

  var DEFAULT_REVIEWS = [
    { name: 'Dr. Anand Deshmukh', rating: 5, comment: 'Stayed at Hotel Diamond Executive during my Solapur visit. The location right at Shivaji Maharaj Chowk is unbeatable, and room service was top-notch!', date: '2026-08-01' },
    { name: 'Priya Kulkarni', rating: 5, comment: 'Clean rooms, comfortable king beds, and prompt online reservation confirmation with instant SMS invoice!', date: '2026-08-05' },
    { name: 'Rajesh Patil', rating: 4, comment: 'Very pleasant stay. The Solapuri Shenga Chutney Thali ordered to our room was authentic and delicious.', date: '2026-08-08' }
  ];

  var DEFAULT_SETTINGS = {
    enableFoodService: true,
    hotelName: 'Hotel Diamond Executive',
    hotelTagline: 'Welcome to Luxury & Comfort',
    hotelAddress: 'Chhatrapati Shivaji Maharaj Chowk, Solapur, Maharashtra, India',
    hotelPhone: '+91 0217 2345678',
    hotelWhatsapp: '9102172345678',
    hotelEmail: 'info@hoteldiamondexecutive.com',
    adminPass: 'admin123',
    announcementEnable: true,
    announcementText: '📢 Special Offer: Enjoy flat 20% OFF on direct online room reservations!',
    textRoomsTitle: 'Room Categories & Pricing',
    textRoomsBadge: 'Executive Accommodation',
    textRoomsDesc: 'Select your ideal room with real-time live availability and transparent pricing.',
    textFoodTitle: 'In-Room Dining & Food Service',
    textOffersTitle: 'Special Offers & Promo Codes',
    secHeroSearch: true,
    secFood: true,
    secOffers: true,
    secReviews: true,
    themePalette: 'gold',
    groupExtraSurcharge: 500,
    groupSupportNote: 'Assigned upon Admin Desk approval',
    groupLegalTerms: 'Special Access Group Policy (5+ Guests):\n1. All staying guests (5 or more) must present valid Govt Photo ID at check-in.\n2. Standard room rate applies up to 4 guests. Extra guests above 4 carry a surcharge rate of ₹500/night per person.\n3. A refundable security deposit of ₹1,000 may be requested at the admin desk.\n4. Quiet hours apply from 10:00 PM to 07:00 AM.',
    generalTerms: 'General Hospitality Terms & Conditions:\n1. Standard Check-in time is 12:00 PM and Check-out time is 11:00 AM.\n2. All staying guests must present valid Government-issued Photo ID at the Admin Verification Desk upon arrival.\n3. Online reservations require Admin Desk Approval verification prior to billing voucher generation.\n4. Right of admission is reserved by Hotel Management.\n5. Outside food & beverage in common areas are subject to house rules.\n6. For group bookings of 5+ guests, Special Group Access & Pricing Attribution terms apply.'
  };

  var DEFAULT_PROMOS = [
    { code: 'DIAMOND10', discount: 10, title: 'Direct Booking Discount' },
    { code: 'WELCOME20', discount: 20, title: 'Welcome Solapur Deal' },
    { code: 'SOLAPUR30', discount: 30, title: 'Corporate Executive Offer' }
  ];

  /* Storage Helper */
  var db = {
    get: function (k, fallback) {
      try {
        var val = localStorage.getItem(k);
        return val ? JSON.parse(val) : fallback;
      } catch (e) {
        return fallback;
      }
    },
    set: function (k, val) {
      try {
        localStorage.setItem(k, JSON.stringify(val));
      } catch (e) {}
    }
  };

  /* Application State */
  db.set(KEY.bookings, []);
  try {
    localStorage.removeItem('hde_bookings_v3');
    localStorage.removeItem('hde_bookings_v2');
    localStorage.removeItem('hde_bookings_v1');
    localStorage.removeItem('hde_bookings');
    localStorage.removeItem('hde_receipts');
  } catch (e) {}

  var state = {
    rooms: db.get(KEY.rooms, DEFAULT_ROOMS),
    food: db.get(KEY.food, DEFAULT_FOOD),
    bookings: [],
    reviews: db.get(KEY.reviews, DEFAULT_REVIEWS),
    settings: db.get(KEY.settings, DEFAULT_SETTINGS),
    promos: db.get(KEY.promos, DEFAULT_PROMOS),
    deviceImages: db.get(KEY.deviceImgs, []),
    selectedDeviceImg: '',
    selectedRoom: null,
    discountPercent: 0,
    activeFoodCategory: 'All',
    searchFilter: {
      active: false,
      checkin: '',
      checkout: '',
      guests: 2,
      maxPrice: 'all'
    }
  };

  /* Toast Notification UI */
  function toast(msg, type) {
    var region = document.getElementById('toast-region');
    if (!region) return;
    var el = document.createElement('div');
    el.className = 'toast' + (type === 'error' ? ' toast--error' : type === 'success' ? ' toast--success' : '');
    el.textContent = msg;
    region.appendChild(el);
    setTimeout(function () {
      el.remove();
    }, 3800);
  }

  /* Currency Formatter */
  function formatINR(num) {
    return '₹' + Number(num || 0).toLocaleString('en-IN');
  }

  /* Sync Hotel Details, Announcement, Section Visibility & Theme Palette */
  function syncSettingsUI() {
    // Hotel Information
    var names = document.querySelectorAll('.js-hotel-name');
    names.forEach(function (el) { el.textContent = state.settings.hotelName; });

    var taglines = document.querySelectorAll('.js-hotel-tagline');
    taglines.forEach(function (el) { el.textContent = state.settings.hotelTagline; });

    var addresses = document.querySelectorAll('.js-hotel-address');
    addresses.forEach(function (el) { el.textContent = state.settings.hotelAddress; });

    var phones = document.querySelectorAll('.js-hotel-phone');
    phones.forEach(function (el) { el.textContent = state.settings.hotelPhone; });

    var emails = document.querySelectorAll('.js-hotel-email');
    emails.forEach(function (el) { el.textContent = state.settings.hotelEmail; });

    var waNum = (state.settings.hotelWhatsapp || '9102172345678').replace(/[^0-9]/g, '');
    var waLinks = document.querySelectorAll('.js-whatsapp-link');
    waLinks.forEach(function (el) {
      el.href = 'https://wa.me/' + waNum + '?text=' + encodeURIComponent('Hello ' + (state.settings.hotelName || 'Hotel Diamond Executive') + ', I want to inquire about a room booking.');
    });

    // Announcement Bar
    var annBar = document.getElementById('announcement-bar');
    var annText = document.getElementById('announcement-text');
    if (annBar && annText) {
      if (state.settings.announcementEnable && state.settings.announcementText) {
        annText.textContent = state.settings.announcementText;
        annBar.hidden = false;
      } else {
        annBar.hidden = true;
      }
    }

    // Editable Titles & Badges
    var rTitle = document.getElementById('rooms-title-text');
    if (rTitle && state.settings.textRoomsTitle) rTitle.textContent = state.settings.textRoomsTitle;

    var rBadge = document.getElementById('rooms-badge-text');
    if (rBadge && state.settings.textRoomsBadge) rBadge.textContent = state.settings.textRoomsBadge;

    var rDesc = document.getElementById('rooms-desc-text');
    if (rDesc && state.settings.textRoomsDesc) rDesc.textContent = state.settings.textRoomsDesc;

    var fTitle = document.getElementById('food-title-text');
    if (fTitle && state.settings.textFoodTitle) fTitle.textContent = state.settings.textFoodTitle;

    var oTitle = document.getElementById('offers-title-text');
    if (oTitle && state.settings.textOffersTitle) oTitle.textContent = state.settings.textOffersTitle;

    // Master Section Visibility Toggles
    var secHeroSearch = document.getElementById('hero-search-wrapper');
    if (secHeroSearch) secHeroSearch.hidden = !state.settings.secHeroSearch;

    var foodNav = document.getElementById('nav-link-food');
    var foodSection = document.getElementById('section-food');
    var foodAdminNav = document.getElementById('admin-nav-btn-food');
    var showFood = state.settings.enableFoodService && state.settings.secFood;
    if (foodNav) foodNav.hidden = !showFood;
    if (foodSection) foodSection.hidden = !showFood;
    if (foodAdminNav) foodAdminNav.hidden = !showFood;

    var offersNav = document.getElementById('nav-link-offers');
    var offersSection = document.getElementById('section-offers');
    if (offersNav) offersNav.hidden = !state.settings.secOffers;
    if (offersSection) offersSection.hidden = !state.settings.secOffers;

    var reviewsNav = document.getElementById('nav-link-reviews');
    var reviewsSection = document.getElementById('section-reviews');
    if (reviewsNav) reviewsNav.hidden = !state.settings.secReviews;
    if (reviewsSection) reviewsSection.hidden = !state.settings.secReviews;

    // Theme Palette Application
    document.body.className = '';
    if (state.settings.themePalette && state.settings.themePalette !== 'gold') {
      document.body.classList.add('theme-' + state.settings.themePalette);
    }
  }

  /* Render Room Categories on Main Website */
  function renderRooms() {
    var wrap = document.getElementById('rooms-grid');
    var banner = document.getElementById('search-filter-banner');
    if (!wrap) return;

    var filtered = state.rooms.filter(function (room) {
      if (!state.searchFilter.active) return true;

      // Allow rooms if capacity matches OR if 5+ guests Special Group Access is requested
      if (state.searchFilter.guests < 5 && room.capacity < state.searchFilter.guests) return false;

      if (state.searchFilter.maxPrice !== 'all') {
        if (room.price > Number(state.searchFilter.maxPrice)) return false;
      }

      return true;
    });

    // Filter Summary Banner
    if (banner) {
      if (state.searchFilter.active) {
        banner.hidden = false;
        var dateInfo = (state.searchFilter.checkin && state.searchFilter.checkout) ?
          (' | 📅 Dates: ' + state.searchFilter.checkin + ' to ' + state.searchFilter.checkout) : '';
        var budgetInfo = state.searchFilter.maxPrice !== 'all' ? (' | 💰 Max Budget: ' + formatINR(state.searchFilter.maxPrice)) : '';

        banner.innerHTML =
          '<div class="search-filter-banner__info">' +
            '<span>Showing available room results:</span>' +
            '<span class="search-filter-banner__tag">👥 ' + state.searchFilter.guests + '+ Guests</span>' +
            (dateInfo ? '<span class="search-filter-banner__tag">' + dateInfo + '</span>' : '') +
            (budgetInfo ? '<span class="search-filter-banner__tag">' + budgetInfo + '</span>' : '') +
            '<span style="color:var(--ink-soft);font-size:0.85rem;">(' + filtered.length + ' Categories Found)</span>' +
          '</div>' +
          '<button type="button" id="btn-clear-search-banner" class="btn btn--outline btn--sm" style="background:#fff;">Clear Search</button>';
      } else {
        banner.hidden = true;
      }
    }

    if (!filtered.length) {
      wrap.innerHTML =
        '<div style="grid-column: 1 / -1; text-align: center; padding: 40px 20px; background: var(--bg-soft); border: 1px dashed var(--gold); border-radius: 12px;">' +
          '<h3 style="margin-bottom:8px;">No Rooms Match Your Search Filter</h3>' +
          '<p style="margin-bottom:16px;color:var(--ink-soft);">Try selecting fewer guests or adjusting your maximum nightly budget limit.</p>' +
          '<button type="button" id="btn-reset-search-empty" class="btn btn--gold">Show All Room Categories</button>' +
        '</div>';
      return;
    }

    wrap.innerHTML = filtered.map(function (room) {
      var isAvailable = room.status === 'Available';
      var amenitiesHTML = (room.amenities || []).map(function (a) {
        return '<span class="amenity-chip">' + a + '</span>';
      }).join('');

      return '<div class="room-card">' +
        '<img src="' + (room.img || 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=800&q=80') + '" alt="' + room.title + '" class="room-card__img" loading="lazy">' +
        '<div class="room-card__header">' +
          '<div>' +
            '<h3>' + room.title + '</h3>' +
            '<span class="room-status room-status--' + (isAvailable ? 'available' : 'soldout') + '">' + room.status + '</span>' +
          '</div>' +
          '<div class="room-card__price">' + formatINR(room.price) + ' <small style="font-size:0.75rem;color:var(--ink-faint);display:block;">/ night</small></div>' +
        '</div>' +
        '<div class="room-card__body">' +
          '<p>' + room.desc + '</p>' +
          '<div class="room-amenities">' + amenitiesHTML + '</div>' +
          '<p style="font-size:0.85rem;color:var(--ink-soft);margin-bottom:16px;"><strong>Max Capacity:</strong> ' + room.capacity + ' Guests</p>' +
          '<button type="button" class="btn btn--gold btn--block" data-action="book-room" data-room-id="' + room.id + '" ' + (isAvailable ? '' : 'disabled') + '>' +
            (isAvailable ? 'Book This Room' : 'Currently Sold Out') +
          '</button>' +
        '</div>' +
        '</div>';
    }).join('');
  }

  /* Render Food & Service Section */
  function renderFoodMenu() {
    var wrap = document.getElementById('food-grid');
    if (!wrap) return;

    var filtered = state.food.filter(function (item) {
      return state.activeFoodCategory === 'All' || item.category === state.activeFoodCategory;
    });

    if (!filtered.length) {
      wrap.innerHTML = '<p style="grid-column:1/-1;text-align:center;padding:20px;color:var(--ink-faint);">No menu items found for this category.</p>';
      return;
    }

    wrap.innerHTML = filtered.map(function (item) {
      return '<div class="food-card">' +
        '<div class="food-card__head">' +
          '<h4 class="food-card__title">' + item.title + '</h4>' +
          '<span class="food-card__price">' + formatINR(item.price) + '</span>' +
        '</div>' +
        '<span class="food-badge food-badge--' + item.type + '" style="margin-bottom:8px;">' + (item.type === 'veg' ? 'Veg' : 'Non-Veg') + '</span>' +
        '<p class="food-card__desc">' + item.desc + '</p>' +
        '<button type="button" class="btn btn--outline btn--sm btn--block" data-action="order-food" data-title="' + item.title + '">Order To Room</button>' +
      '</div>';
    }).join('');
  }

  /* Render Special Offers Section */
  function renderOffers() {
    var wrap = document.getElementById('offers-grid');
    if (!wrap) return;

    wrap.innerHTML = state.promos.map(function (p) {
      return '<div class="offer-card">' +
        '<span class="offer-badge">' + p.discount + '% OFF</span>' +
        '<h3>' + p.title + '</h3>' +
        '<p>Apply during checkout for instant savings on all room categories.</p>' +
        '<div class="offer-code">' +
          '<span>Use Code: <strong>' + p.code + '</strong></span>' +
          '<button type="button" class="btn btn--outline btn--sm" data-action="copy-code" data-code="' + p.code + '">Copy Code</button>' +
        '</div>' +
      '</div>';
    }).join('');
  }

  /* Render Guest Reviews Section */
  function renderReviews() {
    var wrap = document.getElementById('reviews-grid');
    if (!wrap) return;

    wrap.innerHTML = state.reviews.map(function (r) {
      var stars = '★'.repeat(r.rating) + '☆'.repeat(5 - r.rating);
      return '<div class="review-card">' +
        '<div class="review-card__head">' +
          '<span class="review-card__author">' + r.name + '</span>' +
          '<span class="rating-stars">' + stars + '</span>' +
        '</div>' +
        '<p>"' + r.comment + '"</p>' +
        '<span style="font-size:0.78rem;color:var(--ink-faint);">Verified Stay • ' + r.date + '</span>' +
      '</div>';
    }).join('');
  }

  /* Booking Modal Operations */
  function openBookingModal(roomId) {
    var room = state.rooms.find(function (r) { return r.id === roomId; });
    if (!room) return;
    state.selectedRoom = room;
    state.discountPercent = 0;

    document.getElementById('booking-room-id').value = room.id;
    document.getElementById('booking-room-title').textContent = 'Book ' + room.title;
    document.getElementById('booking-room-subtitle').textContent = formatINR(room.price) + ' / night';

    var today = new Date().toISOString().split('T')[0];
    var tomorrow = new Date(Date.now() + 86400000).toISOString().split('T')[0];
    document.getElementById('book-checkin').value = today;
    document.getElementById('book-checkout').value = tomorrow;
    document.getElementById('book-promo').value = '';

    updateBookingSummary();
    document.getElementById('booking-modal').hidden = false;
  }

  function updateBookingSummary() {
    if (!state.selectedRoom) return;

    var checkinVal = document.getElementById('book-checkin').value;
    var checkoutVal = document.getElementById('book-checkout').value;
    var guestsSelect = document.getElementById('book-guests');
    var guestsVal = guestsSelect ? (parseInt(guestsSelect.value, 10) || 2) : 2;

    var d1 = new Date(checkinVal || Date.now());
    var d2 = new Date(checkoutVal || Date.now() + 86400000);
    var diffMs = Math.max(d2 - d1, 86400000);
    var nights = Math.ceil(diffMs / (1000 * 60 * 60 * 24));

    var baseSubtotal = state.selectedRoom.price * nights;
    var discount = Math.round((baseSubtotal * state.discountPercent) / 100);

    var groupSurcharge = 0;
    var specialGroupBox = document.getElementById('special-group-box');
    var groupSurchargeText = document.getElementById('group-surcharge-text');
    var groupTermsDisplay = document.getElementById('group-terms-display');

    if (guestsVal >= 5) {
      var extraGuests = guestsVal - 4;
      var rate = parseInt(state.settings.groupExtraSurcharge, 10) || 500;
      groupSurcharge = extraGuests * rate * nights;

      if (groupSurchargeText) {
        groupSurchargeText.textContent = '👑 Special Access Surcharge: +' + formatINR(groupSurcharge) + ' (' + extraGuests + ' Extra Guest' + (extraGuests > 1 ? 's' : '') + ' above 4 x ' + formatINR(rate) + '/night x ' + nights + ' night' + (nights > 1 ? 's' : '') + ')';
      }

      if (groupTermsDisplay) {
        groupTermsDisplay.textContent = state.settings.groupLegalTerms || 'Special Access Group Policy applies for 5+ guests.';
      }

      if (specialGroupBox) specialGroupBox.hidden = false;
    } else {
      if (specialGroupBox) specialGroupBox.hidden = true;
    }

    var total = Math.max(baseSubtotal - discount, 0) + groupSurcharge;

    document.getElementById('summary-rate').textContent = formatINR(state.selectedRoom.price);
    document.getElementById('summary-nights').textContent = nights;
    document.getElementById('summary-discount').textContent = '-' + formatINR(discount);

    var summaryBox = document.querySelector('.booking-summary');
    var surchargeRow = document.getElementById('summary-surcharge-row');
    if (groupSurcharge > 0) {
      if (!surchargeRow && summaryBox) {
        surchargeRow = document.createElement('div');
        surchargeRow.id = 'summary-surcharge-row';
        surchargeRow.className = 'summary-row';
        surchargeRow.style.color = '#B45309';
        surchargeRow.style.fontWeight = 'bold';
        var totalRow = summaryBox.querySelector('.summary-row--total');
        if (totalRow) summaryBox.insertBefore(surchargeRow, totalRow);
        else summaryBox.appendChild(surchargeRow);
      }
      if (surchargeRow) {
        surchargeRow.innerHTML = '<span>Group Surcharge (5+ Guests):</span> <span>+' + formatINR(groupSurcharge) + '</span>';
        surchargeRow.style.display = 'flex';
      }
    } else if (surchargeRow) {
      surchargeRow.style.display = 'none';
    }

    document.getElementById('summary-total').textContent = formatINR(total);
  }

  function handlePromoApply() {
    var inputCode = (document.getElementById('book-promo').value || '').trim().toUpperCase();
    var found = state.promos.find(function (p) { return p.code === inputCode; });

    if (found) {
      state.discountPercent = found.discount;
      toast(found.discount + '% Promo Discount Applied!', 'success');
    } else {
      state.discountPercent = 0;
      toast('Invalid Promo Code', 'error');
    }
    updateBookingSummary();
  }

  /* Standalone SHA-256 Electronic Evidence Fingerprint Cryptographic Engine */
  function simpleSHA256Fallback(ascii) {
    function rightRotate(value, amount) {
      return (value >>> amount) | (value << (32 - amount));
    }
    var mathPow = Math.pow;
    var maxWord = mathPow(2, 32);
    var lengthProperty = 'length';
    var i, j;
    var result = '';
    var words = [];
    var asciiBitLength = ascii[lengthProperty] * 8;
    var hash = [
      0x6a09e667, 0xbb67ae85, 0x3c6ef372, 0xa54ff53a,
      0x510e527f, 0x9b05688c, 0x1f83d9ab, 0x5be0cd19
    ];
    var k = [
      0x428a2f98, 0x71374491, 0xb5c0fbcf, 0xe9b5dba5, 0x3956c25b, 0x59f111f1, 0x923f82a4, 0xab1c5ed5,
      0xd807aa98, 0x12835b01, 0x243185be, 0x550c7dc3, 0x72be5d74, 0x80deb1fe, 0x9bdc06a7, 0xc19bf174,
      0xe49b69c1, 0xefbe4786, 0x0fc19dc6, 0x240ca1cc, 0x2de92c6f, 0x4a7484aa, 0x5cb0a9dc, 0x76f988da,
      0x983e5152, 0xa831c66d, 0xb00327c8, 0xbf597fc7, 0xc6e00bf3, 0xd5a79147, 0x06ca6351, 0x14292967,
      0x27b70a85, 0x2e1b2138, 0x4d2c6dfc, 0x53380d13, 0x650a7354, 0x766a0abb, 0x81c2c92e, 0x92722c85,
      0xa2bfe8a1, 0xa81a664b, 0xc24b8b70, 0xc76c51a3, 0xd192e819, 0xd6990624, 0xf40e3585, 0x106aa070,
      0x19a4c116, 0x1e376c08, 0x2748774c, 0x34b0bcb5, 0x391c0cb3, 0x4ed8aa4a, 0x5b9cca4f, 0x682e6ff3,
      0x748f82ee, 0x78a5636f, 0x84c87814, 0x8cc70208, 0x90befffa, 0xa4506ceb, 0xbef9a3f7, 0xc67178f2
    ];

    ascii += '\x80';
    while (ascii[lengthProperty] % 64 - 56) ascii += '\x00';
    for (i = 0; i < ascii[lengthProperty]; i++) {
      j = ascii.charCodeAt(i);
      if (j >> 8) return '';
      words[i >> 2] |= j << ((3 - i % 4) * 8);
    }
    words[words[lengthProperty]] = ((asciiBitLength / maxWord) | 0);
    words[words[lengthProperty]] = (asciiBitLength | 0);

    for (j = 0; j < words[lengthProperty];) {
      var w = words.slice(j, j += 16);
      var oldHash = hash;
      hash = hash.slice(0, 8);

      for (i = 0; i < 64; i++) {
        var w15 = w[i - 15], w2 = w[i - 2];
        var a = hash[0], e = hash[4];
        var temp1 = hash[7]
          + (rightRotate(e, 6) ^ rightRotate(e, 11) ^ rightRotate(e, 25))
          + ((e & hash[5]) ^ ((~e) & hash[6]))
          + k[i]
          + (w[i] = (i < 16) ? w[i] : (
              w[i - 16]
              + (rightRotate(w15, 7) ^ rightRotate(w15, 18) ^ (w15 >>> 3))
              + w[i - 7]
              + (rightRotate(w2, 17) ^ rightRotate(w2, 19) ^ (w2 >>> 10))
            ) | 0
          );
        var temp2 = (rightRotate(a, 2) ^ rightRotate(a, 13) ^ rightRotate(a, 22))
          + ((a & hash[1]) ^ (a & hash[2]) ^ (hash[1] & hash[2]));

        hash = [(temp1 + temp2) | 0].concat(hash);
        hash[4] = (hash[4] + temp1) | 0;
      }

      for (i = 0; i < 8; i++) {
        hash[i] = (hash[i] + oldHash[i]) | 0;
      }
    }

    for (i = 0; i < 8; i++) {
      for (j = 3; j >= 0; j--) {
        var b = (hash[i] >> (j * 8)) & 255;
        result += (b < 16 ? '0' : '') + b.toString(16);
      }
    }
    return result;
  }

  async function generateBookingSHA256(b) {
    var rawText = [
      b.id,
      b.guestName,
      b.phone,
      b.email || 'N/A',
      b.guests || 2,
      b.roomTitle,
      b.checkin,
      b.checkout,
      b.total,
      b.paymentMethod,
      b.status,
      b.approvedAt || b.createdAt,
      state.settings.hotelName,
      'SOLAPUR_OFFICIAL_VERIFICATION_STAMP'
    ].join('|');

    if (window.crypto && window.crypto.subtle && window.crypto.subtle.digest) {
      try {
        var encoder = new TextEncoder();
        var data = encoder.encode(rawText);
        var hashBuffer = await window.crypto.subtle.digest('SHA-256', data);
        var hashArray = Array.from(new Uint8Array(hashBuffer));
        return hashArray.map(function (byte) { return byte.toString(16).padStart(2, '0'); }).join('');
      } catch (e) {
        console.warn('SubtleCrypto error, falling back', e);
      }
    }
    return simpleSHA256Fallback(rawText);
  }

  function buildVoucherHTML(b, sha256Hex) {
    var approvedTime = b.approvedAt || b.createdAt;
    var isApproved = b.status === 'Confirmed' || b.status === 'Checked-In' || b.status === 'Completed';
    var isGroup = (b.guests || 2) >= 5;

    return (
      '<div style="font-family: \'Plus Jakarta Sans\', Arial, sans-serif; color: #111; max-width: 760px; margin: 0 auto; padding: 24px; border: 2px solid #1C1B18; border-radius: 8px; background: #ffffff; box-sizing: border-box;">' +
        '<div style="text-align: center; border-bottom: 2px solid #1C1B18; padding-bottom: 16px; margin-bottom: 20px;">' +
          '<h1 style="margin: 0 0 6px; font-family: Georgia, serif; font-size: 24px; text-transform: uppercase; letter-spacing: 0.05em; color: #1C1B18;">' + state.settings.hotelName.toUpperCase() + '</h1>' +
          '<p style="margin: 2px 0; font-size: 13px; color: #444;">📍 ' + state.settings.hotelAddress + '</p>' +
          '<p style="margin: 2px 0; font-size: 13px; color: #444;">📞 Front Desk: ' + state.settings.hotelPhone + ' | ✉️ ' + state.settings.hotelEmail + '</p>' +
          '<div style="display: inline-block; margin-top: 10px; padding: 4px 14px; background: ' + (isApproved ? '#2A6B37' : '#B45309') + '; color: #ffffff; font-weight: bold; font-size: 12px; border-radius: 20px; letter-spacing: 0.05em; text-transform: uppercase;">' +
            (isApproved ? '✓ OFFICIAL ADMIN DESK APPROVED BILLING RECEIPT' : '⏳ PENDING ADMIN DESK APPROVAL VERIFICATION') +
          '</div>' +
        '</div>' +

        '<table style="width: 100%; border-collapse: collapse; margin-bottom: 20px; font-size: 14px;">' +
          '<tr><td style="padding: 10px; border: 1px solid #ddd; background: #fafafa; width: 35%;"><strong>Booking ID / Ref:</strong></td><td style="padding: 10px; border: 1px solid #ddd; font-weight: bold; color: #C5A059;">' + b.id + '</td></tr>' +
          '<tr><td style="padding: 10px; border: 1px solid #ddd; background: #fafafa;"><strong>Guest Name:</strong></td><td style="padding: 10px; border: 1px solid #ddd;">' + b.guestName + '</td></tr>' +
          '<tr><td style="padding: 10px; border: 1px solid #ddd; background: #fafafa;"><strong>Contact Mobile / Email:</strong></td><td style="padding: 10px; border: 1px solid #ddd;">' + b.phone + (b.email && b.email !== 'N/A' ? ' / ' + b.email : '') + '</td></tr>' +
          '<tr><td style="padding: 10px; border: 1px solid #ddd; background: #fafafa;"><strong>Occupancy &amp; Group Policy:</strong></td><td style="padding: 10px; border: 1px solid #ddd;">' + (b.guests || 2) + ' Guest(s)' + (isGroup ? ' <strong style="color:#B45309;">(👑 Special Access Group Terms Verified)</strong>' : '') + '</td></tr>' +
          '<tr><td style="padding: 10px; border: 1px solid #ddd; background: #fafafa;"><strong>Room Category:</strong></td><td style="padding: 10px; border: 1px solid #ddd;">' + b.roomTitle + '</td></tr>' +
          '<tr><td style="padding: 10px; border: 1px solid #ddd; background: #fafafa;"><strong>Check-In Date:</strong></td><td style="padding: 10px; border: 1px solid #ddd;">' + b.checkin + ' (Standard 12:00 PM)</td></tr>' +
          '<tr><td style="padding: 10px; border: 1px solid #ddd; background: #fafafa;"><strong>Check-Out Date:</strong></td><td style="padding: 10px; border: 1px solid #ddd;">' + b.checkout + ' (Standard 11:00 AM)</td></tr>' +
          '<tr><td style="padding: 10px; border: 1px solid #ddd; background: #fafafa;"><strong>Payment Mode &amp; Total:</strong></td><td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">' + b.paymentMethod + ' — ' + b.total + '</td></tr>' +
          '<tr><td style="padding: 10px; border: 1px solid #ddd; background: #fafafa;"><strong>Verification Timestamp:</strong></td><td style="padding: 10px; border: 1px solid #ddd;">' + approvedTime + '</td></tr>' +
        '</table>' +

        '<div style="background: #f8f9fa; border: 1px dashed #333333; padding: 12px 14px; border-radius: 6px; margin-top: 16px; box-sizing: border-box; max-width: 100%; text-align: left;">' +
          '<div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px;">' +
            '<strong style="font-size: 12px; color: #222;">🔐 SHA-256 Electronic Evidence Fingerprint:</strong>' +
            '<span style="font-size: 10px; color: #555; background: #e8e8e8; padding: 2px 6px; border-radius: 3px;">VALIDATED E-EVIDENCE</span>' +
          '</div>' +
          '<div style="font-family: \'SF Mono\', Consolas, monospace; font-size: 11px; letter-spacing: 0.04em; word-break: break-all; overflow-wrap: anywhere; text-align: justify; background: #ffffff; padding: 8px 10px; border: 1px solid #cccccc; border-radius: 4px; color: #111111; line-height: 1.4;">' +
            sha256Hex +
          '</div>' +
          '<p style="margin: 6px 0 0; font-size: 11px; color: #666; font-style: italic;">To prevent fraud &amp; fake vouchers, this receipt carries an authentic SHA-256 cryptographic evidence fingerprint generated at Admin Desk verification. Submit this document or PDF at hotel bill counter.</p>' +
        '</div>' +

        '<div style="margin-top: 24px; padding-top: 16px; border-top: 1px solid #eee; font-size: 12px; text-align: center; color: #555;">' +
          '<p style="margin: 0 0 4px;"><strong>Hotel Diamond Executive Front Desk Verification Desk</strong></p>' +
          '<p style="margin: 0;">Chhatrapati Shivaji Maharaj Chowk, Solapur, Maharashtra, India</p>' +
        '</div>' +
      '</div>'
    );
  }

  var pendingBookingData = null;

  function processBookingSubmit(e) {
    e.preventDefault();

    var name = document.getElementById('book-name').value.trim();
    var phone = document.getElementById('book-phone').value.trim();
    var email = document.getElementById('book-email').value.trim() || 'N/A';
    var guestsSelect = document.getElementById('book-guests');
    var guestsVal = guestsSelect ? (parseInt(guestsSelect.value, 10) || 2) : 2;
    var checkin = document.getElementById('book-checkin').value;
    var checkout = document.getElementById('book-checkout').value;
    var payMethod = document.querySelector('input[name="pay-method"]:checked').value;
    var totalText = document.getElementById('summary-total').textContent;

    if (guestsVal >= 5) {
      var agreeCheck = document.getElementById('book-agree-group-terms');
      if (!agreeCheck || !agreeCheck.checked) {
        toast('Please accept the Special Access Group Legal Terms for 5+ guests to proceed!', 'error');
        return;
      }
    }

    pendingBookingData = {
      id: 'HDE-' + Math.floor(100000 + Math.random() * 900000),
      roomTitle: state.selectedRoom.title,
      guestName: name,
      phone: phone,
      email: email,
      guests: guestsVal,
      specialGroupAgreed: guestsVal >= 5,
      checkin: checkin,
      checkout: checkout,
      total: totalText,
      paymentMethod: payMethod,
      status: 'Pending Approval',
      createdAt: new Date().toLocaleString()
    };

    // Open Purchase Review Modal for explicit purchase confirmation
    var reviewDetails = document.getElementById('purchase-review-details');
    if (reviewDetails) {
      reviewDetails.innerHTML =
        '<div class="ticket__head">' +
          '<strong>Ref ID: ' + pendingBookingData.id + '</strong>' +
          '<span class="status-badge status-badge--pending-approval">Pending Admin Approval</span>' +
        '</div>' +
        '<p><strong>Guest Name:</strong> ' + pendingBookingData.guestName + '</p>' +
        '<p><strong>Mobile Phone:</strong> ' + pendingBookingData.phone + (pendingBookingData.email !== 'N/A' ? ' | Email: ' + pendingBookingData.email : '') + '</p>' +
        '<p><strong>Occupancy &amp; Guests:</strong> ' + pendingBookingData.guests + ' Guest(s)' + (pendingBookingData.guests >= 5 ? ' <span style="color:#B45309;font-weight:bold;">(👑 Special Access Group Terms Agreed)</span>' : '') + '</p>' +
        '<p><strong>Room Category:</strong> ' + pendingBookingData.roomTitle + '</p>' +
        '<p><strong>Stay Dates:</strong> ' + pendingBookingData.checkin + ' to ' + pendingBookingData.checkout + '</p>' +
        '<p><strong>Payment Option:</strong> ' + pendingBookingData.paymentMethod + '</p>' +
        '<p style="font-size:1.2rem;color:var(--ink);margin-top:10px;"><strong>Total Amount:</strong> ' + pendingBookingData.total + '</p>';
    }

    document.getElementById('booking-modal').hidden = true;
    document.getElementById('purchase-review-modal').hidden = false;
  }

  function showConfirmationModal(b) {
    var titleEl = document.getElementById('confirmation-modal-title');
    var noticeEl = document.getElementById('confirmation-notice');
    var details = document.getElementById('confirmation-details');
    var btnPrint = document.getElementById('btn-print-voucher');
    var btnPdf = document.getElementById('btn-download-pdf-voucher');

    var isApproved = b.status === 'Confirmed' || b.status === 'Checked-In' || b.status === 'Completed';

    if (titleEl) {
      titleEl.textContent = isApproved ? 'Reservation Approved & Confirmed!' : 'Reservation Request Logged!';
    }

    if (noticeEl) {
      if (isApproved) {
        noticeEl.style.background = 'var(--success-bg)';
        noticeEl.style.borderColor = 'var(--success)';
        noticeEl.style.color = 'var(--success)';
        noticeEl.innerHTML = '✅ <strong>Admin Approval Granted:</strong> Your reservation has been approved by Management. Official billing voucher printing &amp; PDF downloads are active.';
      } else {
        noticeEl.style.background = 'var(--warning-bg)';
        noticeEl.style.borderColor = 'var(--warning)';
        noticeEl.style.color = 'var(--warning)';
        noticeEl.innerHTML = '⏳ <strong>Pending Admin Desk Approval:</strong> Your reservation request #' + b.id + ' has been logged. Admin Console will review and grant approval shortly.';
      }
    }

    if (details) {
      details.innerHTML =
        '<div class="ticket">' +
          '<div class="ticket__head">' +
            '<strong>Reservation Ref: ' + b.id + '</strong>' +
            '<span class="status-badge status-badge--' + (isApproved ? 'confirmed' : 'pending-approval') + '">' + b.status + '</span>' +
          '</div>' +
          '<p><strong>Guest Name:</strong> ' + b.guestName + ' (' + b.phone + ')</p>' +
          '<p><strong>Room Category:</strong> ' + b.roomTitle + '</p>' +
          '<p><strong>Check-In:</strong> ' + b.checkin + ' &nbsp;|&nbsp; <strong>Check-Out:</strong> ' + b.checkout + '</p>' +
          '<p><strong>Payment Option:</strong> ' + b.paymentMethod + '</p>' +
          '<p style="font-size:1.15rem;color:var(--ink);margin-top:8px;"><strong>Total Payable:</strong> ' + b.total + '</p>' +
        '</div>';
    }

    if (btnPrint) {
      btnPrint.disabled = !isApproved;
      btnPrint.title = isApproved ? 'Print Official Voucher' : '🔒 Printing unlocks once Admin approves booking';
      btnPrint.dataset.bookingId = b.id;
    }

    if (btnPdf) {
      btnPdf.disabled = !isApproved;
      btnPdf.title = isApproved ? 'Download PDF Voucher' : '🔒 PDF download unlocks once Admin approves booking';
      btnPdf.dataset.bookingId = b.id;
    }

    document.getElementById('confirmation-modal').hidden = false;
  }

  async function openVoucherPreviewModal(b) {
    if (b.status !== 'Confirmed' && b.status !== 'Checked-In' && b.status !== 'Completed') {
      toast('🔒 Voucher is available ONLY after Admin Desk Approval!', 'error');
      return;
    }

    toast('Generating official billing voucher preview...', 'info');
    var sha256Hex = await generateBookingSHA256(b);
    var htmlContent = buildVoucherHTML(b, sha256Hex);

    state.currentVoucherBooking = b;

    var container = document.getElementById('voucher-preview-container');
    if (container) container.innerHTML = htmlContent;

    var area = document.getElementById('print-area');
    if (area) area.innerHTML = htmlContent;

    var modal = document.getElementById('voucher-preview-modal');
    if (modal) modal.hidden = false;
  }

  async function printBookingVoucher(b) {
    await openVoucherPreviewModal(b);
  }

  async function downloadBookingPDF(b) {
    await openVoucherPreviewModal(b);
  }

  function deleteBookingById(id, skipConfirm) {
    if (!id) return false;
    var target = state.bookings.find(function (b) { return String(b.id).trim() === String(id).trim(); });
    if (!target) return false;

    var isSecured = target.status === 'Confirmed' || target.status === 'Checked-In' || target.status === 'Completed';
    var promptMsg = isSecured
      ? '⚠️ ADMIN OVERRIDE DELETE:\nOrder #' + target.id + ' (' + target.guestName + ') is SECURED / BOOKED SUCCESSFULLY (Status: ' + target.status + ').\n\nDo you want to PERMANENTLY DELETE this secured booking order log and purchase receipt?'
      : 'Are you sure you want to PERMANENTLY DELETE reservation order log #' + target.id + ' (' + target.guestName + ')?';

    if (skipConfirm || confirm(promptMsg)) {
      state.bookings = state.bookings.filter(function (x) { return String(x.id).trim() !== String(id).trim(); });
      db.set(KEY.bookings, state.bookings);
      try {
        localStorage.removeItem('hde_bookings_v2');
        localStorage.removeItem('hde_bookings_v1');
        localStorage.removeItem('hde_bookings');
        localStorage.removeItem('hde_receipts');
      } catch (e) {}

      var catSelect = document.getElementById('admin-filter-category');
      if (catSelect) delete catSelect.dataset.lastOptions;

      renderAdminBookings();
      renderAdminEnlist();
      if (typeof renderMyBookings === 'function') renderMyBookings();
      if (typeof renderRooms === 'function') renderRooms();
      toast('Reservation log #' + target.id + ' deleted permanently by Admin!', 'success');
      return true;
    }
    return false;
  }

  function renderMyBookings() {
    var wrap = document.getElementById('my-bookings-list');
    if (!state.bookings.length) {
      wrap.innerHTML = '<p style="text-align:center;padding:20px;color:var(--ink-soft);">No reservations recorded yet.</p>';
      return;
    }

    wrap.innerHTML = state.bookings.slice().reverse().map(function (b) {
      var isApproved = b.status === 'Confirmed' || b.status === 'Checked-In' || b.status === 'Completed';
      var isNotAvail = b.status === 'Not Available';

      var badgeClass = isApproved ? 'confirmed' : isNotAvail ? 'not-available' : 'pending-approval';

      var statusNotice = '';
      if (isNotAvail) {
        statusNotice = '<div style="margin:10px 0;padding:8px 12px;background:var(--danger-bg);color:var(--danger);border-radius:4px;font-size:0.85rem;">⚠️ <strong>Room Not Available:</strong> Admin Desk determined room is unavailable for selected dates. Please try again with another room or dates.</div>';
      } else if (!isApproved) {
        statusNotice = '<div style="margin:10px 0;padding:8px 12px;background:var(--warning-bg);color:var(--warning);border-radius:4px;font-size:0.85rem;">⏳ <strong>Pending Admin Desk Approval:</strong> Awaiting Management verification. Print &amp; PDF download will activate once approved.</div>';
      }

      return '<div class="ticket">' +
        '<div class="ticket__head">' +
          '<strong>' + b.id + ' — ' + b.roomTitle + '</strong>' +
          '<span class="status-badge status-badge--' + badgeClass + '">' + b.status + '</span>' +
        '</div>' +
        '<p><strong>Guest:</strong> ' + b.guestName + ' | Phone: ' + b.phone + '</p>' +
        '<p><strong>Dates:</strong> ' + b.checkin + ' to ' + b.checkout + '</p>' +
        '<p><strong>Amount:</strong> ' + b.total + ' (' + b.paymentMethod + ')</p>' +
        statusNotice +
        '<div style="display:flex;gap:8px;margin-top:12px;flex-wrap:wrap;">' +
          (isNotAvail
            ? '<button type="button" class="btn btn--gold btn--sm js-try-again-booking">🔄 Try Booking Again</button>'
            : '<button type="button" class="btn btn--primary btn--sm" data-action="print-my-voucher" data-id="' + b.id + '" ' + (!isApproved ? 'disabled title="🔒 Awaiting Admin Approval"' : '') + '>🖨️ Print Voucher</button>' +
              '<button type="button" class="btn btn--gold btn--sm" data-action="download-my-pdf" data-id="' + b.id + '" ' + (!isApproved ? 'disabled title="🔒 Awaiting Admin Approval"' : '') + '>📄 Download PDF</button>'
          ) +
        '</div>' +
      '</div>';
    }).join('');
  }

  /* ADMIN CONSOLE FUNCTIONS */

  /* 1. ENLISTMENT POWER CONSOLE */
  function renderAdminEnlist() {
    // Room Directory Enlistment List
    var roomsWrap = document.getElementById('admin-enlist-rooms-list');
    if (roomsWrap) {
      roomsWrap.innerHTML = state.rooms.map(function (r) {
        var isAvail = r.status === 'Available';
        return '<div class="enlist-room-row">' +
          '<div style="display:flex;align-items:center;gap:12px;">' +
            '<img src="' + (r.img || 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=800&q=80') + '" alt="' + r.title + '" style="width:50px;height:40px;object-fit:cover;border-radius:4px;">' +
            '<div>' +
              '<strong>' + r.title + '</strong> — ' + formatINR(r.price) + ' / night' +
              '<div style="font-size:0.8rem;color:var(--ink-soft);">Current Enlistment: <span class="status-badge status-badge--' + (isAvail ? 'confirmed' : 'cancelled') + '">' + r.status + '</span></div>' +
            '</div>' +
          '</div>' +
          '<div style="display:flex;gap:8px;align-items:center;flex-wrap:wrap;">' +
            '<button type="button" class="btn btn--outline btn--sm js-enlist-toggle" data-id="' + r.id + '" data-status="Available">Enlist Available</button>' +
            '<button type="button" class="btn btn--outline btn--sm js-enlist-toggle" data-id="' + r.id + '" data-status="Sold Out">Enlist Sold Out</button>' +
          '</div>' +
        '</div>';
      }).join('');
    }

    // Active Guest Roster Enlistment List
    var rosterWrap = document.getElementById('admin-enlist-roster-list');
    if (rosterWrap) {
      if (!state.bookings.length) {
        rosterWrap.innerHTML = '<p style="padding:16px;color:var(--ink-faint);">No guest reservations recorded in directory.</p>';
      } else {
        rosterWrap.innerHTML = state.bookings.slice().reverse().map(function (b) {
          var isPending = b.status === 'Pending Approval';
          var isApproved = b.status === 'Confirmed' || b.status === 'Checked-In' || b.status === 'Completed';

          return '<div class="ticket">' +
            '<div class="ticket__head">' +
              '<strong>' + b.id + ' — ' + b.guestName + '</strong>' +
              '<span class="status-badge status-badge--' + (isApproved ? 'confirmed' : isPending ? 'pending-approval' : 'cancelled') + '">' + b.status + '</span>' +
            '</div>' +
            '<p><strong>Room Category:</strong> ' + b.roomTitle + ' | Dates: ' + b.checkin + ' to ' + b.checkout + '</p>' +
            '<p><strong>Contact Info:</strong> Phone: ' + b.phone + (b.email && b.email !== 'N/A' ? ' | Email: ' + b.email : '') + '</p>' +
            '<p><strong>Total Amount:</strong> ' + b.total + ' (' + b.paymentMethod + ')</p>' +
            '<div style="display:flex;gap:8px;margin-top:10px;flex-wrap:wrap;">' +
              (isPending
                ? '<button type="button" class="btn btn--gold btn--sm js-admin-approve" data-id="' + b.id + '">✅ Accept Approval</button>' +
                  '<button type="button" class="btn btn--danger btn--sm js-admin-reject" data-id="' + b.id + '">❌ Not Available</button>'
                : '<button type="button" class="btn btn--outline btn--sm js-roster-status" data-id="' + b.id + '" data-status="Checked-In">Mark Checked-In</button>' +
                  '<button type="button" class="btn btn--outline btn--sm js-roster-status" data-id="' + b.id + '" data-status="Completed">Mark Completed</button>' +
                  '<button type="button" class="btn btn--outline btn--sm js-roster-status" data-id="' + b.id + '" data-status="Cancelled">Cancel</button>' +
                  '<button type="button" class="btn btn--primary btn--sm js-roster-print" data-id="' + b.id + '" ' + (!isApproved ? 'disabled' : '') + '>Print Receipt</button>' +
                  '<button type="button" class="btn btn--gold btn--sm js-roster-pdf" data-id="' + b.id + '" ' + (!isApproved ? 'disabled' : '') + '>Download PDF</button>'
              ) +
              '<button type="button" class="btn btn--danger btn--sm js-roster-delete-booking" data-id="' + b.id + '" title="Permanently delete this order log">' +
                (isApproved ? '🛡️ Delete (Even Secured / Booked)' : '🗑️ Delete Order Log') +
              '</button>' +
            '</div>' +
          '</div>';
        }).join('');
      }
    }
  }

  /* Category Selection Order Dropdown Populator */
  function updateAdminCategoryFilterDropdown() {
    var catSelect = document.getElementById('admin-filter-category');
    if (!catSelect) return;

    var currentSelected = catSelect.value || 'all';

    var categoriesSet = [];
    state.rooms.forEach(function (r) {
      if (r.title) {
        var t = r.title.trim();
        if (!categoriesSet.includes(t)) categoriesSet.push(t);
      }
    });
    state.bookings.forEach(function (b) {
      if (b.roomTitle) {
        var t = b.roomTitle.trim();
        if (!categoriesSet.includes(t)) categoriesSet.push(t);
      }
    });

    var optionsHTML = '<option value="all">All Room Categories (' + state.bookings.length + ' total logs)</option>';
    categoriesSet.forEach(function (cat) {
      var count = state.bookings.filter(function (b) { return b.roomTitle && b.roomTitle.trim() === cat; }).length;
      optionsHTML += '<option value="' + cat + '">' + cat + ' (' + count + ' logs)</option>';
    });

    if (catSelect.dataset.lastOptions !== optionsHTML) {
      catSelect.innerHTML = optionsHTML;
      catSelect.dataset.lastOptions = optionsHTML;
      if (categoriesSet.includes(currentSelected) || currentSelected === 'all') {
        catSelect.value = currentSelected;
      } else {
        catSelect.value = 'all';
      }
    }
  }

  /* Admin Bookings Log */
  function renderAdminBookings() {
    var wrap = document.getElementById('admin-bookings-list');
    if (!wrap) return;

    updateAdminCategoryFilterDropdown();

    var statusFilter = document.getElementById('admin-filter-status') ? document.getElementById('admin-filter-status').value : 'all';
    var catFilter = document.getElementById('admin-filter-category') ? document.getElementById('admin-filter-category').value : 'all';

    var filtered = state.bookings.filter(function (b) {
      var matchStatus = statusFilter === 'all' || b.status === statusFilter;
      var matchCat = catFilter === 'all' || (b.roomTitle && b.roomTitle.trim() === catFilter.trim());
      return matchStatus && matchCat;
    });

    if (!filtered.length) {
      wrap.innerHTML = '<p style="padding:16px;color:var(--ink-faint);">No order logs match the selected category &amp; status filter.</p>';
      return;
    }

    wrap.innerHTML = filtered.slice().reverse().map(function (b) {
      var isPending = b.status === 'Pending Approval';
      var isApproved = b.status === 'Confirmed' || b.status === 'Checked-In' || b.status === 'Completed';

      return '<div class="ticket">' +
        '<div class="ticket__head">' +
          '<strong>' + b.id + ' — ' + b.guestName + '</strong>' +
          '<span class="status-badge status-badge--' + (isApproved ? 'confirmed' : isPending ? 'pending-approval' : 'cancelled') + '">' + b.status + '</span>' +
        '</div>' +
        '<p><strong>Category Order:</strong> <span style="color:var(--gold-dark);font-weight:600;">' + b.roomTitle + '</span> | <strong>Dates:</strong> ' + b.checkin + ' to ' + b.checkout + '</p>' +
        '<p><strong>Contact Info:</strong> Phone: ' + b.phone + (b.email && b.email !== 'N/A' ? ' | Email: ' + b.email : '') + '</p>' +
        '<p><strong>Payment &amp; Total:</strong> ' + b.total + ' (' + b.paymentMethod + ')' + (b.guests ? ' | <strong>Guests:</strong> ' + b.guests : '') + '</p>' +
        '<div class="button-row" style="margin-top:12px;display:flex;gap:8px;flex-wrap:wrap;">' +
          (isPending
            ? '<button type="button" class="btn btn--gold btn--sm js-admin-approve" data-id="' + b.id + '">✅ Accept Approval</button>' +
              '<button type="button" class="btn btn--danger btn--sm js-admin-reject" data-id="' + b.id + '">❌ Not Available</button>'
            : '<button type="button" class="btn btn--outline btn--sm" data-action="status-booking" data-id="' + b.id + '" data-status="Checked-In">Mark Checked-In</button>' +
              '<button type="button" class="btn btn--outline btn--sm" data-action="status-booking" data-id="' + b.id + '" data-status="Completed">Mark Completed</button>' +
              '<button type="button" class="btn btn--outline btn--sm" data-action="status-booking" data-id="' + b.id + '" data-status="Cancelled">Cancel Booking</button>' +
              '<button type="button" class="btn btn--primary btn--sm" data-action="admin-print-voucher" data-id="' + b.id + '" ' + (!isApproved ? 'disabled' : '') + '>Print Receipt</button>' +
              '<button type="button" class="btn btn--gold btn--sm" data-action="admin-pdf-voucher" data-id="' + b.id + '" ' + (!isApproved ? 'disabled' : '') + '>Download PDF</button>'
          ) +
          '<button type="button" class="btn btn--danger btn--sm js-admin-delete-booking" data-id="' + b.id + '" title="Permanently delete this order log">' +
            (isApproved ? '🛡️ Delete (Even Secured / Booked)' : '🗑️ Delete Order Log') +
          '</button>' +
        '</div>' +
      '</div>';
    }).join('');
  }
  function handleDeviceFileUpload(files) {
    if (!files || !files.length) return;

    var loadedCount = 0;
    Array.from(files).forEach(function (file) {
      if (!file.type.startsWith('image/')) {
        toast('Selected file is not an image', 'error');
        return;
      }

      var reader = new FileReader();
      reader.onload = function (e) {
        var dataUrl = e.target.result;
        if (!state.deviceImages.includes(dataUrl)) {
          state.deviceImages.push(dataUrl);
          db.set(KEY.deviceImgs, state.deviceImages);
        }
        state.selectedDeviceImg = dataUrl;

        // Auto populate custom image URL field
        var urlInput = document.getElementById('admin-room-img');
        if (urlInput) urlInput.value = dataUrl;

        loadedCount++;
        if (loadedCount === files.length) {
          renderDeviceImagePreviews();
          toast(files.length + ' image file(s) loaded from device!', 'success');
        }
      };
      reader.readAsDataURL(file);
    });
  }

  function renderDeviceImagePreviews() {
    var wrap = document.getElementById('device-image-preview-wrap');
    var container = document.getElementById('device-image-preview-container');
    var batchCheckboxes = document.getElementById('room-batch-select-checkboxes');

    if (!wrap || !container) return;

    if (!state.deviceImages.length) {
      wrap.hidden = true;
      return;
    }

    wrap.hidden = false;
    container.innerHTML = state.deviceImages.map(function (imgUrl, idx) {
      var isSel = imgUrl === state.selectedDeviceImg;
      return '<div class="device-preview-card ' + (isSel ? 'is-selected' : '') + '" data-img-idx="' + idx + '">' +
        '<img src="' + imgUrl + '" alt="Device photo ' + (idx + 1) + '">' +
        '<span class="device-preview-card__badge">Photo #' + (idx + 1) + '</span>' +
      '</div>';
    }).join('');

    // Populate Batch Checkboxes
    if (batchCheckboxes) {
      batchCheckboxes.innerHTML = state.rooms.map(function (r) {
        return '<label style="display:flex;align-items:center;gap:6px;font-size:0.85rem;background:var(--bg-soft);padding:4px 8px;border-radius:4px;border:1px solid var(--line);cursor:pointer;">' +
          '<input type="checkbox" class="js-batch-room-cb" value="' + r.id + '"> ' + r.title +
        '</label>';
      }).join('');
    }
  }

  /* 3. SPECIAL ACCESS CONTROL & CONTENT CUSTOMIZER */
  function populateSiteCustomizerForm() {
    var annEnable = document.getElementById('admin-announcement-enable');
    var annText = document.getElementById('admin-announcement-text');
    var hName = document.getElementById('admin-hotel-name');
    var hTag = document.getElementById('admin-hotel-tagline');
    var hPhone = document.getElementById('admin-hotel-phone');
    var hWa = document.getElementById('admin-hotel-whatsapp');
    var hEmail = document.getElementById('admin-hotel-email');
    var hAddr = document.getElementById('admin-hotel-address');
    var hPass = document.getElementById('admin-hotel-pass');

    var rTitle = document.getElementById('admin-text-rooms-title');
    var rBadge = document.getElementById('admin-text-rooms-badge');
    var rDesc = document.getElementById('admin-text-rooms-desc');
    var fTitle = document.getElementById('admin-text-food-title');
    var oTitle = document.getElementById('admin-text-offers-title');

    var gSurcharge = document.getElementById('admin-group-extra-surcharge');
    var gNote = document.getElementById('admin-group-support-note');
    var gTerms = document.getElementById('admin-group-legal-terms');
    var genTerms = document.getElementById('admin-general-terms');

    var toggleHeroSearch = document.getElementById('admin-toggle-sec-hero-search');
    var toggleFood = document.getElementById('admin-toggle-sec-food');
    var toggleOffers = document.getElementById('admin-toggle-sec-offers');
    var toggleReviews = document.getElementById('admin-toggle-sec-reviews');
    var themePalette = document.getElementById('admin-theme-palette');

    if (annEnable) annEnable.value = state.settings.announcementEnable ? 'true' : 'false';
    if (annText) annText.value = state.settings.announcementText || '';
    if (hName) hName.value = state.settings.hotelName || '';
    if (hTag) hTag.value = state.settings.hotelTagline || '';
    if (hPhone) hPhone.value = state.settings.hotelPhone || '';
    if (hWa) hWa.value = state.settings.hotelWhatsapp || '9102172345678';
    if (hEmail) hEmail.value = state.settings.hotelEmail || '';
    if (hAddr) hAddr.value = state.settings.hotelAddress || '';
    if (hPass) hPass.value = '';

    if (rTitle) rTitle.value = state.settings.textRoomsTitle || '';
    if (rBadge) rBadge.value = state.settings.textRoomsBadge || '';
    if (rDesc) rDesc.value = state.settings.textRoomsDesc || '';
    if (fTitle) fTitle.value = state.settings.textFoodTitle || '';
    if (oTitle) oTitle.value = state.settings.textOffersTitle || '';

    if (gSurcharge) gSurcharge.value = state.settings.groupExtraSurcharge || 500;
    if (gNote) gNote.value = state.settings.groupSupportNote || '';
    if (gTerms) gTerms.value = state.settings.groupLegalTerms || '';
    if (genTerms) genTerms.value = state.settings.generalTerms || '';

    if (toggleHeroSearch) toggleHeroSearch.checked = state.settings.secHeroSearch !== false;
    if (toggleFood) toggleFood.checked = state.settings.secFood !== false;
    if (toggleOffers) toggleOffers.checked = state.settings.secOffers !== false;
    if (toggleReviews) toggleReviews.checked = state.settings.secReviews !== false;
    if (themePalette) themePalette.value = state.settings.themePalette || 'gold';
  }

  function handleSaveSiteCustomizer(e) {
    e.preventDefault();

    state.settings.announcementEnable = document.getElementById('admin-announcement-enable').value === 'true';
    state.settings.announcementText = document.getElementById('admin-announcement-text').value.trim();

    state.settings.hotelName = document.getElementById('admin-hotel-name').value.trim();
    state.settings.hotelTagline = document.getElementById('admin-hotel-tagline').value.trim();
    state.settings.hotelPhone = document.getElementById('admin-hotel-phone').value.trim();
    var waInput = document.getElementById('admin-hotel-whatsapp');
    if (waInput) state.settings.hotelWhatsapp = waInput.value.trim();
    state.settings.hotelEmail = document.getElementById('admin-hotel-email').value.trim();
    state.settings.hotelAddress = document.getElementById('admin-hotel-address').value.trim();

    var passVal = document.getElementById('admin-hotel-pass').value.trim();
    if (passVal) state.settings.adminPass = passVal;

    state.settings.textRoomsTitle = document.getElementById('admin-text-rooms-title').value.trim();
    state.settings.textRoomsBadge = document.getElementById('admin-text-rooms-badge').value.trim();
    state.settings.textRoomsDesc = document.getElementById('admin-text-rooms-desc').value.trim();
    state.settings.textFoodTitle = document.getElementById('admin-text-food-title').value.trim();
    state.settings.textOffersTitle = document.getElementById('admin-text-offers-title').value.trim();

    var gSurInput = document.getElementById('admin-group-extra-surcharge');
    if (gSurInput) state.settings.groupExtraSurcharge = parseInt(gSurInput.value, 10) || 500;

    var gNoteInput = document.getElementById('admin-group-support-note');
    if (gNoteInput) state.settings.groupSupportNote = gNoteInput.value.trim();

    var gTermsInput = document.getElementById('admin-group-legal-terms');
    if (gTermsInput) state.settings.groupLegalTerms = gTermsInput.value.trim();

    var genTermsInput = document.getElementById('admin-general-terms');
    if (genTermsInput) state.settings.generalTerms = genTermsInput.value.trim();

    state.settings.secHeroSearch = document.getElementById('admin-toggle-sec-hero-search').checked;
    state.settings.secFood = document.getElementById('admin-toggle-sec-food').checked;
    state.settings.secOffers = document.getElementById('admin-toggle-sec-offers').checked;
    state.settings.secReviews = document.getElementById('admin-toggle-sec-reviews').checked;
    state.settings.themePalette = document.getElementById('admin-theme-palette').value;

    db.set(KEY.settings, state.settings);
    syncSettingsUI();
    renderRooms();
    renderFoodMenu();
    renderOffers();
    toast('Special Access Customizations Saved!', 'success');
  }

  /* Admin Rooms & Rates Manager */
  function renderAdminRooms() {
    var wrap = document.getElementById('admin-rooms-list');
    if (!wrap) return;

    wrap.innerHTML = state.rooms.map(function (r) {
      return '<div style="display:flex;justify-content:space-between;align-items:center;padding:12px 16px;background:#fff;border:1px solid var(--line);margin-bottom:8px;border-radius:8px;gap:12px;flex-wrap:wrap;">' +
        '<div style="display:flex;align-items:center;gap:12px;">' +
          '<img src="' + (r.img || 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=800&q=80') + '" alt="' + r.title + '" style="width:60px;height:45px;object-fit:cover;border-radius:4px;border:1px solid var(--line);">' +
          '<div>' +
            '<strong>' + r.title + '</strong> — ' + formatINR(r.price) + ' / night (' + r.status + ')' +
            '<div style="font-size:0.8rem;color:var(--ink-soft);">Max Capacity: ' + r.capacity + ' Guests</div>' +
          '</div>' +
        '</div>' +
        '<div style="display:flex;gap:8px;">' +
          '<button type="button" class="btn btn--outline btn--sm" data-action="edit-room" data-id="' + r.id + '">Edit</button>' +
          '<button type="button" class="btn btn--danger btn--sm" data-action="delete-room" data-id="' + r.id + '">Delete</button>' +
        '</div>' +
      '</div>';
    }).join('');
  }

  /* Admin Food Menu List */
  function renderAdminFood() {
    var wrap = document.getElementById('admin-food-list');
    if (!wrap) return;

    wrap.innerHTML = state.food.map(function (f) {
      return '<div style="display:flex;justify-content:space-between;align-items:center;padding:12px 16px;background:#fff;border:1px solid var(--line);margin-bottom:8px;border-radius:8px;">' +
        '<div>' +
          '<strong>' + f.title + '</strong> (' + f.category + ') — ' + formatINR(f.price) +
        '</div>' +
        '<div style="display:flex;gap:8px;">' +
          '<button type="button" class="btn btn--danger btn--sm" data-action="delete-food" data-id="' + f.id + '">Delete</button>' +
        '</div>' +
      '</div>';
    }).join('');
  }

  /* Admin Promos List */
  function renderAdminPromos() {
    var wrap = document.getElementById('admin-promos-list');
    if (!wrap) return;

    wrap.innerHTML = state.promos.map(function (p) {
      return '<div style="display:flex;justify-content:space-between;align-items:center;padding:12px 16px;background:#fff;border:1px solid var(--line);margin-bottom:8px;border-radius:8px;">' +
        '<div>' +
          '<strong>' + p.code + '</strong> — ' + p.discount + '% OFF (' + p.title + ')' +
        '</div>' +
        '<button type="button" class="btn btn--danger btn--sm" data-action="delete-promo" data-code="' + p.code + '">Delete</button>' +
      '</div>';
    }).join('');
  }

  /* Excel Export */
  function exportBookingsToExcel() {
    if (typeof XLSX === 'undefined') {
      toast('XLSX Export Library unavailable', 'error');
      return;
    }

    var exportData = state.bookings.map(function (b) {
      return {
        'Booking Reference ID': b.id,
        'Guest Name': b.guestName,
        'Mobile Contact': b.phone,
        'Email Address': b.email,
        'Room Category': b.roomTitle,
        'Check-In Date': b.checkin,
        'Check-Out Date': b.checkout,
        'Payment Option': b.paymentMethod,
        'Total Amount Paid': b.total,
        'Reservation Status': b.status,
        'Booking Date/Time': b.createdAt
      };
    });

    if (!exportData.length) {
      exportData = [{
        'Booking Reference ID': 'N/A',
        'Guest Name': 'No guest reservations recorded',
        'Mobile Contact': '',
        'Email Address': '',
        'Room Category': '',
        'Check-In Date': '',
        'Check-Out Date': '',
        'Payment Option': '',
        'Total Amount Paid': '',
        'Reservation Status': '',
        'Booking Date/Time': ''
      }];
    }

    var ws = XLSX.utils.json_to_sheet(exportData);
    var wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Hotel_Reservations');
    XLSX.writeFile(wb, 'Hotel_Diamond_Executive_Bookings.xlsx');
    toast('Guest reservations exported to Excel successfully!', 'success');
  }

  /* System Backup & Restore */
  function downloadBackupJSON() {
    var dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(state, null, 2));
    var dl = document.createElement('a');
    dl.setAttribute("href", dataStr);
    dl.setAttribute("download", "Hotel_Diamond_Executive_Backup.json");
    dl.click();
    toast('System backup downloaded', 'success');
  }

  function restoreBackupJSON(e) {
    var file = e.target.files[0];
    if (!file) return;

    var reader = new FileReader();
    reader.onload = function (evt) {
      try {
        var parsed = JSON.parse(evt.target.result);
        if (parsed.rooms && parsed.settings) {
          state = parsed;
          db.set(KEY.rooms, state.rooms);
          db.set(KEY.food, state.food);
          db.set(KEY.bookings, state.bookings);
          db.set(KEY.reviews, state.reviews);
          db.set(KEY.settings, state.settings);
          db.set(KEY.promos, state.promos);
          if (parsed.deviceImages) db.set(KEY.deviceImgs, parsed.deviceImages);

          syncSettingsUI();
          renderRooms();
          renderFoodMenu();
          renderOffers();
          renderReviews();
          toast('System restored successfully!', 'success');
        } else {
          toast('Invalid backup file format', 'error');
        }
      } catch (err) {
        toast('Failed to restore backup', 'error');
      }
    };
    reader.readAsText(file);
  }

  /* Setup Global Event Listeners */
  function initEvents() {
    // Mobile Navigation Hamburger Toggle
    var btnMobileMenu = document.getElementById('btn-mobile-menu');
    var navHeader = document.getElementById('app-header-nav');
    if (btnMobileMenu && navHeader) {
      btnMobileMenu.addEventListener('click', function () {
        navHeader.classList.toggle('is-open');
      });
      document.querySelectorAll('.js-nav-item').forEach(function (link) {
        link.addEventListener('click', function () {
          navHeader.classList.remove('is-open');
        });
      });
    }

    // Close Announcement Bar
    var btnCloseAnn = document.getElementById('btn-close-announcement');
    if (btnCloseAnn) {
      btnCloseAnn.addEventListener('click', function () {
        document.getElementById('announcement-bar').hidden = true;
      });
    }

    // Room Booking Click Handlers
    document.getElementById('rooms-grid').addEventListener('click', function (e) {
      var btn = e.target.closest('button[data-action="book-room"]');
      if (btn) openBookingModal(btn.dataset.roomId);
    });

    document.getElementById('btn-close-booking').addEventListener('click', function () {
      document.getElementById('booking-modal').hidden = true;
    });
    document.getElementById('booking-modal-backdrop').addEventListener('click', function () {
      document.getElementById('booking-modal').hidden = true;
    });

    document.getElementById('book-checkin').addEventListener('change', updateBookingSummary);
    document.getElementById('book-checkout').addEventListener('change', updateBookingSummary);
    var bookGuestsElem = document.getElementById('book-guests');
    if (bookGuestsElem) {
      bookGuestsElem.addEventListener('change', updateBookingSummary);
    }
    document.getElementById('btn-apply-promo').addEventListener('click', handlePromoApply);
    document.getElementById('form-complete-booking').addEventListener('submit', processBookingSubmit);

    // General Terms & Conditions Modal Handlers
    var btnAcceptTerms = document.getElementById('btn-accept-general-terms');
    if (btnAcceptTerms) {
      btnAcceptTerms.addEventListener('click', function () {
        db.set('hde_general_terms_accepted_v1', { accepted: true, time: new Date().toISOString() });
        document.getElementById('general-terms-modal').hidden = true;
        toast('General Terms & Conditions Accepted!', 'success');
      });
    }

    var btnMinTerms = document.getElementById('btn-minimize-terms');
    if (btnMinTerms) {
      btnMinTerms.addEventListener('click', function () {
        document.getElementById('general-terms-modal').hidden = true;
        toast('Terms minimized. You can review anytime from footer.', 'info');
      });
    }

    var btnCloseTerms = document.getElementById('btn-close-general-terms');
    var termsBackdrop = document.getElementById('general-terms-backdrop');
    if (btnCloseTerms) {
      btnCloseTerms.addEventListener('click', function () {
        document.getElementById('general-terms-modal').hidden = true;
      });
    }
    if (termsBackdrop) {
      termsBackdrop.addEventListener('click', function () {
        document.getElementById('general-terms-modal').hidden = true;
      });
    }

    var btnFooterTerms = document.getElementById('btn-footer-terms');
    if (btnFooterTerms) {
      btnFooterTerms.addEventListener('click', function () {
        var termsBody = document.getElementById('general-terms-body');
        if (termsBody) termsBody.textContent = state.settings.generalTerms || 'General Hospitality Terms & Conditions apply.';
        document.getElementById('general-terms-modal').hidden = false;
      });
    }

    var btnResetConsent = document.getElementById('btn-reset-device-consent');
    if (btnResetConsent) {
      btnResetConsent.addEventListener('click', function () {
        localStorage.removeItem('hde_general_terms_accepted_v1');
        toast('Device terms approvals reset! Visitors will see terms prompt on next visit.', 'info');
      });
    }

    // Purchase Review Modal Handlers
    var btnConfirmBooking = document.getElementById('btn-confirm-submit-booking');
    if (btnConfirmBooking) {
      btnConfirmBooking.addEventListener('click', function () {
        if (!pendingBookingData) return;
        var created = pendingBookingData;
        state.bookings.push(created);
        db.set(KEY.bookings, state.bookings);
        pendingBookingData = null;
        document.getElementById('purchase-review-modal').hidden = true;
        showConfirmationModal(created);
        renderAdminBookings();
        renderAdminEnlist();
        if (typeof renderMyBookings === 'function') renderMyBookings();
        toast('Reservation request #' + created.id + ' submitted! Pending Admin Approval.', 'success');
      });
    }

    var btnBackEdit = document.getElementById('btn-back-edit-booking');
    if (btnBackEdit) {
      btnBackEdit.addEventListener('click', function () {
        document.getElementById('purchase-review-modal').hidden = true;
        document.getElementById('booking-modal').hidden = false;
      });
    }

    var btnCloseReview = document.getElementById('btn-close-purchase-review');
    var reviewBackdrop = document.getElementById('purchase-review-backdrop');
    if (btnCloseReview) {
      btnCloseReview.addEventListener('click', function () {
        document.getElementById('purchase-review-modal').hidden = true;
      });
    }
    if (reviewBackdrop) {
      reviewBackdrop.addEventListener('click', function () {
        document.getElementById('purchase-review-modal').hidden = true;
      });
    }

    document.getElementById('btn-close-confirmation').addEventListener('click', function () {
      document.getElementById('confirmation-modal').hidden = true;
    });
    document.getElementById('btn-print-voucher').addEventListener('click', function () {
      var id = this.dataset.bookingId;
      var b = state.bookings.find(function (item) { return item.id === id; }) || state.bookings[state.bookings.length - 1];
      if (b) printBookingVoucher(b);
    });

    var btnPdfVoucher = document.getElementById('btn-download-pdf-voucher');
    if (btnPdfVoucher) {
      btnPdfVoucher.addEventListener('click', function () {
        var id = this.dataset.bookingId;
        var b = state.bookings.find(function (item) { return item.id === id; }) || state.bookings[state.bookings.length - 1];
        if (b) downloadBookingPDF(b);
      });
    }

    // Room Search Availability Handler
    document.getElementById('form-search-rooms').addEventListener('submit', function (e) {
      e.preventDefault();
      var checkinVal = document.getElementById('search-checkin').value;
      var checkoutVal = document.getElementById('search-checkout').value;
      var guestsVal = document.getElementById('search-guests').value;
      var budgetVal = document.getElementById('search-budget').value;

      state.searchFilter = {
        active: true,
        checkin: checkinVal,
        checkout: checkoutVal,
        guests: Number(guestsVal || 1),
        maxPrice: budgetVal || 'all'
      };

      renderRooms();

      var sec = document.getElementById('section-rooms');
      if (sec) sec.scrollIntoView({ behavior: 'smooth' });

      toast('Available room categories filtered for ' + guestsVal + '+ guest(s)', 'success');
    });

    // Reset Search Filter Handlers
    function resetRoomSearch() {
      state.searchFilter = {
        active: false,
        checkin: '',
        checkout: '',
        guests: 2,
        maxPrice: 'all'
      };
      document.getElementById('search-checkin').value = '';
      document.getElementById('search-checkout').value = '';
      document.getElementById('search-guests').value = '2';
      document.getElementById('search-budget').value = 'all';
      renderRooms();
      toast('Search filter cleared. Showing all room categories.', 'success');
    }

    var btnReset = document.getElementById('btn-reset-search');
    if (btnReset) btnReset.addEventListener('click', resetRoomSearch);

    document.addEventListener('click', function (e) {
      if (e.target && (e.target.id === 'btn-clear-search-banner' || e.target.id === 'btn-reset-search-empty')) {
        resetRoomSearch();
      }
    });

    // Copy Promo Code Handler
    document.getElementById('offers-grid').addEventListener('click', function (e) {
      var btn = e.target.closest('button[data-action="copy-code"]');
      if (btn) {
        navigator.clipboard.writeText(btn.dataset.code);
        toast('Code ' + btn.dataset.code + ' copied to clipboard!', 'success');
      }
    });

    // Order Food Handler
    document.getElementById('food-grid').addEventListener('click', function (e) {
      var btn = e.target.closest('button[data-action="order-food"]');
      if (btn) {
        toast('Item "' + btn.dataset.title + '" added to room order! Complete booking or present at front desk.', 'success');
      }
    });

    // Food Category Filter Tabs
    var foodTabs = document.querySelectorAll('.food-tab');
    foodTabs.forEach(function (tab) {
      tab.addEventListener('click', function () {
        foodTabs.forEach(function (t) { t.classList.remove('is-active'); });
        tab.classList.add('is-active');
        state.activeFoodCategory = tab.dataset.category;
        renderFoodMenu();
      });
    });

    // Review Form Submission
    document.getElementById('form-add-review').addEventListener('submit', function (e) {
      e.preventDefault();
      var name = document.getElementById('review-name').value.trim();
      var rating = Number(document.getElementById('review-rating').value);
      var comment = document.getElementById('review-comment').value.trim();

      state.reviews.unshift({
        name: name,
        rating: rating,
        comment: comment,
        date: new Date().toISOString().split('T')[0]
      });

      db.set(KEY.reviews, state.reviews);
      renderReviews();
      document.getElementById('form-add-review').reset();
      toast('Thank you for sharing your stay experience!', 'success');
    });

    // My Bookings Handlers
    document.getElementById('btn-my-bookings').addEventListener('click', function () {
      renderMyBookings();
      document.getElementById('user-bookings-modal').hidden = false;
    });
    document.getElementById('btn-close-my-bookings').addEventListener('click', function () {
      document.getElementById('user-bookings-modal').hidden = true;
    });
    document.getElementById('user-bookings-backdrop').addEventListener('click', function () {
      document.getElementById('user-bookings-modal').hidden = true;
    });
    document.getElementById('my-bookings-list').addEventListener('click', function (e) {
      var printBtn = e.target.closest('button[data-action="print-my-voucher"]');
      if (printBtn) {
        var bPrint = state.bookings.find(function (item) { return item.id === printBtn.dataset.id; });
        if (bPrint) printBookingVoucher(bPrint);
      }

      var pdfBtn = e.target.closest('button[data-action="download-my-pdf"]');
      if (pdfBtn) {
        var bPdf = state.bookings.find(function (item) { return item.id === pdfBtn.dataset.id; });
        if (bPdf) downloadBookingPDF(bPdf);
      }

      var tryAgainBtn = e.target.closest('.js-try-again-booking');
      if (tryAgainBtn) {
        document.getElementById('user-bookings-modal').hidden = true;
        var sec = document.getElementById('section-rooms');
        if (sec) sec.scrollIntoView({ behavior: 'smooth' });
        toast('Select an available room category to re-book.', 'info');
      }
    });

    // Admin Console Login & Navigation
    document.getElementById('btn-admin-access').addEventListener('click', function () {
      document.getElementById('admin-login-modal').hidden = false;
    });
    document.getElementById('btn-close-admin-login').addEventListener('click', function () {
      document.getElementById('admin-login-modal').hidden = true;
    });
    document.getElementById('admin-login-backdrop').addEventListener('click', function () {
      document.getElementById('admin-login-modal').hidden = true;
    });

    document.getElementById('form-admin-login').addEventListener('submit', function (e) {
      e.preventDefault();
      var pass = document.getElementById('admin-password').value;
      if (pass === state.settings.adminPass) {
        document.getElementById('admin-login-modal').hidden = true;
        document.getElementById('view-admin').hidden = false;
        renderAdminEnlist();
        renderAdminRooms();
        renderAdminBookings();
        renderAdminFood();
        renderAdminPromos();
        renderDeviceImagePreviews();
        populateSiteCustomizerForm();
        toast('Logged into Admin Portal', 'success');
      } else {
        toast('Incorrect Password', 'error');
      }
    });

    document.getElementById('btn-admin-logout').addEventListener('click', function () {
      document.getElementById('view-admin').hidden = true;
    });

    // Admin Navigation Tabs
    document.querySelectorAll('.admin-nav__item').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var tab = btn.dataset.adminTab;
        document.querySelectorAll('.admin-nav__item').forEach(function (b) { b.classList.remove('is-active'); });
        btn.classList.add('is-active');

        document.getElementById('admin-tab-enlist').hidden = tab !== 'enlist';
        document.getElementById('admin-tab-rooms').hidden = tab !== 'rooms';
        document.getElementById('admin-tab-access').hidden = tab !== 'access';
        document.getElementById('admin-tab-bookings').hidden = tab !== 'bookings';
        document.getElementById('admin-tab-food').hidden = tab !== 'food';
        document.getElementById('admin-tab-export').hidden = tab !== 'export';

        if (tab === 'enlist') renderAdminEnlist();
        if (tab === 'access') populateSiteCustomizerForm();
        if (tab === 'rooms') renderDeviceImagePreviews();
        if (tab === 'bookings') renderAdminBookings();
      });
    });

    /* DEVICE FILE PICKER EVENT HANDLERS */
    var btnTriggerUpload = document.getElementById('btn-trigger-file-picker');
    var fileInput = document.getElementById('admin-room-file-input');

    if (btnTriggerUpload && fileInput) {
      btnTriggerUpload.addEventListener('click', function () {
        fileInput.click();
      });

      fileInput.addEventListener('change', function (e) {
        handleDeviceFileUpload(e.target.files);
      });
    }

    // Click Device Image Preview Card
    var devicePreviewWrap = document.getElementById('device-image-preview-container');
    if (devicePreviewWrap) {
      devicePreviewWrap.addEventListener('click', function (e) {
        var card = e.target.closest('.device-preview-card');
        if (card) {
          var idx = Number(card.dataset.imgIdx);
          var imgUrl = state.deviceImages[idx];
          if (imgUrl) {
            state.selectedDeviceImg = imgUrl;
            var urlInput = document.getElementById('admin-room-img');
            if (urlInput) urlInput.value = imgUrl;
            renderDeviceImagePreviews();
            toast('Device Photo #' + (idx + 1) + ' selected for room', 'success');
          }
        }
      });
    }

    // Apply Device Image to Multiple Selected Room Categories
    var btnApplyBatch = document.getElementById('btn-apply-image-batch');
    if (btnApplyBatch) {
      btnApplyBatch.addEventListener('click', function () {
        var selImg = document.getElementById('admin-room-img').value || state.selectedDeviceImg;
        if (!selImg) {
          toast('Please select or upload a device photo first', 'error');
          return;
        }

        var checkedCbs = document.querySelectorAll('.js-batch-room-cb:checked');
        if (!checkedCbs.length) {
          toast('Select at least 1 room category checkbox to apply photo', 'error');
          return;
        }

        var updatedCount = 0;
        checkedCbs.forEach(function (cb) {
          var rId = cb.value;
          var room = state.rooms.find(function (r) { return r.id === rId; });
          if (room) {
            room.img = selImg;
            updatedCount++;
          }
        });

        db.set(KEY.rooms, state.rooms);
        renderRooms();
        renderAdminRooms();
        renderAdminEnlist();
        toast('Image applied to ' + updatedCount + ' room category(s)!', 'success');
      });
    }

    /* ENLISTMENT POWER HANDLERS */
    var btnEnlistAllAvail = document.getElementById('btn-enlist-all-available');
    if (btnEnlistAllAvail) {
      btnEnlistAllAvail.addEventListener('click', function () {
        state.rooms.forEach(function (r) { r.status = 'Available'; });
        db.set(KEY.rooms, state.rooms);
        renderRooms();
        renderAdminRooms();
        renderAdminEnlist();
        toast('All room categories enlisted as Available!', 'success');
      });
    }

    // Rate Increase/Decrease
    var btnRateInc = document.getElementById('btn-rate-increase');
    var btnRateDec = document.getElementById('btn-rate-decrease');
    if (btnRateInc && btnRateDec) {
      btnRateInc.addEventListener('click', function () {
        var pct = Number(document.getElementById('input-rate-adjust-pct').value || 10);
        state.rooms.forEach(function (r) {
          r.price = Math.round(r.price * (1 + pct / 100));
        });
        db.set(KEY.rooms, state.rooms);
        renderRooms();
        renderAdminRooms();
        renderAdminEnlist();
        toast('Room rates increased by ' + pct + '%', 'success');
      });

      btnRateDec.addEventListener('click', function () {
        var pct = Number(document.getElementById('input-rate-adjust-pct').value || 10);
        state.rooms.forEach(function (r) {
          r.price = Math.max(Math.round(r.price * (1 - pct / 100)), 500);
        });
        db.set(KEY.rooms, state.rooms);
        renderRooms();
        renderAdminRooms();
        renderAdminEnlist();
        toast('Room rates discounted by ' + pct + '%', 'success');
      });
    }

    // Click Enlist Room Toggle
    var enlistRoomsList = document.getElementById('admin-enlist-rooms-list');
    if (enlistRoomsList) {
      enlistRoomsList.addEventListener('click', function (e) {
        var btn = e.target.closest('.js-enlist-toggle');
        if (btn) {
          var id = btn.dataset.id;
          var newStatus = btn.dataset.status;
          var room = state.rooms.find(function (r) { return r.id === id; });
          if (room) {
            room.status = newStatus;
            db.set(KEY.rooms, state.rooms);
            renderRooms();
            renderAdminRooms();
            renderAdminEnlist();
            toast(room.title + ' enlisted as ' + newStatus, 'success');
          }
        }
      });
    }

    // Click Roster Status Button
    var rosterWrap = document.getElementById('admin-enlist-roster-list');
    if (rosterWrap) {
      rosterWrap.addEventListener('click', function (e) {
        var btn = e.target.closest('button');
        if (!btn) return;
        var id = btn.dataset.id;
        if (!id) return;

        if (btn.classList.contains('js-roster-delete-booking') || btn.classList.contains('js-admin-delete-booking')) {
          deleteBookingById(id);
          return;
        }

        var booking = state.bookings.find(function (b) { return String(b.id).trim() === String(id).trim(); });
        if (!booking) return;

        if (btn.classList.contains('js-admin-approve')) {
          booking.status = 'Confirmed';
          booking.approvedAt = new Date().toLocaleString();
          db.set(KEY.bookings, state.bookings);
          renderAdminEnlist();
          renderAdminBookings();
          toast('Booking #' + booking.id + ' Approved by Admin Desk!', 'success');
        } else if (btn.classList.contains('js-admin-reject')) {
          booking.status = 'Not Available';
          db.set(KEY.bookings, state.bookings);
          renderAdminEnlist();
          renderAdminBookings();
          toast('Booking #' + booking.id + ' marked as Not Available (Try Again prompt sent to user).', 'error');
        } else if (btn.classList.contains('js-roster-status')) {
          booking.status = btn.dataset.status;
          db.set(KEY.bookings, state.bookings);
          renderAdminEnlist();
          renderAdminBookings();
          toast('Booking status updated to ' + booking.status, 'success');
        } else if (btn.classList.contains('js-roster-print')) {
          printBookingVoucher(booking);
        } else if (btn.classList.contains('js-roster-pdf')) {
          downloadBookingPDF(booking);
        }
      });
    }

    /* SAVE SITE CONTENT CUSTOMIZER FORM */
    var formCustomizer = document.getElementById('form-site-customizer');
    if (formCustomizer) {
      formCustomizer.addEventListener('submit', handleSaveSiteCustomizer);
    }

    // Preset Image Chips
    document.querySelectorAll('.js-preset-img').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var imgInput = document.getElementById('admin-room-img');
        if (imgInput) {
          imgInput.value = btn.dataset.img;
          toast('Preset image selected!', 'success');
        }
      });
    });

    // Admin Room Category CRUD
    document.getElementById('form-manage-room').addEventListener('submit', function (e) {
      e.preventDefault();
      var id = document.getElementById('admin-room-id').value;
      var title = document.getElementById('admin-room-title').value.trim();
      var price = Number(document.getElementById('admin-room-price').value);
      var capacity = Number(document.getElementById('admin-room-capacity').value);
      var status = document.getElementById('admin-room-status').value;
      var desc = document.getElementById('admin-room-desc').value.trim();
      var customImg = document.getElementById('admin-room-img').value.trim();
      var defaultImg = 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=800&q=80';
      var finalImg = customImg || defaultImg;

      if (id) {
        var room = state.rooms.find(function (r) { return r.id === id; });
        if (room) {
          room.title = title;
          room.price = price;
          room.capacity = capacity;
          room.status = status;
          room.desc = desc;
          room.img = finalImg;
        }
        toast('Room category updated with custom image', 'success');
      } else {
        state.rooms.push({
          id: 'room_' + Date.now(),
          title: title,
          price: price,
          capacity: capacity,
          status: status,
          desc: desc,
          amenities: ['AC', 'Free Wi-Fi', 'King Bed'],
          img: finalImg
        });
        toast('New room category created with custom image', 'success');
      }

      db.set(KEY.rooms, state.rooms);
      document.getElementById('form-manage-room').reset();
      document.getElementById('admin-room-id').value = '';
      document.getElementById('admin-room-img').value = '';
      renderRooms();
      renderAdminRooms();
      renderAdminEnlist();
    });

    document.getElementById('admin-rooms-list').addEventListener('click', function (e) {
      var btn = e.target.closest('button[data-action]');
      if (!btn) return;
      var id = btn.dataset.id;
      if (btn.dataset.action === 'edit-room') {
        var room = state.rooms.find(function (r) { return r.id === id; });
        if (room) {
          document.getElementById('admin-room-id').value = room.id;
          document.getElementById('admin-room-title').value = room.title;
          document.getElementById('admin-room-price').value = room.price;
          document.getElementById('admin-room-capacity').value = room.capacity;
          document.getElementById('admin-room-status').value = room.status;
          document.getElementById('admin-room-desc').value = room.desc;
          document.getElementById('admin-room-img').value = room.img || '';
        }
      } else if (btn.dataset.action === 'delete-room') {
        if (confirm('Delete room category?')) {
          state.rooms = state.rooms.filter(function (r) { return r.id !== id; });
          db.set(KEY.rooms, state.rooms);
          renderRooms();
          renderAdminRooms();
          renderAdminEnlist();
          toast('Room category removed', 'success');
        }
      }
    });

    // Admin Food Menu CRUD
    document.getElementById('form-add-food').addEventListener('submit', function (e) {
      e.preventDefault();
      var title = document.getElementById('admin-food-title').value.trim();
      var price = Number(document.getElementById('admin-food-price').value);
      var category = document.getElementById('admin-food-category').value;
      var type = document.getElementById('admin-food-type').value;
      var desc = document.getElementById('admin-food-desc').value.trim();

      state.food.push({
        id: 'f_' + Date.now(),
        title: title,
        price: price,
        category: category,
        type: type,
        desc: desc
      });

      db.set(KEY.food, state.food);
      document.getElementById('form-add-food').reset();
      renderFoodMenu();
      renderAdminFood();
      toast('New menu dish added', 'success');
    });

    document.getElementById('admin-food-list').addEventListener('click', function (e) {
      var btn = e.target.closest('button[data-action="delete-food"]');
      if (btn) {
        state.food = state.food.filter(function (f) { return f.id !== btn.dataset.id; });
        db.set(KEY.food, state.food);
        renderFoodMenu();
        renderAdminFood();
        toast('Dish removed from menu', 'success');
      }
    });

    // Admin Promo CRUD
    document.getElementById('form-add-promo').addEventListener('submit', function (e) {
      e.preventDefault();
      var code = document.getElementById('admin-promo-code').value.trim().toUpperCase();
      var discount = Number(document.getElementById('admin-promo-discount').value);
      var title = document.getElementById('admin-promo-title').value.trim();

      state.promos.push({ code: code, discount: discount, title: title });
      db.set(KEY.promos, state.promos);
      document.getElementById('form-add-promo').reset();
      renderOffers();
      renderAdminPromos();
      toast('Promo code created', 'success');
    });

    document.getElementById('admin-promos-list').addEventListener('click', function (e) {
      var btn = e.target.closest('button[data-action="delete-promo"]');
      if (btn) {
        state.promos = state.promos.filter(function (p) { return p.code !== btn.dataset.code; });
        db.set(KEY.promos, state.promos);
        renderOffers();
        renderAdminPromos();
        toast('Promo code removed', 'success');
      }
    });

    // Admin Bookings Status & Category Filters
    var filterCatElem = document.getElementById('admin-filter-category');
    if (filterCatElem) filterCatElem.addEventListener('change', renderAdminBookings);
    var filterStatElem = document.getElementById('admin-filter-status');
    if (filterStatElem) filterStatElem.addEventListener('change', renderAdminBookings);

    document.getElementById('admin-bookings-list').addEventListener('click', function (e) {
      var btn = e.target.closest('button');
      if (!btn) return;
      var id = btn.dataset.id;
      if (!id) return;

      if (btn.classList.contains('js-admin-delete-booking') || btn.classList.contains('js-roster-delete-booking')) {
        deleteBookingById(id);
        return;
      }

      var booking = state.bookings.find(function (b) { return String(b.id).trim() === String(id).trim(); });
      if (!booking) return;

      if (btn.classList.contains('js-admin-approve')) {
        booking.status = 'Confirmed';
        booking.approvedAt = new Date().toLocaleString();
        db.set(KEY.bookings, state.bookings);
        renderAdminBookings();
        renderAdminEnlist();
        if (typeof renderMyBookings === 'function') renderMyBookings();
        toast('Booking #' + booking.id + ' Approved by Admin Desk!', 'success');
      } else if (btn.classList.contains('js-admin-reject')) {
        booking.status = 'Not Available';
        db.set(KEY.bookings, state.bookings);
        renderAdminBookings();
        renderAdminEnlist();
        if (typeof renderMyBookings === 'function') renderMyBookings();
        toast('Booking #' + booking.id + ' marked as Not Available.', 'error');
      } else if (btn.dataset.action === 'status-booking') {
        booking.status = btn.dataset.status;
        db.set(KEY.bookings, state.bookings);
        renderAdminBookings();
        renderAdminEnlist();
        if (typeof renderMyBookings === 'function') renderMyBookings();
        toast('Booking status updated to ' + booking.status, 'success');
      } else if (btn.dataset.action === 'admin-print-voucher') {
        printBookingVoucher(booking);
      } else if (btn.dataset.action === 'admin-pdf-voucher') {
        downloadBookingPDF(booking);
      }
    });

    // Batch Delete Pre-existing Orders by Category Selection Order
    var btnBatchDeleteLogs = document.getElementById('btn-batch-delete-category-logs');
    if (btnBatchDeleteLogs) {
      btnBatchDeleteLogs.addEventListener('click', function () {
        var catVal = document.getElementById('admin-filter-category') ? document.getElementById('admin-filter-category').value : 'all';
        var statVal = document.getElementById('admin-filter-status') ? document.getElementById('admin-filter-status').value : 'all';

        var matchingLogs = state.bookings.filter(function (b) {
          var matchCat = catVal === 'all' || (b.roomTitle && b.roomTitle.trim() === catVal.trim());
          var matchStat = statVal === 'all' || b.status === statVal;
          return matchCat && matchStat;
        });

        if (!matchingLogs.length) {
          toast('No order logs match the selected category & status filter.', 'info');
          return;
        }

        var catLabel = catVal === 'all' ? 'All Categories' : catVal;
        var statLabel = statVal === 'all' ? 'All Statuses' : statVal;

        var securedCount = matchingLogs.filter(function (b) {
          return b.status === 'Confirmed' || b.status === 'Checked-In' || b.status === 'Completed';
        }).length;

        var msg = '⚠️ CONFIRM ADMIN BATCH DELETE:\nAre you sure you want to delete ' + matchingLogs.length + ' order log(s) for Category: [' + catLabel + '] & Status: [' + statLabel + ']?\n';
        if (securedCount > 0) {
          msg += '\n🛡️ INCLUDES ' + securedCount + ' SECURED / BOOKED SUCCESSFULLY ORDER(S).\nThese will be forcefully deleted under Admin Console Power.';
        }
        msg += '\n\nThis operation is permanent and irreversible.';

        if (confirm(msg)) {
          state.bookings = state.bookings.filter(function (b) {
            var matchCat = catVal === 'all' || (b.roomTitle && b.roomTitle.trim() === catVal.trim());
            var matchStat = statVal === 'all' || b.status === statVal;
            return !(matchCat && matchStat);
          });

          db.set(KEY.bookings, state.bookings);
          try {
            localStorage.removeItem('hde_bookings_v2');
            localStorage.removeItem('hde_bookings_v1');
            localStorage.removeItem('hde_bookings');
            localStorage.removeItem('hde_receipts');
          } catch (e) {}

          var catSelect = document.getElementById('admin-filter-category');
          if (catSelect) delete catSelect.dataset.lastOptions;

          renderAdminBookings();
          renderAdminEnlist();
          if (typeof renderMyBookings === 'function') renderMyBookings();
          if (typeof renderRooms === 'function') renderRooms();
          toast('Deleted ' + matchingLogs.length + ' order log(s) for ' + catLabel + '!', 'success');
        }
      });
    }

    // Dedicated Action: Delete Even Secured / Booked Successfully
    var btnDeleteSecuredLogs = document.getElementById('btn-delete-secured-logs');
    if (btnDeleteSecuredLogs) {
      btnDeleteSecuredLogs.addEventListener('click', function () {
        var catVal = document.getElementById('admin-filter-category') ? document.getElementById('admin-filter-category').value : 'all';

        var securedLogs = state.bookings.filter(function (b) {
          var matchCat = catVal === 'all' || (b.roomTitle && b.roomTitle.trim() === catVal.trim());
          var isSecured = b.status === 'Confirmed' || b.status === 'Checked-In' || b.status === 'Completed';
          return matchCat && isSecured;
        });

        if (!securedLogs.length) {
          toast('No Secured / Booked Successfully order logs found in selected filter.', 'info');
          return;
        }

        var catLabel = catVal === 'all' ? 'All Categories' : catVal;

        if (confirm('🛡️ ADMIN OVERRIDE: DELETE EVEN SECURED / BOOKED SUCCESSFULLY\n\nFound ' + securedLogs.length + ' SECURED / BOOKED SUCCESSFULLY order log(s) in [' + catLabel + '].\n\nAre you sure you want to permanently delete these confirmed/secured orders from system storage?')) {
          state.bookings = state.bookings.filter(function (b) {
            var matchCat = catVal === 'all' || (b.roomTitle && b.roomTitle.trim() === catVal.trim());
            var isSecured = b.status === 'Confirmed' || b.status === 'Checked-In' || b.status === 'Completed';
            return !(matchCat && isSecured);
          });

          db.set(KEY.bookings, state.bookings);
          try {
            localStorage.removeItem('hde_bookings_v2');
            localStorage.removeItem('hde_bookings_v1');
            localStorage.removeItem('hde_bookings');
            localStorage.removeItem('hde_receipts');
          } catch (e) {}

          var catSelect = document.getElementById('admin-filter-category');
          if (catSelect) delete catSelect.dataset.lastOptions;

          renderAdminBookings();
          renderAdminEnlist();
          if (typeof renderMyBookings === 'function') renderMyBookings();
          if (typeof renderRooms === 'function') renderRooms();
          toast('Deleted ' + securedLogs.length + ' Secured / Booked Successfully order log(s)!', 'success');
        }
      });
    }

    // Master Purge All Logs Button
    var btnPurgeAllLogs = document.getElementById('btn-purge-all-logs');
    if (btnPurgeAllLogs) {
      btnPurgeAllLogs.addEventListener('click', function () {
        if (!state.bookings.length) {
          toast('No order logs found in system storage.', 'info');
          return;
        }

        var securedCount = state.bookings.filter(function (b) {
          return b.status === 'Confirmed' || b.status === 'Checked-In' || b.status === 'Completed';
        }).length;

        if (confirm('🔥 CRITICAL ADMIN PURGE:\nAre you sure you want to PURGE ALL ' + state.bookings.length + ' order logs and purchase receipts from system storage?\n(Includes ' + securedCount + ' Secured / Booked Successfully orders)\n\nThis will completely wipe all reservation log records.')) {
          var totalCount = state.bookings.length;
          state.bookings = [];
          db.set(KEY.bookings, state.bookings);
          try {
            localStorage.removeItem('hde_bookings_v2');
            localStorage.removeItem('hde_bookings_v1');
            localStorage.removeItem('hde_bookings');
            localStorage.removeItem('hde_receipts');
          } catch (e) {}

          var catSelect = document.getElementById('admin-filter-category');
          if (catSelect) delete catSelect.dataset.lastOptions;

          renderAdminBookings();
          renderAdminEnlist();
          if (typeof renderMyBookings === 'function') renderMyBookings();
          if (typeof renderRooms === 'function') renderRooms();
          toast('Purged all ' + totalCount + ' order logs and receipts from system database!', 'success');
        }
      });
    }

    // Master Storage & Memory Reset Console Button
    var btnMasterStorageWipe = document.getElementById('btn-master-storage-wipe');
    if (btnMasterStorageWipe) {
      btnMasterStorageWipe.addEventListener('click', function () {
        if (confirm('⚠️ MASTER STORAGE & SYSTEM MEMORY RESET:\n\nThis will permanently purge all previously created, manually edited, test, or draft booking logs from localStorage (hde_bookings_v3, hde_bookings_v2, hde_receipts) and memory.\n\nThe reservation log database will start completely clean with zero lingering records.\n\nDo you want to proceed with this complete wipe?')) {
          state.bookings = [];
          db.set(KEY.bookings, []);
          try {
            localStorage.removeItem('hde_bookings_v3');
            localStorage.removeItem('hde_bookings_v2');
            localStorage.removeItem('hde_bookings_v1');
            localStorage.removeItem('hde_bookings');
            localStorage.removeItem('hde_receipts');
          } catch (e) {}

          var catSelect = document.getElementById('admin-filter-category');
          if (catSelect) delete catSelect.dataset.lastOptions;

          renderAdminBookings();
          renderAdminEnlist();
          if (typeof renderMyBookings === 'function') renderMyBookings();
          if (typeof renderRooms === 'function') renderRooms();
          toast('🧹 Master Storage & Memory Reset executed! Zero lingering records remaining.', 'success');
        }
      });
    }

    // Voucher Preview Modal Control Listeners
    var btnModalPrint = document.getElementById('btn-modal-print-now');
    if (btnModalPrint) {
      btnModalPrint.addEventListener('click', function () {
        if (!state.currentVoucherBooking) return;
        window.print();
        toast('Print command sent to browser printing dialog!', 'success');
      });
    }

    var btnModalPdf = document.getElementById('btn-modal-download-pdf-now');
    if (btnModalPdf) {
      btnModalPdf.addEventListener('click', function () {
        var container = document.getElementById('voucher-preview-container');
        if (!container || !container.firstElementChild) {
          toast('No voucher preview content found', 'error');
          return;
        }
        if (typeof html2pdf === 'undefined') {
          toast('PDF generator engine initializing... Please try again.', 'error');
          return;
        }

        var b = state.currentVoucherBooking || {};
        var bId = b.id || 'Receipt';

        toast('Generating downloadable PDF document...', 'info');

        var opt = {
          margin: [8, 8, 8, 8],
          filename: 'Hotel_Diamond_Executive_Voucher_' + bId + '.pdf',
          image: { type: 'jpeg', quality: 0.98 },
          html2canvas: { scale: 2, useCORS: true, logging: false },
          jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
        };

        html2pdf().set(opt).from(container.firstElementChild).save().then(function () {
          toast('Official PDF Voucher downloaded successfully!', 'success');
        }).catch(function (err) {
          console.error('PDF generation error', err);
          toast('Failed to generate PDF file. Use Print Receipt instead.', 'error');
        });
      });
    }

    function closeVoucherPreviewModal() {
      var modal = document.getElementById('voucher-preview-modal');
      if (modal) modal.hidden = true;
    }

    var btnClosePrev1 = document.getElementById('btn-close-voucher-preview');
    var btnClosePrev2 = document.getElementById('btn-modal-close-preview');
    var backdropPrev = document.getElementById('voucher-preview-backdrop');

    if (btnClosePrev1) btnClosePrev1.addEventListener('click', closeVoucherPreviewModal);
    if (btnClosePrev2) btnClosePrev2.addEventListener('click', closeVoucherPreviewModal);
    if (backdropPrev) backdropPrev.addEventListener('click', closeVoucherPreviewModal);

    // Export & Backup
    document.getElementById('btn-export-excel').addEventListener('click', exportBookingsToExcel);
    document.getElementById('btn-download-backup').addEventListener('click', downloadBackupJSON);
    document.getElementById('input-restore-backup').addEventListener('change', restoreBackupJSON);
  }

  function checkGeneralTermsConsent() {
    var termsModal = document.getElementById('general-terms-modal');
    var termsBody = document.getElementById('general-terms-body');
    if (!termsModal || !termsBody) return;

    var accepted = db.get('hde_general_terms_accepted_v1', null);
    if (!accepted) {
      termsBody.textContent = state.settings.generalTerms || 'General Hospitality Terms & Conditions apply.';
      termsModal.hidden = false;
    }
  }

  /* App Initialization */
  document.addEventListener('DOMContentLoaded', function () {
    syncSettingsUI();
    renderRooms();
    renderFoodMenu();
    renderOffers();
    renderReviews();
    initEvents();
    checkGeneralTermsConsent();
  });
})();

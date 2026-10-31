// =============================
// SITE CONFIG
// =============================
const siteConfig = {
    businessName: "Era Floris Bumiayu",
    phoneDisplay: "0812-2971-3003",
    whatsappNumber: "6281229713003",
    address: "Glempang, Pagojengan, Kec. Paguyangan, Kabupaten Brebes, Jawa Tengah 52276",
    googleMapsUrl: "https://maps.app.goo.gl/eDisAzWYAW9PQTreA",
    instagram: "",
    facebook: "",
    tiktok: ""
};

// =============================
// PRODUCT DATA
// =============================
const products = [
    {
        id: 1,
        name: "Grand Opening",
        category: "Bunga Papan",
        image: "assets/images/bunga-papan-grand-opening.jpg",
        description: "Hiasan bunga papan untuk kebutuhan grand opening, pembukaan usaha, dan ucapan selamat."
    },
    {
        id: 2,
        name: "Wedding",
        category: "Bunga Papan",
        image: "assets/images/bunga-papan-wedding.jpg",
        description: "Rangkaian bunga untuk memberikan ucapan selamat pada acara pernikahan."
    },
    {
        id: 3,
        name: "Duka cita",
        category: "Bunga Papan",
        image: "assets/images/bunga-papan-duka-cita.jpg",
        description: "Rangkaian bunga sebagai bentuk perhatian dan belasungkawa."
    },
    {
        id: 4,
        name: "Bouquet Wisuda",
        category: "Hand Bouquets",
        image: "assets/images/bouquet-1.jpg",
        description: "Hand bouquet cantik yang cocok untuk merayakan momen kelulusan dan wisuda."
    },
    {
        id: 5,
        name: "Bouquet Wedding",
        category: "Hand Bouquets",
        image: "assets/images/bouquet-2.jpg",
        description: "Hand bouquet elegan khusus dirangkai untuk momen sakral pernikahan."
    },
    {
        id: 6,
        name: "Bouquet Custom",
        category: "Hand Bouquets",
        image: "assets/images/bouquet-3.jpg",
        description: "Rangkaian bunga yang bisa disesuaikan dengan kebutuhan dan budget Anda."
    }

];

// =============================
// REVIEW DATA
// =============================
const reviews = [
    {
        name: "Meli Noviani",
        rating: 5,
        text: "Pelayanan sangat memuaskan ✨"
    },
    {
        name: "Bondan Stymulan Putra",
        rating: 5,
        text: "Pelayanan ramah, cepat dan hasil memuaskan"
    },
    {
        name: "Mega R",
        rating: 5,
        text: "oke banget era florist rapi dan cantik"
    }
];

// =============================
// INITIALIZE CONFIG DATA
// =============================
document.addEventListener('DOMContentLoaded', () => {
    // Top Bar & CTA Phone
    document.getElementById('top-bar-phone').textContent = `Hubungi : ${siteConfig.phoneDisplay}`;
    document.getElementById('cta-phone-display').textContent = siteConfig.phoneDisplay;
    
    // Address
    document.getElementById('location-address').textContent = siteConfig.address;

    // Render Products & Reviews
    renderProducts();
    renderReviews();
    renderSocialIcons();
});

// =============================
// WHATSAPP
// =============================
function openWhatsApp(message) {
    const url = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
}

// WhatsApp Floating Button
document.getElementById('btn-float-wa').addEventListener('click', () => {
    openWhatsApp('Halo Era Floris Bumiayu, saya ingin bertanya mengenai layanan Anda.');
});

// =============================
// MOBILE MENU
// =============================
const hamburger = document.getElementById('hamburger');
const navMobile = document.getElementById('nav-mobile');
const mobileLinks = navMobile.querySelectorAll('a');

function toggleMenu() {
    hamburger.classList.toggle('active');
    navMobile.classList.toggle('active');
    
    if (hamburger.classList.contains('active')) {
        hamburger.setAttribute('aria-label', 'Tutup menu navigasi');
        document.body.style.overflow = 'hidden';
    } else {
        hamburger.setAttribute('aria-label', 'Buka menu navigasi');
        document.body.style.overflow = '';
    }
}

hamburger.addEventListener('click', toggleMenu);

mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (navMobile.classList.contains('active')) {
            toggleMenu();
        }
    });
});


// =============================
// PRODUCT RENDERING
// =============================
function renderProducts() {
    const gridPapan = document.getElementById('grid-bunga-papan');
    const gridBouquet = document.getElementById('grid-hand-bouquets');

    products.forEach(product => {
        const card = document.createElement('div');
        card.classList.add('product-card');
        card.setAttribute('tabindex', '0');
        card.innerHTML = `
            <div class="product-img-wrapper">
                <img src="${product.image}" alt="${product.name} - Era Floris Bumiayu" loading="lazy">
            </div>
            <h3 class="product-name">${product.name}</h3>
        `;

        card.addEventListener('click', () => openModal(product));
        card.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') openModal(product);
        });

        if (product.category === 'Bunga Papan') {
            gridPapan.appendChild(card);
        } else {
            gridBouquet.appendChild(card);
        }
    });
}

function renderReviews() {
    const gridReviews = document.getElementById('reviews-grid');
    reviews.forEach(review => {
        const initial = review.name.charAt(0).replace('[', '').trim() || 'U';
        const card = document.createElement('div');
        card.classList.add('review-card');
        card.innerHTML = `
            <div class="review-header">
                <div class="review-avatar">${initial}</div>
                <div class="review-name">${review.name}</div>
            </div>
            <div class="review-stars">${'★'.repeat(review.rating)}</div>
            <p class="review-text">${review.text}</p>
        `;
        gridReviews.appendChild(card);
    });
}

function renderSocialIcons() {
    const container = document.getElementById('social-icons');
    const iconSvgs = {
        instagram: '<svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" stroke-width="2" fill="none"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>',
        facebook: '<svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" stroke-width="2" fill="none"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>',
        tiktok: '<svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" stroke-width="2" fill="none"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path></svg>'
    };

    ['instagram', 'facebook', 'tiktok'].forEach(platform => {
        const url = siteConfig[platform];
        if (url) {
            const link = document.createElement('a');
            link.href = url;
            link.target = "_blank";
            link.classList.add('social-icon');
            link.setAttribute('aria-label', `${platform} Era Floris Bumiayu`);
            link.innerHTML = iconSvgs[platform];
            container.appendChild(link);
        } else {
            const span = document.createElement('span');
            span.classList.add('social-icon');
            span.style.opacity = '0.3';
            span.innerHTML = iconSvgs[platform];
            container.appendChild(span);
        }
    });
}

// =============================
// MODAL
// =============================
const modal = document.getElementById('product-modal');
const modalClose = document.getElementById('modal-close');
const modalImg = document.getElementById('modal-image');
const modalTitle = document.getElementById('modal-title');
const modalDesc = document.getElementById('modal-desc');
const modalBtnOrder = document.getElementById('modal-btn-order');

function openModal(product) {
    modalImg.src = product.image;
    modalImg.alt = product.name;
    modalTitle.textContent = product.name;
    modalDesc.textContent = product.description;
    
    modalBtnOrder.onclick = () => {
        openWhatsApp(`Halo Era Floris Bumiayu, saya tertarik dengan ${product.category} [${product.name}]. Bisa minta informasi harga dan pemesanannya?`);
    };

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

modalClose.addEventListener('click', closeModal);

modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
        closeModal();
    }
});

// =============================
// GOOGLE MAPS BUTTON
// =============================
const mapsBtn = document.getElementById('btn-google-maps');
const mapsWarning = document.getElementById('maps-warning');
const reviewsBtn = document.getElementById('btn-see-more-reviews');

function handleMapsClick() {
    if (siteConfig.googleMapsUrl) {
        window.open(siteConfig.googleMapsUrl, "_blank");
    } else {
        mapsWarning.textContent = "Lokasi Google Maps belum dikonfigurasi.";
        mapsWarning.style.display = "block";
        setTimeout(() => mapsWarning.style.display = "none", 3000);
    }
}

mapsBtn.addEventListener('click', handleMapsClick);
reviewsBtn.addEventListener('click', handleMapsClick);

// =============================
// INTERSECTION OBSERVER
// =============================
const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

// =============================
// SCROLL TO TOP
// =============================
const btnScrollTop = document.getElementById('btn-scroll-top');

window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
        btnScrollTop.classList.add('visible');
    } else {
        btnScrollTop.classList.remove('visible');
    }
});

btnScrollTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// =============================
// IMAGE FALLBACK
// =============================
document.addEventListener('error', function(event) {
    if (event.target.tagName.toLowerCase() === 'img') {
        event.target.src = 'data:image/svg+xml;charset=UTF-8,%3Csvg xmlns="http://www.w3.org/2000/svg" width="100%25" height="100%25" viewBox="0 0 400 300"%3E%3Crect fill="%23f3f4f6" width="400" height="300"/%3E%3Ctext fill="%239ca3af" font-family="sans-serif" font-size="16" x="50%25" y="50%25" text-anchor="middle" dominant-baseline="middle"%3EFoto produk belum tersedia%3C/text%3E%3C/svg%3E';
    }
}, true);
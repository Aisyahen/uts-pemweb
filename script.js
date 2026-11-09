let dataRiwayat = JSON.parse(localStorage.getItem('riwayatPendaftaranPTI')) || [];
let currentLang = 'ID';

const defaultGFormUrl = "https://docs.google.com/forms/d/14f8B955-bFAyn6KGP60nVG2k4QLhdhp_SQF_CuKo2hA/viewform";
const kajianGFormUrl = "https://bit.ly/4z39Btp";

// Master Data Kegiatan (Nama Bulan Lengkap & Format Rapi)
const eventsData = [
    { 
        title: "Workshop & Kelas Kreatif: Pemrograman Web Modern", 
        category: "Kelas Kreatif", 
        date: "Sabtu, 21 November 2026", 
        month: "November", 
        target: "Mahasiswa PTI",
        skala: "Offline",
        posterImg: "https://via.placeholder.com/600x800/bde0fe/0f172a?text=Poster+Web+Modern",
        formUrl: defaultGFormUrl
    },
    { 
        title: "Kajian Islam: Pemuda, Mau Dibawa Kemana Hidupmu?", 
        category: "Kegiatan Ormawa PTI", 
        date: "Jumat, 27 November 2026", 
        month: "November", 
        target: "Mahasiswa PTI & Umum",
        skala: "Offline",
        posterImg: "poster kajian islam.jpeg",
        formUrl: kajianGFormUrl
    },
    { 
        title: "Webinar AI Trends in Education", 
        category: "Seminar & Webinar", 
        date: "Rabu, 2 Desember 2026", 
        month: "Desember", 
        target: "Umum",
        skala: "Nasional", 
        type: "Online",
        posterImg: "https://via.placeholder.com/600x800/bde0fe/0f172a?text=Poster+Webinar+AI",
        formUrl: defaultGFormUrl
    },
    { 
        title: "Workshop Tech Fusion", 
        category: "Kegiatan Ormawa PTI", 
        date: "Kamis, 10 Desember 2026", 
        month: "Desember", 
        target: "Mahasiswa PTI",
        skala: "Offline",
        posterImg: "https://via.placeholder.com/600x800?text=Poster+Tech+Fusion",
        formUrl: defaultGFormUrl
    },
    { 
        title: "IoT & Embedded System", 
        category: "Kelas Kreatif", 
        date: "Sabtu, 19 Desember 2026", 
        month: "Desember", 
        target: "Mahasiswa PTI",
        skala: "Offline",
        posterImg: "https://via.placeholder.com/600x800?text=Poster+IoT",
        formUrl: null
    },
    { 
        title: "Web Design Competition", 
        category: "Section Lomba", 
        date: "Pendaftaran: 1 November 2026 - 30 November 2026", 
        month: "November", 
        target: "Umum",
        skala: "Nasional",
        posterImg: "https://via.placeholder.com/600x800?text=Poster+Lomba+Web",
        formUrl: defaultGFormUrl
    },
    { 
        title: "International EdTech Hackathon", 
        category: "Section Lomba", 
        date: "Pendaftaran: 15 November 2026 - 15 Januari 2027", 
        month: "Januari", 
        target: "Umum",
        skala: "Internasional",
        posterImg: "https://via.placeholder.com/600x800?text=Poster+Hackathon",
        formUrl: defaultGFormUrl
    },
    { 
        title: "Seminar Cybersecurity Essentials", 
        category: "Seminar & Webinar", 
        date: "Sabtu, 5 Desember 2026", 
        month: "Desember", 
        target: "Mahasiswa PTI & Umum",
        skala: "Nasional", 
        type: "Offline",
        posterImg: "https://via.placeholder.com/600x800?text=Poster+Seminar+Cyber",
        formUrl: defaultGFormUrl
    }
];

const i18n = {
    ID: {
        'nav-beranda': 'Beranda',
        'nav-terdekat': 'Event Terdekat',
        'nav-katalog': 'Katalog Kegiatan',
        'nav-dokumentasi': 'Kegiatan Terlaksana',
        'nav-riwayat': 'Riwayat Pendaftaran',
        'hero-title': 'Selamat Datang di Portal Info Event & Kegiatan',
        'slogan': 'Kompeten, Religius, Efektif, Amanah, Terampil, Inovatif, Future',
        'title-terdekat': '🔥 Event Terdekat 🔥',
        'badge-terdekat': 'TERDEKAT',
        'btn-poster': 'Lihat Poster',
        'btn-daftar': 'Daftar Sekarang',
        'title-katalog': '🗂️ Katalog Kegiatan',
        'sec-ormawa': '👥 Kegiatan Ormawa HMP PTI',
        'sec-kelas': '💻 Kelas Kreatif Rutin',
        'sec-lomba': '🏆 Lomba & Kompetisi',
        'sec-seminar': '📢 Seminar & Webinar',
        'sec-riwayat': '📋 Riwayat Pendaftaran Anda',
        'btn-daftar-sm': 'Daftar',
        'th-event': 'Nama Event',
        'th-tgl': 'Waktu Akses',
        'th-link': 'Tautan GForm',
        'th-status': 'Status Pendaftaran',
        'empty-riwayat': 'Belum ada riwayat pendaftaran.',
        'title-dokumentasi': '🖼️ Kegiatan Terlaksana'
    },
    EN: {
        'nav-beranda': 'Home',
        'nav-terdekat': 'Upcoming Events',
        'nav-katalog': 'Event Catalog',
        'nav-dokumentasi': 'Past Activities',
        'nav-riwayat': 'Registration History',
        'hero-title': 'Welcome to the Event & Activity Portal of',
        'slogan': 'Competent, Religious, Effective, Trustworthy, Skilled, Innovative, Future',
        'title-terdekat': '🔥 Upcoming Events 🔥',
        'badge-terdekat': 'UPCOMING',
        'btn-poster': 'View Poster',
        'btn-daftar': 'Register Now',
        'title-katalog': '🗂️ Event Catalog',
        'sec-ormawa': '👥 PTI Student Organization Events',
        'sec-kelas': '💻 Routine Creative Classes',
        'sec-lomba': '🏆 Competitions & Contests',
        'sec-seminar': '📢 Seminars & Webinars',
        'sec-riwayat': '📋 Your Registration History',
        'btn-daftar-sm': 'Register',
        'th-event': 'Event Name',
        'th-tgl': 'Access Time',
        'th-link': 'GForm Link',
        'th-status': 'Registration Status',
        'empty-riwayat': 'No registration history yet.',
        'title-dokumentasi': '🖼️ Past Activities'
    }
};

document.addEventListener('DOMContentLoaded', () => {
    renderRiwayatTable();

    // 1. Mobile Menu Toggle
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    hamburger.addEventListener('click', () => navMenu.classList.toggle('active'));

    // 2. Dark Mode Toggle
    const themeToggleBtn = document.getElementById('theme-toggle');
    themeToggleBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        themeToggleBtn.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
    });

    // 3. Bilingual Switcher
    const langToggleBtn = document.getElementById('lang-toggle');
    langToggleBtn.addEventListener('click', () => {
        currentLang = currentLang === 'ID' ? 'EN' : 'ID';
        langToggleBtn.textContent = currentLang === 'ID' ? 'EN' : 'ID';
        updateLanguage();
    });

    // 4. Accordion Interaktif Katalog
    const accordionHeaders = document.querySelectorAll('.accordion-header');
    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const content = header.nextElementSibling;
            const icon = header.querySelector('.icon');
            content.classList.toggle('active');
            icon.textContent = content.classList.contains('active') ? '-' : '+';
        });
    });

    // 5. Fitur Search Bar Terintegrasi Target & Skala
    const btnSearch = document.getElementById('btnSearch');
    const btnResetSearch = document.getElementById('btnResetSearch');
    const searchInput = document.getElementById('searchInput');
    const filterBulan = document.getElementById('filterBulan');
    const filterSkala = document.getElementById('filterSkala');
    const searchResultArea = document.getElementById('searchResultArea');
    const searchResultList = document.getElementById('searchResultList');

    function performSearch() {
        const query = searchInput.value.toLowerCase().trim();
        const selectedBulan = filterBulan.value;
        const selectedSkala = filterSkala.value;

        if (query === '' && selectedBulan === '' && selectedSkala === '') {
            searchResultArea.style.display = 'block';
            btnResetSearch.style.display = 'inline-block';
            searchResultList.innerHTML = '<p style="color: #ef4444; font-weight: bold;">⚠️ Silakan isikan atau pilih salah satu kriteria pencarian terlebih dahulu.</p>';
            return;
        }

        const filtered = eventsData.filter(event => {
            let matchQuery = true;
            if (query !== '') {
                matchQuery = event.title.toLowerCase().includes(query);
            }

            let matchBulan = true;
            if (selectedBulan !== '') {
                matchBulan = event.month === selectedBulan;
            }

            let matchSkala = true;
            if (selectedSkala !== '') {
                matchSkala = event.target === selectedSkala || 
                             event.skala === selectedSkala || 
                             (event.type && event.type === selectedSkala);
            }

            return matchQuery && matchBulan && matchSkala;
        });

        searchResultList.innerHTML = '';
        searchResultArea.style.display = 'block';
        btnResetSearch.style.display = 'inline-block';

        if (filtered.length > 0) {
            filtered.forEach(item => {
                const div = document.createElement('div');
                div.className = 'search-result-item';
                
                let actionBtnHtml = '';
                if (item.formUrl) {
                    actionBtnHtml = `<button class="btn-search-daftar shadow-btn" onclick="catatDanBukaGForm('${item.title.replace(/'/g, "\\'")}', '${item.formUrl}')">Daftar Sekarang</button>`;
                } else {
                    actionBtnHtml = `<button class="btn-disabled" disabled style="padding: 0.4rem 0.7rem; font-size: 0.8rem;">Soon</button>`;
                }

                div.innerHTML = `
                    <div>
                        <strong>${item.title}</strong><br>
                        <small style="color: #64748b;">📅 ${item.date} | 🎯 ${item.target} (${item.skala})</small>
                    </div>
                    <div class="search-item-actions">
                        <button class="btn-search-poster shadow-btn" onclick="openPosterModal('Poster Kegiatan', '${item.posterImg}')">Lihat Poster</button>
                        ${actionBtnHtml}
                    </div>
                `;
                searchResultList.appendChild(div);
            });
            searchResultArea.scrollTop = 0;
        } else {
            searchResultList.innerHTML = '<p style="color: #ef4444; font-weight: bold;">Kegiatan tidak ditemukan. Silakan coba kata kunci atau filter lain.</p>';
        }
    }

    function resetSearch() {
        searchInput.value = '';
        filterBulan.value = '';
        filterSkala.value = '';
        searchResultList.innerHTML = '';
        searchResultArea.style.display = 'none';
        btnResetSearch.style.display = 'none';
    }

    btnSearch.addEventListener('click', performSearch);
    btnResetSearch.addEventListener('click', resetSearch);
    searchInput.addEventListener('keyup', (e) => {
        if (e.key === 'Enter') performSearch();
    });
});

// Otomatis Mencatat Riwayat Pendaftaran
function catatDanBukaGForm(eventName, url) {
    const existingIndex = dataRiwayat.findIndex(item => item.event === eventName);
    
    if (existingIndex === -1) {
        const pendaftaranBaru = {
            id: Date.now(),
            event: eventName,
            url: url,
            tanggal: new Date().toLocaleString('id-ID', { dateStyle: 'medium', timeStyle: 'short' }),
            status: 'Form Diakses'
        };
        dataRiwayat.push(pendaftaranBaru);
    }

    localStorage.setItem('riwayatPendaftaranPTI', JSON.stringify(dataRiwayat));
    window.open(url, '_blank');
}

// Konfirmasi Status Telah Mengisi Form
function tandaiSudahIsiForm(id) {
    const item = dataRiwayat.find(row => row.id === id);
    if (item) {
        item.status = 'Telah Mengisi Form';
        localStorage.setItem('riwayatPendaftaranPTI', JSON.stringify(dataRiwayat));
        renderRiwayatTable();
    }
}

function updateLanguage() {
    const langData = i18n[currentLang];
    document.querySelectorAll('[data-id]').forEach(el => {
        const id = el.getAttribute('data-id');
        if (langData[id]) {
            el.textContent = langData[id];
        }
    });
}

function openPosterModal(title, imageSrc) {
    document.getElementById('posterTitle').textContent = title;
    document.getElementById('posterImage').src = imageSrc;
    document.getElementById('modalPoster').style.display = 'block';
}

function closePosterModal() {
    document.getElementById('modalPoster').style.display = 'none';
}

function openRiwayatModal() {
    renderRiwayatTable();
    document.getElementById('modalRiwayat').style.display = 'block';
}

function closeRiwayatModal() {
    document.getElementById('modalRiwayat').style.display = 'none';
}

function renderRiwayatTable() {
    const tbody = document.getElementById('tbody-riwayat');
    const emptyText = document.getElementById('empty-riwayat');
    if (!tbody) return;
    
    tbody.innerHTML = '';

    if (dataRiwayat.length === 0) {
        emptyText.style.display = 'block';
    } else {
        emptyText.style.display = 'none';
        dataRiwayat.forEach((item, index) => {
            const tr = document.createElement('tr');
            
            let statusHtml = '';
            if (item.status === 'Telah Mengisi Form') {
                statusHtml = `<span class="badge-status-selesai">✔ Telah Mengisi Form</span>`;
            } else {
                statusHtml = `
                    <span class="badge-status-akses">⏳ Form Diakses</span>
                    <button class="btn-konfirmasi-selesai shadow-btn" onclick="tandaiSudahIsiForm(${item.id})">Konfirmasi Selesai</button>
                `;
            }

            tr.innerHTML = `
                <td>${index + 1}</td>
                <td><strong>${item.event}</strong></td>
                <td>${item.tanggal}</td>
                <td><a href="${item.url}" target="_blank" class="btn-riwayat-link">Buka Link GForm ↗</a></td>
                <td>${statusHtml}</td>
            `;
            tbody.appendChild(tr);
        });
    }
}

const sidebar = document.getElementById("sidebar");
const sidebarBackdrop = document.getElementById("sidebarBackdrop");
const menuToggle = document.getElementById("menuToggle");
const themeToggle = document.getElementById("themeToggle");
const links = document.querySelectorAll(".nav-link");
const texts = [
     "a Web Developer",
     "a .NET Programmer",
     "a Android Developer",
     "a Tech Enthusiast",
];

/* =====================
   SOCIAL MEDIA DATA
   Edit link & icon di sini saja
===================== */
const socialMedia = [
     {
          icon: "bi bi-linkedin",
          url: "https://www.linkedin.com/in/maulana-syarief-hidayat-b23a10111/",
     },
     { icon: "bi bi-github", url: "https://github.com/maulanasyarief" },
     { icon: "bi bi-twitter", url: "https://twitter.com/yourusername" },
     { icon: "bi bi-telegram", url: "https://t.me/yourusername" },
     { icon: "bi bi-instagram", url: "https://www.instagram.com/yourusername" },
];

let textIndex = 0;
let charIndex = 0;
const typingSpeed = 100; // kecepatan mengetik (ms per karakter)
const delayBetweenTexts = 2000; // jeda sebelum berpindah ke teks selanjutnya

const dynamicTextElement = document.getElementById("dynamicText");

function typeText() {
     if (charIndex < texts[textIndex].length) {
          // Tambahkan karakter satu per satu
          dynamicTextElement.textContent += texts[textIndex].charAt(charIndex);
          charIndex++;
          setTimeout(typeText, typingSpeed);
     } else {
          // Setelah selesai mengetik, tunggu sebentar, lalu lanjut ke teks berikutnya
          setTimeout(() => {
               dynamicTextElement.textContent = "";
               textIndex = (textIndex + 1) % texts.length;
               charIndex = 0;
               typeText(); // Mulai ketik teks berikutnya
          }, delayBetweenTexts);
     }
}

typeText(); // Mulai efek ketik saat halaman dimuat
// anim
AOS.init();

/* =====================
   RENDER SOCIAL MEDIA
===================== */
function renderSocialMedia() {
     const container = document.getElementById("socialIcons");
     if (!container) return;

     container.innerHTML = socialMedia
          .map(
               (s) =>
                    `<a href="${s.url}" target="_blank" rel="noopener">
                          <i class="${s.icon}"></i>
                     </a>`,
          )
          .join("");
}

renderSocialMedia();

/* =====================
   THEME TOGGLE (dengan persistensi)
===================== */
function applyTheme(theme) {
     const isDark = theme === "dark";
     document.body.classList.toggle("dark", isDark);
     themeToggle.innerHTML = isDark
          ? '<i class="fas fa-sun"></i>'
          : '<i class="fas fa-moon"></i>';
}

// Muat tema tersimpan, atau ikuti preferensi sistem
const savedTheme = localStorage.getItem("theme");
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
applyTheme(savedTheme || (prefersDark ? "dark" : "light"));

themeToggle.addEventListener("click", () => {
     const isDark = document.body.classList.contains("dark");
     const theme = isDark ? "light" : "dark";
     localStorage.setItem("theme", theme);
     applyTheme(theme);
});

/* =====================
   SIDEBAR TOGGLE (mobile)
===================== */
function openSidebar() {
     sidebar.classList.add("show");
     sidebarBackdrop.classList.add("show");
}

function closeSidebar() {
     sidebar.classList.remove("show");
     sidebarBackdrop.classList.remove("show");
}

menuToggle.addEventListener("click", () => {
     sidebar.classList.contains("show") ? closeSidebar() : openSidebar();
});

sidebarBackdrop.addEventListener("click", closeSidebar);

/* =====================
   NAVIGATION & SCROLL-SPY
===================== */
links.forEach((link) => {
     link.addEventListener("click", (e) => {
          links.forEach((l) => l.classList.remove("active"));
          link.classList.add("active");

          if (window.innerWidth <= 768) {
               closeSidebar();
          }
     });
});

// Scroll-spy: tandai menu sesuai section yang terlihat
const sections = document.querySelectorAll("section[id]");
const observer = new IntersectionObserver(
     (entries) => {
          entries.forEach((entry) => {
               if (entry.isIntersecting) {
                    const id = "#" + entry.target.id;
                    links.forEach((l) => {
                         l.classList.toggle(
                              "active",
                              l.getAttribute("href") === id,
                         );
                    });
               }
          });
     },
     { rootMargin: "-40% 0px -50% 0px" },
);
sections.forEach((s) => observer.observe(s));

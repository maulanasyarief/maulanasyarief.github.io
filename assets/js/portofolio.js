/*
WEB :
 - ABDIBANGSA INSTITUDE
 - SMANDA PALI
 - JATINOM
 - CIAKASIR (on Going)

# DESKSTOP
- Scrennshoot, Dashboard tapi di blur
- perhitungan MRP, base On BOM
- scenshoot Curent stock di blur

# Mobile
 - TANI KU
 - PUPR MARKER
 - JATINOM ABSENSI
 - CAKUB KE uangan bulanan
*/
// =======================
// DATA PROJECT (1 ARRAY)
// =======================

const ProjectData = [
     // ========= WEB =========
     {
          type: "WEB",
          name: "Jatinom Vetting System",
          img: "jatinom.jpg",
          yearDev: "2022",
          techStack: [
               "Codeigniter 3",
               "Mysql",
               "JavaScript",
               "J-Query",
               "Bootstrap",
          ],
          description: `Aplikasi ini dibuat untuk mendukung mobilitas karyawan yang melakukan perjalanan dinas di PT. Jatinom Putra Jasa.

Fitur utama aplikasi ini:
• Absensi karyawan (Tracking Geo-Location)
• Input Laporan Vessel berdasarkan Surat Dinas (Scan QR Code) via Mobile Apps
• Input Klaim atau Reimbursement perjalanan dinas (Mobile & Web Base)`,
     },
     {
          type: "WEB",
          name: "(Back Office) PU MARKER",
          img: "Dash_PUPR.png",
          yearDev: "2017",
          techStack: [
               "Codeigniter 3",
               "Mysql",
               "JavaScript",
               "J-Query",
               "API Service",
               "Bootstrap",
               "Google API Geolocations",
               "Firebase Cloud Messaging",
          ],
          description: `<b>PU MARKER</b> ini dibuat untuk membantu masyarakat Cianjur ...`,
     },
     {
          type: "WEB",
          name: "(Back Office) MarketPlace Etani",
          img: "etani.png",
          yearDev: "2017",
          techStack: [
               "Codeigniter 3",
               "Mysql",
               "JavaScript",
               "J-Query",
               "API Service",
               "Bootstrap",
          ],
          description: `Sebagai sarana membantu masyarakat untuk transaksi jual beli ...`,
     },
     {
          type: "WEB",
          name: "CMS Website Sekolah",
          img: "WEB_SMANDA.png",
          yearDev: "2016",
          techStack: [
               "Codeigniter 3",
               "Mysql",
               "JavaScript",
               "J-Query",
               "Bootstrap",
          ],
          description: `Content Management System untuk mengelola konten website sekolah ...`,
     },

     // ========= MOBILE =========
     {
          type: "MOBILE",
          name: "Jatinom Vetting System",
          img: "Jatinom_mobile.png",
          yearDev: "2022",
          techStack: [
               "Java (Android Studio)",
               "Firebase",
               "Google API Geo-Locations",
          ],
          description: `Aplikasi ini dibuat untuk mendukung mobilitas karyawan yang melakukan perjalanan dinas di PT. Jatinom Putra Jasa
Fitur utama aplikasi ini:
- Absensi karyawan (Tracking Geo-Location)
- Input Laporan Vessel berdasarkan Surat Dinas (Scan QR Code) via Mobile Apps
- Input Klaim atau Reimbursement perjalanan dinas (Mobile & Web Base)`,
     },
     {
          type: "MOBILE",
          name: "PU MARKER",
          img: "PUMARKER_mobile.png",
          yearDev: "2017",
          techStack: [
               "Java (Android Studio)",
               "Google API Geo-Locations",
               "Firebase",
               "Firebase Cloud Messaging",
          ],
          description: `<b>PU MARKER</b> versi mobile untuk pelaporan masyarakat ...`,
     },
     {
          type: "MOBILE",
          name: "E-tani",
          img: "etani_mobile.png",
          yearDev: "2017",
          techStack: [
               "Java (Android Studio)",
               "Google API Geo-Locations",
               "Firebase",
               "Firebase Cloud Messaging",
          ],
          description: `Aplikasi mobile marketplace hasil pertanian ...`,
     },
     {
          type: "Dekstop",
          name: "Manufature System",
          img: "Dekstop.png",
          yearDev: "2020",
          techStack: ["Vb.Net", "Devexpress", "Sql Server", "RFID"],
          description: `Aplikasi mobile marketplace hasil pertanian ...`,
     },
];

// =======================
// VARIABEL GLOBAL
// =======================

const container = document.getElementById("projectList");
const buttonContainer = document.getElementById("filterButtons");

let currentFilter = "All";
let currentItems = []; // Menyimpan data yang sedang ditampilkan

// =======================
// RENDER BUTTON FILTER
// =======================

function renderButtons() {
     buttonContainer.innerHTML = "";

     // Ambil type unik
     const types = ["All", ...new Set(ProjectData.map((p) => p.type))];

     types.forEach((type) => {
          const btn = document.createElement("button");

          btn.className = `btn btn-sm m-1 btn-outline-theme`;
          btn.innerText = type;

          // Set active class
          if (type === currentFilter) {
               btn.classList.add("active");
          }

          btn.onclick = () => {
               currentFilter = type;
               setActiveButton(type);
               showProject(type);
          };

          buttonContainer.appendChild(btn);
     });
}

// =======================
// SET ACTIVE BUTTON SMOOTH
// =======================

function setActiveButton(type) {
     const buttons = buttonContainer.querySelectorAll("button");

     buttons.forEach((btn) => {
          if (btn.innerText === type) {
               btn.classList.add("active");
          } else {
               btn.classList.remove("active");
          }
     });
}

// =======================
// SHOW PROJECT BY FILTER
// =======================

function showProject(type = "All") {
     container.innerHTML = "";

     // Filter data
     currentItems =
          type === "All"
               ? ProjectData
               : ProjectData.filter((item) => item.type === type);

     currentItems.forEach((item, index) => {
          const { name, img, techStack, yearDev } = item;

          const techBadges =
               techStack && techStack.length > 0
                    ? techStack
                           .map(
                                (tech) =>
                                     `<span class="badge tech-badge shadow-sm ms-1">${tech}</span>`,
                           )
                           .join("")
                    : "";

          const card = document.createElement("div");
          card.className = "col-md-6 mb-3";
          card.setAttribute("data-aos", "zoom-in-left");

          card.innerHTML = `
          <div style="cursor:pointer;" onclick="openProjectModal(${index})">
               <div class="card h-100">
                    <img src="assets/img/${img}" 
                         class="img-fluid" 
                         style="height:250px; object-fit:cover;" />
                    <div class="card-body">
                         <h5 class="card-title">
                              ${name} 
                              <span class="badge text-bg-secondary">${yearDev}</span>
                         </h5>
                         <div class="card-subtitle mt-2">${techBadges}</div>
                    </div>
               </div>
          </div>
          `;

          container.appendChild(card);
     });
}

// =======================
// OPEN MODAL DETAIL
// =======================

function openProjectModal(index) {
     const item = currentItems[index];
     if (!item) return;

     document.getElementById("project_ModalLabel").textContent = item.name;
     document.getElementById("project_ModalImg").src =
          `assets/img/${item.img}`;
     document.getElementById("project_ModalDesc").innerHTML = item.description;

     const modalTech = item.techStack
          .map((t) => `<span class="badge tech-badge me-1">${t}</span>`)
          .join("");

     const techContainer = document.getElementById("project_ModalTech");
     if (techContainer) techContainer.innerHTML = modalTech;

     const myModal = new bootstrap.Modal(document.getElementById("skillModal"));
     myModal.show();
}

// =======================
// INIT SAAT LOAD
// =======================

renderButtons();
showProject("All");

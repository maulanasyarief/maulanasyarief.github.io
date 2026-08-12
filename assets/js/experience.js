// Array data pengalaman
const workExperiences = [
     {
          title: " IT Development Officer | Executive . Net Developer",
          company: "PT.Sentral Kreasi Kencana",
          period: "Jan 2021 - Now",
          description: [
               "Database & System Architecture Specialist I specialize in designing robust database solutions and serving as a system analyst to bridge business needs with technical implementations. My expertise ensures seamless data flow and efficient system operation",
               "Production & Inventory Control Systems Development I develop comprehensive .NET applications tailored to optimize all facets of production divisions. My programs enhance critical areas such as:",
          ],
          isCurrent: true,
     },
     {
          title: " IT Development Officer | .Net Developer",
          company: "PT. Cenrtral Mega Kencana",
          period: "Feb 2020 – jan 2021",
          description: [
               "Create Reprot For Production Process and Inventory Control",
               "Create Program For Support Production Process and Inventory Control",
               "Integration External System Using API",
          ],
          isCurrent: false,
     },
     {
          title: "Intern | Web & Android Developer",
          company: "DINA PUPR Kab.Cianjur",
          period: "jul 2018 – sep 2018",
          description: [
               "Riset dan Penelitian Tugas Akhir di Dinas PUPR Kabupaten Cianjur Dalam rangka menyelesaikan tugas akhir, saya melakukan riset dan penelitian di Dinas Pekerjaan Umum dan Penataan Ruang (PUPR) Kabupaten Cianjur. Fokus penelitian ini adalah pengembangan solusi digital untuk membantu proses pelaporan kerusakan fasilitas publik oleh masyarakat.",
          ],
          isCurrent: false,
     },
     {
          title: "Intern | Web & Android Developer",
          company: "Dinas Pertanian Kab.Cianjur",
          period: "Feb 2017 – May 2017",
          description: [
               "Praktek Kerja Lapangan di Dinas Pertanian Kabupaten Cianjur Selama pelaksanaan Praktek Kerja Lapangan (PKL) di Dinas Pertanian Kabupaten Cianjur, mengembangkan ide kreatif untuk membantu meningkatkan promosi dan penjualan produk hasil pertanian lokal. Solusi yang dibuat adalah pembuatan sebuah software marketplace khusus untuk menjual hasil tani masyarakat Cianjur",
          ],
          isCurrent: false,
     },
];

function renderWorkExperience() {
     const container = document.getElementById("work-experience");
     if (!container || !Array.isArray(workExperiences)) return;

     container.innerHTML = "";

     workExperiences.forEach((exp, index) => {
          const side = index % 2 === 0 ? "left" : "right";
          const isCurrent = exp.isCurrent ? "current" : "";

          const experienceDiv = document.createElement("div");
          experienceDiv.className = `experience ${side} ${isCurrent}`.trim();
          experienceDiv.setAttribute("data-aos", "fade-up");
          experienceDiv.setAttribute(
               "data-aos-anchor-placement",
               "center-bottom"
          );

          // ✅ Loop description array dan ubah jadi <ul><li>...</li></ul>
          const descHTML = Array.isArray(exp.description)
               ? `<ul class="desc-list">${exp.description
                      .map((item) => `<li>${item}</li>`)
                      .join("")}</ul>`
               : `<p>${exp.description}</p>`;

          experienceDiv.innerHTML = `
                    <div class="exp-card">
                         <div class="exp-title">${exp.title}</div>
                         <div class="exp-company">${exp.company}</div>
                         <div class="exp-period">${exp.period}</div>
                         <div class="exp-desc">${descHTML}</div>
                    </div>
       `;

          container.appendChild(experienceDiv);
     });
}

// function renderWorkExperience() {
//      const container = document.getElementById("work-experience");
//      if (!container || !Array.isArray(workExperiences)) return;

//      container.innerHTML = "";

//      workExperiences.forEach((exp, index) => {
//           const side = index % 2 === 0 ? "left" : "right";
//           const isCurrent = exp.isCurrent ? "current" : "";

//           const experienceDiv = document.createElement("div");
//           experienceDiv.className = `experience ${side} ${isCurrent}`.trim();

//           experienceDiv.setAttribute("data-aos", "fade-up");
//           experienceDiv.setAttribute(
//                "data-aos-anchor-placement",
//                "center-bottom"
//           );
//           experienceDiv.innerHTML = `
//                <div class="exp-title">${exp.title}</div>
//                <div class="exp-company">${exp.company}</div>
//                <div class="exp-period">${exp.period}</div>
//                <div class="exp-desc">${exp.description}</div>
//           `;

//           container.appendChild(experienceDiv);
//      });
// }
renderWorkExperience();

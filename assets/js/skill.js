const skillData = {
     Language: [
          { name: "Visual Basic", img: "vb-net.png" },
          { name: "C#", img: "c-sharp.png" },
          { name: "javascript", img: "js.png" },
     ],
     Framework: [
          { name: "React.Js", img: "react.png" },
          { name: "Asp.Net", img: "asp-net.jpeg" },
          { name: "Codeigniter", img: "Ci.jpeg" },
          { name: "Node js", img: "node-js.png" },
          { name: "Android Studio (Java)", img: "Android_studio.png" },
     ],
     Database: [
          { name: "Ms.Access", img: "ms-access.png" },
          { name: "MySql", img: "mysql.png" },
          { name: "Sql Server", img: "sql-server.jpeg" },
          { name: "Firebase", img: "Firebase.png" },
     ],
};

const listTechData = document.getElementById("listTech");

function renderTechStack() {
     listTechData.innerHTML = "";

     for (let category in skillData) {
          const items = skillData[category];
          if (!items || items.length === 0) continue;

          const group = document.createElement("div");
          group.className = "tech-group mb-4";

          const header = document.createElement("div");
          header.className = "tech-group-header mb-3";
          header.innerHTML = `<h4><span class="accent-line"></span> ${category}</h4>`;
          group.appendChild(header);

          const row = document.createElement("div");
          row.className = "row g-3 tech-grid";

          items.forEach(({ name, img }) => {
               const card = document.createElement("div");
               card.className = "col-6 col-sm-4 col-md-3 col-lg-2";

               card.innerHTML = `
               <div class="custom-tech-card h-100 shadow-sm">
                    <img src="assets/img/${img}" class="card-img-top" alt="${name}">
                    <div class="card-body p-2">
                         <p class="card-title text-center m-0">${name}</p>
                    </div>
               </div>
               `;

               row.appendChild(card);
          });

          group.appendChild(row);
          listTechData.appendChild(group);
     }
}

renderTechStack();

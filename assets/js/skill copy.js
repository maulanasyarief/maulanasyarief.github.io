const lang = document.getElementById("ArraySkill");
const FremeWork = document.getElementById("ArraySkillframework");
const dataBase = document.getElementById("ArraySkillDB");

const arrayLangSkill = [
     ["Visual Basic", "vb-net.png"],
     ["C#", "c-sharp.png"],
     ["javascript", "js.png"],
     ["PHP", "php.jpeg"],
     ["Jquery", "jquery.png"],
     ["Java", "java.png"],
];
const arrFrameWork = [
     ["React.Js", "react.png"],
     [".Net Core", "c-sharp.png"],
     ["Asp.Net", "asp-net.jpeg"],
     ["Codeigniter", "Ci.jpeg"],
     ["Node js", "jquery.png"],
     ["Android", "android.jpeg"],
];

const arrDB = [
     ["MySql", "mysql.png"],
     ["Sql Server", "sql-server.jpeg"],
     ["Ms.Access", "ms-access.png"],
     ["Firebae", "Firebase.png"],
];

function cm01SkillLang() {
     arrayLangSkill.forEach(([name, imgSrc]) => {
          const card = document.createElement("div");
          card.className = "col-md-2";
          card.innerHTML = `<div class="card border-light mb-3">
                                <div class="card-body">
                                    <img src="/assets/img/${imgSrc}" class="img-skill mx-auto d-block ">
                                    <h5 class="card-title text-center mt-2">${name}</h5>
                                </div>
                            </div>`;
          lang.appendChild(card);
     });
}

function cm02FrameWork() {
     arrFrameWork.forEach(([name, imgSrc]) => {
          const card = document.createElement("div");
          card.className = "col-md-2";
          card.innerHTML = `<div class="card border-light mb-3">
                                <div class="card-body">
                                    <img src="/assets/img/${imgSrc}" class="img-skill mx-auto d-block">
                                    <h5 class="card-title text-center mt-2">${name}</h5>
                                </div>
                            </div>`;
          FremeWork.appendChild(card);
     });
}

function cm03Database() {
     arrDB.forEach(([name, imgSrc]) => {
          const card = document.createElement("div");
          card.className = "col-md-2";
          card.innerHTML = `<div class="card border-light mb-3">
                                <div class="card-body">
                                    <img src="/assets/img/${imgSrc}" class="img-skill mx-auto d-block">
                                    <h5 class="card-title text-center mt-2">${name}</h5>
                                </div>
                            </div>`;
          dataBase.appendChild(card);
     });
}
cm01SkillLang();
cm02FrameWork();
cm03Database();

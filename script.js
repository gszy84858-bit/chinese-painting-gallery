const works = [
  {
    title: "春晚",
    category: "山水",
    year: "2026",
    medium: "设色纸本",
    size: "待填写",
    image: "./assets/邱先生画作-1.JPG",
  },
  {
    title: "漓江烟云",
    category: "山水",
    year: "2026",
    medium: "水墨纸本",
    size: "待填写",
    image: "./assets/邱先生画作-2.JPG",
  },
  {
    title: "作品预留 003",
    category: "人物",
    year: "待填写",
    medium: "纸本",
    size: "待填写",
  },
  {
    title: "作品预留 004",
    category: "书画小品",
    year: "待填写",
    medium: "纸本",
    size: "待填写",
  },
  
];

const gallery = document.querySelector("#gallery");
const filters = document.querySelectorAll(".filter");

function renderWorks(category = "all") {
  const visibleWorks = works.filter((work) => category === "all" || work.category === category);

  gallery.innerHTML = visibleWorks
    .map((work, index) => {
      const artwork = work.image
        ? `<img src="${work.image}" alt="${work.title}" loading="${index === 0 ? "eager" : "lazy"}" />`
        : `<div class="work-placeholder" aria-hidden="true">待上传</div>`;

      return `
        <article class="work-card">
          <div class="work-frame">${artwork}</div>
          <div class="work-meta">
            <h3>${work.title}</h3>
            <p>${work.category} · ${work.year}</p>
            <p>${work.medium} · ${work.size}</p>
          </div>
        </article>
      `;
    })
    .join("");
}

filters.forEach((button) => {
  button.addEventListener("click", () => {
    filters.forEach((item) => item.classList.remove("is-active"));
    button.classList.add("is-active");
    renderWorks(button.dataset.filter);
  });
});

document.querySelector("#year").textContent = new Date().getFullYear();
renderWorks();

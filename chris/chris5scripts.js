
// ── 1. SKILLS: Expand / Collapse details on click ───────────
(function initSkillToggle() {
  const details = {
    "web development": "Experienced in building responsive websites and web apps using HTML, CSS, JavaScript, PHP, and SQL. Comfortable with both front-end design and back-end database integration.",
    "data analysis":   "Skilled in extracting insights from datasets using SQL queries, Excel pivot tables & charts, and SPSS for statistical analysis.",
    "skills":          "Strong soft-skill foundation including disciplined time management, creative problem-solving, and critical thinking developed through academic and sporting environments."
  };

  document.querySelectorAll(".skill-card").forEach(card => {
    const heading = card.querySelector("h3");
    if (!heading) return;

    const detail = document.createElement("p");
    detail.className = "skill-detail";
    detail.textContent = details[heading.textContent.trim().toLowerCase()] || "";
    detail.style.cssText = `
      display: none;
      margin-top: 14px;
      color: #b0b0b0;
      font-size: 0.92rem;
      line-height: 1.65;
      border-top: 1px solid #333;
      padding-top: 12px;
    `;
    card.appendChild(detail);

    const arrow = document.createElement("span");
    arrow.className = "skill-arrow";
    arrow.textContent = " ▼";
    arrow.style.cssText = "font-size:0.7rem; color:#d4af37; transition:transform 0.3s;";
    heading.appendChild(arrow);

    card.style.cursor = "pointer";
    card.addEventListener("click", () => {
      const isOpen = detail.style.display === "block";
      detail.style.display = isOpen ? "none" : "block";
      arrow.style.transform  = isOpen ? "rotate(0deg)" : "rotate(180deg)";
      card.style.borderColor = isOpen ? "#333" : "#d4af37";
    });
  });
})();


// 2. EDUCATION TABLE: Sort by Year (asc / desc toggle) 
(function initTableSort() {
  const container = document.querySelector(".table-container");
  if (!container) return;

  const btn = document.createElement("button");
  btn.id = "sort-btn";
  btn.innerHTML = "Sort by Year ↑";
  btn.style.cssText = `
    display: block;
    margin: 0 auto 18px auto;
    padding: 10px 24px;
    background: transparent;
    border: 1px solid #d4af37;
    color: #d4af37;
    border-radius: 8px;
    font-size: 0.88rem;
    letter-spacing: 1px;
    text-transform: uppercase;
    cursor: pointer;
    transition: background 0.25s, color 0.25s;
  `;
  btn.addEventListener("mouseenter", () => {
    btn.style.background = "#d4af37";
    btn.style.color = "#0d1321";
  });
  btn.addEventListener("mouseleave", () => {
    btn.style.background = "transparent";
    btn.style.color = "#d4af37";
  });

  container.parentElement.insertBefore(btn, container);

  let ascending = true;

  btn.addEventListener("click", () => {
    const table = container.querySelector(".premium-table tbody");
    if (!table) return;

    const rows = Array.from(table.querySelectorAll("tr"));
    rows.sort((a, b) => {
      const ya = parseInt(a.querySelector(".year-cell")?.textContent) || 0;
      const yb = parseInt(b.querySelector(".year-cell")?.textContent) || 0;
      return ascending ? ya - yb : yb - ya;
    });

    rows.forEach(row => table.appendChild(row));
    ascending = !ascending;
    btn.innerHTML = ascending ? "Sort by Year ↑" : "Sort by Year ↓";
  });
})();


// 3. HOBBIES: Read More / Read Less toggle 
(function initReadMore() {
  document.querySelectorAll(".hobby-item li").forEach(li => {
    const fullText = li.textContent.trim();
    const LIMIT = 120;
    if (fullText.length <= LIMIT) return;

    const short = fullText.slice(0, LIMIT).trimEnd() + "…";

    li.textContent = short;
    li.style.position = "relative";

    const toggle = document.createElement("button");
    toggle.textContent = "Read more";
    toggle.style.cssText = `
      background: none;
      border: none;
      color: #d4af37;
      font-size: 0.85rem;
      cursor: pointer;
      padding: 0 4px;
      font-weight: 600;
      letter-spacing: 0.5px;
      text-decoration: underline;
      text-underline-offset: 3px;
    `;

    let expanded = false;
    toggle.addEventListener("click", () => {
      expanded = !expanded;
      li.childNodes[0].textContent = expanded ? fullText + " " : short + " ";
      toggle.textContent = expanded ? "Read less" : "Read more";
    });

    li.textContent = short + " ";
    li.appendChild(toggle);
  });
})();


//  4. IMAGE LIGHTBOX 
(function initLightbox() {
  const overlay = document.createElement("div");
  overlay.id = "lightbox-overlay";
  overlay.style.cssText = `
    display: none;
    position: fixed;
    inset: 0;
    background: rgba(0,0,0,0.88);
    z-index: 9999;
    align-items: center;
    justify-content: center;
    backdrop-filter: blur(6px);
    animation: lbFadeIn 0.25s ease;
  `;

  const img = document.createElement("img");
  img.id = "lightbox-img";
  img.style.cssText = `
    max-width: 88vw;
    max-height: 82vh;
    border-radius: 12px;
    border: 2px solid #d4af37;
    box-shadow: 0 0 60px rgba(212,175,55,0.3);
    animation: lbZoomIn 0.3s ease;
    object-fit: contain;
  `;

  const closeBtn = document.createElement("button");
  closeBtn.innerHTML = "✕";
  closeBtn.style.cssText = `
    position: fixed;
    top: 24px;
    right: 32px;
    background: none;
    border: 1px solid #d4af37;
    color: #d4af37;
    font-size: 1.4rem;
    width: 44px;
    height: 44px;
    border-radius: 50%;
    cursor: pointer;
    line-height: 1;
    transition: background 0.2s;
    z-index: 10000;
  `;
  closeBtn.addEventListener("mouseenter", () => { closeBtn.style.background = "#d4af37"; closeBtn.style.color = "#000"; });
  closeBtn.addEventListener("mouseleave", () => { closeBtn.style.background = "none"; closeBtn.style.color = "#d4af37"; });

  const caption = document.createElement("p");
  caption.id = "lightbox-caption";
  caption.style.cssText = `
    color: #d4af37;
    margin-top: 12px;
    font-size: 0.9rem;
    letter-spacing: 1px;
    text-align: center;
  `;

  const inner = document.createElement("div");
  inner.style.cssText = "display:flex;flex-direction:column;align-items:center;";
  inner.appendChild(img);
  inner.appendChild(caption);
  overlay.appendChild(closeBtn);
  overlay.appendChild(inner);
  document.body.appendChild(overlay);

  const style = document.createElement("style");
  style.textContent = `
    @keyframes lbFadeIn { from { opacity:0 } to { opacity:1 } }
    @keyframes lbZoomIn { from { transform:scale(0.85); opacity:0 } to { transform:scale(1); opacity:1 } }
  `;
  document.head.appendChild(style);

  const closeLightbox = () => {
    overlay.style.display = "none";
    document.body.style.overflow = "";
  };

  closeBtn.addEventListener("click", closeLightbox);
  overlay.addEventListener("click", e => { if (e.target === overlay) closeLightbox(); });
  document.addEventListener("keydown", e => { if (e.key === "Escape") closeLightbox(); });

  document.querySelectorAll("img:not(header img)").forEach(image => {
    image.style.cursor = "zoom-in";
    image.addEventListener("click", () => {
      img.src = image.src;
      img.alt = image.alt;
      caption.textContent = image.alt || "";
      overlay.style.display = "flex";
      document.body.style.overflow = "hidden";
    });
  });
})();


// 5. SCROLL-TO-TOP BUTTON 
(function initScrollTop() {
  const btn = document.createElement("button");
  btn.id = "scroll-top-btn";
  btn.innerHTML = "↑";
  btn.title = "Back to top";
  btn.style.cssText = `
    position: fixed;
    bottom: 32px;
    right: 32px;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background: #d4af37;
    color: #0d1321;
    font-size: 1.3rem;
    font-weight: bold;
    border: none;
    cursor: pointer;
    box-shadow: 0 4px 20px rgba(212,175,55,0.4);
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.3s, transform 0.3s;
    z-index: 9000;
  `;

  document.body.appendChild(btn);

  window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
      btn.style.opacity = "1";
      btn.style.transform = "translateY(0)";
    } else {
      btn.style.opacity = "0";
      btn.style.transform = "translateY(20px)";
    }
  });

  btn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
})();


// 6. DARK / LIGHT MODE TOGGLE 
(function initDarkLightMode() {
  const lightStyles = document.createElement("style");
  lightStyles.textContent = `
    body.light-mode {
      background-color: #f0ebe0 !important;
      background-image: none !important;
      color: #1a1a1a !important;
    }
    body.light-mode header {
      background: #e8e0cc !important;
      border-bottom: 1px solid #c8b87a;
    }
    body.light-mode nav ul li a,
    body.light-mode header h1 {
      color: #1a1a1a !important;
    }
    body.light-mode .profile-card {
      background: rgba(255,255,255,0.85) !important;
      border-color: rgba(174,134,37,0.4) !important;
    }
    body.light-mode .hero-bio p {
      color: #2a2a2a !important;
    }
    body.light-mode .skill-card,
    body.light-mode .hobby-item {
      background: #ffffff !important;
      border-color: #d4c080 !important;
    }
    body.light-mode .skill-card li,
    body.light-mode .hobby-item li {
      color: #333 !important;
    }
    body.light-mode .premium-table td {
      background-color: #ffffff !important;
      color: #333 !important;
    }
    body.light-mode .premium-table tbody tr:hover td {
      background-color: #fdf6e0 !important;
    }
    body.light-mode h2 {
      color: #ae8625 !important;
    }
    body.light-mode .skill-detail {
      color: #555 !important;
      border-top-color: #ddd !important;
    }
    body.light-mode #hero {
      background-image: none !important;
      background: linear-gradient(135deg, #e8dfc8 0%, #f5edd8 100%) !important;
    }
  `;
  document.head.appendChild(lightStyles);

  const btn = document.createElement("button");
  btn.id = "theme-toggle";
  btn.textContent = "☀ Light";
  btn.style.cssText = `
    background: transparent;
    border: 1px solid #d4af37;
    color: #d4af37;
    padding: 6px 16px;
    border-radius: 20px;
    font-size: 0.82rem;
    font-weight: 600;
    letter-spacing: 1px;
    cursor: pointer;
    transition: background 0.25s, color 0.25s;
    white-space: nowrap;
  `;
  btn.addEventListener("mouseenter", () => {
    btn.style.background = "#d4af37";
    btn.style.color = "#0d1321";
  });
  btn.addEventListener("mouseleave", () => {
    btn.style.background = "transparent";
    btn.style.color = "#d4af37";
  });

  const header = document.querySelector("header");
  if (header) header.appendChild(btn);

  const saved = localStorage.getItem("theme");
  if (saved === "light") {
    document.body.classList.add("light-mode");
    btn.textContent = "🌙 Dark";
  }

  btn.addEventListener("click", () => {
    const isLight = document.body.classList.toggle("light-mode");
    btn.textContent = isLight ? "🌙 Dark" : "☀ Light";
    localStorage.setItem("theme", isLight ? "light" : "dark");
  });
})();

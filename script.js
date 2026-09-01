function formatColones(valor) {
  return "₡" + valor.toLocaleString("es-CR");
}

function waLink(producto) {
  const mensaje = `Hola Jimena, me interesan las ${producto.nombre} (${producto.talla}). ¿Siguen disponibles?`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(mensaje)}`;
}

function buildCard(producto) {
  const article = document.createElement("article");
  article.className = "card";

  const carousel = document.createElement("div");
  carousel.className = "carousel";

  const badge = document.createElement("span");
  badge.className = "carousel-badge";
  badge.textContent = producto.estado;
  carousel.appendChild(badge);

  const track = document.createElement("div");
  track.className = "carousel-track";
  producto.imagenes.forEach((src, i) => {
    const img = document.createElement("img");
    img.src = src;
    img.alt = `${producto.nombre} — foto ${i + 1}`;
    img.loading = "lazy";
    track.appendChild(img);
  });
  carousel.appendChild(track);

  if (producto.imagenes.length > 1) {
    const dots = document.createElement("div");
    dots.className = "carousel-dots";
    producto.imagenes.forEach((_, i) => {
      const dot = document.createElement("span");
      if (i === 0) dot.classList.add("active");
      dots.appendChild(dot);
    });
    carousel.appendChild(dots);

    track.addEventListener("scroll", () => {
      const index = Math.round(track.scrollLeft / track.clientWidth);
      [...dots.children].forEach((dot, i) => dot.classList.toggle("active", i === index));
    });
  }

  const body = document.createElement("div");
  body.className = "card-body";

  const title = document.createElement("h4");
  title.textContent = producto.nombre;
  body.appendChild(title);

  const detalle = document.createElement("p");
  detalle.className = "detalle";
  detalle.textContent = producto.detalle;
  body.appendChild(detalle);

  const tagRow = document.createElement("div");
  tagRow.className = "tag-row";
  const tallaTag = document.createElement("span");
  tallaTag.className = "tag talla";
  tallaTag.textContent = producto.talla;
  tagRow.appendChild(tallaTag);
  body.appendChild(tagRow);

  const priceRow = document.createElement("div");
  priceRow.className = "price-row";

  const price = document.createElement("span");
  if (producto.precio) {
    price.className = "price";
    price.textContent = formatColones(producto.precio);
  } else {
    price.className = "price consultar";
    price.textContent = "Consultar precio";
  }
  priceRow.appendChild(price);

  const cta = document.createElement("a");
  cta.className = "card-cta";
  cta.href = waLink(producto);
  cta.target = "_blank";
  cta.rel = "noopener";
  cta.innerHTML = 'Consultar <span class="cta-heart" aria-hidden="true">♥</span>';
  priceRow.appendChild(cta);

  body.appendChild(priceRow);
  article.appendChild(carousel);
  article.appendChild(body);
  return article;
}

function render() {
  const grid = document.getElementById("product-grid");
  PRODUCTS.forEach((producto) => grid.appendChild(buildCard(producto)));

  const count = PRODUCTS.length;
  document.getElementById("count-tag").textContent =
    `${count} ${count === 1 ? "par disponible" : "pares disponibles"}`;

  const generalMsg = encodeURIComponent("Hola Jimena, quisiera ver el catálogo de zapatos disponible.");
  const generalLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${generalMsg}`;
  document.getElementById("header-whatsapp").href = generalLink;
  document.getElementById("footer-whatsapp").href = generalLink;
}

document.addEventListener("DOMContentLoaded", render);

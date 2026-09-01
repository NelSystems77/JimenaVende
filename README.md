# Jimena Vende

Catálogo web de calzado infantil con carrusel táctil por producto y contacto directo por WhatsApp.

## Estructura
- `index.html` — página principal
- `styles.css` — estilos (paleta dorado / plateado / turquesa)
- `script.js` — arma las tarjetas de producto y los enlaces de WhatsApp
- `products.js` — **acá se edita el catálogo** (nombre, talla, precio, estado, fotos)
- `images/` — fotos de cada producto

## Cómo agregar o quitar un producto
Abrí `products.js` y copiá/editá un bloque dentro de `PRODUCTS`. Ejemplo:

```js
{
  id: "nombre-corto-unico",
  nombre: "Nombre del par",
  talla: "Talla 12",
  precio: 9000,       // usá null si preferís "Consultar precio"
  estado: "Nuevas",   // o "Usado, buen estado"
  detalle: "Una frase corta describiendo el detalle o marca.",
  imagenes: ["images/mi-foto-1.jpeg", "images/mi-foto-2.jpeg"]
}
```

Subí las fotos nuevas a la carpeta `images/` con esos mismos nombres.

## Publicar en GitHub Pages
Desde la carpeta del proyecto:

```bash
git init
git remote add origin https://github.com/NelSystems77/JimenaVende.git
git add .
git commit -m "Sitio Jimena Vende"
git branch -M main
git push -u origin main
```

Luego en GitHub: **Settings → Pages → Source: rama `main`, carpeta `/root`** y guardar. El sitio queda disponible en:

`https://nelsystems77.github.io/JimenaVende/`

## Número de WhatsApp
Está definido una sola vez en `products.js`, en la constante `WHATSAPP_NUMBER`. Cambialo ahí si el número cambia.

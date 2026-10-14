# ZAVAR Servicios Generales Garantizados — Landing Page

## Estructura del proyecto
```
index.html          → estructura y textos de la página
css/styles.css      → todos los estilos
js/main.js          → menú móvil (abrir/cerrar)
assets/img/         → coloca aquí las fotos reales
```

## Cómo agregar tus fotos
Busca los bloques con la clase `imgph` en `index.html` y reemplaza ese
`<div class="imgph">...</div>` por:
```html
<img src="assets/img/nombre-de-tu-foto.jpg" alt="Descripción de la foto">
```
Reduce las fotos antes de subirlas (200 a 500 KB cada una).

## Pendientes por confirmar con el cliente
- Nombre definitivo del negocio.
- Qué cubre la palabra "garantizado".
- Si seguirá ofreciendo cámaras, cercos e intercomunicadores.
- Cómo atiende fuera de Lima (coordinación, viáticos).

## Galería en mosaico
Todas las diapositivas tienen el mismo marco. Los espacios vacíos ("Espacio para foto") se rellenan así:
dentro del bloque `<div class="mcell" ...>` reemplaza `<div class="imgph">...</div>` por
`<img src="assets/img/tu-foto.jpg" alt="Descripción" loading="lazy">` (no toques el `style`).

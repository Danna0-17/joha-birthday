# Para Joha 🎂

Página de cumpleaños hecha con HTML + CSS + JS puro, pensada para publicarse en GitHub Pages.

## Estructura

```
index.html          → portada ("Hi...", botón "Ir al regalo")
page2.html           → mesa de recuerdos: tarjetas + "little things" + cierre
sections/
  admiro.html         → Lo que más admiro de ti (placeholder)
  gracias.html        → Gracias por... (placeholder)
  recuerdos.html      → Pequeños recuerdos (placeholder)
  versiculos.html     → Algunos versículos (placeholder)
css/style.css        → paleta, tipografía y componentes compartidos
js/script.js         → corazones flotantes decorativos
assets/              → aquí van tus fotos cuando las tengas
```

## Nombres exactos de cada imagen (guárdalas en `assets/`)

| Dónde | Nombre del archivo | Notas |
|---|---|---|
| Portada — gatito | `assets/gato.png` | También puede ser `.gif` — ver nota abajo |
| Portada — ramo izquierdo | `assets/ramo-izquierda.png` | |
| Portada — ramo derecho | `assets/ramo-derecha.png` | |
| Tarjeta "Lo que más admiro de ti" | `assets/icono-admiro.png` | |
| Tarjeta "Gracias por..." | `assets/icono-gracias.png` | |
| Tarjeta "Pequeños recuerdos" | `assets/icono-recuerdos.png` | |
| Tarjeta "Algunos versículos" | `assets/icono-versiculos.png` | |
| Photobooth izquierda | `assets/photobooth-izq-1.png` `-2.png` `-3.png` | 3 fotos verticales |
| Photobooth derecha | `assets/photobooth-der-1.png` `-2.png` `-3.png` | 3 fotos verticales |
| Diario "admiro" — fondo | `assets/admiro-cuaderno.png` | textura de hoja/cuaderno |
| Diario "admiro" — foto | `assets/admiro-foto.png` | |
| Diario "admiro" — gif | `assets/admiro.gif` | |
| Mapa de "recuerdos" | `assets/mapa-colombia.png` | silueta o mapa de Colombia |
| Fotos de "recuerdos" | `assets/recuerdo-01.png` … `assets/recuerdo-12.png` | una por cada punto del mapa |

**¿Puedes usar un GIF?** Sí, sin problema — un `<img>` en HTML reproduce
gifs animados automáticamente, sin necesitar JS extra. Donde quieras
usar un gif en vez de un png (por ejemplo el gatito), solo:
1. Guarda el archivo con extensión `.gif` en `assets/`.
2. Abre el `.html` correspondiente y cambia el `src="assets/gato.png"`
   por `src="assets/gato.gif"`.

Recomendación de peso: como esto se va a ver en un celular, conviene
que cada gif pese menos de ~3–4 MB para que cargue rápido (puedes
comprimirlo en ezgif.com si hace falta).

## Cómo seguir desarrollando cada apartado

Cada archivo en `sections/` tiene un bloque marcado con la clase `.tbd`
("por desarrollar"). Ese es el único lugar que necesitas tocar para
llenar el contenido real: reemplázalo por texto, fotos (`<img src="../assets/foto.jpg">`)
o lo que quieras. El resto de la página (fondo, corazones, botón de
volver) ya está resuelto y es igual en todas las subpáginas.

Si quieres agregar una quinta tarjeta más adelante:
1. Crea `sections/nueva.html` copiando cualquiera de las existentes.
2. Agrega una tarjeta nueva dentro de `.board` en `page2.html`, con su
   propio emoji, color (`c1`–`c6` ya están definidos en el CSS) e
   inclinación (`--tilt`).

## Publicar en GitHub Pages

1. Crea un repositorio nuevo en GitHub (puede ser público o privado
   — Pages funciona con ambos si tienes GitHub Pro, o público si es
   una cuenta gratuita).
2. Sube todo el contenido de esta carpeta a la raíz del repositorio.
3. Ve a **Settings → Pages**.
4. En **Source**, elige la rama `main` y la carpeta `/ (root)`.
5. Guarda. En un par de minutos GitHub te dará un enlace como
   `https://tu-usuario.github.io/nombre-repo/` — ese es el que le
   compartes a Joha.

## Notas

- No se usa ningún framework: abrir `index.html` directamente en el
  navegador también funciona para probar cambios antes de subir.
- El sitio es responsive y respeta el foco de teclado para
  accesibilidad básica.

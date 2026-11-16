# ISTQB CTFL — Portal de estudio

Sitio estático para practicar el examen ISTQB Certified Tester Foundation Level (CTFL).
No necesita backend ni base de datos: se sirve como archivos estáticos.

## Contenido

- `index.html` — interfaz del portal
- `app.js` — lógica del simulador (preguntas, puntaje, navegación)
- `styles.css` — estilos
- `data/questions.js` — banco de preguntas por capítulo
- `assets/` — imágenes y recursos

## Cómo ejecutarlo

```bash
cd portal
python3 -m http.server 8090
```

Abrir en el navegador: http://localhost:8090/

También funciona abriendo `index.html` directamente, aunque el servidor evita
problemas con las rutas relativas y la caché.

## Publicarlo

Al ser estático, se puede subir tal cual a GitHub Pages, Netlify, Vercel o
cualquier hosting de archivos. Solo hay que respetar la estructura de carpetas.

## Notas

- Las preguntas viven en `data/questions.js`; para agregar o corregir, edita ese archivo.
- Uso educativo y de práctica personal.

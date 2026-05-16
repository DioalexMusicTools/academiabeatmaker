# Academia Beatmaker — Landing Page

## Paso 1 — Agregar la foto de Dioalex

1. Renombra la foto `DSC07290.JPG` a `dioalex.jpg`
2. Cópiala dentro de la carpeta `/public/`

## Paso 2 — Instalar dependencias (una sola vez)

Abre la terminal dentro de la carpeta del proyecto y ejecuta:

```bash
npm install
```

## Paso 3 — Probar en local (opcional)

```bash
npm run dev
```

Abre tu navegador en: http://localhost:3000

## Paso 4 — Subir a GitHub

1. Ve a github.com y crea un repositorio nuevo llamado `academia-beatmaker`
2. En la terminal ejecuta:

```bash
git init
git add .
git commit -m "primera version academia beatmaker"
git branch -M main
git remote add origin https://github.com/TU_USUARIO/academia-beatmaker.git
git push -u origin main
```

(Reemplaza TU_USUARIO con tu usuario de GitHub)

## Paso 5 — Deploy en Vercel

1. Ve a vercel.com e inicia sesión con tu cuenta de GitHub
2. Haz clic en "Add New Project"
3. Selecciona el repositorio `academia-beatmaker`
4. Vercel detecta Next.js automáticamente — haz clic en "Deploy"
5. En 2 minutos tu sitio estará en vivo en una URL tipo: `academia-beatmaker.vercel.app`

## Estructura del proyecto

```
academia-beatmaker/
├── app/
│   ├── globals.css
│   ├── layout.js
│   └── page.js          ← aquí está todo el contenido de la página
├── public/
│   └── dioalex.jpg      ← pon aquí la foto del instructor
├── next.config.js
├── package.json
├── postcss.config.js
└── tailwind.config.js
```

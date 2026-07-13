# Sitio completo de Dioalex

Incluye:

- Página principal de Academia Beatmaker en `/`
- Landing privada de Artist Lab en `/artist-lab/`
- Exportación estática compatible con hosting tradicional
- Imágenes necesarias para ambas páginas
- Metadata `noindex` en Artist Lab

## Requisitos

- Node.js 20.9 o superior
- npm 10 o superior

## Desarrollo local

```bash
npm install
npm run dev
```

Abre:

- `http://localhost:3000/`
- `http://localhost:3000/artist-lab/`

## Crear archivos para el hosting

```bash
rm -rf .next out
npm run build
```

La carpeta que debes subir al hosting es `out/`.

Comprueba antes de subir que exista:

```text
out/artist-lab/index.html
```

## Publicación

Sube **todo el contenido interno** de `out/` a la carpeta pública del dominio, normalmente `public_html`.

La landing quedará en:

```text
https://www.dioalex.com/artist-lab/
```

No subas la carpeta `app/` ni los archivos fuente directamente al hosting. El hosting debe recibir el contenido compilado de `out/`.

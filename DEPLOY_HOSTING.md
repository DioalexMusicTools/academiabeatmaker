# Publicación en www.dioalex.com

## Opción recomendada: subir la compilación lista

1. Abre el archivo `dioalex-website-ready-to-upload.zip`.
2. Extrae su contenido.
3. Sube **todos los archivos y carpetas extraídos** a la carpeta pública del dominio, normalmente `public_html`.
4. Conserva intacta la carpeta `_next` y la carpeta `artist-lab`.
5. Comprueba estas direcciones:
   - `https://www.dioalex.com/`
   - `https://www.dioalex.com/artist-lab/`

La carpeta `artist-lab` debe contener `index.html`. No cambies su nombre.

## Si deseas volver a compilar

Requiere Node.js 20.9 o superior.

```bash
npm install
rm -rf .next out
npm run build
```

Luego sube el contenido de `out/` a `public_html`.

## Página oculta

Artist Lab no está enlazada desde la portada y contiene metadata `noindex, nofollow`. No tiene contraseña: cualquier persona con el enlace directo podrá abrirla.

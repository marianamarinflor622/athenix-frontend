# 🌐 Athenyx - Plataforma Web Inclusiva

**Athenyx** es una plataforma fullstack diseñada para crear y compartir recursos educativos y visuales de forma accesible. Pensada para comunidades neurodivergentes, liderazgos femeninos y proyectos de impacto social. Desarrollada con enfoque inclusivo, seguro y elegante.

---

## 🚀 Características Principales

* Interfaz SPA con React y Vite
* Navegación fluida y scroll infinito
* Diseño responsive con paleta elegante rose gold
* Autenticación de administradora segura
* Panel privado para subida de imágenes y videos
* Accesibilidad visual, auditiva y cognitiva como base
* Sección creativa interactiva con comentarios
* Backend robusto con Java Spring Boot y PostgreSQL

---

## ⚙️ Tecnologías y Versiones

| Herramienta    | Versión |
| -------------- | ------- |
| React          | 18+     |
| Vite           | 6+      |
| Spring Boot    | 3+      |
| Java           | 21      |
| PostgreSQL     | 15      |
| CSS Modules    | ✅       |
| Framer Motion  | ✅       |
| JWT (previsto) | 🔒      |

---

## 🔐 Seguridad Aplicada

* Sanitización de entradas en formularios (`sanitize()`)
* Validaciones mínimas y patrones de email
* Autocompletado desactivado en campos sensibles
* Acceso protegido tras login exitoso
* Feedback de errores sin revelar datos
* Preparado para tokens y HTTPS en producción
* Upload con `FormData` validado y controlado

---

## 🛠️ Panel de Administradora

Formulario privado accesible desde `/mariana` y autenticado manualmente.

* Inputs para título, descripción, tipo y archivo
* Soporta imágenes y videos (`.jpg`, `.png`, `.mp4`)
* Vista previa en sección pública
* Visual enfocado en claridad y accesibilidad

---

## 🧩 Instalación Local

Para ejecutar el proyecto en tu máquina local:

### 🔧 Frontend (React)

```bash
cd athenyx-frontend
npm install
npm run dev
```

### 🔧 Backend (Spring Boot)

```bash
cd athenyx-backend
./mvnw spring-boot:run
```

---

## 👨‍💼 Autora

**Mariana Marín Flor**
Desarrolladora Fullstack Junior | Enfoque en accesibilidad, inclusión y proyectos con impacto.

* 👩 GitHub: [marianamarinflor622](https://github.com/marianamarinflor622)
* 💼 LinkedIn: [Mariana Marín](https://www.linkedin.com/in/mariana-marin-1b6268348/)
* 📌 Ciudadanía cultural, liderazgo inclusivo y aprendizaje constante.

---

## 📄 Licencia

Este proyecto está licenciado bajo la **Licencia MIT**. Consulta el contenido a continuación:

```
MIT License

Copyright (c) 2025 Mariana Marín Flor

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
```

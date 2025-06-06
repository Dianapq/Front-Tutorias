# Front-Tutorias

# 

## Descripción 

Este frontend corresponde al proyecto **Plataforma Web de Tutorías Universitarias**, una aplicación donde los estudiantes puedan ofrecer tutorías en materias específicas y otros estudiantes puedan agendar sesiones según disponibilidad, de forma rápida, organizada y segura.

La interfaz permite la navegación por distintos roles (estudiante/tutor), agendamiento de sesiones y visualización de paneles.

El desarrollo se basa en tecnologías web estándar:

- **HTML5** para la estructura
- **CSS3** para los estilos
- **JavaScript (Vanilla)** para la lógica y conexión con el backend

---

## Estructura del Proyecto

Front-Tutorias/
├── index.html # Página de inicio
├── script.js # Lógica principal de la app (API, DOM)
├── style.css # Estilos globales
├── pages/
│ ├── register.html # Registro de estudiantes y tutores
│ └── panel.html # Panel de gestión de sesiones
└── assets/ # (opcional) Carpeta para imágenes, íconos o logos

--------

## Restricción Tecnológica

Lenguaje obligatorio: JavaScript (frontend y backend).

## Arquitectura Frontend

Este proyecto sigue una arquitectura modular y organizada por responsabilidades:

### 1. `index.html`

- Punto de entrada de la aplicación.
- Incluye enlaces a `script.js` y `style.css`.
- Contiene la estructura base de navegación y presentación.

### 2. `script.js`

- Lógica para interactuar con el backend (`fetch`).
- Manejo de formularios, sesiones y redireccionamientos.

### 3. register.html

- Página para registro de usuarios.
- Puede diferenciar roles de "Tutor" y "Estudiante".
- Utiliza formularios conectados al backend por medio de script.js.

### 4. panel.html

- Panel donde los tutores visualizan sus sesiones programadas.
- Integra llamadas a la API para listar, aceptar o rechazar solicitudes.

## Despliegue

1. Directamente en el navegador
    seleccionar index.html
    click derecho --> open with live server
 
2. Ejecuta el servidor en desarrollo
    npm install -g serve
    serve .


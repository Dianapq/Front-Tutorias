const API_BASE = "http://localhost:5000/api";

// Mostrar modal de login
function mostrarLogin() {
  document.getElementById("loginModal").style.display = "flex";
}

// Iniciar sesión usando correo y contraseña
async function iniciarSesion() {
  try {
    const email = document.getElementById("userEmail").value;
    const password = document.getElementById("userPassword").value;

    if (!email || !password) {
      alert("Por favor, completa todos los campos");
      return;
    }

    const response = await fetch(`${API_BASE}/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      credentials: 'include',
      body: JSON.stringify({ email, password })
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Error en la autenticación");
    }

    const data = await response.json();
    
    if (!data._id || !data.role) {
      throw new Error("Respuesta del servidor incompleta");
    }

    localStorage.setItem("userId", data._id);
    localStorage.setItem("userRole", data.role);
    localStorage.setItem("userName", data.name || '');

    mostrarOpciones();
    document.getElementById("loginModal").style.display = "none";

  } catch (error) {
    console.error("Error detallado:", error);
    alert(error.message || "Error al conectar con el servidor");
  }
}

// Mostrar menú según el rol
function mostrarOpciones() {
  const name = localStorage.getItem("userName");
  const role = localStorage.getItem("userRole");
  
  // Obtener referencias a los elementos
  const authButtons = document.getElementById("authButtons");
  const opcionesElement = document.getElementById("opciones");
  const panelTutorLink = document.getElementById("panelTutorLink");
  const bienvenidaElement = document.getElementById("bienvenida");
  const loginModal = document.getElementById("loginModal");

  // Ocultar botones de autenticación y modal de login
  if (authButtons) {
    authButtons.style.display = "none";
  }
  
  if (loginModal) {
    loginModal.style.display = "none";
  }

  // Mostrar opciones
  if (opcionesElement) {
    opcionesElement.style.display = "block";
  }

  // Mostrar/ocultar panel de tutor según el rol
  if (panelTutorLink && role === "tutor") {
    panelTutorLink.style.display = "inline-block";
  }

  // Mostrar mensaje de bienvenida
  if (bienvenidaElement && name) {
    bienvenidaElement.innerText = `¡Bienvenido, ${name}!`;
  }
}

// Cerrar sesión
function cerrarSesion() {
  localStorage.clear();
  
  // Mostrar botones de autenticación
  const authButtons = document.getElementById("authButtons");
  const opcionesElement = document.getElementById("opciones");
  
  if (authButtons) {
    authButtons.style.display = "block";
  }
  
  if (opcionesElement) {
    opcionesElement.style.display = "none";
  }
  
  // Redirigir a la página principal
  window.location.href = "/";
}

// Mostrar menú si ya está logueado
window.onload = () => {
  const userId = localStorage.getItem("userId");
  if (userId) {
    mostrarOpciones();
  }
};

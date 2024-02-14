const $submit = document.getElementById("submit"),
    $password = document.getElementById("password"),
    $username = document.getElementById("username"),
    $visible = document.getElementById("visible"),
    $remember = document.getElementById("remember");

// Función para cargar las credenciales guardadas al cargar la página
window.onload = function() {
    const savedUsername = localStorage.getItem("username");
    const savedPassword = localStorage.getItem("password");

    if (savedUsername && savedPassword) {
        $username.value = savedUsername;
        $password.value = savedPassword;
    }
};

// Mostrar u ocultar la contraseña según el estado del checkbox
document.addEventListener("change", (e) => {
    if (e.target === $visible) {
        if ($visible.checked === false) $password.type = "password";
        else $password.type = "text";
    }
});

document.addEventListener("click", (e) => {
    if (e.target === $submit) {
        e.preventDefault();
        const usernameValue = $username.value.trim();
        const passwordValue = $password.value.trim();
        // Verificar si las credenciales son válidas
        if (usernameValue === "admin" && passwordValue === "admin2024.") {
            // Guardar las credenciales en localStorage si se ha marcado la opción de recordar
            if ($remember.checked) {
                localStorage.setItem("username", usernameValue);
                localStorage.setItem("password", passwordValue);
            }
            // Redireccionar a la página de inicio
            window.location.href = "../index.html";
        } else {
            alert("Usuario o contraseña incorrectos");
        }
    }
});


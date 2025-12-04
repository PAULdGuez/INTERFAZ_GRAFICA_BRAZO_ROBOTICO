document.addEventListener('DOMContentLoaded', () => {

    // Inicialización automática
    document.querySelector(".qt-tab").classList.add("active");
    document.querySelector(".qt-panel").classList.add("active");

});

// Función global para los botones
function openTab(evt, tabID) {

    document.querySelectorAll(".qt-panel")
        .forEach(panel => panel.classList.remove("active"));

    document.querySelectorAll(".qt-tab")
        .forEach(tab => tab.classList.remove("active"));

    document.getElementById(tabID).classList.add("active");
    evt.currentTarget.classList.add("active");
}

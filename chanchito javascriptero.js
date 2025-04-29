// Muestra el panel de vista previa al pasar el cursor
function showPreview(event, index) {
    const panel = document.getElementById("preview-panel");
    const title = document.getElementById("preview-title");
    const images = document.getElementById("preview-images");

    if (!books || !books[index]) return;

    title.textContent = books[index].title;
    images.innerHTML = `<img src="${books[index].preview[0]}" alt="${books[index].title}">`;

    panel.style.left = `${event.pageX + 10}px`;
    panel.style.top = `${event.pageY + 10}px`;
    panel.classList.add("show");
}

// Oculta el panel de vista previa
function hidePreview() {
    const panel = document.getElementById("preview-panel");
    panel.classList.remove("show");
}

// Aplica el filtro de accesibilidad seleccionado
document.addEventListener("DOMContentLoaded", () => {
    const selector = document.getElementById('filtro-color');
    const pagina = document.getElementById('pagina');

    if (selector && pagina) {
        selector.addEventListener('change', () => {
            pagina.classList.remove('filtro-protanopia', 'filtro-deuteranopia', 'filtro-tritanopia');

            if (selector.value !== 'normal') {
                pagina.classList.add(`filtro-${selector.value}`);
            }
        });
    }

    // Muestra u oculta el panel de accesibilidad
    const toggleBtn = document.getElementById('toggle-accesibilidad');
    const panel = document.getElementById('accesibilidad-panel');

    if (toggleBtn && panel) {
        toggleBtn.addEventListener('click', () => {
            panel.style.display = panel.style.display === 'none' || panel.style.display === '' ? 'block' : 'none';
        });
    }
});

pagina.classList.add(`filtro-${selector.value}`);



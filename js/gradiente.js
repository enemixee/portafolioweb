let interactive = true;
const blendLayer = document.querySelector('.blend');

// Fondo negro inicial
document.body.style.background = `linear-gradient(45deg, rgb(0, 0, 0), rgb(0, 0, 0))`;

document.addEventListener("mousemove", (event) => {
    if (!interactive) return;

    let x = event.clientX / window.innerWidth;
    let y = event.clientY / window.innerHeight;

    let gray1 = Math.floor(x * 180);
    let gray2 = Math.floor(y * 120);

    document.body.style.background = `linear-gradient(45deg, rgb(${gray1}, ${gray1}, ${gray1}), rgb(${gray2}, ${gray2}, ${gray2}))`;
});

document.addEventListener("scroll", () => {
    // Aquí puedes agregar lo del oscurecimiento si gustas
});
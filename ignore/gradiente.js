    let interactive = true; // Estado de la animación
    const blendLayer = document.querySelector('.blend'); // Seleccionamos la capa de mezcla

    document.addEventListener("mousemove", (event) => {
        if (!interactive) return; // Si está en transición, no hacer cambios

        let x = event.clientX / window.innerWidth;
        let y = event.clientY / window.innerHeight;

        let gray1 = Math.floor(x * 180);
        let gray2 = Math.floor(y * 180);

        document.body.style.background = `linear-gradient(45deg, rgb(${gray1}, ${gray1}, ${gray1}), rgb(${gray2}, ${gray2}, ${gray2}))`;
    });

    // document.addEventListener("click", () => {
    //     interactive = false; // Desactiva el efecto de mouse temporalmente
    //     blendLayer.style.opacity = 1; // Muestra la capa de mezcla blanca

    //     setTimeout(() => {
    //         interactive = true; // Reactiva el efecto después de 3 segundos
    //         blendLayer.style.opacity = 1; // Oculta la capa de mezcla
    //     }, 500000); // Espera 3 segundos antes de reactivar
    // });

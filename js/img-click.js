 document.querySelectorAll('.imgx-clickable').forEach((img) => {
      img.addEventListener('click', () => {
        const overlay = document.createElement('div');
        overlay.className = 'imgx-overlay';

        const expandedImg = document.createElement('img');
        expandedImg.src = img.src;
        expandedImg.alt = img.alt;
        expandedImg.className = 'imgx-expanded';

        const closeButton = document.createElement('button');
        closeButton.className = 'imgx-close-btn';
        closeButton.innerHTML = '✖';
        
        // Función para cerrar
        function closeOverlay() {
          if (overlay && closeButton) {
            document.body.removeChild(overlay);
            document.body.removeChild(closeButton);
            document.removeEventListener('keydown', escListener);
          }
        }

        // Cerrar con Escape
        function escListener(e) {
          if (e.key === 'Escape') {
            closeOverlay();
          }
        }

        closeButton.addEventListener('click', closeOverlay);
        document.addEventListener('keydown', escListener);

        overlay.appendChild(expandedImg);
        document.body.appendChild(overlay);
        document.body.appendChild(closeButton);
      });
    });
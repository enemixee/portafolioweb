    const btn = document.getElementById('btnSubir');

    window.addEventListener('scroll', () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const screenHeight = window.innerHeight;

      if (scrollTop > screenHeight) {
        btn.classList.add('show');
      } else {
        btn.classList.remove('show');
      }
    });

    btn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
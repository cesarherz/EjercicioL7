const btnScrollArriba = document.getElementById('btnScrollArriba');

        window.addEventListener('scroll', function() {
            if (window.scrollY > 300) {
                btnScrollArriba.classList.add('show');
            } else {
                btnScrollArriba.classList.remove('show');
            }
        });

        btnScrollArriba.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
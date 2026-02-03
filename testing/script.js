  
  <script>
    (function(){
      const intro = document.getElementById('tsukihimeIntro');
      const main  = document.getElementById('pageMain');

      intro.addEventListener('animationend', (e) => {
        if (e.animationName !== 'introFade') return;

        document.body.classList.add('intro-done');
        main.classList.remove('page--hidden');
        main.classList.add('page--show');

        intro.remove();
      });
    })();
  </script>
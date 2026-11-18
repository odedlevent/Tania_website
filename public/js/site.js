(function () {
  var root = document.documentElement;
  function setLang(l) {
    root.lang = l; root.dir = l === 'he' ? 'rtl' : 'ltr';
    document.getElementById('lang').textContent = l === 'he' ? 'EN' : 'עב';
    try { localStorage.setItem('lang', l); } catch (e) {}
  }
  var saved; try { saved = localStorage.getItem('lang'); } catch (e) {}
  setLang(saved || 'he');
  document.getElementById('lang').onclick = function () { setLang(root.lang === 'he' ? 'en' : 'he'); };

  // hide past shows
  var today = new Date().toISOString().slice(0, 10), any = 0;
  document.querySelectorAll('.show').forEach(function (s) {
    if (s.dataset.date < today) s.hidden = true; else any++;
  });
  if (!any) document.querySelector('.empty').hidden = false;

  // click-to-load YouTube
  document.addEventListener('click', function (e) {
    var v = e.target.closest('.vid');
    if (v && !v.classList.contains('on')) {
      v.classList.add('on');
      v.innerHTML = '<iframe src="https://www.youtube-nocookie.com/embed/' + v.dataset.id + '?autoplay=1&rel=0" allow="autoplay; encrypted-media; fullscreen" allowfullscreen></iframe>';
    }
    var z = e.target.closest('.zoom');
    if (z) { e.preventDefault(); var lb = document.getElementById('lightbox'); lb.firstElementChild.src = z.href; lb.hidden = false; }
    else if (e.target.id === 'lightbox' || e.target.closest('#lightbox')) document.getElementById('lightbox').hidden = true;
  });
})();

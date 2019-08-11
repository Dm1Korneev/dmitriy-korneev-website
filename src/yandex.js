/* eslint-disable no-undef */
/* eslint-disable eqeqeq */
/* eslint-disable no-param-reassign */
/* eslint-disable no-empty */

((d, w, c) => {
  (w[c] = w[c] || []).push(() => {
    try {
      w.yaCounter49252267 = new Ya.Metrika2({
        id: 49252267,
        clickmap: true,
        trackLinks: true,
        accurateTrackBounce: true,
        webvisor: true,
      });
    } catch (e) {}
  });

  const n = d.getElementsByTagName('script')[0];
  const s = d.createElement('script');
  const f = () => {
    n.parentNode.insertBefore(s, n);
  };
  s.type = 'text/javascript';
  s.async = true;
  s.src = 'https://mc.yandex.ru/metrika/tag.js';

  if (w.opera == '[object Opera]') {
    d.addEventListener('DOMContentLoaded', f, false);
  } else {
    f();
  }
})(document, window, 'yandex_metrika_callbacks2');

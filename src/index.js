import './css/index.css';
import './js/yandex';
import './js/google';

import runtime from 'serviceworker-webpack-plugin/lib/runtime';

if ('serviceWorker' in navigator) {
  runtime.register();
}

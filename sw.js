/*
const CACHE_NAME = 'memoflow-cache-v1'; // キャッシュ名にバージョンを追加

// インストールイベント
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll([
        '/', 
        '/index.html',
        '/src/style.css',
        '/src/script.js',
        'https://pipocorp-japan.github.io/asset/memoflow.png?v=1740701329166'
      ]);
    })
  );
});

// アクティベートイベント：古いキャッシュを削除
self.addEventListener('activate', (event) => {
  const cacheWhitelist = [CACHE_NAME]; // 現在のキャッシュ名をホワイトリストに追加
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (!cacheWhitelist.includes(cacheName)) {
            return caches.delete(cacheName); // 古いキャッシュを削除
          }
        })
      );
    })
  );
});

// フェッチイベント
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      // キャッシュがヒットすればそれを返す
      if (cachedResponse) {
        return cachedResponse;
      }

      // キャッシュにない場合、ネットワークから取得
      return fetch(event.request).catch(() => {
        // オフライン時に必要ならば、デフォルトのオフラインページやエラーページを返す
        return caches.match('/offline.html'); // オフライン用のページを設定しておけば
      });
    })
  );
});
*/
'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "fafdabe4c8ad184da0064bc92976dc81",
"index.html": "6264a600430b3f679276a456fab69c82",
"/": "6264a600430b3f679276a456fab69c82",
"main.dart.js": "5b17529c80556ce8ff2a9ff72e2996c4",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"sql.js": "9599b9b3426175f6a6e444f8bdd1f164",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "fecdbfe5231a52cacfc0bcd8dcc68fa4",
"assets/AssetManifest.json": "fadf7586f1b55e41719e7d263a67d0a6",
"assets/NOTICES": "97cc98cadb01192369500bede95adb97",
"assets/FontManifest.json": "211cbb6fac7d91ae2ead93b81e54bfff",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_AMS-Regular.ttf": "657a5353a553777e270827bd1630e467",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Script-Regular.ttf": "55d2dcd4778875a53ff09320a85a5296",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size3-Regular.ttf": "e87212c26bb86c21eb028aba2ac53ec3",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Typewriter-Regular.ttf": "87f56927f1ba726ce0591955c8b3b42d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Caligraphic-Bold.ttf": "a9c8e437146ef63fcd6fae7cf65ca859",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Bold.ttf": "ad0a28f28f736cf4c121bcb0e719b88a",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Bold.ttf": "9eef86c1f9efa78ab93d41a0551948f7",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Fraktur-Regular.ttf": "dede6f2c7dad4402fa205644391b3a94",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Regular.ttf": "5a5766c715ee765aa1398997643f1589",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Italic.ttf": "d89b80e7bdd57d238eeaa80ed9a1013a",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Math-Italic.ttf": "a7732ecb5840a15be39e1eda377bc21d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Italic.ttf": "ac3b1882325add4f148f05db8cafd401",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Fraktur-Bold.ttf": "46b41c4de7a936d099575185a94855c4",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size2-Regular.ttf": "959972785387fe35f7d47dbfb0385bc4",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Regular.ttf": "b5f967ed9e4933f1c3165a12fe3436df",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size1-Regular.ttf": "1e6a3368d660edc3a2fbbe72edfeaa85",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Caligraphic-Regular.ttf": "7ec92adfa4fe03eb8e9bfb60813df1fa",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size4-Regular.ttf": "85554307b465da7eb785fd3ce52ad282",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-BoldItalic.ttf": "e3c361ea8d1c215805439ce0941a1c8d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Math-BoldItalic.ttf": "946a26954ab7fbd7ea78df07795a6cbc",
"assets/packages/window_manager/images/ic_chrome_unmaximize.png": "4a90c1909cb74e8f0d35794e2f61d8bf",
"assets/packages/window_manager/images/ic_chrome_minimize.png": "4282cd84cb36edf2efb950ad9269ca62",
"assets/packages/window_manager/images/ic_chrome_maximize.png": "af7499d7657c8b69d23b85156b60298c",
"assets/packages/window_manager/images/ic_chrome_close.png": "75f4b8ab3608a05461a31fc18d6b47c2",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/youtube_player_flutter/assets/speedometer.webp": "50448630e948b5b3998ae5a5d112622b",
"assets/packages/math_keyboard/fonts/CustomKeyIcons.ttf": "b0bace3f25c2bd05862680e5ad4c6b54",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/assets/icons/backup.svg": "ec24d1d30eef846b8a97e849c852aefb",
"assets/assets/icons/list.svg": "4d73b46c52688823410b384c5ba31d74",
"assets/assets/icons/task_alt.svg": "8eb1b1e0a5d72eec41121ea922a03cb2",
"assets/assets/icons/undone.svg": "2e580daf7b6059c5ac6c6075357b1167",
"assets/assets/icons/code_blocks.svg": "e8b32a6946901175497a49ade8a527b0",
"assets/assets/icons/user.svg": "38681900f06e6da2f44e3b344e6fb214",
"assets/assets/icons/circle.svg": "9d064907698dce20b19a31bdeae9a235",
"assets/assets/icons/dock_to_right.svg": "b1b56ead1941cbbf3e38f6329c9f25f9",
"assets/assets/icons/cancel.svg": "104e1f293426ffb34866fe1eed7eca8c",
"assets/assets/icons/tips_and_updates.svg": "3dbd62c97a0926340ddae6b5bc9250fb",
"assets/assets/icons/tag.svg": "1cdc528184290ffcd68aeb6baabae7bd",
"assets/assets/icons/due_date.svg": "483e8c83a017c150a4aa2ab2db870bc5",
"assets/assets/icons/right_panel_close.svg": "6ae90f4a6ba67a4197f41fd27af6f613",
"assets/assets/icons/format_quote.svg": "24e098f2ad0286e14af9e7a5161b8c85",
"assets/assets/icons/flag_fill.svg": "47f01ae967fd50f0194aa50727ee3dfe",
"assets/assets/icons/arrow_left.svg": "4f6069fe795cb9a10655148d52d298f8",
"assets/assets/icons/settings.svg": "859bdc26f1756dd6ed5c2019c3776c51",
"assets/assets/icons/download.svg": "8c7d94908726610d4e4db6b822b81ea3",
"assets/assets/icons/arrowRIght.svg": "aa6eb14c9a17a6efc51c02a908cd0815",
"assets/assets/icons/ok.svg": "ec18bd64c64e4d5c920e2d0928c9abc9",
"assets/assets/icons/today_fav.svg": "029b36386d3d8726240a487e63c0f86f",
"assets/assets/icons/flag.svg": "b05cc8f85e289dbe8be34bfacc37deed",
"assets/assets/icons/segment.svg": "4bcbfbe5a1afa1ac766a3ce13c4bb950",
"assets/assets/icons/arrow_right.svg": "e0455a93730516845c7a0036d0de8f13",
"assets/assets/icons/check.svg": "28cc51ccedaa84da1b0929f2d7f2429d",
"assets/assets/icons/upload_file.svg": "fba5b72e923021e04804c73b917c31c1",
"assets/assets/icons/drag_indicator.svg": "c618d7f5a2fd684e156ba5f6aca26a06",
"assets/assets/icons/add.svg": "8693b36742a17761d354eeea27fa1120",
"assets/assets/icons/close.svg": "ddef63e3f3b70f8b9822571ec4834e18",
"assets/assets/icons/menu_open.svg": "0f006d9bcba42e1778b997e0812a6328",
"assets/assets/icons/keyboard_return.svg": "a6a86c9dbbb0bdec104008f6f3c3e90d",
"assets/assets/icons/img_holder.svg": "9895a70ab0654935807fbb7ef40066c4",
"assets/assets/icons/arrow_down.svg": "bde989e51091aff09ab9f710cd7bd86f",
"assets/assets/icons/send.svg": "775c55601ee8f99bbce38235c2885023",
"assets/assets/icons/menu_close.svg": "d47854b7ef6908c465607dc91340ba51",
"assets/assets/icons/more.svg": "dbe834cb7df73aaa340aeeee82609859",
"assets/assets/icons/format_h2.svg": "108c86387c411f3c98d14bccded0e104",
"assets/assets/icons/format_h3.svg": "bc9b29ca7ac004c4d399befa4c92d4a9",
"assets/assets/icons/format_list_bulleted.svg": "55e11e45489d22b345eb75481c852cd0",
"assets/assets/icons/checklist.svg": "5b6951195563e390c01b9baee8888383",
"assets/assets/icons/wlist.svg": "cc9ee44ba998f00dbfe7568faf7ea2de",
"assets/assets/icons/edit.svg": "adcbc4aa4c6e6cfd0486e67f1e6065c2",
"assets/assets/icons/format_list_numbered.svg": "aad867af998b64d83f94b2c4f4e8d0d2",
"assets/assets/icons/format_h1.svg": "db6cf05ab4d289376e51bcd5a2085a7a",
"assets/assets/icons/adjust.svg": "eb5456ff524335616470b8c6649878d4",
"assets/assets/icons/circle_fill.svg": "0fdbfc1f9443fb692e81c798e5471676",
"assets/assets/icons/delete.svg": "3390fe184d62916531b5ee4f53cc7f46",
"assets/assets/icons/task_done.svg": "44dbce8494fc5f93655ac0d2dd27dd78",
"assets/assets/icons/file_present.svg": "628fd7f48e06638c8edc5eec0aab40ca",
"assets/assets/icons/sort.svg": "4f93723bad7a20407c85a5f46ef6deb1",
"assets/assets/icons/calendar.svg": "6f9f5c15be53148a9ec58182fb0c6537",
"assets/assets/icons/tune.svg": "0deb4084af4d31e68180bb515cb86119",
"assets/assets/icons/done.svg": "1719e8d296ea387dba04abf6cc6721f2",
"assets/assets/icons/avatar.svg": "d6d2632af8c998679f08f83c22e205a1",
"assets/assets/icons/project.svg": "0294d7ef1aa89ca709bbc1cf914f9974",
"assets/assets/wallpaper/theme01.jpeg": "6a649bee5b75671e9e9dde6c06c86871",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}

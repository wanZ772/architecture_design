'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "16ec07ff1a7451275f7286035ba8c84d",
".git/config": "e2d694dbf7cef98ca0dd390b50e8ed2d",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "086d32d516a00b7ce22833149a24a096",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "7bd29831227067af4bfb9c0ed002ce8f",
".git/logs/refs/heads/master": "a23358a3082b4d0ff277fd2086e8dbe2",
".git/logs/refs/remotes/architecture_design/master": "be23818f44a7107f46cce63c9ef0ebb3",
".git/objects/07/74c17c0fa7a7e87e24a6935830998d92b52c75": "bd6f798fe3e3942c14dc558521f59ca4",
".git/objects/16/5ce0ddf03a820a38f48cba9aa0c9df9b6e6b79": "970c7b604262ccb20ec82f39104e9cfb",
".git/objects/17/7dd65414bfffa200002c9ea7218e2185546fd5": "a6e58053a2ce73df95b024466a2dc1ed",
".git/objects/19/0b87d3a7764d4d1cf39e38ec01aaec25063b99": "5e22708342fcf99068f34f5a41f4ed53",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "baf057c4b90805f732d24ac22cb10345",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "19044025d8304d81100c4e12af0ce161",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "96e3285980ba51fe6eaf0295fd60ff80",
".git/objects/30/eb3ac583815bd0864c0911917027fd44810d74": "da47afa3561ada316d9706df5816399a",
".git/objects/38/a6fd72399fb6157de143cc949d86ae91bcf5f6": "46c64ceeb227cc8a9a00df2985f52e38",
".git/objects/3c/be8474bde43fe54dc7d6713b6cdc772afc2cd4": "4a886e74badc813717da29eef3d7d749",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "0bb82caa96c962530864f28e847f4ab9",
".git/objects/4a/39079e580dc9be820cba2fae41238c49eaa798": "9fb736ffb37b61e228f0403ed08e43ba",
".git/objects/4b/22c5aead53bf3a5a9a860e1152c0c0184e600a": "0aca8c61ef3fd07c8be92912d042c775",
".git/objects/4e/e53534ece61d95e52c6dce9044581dfac05ec4": "2470a3783015292d7813ed6486f60372",
".git/objects/52/a6055dee3a3e0c65ce8afe91476a3b0599d678": "4ac72f31d869868618fd6db7f1984984",
".git/objects/5a/7b05e1be311772247124911182fda78fde2cec": "426ccef613faa4fdaa7fe1ebbfb0334a",
".git/objects/6f/9cad4c116bc8d72e2497226abb5c05ee64982c": "d591a779859e5269a502d81064617f75",
".git/objects/71/46d68627fe1656e98734ed681ad83b7fca643b": "b30761fce835e779ae274a7d67f4baba",
".git/objects/71/7117947090611c3967f8681ab1ac0f79bca7fc": "26aff0b4be772e8bf4e3aa148cef22bc",
".git/objects/71/7809363ed19bdd7e1d78f6e421e40a96bc29e3": "2a7e1a5ee4e80fd645045d866db32950",
".git/objects/74/6ed0d6bec15975bb863d95120e8f320fb62aa0": "7b439f29949554f2575cb4b9d42944ce",
".git/objects/75/cca20aee1b0781f7be689800ce03ad3e3bf4d1": "8ccdd3af2b7e2ab335580ff77b84f89a",
".git/objects/78/cd7aa2c8ea44a93800e647ce6e832ef1a4dd58": "6b700db98bd4640124e216c05ddb236f",
".git/objects/79/33a80a10dc82792937c34aca87344959cdf48f": "5e0d3eb61ed49fb3e2cda73b12e5800b",
".git/objects/80/d231761cd3a285c4e039560c727a603a2dbf50": "4f78c929a8c0698bacb69c6b3cc7503e",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "0a804c6a015be41c2f1307e32bf6b5bc",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e35fdc55764d9ed14315f6ff50093ab3",
".git/objects/89/912e7a23b95b9722b81c08f32a0e161bc8c83c": "32fdb2e4c995894aa6034d3d2cf748cc",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "b25b26893b8f92a4f583677ba27f0a7f",
".git/objects/91/fb44f1d837646eb329ff58b3ec54b3fd9538f0": "33e4a65da1eb6977f9801e90ddbf3289",
".git/objects/94/bfb1463ad8331bfd687bc751b8920b133da744": "501d5ab5716c2ed4f4e1e47221629c14",
".git/objects/9e/8d6640dfde0bb4dcc871a9301e65e2a837f518": "ee1fcd1afdeb85882c0b2478649daf4d",
".git/objects/af/742adee0a85dd21ea96cbd84182e30e085d6cf": "0b78a2619a6aaf413ef84aef7ca14492",
".git/objects/b5/0254288cc6319d153c4af1d64870d95ee2436f": "3d929b619b43ce0cdaec16ed67513540",
".git/objects/b5/b56a1e011243b376b0b4c250ae8199131ca5b0": "2d98e7c72048c741f291e940976589cf",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "b0c549c0aed479932cf26d094f76630e",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "9de9f2c6fa0aea6ee34b79162e9fc361",
".git/objects/ba/0544a2d9fb3958e4747d4c8cacdf2ab2a22af6": "9638f9d086058d4f9e8d76362b3e7e47",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "5523d4e8db4b01938143b79a2a707ffd",
".git/objects/c0/83ac37f1537b9a8b7f29325a6193b6860de15b": "4a8de735f5e168f8f116ff5f5ec6fba6",
".git/objects/c5/221bcea230defe14e04fa76ad4804c3000fde6": "ae71a153107f984f736b621eba89a94b",
".git/objects/c5/f4bc2a4da91586f3005813077f0d0aa9040f82": "f2069cc735619c31824182a9254d47e5",
".git/objects/c6/18ab7d00580df6ff87b3d5d7db76575bda1700": "453f39e983a49aeb64a5727210ced39b",
".git/objects/c7/1e052b9c928b9896c4df6fadf07ae6e3a828a4": "2290081139781e3467b47e744d30bc1c",
".git/objects/d3/bb4f640b84db11cf4e085946a732cac1e4bee7": "6b0ec394631343cf823c8292219a96fa",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "9dbf5b01e391c548c8343be8d1d4b04e",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "5a9f3522bf38ba5dd54f15a0f75cb0d7",
".git/objects/d8/69899bc0096915c22fa039f6c5cf49be65e07b": "3edbcb96c25335f83d8d619b15bf7063",
".git/objects/e8/2c5850db3a3482d0c954a4dc122c02de555ce7": "d13d543bd63eb7dc360abee9ae50c375",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "01d8a507be49f15714be4d17b6947e52",
".git/objects/eb/b49618a27cd125ed6059a0ef8aea3beb8736d1": "15afca57d906079598c602d7fa66bce8",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "aa30b45014e5ab878c26ecce9ea89743",
".git/refs/heads/master": "80ca95d068a73685c57b500caf16e273",
".git/refs/remotes/architecture_design/master": "80ca95d068a73685c57b500caf16e273",
"assets/asset/examples/european.jpg": "d40d6f6e854551d1a8f7111517cbf932",
"assets/asset/examples/gothic.jpg": "1d7d441875196a19c6cc09327c5e6de1",
"assets/asset/examples/islamic.jpg": "db737de73ce284d3aca03dae9104a249",
"assets/asset/examples/japanese.jpeg": "54bd3c7afe24f93fe73dc336353bc695",
"assets/asset/examples/japanese.jpg": "f3d863d2dcf962610a547715857198c0",
"assets/asset/examples/modern.jpg": "338a7b6250c68d94ad2289bf24d3b3e2",
"assets/asset/examples/nature.jpg": "fd494de7a6b6165fcbdddb98a234908e",
"assets/asset/examples/roman.jpg": "0cdccd66356c7d9e6ffcb6b630e8f176",
"assets/asset/fonts/AnthoniaSignature.ttf": "086d5db648e6d77dfaec24be8d65934c",
"assets/asset/fonts/ArabicRamadan.ttf": "15eea4f27bf1b02a6f2ae97181f987c1",
"assets/asset/fonts/Canterbury.ttf": "45f5fadb3dbf0140e10b498c7cb030a6",
"assets/asset/fonts/NaturalForestDemoRegular.ttf": "e4c359f1d3b2a1b3d3510506818bca73",
"assets/asset/fonts/SamuraiBlast.ttf": "0bbc24f4e4bd21b09418677918b9fa81",
"assets/asset/fonts/ZenDots-Regular.ttf": "9bdc5e0fad9a4bf6d9aafdafef775904",
"assets/asset/under_development/wallpaper.gif": "d70b1fbd70d72f95be92d5d5a324ea18",
"assets/asset/under_development/wallpaper.png": "44cdbbe8c8495b7fd19c208264801864",
"assets/AssetManifest.bin": "3380b7a6d1395a15019a77cfded71347",
"assets/AssetManifest.bin.json": "7e751d9fe43dc528e56d87755c340530",
"assets/AssetManifest.json": "513b464583e69d4c56d99a39f6e47f50",
"assets/FontManifest.json": "8e1d5df6ece5232955f8414ebccfca9a",
"assets/fonts/MaterialIcons-Regular.otf": "657ac62f522f02ba7e27c4fccdd0fda8",
"assets/NOTICES": "d961156ccb78bbfa2596d5fa947f3251",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "1661df4e5f452c4d6fe606419ca8763b",
"/": "1661df4e5f452c4d6fe606419ca8763b",
"main.dart.js": "fc6192ebed646676f48be28443183695",
"manifest.json": "a91dfcbdd97d3244cd1baa03c372eeb6",
"version.json": "4e89de4a57577a79fba84fa41803b615"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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

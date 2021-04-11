'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "c125fb54e413556b540facc520102ce3",
".git/config": "05a1282bf5a71707d977d7d2863f4344",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "5ab7a4355e4c959b0c5c008f202f51ec",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "7bf1fcc5f411e5ad68c59b68661660ed",
".git/index": "841db8cb787dee3c5844c14c3af0b909",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "98868b8cecbba7aa7cc3f4a6dd303b14",
".git/logs/refs/heads/gh-pages": "1faba0ebb1baf08c1206f305ae064b56",
".git/logs/refs/heads/master": "1f05c48b60a122bf43bbb89045ee56f7",
".git/logs/refs/remotes/origin/gh-pages": "761c7a0b589cd4f2601f6c2c2c9dc4e1",
".git/logs/refs/remotes/origin/master": "d45b5e0c401bd8d7fa935333440f1de3",
".git/objects/01/59d32d9781b2f7385f04f034f0b35b645a14f6": "3e4407476bae5bd02d75f01cf6c02706",
".git/objects/07/ec2c04bd3d16aa4fd2e5cc13fadcebf739db2a": "23b99ab9089ea6a7a4b943097b4301f6",
".git/objects/0f/29282031c727982e5ddeb65ad82d717aefeab6": "6111756d2356ae4ee1db7dedd4f2b116",
".git/objects/17/fb372532361f663d60710a6a6cd1a68a38aeb3": "e4b3efc4e92f199344f84af5102b702d",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/23/4c3370b3aad6d5bfbef3ca94ecb35fea0795a1": "674acf106845b6b185d4639d2fa9ac6b",
".git/objects/30/142a0e485c38512b746b113394ecc778d99692": "0202461f9cceda189ca630917b6d948b",
".git/objects/30/996f53b94eda9dc471df4550cb07ddd91e4a2b": "82de8591fc8ad3d652ce96516f70d9ff",
".git/objects/36/0a7f776ca0b9a20fda76b74156e1e29f47741f": "b11446d84e96881c13dab41babb04824",
".git/objects/38/e5537edd341e9c8fea069bd414ebcefde10729": "1b60702ff6ca55e794676b23225f6d81",
".git/objects/3e/d8384b07f287ca8674a9e86bf58a3c1ee71266": "8483d31835398473421fcd6acb27c2d1",
".git/objects/41/403a3e0776cbcf69d981b828f200f945b84181": "3b98dfcbc311600ac30fe8c1e46acd92",
".git/objects/41/eca1f5fe136075443a87cd8a6fe5fde433aafe": "117205e3cabfb22dd60b42a8989a37b4",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4f/153d7b480dbf57f6c4a42addc26320f495b4db": "383557aaaa893c6213dadf71e6928bd4",
".git/objects/63/5fb0eaa67b7ed26754e24f643df554fa32fda6": "1a53d6798497908aa531f1386d26822d",
".git/objects/63/dcba675448e3abeb02e8b020871fed24b5a071": "f81e95eec91b386e22677b25bb8d85d9",
".git/objects/68/42d29a4fc4cf2510b5baeb7cb15aa0e1f2fb1a": "63510c885321cc4edeb836fd4b438e40",
".git/objects/70/edc2db6acb2bb5232a19147e1f3b07ea0d616c": "93d47b8951c776f34e345e4014ff20db",
".git/objects/73/3fb6e9d71fe10c9febd5a5cedcc3bc95a81de9": "aa1c3727b20cd67ebd2dc2dcc38cd8de",
".git/objects/74/608744a236dfb330585b81a25afd8a9dfe7fb6": "80d362907cd3bdb8011ef3c647dd7eb8",
".git/objects/76/01ddd2747739757a6f9b71c482b44df3cf9a5d": "e7e20b05985c2b1e4a93a4cf19ba31cc",
".git/objects/77/fc1188627f6a5ebc577c9fa2f1493713a1f772": "9d7a75fd3fd7da56e8ac9b93931d73c2",
".git/objects/78/104e22c667f7edeeeb54dc458ee62676dc50e4": "fa24d899d6a03d53caa161a16cb6e936",
".git/objects/79/24bc8dce9e073828a44b686e26eed3572aa01e": "d3838e332c175926bde6888952194781",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7b/586421876dcfd541255edeb20e2b198c4a2285": "943bc28a8504f3d18999712007a00620",
".git/objects/88/ac9893c916ce7f5ca7493680ece3a7a4300eb5": "0c8c180c78beb72989213f27af835d96",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/aac037b461ba6f8b7a9003fee8799ddf9f3e8e": "a29c65b3da55ed73749e338d184b7adf",
".git/objects/8d/089faea4987373c4a6e68c43e10ade2d10318b": "13fc79d16fdd39e755f2797941d0636f",
".git/objects/8f/547813df612ac47166f78e2ddccdde22fa33af": "fb1f3b1f8d43fba3f7680db1659d57f3",
".git/objects/90/a113325a008cecc1d4501f732715b0cc09c7b3": "addfcfbd8ec876a662e54d4d9f647b30",
".git/objects/96/1491268c27714bab67d5069fa20d2339522b18": "7cb70ade4a938a5dd4ea92eb54d70dd7",
".git/objects/9f/a459f454396a4c9072dde65332af1551c3ee73": "fb48463bfd156a12747a2babbc730784",
".git/objects/a0/4520cdbfe20cc68c3c06348108959a049bb142": "26996f0a4c50234605295b58937e913c",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a8/3a17d54b6dc2156c855c6580301cefc9c8d017": "6525101be8d70b808a809af9c83fa4ad",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/be/6c14642ae8f86bcaa1d4864b2c86aafc6047e7": "5aea0785e55381c8ad99930061247aef",
".git/objects/c7/6076546ed500028f40777e0bbdadbb155da0bc": "053c718d2f05775dedd8462a8a01cc85",
".git/objects/d0/3e22b6d4b3a083f1bb9086add8902481b591fb": "43ef4fedbf4bb4faa4cd0b6f443961c5",
".git/objects/d1/a68ca10da0f063013eae61ade71341bfa8dcb3": "497f1596daa918bbc32be22a86594f3f",
".git/objects/d2/08ae292e6444f7f07763c6c367723a56a0edbf": "f5a0db52b203407f3a93fd9c05f7b043",
".git/objects/dc/a521b4a79e5dc07551edf2a98aa02d96b70847": "ddafb91e90898c08df4d0da8940d5c0a",
".git/objects/de/6982a6528748fd7e78da4a9bfafd0d512f37c4": "5bce82717340cc69aadb601f4477197d",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e6/9de29bb2d1d6434b8b29ae775ad8c2e48c5391": "c70c34cbeefd40e7c0149b7a0c2c64c2",
".git/objects/e8/4671f06d3bfb878688659e465b03d42ad12411": "ee8f4afcfc0ee661420364cbacc75de6",
".git/objects/ef/b3f950d50ce0ccd89622af3bb0859b1670f638": "d00da082db478989bac49e96d1b8be5c",
".git/objects/f2/5787c93ad00665f0f797a43ab397f0628a273e": "59e425d1456034072d902c75d18ec75f",
".git/objects/f2/cd2b6a886f89f73a9bc41b235e9eae9334090c": "aeafadede1bec2c148d59c42e2444a72",
".git/objects/f4/c26b0d4ec3eb93f6017ed20c69899b9ec95a8e": "3a7379b49fbc6ba003b81a41442db796",
".git/objects/f9/69b396888faba1e9ec51aec63d0ce5433ab4b9": "b9f6d1e362fcbd4b856d3128170b436e",
".git/objects/fb/7980687e5b5652798a1ace662eed3d9bfafdf4": "c965f1d161bf75fe3c5ad7be02efb14d",
".git/refs/heads/gh-pages": "686ab91ba29e548f8b5c244c87e2e0b3",
".git/refs/heads/master": "ace523005ecf332ba00133a3200ab2db",
".git/refs/remotes/origin/gh-pages": "686ab91ba29e548f8b5c244c87e2e0b3",
".git/refs/remotes/origin/master": "ace523005ecf332ba00133a3200ab2db",
"assets/AssetManifest.json": "3097839701b8c430b182754669c2d120",
"assets/assets/fonts/NotoSansJP-Light.otf": "78d6753b4b8aaef38ad581eb248606ef",
"assets/assets/fonts/Oswald-VariableFont_wght.ttf": "a6e5446a7c5789aabc9b37eaaf72134d",
"assets/assets/imgs/background.jpg": "a55f6e69d4beeee62f09ba634ea9b0a6",
"assets/assets/imgs/profile.jpg": "11e6e856d9adefe9ad760542774a4422",
"assets/FontManifest.json": "94e28e1f28212b9ff8761f95d1f55fc1",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/NOTICES": "dddf727fa5d23699bd27ddf5da516e1f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "102c7432eb404d28e1366e72b64d5fe8",
"/": "102c7432eb404d28e1366e72b64d5fe8",
"main.dart.js": "a4d2b6dd93541a296680b0a80e08c064",
"manifest.json": "ead1ad29a2bc504ed9369573fe4f1349",
"version.json": "082a1a8d9f3b2cd6ec9e24024c66ed7c"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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

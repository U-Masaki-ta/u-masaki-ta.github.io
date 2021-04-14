'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "86d206c30ad4d17d3aa5277728d93437",
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
".git/index": "249e6398aa63f7f9795c1e2e2cf5707a",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "14b2e27434ac05c76d5655c23bf048ea",
".git/logs/refs/heads/gh-pages": "95203163e1a764a3234357fbe28af7e8",
".git/logs/refs/heads/master": "1f05c48b60a122bf43bbb89045ee56f7",
".git/logs/refs/remotes/origin/gh-pages": "1cd020c12ad84355b779c311e65c12bc",
".git/logs/refs/remotes/origin/master": "d45b5e0c401bd8d7fa935333440f1de3",
".git/objects/00/357cb9c97408f7904bdc0a73bb937b2a4041e4": "2affc5f764f2b8ab79c72f94c283b42c",
".git/objects/01/59d32d9781b2f7385f04f034f0b35b645a14f6": "3e4407476bae5bd02d75f01cf6c02706",
".git/objects/01/99149503543e50cf324e275e3ba5fab08fa672": "7c46d323ca7d03de51defbe02bc4aa54",
".git/objects/02/3ddf4de82748174c76835114b98f3ca642ffef": "71a3c1b00a21dff742938508fc808d96",
".git/objects/07/b225caf80d0d23330c6b051db4e095e828b4cc": "fdd105004006a4f18c8258eaaa8e7724",
".git/objects/07/ec2c04bd3d16aa4fd2e5cc13fadcebf739db2a": "23b99ab9089ea6a7a4b943097b4301f6",
".git/objects/09/426a02d5d04722c0be16d5522ea2cdab7ed476": "f727d782f737ff945a218294c880c266",
".git/objects/0a/84c6adfe23d93fe82733678c6865b3aea9ba2f": "b6ae0c07f7fb4bd369fd26e73c1a72f8",
".git/objects/0f/29282031c727982e5ddeb65ad82d717aefeab6": "6111756d2356ae4ee1db7dedd4f2b116",
".git/objects/13/eba7aecda79601eee2a32d934c6621c0912d70": "f1c86ec9bf02505d475fd09d6182daad",
".git/objects/16/cda14eacd94c0eceb14e062ed5660578e34a34": "79e3036bd3073ef2aa09d53ea783366e",
".git/objects/17/32d65bd9256f50d1bd3056a247566b48b7b71d": "36ccae342ffcd5f6d6abeba1a8b9d343",
".git/objects/17/fb372532361f663d60710a6a6cd1a68a38aeb3": "e4b3efc4e92f199344f84af5102b702d",
".git/objects/18/2a1a3f734fc1b7d712c68b04c29bad9460d6cd": "1bba1f4a35d54be68a427791a2795d4d",
".git/objects/19/ead80f77efe7cf421c7cd00337c346649fe4fb": "d0fe620f96d212a8c269b3275e1b78b8",
".git/objects/1f/513bdec7197693099d150660267dd2a0c728a9": "957a91bb8a5c4047ccca68b5b6807cba",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/23/4c3370b3aad6d5bfbef3ca94ecb35fea0795a1": "674acf106845b6b185d4639d2fa9ac6b",
".git/objects/26/0a48207679a0e1d14f3d6db676296c8a9aadd2": "80be7a46052147736f1607b3a52a24b5",
".git/objects/2d/18e5736dcaca9cbbad2eac1d31a1ee0e905c5d": "4a40c33d885b5491cd66b1af43a8957b",
".git/objects/30/142a0e485c38512b746b113394ecc778d99692": "0202461f9cceda189ca630917b6d948b",
".git/objects/30/996f53b94eda9dc471df4550cb07ddd91e4a2b": "82de8591fc8ad3d652ce96516f70d9ff",
".git/objects/35/39924a34f23b646d18f0c504f25b8ac5dc403a": "19d7cea5a8cd23efe9b762c16cd6e54e",
".git/objects/36/0a7f776ca0b9a20fda76b74156e1e29f47741f": "b11446d84e96881c13dab41babb04824",
".git/objects/36/f4ef1552cb5f46d510b9b986f430e34a78ea98": "e2c6a70c5c81081bfa86be4d91100384",
".git/objects/38/e5537edd341e9c8fea069bd414ebcefde10729": "1b60702ff6ca55e794676b23225f6d81",
".git/objects/38/f075a9afeb7f322f78f9ecfaafc02bfa79d639": "69e40ab11a4f46bbbe6f822685d2ca8c",
".git/objects/3c/5cec7563e3df4aa32886fa52bc36aa272999e9": "dd54a87a21ac85005af577e4442d92ee",
".git/objects/3e/d8384b07f287ca8674a9e86bf58a3c1ee71266": "8483d31835398473421fcd6acb27c2d1",
".git/objects/3f/442ea125d3c891cc2284384eac7b7c4f7a979b": "97bf3da066a2f99147e25183774f9655",
".git/objects/41/403a3e0776cbcf69d981b828f200f945b84181": "3b98dfcbc311600ac30fe8c1e46acd92",
".git/objects/41/eca1f5fe136075443a87cd8a6fe5fde433aafe": "117205e3cabfb22dd60b42a8989a37b4",
".git/objects/43/0ab0a3e538204fb76bda0df20ced6107ce1329": "2a07120f71f429d95f115f29681ea1cb",
".git/objects/43/6b61f0e52af85f03a035ec29e6c4e8132f7d18": "93d40a905301a4b9b097ec387f2cb4e6",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/7ccabd32d4fce6d40c4ff383612d48a3400ef4": "0d851999ad9a04342fe95444189849d5",
".git/objects/4e/72f8cb100d33850ff0141e009afc30cd0c79b0": "69c18a248e39b6a42e25578fdf7b1ca6",
".git/objects/4f/153d7b480dbf57f6c4a42addc26320f495b4db": "383557aaaa893c6213dadf71e6928bd4",
".git/objects/4f/e155f25ba1f206bb528607432a75cc5a626473": "dd74a958ae7e5f093c276df37b780025",
".git/objects/51/0d22b451b554bbecaf7d63cbd2b3a7f7f06029": "22b9179ba511d94f1d52b0e427199379",
".git/objects/51/f4ae5404fc79be09e69171bfc9d34d48810297": "cbccb909471e4568310a97f46dd1e258",
".git/objects/52/c1ed3ff697b76810ee33467e8cb59c6056bdd2": "4a413823f88053695529c479f4629045",
".git/objects/52/cebe15c4cbc41fe0fd944dfd5132dfb2dec452": "471b54362c86b392009102c483a175ad",
".git/objects/54/ac44d50d6413394242ea1700e6bd849c36bd9d": "6a2f0cb95e7f93b2bfa424995d112e45",
".git/objects/57/0b6256eaa1f443d69c4f6f511c91351638a17b": "b3877f7b18cd545eaa55f8435258759a",
".git/objects/5c/bdfcbbc24df310b2eb3fb3807bb1b448ba46d9": "633f1779d0abfc18cc0db79f57d7442d",
".git/objects/60/c1d1ac345f7d33d85e4daa765fcc0bd9a54283": "6929d85ffdaf596e9ea0d618e498499f",
".git/objects/62/32fd0c8975f0c56256d3f6e2890505912f5d03": "887ec10a707acecf34b8e68c1b54665a",
".git/objects/63/5fb0eaa67b7ed26754e24f643df554fa32fda6": "1a53d6798497908aa531f1386d26822d",
".git/objects/63/dcba675448e3abeb02e8b020871fed24b5a071": "f81e95eec91b386e22677b25bb8d85d9",
".git/objects/64/17d3102e805202fa25634cdeda0cf8de2ca952": "451810dcaf4374233475f6441d87b4b9",
".git/objects/64/6f0ed6b32dd0562bd35f27237dea4f8b94a317": "b292b6f62e521a0e47aa22ddaa92c41f",
".git/objects/68/42d29a4fc4cf2510b5baeb7cb15aa0e1f2fb1a": "63510c885321cc4edeb836fd4b438e40",
".git/objects/68/dfbab8738e1c91c0bd511a06417e433f714913": "90dcec8fa297b79865fee2256140d53c",
".git/objects/6b/6908214d482f667776a28312ce57ec27140787": "a9f156f5e9f135a213a2ea05977daf1b",
".git/objects/6d/c4a0b1fd685f704c584db98a8b0061f7add078": "f41a13dc467302ae46714b2fc86b1efa",
".git/objects/70/edc2db6acb2bb5232a19147e1f3b07ea0d616c": "93d47b8951c776f34e345e4014ff20db",
".git/objects/73/3fb6e9d71fe10c9febd5a5cedcc3bc95a81de9": "aa1c3727b20cd67ebd2dc2dcc38cd8de",
".git/objects/74/608744a236dfb330585b81a25afd8a9dfe7fb6": "80d362907cd3bdb8011ef3c647dd7eb8",
".git/objects/76/01ddd2747739757a6f9b71c482b44df3cf9a5d": "e7e20b05985c2b1e4a93a4cf19ba31cc",
".git/objects/77/fc1188627f6a5ebc577c9fa2f1493713a1f772": "9d7a75fd3fd7da56e8ac9b93931d73c2",
".git/objects/78/104e22c667f7edeeeb54dc458ee62676dc50e4": "fa24d899d6a03d53caa161a16cb6e936",
".git/objects/79/24bc8dce9e073828a44b686e26eed3572aa01e": "d3838e332c175926bde6888952194781",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7b/586421876dcfd541255edeb20e2b198c4a2285": "943bc28a8504f3d18999712007a00620",
".git/objects/7b/f4bc966f3cc16e4d2b172faa11361b87277088": "1f5e067e574d5d6b3da5578aca02aef7",
".git/objects/80/aca30394a1534bb4b12ac6ba4da927e09695ef": "05d3195268c63fbc8060c4569db227bb",
".git/objects/88/ac9893c916ce7f5ca7493680ece3a7a4300eb5": "0c8c180c78beb72989213f27af835d96",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/2937a07697e6b3be91ba974f4d8f85177b575a": "d6214beec9d8fe37591fdf59c629946d",
".git/objects/8a/7d57ae91455bb51426fd02194e206aec35c8df": "7c0389d4f9f5cb970b055e6a78e8e4e6",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/aac037b461ba6f8b7a9003fee8799ddf9f3e8e": "a29c65b3da55ed73749e338d184b7adf",
".git/objects/8d/089faea4987373c4a6e68c43e10ade2d10318b": "13fc79d16fdd39e755f2797941d0636f",
".git/objects/8f/547813df612ac47166f78e2ddccdde22fa33af": "fb1f3b1f8d43fba3f7680db1659d57f3",
".git/objects/90/a113325a008cecc1d4501f732715b0cc09c7b3": "addfcfbd8ec876a662e54d4d9f647b30",
".git/objects/96/1491268c27714bab67d5069fa20d2339522b18": "7cb70ade4a938a5dd4ea92eb54d70dd7",
".git/objects/9e/8c34a7f85b8b3f50d2116996e22e11c9d0c157": "b442e918c97abdeddde49621a3309a12",
".git/objects/9f/5f4fb84127695a13e349af74a0a9c9725d0d55": "39e369538757950d9e36692d0645a772",
".git/objects/9f/a459f454396a4c9072dde65332af1551c3ee73": "fb48463bfd156a12747a2babbc730784",
".git/objects/a0/4520cdbfe20cc68c3c06348108959a049bb142": "26996f0a4c50234605295b58937e913c",
".git/objects/a0/9da5a2345e9d214eef80ebe07423a34b12a680": "55ae301573d62919dde4f4720a6ea50e",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a8/3a17d54b6dc2156c855c6580301cefc9c8d017": "6525101be8d70b808a809af9c83fa4ad",
".git/objects/aa/967c19451095a3afb0f00d5b741203d42bc05e": "3470a2494a10abdd560a761f6575d79c",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ab/6e20d7875d358f89786604df2a4111ff42a463": "30e8fe2a5f7b4a8f528d3df7d3150594",
".git/objects/ad/6d82a08ea8a02bc3638bbdd6ae0b7b1d457d55": "bf94cb9d42fb9dd56dafae6942c92dcf",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/3b7ef1da062c81db042580677d8c5f8cb11a5d": "11dff51985c2cd1b28bd56be7f332259",
".git/objects/b9/a6b020fd6ff7f52768e9aef0d7ead17fb7c6f6": "472564ea33bab7f542d5ec920604c94b",
".git/objects/bd/7fd349a96af562e95b970d66da7fe484c60d87": "c4e39f522cc48d9cd0190e5c01e8d941",
".git/objects/be/6c14642ae8f86bcaa1d4864b2c86aafc6047e7": "5aea0785e55381c8ad99930061247aef",
".git/objects/c0/c01d00b633f1ceb7a07dc4458d08e8d162d54e": "34f2f9b45801e63c4e6e1e85c86a1b8a",
".git/objects/c7/6076546ed500028f40777e0bbdadbb155da0bc": "053c718d2f05775dedd8462a8a01cc85",
".git/objects/cc/ab1fc2a96e63fdc0bea9403d37fdb7cf7df94c": "d94b7a4363f0933c61876433c190914c",
".git/objects/cd/e55609fbf611b70b81a0e0b3d5169bc59eb7a0": "258114d0ec895862f3130ef67bbb0617",
".git/objects/d0/3e22b6d4b3a083f1bb9086add8902481b591fb": "43ef4fedbf4bb4faa4cd0b6f443961c5",
".git/objects/d1/a68ca10da0f063013eae61ade71341bfa8dcb3": "497f1596daa918bbc32be22a86594f3f",
".git/objects/d2/08ae292e6444f7f07763c6c367723a56a0edbf": "f5a0db52b203407f3a93fd9c05f7b043",
".git/objects/d8/3af509e74df00032db25cf1ee260456414798f": "66f8a0e185829efc087923e2fe555867",
".git/objects/da/a410152cad9c00fc34d223816a5178bfefb75e": "39e9f6523b004d3a85b5ec26a691fc2b",
".git/objects/dc/a521b4a79e5dc07551edf2a98aa02d96b70847": "ddafb91e90898c08df4d0da8940d5c0a",
".git/objects/de/6982a6528748fd7e78da4a9bfafd0d512f37c4": "5bce82717340cc69aadb601f4477197d",
".git/objects/e0/7b8ab87ad7ddddbd3929dfbceaa65d1cbd551e": "b4a6065ec695fb07902a52ea8c6421f8",
".git/objects/e0/b02fc9a87437e10e6c101592807451154cae74": "0c0a16470dd173dd4b658e321d05cc66",
".git/objects/e2/27c4cc59c83ea4479cf34ee1b47adc4b946c26": "61889449a71c24eed6cd6899d5268dd3",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e6/9de29bb2d1d6434b8b29ae775ad8c2e48c5391": "c70c34cbeefd40e7c0149b7a0c2c64c2",
".git/objects/e8/4671f06d3bfb878688659e465b03d42ad12411": "ee8f4afcfc0ee661420364cbacc75de6",
".git/objects/e8/f0401b4a8efa532ffb42f74188083f072bd0e0": "7673ec1b95746c637505d332adf4c582",
".git/objects/ef/b3f950d50ce0ccd89622af3bb0859b1670f638": "d00da082db478989bac49e96d1b8be5c",
".git/objects/f2/5787c93ad00665f0f797a43ab397f0628a273e": "59e425d1456034072d902c75d18ec75f",
".git/objects/f2/cd2b6a886f89f73a9bc41b235e9eae9334090c": "aeafadede1bec2c148d59c42e2444a72",
".git/objects/f3/eac9ef5273ca11088a93086dcd94126047af0d": "5899c4d7986b5ceeeb9cfe09d6d2ee73",
".git/objects/f4/c26b0d4ec3eb93f6017ed20c69899b9ec95a8e": "3a7379b49fbc6ba003b81a41442db796",
".git/objects/f7/435f4be45b8a239bcd43cd45da0903fdc35016": "0a0e50820bde22891a86ce51237ca9a1",
".git/objects/f9/493e88b43a4b288d1d76765ae6cae71e5248c0": "5a748105465346572f61a0b74f8dee21",
".git/objects/f9/69b396888faba1e9ec51aec63d0ce5433ab4b9": "b9f6d1e362fcbd4b856d3128170b436e",
".git/objects/f9/9fe06b778bf6421b7eab2cf87daf986d9cbf06": "f2dc8fd886836a0d7615bfc3891f8d8d",
".git/objects/fb/7980687e5b5652798a1ace662eed3d9bfafdf4": "c965f1d161bf75fe3c5ad7be02efb14d",
".git/refs/heads/gh-pages": "0e44bde3dbc3b73e483da1f2a5bff44e",
".git/refs/heads/master": "ace523005ecf332ba00133a3200ab2db",
".git/refs/remotes/origin/gh-pages": "0e44bde3dbc3b73e483da1f2a5bff44e",
".git/refs/remotes/origin/master": "ace523005ecf332ba00133a3200ab2db",
"assets/AssetManifest.json": "81b9c881b5e4c3405805502d4988adee",
"assets/assets/fonts/NotoSansJP-Light.otf": "78d6753b4b8aaef38ad581eb248606ef",
"assets/assets/fonts/Oswald-VariableFont_wght.ttf": "a6e5446a7c5789aabc9b37eaaf72134d",
"assets/assets/imgs/background.jpg": "a55f6e69d4beeee62f09ba634ea9b0a6",
"assets/assets/imgs/logo/flutter.png": "67642a0b80f3d50277c44cde8f450e50",
"assets/assets/imgs/logo/git.png": "728ff5a8e44d74cd0f2359ef0a9ec88a",
"assets/assets/imgs/logo/github.png": "438c17272c5f0e9f4a6da34d3e4bc5bd",
"assets/assets/imgs/logo/mail.png": "f4b90e0c68bf8947a60deb5a3c53a043",
"assets/assets/imgs/logo/noimg.png": "f49c0c1b080d638411f4bdbe930b5a1e",
"assets/assets/imgs/logo/note.png": "425d84ef3e74d22935c6d7cacbeff29c",
"assets/assets/imgs/logo/twitter.png": "7571ea13179d06d922f912f64d14abc6",
"assets/assets/imgs/logo/unity.png": "0a5aba11465737c620dfde2df0280cd4",
"assets/assets/imgs/profile.jpg": "11e6e856d9adefe9ad760542774a4422",
"assets/assets/imgs/thumbnail/Ghostdance.PNG": "268dc262caea2f9ccf072e65c5932f5d",
"assets/assets/imgs/thumbnail/Ghosttokyo.jpg": "3b46262b4d935906d069d6b809abab11",
"assets/assets/imgs/thumbnail/menou.PNG": "03e9fe014e3264c1e02df15a5228209a",
"assets/assets/imgs/thumbnail/model1.png": "c9bb17243fc92b22bd365b383b42ecd5",
"assets/assets/imgs/thumbnail/model2.png": "0fdd488dbeb4ccea169f940f2caf4492",
"assets/assets/imgs/thumbnail/RollerBall_for_VR.png": "62038db931527c56f91a21d0b31e4a67",
"assets/FontManifest.json": "94e28e1f28212b9ff8761f95d1f55fc1",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/NOTICES": "e32bf7eeafd3a52a6512dac5e8b912d0",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"icons/favicon.PNG": "6e91036459abf0633b650488db1919dc",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "0bda614c2ba49b294f99e1a56ed0835c",
"/": "0bda614c2ba49b294f99e1a56ed0835c",
"main.dart.js": "b568738f39f5317d87243165506db96d",
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

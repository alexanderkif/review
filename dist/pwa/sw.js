if(!self.define){let e,i={};const f=(f,c)=>(f=new URL(f+".js",c).href,i[f]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=f,e.onload=i,document.head.appendChild(e)}else e=f,importScripts(f),i()})).then((()=>{let e=i[f];if(!e)throw new Error(`Module ${f} didn’t register its module`);return e})));self.define=(c,a)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(i[n])return;let r={};const s=e=>f(e,n),d={module:{uri:n},exports:r,require:s};i[n]=Promise.all(c.map((e=>d[e]||s(e)))).then((e=>(a(...e),r)))}}define(["./workbox-37fde244"],(function(e){"use strict";e.setCacheNameDetails({prefix:"review"}),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/ErrorNotFound.11882a42.js",revision:"75480539ad3c5453201da50053a9a34a"},{url:"assets/flUhRq6tzZclQEJ-Vdg-IuiaDsNa.fd84f88b.woff",revision:"3e1afe59fa075c9e04c436606b77f640"},{url:"assets/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.4a4dbc62.woff2",revision:"a4160421d2605545f69a4cd6cd642902"},{url:"assets/index.39da777b.css",revision:"18c0c1dec53b72975ec20e1ccf056e0f"},{url:"assets/index.48c73816.js",revision:"e78bbefc2935bd475b6c9e661eaef719"},{url:"assets/IndexPage.5dd570da.css",revision:"6306dae4c57e98e7efad7a8b56a501f6"},{url:"assets/IndexPage.81890a62.js",revision:"4f20fa0ed5051dde22eacd5eb52949a9"},{url:"assets/KFOkCnqEu92Fr1MmgVxIIzQ.34e9582c.woff",revision:"4aa2e69855e3b83110a251c47fdd05fc"},{url:"assets/KFOlCnqEu92Fr1MmEU9fBBc-.9ce7f3ac.woff",revision:"40bcb2b8cc5ed94c4c21d06128e0e532"},{url:"assets/KFOlCnqEu92Fr1MmSU5fBBc-.bf14c7d7.woff",revision:"ea60988be8d6faebb4bc2a55b1f76e22"},{url:"assets/KFOlCnqEu92Fr1MmWUlfBBc-.e0fd57c0.woff",revision:"0774a8b7ca338dc1aba5a0ec8f2b9454"},{url:"assets/KFOlCnqEu92Fr1MmYUtfBBc-.f6537e32.woff",revision:"bcb7c7e2499a055f0e2f93203bdb282b"},{url:"assets/KFOmCnqEu92Fr1Mu4mxM.f2abf7fb.woff",revision:"d3907d0ccd03b1134c24d3bcaf05b698"},{url:"assets/MainLayout.4319e308.js",revision:"c530141e4352ec4898043392569028f4"},{url:"assets/QBtn.4c0288b2.js",revision:"9882c2ad0d079ba3bca75abf1f87d31a"},{url:"assets/use-quasar.59c8eead.js",revision:"d6a4210056a57906143f420315f55f99"},{url:"favicon.ico",revision:"f4facfeaed834544d622544acfbb7722"},{url:"icons/apple-icon-120x120.png",revision:"d082235f6e6d2109e84e397f66fa868d"},{url:"icons/apple-icon-152x152.png",revision:"3c728ce3e709b7395be487becf76283a"},{url:"icons/apple-icon-167x167.png",revision:"3fec89672a18e4b402ede58646917c2d"},{url:"icons/apple-icon-180x180.png",revision:"aa47843bd47f34b7ca4b99f65dd25955"},{url:"icons/favicon-128x128.png",revision:"ab92df0270f054ca388127c9703a4911"},{url:"icons/favicon-16x16.png",revision:"e4b046d41e08e6fa06626d6410ab381d"},{url:"icons/favicon-32x32.png",revision:"410858b01fa6d3d66b7bf21447c5f1fc"},{url:"icons/favicon-96x96.png",revision:"db2bde7f824fb4057ffd1c42f6ed756e"},{url:"icons/icon-128x128.png",revision:"ab92df0270f054ca388127c9703a4911"},{url:"icons/icon-192x192.png",revision:"7659f0d3e9602e71811f8b7cf2ce0e8e"},{url:"icons/icon-256x256.png",revision:"cf5ad3498fb6fda43bdafd3c6ce9b824"},{url:"icons/icon-384x384.png",revision:"fdfc1b3612b6833a27a7b260c9990247"},{url:"icons/icon-512x512.png",revision:"2c2dc987945806196bd18cb6028d8bf4"},{url:"icons/ms-icon-144x144.png",revision:"8de1b0e67a62b881cd22d935f102a0e6"},{url:"icons/safari-pinned-tab.svg",revision:"3e4c3730b00c89591de9505efb73afd3"},{url:"img/box_fractal.svg",revision:"d8cad1fee7c613b496f0f8a011af5cf4"},{url:"img/buyforme_detail.png",revision:"06596dac12534087d96b2af35bf5a9ea"},{url:"img/buyforme_fab.png",revision:"fd15e224b8c57134c013cf4ae8a35c28"},{url:"img/buyforme_groups.png",revision:"f4b71fc709fb9e332523573ce852b108"},{url:"img/buyforme_items.png",revision:"d9f49e2a7000d77c3b2d291162606ca4"},{url:"img/buyforme_login.png",revision:"c92f52a5208f456ab857d9dc09869512"},{url:"img/buyforme_red-blue.png",revision:"28209cfb4a2c53501192d56f044e1cc9"},{url:"img/customer1.png",revision:"52e9d4d3f7b4d776983e7c5db55af5d8"},{url:"img/customer2.png",revision:"a3a94253fa2be2548d86f6aec089fdec"},{url:"img/dometeo1.png",revision:"3453e04519b286b5b646ffca469e0867"},{url:"img/dometeo2.png",revision:"eef07d55f3d2996a7a66078d822abd45"},{url:"img/dometeo3.png",revision:"2c11ed12cb29325bd8014f66a26ca3e5"},{url:"img/dometeo4.png",revision:"9165c46bc42374f365b404115cafa9c5"},{url:"img/flatUI-min.png",revision:"ec71b68d6b3075031e29cfb2cd273479"},{url:"img/fnb1-min.png",revision:"eb8c2651723211185f6311f32ca09dc5"},{url:"img/fnb2-min.png",revision:"996c079de3fa8a8502682fd48a00cc74"},{url:"img/fnb3-min.png",revision:"d8e16a9360a9e0b43cc4082982848609"},{url:"img/football.png",revision:"e023c1cdb005f13f075e094a6b781f32"},{url:"img/fractal_star.svg",revision:"865d9842222f46a42fff33a9cb0b0850"},{url:"img/jstask-min.png",revision:"c8cb0f1d49e96f9a3bf3305f9f5b3f26"},{url:"img/light_menu.png",revision:"0076780be6af6ea1be1d1e88b50e7576"},{url:"img/light_popup.png",revision:"1be222a5adffd45689ffadd4621dc1f8"},{url:"img/light_select.png",revision:"5d3756328bf77c2d0e865b9a7d3c2c5e"},{url:"img/logist1.png",revision:"629cbb95232f8539183fc455ee8e307b"},{url:"img/logist2.png",revision:"a4220123e5bdf53989d4fae8f7985b88"},{url:"img/logist3.png",revision:"f343f1206516d2dfb85e1ec239f528a3"},{url:"img/logist4.png",revision:"d40e044ff6f4c615154413a4ae918ff5"},{url:"img/logist5.png",revision:"6e608f7ba5f3241e44eac88c85db5a37"},{url:"img/meteo1-min.png",revision:"b2a154865fb3e37c5e50b05de15fb08c"},{url:"img/meteo2-min.png",revision:"e9711b792ccfbaf6703da2586268928f"},{url:"img/meteo3-min.png",revision:"5a10facbdd2c1577ec919a2b8fb2f3ed"},{url:"img/react-movie_1.png",revision:"e62f186a2f61aeac05a7815872333444"},{url:"img/react-movie_2.png",revision:"bed8b08c11aedb2c977de971c173693f"},{url:"img/react-movie_3.png",revision:"2086c92da52dfcda39ed3a0829510caa"},{url:"img/react-movie_4.png",revision:"f5dbdd11a390e415c8617bbecb0c045b"},{url:"img/react-movie_5.png",revision:"9cf2a9899b182bc755fab4462f1a5a0d"},{url:"img/sibdev1_1.png",revision:"cb9a8f989fc3b2841b1b43d2af5c7fd8"},{url:"img/sibdev1_2.png",revision:"8fbf217b94ee8f52ccdf99c8e34d3c1a"},{url:"img/sibdev1_3.png",revision:"873778125306391d6b91ae3935878fd9"},{url:"img/sibdev1_4.png",revision:"c31c46a797bf43c686ababb3b51a324e"},{url:"img/sibdev1_5.png",revision:"6872003d1aa5d94c119c137f470099ff"},{url:"img/sibdev2_1.png",revision:"36f04097a1a94ca85fdf02971871cc5b"},{url:"img/sibdev2_2.png",revision:"dc23fcb66b27dbd49cb4ff690c57cce1"},{url:"img/sibdev2_3.png",revision:"d95cfdc842bf1e8c9956a5201c89e4ad"},{url:"img/sibdev2_4.png",revision:"6593764abf7497fddbe5012fe076f657"},{url:"img/sibdev2_5.png",revision:"a915435e37a0b10f2435f232dc20f53e"},{url:"img/simon1.png",revision:"3fd0e195d0ef3937e866e27e3e968ed8"},{url:"img/simon2.png",revision:"e5a221be3022ae6d47dc739c79101ee5"},{url:"img/slider1.png",revision:"6dc39baf73728330a2e182e4c720dbb3"},{url:"img/slider2-min.png",revision:"430f3ac8afd5615ba714a4c41464f2e3"},{url:"img/st1-min.png",revision:"47b6312a806fe96355f2051c51d9e4f9"},{url:"img/st2-min.png",revision:"3e52b90dd2ef5a6abac24746710736d3"},{url:"img/st3-min.png",revision:"a4b1318f7fac1c57263dfbb34b4f3821"},{url:"img/takeoff1.png",revision:"e505f9064694919dbe9bed3e72c2bbb9"},{url:"img/takeoff2.png",revision:"dafec4400d6cf7d4d7c0bb0e57c69d59"},{url:"img/takeoff3.png",revision:"cd24dd1f2c4a34f200b64d50041729e5"},{url:"img/takeoff4.png",revision:"64d4e0f6b18f8b40ad5413be26f16dfb"},{url:"img/takeoff5.png",revision:"4dfd68aab3abb7b1fe4201e753ffed2d"},{url:"img/wave.svg",revision:"03372fdd3b60e04f45ba39bbd48230e2"},{url:"img/wave11.svg",revision:"b460cbe077b32b41bef88a7515abc7fa"},{url:"img/wave12.svg",revision:"fd40fb2ae0b9d5a4b4d337bcd89b08c5"},{url:"img/wave2.svg",revision:"02876f63895730ffadf93f3e3f0e8df1"},{url:"index.html",revision:"6a0a5051cfe8afd9a363a926b08fa83a"},{url:"manifest.json",revision:"71393d0abc9848221c302021b55ab2c8"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"),{denylist:[/sw\.js$/,/workbox-(.)*\.js$/]}))}));
import fs from 'fs';
import https from 'https';

const url = 'https://s3.bmp.ovh/2026/03/13/OaXVU0fZ.png';

https.get(url, (res) => {
  console.log('Status Code:', res.statusCode);
  console.log('Headers:', res.headers);
}).on('error', (e) => {
  console.error(e);
});

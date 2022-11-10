rm  ./dist/*.js
set -e 
cd packages/bilibili-greener
npm run build
cd - 
set -e 
cd packages/csdn-greener
npm run build
cd - 
set -e 
cd packages/novel-reader
npm run build
cd - 
set -e 
cd packages/ytcc-downloader
npm run build
cd - 
set -e 
cd packages/util-spacingjs
npm run build
cd - 
mv ./packages/**/dist/**.user.js  ./dist/
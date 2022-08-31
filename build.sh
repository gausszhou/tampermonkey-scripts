rm  ./dist/*.js
lerna run build 
mv ./packages/**/dist/**.user.js  ./dist/
set -e 
# rm  ./lib/*
# rm  ./packages/**/lib/*

cd ./packages/autoindex/ 
npm run build 
cd ../../

cd ./packages/readblog/ 
npm run build 
cd ../../

cd ./packages/readnovel/ 
npm run build 
cd ../../

cd ./packages/spacingjs/ 
npm run build 
npm run ext
cd ../../

cd - 
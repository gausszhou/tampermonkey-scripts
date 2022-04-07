# 
set -e 
# rm  ./lib/*
# rm  ./packages/**/lib/*

cd ./packages/readblog/ 
npm run build 
cd ../../

cd ./packages/readnovel/ 
npm run build 
cd ../../

cd ./packages/readvideo/ 
npm run build 
cd ../../

cd - 

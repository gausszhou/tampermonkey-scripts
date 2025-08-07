rm  ./dist/*.js

set -e 

cd ./packages/bilibili-greener
pnpm --filter bilibili-greener build
cd - 

cd ./packages/csdn-greener
pnpm --filter csdn-greener build
cd -

cd ./packages/douyu-greener
pnpm --filter douyu-greener build
cd -

cd ./packages/novel-reader
pnpm --filter novel-reader build
cd -

cd ./packages/do-not-track
pnpm --filter do-not-track build
cd -

mv ./packages/**/dist/**.user.js  ./dist/
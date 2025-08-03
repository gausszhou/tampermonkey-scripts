rm  ./dist/*.js

pnpm --filter bilibili-greener build
pnpm --filter csdn-greener build
pnpm --filter douyu-greener build
pnpm --filter novel-reader build
pnpm --filter util-spacingjs build
pnpm --filter do-not-track build

mv ./packages/**/dist/**.user.js  ./dist/
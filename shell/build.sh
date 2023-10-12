rm  ./dist/*.js

pnpm --filter bilibili-greener build
pnpm --filter csdn-greener build
pnpm --filter novel-reader build
pnpm --filter util-spacingjs build
pnpm --filter ytcc-downloder build

mv ./packages/**/dist/**.user.js  ./dist/
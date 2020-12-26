#!/usr/bin/env sh
set -x
cd /var/app/liwg && \
tar zxvf package.tgz -C . && \
fuser -k 5000/tcp
fuser -k 3000/tcp
cd backend
npm i && npm run start > ../logs/backend.log 2> ../logs/backend_err.log &
cd ../landing-page
npm i && npm run start   > ../logs/frontend.log 2> ../logs/frontend_err.log &
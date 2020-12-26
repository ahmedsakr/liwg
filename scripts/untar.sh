#!/usr/bin/env sh
set -x
cd /var/app/liwg && \
tar zxvf package.tgz -C . && \
fuser -k 5000/tcp
fuser -k 3000/tcp
cd backend
npm i && npm start 2>&1| tee ../logs/backend.log &
cd ../landing-page
npm i && npm start 2>&1| tee ../logs/frontend.log &
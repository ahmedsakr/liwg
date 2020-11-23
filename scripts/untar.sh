#!/usr/bin/env sh
echo 'Running untar.sh script'
set -x
# export NODE_ENV=production
cd /var/app/liwg && \
tar zxvf package.tgz -C . && \
cd code/backend
npm run backend > ../../logs/backend.log 2> ../../logs/backend_err.log &
cd ../landing-page
npm run frontend  > ../../logs/frontend.log 2> ../../logs/frontend_err.log &
echo 'Finished running untar.sh script'
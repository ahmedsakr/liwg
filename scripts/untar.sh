#!/usr/bin/env sh
echo 'Running untar.sh script'
set -x
# export NODE_ENV=production
cd /var/app/liwg && \
tar zxvf package.tgz -C . && \
ls
cd build
ls
echo 'Finished running untar.sh script'
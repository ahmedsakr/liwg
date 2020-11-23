#!/usr/bin/env sh
echo 'Running untar.sh script'
set -x
# export NODE_ENV=production
cd $REMOTE_APP_DIR && \
tar zxvf package.tgz -C ../../liwg && \
ls

echo 'Finished running untar.sh script'
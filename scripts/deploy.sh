#!/usr/bin/env sh
echo 'Running deploy.sh script'
set -x
tar -czf package.tgz ../liwg && \
scp package.tgz $REMOTE_USER@$REMOTE_HOST:$REMOTE_APP_DIR && \
ssh $REMOTE_USER@$REMOTE_HOST 'bash -s' < ./scripts/untar.sh
echo 'Finished running deploy.sh script'
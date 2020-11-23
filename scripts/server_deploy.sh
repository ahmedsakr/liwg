#!/usr/bin/env sh

set -x
ls
tar -czf package.tgz code && \
scp package.tgz $REMOTE_USER@$REMOTE_HOST:$REMOTE_APP_DIR && \
ssh $REMOTE_USER@$REMOTE_HOST 'bash -s' < ./untar.sh
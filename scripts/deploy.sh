#!/usr/bin/env sh
if [[ $TRAVIS_BRANCH == 'ci_cd_liwg' ]]; then
# if [ $TRAVIS_BRANCH == 'main'  ] || [ $TRAVIS_BRANCH == 'ci_cd_liwg' ] ; then
    set -x
    tar -czf package.tgz ../code && \
    scp package.tgz $REMOTE_USER@$REMOTE_HOST:$REMOTE_APP_DIR && \
    ssh $REMOTE_USER@$REMOTE_HOST 'bash -s' < ./untar.sh
fi
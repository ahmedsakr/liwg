#!/usr/bin/env sh

set -x

cat <<EOF > .env
CLIENT_ID=${CLIENT_ID}
CLIENT_SECRET=${CLIENT_SECRET}
LINKEDIN_CALLBACK=${LINKEDIN_CALLBACK}
LINKEDIN_SUCCESS=${LINKEDIN_SUCCESS}
LINKEDIN_FAILED=${LINKEDIN_FAILED}
EOF
mv .env backend/
tar -czf package.tgz landing-page templates backend && \
scp package.tgz $REMOTE_USER@$REMOTE_HOST:$REMOTE_APP_DIR && \
ssh $REMOTE_USER@$REMOTE_HOST 'bash -s' < scripts/untar.sh
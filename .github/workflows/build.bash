# !/bin/bash

git fetch origin ${DEPLOY_BRANCH}
git checkout ${DEPLOY_BRANCH}

find . -maxdepth 1 ! -name "${STATIC_FOLDER}" ! -name '.git' ! -name '.gitignore' -exec rm -rf {} \;
mv ${STATIC_FOLDER}/* .
rm -Rf ${STATIC_FOLDER}

test -f ".nojekyll" || touch .nojekyll

REMOTE_REPO="https://${ACCESS_TOKEN}@github.com/${GITHUB_REPOSITORY}.git"
git add -fA
git commit --allow-empty -m "Updates"
git push ${REMOTE_REPO} ${DEPLOY_BRANCH}

echo "Successfully built and deployed."

---
title: Upgrade Node Without Losing Global Packages (NVM + Yarn)
date: 2017-3-2
slug: nvm-yarn-node-upgrade
tags:
  - node
  - nvm
  - yarn
  - npm
---

If you manage your Node versions with [NVM](https://github.com/creationix/nvm) and also prefer [Yarn](https://yarnpkg.com/en/) over NPM, you'll soon realize that when you install a new version of node, Yarn's references to your globally installed packages are lost.

The long road is to reinstall each of them, forcing yarn to re-link. A quicker solution is a nifty package called [fix-yarn-global-packages](https://www.npmjs.com/package/fix-yarn-global-packages). This accomplishes a couple things:
- Locates all of your global packages in `~/.config/yarn/global/node_modules/.bin`
- Creates symlinks for each package to whatever is set for your `yarn global bin`

```bash
npm install -g fix-yarn-global-packages
```
Chore averted. Grab a cold 🍺 instead!

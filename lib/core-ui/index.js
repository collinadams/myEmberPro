/* eslint-env node */
'use strict';

module.exports = {
  name: 'core-ui',

  isDevelopingAddon() {
    return true;
  },

  included(appOrAddon, parentAddon) {
    let app = parentAddon || appOrAddon;
    let plugin = new CommentAppender();
    app.registry.add('js', plugin);
    app.registry.add('css', plugin);
  },

  postprocessTree(type, tree) {
    console.log('type=', type);
    if (type === 'all') {
      return new CommentAppender(tree, {});
    } else {
      return tree;
    }
  }
};

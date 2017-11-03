import Ember from 'ember';
import stateFor from 'ember-state-services/state-for';

const { Component } = Ember;

export default Component.extend({
  classNames: ['post-full'],
  
  postInfo: stateFor('post-info', 'model'),

  actions: {
    deleteComment(comment) {
      comment.deleteRecord();
    },
    saveComment() {
      let f = this['save-comment'];
      if (f && typeof f === 'function') {
        f(this.get('postInfo.draftComment'), this.get('model'));
      }
    }
  }
});
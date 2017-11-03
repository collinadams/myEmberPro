import Ember from 'ember';
import { task, timeout } from '@ember/concurrency';

const { Component } = Ember;

export default Component.extend({
  classNames: ['post-comment'],
  isCancellable: false,
  updateComment: task(function* asyncUpdateComment(comment) {
    this.set('isCancellable', true);
    yield timeout(5000);
    this.set('isCancellable', false);
    let com = comment;
    yield com.save();
    this.set('isEditing', false);
  }),
  cancelUpdate: task(function*() {
    this.get('updateComment').cancelAll();
    this.get('model').rollbackAttributes();
    this.set('isEditing', false);
  })

});
import Ember from 'ember';
import stateFor from 'ember-state-services/state-for';

const { Component } = Ember;

export default Component.extend({
  classNames: ['post-full'],

  draftComment: '',
  
  tagName: 'form',
  
  postInfo: stateFor('post-info', 'model'),

  actions: {
    submitForm() {
      this.get('comment').setProperties(this.get('data'));
    }
  }
});
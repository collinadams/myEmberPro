import Ember from 'ember';
import stateFor from 'ember-state-services/state-for';

const { Component } = Ember;

export default Component.extend({
  classNames: ['post-full'],
  
  tagName: 'form',
  
  data: stateFor('draft-name', 'comment'),

  actions: {
    submitForm() {
      this.get('comment').setProperties(this.get('data'));
    }
  }
});
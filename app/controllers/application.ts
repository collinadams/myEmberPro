import Ember from 'ember';
import { default as math, PI } from 'math';

const { Controller, inject } = Ember;

export default Controller.extend({
  currentUser: inject.service(),
  mathLib: {
    four: math.sqrt(16),
    PI
  },
  init() {
    this._super(...arguments);
    let geo = Ember.getOwner(this).lookup('data:location');
    this.set('geo', geo);
  }
});
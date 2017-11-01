import Ember from 'ember';
import { default as math, PI } from 'math'

const { Controller, inject } = Ember;

export default Controller.extend({
  currentUser: inject.service(),
  mathLib: {
    four: math.sqrt(16),
    PI
  }
});
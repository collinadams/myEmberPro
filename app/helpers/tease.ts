import Ember from 'ember';

const { Helper: { helper } } = Ember;

export function tease([str = ''], hash = { chars: 100 }) {
  let len : number = hash.chars;
  return `${str}`.replace(/[#*]+/g, '').substring(0, len);
}

export default helper(tease);
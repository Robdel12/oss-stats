import Ember from 'ember';

export function prettyNumber(params) {
  if (!params[0]) { return undefined; }
  let parts = params[0].toString().split(".");
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  return parts.join(".");
}

export default Ember.Helper.helper(prettyNumber);

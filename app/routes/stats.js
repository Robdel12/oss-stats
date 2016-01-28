import Ember from 'ember';
const PACKAGE_LIST = "emberx-select,emberx-file-input,ember-impagination,ember-promise-helpers,emberx-file-reader,emberx-select-blockless,ember-introjs";

export default Ember.Route.extend({
  model() {
    return Ember.$.getJSON(`https://api.npmjs.org/downloads/point/last-week/${PACKAGE_LIST}`);
  }
});

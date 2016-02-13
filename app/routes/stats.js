import Ember from 'ember';
const PACKAGE_LIST = "emberx-select,emberx-file-input,ember-impagination,ember-promise-helpers,emberx-file-reader,emberx-select-blockless,ember-introjs,virtual-each,emberx-range-input";

export default Ember.Route.extend({
  queryParams: {
    range: {
      refreshModel: true
    }
  },

  model(params) {
    return Ember.$.getJSON(`https://api.npmjs.org/downloads/point/last-${params.range}/${PACKAGE_LIST}`).then((data) => {
      let npmPackage;
      let dataArray = [];

      for(npmPackage in data) {
        dataArray.push(data[npmPackage]);
      }

      return dataArray;
    });
  },

  actions: {
    changeRange(value) {
      this.transitionTo('stats', { queryParams: { range: value }});
    }
  }
});

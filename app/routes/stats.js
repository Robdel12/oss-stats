import Ember from 'ember';
const PACKAGE_LIST = [
  // "@bigtest/convergence",
  // "@bigtest/interactor",
  // "@bigtest/mocha",
  // "@bigtest/mirage",
  "microstates",
  "funcadelic",
  "emberx-select",
  "emberx-form",
  "ember-let",
  "emberx-file-input",
  "emberx-range-input",
  "emberx-xml-http-request",
  "impagination",
  "ember-impagination",
  "emberx-slider",
  "emberx-select-blockless"
].join(',');

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

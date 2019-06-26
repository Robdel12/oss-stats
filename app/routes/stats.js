import Ember from "ember";
const PACKAGE_LIST = [
  "@percy/agent",
  "@percy/cypress",
  "@percy/puppeteer",
  "@percy/storybook",
  "@percy-io/percy-storybook",
  "@percy/nightwatch",
  "@percy/nightmare",
  "@percy/protractor",
  "@percy/script",
  "@percy/webdriverio",
  "percy-client",
  "ember-percy",
  "percy"
];

export default Ember.Route.extend({
  queryParams: {
    range: {
      refreshModel: true
    }
  },

  model(params) {
    let promiseArray = PACKAGE_LIST.map(async packageName => {
      let data = await Ember.$.getJSON(
        `https://api.npmjs.org/downloads/point/last-${
          params.range
        }/${packageName}`
      );

      return data;
    });

    return Promise.all(promiseArray).then(completed => {
      return completed;
    });
  },

  actions: {
    changeRange(value) {
      this.transitionTo("stats", { queryParams: { range: value } });
    }
  }
});

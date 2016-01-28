import Ember from 'ember';

export default Ember.Controller.extend({
  range: "day",
  queryParams: ['range'],
  sortDirection: 'desc',
  sortProperties: ['downloads:desc'],
  sortedModel: Ember.computed.sort('model', 'sortProperties'),

  actions: {
    sort(column) {
      this.get('sortDirection') === "desc" ? this.set('sortDirection', "asc") : this.set('sortDirection', "desc");

      this.set("sortProperties", [`${column}:${this.get("sortDirection")}`]);
    }
  }
});

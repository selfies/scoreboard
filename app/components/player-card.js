import Ember from 'ember';

export default Ember.Component.extend({
  tagName: '',
  actions: {
    increment() {
      this.set("score", parseInt(this.get("score"), 10) + 1);
    },
    changeName(evt) {
      this.toggleProperty('editName');
    }
  }
});

import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel(){
    debugger;
    this.transitionTo('bands');
  }
});

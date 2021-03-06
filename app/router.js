import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('persons', function() {
  	this.route('new');
  });
  this.route('person', {path: '/person/:person_id'});

});

export default Router;

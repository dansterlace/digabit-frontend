import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
		addPerson: function(){
			this.model.save().then(function() {
				console.log('succeeded');
			}, function() {
				console.log('failed');
			});
		}
	} 
});

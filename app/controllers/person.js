import Ember from 'ember';

export default Ember.Controller.extend({
	areFriendsShown: false,
	actions: {
		toggleFriendsShown: function() {
			var areFriendsShown = this.get('areFriendsShown');
			this.set('areFriendsShown', !areFriendsShown);
		}
	}
});

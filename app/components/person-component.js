import Ember from 'ember';

export default Ember.Component.extend({
	isSelected: Ember.computed('person',function(key, value) {
		var map = this.get('map'),
			person = this.get('person');

		// Get
		if(value === undefined) {
			return map[person];
		} else {
			map[person] = value;
			return value;
		}
	})
});

import DS from 'ember-data';

export default DS.Model.extend({
	name: DS.attr('string'),
	avatar: DS.attr('string'),

	friends: DS.hasMany('person')

});
import { moduleForModel, test } from 'ember-qunit';
import Ember from 'ember';

moduleForModel('person', 'Unit | Model | person', {
  // Specify the other units that are required for this test.
  needs: []
});

test('it exists', function(assert) {
  var model = this.subject();
  assert.ok(!!model);
});

test('I can set the name', function(assert) {
	var model = this.subject();
	var name = 'bob';
	Ember.run(function() {
		model.set('name', name);
	});
	assert.equal(model.get('name'), name);
});

test('I can set a relationship', function(assert) {
	var person = this.store().modelFor('person');
	var relationship = Ember.get(person, 'relationshipsByName').get('friends');

	assert.equal(relationship.key, 'friends');
	assert.equal(relationship.kind, 'hasMany');
});



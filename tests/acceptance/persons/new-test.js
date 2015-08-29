import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from 'digabit/tests/helpers/start-app';

module('Acceptance | persons/new', {
  beforeEach: function() {
    this.application = startApp();
  },

  afterEach: function() {
    Ember.run(this.application, 'destroy');
  }
});

test('visiting /persons/new', function(assert) {
  
  visit('/persons/new');

  andThen(function() {
    assert.equal(currentURL(), '/persons/new');
  });
});

test('new person appears first', function(assert) {
  assert.expect(1);
  var firstName = 'Harry S',
      lastName = 'Truman';
  visit('/persons/new');
  fillIn('#firstName', firstName);
  fillIn('#lastName', lastName);
  click('button.submit');

  andThen(function() {
    assert.equal(find('ul.persons li:first').text(), firstName + ' ' + lastName);
  });

});

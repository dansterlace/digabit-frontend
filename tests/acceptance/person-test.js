import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from 'digabit/tests/helpers/start-app';

module('Acceptance | person', {
  beforeEach: function() {
    this.application = startApp();
  },

  afterEach: function() {
    Ember.run(this.application, 'destroy');
  }
});

test('visiting /person', function(assert) {
  visit('/person/0');

  andThen(function() {
    assert.equal(currentURL(), '/person/0');
    assert.equal(find("#title").text(), "Person");
  });
});

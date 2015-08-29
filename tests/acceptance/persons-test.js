import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from 'digabit/tests/helpers/start-app';

module('Acceptance | persons', {
  beforeEach: function() {
    this.application = startApp();
  },

  afterEach: function() {
    Ember.run(this.application, 'destroy');
  }
});

test('visiting /persons', function(assert) {
  visit('/persons');

  andThen(function() {
    assert.equal(currentURL(), '/persons');
    assert.equal(find("#title").text(), "People");
  });
});

import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('person-component', 'Integration | Component | person component', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(1);

  var person = {
    fullName: 'FULL NAME'
  };
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });
  this.set('person',person);
  this.render(hbs`{{person-component}}`);

  assert.equal(this.$().text().trim(), '');

});

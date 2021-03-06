/* global module */

import Ember from "ember";
import { test } from 'ember-qunit';
import startApp from '../helpers/start-app';
var App;

module('Homepage', {
  setup: function() {
    App = startApp();
  },
  teardown: function() {
    Ember.run(App, 'destroy');
  }
});

test('root lists the latest broadcast', function(assert){
  assert.expect(2);
  visit('/').then(function() {
    assert.equal(find('div#latest').length, 1, 'The first page should have the latest broadcast');
    assert.equal(find('div#latest h1').length, 1, 'The first page should have only one broadcast');
  });
});

test('root lists all the mixes in the latest broadcast', function(assert){
  assert.expect(1);
  visit('/').then(function() {
    assert.equal(find('div#latest ul li').length, 4, 'The first page should have all the latest mixes');
  });
});

test('search for broadcast name returns a broadcast', function(assert){
  assert.expect(1);
  visit('/search').then(function() {
    assert.equal(find('#search-form').length, 1, 'Search form should be present');
  });
});
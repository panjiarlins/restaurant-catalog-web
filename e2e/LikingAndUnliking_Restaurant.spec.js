/* eslint-disable no-undef */
const assert = require('assert');

Feature('Liking And Unliking Restaurant');

Before(({ I }) => {
  I.amOnPage('/#/like');
});

Scenario('showing empty liked restaurant', ({ I }) => {
  I.seeElement('resto-list');
  I.seeElement('div#restaurant-not-found');
});

Scenario('liking one restaurant', async ({ I }) => {
  I.seeElement('resto-list');
  I.seeElement('div#restaurant-not-found');

  I.amOnPage('/');

  I.seeElement('resto-item a');

  const firstRestaurant = locate('resto-item a').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/like');
  I.seeElement('resto-item');
  const likedRestaurantTitle = await I.grabTextFrom('resto-item a');

  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);
});

Scenario('unliking one restaurant', async ({ I }) => {
  I.seeElement('resto-list');
  I.seeElement('div#restaurant-not-found');

  I.amOnPage('/');

  I.seeElement('resto-item a');

  const firstRestaurant = locate('resto-item a').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/like');
  I.seeElement('resto-item');

  const likedRestaurant = locate('resto-item a').first();
  const likedRestaurantTitle = await I.grabTextFrom(likedRestaurant);
  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);
  I.click(firstRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/like');
  I.seeElement('resto-list');
  I.see('No restaurant found', 'div#restaurant-not-found');
});

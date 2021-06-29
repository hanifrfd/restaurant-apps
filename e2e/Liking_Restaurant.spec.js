/* eslint-disable codeceptjs/no-pause-in-scenario */
const assert = require('assert');

Feature('Liking Restaurants');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('showing empty liked restaurants', ({ I }) => {
  I.see('Tidak ada restaurant untuk ditampilkan', '.restaurant-item__not__found');
});

Scenario('liking one restaurant', async ({ I }) => {
  I.see('Tidak ada restaurant untuk ditampilkan', '.restaurant-item__not__found');

  I.amOnPage('/');

  I.seeElement('.card .cardLink');
  I.seeElement('.card .cardTitle');

  const RestTitle = await I.grabTextFrom(locate('.card .cardTitle').first());
  I.click(locate('.card .cardLink').first());

  I.seeElement('#favorite');
  I.click('#favorite');

  I.amOnPage('/#/favorite');

  I.seeElement('.card .cardLink');
  I.seeElement('.card .cardTitle');

  const likedRestTitle = await I.grabTextFrom('.card .cardTitle');

  assert.strictEqual(RestTitle, likedRestTitle);
});

Scenario('unliking one restaurant', async ({ I }) => {
  I.see('Tidak ada restaurant untuk ditampilkan', '.restaurant-item__not__found');

  I.amOnPage('/');

  I.seeElement('.card .cardLink');
  I.seeElement('.card .cardTitle');

  // favoritkan satu restaurant

  const RestTitle = await I.grabTextFrom(locate('.card .cardTitle').first());
  I.click(locate('.card .cardLink').first());

  I.seeElement('#favorite');
  I.click('#favorite');

  I.amOnPage('/#/favorite');

  I.seeElement('.card .cardLink');
  I.seeElement('.card .cardTitle');

  // memastikan terdapat satu restaurant favorit

  const likedRestTitle = await I.grabTextFrom('.card .cardTitle');

  assert.strictEqual(RestTitle, likedRestTitle);

  I.click(locate('.card .cardLink').first());

  // unfavorite restaurant
  I.seeElement('.unfavorite-btn');
  I.click('.unfavorite-btn');

  I.seeElement('.favorite-btn');
  I.amOnPage('/#/favorite');

  I.see('Tidak ada restaurant untuk ditampilkan', '.restaurant-item__not__found');
});

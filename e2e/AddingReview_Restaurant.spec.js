/* eslint-disable no-undef */
Feature('Adding Review to Restaurant');

Scenario('review one restaurant', ({ I }) => {
  I.amOnPage('/');
  I.seeElement('resto-list');
  I.seeElement('resto-item a');

  I.click(locate('resto-item a').first());

  I.seeElement('#name-review');
  I.fillField('#name-review', 'E2E TEST');
  I.fillField('#input-review', `OK! ${new Date().toLocaleTimeString()}`);
  I.click(locate('#submit-review'));

  I.refreshPage();

  I.see('E2E TEST', 'strong');
});

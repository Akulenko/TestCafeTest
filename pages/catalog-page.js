import { Selector } from 'testcafe';

export default class CatalogPage {

    constructor () {
      this.catalogNavMenu = Selector('.b-main-navigation__text').nth(0);
      this.catalogPageTitle = Selector('h1').innerText;
      this.logo = Selector('.b-top-logo');
    }
  }
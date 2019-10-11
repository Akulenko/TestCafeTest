import { Selector } from 'testcafe';
import Utils from '../utils';
import CatalogPage from '../pages/catalog-page'

const utils = new Utils();
const catalogPage = new CatalogPage();

fixture `Catalog page`
    .page `https://www.onliner.by/`
    .beforeEach(async t => {
        await t.maximizeWindow();
    })

test('Open catalog page', async t => {
    await t.click(catalogPage.catalogNavMenu); 
    console.log(catalogPage.pageTitle);
    await t.expect(await utils.getUrl()).contains('https://catalog.onliner.by/');
});

test('Click on Logo navigates to Home page', async t => {
    await t.click(catalogPage.catalogNavMenu); 
    await t.click(catalogPage.logo); 
    await t.expect(await utils.getUrl()).contains('test');

});
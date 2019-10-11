import { Selector, t } from 'testcafe';
import { ClientFunction } from 'testcafe';

export default class Utils {

async getUrl() {
    const getURL = ClientFunction(() => window.location.href);
    const url = await getURL();
    return url;
 }

}
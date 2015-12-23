/**
 * Created by alivanov on 23/12/15.
 */

/*
* We're going to test our React components as well, and that's going to require a DOM.
* One alternative would be to run tests in an actual web browser with a library like Karma.
* However, we don't actually need to do that because we can get away with using jsdom, a pure JavaScript DOM
* implementation that runs in Node
*/
import jsdom from 'jsdom';

import chai from 'chai';
import chaiImmutable from 'chai-immutable';

/*
* We also need a bit of setup code for jsdom before it's ready for React to use.
* We essentially need to create jsdom versions of the document and window objects that would normally be provided
* by the web browser. Then we need to put them on the global object, so that they will be discovered by React
* when it accesses document or window.
*/
const doc = jsdom.jsdom('<!doctype html><html><body></body></html>');
const win = doc.defaultView;

global.document = doc;
global.window = win;

/*
* This is done so that properties provided by window can be used without the window. prefix,
* which is what would happen in a browser environment. Some of the code inside React relies on this
*/
Object.keys(window).forEach((key) => {
  if (!(key in global)) {
    global[key] = window[key];
  }
});

chai.use(chaiImmutable);

import {expect} from 'chai';
import fs from 'fs';
import jsdom from 'jsdom';
const JSDOM = jsdom.JSDOM;

describe('Our first test', () => {
  it('should pass', () => {
    expect(true).to.equal(true);
  });
});

describe('index.html', () => {
  it('should say hello', () => { // pass in done for async tests
    const index = fs.readFileSync('./src/index.html', 'utf-8');
    const dom = new JSDOM(index);
    const h1 = dom.window.document.getElementsByTagName('h1')[0];
    expect(h1.innerHTML).to.equal("Welcome to your JavaScript Starter Kit v1.0.0!");
  });
});

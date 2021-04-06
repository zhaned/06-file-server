const request = require('supertest');
const app = require('../lib/app');

describe('app routes', () => {
  it('gets the / route and returns hi', async() => {
    const body = await request(app)
      .get('/index.html');

    expect(body.text).toEqual('hi');
  });

  it('returns error 404', async() => {
    const body = await request(app)
      .get('/poo');

    expect(body.text).toEqual('Not Found');
  });
});

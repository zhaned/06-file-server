const request = require('supertest');
const app = require('../lib/app');

describe('app routes', () => {
  it('gets the / route and returns hi', async() => {
    const body = await request(app)
      .get('/');

    expect(body.text).toEqual('hi');
  });

  it('gets the /echo route and return status 200 with body', async() => {
    const newBody = 'plain text';

    const body = await request(app)
      .post('/echo')
      .send(newBody)
      .expect(200);

    expect(body.text).toEqual(newBody);
  });

  it('gets /red route and returns red header', async() => {
    const body = await request(app)
      .get('/red');

    expect(body.text).toEqual('<h1>red</h1>');
  });

  it('gets /green route and returns green header', async() => {
    const body = await request(app)
      .get('/green');

    expect(body.text).toEqual('<h1>green</h1>');
  });

  it('gets /blue route and returns blue header', async() => {
    const body = await request(app)
      .get('/blue');

    expect(body.text).toEqual('<h1>blue</h1>');
  });

  it('returns error 404', async() => {
    const body = await request(app)
      .get('/poo');

    expect(body.text).toEqual('Not Found');
  });
});

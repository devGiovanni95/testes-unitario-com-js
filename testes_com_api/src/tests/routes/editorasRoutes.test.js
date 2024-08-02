import request from 'supertest';
import app from '../../app';

let server;
beforeEach(() => {
  const port = 3000;
  server = app.listen(port);
});
afterEach(() => {
  server.close();
});

describe('Get em /editoras', () => {
  it('Deve retornar uma lista de editoras', async () => {
    await request(app)
      .get('/editoras')
      .set('Accept', 'application/json') // opcionais
      .expect('content-type', /json/) // opcionais
      .expect(200);
  });
});

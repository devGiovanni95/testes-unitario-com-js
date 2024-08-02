import request from 'supertest';
import { describe, expect, it } from '@jest/globals';
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

  it('Deve retornar uma lista de editoras guardando o resultado do GET', async () => {
    const resposta = await request(app)
      .get('/editoras')
      .set('Accept', 'application/json') // opcionais
      .expect('content-type', /json/) // opcionais
      .expect(200);

    expect(resposta.body[0].email).toEqual('e@e.com');
  });
});

// pegar sempre o id do recurso criado
let idResposta;
describe('POST em /editoras', () => {
  it('Deve adicionar uma nova editora', async () => {
    const resposta = await request(app)
      .post('/editoras')
      .send({
        nome: 'CDC',
        cidade: 'Sao Paulo',
        email: 'c@c.com',
      })
      .expect(201);
    idResposta = resposta.body.content.id;
  });
});

describe('DELETE em /editoras/id', () => {
  it('Deve deletar o recurso adicionado', async () => {
    await request(app)
      .delete(`/editoras/${idResposta}`)
      .expect(200);
  });
});

describe('GET em /editoras/id', () => {
  it('Deve retornar o recurso selecionado', async () => {
    await request(app)
      .delete(`/editoras/${idResposta}`)
      .expect(200);
  });
});

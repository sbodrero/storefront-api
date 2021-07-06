import supertest from 'supertest';
import { app } from '../server';

const request = supertest(app);

describe('Test server endpoint', () => {
  it('get the server endpoint', async (done) => {
    const response = await request.get('/');
    expect(response.status).toBe(200);
    done();
  });
})

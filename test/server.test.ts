import createServer from '../src/server';
const server = createServer();

test('GET /inventory returns list of products', async (done) => {
  server.inject({ method: 'GET', url: `/inventory` }, (err, res) => {
    expect(res.statusCode).toBe(200);
    expect(JSON.parse(res.payload)).toEqual([]);
    done();
  });
});

import fastify from 'fastify';

function createServer() {
  const server = fastify({ logger: { prettyPrint: true } });

  return server;
}

export default createServer;

import fastify from 'fastify';

import inventoryHandler from './modules/inventory/routes';
import db from './plugins/db';

function createServer() {
  const server = fastify({ logger: { prettyPrint: true } });

  server.register(require('fastify-oas'), {
    routePrefix: '/docs',
    exposeRoute: true,
    swagger: {
      info: {
        title: 'inventory api',
        description: 'api document',
        version: '0.1.0',
      },
      servers: [
        { url: 'http://localhost:3000', description: 'development' },
        {
          url: 'https://<production-url>',
          description: 'production',
        },
      ],
      schemes: ['http'],
      consumes: ['application/json'],
      produces: ['application/json'],
      security: [{ bearerAuth: [] }],
      securityDefinitions: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        },
      },
    },
  });
  server.register(db);
  server.register(inventoryHandler);
  server.setErrorHandler((err, req, res) => {
    req.log.error(err.toString());
    res.send({ err });
  });

  return server;
}

export default createServer;

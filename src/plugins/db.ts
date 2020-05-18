import 'reflect-metadata';
import fp from 'fastify-plugin';
import { createConnection, getConnectionOptions } from 'typeorm';
import { Inventory } from '../modules/inventory/entity';

export default fp(async (server) => {
  try {
    const connectionOptions = await getConnectionOptions();
    Object.assign(connectionOptions, {
      options: { encrypt: true },
      entities: [Inventory],
    });
    server.log.info(`connecting to database: ${connectionOptions.type}...`);
    const connection = await createConnection(connectionOptions);
    server.log.info('database connected');

    server.decorate('db', {
      inventory: connection.getRepository(Inventory),
    });
  } catch (error) {
    server.log.error(error);
  }
});

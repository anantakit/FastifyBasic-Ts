const inventoryHandler = (server, options, next) => {
  server.get('/inventory', async (req, res) => {
    req.log.info(`list inventory from db`);
    const inventory = [];
    res.send(inventory);
  });

  next();
};

export default inventoryHandler;

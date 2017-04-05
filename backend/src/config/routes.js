const express = require('express');

module.exports = function(server) {
  const router = express.Router();
  const billingCycleService = require('../api/billingCycle/billingCycleService');

  server.use('/api', router);

  billingCycleService.register(router, '/billingCycles');
};

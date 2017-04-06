const billingCycle = require('./billingCycle');
const errorHandler = require('../common/errorHandler')

billingCycle.methods(['get', 'post', 'put', 'delete']);
billingCycle.updateOptions({new: true, runValidators: true});
billingCycle
  .after('post', errorHandler)
  .after('put', errorHandler)

billingCycle.route('count', (request, response, next) => {
  billingCycle.count((error, value) => {
    if (error) {
      response.status(500).json({errors: [error]});
    } else {
      response.status(200).json({value});
    }
  });
});

billingCycle.route('summary', (request, response, next) => {
  billingCycle.aggregate({
      $project: {credit: {$sum: "$credits.value"}, debt: {$sum: "$debts.value"}}
  }, {
      $group: { _id: null, credit: {$sum: "$credit"}, debt: {$sum: "$debt"}}
  }, {
      $project: { _id: 0, credit: 1, debt: 1}
  },
  (error, result) => {
    if (error) {
      response.status(500).json({errors: [error]});
    } else {
      response.status(200).json(result[0] || {credit: 0, debt: 0});
    }
  });
});

module.exports = billingCycle;

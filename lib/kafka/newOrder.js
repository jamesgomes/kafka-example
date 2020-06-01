const { v4: uuidv4 } = require('uuid');
var Chance = require('chance');
const dispatcher = require('./dispatcher');
var chance = new Chance();

const createOrder = () => {
  for (var i = 0; i < 5; i++) {
    const key = uuidv4();
    const value = chance.floating({ min: 0, max: 100 });
    const order = {
      key,
      value
    };
    dispatcher.send('ECOMMERCE_NEW_ORDER', key, order);
  };
};

module.exports = {
  createOrder
}

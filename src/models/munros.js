const PubSub = require('../helpers/pub_sub.js')
const RequestHelper = require('../helpers/request_helper.js')

const Munros = function () {
  this.munroData = null;
}

Munros.prototype.bindEvents = function () {
  const requestHelper = new RequestHelper();
  this.munroData = requestHelper.get('https://munroapi.herokuapp.com/api/munros');
  PubSub.publish("Munros:munro-data-ready", this.munroData);
};

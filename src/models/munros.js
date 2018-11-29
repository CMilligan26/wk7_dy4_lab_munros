const PubSub = require('../helpers/pub_sub.js')
const RequestHelper = require('../helpers/request_helper.js')

const Munros = function () {
  this.munroData = null;
}

Munros.prototype.bindEvents = function () {
  const requestHelper = new RequestHelper("https://munroapi.herokuapp.com/api/munros");
  requestHelper.get().then((data) => {
    this.munroData = data;
    PubSub.publish("Munros:munro-data-ready", data);
    const regions = this.getRegions();
    PubSub.publish("Munros:regions_data", regions)
  });
};

Munros.prototype.getRegions = function () {
  const regions = this.munroData.map(munro => munro.region).filter((region, index, regions) => regions.indexOf(region) === index);
  return regions;
};

module.exports = Munros;

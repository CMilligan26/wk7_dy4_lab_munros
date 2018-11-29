const PubSub = require("../helpers/pub_sub.js");
const MunroData = require("./munro_data.js");

const MunroList = function (container) {
  this.container = container;
  this.munros = null;
};

MunroList.prototype.bindEvents = function () {
  PubSub.subscribe("Munros:munro-data-ready", (data) => {
    this.munros = data.detail;
    this.clearMunros();
    this.createMunros(this.munros);
  });
  PubSub.subscribe("SelectView:selected-region", (region) => {
    this.clearMunros();
    const munrosByRegion = this.munros.filter(munro => munro.region === region.detail);
    this.createMunros(munrosByRegion);
  });
};

MunroList.prototype.clearMunros = function () {
  this.container.textContent = '';
};

MunroList.prototype.createMunros = function (array) {
  for (const munro of array) {
    const div = document.createElement('div');
    div.className = "munro";
    const munroData = new MunroData();
    munroData.displayData(div, munro);
    this.container.appendChild(div);
  }
};

module.exports = MunroList;

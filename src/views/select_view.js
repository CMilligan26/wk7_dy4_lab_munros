const PubSub = require('../helpers/pub_sub.js')

const SelectView = function (select) {
  this.regions = null;
  this.select = select;
}

SelectView.prototype.bindEvents = function () {
  PubSub.subscribe("Munros:regions_data", (regionData) => {
    this.regions = regionData.detail;
    this.populateRegions();
  });
  this.select.addEventListener('change', (event) => {
    PubSub.publish("SelectView:selected-region", event.target.value);
  });
};

SelectView.prototype.populateRegions = function () {
  for (region of this.regions){
    this.select.appendChild(this.createCustomElement("option", "textContent", region));
  };
};

SelectView.prototype.createCustomElement = function (type, attr, value) {
  const element = document.createElement(type);
  element[attr] = value;
  return element;
};

module.exports = SelectView;

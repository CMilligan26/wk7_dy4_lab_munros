const MunroData = function () {

}

MunroData.prototype.displayData = function (div, data) {
  div.appendChild(this.createCustomElement("h3", "textContent", data.name));
  const list = document.createElement("ul");
  list.appendChild(this.createCustomElement("li", "textContent", data.meaning));
  list.appendChild(this.createCustomElement("li", "textContent", data.height));
  div.appendChild(list);
};

MunroData.prototype.createCustomElement = function (type, attr, value) {
  const element = document.createElement(type);
  element[attr] = value;
  return element;
};

module.exports = MunroData;

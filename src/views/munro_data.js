const MunroData = function () {

}

MunroData.prototype.displayData = function (div, data) {
  div.appendChild(this.createCustomElement("h3", "textContent", data.name));
  const list = document.createElement("ul");
  list.appendChild(this.createCustomElement("p", "textContent", `Meaning: ${data.meaning}`));
  list.appendChild(this.createCustomElement("p", "textContent", `Height: ${data.height}`));
  div.appendChild(list);
  const image = this.createCustomElement("img", "src", "https://techflourish.com/images/mountain-with-cross-clipart-9.png")
  image.style.height = `${data.height/5}px`;
  div.appendChild(image);
};


MunroData.prototype.createCustomElement = function (type, attr, value) {
  const element = document.createElement(type);
  element[attr] = value;
  return element;
};

module.exports = MunroData;

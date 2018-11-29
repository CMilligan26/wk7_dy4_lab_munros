const Munros = require('./models/munros.js')
const MunroList = require("./views/munro_list.js")
const SelectView = require("./views/select_view.js")

document.addEventListener('DOMContentLoaded', () => {
  const munros = new Munros();
  munros.bindEvents();

  const munroList = new MunroList(document.querySelector('#munros'));
  munroList.bindEvents();

  const selectView = new SelectView(document.querySelector('#munro_select'));
  selectView.bindEvents();
})

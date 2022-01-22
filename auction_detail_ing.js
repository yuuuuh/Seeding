function height(height) {
    document.getElementById("toptapdiv").style.height = height;
}

function tap_click(hidden,show){
  var1 = document.getElementById(hidden);
  var2 = document.getElementById(show);

  var1.style.visibility = "hidden";
  var2.style.visibility = "visible";
  this.style.fontWeight = "bold";
  this.style.color = "#222222";
  this.style.borderBottom = "4px";
  this.style.borderBottomColor = "#222222";
}

function inputNumberFormat(obj) {
    obj.value = comma(uncomma(obj.value));
 }

function comma(str) {
    str = String(str);
    return str.replace(/(\d)(?=(?:\d{3})+(?!\d))/g, '$1,');
}

function uncomma(str) {
    str = String(str);
    return str.replace(/[^\d]+/g, '');
}

function change1(number){
  var num = document.getElementById("weeklabel")
  var this_qty = Number(num.value);
  var result = this_qty + number;

  if(result < 0)
    result = 0;
  num.value = result;
}

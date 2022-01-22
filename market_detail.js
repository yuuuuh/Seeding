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

function rightbox_click(hidden1,hidden2,hidden3,show){
  var1 = document.getElementById(hidden1);
  var2 = document.getElementById(hidden2);
  var3 = document.getElementById(hidden3);
  var4 = document.getElementById(show);

  var1.style.visibility = "hidden";
  var2.style.visibility = "hidden";
  var3.style.visibility = "hidden";
  var4.style.visibility = "visible";
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

function change1(num){
   var x  = document.form1;
   var y = Number(x.money.value) + num;
   if(y < 0) y = 0;
   x.money.value = y;
}

function change2(num){
   var x  = document.form2;
   var y = Number(x.week.value) + num;
   if(y < 0) y = 0;
   x.week.value = y;
}

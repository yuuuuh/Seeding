function onmouse(company,plant,cate){
  var child1 = document.getElementById(company);
  var child2 = document.getElementById(plant);
  var child3 = document.getElementById(cate);
  child1.style.visibility = "hidden";
  child2.style.visibility = "hidden";
  child3.style.visibility = "hidden";
}

function outmouse(company,plant,cate){
  var child1 = document.getElementById(company);
  var child2 = document.getElementById(plant);
  var child3 = document.getElementById(cate);
  child1.style.visibility = "visible";
  child2.style.visibility = "visible";
  child3.style.visibility = "visible";
}

function height(height) {
    document.getElementById("toptapdiv").style.height = height;
}

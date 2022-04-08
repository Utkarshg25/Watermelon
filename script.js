function main(){
var select = document.getElementById('select1');
var value = select.options[select.selectedIndex].value;

var z=document.createElement('label');
z.innerText="ashish";
document.getElementById('1').appendChild(z);
console.log(value);
}

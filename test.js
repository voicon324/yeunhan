 var duy = document.querySelector('.ok');
duy.onclick = function(){
    if(this.innerText == 'No'){
       // console.log('duy');
        var t = non.innerText;
        non.innerText = this.innerText;
        this.innerText = t ; 
       // console.log( t);
        }
        else alert('Yêu em!')
}
var non = document.querySelector('.no');
non.onclick = hihi; 
function hihi(){
    if(this.innerText == 'No'){
  //  console.log('duy');
    var t = duy.innerText;
    duy.innerText = this.innerText;
    this.innerText = t ; 
  //  console.log( t);
    }
    else alert('Yêu em!')
}

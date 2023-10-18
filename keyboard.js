var output ="";

function buttonClick(str){

   output =output + str;
  let key= document.getElementById("display").textContent =output;
  console.log(`key : ${key}`)
}

function deleteKey(){
    output ="";
    let key= document.getElementById("display").textContent =output;
}
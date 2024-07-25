let input1 = document.querySelector("#input1");
let input2 = document.querySelector("#input2");
let result = document.querySelector("#result");
let operate = document.querySelector("#operate");

result.value = "0";
operate.addEventListener("click",function(){
    let res = parseInt(input1.value) + parseInt(input2.value);
    result.value=res;
    input1.value=0;
    input2.value=0;
})

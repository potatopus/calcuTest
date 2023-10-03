let lastClick = "";
x = 0;
function addNum(){
    let numIn = Number(document.getElementById("numIn").value);
    if (lastClick == "addNum"){
        x += numIn;
        document.getElementById("currentTotal").innerHTML=x;
        document.getElementById("numIn").value=null;
        lastClick = "addNum";
    }
    else if (lastClick == "subNum"){
        x -= numIn;
        document.getElementById("currentTotal").innerHTML=x;
        document.getElementById("numIn").value=null;
        lastClick = "addNum";
    }
    else if (lastClick == "mulNum"){
        x *= numIn;
        document.getElementById("currentTotal").innerHTML="";
        document.getElementById("numIn").value=x;
        lastClick = "addNum";
    }
    else if (lastClick == "divNum"){
        x /= numIn;
        document.getElementById("currentTotal").innerHTML="";
        document.getElementById("numIn").value=x;
        lastClick = "addNum";
    }
    else if (lastClick == "moduloNum"){
        x %= numIn;
        document.getElementById("currentTotal").innerHTML=x;
        document.getElementById("numIn").value=null;
        lastClick = "addNum";
    }
    else {
        x = numIn;
        document.getElementById("currentTotal").innerHTML=x;
        document.getElementById("numIn").value=null;
        lastClick = "addNum";
    }
}
function subNum(){
    let numIn = Number(document.getElementById("numIn").value);
    if (lastClick == "subNum"){
        x -= numIn;
        document.getElementById("currentTotal").innerHTML=x;
        document.getElementById("numIn").value=null;
        lastClick = "subNum";
    }
    else if (lastClick == "addNum"){
        x += numIn;
        document.getElementById("currentTotal").innerHTML=x;
        document.getElementById("numIn").value=null;
        lastClick = "subNum";
    }
    else if (lastClick == "mulNum"){
        x *= numIn;
        document.getElementById("currentTotal").innerHTML="";
        document.getElementById("numIn").value=x;
        lastClick = "subNum";
    }
    else if (lastClick == "divNum"){
        x /= numIn;
        document.getElementById("currentTotal").innerHTML="";
        document.getElementById("numIn").value=x;
        lastClick = "subNum";
    }
    else if (lastClick == "moduloNum"){
        x %= numIn;
        document.getElementById("currentTotal").innerHTML=x;
        document.getElementById("numIn").value=null;
        lastClick = "sumNum";
    }
    else {
        x = numIn;
        document.getElementById("currentTotal").innerHTML=x;
        document.getElementById("numIn").value=null;
        lastClick = "subNum";
    }
}
function mulNum(){
    let numIn = Number(document.getElementById("numIn").value);
    if (lastClick == "mulNum"){
        x *= numIn;
        document.getElementById("currentTotal").innerHTML=x;
        document.getElementById("numIn").value=null;
        lastClick = "mulNum";
    }
    else if (lastClick == "subNum"){
        x -= numIn;
        document.getElementById("currentTotal").innerHTML=x;
        document.getElementById("numIn").value=null;
        lastClick = "mulNum";
    }
    else if (lastClick == "addNum"){
        x += numIn;
        document.getElementById("currentTotal").innerHTML=x;
        document.getElementById("numIn").value=null;
        lastClick = "mulNum";
    }
    else if (lastClick == "divNum"){
        x /= numIn;
        document.getElementById("currentTotal").innerHTML="";
        document.getElementById("numIn").value=x;
        lastClick = "mulNum";
    }
    else if (lastClick == "moduloNum"){
        x %= numIn;
        document.getElementById("currentTotal").innerHTML=x;
        document.getElementById("numIn").value=null;
        lastClick = "mulNum";
    }
    else {
        x = numIn;
        document.getElementById("currentTotal").innerHTML=x;
        document.getElementById("numIn").value=null;
        lastClick = "mulNum";
    }
}
function divNum(){
    let numIn = Number(document.getElementById("numIn").value);
    if (lastClick == "divNum"){
        x /= numIn;
        document.getElementById("currentTotal").innerHTML=x;
        document.getElementById("numIn").value=null;
        lastClick = "divNum";
    }
    else if (lastClick == "subNum"){
        x -= numIn;
        document.getElementById("currentTotal").innerHTML=x;
        document.getElementById("numIn").value=null;
        lastClick = "divNum";
    }
    else if (lastClick == "addNum"){
        x += numIn;
        document.getElementById("currentTotal").innerHTML=x;
        document.getElementById("numIn").value=null;
        lastClick = "divNum";
    }
    else if (lastClick == "mulNum"){
        x *= numIn;
        document.getElementById("currentTotal").innerHTML="";
        document.getElementById("numIn").value=x;
        lastClick = "divNum";
    }
    else if (lastClick == "moduloNum"){
        x %= numIn;
        document.getElementById("currentTotal").innerHTML=x;
        document.getElementById("numIn").value=null;
        lastClick = "divNum";
    }
    else {
        x = numIn;
        document.getElementById("currentTotal").innerHTML=x;
        document.getElementById("numIn").value=null;
        lastClick = "divNum";
    }
}
function moduloNum(){
    let numIn = Number(document.getElementById("numIn").value);
    if (lastClick == "moduloNum"){
        x %= numIn;
        document.getElementById("currentTotal").innerHTML=x;
        document.getElementById("numIn").value=null;
        lastClick = "moduloNum";
    }
    else if (lastClick == "subNum"){
        x -= numIn;
        document.getElementById("currentTotal").innerHTML=x;
        document.getElementById("numIn").value=null;
        lastClick = "moduloNum";
    }
    else if (lastClick == "addNum"){
        x += numIn;
        document.getElementById("currentTotal").innerHTML=x;
        document.getElementById("numIn").value=null;
        lastClick = "moduloNum";
    }
    else if (lastClick == "mulNum"){
        x *= numIn;
        document.getElementById("currentTotal").innerHTML="";
        document.getElementById("numIn").value=x;
        lastClick = "moduloNum";
    }
    else if (lastClick == "divNum"){
        x /= numIn;
        document.getElementById("currentTotal").innerHTML="";
        document.getElementById("numIn").value=x;
        lastClick = "moduloNum";
    }
    else {
        x = numIn;
        document.getElementById("currentTotal").innerHTML=x;
        document.getElementById("numIn").value=null;
        lastClick = "moduloNum";
    }
}
function exponentiation(){
    let numIn = Number(document.getElementById("numIn").value);
    if (lastClick == "exponentiation"){
        x **= numIn;
        document.getElementById("currentTotal").innerHTML=x;
        document.getElementById("numIn").value=null;
        lastClick = "exponentiation";
    }
    else if (lastClick == "moduloNum"){
        x %= numIn;
        document.getElementById("currentTotal").innerHTML=x;
        document.getElementById("numIn").value=null;
        lastClick = "exponentiation";
    }
    else if (lastClick == "subNum"){
        x -= numIn;
        document.getElementById("currentTotal").innerHTML=x;
        document.getElementById("numIn").value=null;
        lastClick = "exponentiation";
    }
    else if (lastClick == "addNum"){
        x += numIn;
        document.getElementById("currentTotal").innerHTML=x;
        document.getElementById("numIn").value=null;
        lastClick = "exponentiation";
    }
    else if (lastClick == "mulNum"){
        x *= numIn;
        document.getElementById("currentTotal").innerHTML="";
        document.getElementById("numIn").value=x;
        lastClick = "exponentiation";
    }
    else if (lastClick == "divNum"){
        x /= numIn;
        document.getElementById("currentTotal").innerHTML="";
        document.getElementById("numIn").value=x;
        lastClick = "exponentiation";
    }
    else {
        x = numIn;
        document.getElementById("currentTotal").innerHTML=x;
        document.getElementById("numIn").value=null;
        lastClick = "exponentiation";
    }
}
function clearAll(){
    document.getElementById("numIn").value=null;
    document.getElementById("currentTotal").innerHTML="";
    lastClick = "clearAll"
}
function equals(){
    let numIn = Number(document.getElementById("numIn").value);
    if (lastClick == "addNum"){
        x += numIn;
        document.getElementById("currentTotal").innerHTML="";
        document.getElementById("numIn").value=x;
        lastClick = "equals";
    }
    else if (lastClick == "subNum"){
        x -= numIn;
        document.getElementById("currentTotal").innerHTML="";
        document.getElementById("numIn").value=x;
        lastClick = "equals";
    }
    else if (lastClick == "mulNum"){
        x *= numIn;
        document.getElementById("currentTotal").innerHTML="";
        document.getElementById("numIn").value=x;
        lastClick = "equals";
    }
    else if (lastClick == "divNum"){
        x /= numIn;
        document.getElementById("currentTotal").innerHTML="";
        document.getElementById("numIn").value=x;
        lastClick = "equals";
    }
    else if (lastClick == "moduloNum" && numIn !=0 ){
        x %= numIn;
        document.getElementById("currentTotal").innerHTML="";
        document.getElementById("numIn").value=x;
        lastClick = "equals";
    }
    else if (lastClick == "moduloNum" && numIn == ""){
        x /= 100;
        document.getElementById("currentTotal").innerHTML="";
        document.getElementById("numIn").value=x;
        lastClick = "equals";
    }
    else if (lastClick == "exponentiation"){
        x **= numIn;
        document.getElementById("currentTotal").innerHTML=null;
        document.getElementById("numIn").value=x;
        lastClick = "equals";
    }
}
function num1(){
    if (lastClick == "equals"){
        document.getElementById("numIn").value=1;
        lastClick = "num1"
    }
    else {
        document.getElementById("numIn").value+=1;
    }
}
function num2(){
    if (lastClick == "equals"){
        document.getElementById("numIn").value=2;
        lastClick = "num2"
    }
    else {
        document.getElementById("numIn").value+=2;
    }
}
function num3(){
    if (lastClick == "equals"){
        document.getElementById("numIn").value=3;
        lastClick = "num3"
    }
    else {
        document.getElementById("numIn").value+=3;
    }
}
function num4(){
    if (lastClick == "equals"){
        document.getElementById("numIn").value=4;
        lastClick = "num4"
    }
    else {
        document.getElementById("numIn").value+=4;
    }
}
function num5(){
    if (lastClick == "equals"){
        document.getElementById("numIn").value=5;
        lastClick = "num5"
    }
    else {
        document.getElementById("numIn").value+=5;
    }
}
function num6(){
    if (lastClick == "equals"){
        document.getElementById("numIn").value=6;
        lastClick = "num6"
    }
    else {
        document.getElementById("numIn").value+=6;
    }
}
function num7(){
    if (lastClick == "equals"){
        document.getElementById("numIn").value=7;
        lastClick = "num7"
    }
    else {
        document.getElementById("numIn").value+=7;
    }
}
function num8(){
    if (lastClick == "equals"){
        document.getElementById("numIn").value=8;
        lastClick = "num8"
    }
    else {
        document.getElementById("numIn").value+=8;
    }
}
function num9(){
    if (lastClick == "equals"){
        document.getElementById("numIn").value=9;
        lastClick = "num9"
    }
    else {
        document.getElementById("numIn").value+=9;
    }
}
function num0(){
    if (lastClick == "equals"){
        document.getElementById("numIn").value=0;
        lastClick = "num0"
    }
    else {
        document.getElementById("numIn").value+=0;
    }
}
function inDec(){
    let dec = '.';
    const numIn = document.getElementById("numIn");
    const currentInputValue = numIn.value;
    numIn.value = currentInputValue + dec;
}
function del(){
    let numIn = document.getElementById("numIn").value;
    numIn = numIn.slice(0, -1);
    document.getElementById("numIn").value=numIn;
}

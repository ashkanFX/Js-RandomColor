const  hex =["0","1","2","3","4","5","6","7","8","9","A","B","D","E","F"]
const btn = document.getElementById("btn")
const name =document.querySelector(".name")

btn.addEventListener("click",function () {
     hexcolor  = "#";
    for (let i =0 ; i < 6; i++ ){
        hexcolor += hex[random()]
    }
    document.body.style.backgroundColor =hexcolor;
    name.textContent= hexcolor;
    btn.style.border= hexcolor ;
    console.log(hexcolor)
})
function random() {
    return Math.floor(Math.random()*hex.length)
}

document.title = "Color Changer";


const colorInput = document.querySelector("#color");
const form = document.querySelector("form");
let color;
const modal1 = document.querySelector("#modal");
const err1 = document.getElementById("err");
const close1 = document.querySelector("#close");



colorInput.addEventListener("change", function(e){
    if (e.target.value === "") {
        modal1.style.display = "flex"
        modal1.style.animation = "modalkeyFrame 0.5s 1";
        err1.textContent = "IDAN, PLEASE ENTER A COLOR."
        console.log(err1.textContent);
    }else{
        document.body.style.backgroundColor = e.target.value;
    }
})

form.addEventListener("submit", function(e){
    e.preventDefault();
 })

close1.addEventListener("click", function(){
    modal1.style.display = "none"
    modal1.style.animation = "modalkeyFrame 0.5s 1";
    err1.textContent = ""
    document.body.style.backgroundColor = ""
})


//  bodyIn.addEventListener("submit", function(){
//     bodyIn.style.backgroundColor = color
// })

const area = document.querySelector("textarea");
const button1 = document.querySelector(".one");
const button2 = document.querySelector(".two");

button2.addEventListener("click",clear);
     function clear() {
     area.value = " ";
}

button1.addEventListener("click",function(){
     if (area.value == " ") {
          alert("Please fill in the blank")
     }
})



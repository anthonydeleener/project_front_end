function loginRegisterAnime(){
   let animation = document.querySelector("p.animation");
   
   var form = document.querySelector("form");

   form.addEventListener("mouseover",function(){
      animation.classList.toggle("active");
   });
}


export {loginRegisterAnime};



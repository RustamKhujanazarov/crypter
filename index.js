// function redHeart(){
//   let x = document.getElementById("red-heart");
//     if (x.style.opacity === "0") {
//       x.style.opacity = "1";
//     } else {
//       x.style.opacity = "0";
//     }
// };

// function redHeart1(){
//   let x = document.getElementById("red-heart1");
//     if (x.style.opacity === "0") {
//       x.style.opacity = "1";
//     } else {
//       x.style.opacity = "0";
//     }
// };

// function redHeart2(){
//   let x = document.getElementById("red-heart2");
//     if (x.style.opacity === "0") {
//       x.style.opacity = "1";
//     } else {
//       x.style.opacity = "0";
//     }
// };

// function redHeart3(){
//   let x = document.getElementById("red-heart3");
//     if (x.style.opacity === "0") {
//       x.style.opacity = "1";
//     } else {
//       x.style.opacity = "0";
//     }
// };

// function redHeart4(){
//   let x = document.getElementById("red-heart4");
//     if (x.style.opacity === "0") {
//       x.style.opacity = "1";
//     } else {
//       x.style.opacity = "0";
//     }
// };

// function redHeart5(){
//   let x = document.getElementById("red-heart5");
//     if (x.style.opacity === "0") {
//       x.style.opacity = "1";
//     } else {
//       x.style.opacity = "0";
//     }
// };

// function redHeart6(){
//   let x = document.getElementById("red-heart6");
//     if (x.style.opacity === "0") {
//       x.style.opacity = "1";
//     } else {
//       x.style.opacity = "0";
//     }
// };

// function redHeart7(){
//   let x = document.getElementById("red-heart7");
//     if (x.style.opacity === "0") {
//       x.style.opacity = "1";
//     } else {
//       x.style.opacity = "0";
//     }
// };

// function redHeart8(){
//   let x = document.getElementById("red-heart8");
//     if (x.style.opacity === "0") {
//       x.style.opacity = "1";
//     } else {
//       x.style.opacity = "0";
//     }
// };

// function redHeart9(){
//   let x = document.getElementById("red-heart9");
//     if (x.style.opacity === "0") {
//       x.style.opacity = "1";
//     } else {
//       x.style.opacity = "0";
//     }
// };

// function redHeart10(){
//   let x = document.getElementById("red-heart10");
//     if (x.style.opacity === "0") {
//       x.style.opacity = "1";
//     } else {
//       x.style.opacity = "0";
//     }
// };

// function redHeart11(){
//   let x = document.getElementById("red-heart11");
//     if (x.style.opacity === "0") {
//       x.style.opacity = "1";
//     } else {
//       x.style.opacity = "0";
//     }
// };

// function redHeart(){
//     const heartList = document.querySelectorAll(".section-bid__content__bottom__card__hover__span-three");
//     for (let i = 0; i < heartList.length; i++) {
//       if (heartList[i].style.opacity === "0") {
//         heartList[i].style.opacity = "1";
//       }
//       else {
//         heartList[i].style.opacity = "0";
//       }
//     }
//     console.log("ishladi");
// };
// const heartList = document.querySelectorAll(".section-bid__content__bottom__card__hover__span-three");
// forEach(heartList, )
// heartList.addEventListener("click").forEach(redHeart(){
//   let click = document.getElementsByClassName("section-bid__content__bottom__card__hover__span-three");
//   if (heartList.style.opacity === "0") {
//     heartList.style.opacity = "1";
//   }
//   else {
//     heartList.style.opacity = "0";
//   }
// console.log("ishladi");
// });
// function redHeart(){

const heartList = document.querySelectorAll(
  ".section-bid__content__bottom__card__hover__span-three");

heartList.forEach((heart) => {
  heart.addEventListener("click", () => {
    if (heart.style.opacity === "0") {
      heart.style.opacity = "1";
    } else {
      heart.style.opacity = "0";
    }
  });
});

setInterval(myTimer, 1000);

function myTimer() {
  const d = new Date();
  document.getElementById("seconds").innerHTML = d.getSeconds();
  document.getElementById("minutes").innerHTML = d.getMinutes();
  document.getElementById("hours").innerHTML = d.getHours();
}

function openSelect() {
  let x = document.getElementById("select");
  let y = document.getElementById("rotate-icon");
  if ((x.style.display === "none", y.style.transform === "rotate(0deg)")) {
    x.style.display = "block";
    y.style.transform = "rotate(180deg)";
  } else {
    x.style.display = "none";
    y.style.transform = "rotate(0deg)";
  }
}

// function openSelect(){
//   let x = document.querySelectorAll("#select");
//   let y = document.querySelectorAll("#rotate-icon");
//   for(select = 0; select < x.length, y.length; select++){
//     if (x[select].style.display === "none", y.style.transform === "rotate(0deg)") {
//       x[select].style.display = "block";
//       y[select].style.transform = "rotate(180deg)";
//     } else {
//       x[select].style.display = "none";
//       y[select].style.transform = "rotate(0deg)";
//     }
//   }
// };

// function rotateIcon(){
//   let y = document.getElementById("rotate-icon");
//   if (y.style.transform === "rotate(0deg)") {
//     y.style.transform = "rotate(180deg)";
//   } else {
//     y.style.transform = "rotate(0deg)";
//   }
// }

function mySelectorOne() {
  document.getElementById("select__text").innerHTML = "Today";
}

function mySelectorTwo() {
  document.getElementById("select__text").innerHTML = "Yesterday";
}

function mySelectorThree() {
  document.getElementById("select__text").innerHTML = "3 days ago";
}

function mySelectorFour() {
  document.getElementById("select__text").innerHTML = "1 month ago";
}

//

// function mouseOver() {
//   document.getElementById("mouse").style.zIndex = "2";
// };

// function mouseOut() {
//   document.getElementById("mouse").style.zIndex = "1";
// };

// let x, i, j, l, ll, selElmnt, a, b, c;
// x = document.getElementsByClassName("section-sellers__content__top__right");
// l = x.length;
// const btn = document.querySelector("#btn");
// btn.addEventListener("click",onClick)

// let count = 1;

// function onClick(){
//   let icon = document.getElementById("rotate-icon");
//   if(count){

//     icon.style.transform = "rotate(180deg)";
//     console.log("ishlab ketfi1")
//     count = 0
//   }
//   else if(count == 0){

//     icon.style.transform = "rotate(360deg)";
//     console.log("ishlab ketfi0")
//     count = 1
//   }
// }

// for (i = 0; i < l; i++) {
//   selElmnt = x[i].getElementsByTagName("select")[0];
//   ll = selElmnt.length;
//   a = document.createElement("DIV");
//   a.setAttribute("class", "select-selected");
//   a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
//   x[i].appendChild(a);
//   b = document.createElement("DIV");
//   b.setAttribute("class", "select-items select-hide");
//   for (j = 1; j < ll; j++) {
//     c = document.createElement("DIV");
//     c.innerHTML = selElmnt.options[j].innerHTML;
//     c.addEventListener("click", function(e) {
//         var y, i, k, s, h, sl, yl;
//         s = this.parentNode.parentNode.getElementsByTagName("select")[0];
//         sl = s.length;
//         h = this.parentNode.previousSibling;
//         for (i = 0; i < sl; i++) {
//           if (s.options[i].innerHTML == this.innerHTML) {
//             s.selectedIndex = i;
//             h.innerHTML = this.innerHTML;
//             y = this.parentNode.getElementsByClassName("same-as-selected");
//             yl = y.length;
//             for (k = 0; k < yl; k++) {
//               y[k].removeAttribute("class");
//             }
//             this.setAttribute("class", "same-as-selected");
//             break;
//           }
//         }
//         h.click();
//     });
//     b.appendChild(c);
//   }
//   x[i].appendChild(b);
//   a.addEventListener("click", function(e) {
//       e.stopPropagation();
//       closeAllSelect(this);
//       this.nextSibling.classList.toggle("select-hide");
//       this.classList.toggle("select-arrow-active");
//     });
// }

// x.addEventListener("click",function(){
//   console.log("ishladi")
//   let icon = document.getElementById("rotate-icon");
//   icon.style.transform = "rotate(180deg)"
// })

// function closeAllSelect(elmnt) {
//   var x, y, i, xl, yl, arrNo = [];
//   x = document.getElementsByClassName("select-items");
//   y = document.getElementsByClassName("select-selected");
//   // y.addEventListener("click");
//   xl = x.length;
//   yl = y.length;
//   for (i = 0; i < yl; i++) {
//     if (elmnt == y[i]) {
//       arrNo.push(i)
//     } else {
//       y[i].classList.remove("select-arrow-active");
//     }
//   }
//   for (i = 0; i < xl; i++) {
//     if (arrNo.indexOf(i)) {
//       x[i].classList.add("select-hide");
//     }
//   }
// }
// document.addEventListener("click", closeAllSelect);

// function onRotate(){
//   const rotated = document.getElementsByClassName("section-sellers__content__top__left__menu__icon");
//   rotated.style.transform = 'rotate(180deg)';
// };

// document.getElementsByClassName("select-selected").addEventListener("click", onRotate);;

// function redHeart(){
//   document.querySelector("i.fa-regular.fa-heart").classList.replace(".fa-regular", ".fa-solid");
// }

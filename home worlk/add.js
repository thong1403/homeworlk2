// //dom  document objeck

// // console.log(document);

// // 1. quely html element
// //lấy html sang js
// // .getElementbyID(id)

// // let div = document.getElementById("app");
// // console.log(div);

// //class name 
// //.getElementsByClassname)
// //----> html collection (array html)
// //  let divs=document.getElementsByClassName("app");
// // console.log(divs);

// // console.log(divs[0]);
// // console.log(divs[1]);

// // for (let i = 0; i<=div.length-1;i++){
// //     console.log(i,divs[i]);
// // }
// // let a = [14,23,03,45,8,8,56,123];
// // console.log(a[0]);
// // console.log(a[1]);
// // for (let i = 0; i < a.length; i++) {
// //    console.log(a[i]);
    
// // }

// //.getElementBytangname(tagname)
// // let a = document.getElementsByTagName("div");
// // console.log(a);

// let div = document.getElementById("app");
// console.log(div);
// console.dir(div);

// //basic properties (thuộc tính cơ bản)
// // .innertex
// // .innerhtml
// // .innercontent

// // div.innerText = "tao l chung đánh nhau không";
// // div.innerHTML=`<b style ="color: red";>Oke chua?</b>`;
// // div.textContent;

// //syle

// // console.log(div.style);
// // div.style.backgroundColor="pink";
// // div.style.width="500px";
// // div.style.height="500px";
// // div.style.borderRadius="500px";
// // div.style.textAlign="center";
// // div.style.lineHeight="500px";
// // div.style.fontSize="100px";
// // div.style.fontWeight="bold";
// // div.style.color="red"

// // background-color(snake case)


// // backgroundcolor(camelcase)
// console.log(div.classList);
// //.classList.app(newclass)

// div.classList.add("demo");
// console.log(div.classList);
// //.classList.remove(newclass)
// div.classList.remove("demo");
// console.log(div.classList);

// div.classList.value="app ";
// console.log(div.classList);
// div.classList.value +="demo";

// //id

// console.log(div.id);

// //getAttribute()
// div.getAttribute("class");
// div.getAttribute("id");
// console.log(div.getAttribute("class"));
// console.log(div.getAttribute("id"));


// //setAttribute()

// div.setAttribute("id","app2")
// console.log(div.id);

// //document.

// //.createelement();

// let a = document.createElement("a")
// a.setAttribute("href" , "http://www.google.com");
// a.innerText="click me!";
// console.log(a);

// //.appenchild

// div.appendChild(a);

// //.remove()

// // a.remove();

// //.children, .parentelement
// // console.log(div.children);//->mảng

// // console.log(div.children[0]);


// // let i = div.children[0];
// // console.log(i.parentElement.parentElement.parentElement.parentElement);


// // let btn = document.getElementById("nut");

// // btn.onclick = function(){
// //     alert("Tao muốn về nhà");
// //     div.style.backgroundColor="blue";
// //     div.style.fontSize="100px";
// //     div.style.color="pink";
// //     div.border.radius="10px";
// // }

//ex 1 . click bào btn -->biến mất thẻ div
// click lại lần nữa --> hiện ra thẻdiv
// 2. click vào btn --> đổi màu thẻ div thành đỏ

// click lại lần nữa --> đổi lại màu cũ
 
// .3 click vào btn -->tăng font size của thẻ div lên 1px

// 4. click vào btn --> giảm fontsize của thẻ div đi 1 px

// 5. click vào btn --> mỗi lần click vào đổi 1 màu ngẫu nhiên

// 6. click vào btn --> biến thẻ div trở thành hinhf tròn
// click lại lần nữa-->biến thẻ div trở lại ban đầu


let btn = document.getElementById("nut");
let 
btn.onclick=function(){
    a.remove()
}
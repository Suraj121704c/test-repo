// console.log("hello world")
// import { navBar } from "./navBar/components/nav.js";
// let header = document.querySelector(".header")
// header.innerHTML = navBar();




let bag1=[];
let cartitem=JSON.parse(localStorage.getItem("cartproduct1"))||[];

let url = "https://636b32aeb10125b78fed84ae.mockapi.io/Instuments";
fetch(url)
.then((res) =>  res.json())
.then((data) => {
    bag1 = data;
    // console.log(data)
    displayTable(data)
})
.catch((err) => alert("something went wrong"))

function Sortingid1(){
    let sort1 = document.querySelector("#id1").value
    if(sort1 == "LTH"){
       bag1.sort((a,b)=>a.id-b.id);
    }
   if(sort1=="HTL") {
        bag1.sort((a,b)=>b.id-a.id);
    }
    displayTable(bag1)

}

function Sorting1(){
    let sorted1 = document.querySelector("#price1").value
    if(sorted1 == "LTH"){
       
       bag1.sort((a,b)=> {

        let value1 = +(a.price.replace("€",""));

        let value2 = +(b.price.replace("€",""));
        
         return value1-value2;
    
    }  );
    }
   if(sorted1 == "HTL") {
            
    bag1.sort((a,b)=> {
    let value1 = +(a.price.replace("€",""));

    let value2 = +(b.price.replace("€",""));
    
     return value2-value1;
    });
       
    }
    displayTable(bag1)
}



function displayTable(array){
    // console.log(array)
    document.querySelector("#container1").innerHTML="";
    array.forEach((element) => {
                
    let div=document.createElement("div")

    let img=document.createElement("img")
    img.setAttribute("src",element.image)

    let name=document.createElement("h5")
    name.innerText=element.name;

    let detail=document.createElement("p")
    detail.innerText=element.pro_detail.substring(1,50);

    let id=document.createElement("h4")
    id.innerText=`id: ${element.id}`;
    
    let price=document.createElement("h4")
    price.innerText=`Price:- ${element.price}`;

    let review=document.createElement("h4")
    review.innerText=`rating: ${element.review_num}`;

    let shiping=document.createElement("p")
    shiping.innerText=`ship: ${element.free_ship}`;


    let button=document.createElement("button")
    button.innerText="add to cart"
    button.style.borderRadius = "20px";
    button.addEventListener("click",function(){
        let isPresent = false;

        for (let i = 0; i < cartitem.length; i++ ) {
                 
               if (cartitem[i] == element) {
                  
                    alert("item is already present in the cart");

                    isPresent = true;

                    break;

               }

        }

        if (!isPresent) {

            alert("Item added to the cart")

            cartitem.push(element)
            localStorage.setItem("cartproduct1",JSON.stringify(cartitem))


        }
        
        
        
    })

    div.append(img,name,detail,id,price,review,shiping,button)
    document.querySelector("#container1").append(div)
    });   
}


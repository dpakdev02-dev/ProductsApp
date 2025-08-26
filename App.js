let main=document.querySelector("main");    

let getApi= async()=>{
    let res=await fetch("https://fakestoreapi.com/products");
    let data=await res.json()

    console.log(data);

    data.map((ele)=>{
        let div=document.createElement("div");
        div.innerHTML=`<img src="${ele.image}" alt="">
                <h1>Product name:${ele.title.slice(0,11)}</h1>
                <h1>Product price:${ele.price}</h1>
                <h1>Product rating:${ele.rating.rate}</h1>`;
        div.classList.add("card");
        main.appendChild(div)

        let btn=document.getElementById("btn");
        let inp=document.getElementById("sbar");
        btn.addEventListener("click",(e)=>{
            e.preventDefault();
            div.style.display="none";
            if (ele.title.toLowerCase().includes(inp.value.toLowerCase())) {
                 div.style.display="flex";
            }
        })

        
    })
    
    return data;
}

getApi();



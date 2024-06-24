const button = document.getElementById("calculate");
button.addEventListener("click", () => {
    //  using client
    const first = document.getElementById("first");
    const second = document.getElementById("two");
    const tirth=document.createElement("div");
    document.getElementById("result").innerHTML = Number(first.value) + Number(second.value);
    tirth.innerHTML=Number(first.value) + Number(second.value);
    tirth.setAttribute("id","tirth");   
    tirth.setAttribute("class","input");   
    document.getElementById("result").appendChild(tirth);

    //  using server
    const data = fetch("http://localhost:3000/sum?a=" + first.value + "&b=" + second.value + "", {
        
    }).then(response => response.text()).then(data => {
        const liza=document.createElement("div");
       liza.innerHTML = data
        liza.setAttribute("id","liza");   
    liza.setAttribute("class","input"); 
    tirth.appendChild(liza)
    }) 
})

// debouncing , throttling
const debounce1 = document.getElementById("debounce1");
const debounce2 = document.getElementById("debounce2");
// consider we are adiing without start button on input we need to change number of request by throttling/debouncing
let timeout;
debounce1.addEventListener("input", () => {
   
    if(debounce1.value && debounce2.value){
        function pop(){
            const data = fetch("http://localhost:3000/sum?a=" + debounce1.value + "&b=" + debounce2.value + "", {
                
            }).then(response => response.text()).then(data => {
                const liza=document.createElement("div");
                liza.innerHTML = data
                 liza.setAttribute("id","liza");   
             liza.setAttribute("class","input"); 
                document.getElementById("result").appendChild(liza);
            })
        }
        function debounce(){
            
            clearTimeout(timeout)
        
       timeout = setTimeout(pop,1000)
    }
        debounce()

    }
})

debounce2.addEventListener("input", () => {
    
    if(debounce1.value && debounce2.value){
        function pop(){
            const data = fetch("http://localhost:3000/sum?a=" + debounce1.value + "&b=" + debounce2.value + "", {
                
            }).then(response => response.text()).then(data => {
                const liza=document.createElement("div");
                liza.innerHTML = data
                 liza.setAttribute("id","liza");   
             liza.setAttribute("class","input"); 
                document.getElementById("result").appendChild(liza);
            })
        }
        function debounce(){
            console.log(timeout)
                clearTimeout(timeout)
            
           timeout = setTimeout(pop,1000)
        }
        debounce()

    }
})
    


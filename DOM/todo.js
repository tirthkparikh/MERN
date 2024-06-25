const button = document.getElementById("add");
button.addEventListener("click", () => {
    const input = document.getElementById("input1").value;
    const input2 = document.getElementById("input2").value;
    console.log(input,input2)
    if(input && input2){
        const text1 = document.createElement("div");
        const text2 = document.createElement("div");
        text1.innerHTML = input;
        text2.innerHTML = input2;
        document.getElementById("result").appendChild(text1);
        document.getElementById("result").appendChild(text2);
        const button2 = document.createElement("button");
        button2.innerHTML="Mark as done"
        button2.setAttribute("class","done");
        document.getElementById("result").appendChild(button2);
        button2.addEventListener("click", () => {
            text1.style.textDecoration="line-through"
            text2.style.textDecoration="line-through"
            button2.innerHTML="Mark as undone";
            button2.setAttribute("class","undone");
            button2.addEventListener("click", () => {
                text1.style.textDecoration="none"
                text2.style.textDecoration="none"
                button2.innerHTML="Mark as done";
                button2.setAttribute("class","done");
            })
        })
    }
    
})
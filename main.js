var value= document.getElementById("storage").value;

document.getElementById("used").innerText= `${value} GB `;

function remain(){
    return 1000-value ;
}

document.getElementById("remains").innerText= remain();
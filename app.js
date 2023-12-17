

function myFunction(x) {
    

    if(document.getElementById("menu_pc").style.right != "0px"){
        x.classList.toggle("change");
        document.getElementById("menu_pc").style.right = "0px";
    }

    else{
        x.classList.toggle("change");
        document.getElementById("menu_pc").style.right = "-250px";
    }
  }

  function myFunctionTwo(x) {
    

    if(document.getElementById("menu_M").style.right != "0px"){
        x.classList.toggle("change");
        document.getElementById("menu_M").style.right = "0px";
    }

    else{
        x.classList.toggle("change");
        document.getElementById("menu_M").style.right = "-250px";
    }
  }
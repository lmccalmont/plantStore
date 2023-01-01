var order="";
var totalPrice=0;

function filterSelection(c) {
    var x, i;
    x = document.getElementsByClassName("filterDiv");
    if (c == "all") c = "";
    // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
    for (i = 0; i < x.length; i++) {
      w3RemoveClass(x[i], "show");
      if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
    }
  }
  
  // Show filtered elements
  function w3AddClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
      if (arr1.indexOf(arr2[i]) == -1) {
        element.className += " " + arr2[i];
      }
    }
  }
  
  // Hide elements that are not selected
  function w3RemoveClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
      while (arr1.indexOf(arr2[i]) > -1) {
        arr1.splice(arr1.indexOf(arr2[i]), 1);
      }
    }
    element.className = arr1.join(" ");
  }

    // Add active class to the current control button (highlight it)
    var btnContainer = document.getElementById("myBtnContainer");
    var btns = btnContainer.getElementsByClassName("btn");
    for (var i = 0; i < btns.length; i++) {
      btns[i].addEventListener("click", function() {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
      });
    }
    filterSelection("all")





window.onload = function() { 
 
    

     $.getJSON("https://homepage.cs.uiowa.edu/~lmccalmont/Stage0/PA.json", function(result){
        console.log(result)
        let plants=result.plants
        for(let i=0; i<plants.length; i++){
        let str="Name: " + plants[i].name +", " + "Price: "+plants[i].price + ", " + "Plant Type: " + plants[i].type+" ";
         let curID=plants[i].id;
         let myDiv=document.getElementById(curID);
         document.getElementById(curID).title=plants[i].name+"\n"+plants[i].price;
         myDiv.addEventListener('click',function(){
             order=order+str+"\n"
             document.getElementById("textArea").innerHTML = order;
             totalPrice=totalPrice+plants[i].price;
             document.getElementById("price").innerHTML = "Total Price: $"+totalPrice.toFixed(2);
             localStorage.setItem("totalPrice", totalPrice);
             console.log(totalPrice)
            console.log(order);
        
        });
      }

      })
      let empty=document.getElementById("empty")
       empty.addEventListener('click',function(){
        order="";
        document.getElementById("textArea").innerHTML = order;
        totalPrice=0;
        document.getElementById("price").innerHTML = "";
       });


    let error = document.getElementById("checkout")   
  error.addEventListener("click",function() { 
    document.getElementById("textArea").innerHTML = order;
    if (order == "") { 
              alert("Please add at least one item to your order."); 
          } else { 
              document.getElementById("checkoutForm").submit();  
              // submits the form that redirects to checkout page, see 
  form 
          } 
      }); // end click  
}; // end onload 




      
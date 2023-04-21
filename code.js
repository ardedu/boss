const myElement = document.getElementsByClassName('input_field')

for (let i = 0; i < myElement.length; i++) {
    myElement[i].addEventListener("focus", function() {
        myElement[i].placeholder = '';
        myElement[i].style.margin = "2%";
      });

    myElement[i].addEventListener("blur", function() {
    // Restore placeholder and margin when focus is lost
    myElement[i].placeholder = myElement[i].name;
    myElement[i].style.margin = "1.5%";
    myElement[i].addEventListener("blur", function() {
    console.log(myElement.value)
    if(myElement.value){
      myElement.style.border = "5px solid #09d624";

    };
    });
    });
  }


function validator(element, idOfErrorContainer, type)
{
  let input = element.value;

  let errMsg = document.getElementById(idOfErrorContainer);
  if(input===''){
    errMsg.innerHTML= type.charAt(0).toUpperCase() + type.slice(1);
      return;
  }

  let isValid = false;
  
  switch(type)
    {
      case "email":
          isValid = (/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/).test(input);
        break;
      case "phonenumber":
        isValid = (/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im).test(input);
        break;  
      case "age":
          console.log(input)
          isValid = (Number.parseInt(input) < 18) ? false: true;
        break;
    }

  if(!isValid) {
      if(type === "age")
        {
                errMsg.innerHTML= "<strong>Error</strong><p> Minimum of 18 years old</p>";
        } else
          {
           errMsg.innerHTML= "<strong>Error</strong><p>Invalid "+type.charAt(0).toUpperCase() + type.slice(1)+"</p>";

          }
  } else 
      {
        errMsg.innerHTML= type.charAt(0).toUpperCase() + type.slice(1);
    }
}


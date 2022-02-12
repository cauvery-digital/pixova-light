function GEEKFORGEEKS() {
        var name = document.forms["Contact"]["Name"];
        var email = document.forms["Contact"]["eMail"];
        // var phone = document.forms["Contact"]["Telephone"];
        var subject = document.forms["Contact"]["Subject"];
        //var password = document.forms["RegForm"]["Password"];
        var message = document.forms["Contact"]["Message"];
        var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/; 
        if (name.value == "") {
            window.alert("Please enter your name.");
            name.focus();
            return false;
        }

        if (!filter.test(email.value)) {  
            alert('Please enter a valid email address');  
            email.focus;  
            return false;  
  
        if (email.value == "") {
            window.alert("Please enter your email.");
            email.focus();
            return false;
        }
  
        if (subeject.value == "") {
            window.alert(
              "Please enter your subject.");
            subeject.focus();
            return false;
        }
  
        if (message.value == "") {
            window.alert(
              "Please enter your message.");
            message.focus();
            return false;
        }
  
        /* if (password.value == "") {
            window.alert("Please enter your password");
            password.focus();
            return false;
        }
  
        if (what.selectedIndex < 1) {
            alert("Please enter your course.");
            what.focus();
            return false;
        }  */
  
        return true;
    }
	
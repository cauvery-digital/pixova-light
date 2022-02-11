//Go To Next Function   
    $(window).scroll(function() {
    if ($(this).scrollTop()>10)
     {
        $('#GoToNext').hide(1000);
     }
    else
     {
      $('#GoToNext').show(1000);
     }
 });
 //Got To Top Fuction   
 $(document).scroll(function() {

        myID = document.getElementById("GoToTop");

        var myScrollFunc = function () {
            var y = window.scrollY;
            if (y >= 7800) {
                myID.className = "go-to-top show"
            } else {
                myID.className = "go-to-top hide"
            }
        };

        window.addEventListener("scroll", myScrollFunc);
    });
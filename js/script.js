$(document).ready(function () {
    $(".owl-carousel").owlCarousel(
        {
            items: 2 ,
            margin : 20 , 
            nav : true ,
            loop : true ,
            dots : false ,
            autoplay : true ,
            autoplayTimeout : 2500 ,
            autoplayHoverPause : true ,
            responsive : {
                0:{
                    items : 1 , 
                    autoplay: false
                } ,
                400 :{
                    items : 1
                } , 
                700:{
                    items : 1
                },
                992:{
                    items : 2
                }

            }
        }
    );
});
// ------------------------------------------

var topbtn = document.getElementById('topBtn')

window.addEventListener('scroll',function(){
    if(document.documentElement.scrollTop>300)
    topbtn.style.display ='block'
    else topbtn.style.display ='none'
})

// --------------------------------- valadtion--------------------------
var form = document.getElementById('myForm')
    myButton = document.getElementById('myButton')
form.addEventListener('input' , function(e){
    switch(e.target.id){
        case 'username' : 
            checkName(e.target)
            break
        case 'email' :
            checkEmail(e.target)
            break
        case 'password' : 
        checkPassword(e.target) 
        break
    }
})
myButton.addEventListener("click" , function(e){
    e.preventDefault()
    var name=document.getElementById('username')
        user=  name.value.trim()
    if (user==null || user=="") showError(name , "Name can't be blank")
    var x=document.getElementById('email')
        email=  x.value.trim()
    if (email==null || email=="") showError(x , "Email can't be blank")
    var y=document.getElementById('password')
    password=  y.value.trim()
    if (password==null || password=="") showError(y , "password can't be blank")
    
    
})
function checkName(inp){
    console.log(inp.value)
    var inputValue = inp.value.trim()
    if(inputValue.length >= 8) removeError(inp)
    else showError(inp , 'username must be at least 8 character' )
}

function checkEmail(inp){
    var emailReg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
    var inputValue = inp.value
    console.log(emailReg.test(inputValue))
    if(emailReg.test(inputValue) == false) showError(inp , 'email not valid')
    else removeError(inp) 
}
 function checkPassword (inp){
    var passReg = /^[A-Za-z]\w{7,14}$/
     var passvalue = inp.value
     if(passReg.test(passvalue) == false ) showError(inp,'Input Password and Submit [7 to 15 characters which contain only characters, numeric digits, underscore and first character must be a letter')
     else removeError(inp, '') 
 }

function showError(element , msg){
    element.nextElementSibling.innerText = msg
}

function removeError(element){
    element.nextElementSibling.innerText = ''
}


$(document).ready(function(){
  $('#contact-form').validate({
    rules:{
       name:{
      required:true,
      minlength:4,
      
      },
      email:{
        required:true,
        email:true
      },
      subject:{
        required:true,
        minlength:4

      },
      message:{
        required:true,
        minlength:10

      },
   
    }

  })
  
    
  }

)
 
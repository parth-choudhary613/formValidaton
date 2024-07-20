function validation(){
    var user=document.getElementById('user').value;
    var pass=document.getElementById('pass').value;
    var cpass=document.getElementById('cpass').value;
    var mail=document.getElementById('mail').value;
    var mobile=document.getElementById('mobile').value;
    var pswrd= document.getElementById('pswrd').innerHTML="";
    var userr= document.getElementById('userr').innerHTML="";
    var cpswrd= document.getElementById('cpswrd').innerHTML="";
    var tmail= document.getElementById('tmail').innerHTML="";
    var result=document.getElementById('result');
    // USER 
  
    if (user==''){
        document.getElementById('userr').innerHTML="**please fill the user name**";
        return false;
    }
     if ((user.length<=5)||(user.length>20)) {
        document.getElementById('userr').innerHTML='**user length must be between 5 to 20 words**';
        return false;
        
    }
     if (!isNaN(user)) {
        document.getElementById('userr').innerHTML="**only character are allowed**";
        return false;
    }
  //  password
     if (pass=="") {
        document.getElementById('pswrd').innerHTML="**Please enter your password**"
        return false;
    }
     if ((pass.length<=5)||(pass.length>20)) {
        document.getElementById('pswrd').innerHTML="**User password must be between 5 to 20 word or characters**";
        return false;
    }
    //confirm password
     if (pass!=cpass) {
            document.getElementById('pswrd').innerHTML="**password mismatch**";
        document.getElementById('cpswrd').innerHTML="**Please confirm your password**";
        return false;
    }
    //email
      if (mail=="") {
        document.getElementById('tmail').innerHTML="**Please enter your email**";
        return false;
    }
     
    if (mail.indexof("@")<=0) {
        document.getElementById('tmail').innerHTML="**Please check your @**";
        return false;
    }
     if ((mail.charAt(mail.length-4))!="."&&(mail.charAt(mail.length - 3)!=".")) {
        document.getElementById('tmail').innerHTML=". is at invalid position";
        return false;
    }
    //Mobile number
    if (mobile=="") {
        document.getElementById('nmobile').innerHTML="**Please enter your Mobile Number**";
        return false;
    }
    if(isNaN(mobile)){
        document.getElementById("nmobile").innerHTML="**Plese write digits only**";
        return false;
    }
    if (mobile.length>10) {
        document.getElementById('nmobile').innerHTML="**Mobile number not exceed 10 digits**";
        return false;
    }    
    if
     (result) {
       
        
    }
    else{

    }
}

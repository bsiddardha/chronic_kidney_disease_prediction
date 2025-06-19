function sendMail(parms){
    var tempParams = {
       from_name : document.getElementById("fromName").value,
       to_name : document.getElementById("toName").value,
       message : document.getElementById("msg").value,
    };
 
    emailjs.send("service_htbtt7d", "template_hg1z72r", tempParams).then(function(res){
       console.log("Sucess", res.status);
    })
 }
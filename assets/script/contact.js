$("#contactForm").submit((e)=>{
    e.preventDefault();
    $.ajax({
        url:"https://script.google.com/macros/s/AKfycbxbihWB20KZgmGM-bl9R38xwtaqtm72Q4vNqZZLekIOsnLEIHEDiyhSKr6rsSEXEq1d/exec",
        data:$("#contactForm").serialize(),
        method:"post",
        success:function (response){
            console.log("working");
            $('#form-message-success').css("display","block");
            $("#contactForm")[0].reset();
        },
        error:function (err){
            alert("Something Error")

        }
    })
})
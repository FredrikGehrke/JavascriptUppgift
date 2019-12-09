$(function() {

    // Validate Email
    function ValidateEmail() 
    {
        let validEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (($('#email').val().match(validEmail))) {
            $('#email').removeClass('is-invalid')
            $('#email').addClass('is-valid') 
            return (true)
        } else {
            $('#email').addClass('is-invalid')
            $('#email').focus();
            return (false)
        }
    }

    // Validate firstName, must be smaller than 20 but more than 2 characters and have only letters.
    function ValidateName()
    {
        let letters = /^[A-Za-z]+$/;
        if (($('#firstName').val().length < 20 && $('#firstName').val().length > 2) && ($('#firstName').val().match(letters))) {
            $('#firstName').removeClass('is-invalid')
            $('#firstName').addClass('is-valid') 
            return (true);
        } else {                               
            document.getElementById("CannotMsg").innerHTML = "This field must be less than 20 characters, more than 2 characters and only have letters!";
            $('#firstName').addClass('is-invalid')
            return (false);
        }
    }

        // Validate lastName, must be smaller than 20 but more than 2 characters and have only letters.
    function ValidateLastName()
    {
        let letters = /^[A-Za-z]+$/;
        if (($('#lastName').val().length < 20 && $('#lastName').val().length > 2) && ($('#lastName').val().match(letters))) {
            $('#lastName').removeClass('is-invalid')
            $('#lastName').addClass('is-valid') 
            return (true);
        } else {                               
            document.getElementById("CannotMsg2").innerHTML = "This field must be less than 20 characters and only have letters!";
            $('#lastName').addClass('is-invalid')
            return (false);
        }
    }

        // Validate Passwords, so both are the same and match passCheck.
    function ValidatePasswords()
    {
        let passCheck = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
        if($('#password').val() === $('#confirm_password').val() && $('#password').val().match(passCheck) && $('#confirm_password').val().match(passCheck)){   
                $('#password').removeClass('is-invalid')
                $('#password').addClass('is-valid') 
                $('#confirm_password').removeClass('is-invalid')
                $('#confirm_password').addClass('is-valid') 
                $('#password2').removeClass('invalid-red');
                return (true);  
            }  else {  
                $('#password2').addClass('invalid-red');
                $('#password').removeClass('is-valid') 
                $('#password').addClass('is-invalid')
                $('#confirm_password').removeClass('is-valid')
                $('#confirm_password').addClass('is-invalid')
                return (false);  
            }        
    }

        // Validate the Login password.
    function ValidateLoginPassword()
    {
        let passCheckLogin = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;

        if ($('#passLogin').val().match(passCheckLogin)) {
            $('#passLogin').removeClass('is-invalid')
            $('#passLogin').addClass('is-valid') 
            return (true); 
        } else {  
            $('#passLogin').removeClass('is-valid') 
            $('#passLogin').addClass('is-invalid')
            $('#passLogin').focus(); 
            return (false);  
        }        
    }

        // Validate Zip Code.
    function ValidateZipCode()
    {
        if ($('#zipcode').val().length <= 5 && $('#zipcode').val().length > 3) {
            $('#zipcode').removeClass('is-invalid')
            $('#zipcode').addClass('is-valid') 
            return (true);
        } else {
            document.getElementById("CannotMsgZip").innerHTML = "The Zip Code must be under 6 characters.";
            $('#zipcode').addClass('is-invalid')
            $('#zipcode').focus();
            return (false);
        }
    }

        // Validate Street Address.
    function ValidateStreet()
    {
        if ($('#addressline').val().length <= 30 && $('#addressline').val().length > 5) {
            $('#addressline').removeClass('is-invalid')
            $('#addressline').addClass('is-valid') 
            return (true);
        } else {
            document.getElementById("CannotMsgStreet").innerHTML = "The Street Address must be under 30 characters.";
            $('#addressline').addClass('is-invalid')
            $('#addressline').focus();
            return (false);
        }
    }

        // Validate Text Area.
    function ValidateTextArea()
    {
        if ($('#textarea1').val() != '') {
            $('#textarea1').addClass('is-valid') 
            return (true);
        } else {
            $('#textarea1').removeClass('is-valid')
            return (false);
        }
    }

        // Validate Country.
    function ValidateCountry()
    {
        if ($('#Country').val() != '') {
            $('#Country').addClass('is-valid') 
            return (true);
        } else {
            $('#Country').removeClass('is-valid')
            return (false);
        }
    }

        // Validate Checkbox.
	$(document).ready(function(){
        $('input[type="checkbox"]').click(function(){
            if($(this).prop("checked") == true){
                document.getElementById("terms").innerHTML = "";
            }
            else if($(this).prop("checked") == false){
                $('#defaultCheck1').addClass('invalid-own')
                document.getElementById("terms").innerHTML = "You must accept the terms to register!";
            }
        });
    });

    $('textarea').on("blur", function(e) {
        switch(e.target.id) {
            case 'textarea1':
                ValidateTextArea();
                break;
        }
    });

    $('select').on("blur", function(e) {
        switch(e.target.id) {
            case 'Country':
                ValidateCountry();
                break;
        }
    });

    $('input').on("blur", function(e) {
        switch(e.target.id) {
            case 'firstName':
                ValidateName();
                break;
            case 'lastName':
                ValidateLastName();
                break;
            case 'email':
                ValidateEmail();
                break;
            case 'password':
                ValidatePasswords();
                break;
            case 'confirm_password':
                ValidatePasswords();
                break;
            case 'passLogin':
                ValidateLoginPassword();
                break;
            case 'zipcode':
                ValidateZipCode();
                break;
            case 'addressline':
                ValidateStreet();
                break;
        }
    });

    function ValidateForm()
    {
        if ((ValidateName() === true) && (ValidateLastName() === true) && (ValidateEmail() === true) && (ValidateCountry() === true) && (ValidatePasswords() === true) && (ValidateStreet() === true) && (ValidateZipCode() === true)) {
            window.location.href = "http://127.0.0.1:5502/Uppgift%201/Uppgift%201/welcome.html";
        } 
    }

    function ValidateLoginForm()
    {
        if ((ValidateEmail() === true) && ValidateLoginPassword() === true) {
            window.location.href = "http://127.0.0.1:5502/Uppgift%201/Uppgift%201/welcome.html";
        } 
    }
    
    $('#regForm').submit((e) => { 
        e.preventDefault();
        ValidateForm();
    })
    
    $('#loginForm').submit((e) => { 
        e.preventDefault();
        ValidateLoginForm();
    })

});









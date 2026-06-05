document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    form.addEventListener("submit", function (e) {
        e.preventDefault();

        let valid = true;
        let name = document.getElementById("name").value.trim();
        let email = document.getElementById("email").value.trim();
        let message = document.getElementById("message").value.trim();
        let male = document.getElementById("male");
        let female = document.getElementById("female");
        clearError("gender-error");
        clearError("name-error");
        clearError("email-error");
        clearError("message-error");
        checkBlank(name,"name-error","Name");
        if(checkBlank(email,"email-error","Email")){
             checkValid(email,/^[^\s@]+@[^\s@]+\.[^\s@]+$/,"email-error","Email");

        }
        checkBlank(message,"message-error","Message");

        if (!male.checked && !female.checked) {
            showError("gender-error", "Please select your gender");
            valid = false;
        }
        

        function checkBlank(checkVal,errorId,fieldName){
            if (checkVal === "") {
            showError(errorId, `${fieldName} is required`);
            valid = false;
            return false 
        }
        return true;

        }
        /*Checks is a field is blank and sets valid to false if it is*/

        function checkValid(checkVal,pattern,errorId,fieldName){
        if (!pattern.test(checkVal)) {
            showError(errorId, `Enter a valid ${fieldName}`);
            valid = false;
        }/*Checks if input is of the required format*/

        }
        
        if (valid) {
            alert("Form submitted successfully!");
            form.reset();
        }
    });
    function showError(id, message) {
        document.getElementById(id).textContent = message;
    }/*Changes the content of the error div to the error message*/
    function clearError(id) {
        document.getElementById(id).textContent = "";
    }/*sets the error message to blank*/

});
// Variable to hold request
var request;

// Bind to the submit event of our form
$("#foo").submit(function(event){

    // Abort any pending request
    if (request) {
        request.abort();
    }

    // setup some local variables
    var $form = $(this);

    // Let's select and cache all the fields
    var $inputs = $form.find("input, select, button, textarea");

    // Serialize the data in the form
    var serializedData = $form.serialize();

    // Let's disable the inputs for the duration of the Ajax request.
    // Note: we disable elements AFTER the form data has been serialized.
    // Disabled form elements will not be serialized.
    $inputs.prop("disabled", true);

    // Fire off the request to /form.php
   // request = $.ajax({
    //    url: " https://script.google.com/macros/s/AKfycbwlHkyhmiCoJPi-ZoQALw2A2r23-3SqUGb--bTaRX1_O6kRgpFG/exec",

   //     type: "post",
   //     data: serializedData
   // });

    // Callback handler that will be called on success
   // request.done(function (response, textStatus, jqXHR){
        // Log a message to the console
      //  console.log("Hooray, it worked!");
      //  console.log(response);
    //    console.log(textStatus);
    //    console.log(jqXHR);
   // });

    // Callback handler that will be called on failure
  //  request.fail(function (jqXHR, textStatus, errorThrown){
 //console.error(jqXHR);
        // Log the error to the console
    //    console.error(
     //       "The following error occurred: "+
         //   textStatus, errorThrown
    //    );
    //});

// Fire off the request to /form.php
// url: "https://script.google.com/macros/s/AKfycbwlHkyhmiCoJPi-ZoQALw2A2r23-3SqUGb--bTaRX1_O6kRgpFG/exec",

var payload = {
url: "https://script.google.com/macros/s/AKfycbxQqqGLQQSAFJKXOj4NfDwDDYRXbsunvqLiKxqBkQw0A95NhqRK/exec",


method: "POST",
dataType: 'json',
data: serializedData
};
request = jQuery.ajax(payload)
// console.log("requset")
// console.log(request)
// console.log("serializedData")
// console.log(serializedData)
    // Callback handler that will be called regardless
    // if the request failed or succeeded
    request.always(function () {
        // Reenable the inputs
        $inputs.prop("disabled", false);
    });

    // Prevent default posting of form
    event.preventDefault();
});

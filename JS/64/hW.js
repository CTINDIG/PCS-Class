(function () {
    'use strict';

    /*global $*/

    $('body').append('<form>');

    $("form").append('Name: ', '<input type="text" placeholder="Name", name="name" id="name"/>');
    $('form').append(" Address: ", "<input type='text' placeholder='Address' id='rdescription' name='routedescription' class='address'/>");
    $('form').append("<br><br><input type='submit' disabled id='savebutton' value='Submit' />");
    $('form').append('<input type="checkbox" id="box" name="myCheckbox" />');
    $('form').append('<p>');


    $('#box').change(function () {


        if ($("input[type=checkbox]").is(
            ":checked")) {
            $("#savebutton").prop('disabled', false);
        } else {
            $("#savebutton").prop('disabled', true);
        }

    });

    $("#savebutton").click((event) => {

        let sent = "Hi: ";
        sent += $('#name').val();
        sent += ". Your address is: ";
        sent += $('#rdescription').val();
        sent += ".";
        $('p').text(sent);
        $('form').css("background-color", "yellow");

        event.preventDefault();
    });
}());
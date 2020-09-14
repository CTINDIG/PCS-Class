(function () {
    'use strict';
    fetch('recipe.json')

        .then(r => r.json())
        .then(recipes => {
            console.log(recipes);
            const mydiv = $("#radioDiv");
            recipes.forEach(rec => {
                mydiv.append(`<input type='radio' name='food' value=${rec}>${rec}</input>`);
            });
            $('input').change(function () {
                console.log(this.value);

                $('#foodDiv').empty();

                const foodFile = `${this.value}.json`;
                fetch(foodFile)
                    .then(response => response.json())
                    .then(data => {

                        let food = "Hooray lets make: ";
                        food += data.Name;
                        food += "." + "<br>" + " The ingredients are: ";
                        food += data.Ing;

                        $('#foodDiv').append(food);
                        $("#recipe").attr("src", data.Url);
                    });
                });
            })
        .catch(err => console.error(err));
}());
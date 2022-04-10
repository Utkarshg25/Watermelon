const fs = require('fs');

function appDynamicform() {
    fetch('appdynamics.json')
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            for (var i = 0; i < data.length; i++) {
                var newfield = document.createElement('input');
                newfield.setAttribute('type', data[i].type);
                newfield.setAttribute('placeholder', data[i].placeholder)
                newfield.setAttribute('name', data[i].name);
                // newfield.setAttribute('oninput', setValue());
                newfield.setAttribute('required', data[i].required);


                var label1 = document.createElement('label');
                label1.innerText = data[i].name;
                label1.style.marginLeft = "5px";
                label1.setAttribute('for', data[i].name);
                newfield.style.margin = "2px";
                newfield.style.width = "300px";

                document.getElementById("appdynamic").appendChild(label1);
                document.getElementById("appdynamic").appendChild(newfield);
                document.getElementById("appdynamic").appendChild(document.createElement('br'));


            }
            return data;

        }).then(function (data) {
            document.getElementById('appdynamicform').addEventListener('submit', function (e) {
                e.preventDefault();
                let x = document.getElementById('appdynamicform').elements;
                for (var i = 0; i < data.length; i++) {
                    const value = x[data[i].name].value;
                    console.log(value);
                }

            });
        })
}


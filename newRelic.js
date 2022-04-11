function newRelicform() {
    fetch('newRelic.json')
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            for (var i = 0; i < data.length; i++) {
                var newfield = document.createElement('input');
                newfield.setAttribute('type', data[i].type);
                newfield.setAttribute('placeholder', data[i].placeholder);
                newfield.setAttribute('name', data[i].name);
                newfield.setAttribute('required', data[i].required);

                var label1 = document.createElement('label');
                label1.innerText = data[i].name;
                label1.style.marginLeft = "5px";
                label1.setAttribute('for', data[i].name);
                newfield.style.margin = "2px";
                newfield.style.width = "300px";

                document.getElementById("newRelic").appendChild(label1);
                document.getElementById("newRelic").appendChild(newfield);
                document.getElementById("newRelic").appendChild(document.createElement('br'));

            }
            return data;
        })
        .then(function (data) {
            document.getElementById('newRelicform').addEventListener('submit', function (e) {
                e.preventDefault();
                let x = document.getElementById('newRelic').elements;

                for (var i = 0; i < data.length; i++) {
                    const value = x[data[i].name].value;

                    console.log(value);
                }

            });
        })
}
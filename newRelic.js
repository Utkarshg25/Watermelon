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

                document.getElementById("1").appendChild(label1);
                document.getElementById("1").appendChild(newfield);
                document.getElementById("1").appendChild(document.createElement('br'));

            }
        })
}
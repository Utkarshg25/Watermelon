document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault();
    let x = document.querySelector('form').elements;
    const value = x['select1'].value;
    fetch(value)
        .then(response => response.text())
        .then(text => {
            document.getElementById('2').innerHTML = text;
            if (value == "appdynamic.html")
                appDynamicform();
            else if (value == "dynatrace.html")
                dynatraceform();
            else if (value == "datadog.html")
                datadogform();
            else if (value == "newRelic.html")
                newRelicform();
        });
});
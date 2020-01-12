$(function () {
    /* customJS
     * -------
     * Data and config for customValues
     */
    'use strict';
    const filenhavgprice = 'https://bdp-thanga.s3.us-east-1.amazonaws.com/dashboard/resources/pig2.2.2/neighbourhood.txt'; 

    // total number of rentals for neighborhood groups
    var data = []
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", filenhavgprice, false);
    rawFile.onreadystatechange = function () {
        if (rawFile.readyState === 4) {
            if (rawFile.status === 200 || rawFile.status == 0) {
                // var allText = rawFile.responseText;
                var lines = rawFile.responseText.split("\n");
                // alert(lines);
                for (var i = 0; i < lines.length; i++) {
                    console.log('text is', lines[i]);
                    var text = lines[i].split(',');
                    data.push({"Neighbourhood": text[0], "Average_price": text[1]})
                }
            }
        }
    }
    rawFile.send(null);

    // var arrObj = [{ "firstName": "John", "lastName": "Doe", "age": "46" },
    // { "firstName": "James", "lastName": "Blanc", "age": "24" }]
    var objLength = data.length;
    var myvar = '<table class="table">' +
        '<tr>' +
        '<th scope="col">Neighbourhood</th>' +
        '<th scope="col">Average_price</th>' +
        '</tr>';

    for (var i = 0; i < objLength; i++) {
        myvar += '<tr scope="row">' +
            '<td>' + data[i].Neighbourhood + '</td>' +
            '<td>' + data[i].Average_price + '</td>' +
            '</tr>'
    }

    myvar += '</table>';

    console.log(myvar);
    document.getElementById('nhavgprice').innerHTML = myvar;

});
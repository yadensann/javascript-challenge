// from data.js
var tableData = data;

// // YOUR CODE HERE!
// tbody = d3.select("tbody")


// function displayData(data){
//     tbody.text("")
//     data.forEach(function(sighting){
//         new_tr = tbody.append("tr")
//         Object.entries(sighting).forEach(function([key, value]) {
//             new_td = new_tr.append("td").text(value)
//         })
//     })};


var enter = (dataInput) => {
    dataInput.forEach(ufo_sightings => {
        var row = tbody.append("tr");
        columns.forEach(column => row.append("td").text(ufo_sightings[column]))
    });
}

enter(data);

// from data.js
var tableData = data;
// console.log(tableData);

// // YOUR CODE HERE!
var tbody = d3.select('tbody');
var columns = ['datetime', 'city', 'state', 'country', 'shape', 'durationMinutes', 'comments']
// Make function to append new alien sightings onto table.
var populateTable = (dataInput) => {
    tbody.html('');   
    dataInput.forEach(sighting => {
        var row = tbody.append('tr');
        columns.forEach(column => row.append('td').text(sighting[column]))
    });
}
// Populate table with existing information 
populateTable(data)


// Function for filter table button
var filterTable = d3.select("#filter");

filterTable.on('click', () => {
    // Prevents button from doing it's default actions 
    d3.event.preventDefault();
    // var filterButton = d3.select('#filter-btn');
    var dateInput = d3.select('#datetime');
    var cityInput = d3.select('#city');
    var stateInput = d3.select("#state");
    var countryInput = d3.select("#country");
    var shapeInput = d3.select("#shape");
    // var input_ary=[dataINput, cityInput, stateInput, countryOnput, shapeIOnput]
    // var resetButton = d3.select('#reset-btn');


    console.log(dateInput.property("value"));
    console.log(cityInput.property("value"));
    console.log(stateInput.property("value"));
    console.log(countryInput.property("value"));
    console.log(shapeInput.property("value"));

    // var filteredSearch = tableData.filter(sighting => {
    //     return (sighting.datetime===dateInput.property('value' || !dateInput.property('value')) &&
    //             sighting.city===cityInput.property('value' || !cityInput.property('value')) &&
    //             sighting.state===stateInput.property('value' || !stateInput.property('value')) &&
    //             sighting.country===countryInput.property('value' || !countryInput.property('value')) &&
    //             sighting.shape===shapeInput.property('value' || !shapeInput.property('value'))) 
    // })
    filteredSearch=tableData
    if (stateInput.property('value')) {
        filteredSearch=filteredSearch.filter(sighting=>{
            return sighting.state==stateInput.property('value')
        });
    }
    if (countryInput.property('value')) {
        filteredSearch=filteredSearch.filter(sighting=>{
            return sighting.country==countryInput.property('value')
        });
    }
    if (shapeInput.property('value')){  
        filteredSearch=filteredSearch.filter(sighting=>{
            return sighting.shape==shapeInput.property('value')
        });
    }

    console.log(filteredSearch);
    populateTable(filteredSearch);
});
    
var searchInputs = d3.selectAll('.form-control');

//Clears input fields and results
var clearResults = (() => {
    search = {};
    searchInputs._groups[0].forEach(entry => {
        if (entry.value !=0 ) {
            d3.select('#' + entry.id).node().value = "";
        }
    });
});


var clearButton = d3.select('#clear');
// Clear button on click
clearButton.on('click', () => {
    d3.event.preventDefault();
    clearResults()
});



    // Removes white space from string
    // var inputDate = inputField1.property('value').trim();
    // var inputCity = inputField2.property('value').toLowerCase().trim();

    // var filterDate = data.filter(data => data.datetime === inputDate);
    // var filterCity = data.filter(data => data.city === inputCity);
    // var filterData = data.filter(data => data.datetime === inputDate && data.city === inputCity);

    // console.log(filterDate)
    // console.log(filterCity)
    // console.log(filterData)
// })



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

    var dateInput = d3.select('#datetime');
    var cityInput = d3.select('#city');
    var stateInput = d3.select("#state");
    var countryInput = d3.select("#country");
    var shapeInput = d3.select("#shape");

    console.log(dateInput.property("value"));
    console.log(cityInput.property("value"));
    console.log(stateInput.property("value"));
    console.log(countryInput.property("value"));
    console.log(shapeInput.property("value"));

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
    if (shapeInput.property('value')) {  
        filteredSearch=filteredSearch.filter(sighting=>{
            return sighting.shape==shapeInput.property('value')
        });
    }
    if (dateInput.property('value')){  
        filteredSearch=filteredSearch.filter(sighting=>{
            return sighting.datetime==dateInput.property('value')
        });
    }
    if (cityInput.property('value')){  
        filteredSearch=filteredSearch.filter(sighting=>{
            return sighting.city==cityInput.property('value')
        });
    };

    console.log(filteredSearch);
    populateTable(filteredSearch);

});


// from data.js
var tableData = data;
// console.log(tableData);

// // YOUR CODE HERE!
var tbody = d3.select('tbody');
var button = d3.select('#filter-btn');
var inputField1 = d3.select('#datetime')
var inputField2 = d3.select('#city');
var resetButton = d3.select('#reset-btn')
var columns = ['datetime', 'city', 'state', 'country', 'shape', 'durationMinutes', 'comments']

// Make function to append new alien sightings onto table.
var populateTable = (dataInput) => {
    dataInput.forEach(sighting => {
        var row = tbody.append('tr');
        columns.forEach(column => row.append('td').text(sighting[column]))
    });
}

// Populate table with existing information 
populateTable(data)

button.on('click', () => {
    // Prevents button from doing it's default actions 
    d3.event.preventDefault();
    // Removes white space from string
    var inputDate = inputField1.property('value').trim();
    var inputCity = inputField2.property('value').toLowerCase().trim();

    var filterDate = data.filter(data => data.datetime === inputDate);
    var filterCity = data.filter(data => data.city === inputCity);
    var filterData = data.filter(data => data.datetime === inputDate && data.city === inputCity);

    console.log(filterDate)
    console.log(filterCity)
    console.log(filterData)
})



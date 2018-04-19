console.log('client.js has been loaded');

$(document).ready(onReady);

function onReady() {
  console.log('jquery-3.3.1.min.js has been loaded');
  loadRecords();
}

function loadRecords() {
  $.ajax({
    type: 'GET',
    url: '/records'
  })
    .then(function (response) {
      response.forEach(record => {
        $('#recordsList').append(`<tr>
        <td>${record.title}</td>
        <td>${record.artist}</td>
        <td>${record.year}</td>
        <td>$${record.cost.toLocaleString()}</td>
      </tr>`);
      });
    })
}
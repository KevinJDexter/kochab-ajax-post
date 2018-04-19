console.log('client.js has been loaded');

$(document).ready(onReady);

function onReady () {
  console.log ('jquery-3.3.1.min.js has been loaded');
  loadRecords();
}

function loadRecords() {
  $.ajax({
    type: 'GET',
    url: '/records'
  })
  .then(function(response) {
    $('body').append('<ul id="records"></ul>');
    response.forEach(record => {
      let recordString = `${record.title} was released in ${record.year} by ${record.artist} and cost $${record.cost.toLocaleString()} to make.`;
      $('#records').append(`<li>${recordString}</li>`);
    });
  })
}
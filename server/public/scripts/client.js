console.log('client.js has been loaded');

$(document).ready(onReady);

function onReady() {
  console.log('jquery-3.3.1.min.js has been loaded');
  loadRecords();
  $('#btn-submit').on('click', submitNewSong);
}

function submitNewSong() {
  let song = {
    title: $('#in-title').val(),
    year: Number($('#in-year').val()),
    artist: $('#in-artist').val(),
    cost: Number($('#in-cost').val()),
  };

  $.ajax({
    method: 'POST',
    url: '/record/add',
    data: song
  })
    .then(function (response) {
      loadRecords();
    });

  $('input').val('');
}

function loadRecords() {
  $.ajax({
    type: 'GET',
    url: '/record'
  })
    .then(function (response) {
      $('#recordsList').empty();
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
$('.report-card.treehouse').reportCard({
    userName: 'jasonhedman',
    site: 'treehouse',
    badgesAmount: 7
});
$("#badges").hide();
var e = "jasonhedman",
t = "https://teamtreehouse.com/" + e + ".json",
r = [],
i = 0;
fetch(t)
  .then(function(response){
    $("#badges").html('<div class="spinner"></div>');
    return response;
  })
  .then(function(response) {
    return response.json();
  })
  .then( function (e) {
  var t = e.badges;
  $.each(t, function (e, t) {
   r += '<li><a href="' + t.url + '" target="_blank"><img src="' + t.icon_url + '" alt="' + t.name + '" title="' + t.name + '"/></a></li>';
    i++;
  });
  r+='<button class = "btn btn-primary mx-auto mb-3" id = "close-badges" style = "display: block;">Hide Badges</button>';
  return r;
})
.then(function(r) {
  $("#badges").html(r);
})
.then(function(){
  $('#badge-button').click(function(){
    $('#badge-preview').hide();
    $('#report-card-colon').hide();
    $(this).hide();
    $("#badges").fadeIn();
    $('#close-badges').show();
  });
})
.then(function(){
  $('#close-badges').click(function(){
    $("#badges").hide();
    $('#badge-preview').show();
    $('#report-card-colon').show();
    $(this).hide();
    $('#badge-button').show();
  });
});

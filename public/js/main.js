$(document).ready(function(){
    
    $("#profile").click(function(){
    	$("#overlay").fadeIn(1000);
  	});

  	$("#profile2").click(function(){
    	$("#overlay").fadeIn(1000);
  	});

    $("#profile3").click(function(){
      $("#overlays").fadeToggle(1000);
    });

  	$("a.close").click(function(){
  		$("#overlay").fadeOut(1000);
  	});

  	$('#username').editable();
  	$('#condition').editable();
  	$('#dort').editable({
        value: 'None',    
        source: [
              {value: 'Doctor', text: 'Doctor'},
              {value: 'Therapist', text: 'Therapist'},
              {value: 'Both', text: 'Both'},
              {value: 'None', text: 'None'}
           ]
    });
  	$('#email').editable();
    $('#theemail').editable();
    $('#meds').editable({
        value: 'No',    
        source: [
              {value: 'Yes', text: 'Yes'},
              {value: 'No', text: 'No'}
           ]
    });
    
    if ($('.userCondition').length) {
        var resourcesY = $('.userCondition').val();
        getRequest(resourcesY);
    }
        
});

function getRequest(resourcesY){
  url = 'https://www.googleapis.com/youtube/v3/search';
  var params = {
    part: 'snippet',
    key:'AIzaSyCc33jMYadrm9JmUHZclr3JZCKHXhWoWHM',
    q: 'treatments for ' + resourcesY ,
    maxResults: 50
     
  };
  

  $.getJSON(url, params, function(resourcesY){
    showResults(resourcesY);
  });
}

function showResults(results){
  var html = "";
  var entries = results.items;
  shuffle(entries);
  $.each(entries, function(index, value){
    if (index < 5) {
      var title = value.snippet.title;
      var thumbnail = value.snippet.thumbnails.default.url;
      html += '<div class="search-result">';
      html += '<img src="'+ thumbnail +'">';
      html += '<p><a href="https://www.youtube.com/watch?v=' + value.id.videoId+'" target="_blank">'+ title + '</a></p>';
      html += '</div>';
    }
  });
  $('#search-results').html(html);
}


function shuffle(a) {
    var j, x, i;
    for (i = a.length; i; i--) {
        j = Math.floor(Math.random() * i);
        x = a[i - 1];
        a[i - 1] = a[j];
        a[j] = x;
    }
}


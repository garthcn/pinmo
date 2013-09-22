function initMap() {
  var map;
  var brooklyn = new google.maps.LatLng(40.6743890, -73.9455);
  var halfDome = new google.maps.LatLng(37.7460, -119.5329)
  var colorHex = '#d4d7db';

  var MY_MAPTYPE_ID = 'custom_style';

  // Bind thumb click event
  $("body").on("click", "li img", function(evt) {
    console.log('click thumb');
    clickImageHandler(evt.target);
  });

  // Clicking x on hero
  $("body").on("click", "a.close-hero", function() {
    closeHero();
    return false;
  });

  // init hero height
  var h = window.innerHeight - 260 - 55;
  $("#hero").css("height", h);

  // calculate hero height on resize
  $(window).resize(function() {
    var h = window.innerHeight - 260 - 55;
    $("#hero").css("height", h);
  });

  function initialize() {

    var featureOpts = [
      {
        stylers: [
          { hue: colorHex },
          { visibility: 'simplified' },
          { gamma: 0.9 },
          { weight: 0.3 },
          { saturation: -100 }
        ]
      },
      {
        elementType: 'labels.icon',
        stylers: [
          { visibility: 'off' }
        ]
      },
      {
        elementType: 'labels.text',
        stylers: [
          { visibility: 'off' }
        ]
      },
      {
        featureType: 'water',
        stylers: [
          { color: colorHex }
        ]
      }
    ];

    var sf = new google.maps.LatLng(37.782, -122.44);
    var mv = new google.maps.LatLng(37.411371, -122.066817);
    var mapOptions = {
      center: mv,
      zoom: 15,
      //zoom: 10,
      //center: new google.maps.LatLng(-33.890542, 151.274856),
      mapTypeControlOptions: {
        mapTypeIds: [google.maps.MapTypeId.ROADMAP, MY_MAPTYPE_ID]
      },
      streetViewControl: false,
      panControl: false,
      zoomControl: false,
      mapTypeControl: false,
      mapTypeId: MY_MAPTYPE_ID
    };

    map = new google.maps.Map(document.getElementById('map-canvas'),
        mapOptions);

    var styledMapOptions = {
      name: 'Custom Style'
    };

    var customMapType = new google.maps.StyledMapType(featureOpts, styledMapOptions);

    map.mapTypes.set(MY_MAPTYPE_ID, customMapType);

    // Set markers for different pages
    if (window.location.pathname.indexOf('text_off') != -1) {
      setMarkers(map, places1);
    } else {
      setMarkers(map, JSON.parse(localStorage['places']));
    }

    setPath(map);
    $('body').on('click', 'a.close-carousel', function() {
      closeSlider();
      return false;
    });
  }
  google.maps.event.addDomListener(window, 'load', initialize);
}

function setPath(map) {
  var pathPoints = [
    new google.maps.LatLng(37.411832, -122.071452),
    new google.maps.LatLng(37.41045, -122.05975),
    new google.maps.LatLng(37.422, -122.084),
    new google.maps.LatLng(37.414371, -122.076817)
  ];
  var travelPath = new google.maps.Polyline({
    path: pathPoints,
    strokeColor: '#333333',
    strokeOpacity: 0.8,
    strokeWeight: 3
  });

  travelPath.setMap(map);

  //var lineSymbol = {
    //path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW
  //};

  //var line = new google.maps.Polyline({
    ////strokeColor: '#333333',
    ////strokeOpacity: 0.8,
    ////strokeWeight: 2
    //path: pathPoints,
    //icons: [{
      //icon: lineSymbol,
      //offset: '100%'
    //}],
    //map: map
  //});
}

function setMarkers(map, locations) {
  // Add markers to the map

  // Marker sizes are expressed as a Size of X,Y
  // where the origin of the image (0,0) is located
  // in the top left of the image.

  // Origins, anchor positions and coordinates of the marker
  // increase in the X direction to the right and in
  // the Y direction down.
  var image = [
  {
    url: '/assets/MS.png',
    size: new google.maps.Size(70, 60),
    origin: new google.maps.Point(0,0),
    anchor: new google.maps.Point(0, 60)
  }, 
  {
    url: '/assets/CMU.png',
    size: new google.maps.Size(70, 60),
    origin: new google.maps.Point(0,0),
    anchor: new google.maps.Point(0, 60)
  }, 
  {
    url: '/assets/museum.png',
    size: new google.maps.Size(70, 60),
    origin: new google.maps.Point(0,0),
    anchor: new google.maps.Point(0, 60)
  }, 
  {
    url: '/assets/google.png',
    size: new google.maps.Size(70, 60),
    origin: new google.maps.Point(0,0),
    anchor: new google.maps.Point(0, 60)
  }];

  var shadow = {
    url: '/assets/shadow-pins_70.png',
    // The shadow image is larger in the horizontal dimension
    // while the position and offset are the same as for the main image.
    size: new google.maps.Size(101, 60),
    origin: new google.maps.Point(0,0),
    anchor: new google.maps.Point(0, 0)
  };

  var shape = {
      coord: [1, 1, 1, 60, 70, 60, 70, 1],
      type: 'poly'
  };
  for (var i = 0; i < locations.length; i++) {
    var place = locations[i];
    var myLatLng = new google.maps.LatLng(place[1], place[2]);
    //var marker = new google.maps.Marker({
        //position: myLatLng,
        //map: map,
        ////shadow: shadow,
        //icon: image,
        //shape: shape,
        //title: place[0],
        //zIndex: place[3]
    //});

    var markerLabel = new MarkerWithLabel({
        position: myLatLng,
        draggable: false,
        raiseOnDrag: false,
        icon: image[i],
        //shadow: shadow,
        map: map,
        labelContent: place[0],
        labelAnchor: new google.maps.Point(-75, 35),
        labelClass: "marker-labels", // the CSS class for the label
        labelStyle: {opacity: 0.7},
        key: place[4]
    });

    (function() {
      var m = markerLabel;
      google.maps.event.addListener(m, 'click', function(evt) {
        map.panTo(m.getPosition());
        var url = '/carousel_html?key=' + m.key;
        $('#carousel-container .title').html(m.labelContent);
        clickFlagHandler(url);
      });
    })();
  }
}

function clickFlagHandler(imgUrl) {
  if ($('#carousel-container').is(':visible')) {
    loadImages(imgUrl);
    // Refresh carousel
    console.log("refresh carousel");
    // Init carousel
    initSlider();
  } else {
    loadImages(imgUrl);
    // Open carousel
    $("#carousel-container").slideToggle();
    // Init carousel
    initSlider();
  }
}

function closeSlider() {
  if ($('#hero').is(':visible')) {
    $('#hero').slideToggle(function() {
      $('#carousel-container').slideToggle();  
    });
  } else {
    $("#carousel-container").slideToggle(function() {
      // Animation complete.
    });
  }
}

function clickImageHandler(target) {
  console.log(target);
  var img = $(target);
  var url = img.attr('src');
  console.log(url);
  if ($('#hero').is(':visible')) {
    // just load img
    $('.photo-container img').fadeOut(function() {
      $('.photo-container img').attr('src', url);
      $('.photo-container img').fadeIn();
    });
  } else {
    // load img
    $('.photo-container img').attr('src', url);
    $("#hero").slideToggle(function() {
    });
  }
}

function closeHero() {
  $("#hero").slideToggle(function() {
    // Animation complete.
  });
}

function loadImages(url) {
  // Place images
  $.ajax({
    url: url,
    async: true
  }).done(function(data) {
    $('#carousel-content').html(data);
    initSlider();
  });
  console.log('load img');
}

function initSlider() {
  $('.bxslider').bxSlider({
    minSlides: 1,
    maxSlides: 10,
    slideWidth: 200,
    slideMargin: 1,
  });
}

function initFP() {
  $('.upload-link').click(function() {
    filepicker.pick(function(InkBlob){
      console.log(InkBlob.url);
    });
  });
}

function onFPChange(evt) {
  console.log(evt);
  var s;
  $.each(evt.fpfiles, function(k, v) {
    s += "'" + v.url + "',";
  });
  // TODO: Store pic urls in localStorage
  // Prepare pic in slider before upload
  
  
  processTrip();
}

function processTrip() {
  var h = window.innerHeight - 55;
  $('#overlay').css("height", h);
  $('#overlay').fadeIn(function() {
    $('#loading').show();
    var opts = {
      lines: 13, // The number of lines to draw
      length: 20, // The length of each line
      width: 10, // The line thickness
      radius: 30, // The radius of the inner circle
      corners: 1, // Corner roundness (0..1)
      rotate: 0, // The rotation offset
      direction: 1, // 1: clockwise, -1: counterclockwise
      color: '#000', // #rgb or #rrggbb or array of colors
      speed: 1, // Rounds per second
      trail: 60, // Afterglow percentage
      shadow: false, // Whether to render a shadow
      hwaccel: false, // Whether to use hardware acceleration
      className: 'spinner', // The CSS class to assign to the spinner
      zIndex: 100, // The z-index (defaults to 2000000000)
      //top: 'auto', // Top position relative to parent in px
      //left: 'auto' // Left position relative to parent in px
    };
    var target = document.getElementById('loading');
    var spinner = new Spinner(opts).spin(target);   
  });
  setTimeout(function() {
    localStorage['places'] = JSON.stringify(places2);
    window.location = '/mytrips';
  }, 3000);
}

function getGeo(lat, lng) {
  var latLng = new google.maps.LatLng(lat, lng);
  var geocoder = new google.maps.Geocoder();
  geocoder.geocode({'latLng': latLng}, function(results, status) {
    if (status == google.maps.GeocoderStatus.OK) {
      if (results[1]) {
        console.log(results[1].formatted_address);
      } else {
        alert('No results found');
      }
    } else {
      alert('Geocoder failed due to: ' + status);
    }
  });
}

function getXola() {
  $.ajax({
    url: 'https://dev.xola.com/api/experiences',
    dataType: 'jsonp',
  }).done(function(data) {
    $.each(data.data, function(k, v) {
      console.log(v.geo);
    });
  });
}

function goToTrips() {
  window.location = '/mytrips';
  return false;
}

$(document).ready(function() {
  jQuery.easing.def = "easeOutCubic";
  if (window.location.pathname.indexOf('upload') != -1) {
    initFP();
  } else {
    console.log('a');
    initMap();
  }
});

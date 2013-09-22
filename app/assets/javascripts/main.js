function initMap() {
  var map;
  var brooklyn = new google.maps.LatLng(40.6743890, -73.9455);
  var halfDome = new google.maps.LatLng(37.7460, -119.5329)
  var colorHex = '#d4d7db';

  var MY_MAPTYPE_ID = 'custom_style';

  // Bind thumb click event
  $("body").on("click", "li.thumb", function(evt) {
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

    var mapOptions = {
      //zoom: 12,
      //center: halfDome,
      zoom: 10,
      center: new google.maps.LatLng(-33.890542, 151.274856),
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

    var places = [
      ['Bondi Beach', -33.890542, 151.274856, 4],
      ['Coogee Beach', -33.923036, 151.259052, 5],
      ['Cronulla Beach', -34.028249, 151.157507, 3],
      ['Manly Beach', -33.80010128657071, 151.28747820854187, 2],
      ['Maroubra Beach', -33.950198, 151.259302, 1]
    ];
    setMarkers(map, places);

    $('a.close-carousel').click(function() {
      closeSlider();
      return false;
    });
  }
  google.maps.event.addDomListener(window, 'load', initialize);
}

function setMarkers(map, locations) {
  // Add markers to the map

  // Marker sizes are expressed as a Size of X,Y
  // where the origin of the image (0,0) is located
  // in the top left of the image.

  // Origins, anchor positions and coordinates of the marker
  // increase in the X direction to the right and in
  // the Y direction down.
  var image = {
    url: '/assets/pins_70.png',
    size: new google.maps.Size(70, 60),
    origin: new google.maps.Point(0,0),
    anchor: new google.maps.Point(0, 60)
  };

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
        icon: image,
        //shadow: shadow,
        map: map,
        labelContent: place[0],
        labelAnchor: new google.maps.Point(-75, 33),
        labelClass: "marker-labels", // the CSS class for the label
        labelStyle: {opacity: 0.7}
    });

    (function() {
      var m = markerLabel;
      google.maps.event.addListener(m, 'click', function(evt) {
        map.panTo(m.getPosition());
        clickFlagHandler();
      });
    })();
  }
}

function clickFlagHandler() {
  if ($('#carousel-container').is(':visible')) {
    loadImages();
    // Refresh carousel
    console.log("refresh carousel");
    // Init carousel
    initSlider();
  } else {
    loadImages();
    // Open carousel
    $("#carousel-container").slideToggle(function() {
    });
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
  if ($('#hero').is(':visible')) {
    // just load img
  } else {
    // load img
    $("#hero").slideToggle(function() {
    });
  }
}

function closeHero() {
  $("#hero").slideToggle(function() {
    // Animation complete.
  });
}

function loadImages() {
  // Place images
  var url = '/carousel_html';
  $.ajax({
    url: url
  }).done(function(data) {
    $('#carousel-content').html(data);
    initSlider();
  });
  console.log('load img');
}

function initSlider() {
  $('.bxslider').bxSlider({
    minSlides: 3,
    maxSlides: 7,
    slideWidth: 170,
    slideMargin: 15
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
  $.each(evt.fpfiles, function(k, v) {

  });
}

$(document).ready(function() {
  if (window.location.pathname.indexOf('upload') != -1) {
    initFP();
  } else {
    console.log('a');
    initMap();
  }
});

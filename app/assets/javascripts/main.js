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
      if(localStorage['places']) {
        setMarkers(map, JSON.parse(localStorage['places']));
      }
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
  //var pathPoints = [
    //new google.maps.LatLng(37.411832, -122.071452),
    //new google.maps.LatLng(37.41045, -122.05975),
    //new google.maps.LatLng(37.422, -122.084),
    //new google.maps.LatLng(37.414371, -122.076817)
  //];
  var pathPoints = [
    new google.maps.LatLng(37.41132573693749,-122.0718964656089),

        new google.maps.LatLng(37.41121484435853,-122.0718796179835),

        new google.maps.LatLng(37.4112953525385,-122.0717918594573),

        new google.maps.LatLng(37.41122276525703,-122.0717199427281),

        new google.maps.LatLng(37.41113664120194,-122.0716461819802),

        new google.maps.LatLng(37.41104460790512,-122.0716715791468),

        new google.maps.LatLng(37.4109396245679,-122.0717481059228),

        new google.maps.LatLng(37.41080241281298,-122.0717279893552),

        new google.maps.LatLng(37.41069629791883,-122.0717077051495),

        new google.maps.LatLng(37.41060179196057,-122.0717382990961),

        new google.maps.LatLng(37.41051072258261,-122.0718353615348),

        new google.maps.LatLng(37.410535533016,-122.0720203501378),

        new google.maps.LatLng(37.41054894406107,-122.0721675363575),

        new google.maps.LatLng(37.41059328432885,-122.0723182429765),

        new google.maps.LatLng(37.41065480006819,-122.0724436079763),

        new google.maps.LatLng(37.41069941380593,-122.07260121133),

        new google.maps.LatLng(37.41074071996682,-122.0727426893427),

        new google.maps.LatLng(37.41078545224454,-122.072893266959),

        new google.maps.LatLng(37.41083115923087,-122.0730471246497),

        new google.maps.LatLng(37.41086413638158,-122.073158131825),

        new google.maps.LatLng(37.41095031974878,-122.0732723359106),

        new google.maps.LatLng(37.41115549104373,-122.0733326070331),

        new google.maps.LatLng(37.41132391440188,-122.0733374469273),

        new google.maps.LatLng(37.41143305327228,-122.0733404519706),

        new google.maps.LatLng(37.41161322004092,-122.0733454123547),

        new google.maps.LatLng(37.41180744235619,-122.073349276543),

        new google.maps.LatLng(37.4119151147994,-122.073350831779),

        new google.maps.LatLng(37.41201446868076,-122.073352266525),

        new google.maps.LatLng(37.41211217778767,-122.073353677697),

        new google.maps.LatLng(37.41221244058904,-122.0733551255398),

        new google.maps.LatLng(37.41231548957092,-122.0733566139825),

        new google.maps.LatLng(37.41242557570494,-122.0733582039247),

        new google.maps.LatLng(37.41253527210399,-122.0733597879735),

        new google.maps.LatLng(37.41264568403252,-122.0733613824996),

        new google.maps.LatLng(37.41279549821665,-122.0733635460783),

        new google.maps.LatLng(37.41295831045801,-122.0733658975951),

        new google.maps.LatLng(37.41309743606134,-122.0733679072873),

        new google.maps.LatLng(37.41320146789234,-122.0733694094815),

        new google.maps.LatLng(37.41328427715775,-122.0736341558222),

        new google.maps.LatLng(37.41329069802912,-122.0737844669202),

        new google.maps.LatLng(37.41329725881198,-122.0739380463056),

        new google.maps.LatLng(37.41330338841556,-122.0740815294266),

        new google.maps.LatLng(37.41331042042515,-122.0742461480404),

        new google.maps.LatLng(37.41331581405927,-122.0743724102795),

        new google.maps.LatLng(37.41332127686884,-122.0745002958574),

        new google.maps.LatLng(37.41332728996381,-122.07464105486),

        new google.maps.LatLng(37.41333577362289,-122.0748396509589),

        new google.maps.LatLng(37.41334287428512,-122.0750058686826),

        new google.maps.LatLng(37.41335119670563,-122.0752006939074),

        new google.maps.LatLng(37.41335738351785,-122.0753455246813),

        new google.maps.LatLng(37.41336349335199,-122.0754885445058),

        new google.maps.LatLng(37.41336942374471,-122.0756273763254),

        new google.maps.LatLng(37.41337837706608,-122.0758081546592),

        new google.maps.LatLng(37.41338779121136,-122.0759492096477),

        new google.maps.LatLng(37.41339695361813,-122.0760772602443),

        new google.maps.LatLng(37.41340972980611,-122.0762329164427),

        new google.maps.LatLng(37.41342001046447,-122.0763528614771),

        new google.maps.LatLng(37.41343463930944,-122.0764695850448),

        new google.maps.LatLng(37.41344922342138,-122.0765816560015),

        new google.maps.LatLng(37.41348283916447,-122.0768009927269),

        new google.maps.LatLng(37.41351676228196,-122.0769656647099),

        new google.maps.LatLng(37.41354539787082,-122.077103155425),

        new google.maps.LatLng(37.41357914568049,-122.0772651884181),

        new google.maps.LatLng(37.4136075752792,-122.0774016883661),

        new google.maps.LatLng(37.41363486685161,-122.0775327240335),

        new google.maps.LatLng(37.41366202006306,-122.077663097989),

        new google.maps.LatLng(37.41369504433835,-122.0778505040835),

        new google.maps.LatLng(37.41370851327033,-122.07798131858),

        new google.maps.LatLng(37.41371822280011,-122.0781529013766),

        new google.maps.LatLng(37.41355132252785,-122.07826221711),

        new google.maps.LatLng(37.413425487501,-122.0782359504346),

        new google.maps.LatLng(37.413247078692,-122.0782854874824),

        new google.maps.LatLng(37.41314817223457,-122.0783005749081),

        new google.maps.LatLng(37.4130140487086,-122.0781986118522),

        new google.maps.LatLng(37.41287318730275,-122.0781995883767),

        new google.maps.LatLng(37.41272864472113,-122.0782005904398),

        new google.maps.LatLng(37.41258977225299,-122.0782015532061),

        new google.maps.LatLng(37.41244479068671,-122.0782019046682),

        new google.maps.LatLng(37.41233443099476,-122.0782019046617),

        new google.maps.LatLng(37.41219324304404,-122.0782051059352),

        new google.maps.LatLng(37.41209289062527,-122.0782721602563),

        new google.maps.LatLng(37.41197583734748,-122.0782623534296),

        new google.maps.LatLng(37.41183858368304,-122.0782640298103),

        new google.maps.LatLng(37.41171281322595,-122.0782652032767),

        new google.maps.LatLng(37.41158695894983,-122.0782664605622),

        new google.maps.LatLng(37.41146703626575,-122.0782670059873),

        new google.maps.LatLng(37.41135779771712,-122.0782807097976),

        new google.maps.LatLng(37.41124392956254,-122.0782902651672),

        new google.maps.LatLng(37.41113261788842,-122.078350531051),

        new google.maps.LatLng(37.41101616315903,-122.0784066711065),

        new google.maps.LatLng(37.41096299270789,-122.0785322778792),

        new google.maps.LatLng(37.41102424645682,-122.0788641598428),

        new google.maps.LatLng(37.41111024595434,-122.079015186186),

        new google.maps.LatLng(37.41121234880264,-122.0790718344039),

        new google.maps.LatLng(37.41133199104997,-122.0791184029866),

        new google.maps.LatLng(37.41154553796812,-122.0790578727815),

        new google.maps.LatLng(37.41167920246925,-122.0789391400877),

        new google.maps.LatLng(37.41173966001879,-122.0787845868192),

        new google.maps.LatLng(37.41175733649056,-122.0785980177723),

        new google.maps.LatLng(37.41172299303873,-122.0783979478038),

        new google.maps.LatLng(37.41165863455775,-122.0782050679854),

        new google.maps.LatLng(37.41156195635969,-122.0779775413827),

        new google.maps.LatLng(37.41150316017132,-122.0778342629096),

        new google.maps.LatLng(37.41145211885728,-122.0777057634896),

        new google.maps.LatLng(37.41139815928948,-122.0775691888903),

        new google.maps.LatLng(37.41135008636621,-122.0773933177088),

        new google.maps.LatLng(37.41127033255753,-122.0772541781162),

        new google.maps.LatLng(37.41119359623399,-122.0770828520153),

        new google.maps.LatLng(37.41108957681563,-122.0768489969169),

        new google.maps.LatLng(37.41100020972101,-122.0766623835725),

        new google.maps.LatLng(37.41091293981337,-122.0765044538539),

        new google.maps.LatLng(37.41082239925809,-122.0762999841027),

        new google.maps.LatLng(37.41070013009884,-122.0760538631384),

        new google.maps.LatLng(37.41060263015088,-122.0759230480735),

        new google.maps.LatLng(37.41050762127843,-122.0756834932808),

        new google.maps.LatLng(37.41042853802201,-122.0754906256889),

        new google.maps.LatLng(37.41033725909647,-122.0752812457476),

        new google.maps.LatLng(37.41023259931355,-122.0750586397952),

        new google.maps.LatLng(37.41015277340767,-122.0748647489791),

        new google.maps.LatLng(37.41006903819498,-122.0746809338425),

        new google.maps.LatLng(37.4099205527803,-122.0743890759741),

        new google.maps.LatLng(37.40978405348715,-122.0741251298432),

        new google.maps.LatLng(37.40968870933857,-122.0739154984449),

        new google.maps.LatLng(37.40962113856531,-122.0736851880985),

        new google.maps.LatLng(37.40955149758366,-122.073453320304),

        new google.maps.LatLng(37.4094847357249,-122.0732187946533),

        new google.maps.LatLng(37.40945904519167,-122.0730306209271),

        new google.maps.LatLng(37.4094398087239,-122.0728970133905),

        new google.maps.LatLng(37.40938497847638,-122.0727630830317),

        new google.maps.LatLng(37.40932807261061,-122.0725627772486),

        new google.maps.LatLng(37.40926522629545,-122.072419401826),

        new google.maps.LatLng(37.40915403003225,-122.0721485833916),

        new google.maps.LatLng(37.40906512872001,-122.0719389655256),

        new google.maps.LatLng(37.40898127353294,-122.0717558221432),

        new google.maps.LatLng(37.40890376116624,-122.071574328401),

        new google.maps.LatLng(37.40882496472916,-122.0713898283058),

        new google.maps.LatLng(37.40874989404725,-122.0712140519382),

        new google.maps.LatLng(37.40866684599371,-122.0710195963685),

        new google.maps.LatLng(37.40858657051639,-122.0708316341544),

        new google.maps.LatLng(37.40848251801282,-122.0705879977678),

        new google.maps.LatLng(37.40839461514218,-122.0703718040282),

        new google.maps.LatLng(37.40833261535229,-122.0701804240103),

        new google.maps.LatLng(37.408269843417,-122.0699516144433),

        new google.maps.LatLng(37.40820662551701,-122.0697081459305),

        new google.maps.LatLng(37.40814025462206,-122.0694532194666),

        new google.maps.LatLng(37.4080863113896,-122.0692251996902),

        new google.maps.LatLng(37.40804171022366,-122.0690011840686),

        new google.maps.LatLng(37.40799677855104,-122.0687785437001),

        new google.maps.LatLng(37.4079449531074,-122.0685500712878),

        new google.maps.LatLng(37.40791740101716,-122.0682774862235),

        new google.maps.LatLng(37.40788776015469,-122.0680156765775),

        new google.maps.LatLng(37.40779363493294,-122.0677958826225),

        new google.maps.LatLng(37.40774101339536,-122.0675547670569),

        new google.maps.LatLng(37.40715364463386,-122.0659293887411),

        new google.maps.LatLng(37.40713973067459,-122.0656835475211),

        new google.maps.LatLng(37.40717973258748,-122.0651953348549),

        new google.maps.LatLng(37.40710879450823,-122.0650639162522),

        new google.maps.LatLng(37.40716467742716,-122.0649676900096),

        new google.maps.LatLng(37.40713270479861,-122.0648182059697),

        new google.maps.LatLng(37.40637429527697,-122.0654895064626),

        new google.maps.LatLng(37.406613556703,-122.0659496729468),

        new google.maps.LatLng(37.40662629719582,-122.0660836157594),

        new google.maps.LatLng(37.40659147038814,-122.0662467275952),

        new google.maps.LatLng(37.40656301382688,-122.0663902257775),

        new google.maps.LatLng(37.40664021115509,-122.0665681735818),

        new google.maps.LatLng(37.40674079399314,-122.0666232426856),

        new google.maps.LatLng(37.40691337737945,-122.0666752104853),

        new google.maps.LatLng(37.40717317446825,-122.0666805749033),

        new google.maps.LatLng(37.40733871705589,-122.0666440298055),

        new google.maps.LatLng(37.40743439648059,-122.0666467958335),

        new google.maps.LatLng(37.40754090509337,-122.0663444755337),

        new google.maps.LatLng(37.40766211896803,-122.0662898523733),

        new google.maps.LatLng(37.40780940683238,-122.0662210634691),

        new google.maps.LatLng(37.40793880337239,-122.0661619969178),

        new google.maps.LatLng(37.40805969930844,-122.0661068102709),

        new google.maps.LatLng(37.40817281639633,-122.0660555316863),

        new google.maps.LatLng(37.40829199050552,-122.0660015571411),

        new google.maps.LatLng(37.40837836174635,-122.0659624388645),

        new google.maps.LatLng(37.40860988291114,-122.0658365479176),

        new google.maps.LatLng(37.40870805627232,-122.0657662964368),

        new google.maps.LatLng(37.40884856946747,-122.0656462201077),

        new google.maps.LatLng(37.40893607893374,-122.0655586488647),

        new google.maps.LatLng(37.4090101726189,-122.0654724282213),

        new google.maps.LatLng(37.40911900441462,-122.0653514695524),

        new google.maps.LatLng(37.40921581489236,-122.0652766387915),

        new google.maps.LatLng(37.4093338123484,-122.0651656235674),

        new google.maps.LatLng(37.41013651251551,-122.0654658694957),

        new google.maps.LatLng(37.41023977756259,-122.0654256363605),

        new google.maps.LatLng(37.40991124886778,-122.0646797307972),

        new google.maps.LatLng(37.40956662817229,-122.0642168047198),

        new google.maps.LatLng(37.40967557350852,-122.0640378330791),

        new google.maps.LatLng(37.40972027105249,-122.0639046826182),

        new google.maps.LatLng(37.40975784312163,-122.0637744429041),

        new google.maps.LatLng(37.40982747992726,-122.0635543134995),

        new google.maps.LatLng(37.40986194772944,-122.0634446277836),

        new google.maps.LatLng(37.40989677649481,-122.0633300864574),

        new google.maps.LatLng(37.40994219274362,-122.0631855857209),

        new google.maps.LatLng(37.40999512137687,-122.0630171978701),

        new google.maps.LatLng(37.41004414630931,-122.0628612283326),

        new google.maps.LatLng(37.41011331628211,-122.0626442673529),

        new google.maps.LatLng(37.41015574575047,-122.0625115189614),

        new google.maps.LatLng(37.41022231283736,-122.0623032496223),

        new google.maps.LatLng(37.41025703324603,-122.0621946195024),

        new google.maps.LatLng(37.41032649065955,-122.0619778883702),

        new google.maps.LatLng(37.41038305063434,-122.0617925297847),

        new google.maps.LatLng(37.41042927124342,-122.0616410556977),

        new google.maps.LatLng(37.41046920698766,-122.061510178828),

        new google.maps.LatLng(37.41050572488058,-122.0613905022765),

        new google.maps.LatLng(37.41057006182467,-122.0612853702914),

        new google.maps.LatLng(37.41065431530006,-122.0611704589828),

        new google.maps.LatLng(37.41050404899431,-122.0609192769189),

        new google.maps.LatLng(37.41046030429217,-122.0605457112106),

        new google.maps.LatLng(37.4105161895464,-122.0603692086297),

        new google.maps.LatLng(37.41057246226176,-122.0601933399303),

        new google.maps.LatLng(37.41062541853714,-122.0600278353231),

        new google.maps.LatLng(37.41066315451573,-122.0599098986713),

        new google.maps.LatLng(37.41071999599239,-122.0597632242067),

        new google.maps.LatLng(37.41084629338494,-122.0597887477845),

        new google.maps.LatLng(37.41075107384199,-122.0598435797996),

        new google.maps.LatLng(37.41066338951859,-122.0598926692628),

        new google.maps.LatLng(37.41059101538629,-122.0600033221043),

        new google.maps.LatLng(37.41052895544246,-122.0601425956148),

        new google.maps.LatLng(37.41038174267486,-122.0597379530471),

        new google.maps.LatLng(37.40956826542524,-122.0588637572229),

        new google.maps.LatLng(37.4089027741257,-122.0580203937525),

        new google.maps.LatLng(37.41047783019432,-122.0596873495578),

        new google.maps.LatLng(37.41039086212337,-122.0597278665405),

        new google.maps.LatLng(37.41064596459028,-122.0598991123234),

        new google.maps.LatLng(37.41054668094721,-122.0599200670813),

        new google.maps.LatLng(37.41045695267376,-122.0598798339461),

        new google.maps.LatLng(37.41036525465307,-122.0599040576462),

        new google.maps.LatLng(37.41027649029848,-122.0599271078799),

        new google.maps.LatLng(37.41027768667755,-122.0597630779952),

        new google.maps.LatLng(37.41036573647109,-122.0597180160214),

        new google.maps.LatLng(37.41030197128412,-122.059816131482),

        new google.maps.LatLng(37.41030670705941,-122.0599440393243),

        new google.maps.LatLng(37.41026211533454,-122.0600551833604),

        new google.maps.LatLng(37.41033428352085,-122.0601328836028),

        new google.maps.LatLng(37.41042635872719,-122.0601646510158),

        new google.maps.LatLng(37.41051734428611,-122.060183677936),

        new google.maps.LatLng(37.41056931208578,-122.0600905549918),

        new google.maps.LatLng(37.41065753161666,-122.060032887498),

        new google.maps.LatLng(37.41072010252383,-122.0599508286659),

        new google.maps.LatLng(37.41062662670822,-122.0600294656902),

        new google.maps.LatLng(37.41089038088676,-122.0593252034132),

        new google.maps.LatLng(37.41138474553582,-122.0592750796322),

        new google.maps.LatLng(37.41148453209308,-122.059361580873),

        new google.maps.LatLng(37.41079077532873,-122.0583928756624),

        new google.maps.LatLng(37.40960520840859,-122.0572724606335),

        new google.maps.LatLng(37.40993392966414,-122.0625695899829),

        new google.maps.LatLng(37.4099679931204,-122.0628293490758),

        new google.maps.LatLng(37.41004502292176,-122.0629653164508),

        new google.maps.LatLng(37.40907725055211,-122.0637580074312),

        new google.maps.LatLng(37.40887475002912,-122.0638921100452),

        new google.maps.LatLng(37.40949786212186,-122.0635207800832),

        new google.maps.LatLng(37.40983555775554,-122.0632738642348),

        new google.maps.LatLng(37.40925887698653,-122.0640814373529),

        new google.maps.LatLng(37.40897731797337,-122.0644851203995),

        new google.maps.LatLng(37.40887019909029,-122.0646618901118),

        new google.maps.LatLng(37.40876583068116,-122.0647208713663),

        new google.maps.LatLng(37.4086283010941,-122.0648920155702),

        new google.maps.LatLng(37.41244903895233,-122.0788739883896),

        new google.maps.LatLng(37.41264294348969,-122.079530778151),

        new google.maps.LatLng(37.41328702174864,-122.0820472620692),

        new google.maps.LatLng(37.41297026528289,-122.0805313098323),

        new google.maps.LatLng(37.41318763951556,-122.081403648167),

        new google.maps.LatLng(37.41498077343221,-122.0849980730403),

        new google.maps.LatLng(37.41557534262703,-122.0858491197455),

        new google.maps.LatLng(37.41613568710299,-122.0865944422518),

        new google.maps.LatLng(37.41635345053506,-122.0868921540954),

        new google.maps.LatLng(37.41654956033303,-122.0871616330083),

        new google.maps.LatLng(37.41672700504843,-122.0874065538188),

        new google.maps.LatLng(37.41775432546214,-122.0889798584863),

        new google.maps.LatLng(37.41823253304177,-122.0895359143754),

        new google.maps.LatLng(37.41912558281405,-122.0896073498876),

        new google.maps.LatLng(37.42022295311052,-122.0922288605519),

        new google.maps.LatLng(37.42036605080983,-122.0928066853398),

        new google.maps.LatLng(37.42089165012801,-122.0925097603211),

        new google.maps.LatLng(37.42078709399784,-122.092055333947),

        new google.maps.LatLng(37.42123582869528,-122.0919988678043),

        new google.maps.LatLng(37.42140015590696,-122.0921790787225),

        new google.maps.LatLng(37.42153661329059,-122.0923421067391),

        new google.maps.LatLng(37.42168027911095,-122.0925097448026),

        new google.maps.LatLng(37.42183496713398,-122.0926855971311),

        new google.maps.LatLng(37.42197691466419,-122.0929094777648),

        new google.maps.LatLng(37.42212422661243,-122.0930772834663),

        new google.maps.LatLng(37.42241451430285,-122.0936286486608),

        new google.maps.LatLng(37.42359001192956,-122.0904695057516),

        new google.maps.LatLng(37.42367156784741,-122.0903613792007),

        new google.maps.LatLng(37.42369369607179,-122.0902410150711),

        new google.maps.LatLng(37.42371293253957,-122.0900884644334),

        new google.maps.LatLng(37.42372257172821,-122.0899086726104),

        new google.maps.LatLng(37.42378705882199,-122.0896690289737),

        new google.maps.LatLng(37.42380699037276,-122.0895524678053),

        new google.maps.LatLng(37.42382334153148,-122.0894133355796),

        new google.maps.LatLng(37.42382749708911,-122.0892665925203),

        new google.maps.LatLng(37.42381895533322,-122.0891298087008),

        new google.maps.LatLng(37.42379789905573,-122.0889613144391),

        new google.maps.LatLng(37.4237709583177,-122.0887946496259),

        new google.maps.LatLng(37.4237394419401,-122.0886062453974),

        new google.maps.LatLng(37.42371477326544,-122.088458777107),

        new google.maps.LatLng(37.42369045392418,-122.0883133969255),

        new google.maps.LatLng(37.42366684456934,-122.0881547363388),

        new google.maps.LatLng(37.42364371833096,-122.0879982995757),

        new google.maps.LatLng(37.42362166078291,-122.0878378097041),

        new google.maps.LatLng(37.42360821346051,-122.087504752817),

        new google.maps.LatLng(37.42357963651915,-122.0873590412884),

        new google.maps.LatLng(37.42354915040597,-122.0872035949651),

        new google.maps.LatLng(37.423521772283,-122.0870584813019),

        new google.maps.LatLng(37.42349404266236,-122.0869108792613),

        new google.maps.LatLng(37.42346342026161,-122.0867445253316),

        new google.maps.LatLng(37.42343500539017,-122.0865857537501),

        new google.maps.LatLng(37.42340470058517,-122.0864220165458),

        new google.maps.LatLng(37.42337298994507,-122.0862535867855),

        new google.maps.LatLng(37.42334395709068,-122.0860993803944),

        new google.maps.LatLng(37.42331068426093,-122.0859226532048),

        new google.maps.LatLng(37.42327923555608,-122.0857556149713),

        new google.maps.LatLng(37.4232445765692,-122.0855706499424),

        new google.maps.LatLng(37.42321220650255,-122.0853925947449),

        new google.maps.LatLng(37.4231815514834,-122.0852184567775),

        new google.maps.LatLng(37.4231538169263,-122.085043843399),

        new google.maps.LatLng(37.42313091733664,-122.0848627556552),

        new google.maps.LatLng(37.42311386545308,-122.0846742604044),

        new google.maps.LatLng(37.42309631269146,-122.0844855032192),

        new google.maps.LatLng(37.42307942500617,-122.0843036218139),

        new google.maps.LatLng(37.42306417892402,-122.0841302441113),

        new google.maps.LatLng(37.42305040289403,-122.0839735837217),

        new google.maps.LatLng(37.42300445217399,-122.0838003606741),

        new google.maps.LatLng(37.42298890374361,-122.0836132765953),

        new google.maps.LatLng(37.42302768090286,-122.0834965748509),

        new google.maps.LatLng(37.42278480440138,-122.0833420382087),

        new google.maps.LatLng(37.42271439641474,-122.0832113643383),

        new google.maps.LatLng(37.42264323405681,-122.0830830374007),

        new google.maps.LatLng(37.42257345471291,-122.0830094442909),

        new google.maps.LatLng(37.42247727237402,-122.0828976297025),

        new google.maps.LatLng(37.42234584413229,-122.0828984678928),

        new google.maps.LatLng(37.4222258990979,-122.0829139744137),

        new google.maps.LatLng(37.42210448723046,-122.0829074365292),

        new google.maps.LatLng(37.42200340147821,-122.0828537923489),

        new google.maps.LatLng(37.42191438566653,-122.0827725717072),

        new google.maps.LatLng(37.42181665267555,-122.0827294049059),

        new google.maps.LatLng(37.42172512229292,-122.0827408881132),

        new google.maps.LatLng(37.4217863940051,-122.0828388725613),

        new google.maps.LatLng(37.42186794992296,-122.0829011501019),

        new google.maps.LatLng(37.42195994131027,-122.0829118789379),

        new google.maps.LatLng(37.42203592326252,-122.0829832089339),

        new google.maps.LatLng(37.4224333512014,-122.0832010545974),

        new google.maps.LatLng(37.42231709297469,-122.083140160798),

        new google.maps.LatLng(37.42208881307153,-122.0830205922221),

        new google.maps.LatLng(37.42199079817095,-122.0830318279575),

        new google.maps.LatLng(37.42219743044066,-122.0837130281066),

        new google.maps.LatLng(37.42237107562148,-122.0842853957209),

        new google.maps.LatLng(37.42191136420199,-122.0830217256714),

        new google.maps.LatLng(37.42201599506827,-122.0829963723708),

        new google.maps.LatLng(37.42190699162182,-122.0829991785223),

        new google.maps.LatLng(37.4219844763544,-122.0831511283934),

        new google.maps.LatLng(37.42217045626357,-122.0829423739616),

        new google.maps.LatLng(37.42230441022789,-122.0829474775112),

        new google.maps.LatLng(37.42248451854001,-122.0830012228472),

        new google.maps.LatLng(37.42268015961966,-122.0831225549144),

        new google.maps.LatLng(37.42277583954862,-122.0835017287647),

        new google.maps.LatLng(37.42280693154986,-122.0838991019719),

        new google.maps.LatLng(37.42280623287607,-122.0840804928414),

        new google.maps.LatLng(37.42280458188096,-122.084215137107),

        new google.maps.LatLng(37.4227972655037,-122.0844156429089),

        new google.maps.LatLng(37.42278406754004,-122.0845686723635),

        new google.maps.LatLng(37.422779444363,-122.0849037929457),

        new google.maps.LatLng(37.4234721992794,-122.0881556273109),

        new google.maps.LatLng(37.42367545259694,-122.0890683341537),

        new google.maps.LatLng(37.42369567802799,-122.0892117626606),

        new google.maps.LatLng(37.42370110656327,-122.0893739817942),

        new google.maps.LatLng(37.42291949347393,-122.0891811004154),

        new google.maps.LatLng(37.42287663955503,-122.0890374861013),

        new google.maps.LatLng(37.42267676810175,-122.089299879272),

        new google.maps.LatLng(37.42171537202945,-122.0921525965888),

        new google.maps.LatLng(37.42158843501486,-122.0925198977277),

        new google.maps.LatLng(37.42147626680023,-122.092826857903),

        new google.maps.LatLng(37.42118491752166,-122.0929827021202),

        new google.maps.LatLng(37.41961648507247,-122.0932889346167),

        new google.maps.LatLng(37.41973689308034,-122.0929978323919),

        new google.maps.LatLng(37.41960479807472,-122.0931017251943),

        new google.maps.LatLng(37.41966411618814,-122.0929252411312),

        new google.maps.LatLng(37.42014553209607,-122.0928269438036),

        new google.maps.LatLng(37.42037922943087,-122.0928404110869),

        new google.maps.LatLng(37.42019114270851,-122.0913055240863),

        new google.maps.LatLng(37.4200206424803,-122.0908014505814),

        new google.maps.LatLng(37.4200089513293,-122.0898410848343),

        new google.maps.LatLng(37.41908485085374,-122.0885856143007),

        new google.maps.LatLng(37.418282903291,-122.0884009562799),

        new google.maps.LatLng(37.41757070724962,-122.0882280715419),

        new google.maps.LatLng(37.41694287710927,-122.0880743521819),

        new google.maps.LatLng(37.41439631352893,-122.0835643684334),

        new google.maps.LatLng(37.41413009897205,-122.083086436759),

        new google.maps.LatLng(37.41330309850326,-122.0822030188238),

        new google.maps.LatLng(37.41176645840268,-122.0802908615677),

        new google.maps.LatLng(37.41122059789694,-122.0796727509769),

        new google.maps.LatLng(37.41077103982617,-122.0791611366591),

        new google.maps.LatLng(37.4106976176242,-122.0803154486712),

        new google.maps.LatLng(37.41018027982276,-122.0794898248259),

        new google.maps.LatLng(37.41070222934405,-122.0786104849176),

        new google.maps.LatLng(37.41115562783919,-122.0781432098799),

        new google.maps.LatLng(37.4114020138686,-122.0804641832468),

        new google.maps.LatLng(37.41458147649863,-122.0777449370667),

        new google.maps.LatLng(37.41483015444979,-122.0777369170692),

        new google.maps.LatLng(37.41477568229809,-122.0778849228619),

        new google.maps.LatLng(37.41466043196207,-122.077762903661),

        new google.maps.LatLng(37.41533743567039,-122.0779511590162),

        new google.maps.LatLng(37.41549248820067,-122.0781200913393),

        new google.maps.LatLng(37.4152416608857,-122.0772220921134),

        new google.maps.LatLng(37.41530735060726,-122.0769685807744),

        new google.maps.LatLng(37.41301415887175,-122.0771090213805),

        new google.maps.LatLng(37.4125106808589,-122.077151970308),

        new google.maps.LatLng(37.41223189476545,-122.0771735717428),

        new google.maps.LatLng(37.41195592098108,-122.0771862164659),

        new google.maps.LatLng(37.41206816696454,-122.0771999391818),

        new google.maps.LatLng(37.4128498147398,-122.0744098459621),

        new google.maps.LatLng(37.41312758998362,-122.0738985061846),

        new google.maps.LatLng(37.41322205871103,-122.0736546536182),

        new google.maps.LatLng(37.41317763462422,-122.0735234768335),

        new google.maps.LatLng(37.41334241339189,-122.0728600415437),

        new google.maps.LatLng(37.41295231567005,-122.0708077787235),

        new google.maps.LatLng(37.41224351466514,-122.0690147102225),

        new google.maps.LatLng(37.41185877851585,-122.0690206032365),

        new google.maps.LatLng(37.41258124974833,-122.0703562516492),

        new google.maps.LatLng(37.4126685453214,-122.0705226423763),

        new google.maps.LatLng(37.41287235580731,-122.0701754149539),

        new google.maps.LatLng(37.41248497408108,-122.0697125097226),

        new google.maps.LatLng(37.41230472263858,-122.0695358324558),

        new google.maps.LatLng(37.41162339927909,-122.0689532115854),

        new google.maps.LatLng(37.41118987156847,-122.0697124288505),

        new google.maps.LatLng(37.41053761453227,-122.0698898217659),

        new google.maps.LatLng(37.41021387777012,-122.0697806017211),

        new google.maps.LatLng(37.41025367763487,-122.0702633063168),

        new google.maps.LatLng(37.41037574467766,-122.0708285841329),

        new google.maps.LatLng(37.41051382149755,-122.0711168760264),

        new google.maps.LatLng(37.41064077916155,-122.0713941047675),

        new google.maps.LatLng(37.41075188365464,-122.0715271782612),

        new google.maps.LatLng(37.41077149691376,-122.0716797427497),

        new google.maps.LatLng(37.41075623568582,-122.0719058571401),

        new google.maps.LatLng(37.41087022099443,-122.0717854811018),

        new google.maps.LatLng(37.41068204677754,-122.0714135848455),

        new google.maps.LatLng(37.41081722052105,-122.0716589152075),

        new google.maps.LatLng(37.41108215883133,-122.0721209329758),

        new google.maps.LatLng(37.4110395368537,-122.0719993953799),

        new google.maps.LatLng(37.4109288119128,-122.0719662030433),

        new google.maps.LatLng(37.41088208280262,-122.0718315896784)

        ];
  var travelPath = new google.maps.Polyline({
    path: pathPoints,
    strokeColor: '#333333',
    strokeOpacity: 0.8,
    strokeWeight: 3
  });
  console.log('setpath');

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

var Map = {
  dataInput: [],
  defaultView: function(mapData) {
    var self = this;
    $('#map-container').highcharts('Map', {
      title : {
        text : 'Title'
      },
      subtitle: {
        text: 'Subtitle'
      },
      mapNavigation: {
        enabled: true,
        buttonOptions: {
          verticalAlign: 'bottom'
        }
      },
      colorAxis: {
        type: 'linear',
        endOnTick: false,
        startOnTick: false,
        min: 1,
        max: 100,
        minColor: '#FF3E44',
        maxColor: '#474CFF'
      },
      colors: ['#FFF9E4'],
      tooltip: {
        animation: true,
        pointFormat: '{point.name}: {point.value}',
        shadow: false
      },
      legend: {
        align: 'center',
        itemWidth: 200,
        reversed: false,
      },
      plotOptions: {
        series: {
          joinBy: ['iso-a2', 'code'],
        },
        states: {
          hover: {
            enabled: true
          },
          select: {
            borderColor: 'black',
            dashStyle: 'shortdot',
            color: '#FFF9E4'
          }
        }
      },
      series: [{
        data: self.dataInput, // data is array of objects with country info
        mapData: mapData, // default country objects that populate map
        name: 'Sentiment Index'
      }]
    })
  },
};

var createMapView = {
  init: function(tweetData) {
    var map = Highcharts.maps['custom/world'];
    var mapData = Highcharts.geojson(map);
    this.inputData(tweetData);
    this.layoutMap(mapData);
  },
  inputData: function(data) { // may need to be refactor depending on response
    Map.dataInput = [];
    for (var i in data) { // loops through the array of objects from the get json request
      Map.dataInput.push(data[i]);
    }
  },
  layoutMap: function(mapData) {
    Map.defaultView(mapData);
  }
};

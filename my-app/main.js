import Feature from 'ol/Feature.js';
import Map from 'ol/Map.js';
import Overlay from 'ol/Overlay.js';
import Point from 'ol/geom/Point.js';
import View from 'ol/View.js';
import {Icon, Style} from 'ol/style.js';
import {OGCMapTile, OSM, Vector as VectorSource} from 'ol/source.js';
import {Tile as TileLayer, Vector as VectorLayer} from 'ol/layer.js';
import { fromLonLat } from 'ol/proj';
import {location, coord, state, link, population} from './marcadores/marc.js';


const localAl = new Feature({
  geometry: new Point(fromLonLat([36.7820, 9.5708])),
  name: `${location.alagoas} <p> Longitude: ${coord.longAlagoas} <br> Latitude: ${coord.latAlagoas}`,
});
const localPa = new Feature({
  geometry: new Point(fromLonLat([55.4250, 5.8632])),
  name: `${location.para} <p> Longitude: ${coord.longPara} <br> Latitude: ${coord.latPara}`,
});



const local = new Feature({
  geometry: new Point(fromLonLat([-36.5861, -10.2906])),
  name: `
  <h3>${location.penedo}</h3>
  <p> Longitude: ${coord.longPenedo} 
  <p> Latitude: ${coord.latPenedo}
  <p> Estado: ${state.alagoas}
  <p> <a href= ${link.penedo}> Prefeitura Local </a>
  <p> População: ${population.penedo} `
});
const local2 = new Feature({
  geometry: new Point(fromLonLat([-35.7639, -9.6783])),
  name: `
  <h3>${location.riolargo}</h3>
  <p> Longitude: ${coord.longRioLargo} 
  <p> Latitude: ${coord.latRioLargo}
  <p> Estado: ${state.alagoas}
  <p> <a href= ${link.rioLargo}> Prefeitura Local </a>
  <p> População: ${population.rioLargo}`
});
const local3 = new Feature({
  geometry: new Point(fromLonLat([-36.6616, -9.7502])),
  name: `
  <h3>${location.arapiraca}</h3>
  <p> Longitude: ${coord.longArapiraca} 
  <p> Latitude: ${coord.latArapiraca}
   <p> Estado: ${state.alagoas}
  <p> <a href= ${link.arapiraca}> Prefeitura Local </a>
  <p> População: ${population.arapiraca}`
});
const local4 = new Feature({
  geometry: new Point(fromLonLat([-35.5492, -9.5417])),
  name: `
  <h3>${location.saoMiguel}</h3>
  <p> Longitude: ${coord.longBarraDeSaoMiguel} 
  <p> Latitude: ${coord.latBarraDeSaoMiguel}
  <p> Estado: ${state.alagoas}
  <p> <a href= ${link.saoMiguel}> Prefeitura Local </a>
  <p> População: ${population.saoMiguel}`
});
const local5 = new Feature({
  geometry: new Point(fromLonLat([-35.4550, -9.1632])),
  name: `
  <h3>${location.flexeiras}</h3>
  <p> Longitude: ${coord.longFlexeiras} 
  <p> Latitude: ${coord.lalFlexeiras}
  <p> Estado: ${state.alagoas}
  <p> <a href= ${link.flexeiras}> Prefeitura Local </a>
  <p> População: ${population.flexeiras} `
});

const local6 = new Feature({
  geometry: new Point(fromLonLat([-47.9335, -1.2960])),
  name: `
  <h3>${location.castanhal}</h3>
  <p> Longitude: ${coord.longCastanhal}
  <p> Latitude: ${coord.latCastanhal}
  <p> Estado: ${state.para}
  <p> <a href= ${link.castanhal}> Prefeitura Local </a>
  <p> População: ${population.castanhal}`
});
const local7 = new Feature({
  geometry: new Point(fromLonLat([-48.2724, -1.4123])),
  name: `
  <h3>${location.santaIzabel }</h3>
  <p> Longitude: ${coord.longSantaIzabel}
  <p> Latitude: ${coord.latSantaIzabel}
  <p> Estado: ${state.para}
  <p> <a href= ${link.santaIzabel}> Prefeitura Local </a>
  <p> População: ${population.santaIzabel}`
});
const local8 = new Feature({
  geometry: new Point(fromLonLat([-47.8454, -1.6122])),
  name: `
  <h3>${location.acara}</h3>  
  <p> Longitude: ${coord.longAcara} 
  <p> Latitude: ${coord.latAcara}
  <p> Estado: ${state.para}
  <p> <a href= ${link.acara}> Prefeitura Local </a>
  <p> População: ${population.acara}`
});
const local9 = new Feature({
  geometry: new Point(fromLonLat([-49.4643, -8.1857])),
  name: `
  <h3>${location.rendencao}</h3>  
  <p> Longitude: ${coord.longRendencao}  
  <p> Latitude: ${coord.latRendencao} 
  <p> Estado: ${state.para}
  <p> <a href= ${link.rendencao}> Prefeitura Local </a>
  <p> População: ${population.rendencao}`
});
const local10 = new Feature({
  geometry: new Point(fromLonLat([-48.4740, -0.7780])),
  name: `
  <h3>${location.soure}</h3>  
  <p> Longitude: ${coord.longSoure}  
  <p> Latitude: ${coord.latSoure}
  <p> Estado: ${state.para}
  <p> <a href= ${link.soure}> Prefeitura Local </a>
  <p> População: ${population.soure}`

});

const iconStyle = new Style({
  image: new Icon({
    anchor: [0.5, 1],
    anchorXUnits: 'fraction',
    anchorYUnits: 'pixels',
    src: 'data/icon.png',
  }),
});

localAl.setStyle(iconStyle);
local.setStyle(iconStyle);
local2.setStyle(iconStyle);
local3.setStyle(iconStyle);
local4.setStyle(iconStyle);
local5.setStyle(iconStyle);

localPa.setStyle(iconStyle);
local6.setStyle(iconStyle);
local7.setStyle(iconStyle);
local8.setStyle(iconStyle);
local9.setStyle(iconStyle);
local10.setStyle(iconStyle);


const vectorSource = new VectorSource({
  features: [local,local2,local3,local4,local5,local6,local7,local8,local9,local10],
});

const vectorLayer = new VectorLayer({
  source: vectorSource,
});

const rasterLayer = new TileLayer({
  source: new OSM({
    crossOrigin: '',
  }),
});

const map = new Map({
  layers: [rasterLayer, vectorLayer],
  target: document.getElementById('map'),
  view: new View({
    center: fromLonLat([-50,-30]),
    zoom: 4 ,
  }),
});

const element = document.getElementById('popup');

const popup = new Overlay({
  element: element,
  positioning: 'bottom-center',
  stopEvent: false,
});
map.addOverlay(popup);

let popover;
function disposePopover() {
  if (popover) {
    popover.dispose();
    popover = undefined;
  }
}
// exibir popup ao clicar
map.on('click', function (evt) {
  const feature = map.forEachFeatureAtPixel(evt.pixel, function (feature) {
    return feature;
  });
  disposePopover();
  if (!feature) {
    return;
  }
  popup.setPosition(evt.coordinate);
  popover = new bootstrap.Popover(element, {
    placement: 'top',
    html: true,
    content: feature.get('name'),
  });
  popover.show();
});

// Alterar o cursor do mouse quando estiver sobre o marcador
map.on('pointermove', function (e) {
  const pixel = map.getEventPixel(e.originalEvent);
  const hit = map.hasFeatureAtPixel(pixel);
  map.getTarget().style.cursor = hit ? 'pointer' : '';
});
// Feche o popup quando o mapa for movido
map.on('movestart', disposePopover);
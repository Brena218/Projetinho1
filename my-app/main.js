import Feature from 'ol/Feature.js';
import Map from 'ol/Map.js';
import Overlay from 'ol/Overlay.js';
import Point from 'ol/geom/Point.js';
import View from 'ol/View.js';
import {Icon, Style} from 'ol/style.js';
import {OGCMapTile, OSM, Vector as VectorSource} from 'ol/source.js';
import {Tile as TileLayer, Vector as VectorLayer} from 'ol/layer.js';
import { fromLonLat } from 'ol/proj';
import {location, coord} from './marcadores/marc.js'


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
  name: `${location.penedo} <p> Longitude: ${coord.longPenedo} <br> Latitude: ${coord.latPenedo}`,
});
const local2 = new Feature({
  geometry: new Point(fromLonLat([-35.7639, -9.6783])),
  name: `${location.riolargo}  <p> Longitude: ${coord.longRioLargo} <br> Latitude: ${coord.latRioLargo}`,
});
const local3 = new Feature({
  geometry: new Point(fromLonLat([-36.6616, -9.7502])),
  name: `${location.arapiraca} <p> Longitude: ${coord.longArapiraca} <br> Latitude: ${coord.latArapiraca}`,
});
const local4 = new Feature({
  geometry: new Point(fromLonLat([-35.5492, -9.5417])),
  name: `${location.saoMiguel}  <p> Longitude: ${coord.longBarraDeSaoMiguel} <br> Latitude: ${coord.latBarraDeSaoMiguel}`,
});
const local5 = new Feature({
  geometry: new Point(fromLonLat([-35.4550, -9.1632])),
  name: `${location.flexeiras} <p> Longitude: ${coord.longFlexeiras} <br> Latitude: ${coord.lalFlexeiras}`,
});

const local6 = new Feature({
  geometry: new Point(fromLonLat([-47.9335, -1.2960])),
  name: `${location.castanhal}   <p> Longitude: ${coord.longCastanhal} <br> Latitude: ${coord.latCastanhal}`,
});
const local7 = new Feature({
  geometry: new Point(fromLonLat([-48.2724, -1.4123])),
  name: `${location.santaIzabel }   <p> Longitude: ${coord.longSantaIzabel} <br> Latitude: ${coord.latSantaIzabel}`,
});
const local8 = new Feature({
  geometry: new Point(fromLonLat([-47.8454, -1.6122])),
  name: `${location.acara}  <p> Longitude: ${coord.longAcara} <br> Latitude: ${coord.latAcara}`,
});
const local9 = new Feature({
  geometry: new Point(fromLonLat([-49.4643, -8.1857])),
  name: `${location.rendencao}  <p> Longitude: ${coord.longRendencao}  <br> Latitude: ${coord.latRendencao} `,
});
const local10 = new Feature({
  geometry: new Point(fromLonLat([-48.4740, -0.7780])),
  name: `${location.soure}  <p> Longitude: ${coord.longSoure}  <br> Latitude: ${coord.latSoure}`,
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
// display popup on click
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

// change mouse cursor when over marker
map.on('pointermove', function (e) {
  const pixel = map.getEventPixel(e.originalEvent);
  const hit = map.hasFeatureAtPixel(pixel);
  map.getTarget().style.cursor = hit ? 'pointer' : '';
});
// Close the popup when the map is moved
map.on('movestart', disposePopover);
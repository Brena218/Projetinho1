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

const local = new Feature({
  geometry: new Point(fromLonLat([-36.5861, -10.2906])),
  name: `${location.penedo}  <p> ${coord.longPenedo}`,
});
const local2 = new Feature({
  geometry: new Point(fromLonLat([-35.7639, -9.6783])),
  name: `${location.riolargo}  <p> ${coord.longriolargo}`,
});
const local3 = new Feature({
  geometry: new Point(fromLonLat([-36.6616, -9.7502])),
  name: `${location.arapiraca}  <p> ${coord.arapiraca}`,
});
const local4 = new Feature({
  geometry: new Point(fromLonLat([-35.5492, -9.5417])),
  name: `${location.saoMiguel}  <p> ${coord.longsaoMiguel}`,
});
const local5 = new Feature({
  geometry: new Point(fromLonLat([-35.4550, -9.1632])),
  name: `${location.flexeiras}  <p> ${coord.longflexeiras}`,
});

const local6 = new Feature({
  geometry: new Point(fromLonLat([-47.9335, -1.2960])),
  name: `${location.castanhal}  <p> ${coord.longcastanhal}`,
});
const local7 = new Feature({
  geometry: new Point(fromLonLat([-48.2724, -1.4123])),
  name: `${location.santaIzabel }  <p> ${coord.longsantaIzabel }`,
});
const local8 = new Feature({
  geometry: new Point(fromLonLat([-47.8454, -1.6122])),
  name: `${location.acara}  <p> ${coord.acara}`,
});
const local9 = new Feature({
  geometry: new Point(fromLonLat([-49.4643, -8.1857])),
  name: `${location.rendencao}  <p> ${coord.rendencao}`,
});
const local10 = new Feature({
  geometry: new Point(fromLonLat([-48.4740, -0.7780])),
  name: `${location.soure}  <p> ${coord.longsoure}`,
});

const iconStyle = new Style({
  image: new Icon({
    anchor: [0.5, 1],
    anchorXUnits: 'fraction',
    anchorYUnits: 'pixels',
    src: 'data/icon.png',
  }),
});

local.setStyle(iconStyle);
local2.setStyle(iconStyle);
local3.setStyle(iconStyle);
local4.setStyle(iconStyle);
local5.setStyle(iconStyle);

local6.setStyle(iconStyle);
local7.setStyle(iconStyle);
local8.setStyle(iconStyle);
local9.setStyle(iconStyle);
local10.setStyle(iconStyle);


const vectorSource = new VectorSource({
  features: [local,local2],
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
    center: fromLonLat([-40,-30]),
    zoom: 3.4 ,
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
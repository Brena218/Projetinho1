// Importando as classes necessárias da biblioteca OpenLayers
import Feature from 'ol/Feature.js';
import Map from 'ol/Map.js';
import Overlay from 'ol/Overlay.js';
import Point from 'ol/geom/Point.js';
import View from 'ol/View.js';
import { Icon, Style } from 'ol/style.js';
import { OGCMapTile, OSM, Vector as VectorSource } from 'ol/source.js';
import { Tile as TileLayer, Vector as VectorLayer } from 'ol/layer.js';
import { fromLonLat } from 'ol/proj';
import { location, coord, state, link, population } from './marcadores/marc.js';

// Criando marcadores

// Locais de Alagoas
const local16 = new Feature({
  geometry: new Point(fromLonLat([-36.5861, -10.2906])), 
  name: `
  <img src=foto/penedo.jpeg width ="220">
  <h3>${location.penedo}</h3>
  <p> Longitude: ${coord.longPenedo} 
  <p> Latitude: ${coord.latPenedo}
  <p> Estado: ${state.alagoas}
  <p> <a href=${link.penedo}> Prefeitura Local </a>
  <p> ${population.penedo} `
});


const local17 = new Feature({
  geometry: new Point(fromLonLat([-35.7639, -9.6783])),
  name: `
  <img src=foto/rl.png width ="220">
  <h3>${location.riolargo}</h3>
  <p> Longitude: ${coord.longRioLargo} 
  <p> Latitude: ${coord.latRioLargo}
  <p> Estado: ${state.alagoas}
  <p> <a href=${link.rioLargo}> Prefeitura Local </a>
  <p> ${population.rioLargo}`
});


const local18 = new Feature({
  geometry: new Point(fromLonLat([-36.6616, -9.7502])), 
  name: `
  <img src=foto/arapiraca.png width ="220">
  <h3>${location.arapiraca}</h3>
  <p> Longitude: ${coord.longArapiraca} 
  <p> Latitude: ${coord.latArapiraca}
   <p> Estado: ${state.alagoas}
  <p> <a href=${link.arapiraca}> Prefeitura Local </a>
  <p> ${population.arapiraca}`
});

const local19 = new Feature({
  geometry: new Point(fromLonLat([-35.5492, -9.5417])), 
  name: `
  <img src=foto/barradesaomiguel.png width ="220">
  <h3>${location.saoMiguel}</h3>
  <p> Longitude: ${coord.longBarraDeSaoMiguel} 
  <p> Latitude: ${coord.latBarraDeSaoMiguel}
  <p> Estado: ${state.alagoas}
  <p> <a href= ${link.saoMiguel}> Prefeitura Local </a>
  <p> ${population.saoMiguel}`
});

const local20 = new Feature({
  geometry: new Point(fromLonLat([-35.4550, -9.1632])), 
  name: `
  <img src=foto/flexeiras.png width ="220">
  <h3>${location.flexeiras}</h3>
  <p> Longitude: ${coord.longFlexeiras} 
  <p> Latitude: ${coord.lalFlexeiras}
  <p> Estado: ${state.alagoas}
  <p> <a href= ${link.flexeiras}> Prefeitura Local </a>
  <p> ${population.flexeiras} `
});

// Locais do Pará
const local21 = new Feature({
  geometry: new Point(fromLonLat([-47.9335, -1.2960])), 
  name: `
  <img src=foto/castanhal.jpeg width ="220">
  <h3>${location.castanhal}</h3>
  <p> Longitude: ${coord.longCastanhal}
  <p> Latitude: ${coord.latCastanhal}
  <p> Estado: ${state.para}
  <p> <a href= ${link.castanhal}> Prefeitura Local </a>
  <p> ${population.castanhal}`
});


const local22 = new Feature({
  geometry: new Point(fromLonLat([-48.2724, -1.4123])), 
  name: `
  <img src=foto/santaizabel.jpeg width ="220">
  <h3>${location.santaIzabel}</h3>
  <p> Longitude: ${coord.longSantaIzabel}
  <p> Latitude: ${coord.latSantaIzabel}
  <p> Estado: ${state.para}
  <p> <a href= ${link.santaIzabel}> Prefeitura Local </a>
  <p> ${population.santaIzabel}`
});

const local23 = new Feature({
  geometry: new Point(fromLonLat([-48.4902,-1.4558])), 
  name: `
  <img src=foto/belem.png width ="220">
  <h3>${location.belem}</h3>  
  <p> Longitude: ${coord.longBelem} 
  <p> Latitude: ${coord.latBelem}
  <p> Estado: ${state.para}
  <p> <a href= ${link.belem}> Prefeitura Local </a>
  <p> ${population.belem}`
});

const local24 = new Feature({
  geometry: new Point(fromLonLat([-49.4643, -8.1857])), 
  name: `
  <img src=foto/redencao.jpeg width ="220">
  <h3>${location.redencao}</h3>  
  <p> Longitude: ${coord.longRedencao}  
  <p> Latitude: ${coord.latRedencao} 
  <p> Estado: ${state.para}
  <p> <a href="${link.redencao}"> Prefeitura Local </a>
  <p> ${population.redencao}`
});

const local25 = new Feature({
  geometry: new Point(fromLonLat([-48.4740, -0.7780])), 
  name: `
  <img src=foto/soure.jpg width ="220">
  <h3>${location.soure}</h3>  
  <p> Longitude: ${coord.longSoure}  
  <p> Latitude: ${coord.latSoure}
  <p> Estado: ${state.para}
  <p> <a href= ${link.soure}> Prefeitura Local </a>
  <p> ${population.soure}`
});

// Estilo do ícone que será utilizado nos marcadores
const iconStyle = new Style({
  image: new Icon({
    anchor: [0.5, 1], // Posição do âncora do ícone
    anchorXUnits: 'fraction',
    anchorYUnits: 'pixels',
    src: 'foto/icon.png', // Caminho para a imagem do ícone
  }),
});

// Aplicando o estilo de ícone aos marcadores
local16.setStyle(iconStyle);
local17.setStyle(iconStyle);
local18.setStyle(iconStyle);
local19.setStyle(iconStyle);
local20.setStyle(iconStyle);

local21.setStyle(iconStyle);
local22.setStyle(iconStyle);
local23.setStyle(iconStyle);
local24.setStyle(iconStyle);
local25.setStyle(iconStyle);

// Criando a fonte de dados para os marcadores
const vectorSource = new VectorSource({
  features: [ local16, local17, local18, local19, local20, local21, local22, local23, local24, local25],
});

// Criando a camada vetorial para os marcadores
const vectorLayer = new VectorLayer({
  source: vectorSource,
});

// Criando a camada raster (mapa base) 
const rasterLayer = new TileLayer({
  source: new OSM({
    crossOrigin: '',
  }),
});

// Criando o mapa com as camadas raster e vetorial
const map = new Map({
  layers: [rasterLayer, vectorLayer],
  target: document.getElementById('map'), 
  view: new View({
    center: fromLonLat([-50, -30]), // Centro do mapa
    zoom: 4, // Nível de zoom inicial
  }),
});

// Criando um elemento para o popup
const element = document.getElementById('popup');

// Criando um overlay para o popup
const popup = new Overlay({
  element: element,
  positioning: 'bottom-center', // Posição do popup
  stopEvent: false,
});
map.addOverlay(popup); // Adicionando o popup ao mapa

let popover; // Variável para armazenar a instância do popover

// Função para dispensar (fechar) o popover
function disposePopover() {
  // Verifica se o popover existe
  if (popover) {
    popover.dispose(); // Fecha o popover
    popover = undefined; // Limpa a variável para liberar a memória
  }
}

// Exibir o popup ao clicar no mapa
map.on('click', function (evt) {
  // Verifica 
  const feature = map.forEachFeatureAtPixel(evt.pixel, function (feature) {
    return feature; 
  });

  disposePopover(); // Fecha qualquer popover existente

  // sai da função
  if (!feature) {
    return;
  }

  // Define a posição do popup para as coordenadas do clique
  popup.setPosition(evt.coordinate);

  // Cria uma nova instância do popover do Bootstrap
  popover = new bootstrap.Popover(element, {
    placement: 'top', // Define a posição do popover
    html: true, 
    content: feature.get('name'), 
  });

  popover.show(); // Exibe o popover
});

// Mudar o cursor do mouse quando estiver sobre um marcador
map.on('pointermove', function (e) {
  const pixel = map.getEventPixel(e.originalEvent); 
  const hit = map.hasFeatureAtPixel(pixel); 
  // Altera o cursor para 'pointer' se houver uma feature, caso contrário, limpa
  map.getTarget().style.cursor = hit ? 'pointer' : '';
});

// Fecha o popup quando o mapa é movido
map.on('movestart', disposePopover); // Chama a função para dispensar o popover ao iniciar o movimento do mapa

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

// Criando marcadores para Alagoas
const localAl = new Feature({
  geometry: new Point(fromLonLat([36.7820, 9.5708])), // Coordenadas de Alagoas
  name: `${location.alagoas} <p> Longitude: ${coord.longAlagoas} <br> Latitude: ${coord.latAlagoas}`,
});

const localPa = new Feature({
  geometry: new Point(fromLonLat([55.4250, 5.8632])), // Coordenadas do Pará
  name: `${location.para} <p> Longitude: ${coord.longPara} <br> Latitude: ${coord.latPara}`,
});

// Locais de Alagoas
const local16 = new Feature({
  geometry: new Point(fromLonLat([-36.5861, -10.2906])), // Penedo
  name: `
  <h3>${location.penedo}</h3>
  <p> Longitude: ${coord.longPenedo} 
  <p> Latitude: ${coord.latPenedo}
  <p> Estado: ${state.alagoas}
  <p> <a href= ${link.penedo}> Prefeitura Local </a>
  <p> População: ${population.penedo} `
});

// Criando mais locais de Alagoas
const local17 = new Feature({
  geometry: new Point(fromLonLat([-35.7639, -9.6783])), // Rio Largo
  name: `
  <h3>${location.riolargo}</h3>
  <p> Longitude: ${coord.longRioLargo} 
  <p> Latitude: ${coord.latRioLargo}
  <p> Estado: ${state.alagoas}
  <p> <a href= ${link.rioLargo}> Prefeitura Local </a>
  <p> População: ${population.rioLargo}`
});

// Adicionando mais locais em Alagoas
const local18 = new Feature({
  geometry: new Point(fromLonLat([-36.6616, -9.7502])), // Arapiraca
  name: `
  <h3>${location.arapiraca}</h3>
  <p> Longitude: ${coord.longArapiraca} 
  <p> Latitude: ${coord.latArapiraca}
   <p> Estado: ${state.alagoas}
  <p> <a href= ${link.arapiraca}> Prefeitura Local </a>
  <p> População: ${population.arapiraca}`
});

// Continuando com a criação de locais em Alagoas
const local19 = new Feature({
  geometry: new Point(fromLonLat([-35.5492, -9.5417])), // Barra de São Miguel
  name: `
  <h3>${location.saoMiguel}</h3>
  <p> Longitude: ${coord.longBarraDeSaoMiguel} 
  <p> Latitude: ${coord.latBarraDeSaoMiguel}
  <p> Estado: ${state.alagoas}
  <p> <a href= ${link.saoMiguel}> Prefeitura Local </a>
  <p> População: ${population.saoMiguel}`
});

const local20 = new Feature({
  geometry: new Point(fromLonLat([-35.4550, -9.1632])), // Flexeiras
  name: `
  <h3>${location.flexeiras}</h3>
  <p> Longitude: ${coord.longFlexeiras} 
  <p> Latitude: ${coord.lalFlexeiras}
  <p> Estado: ${state.alagoas}
  <p> <a href= ${link.flexeiras}> Prefeitura Local </a>
  <p> População: ${population.flexeiras} `
});

// Locais do Pará
const local21 = new Feature({
  geometry: new Point(fromLonLat([-47.9335, -1.2960])), // Castanhal
  name: `
  <h3>${location.castanhal}</h3>
  <p> Longitude: ${coord.longCastanhal}
  <p> Latitude: ${coord.latCastanhal}
  <p> Estado: ${state.para}
  <p> <a href= ${link.castanhal}> Prefeitura Local </a>
  <p> População: ${population.castanhal}`
});

// Criando mais locais no Pará
const local22 = new Feature({
  geometry: new Point(fromLonLat([-48.2724, -1.4123])), // Santa Izabel
  name: `
  <h3>${location.santaIzabel}</h3>
  <p> Longitude: ${coord.longSantaIzabel}
  <p> Latitude: ${coord.latSantaIzabel}
  <p> Estado: ${state.para}
  <p> <a href= ${link.santaIzabel}> Prefeitura Local </a>
  <p> População: ${population.santaIzabel}`
});

const local23 = new Feature({
  geometry: new Point(fromLonLat([-47.8454, -1.6122])), // Acará
  name: `
  <h3>${location.acara}</h3>  
  <p> Longitude: ${coord.longAcara} 
  <p> Latitude: ${coord.latAcara}
  <p> Estado: ${state.para}
  <p> <a href= ${link.acara}> Prefeitura Local </a>
  <p> População: ${population.acara}`
});

const local24 = new Feature({
  geometry: new Point(fromLonLat([-49.4643, -8.1857])), // Redenção
  name: `
  <h3>${location.rendencao}</h3>  
  <p> Longitude: ${coord.longRendencao}  
  <p> Latitude: ${coord.latRendencao} 
  <p> Estado: ${state.para}
  <p> <a href= ${link.rendencao}> Prefeitura Local </a>
  <p> População: ${population.rendencao}`
});

const local25 = new Feature({
  geometry: new Point(fromLonLat([-48.4740, -0.7780])), // Soure
  name: `
  <h3>${location.soure}</h3>  
  <p> Longitude: ${coord.longSoure}  
  <p> Latitude: ${coord.latSoure}
  <p> Estado: ${state.para}
  <p> <a href= ${link.soure}> Prefeitura Local </a>
  <p> População: ${population.soure}`
});

// Estilo do ícone que será utilizado nos marcadores
const iconStyle = new Style({
  image: new Icon({
    anchor: [0.5, 1], // Posição do âncora do ícone
    anchorXUnits: 'fraction',
    anchorYUnits: 'pixels',
    src: 'data/icon.png', // Caminho para a imagem do ícone
  }),
});

// Aplicando o estilo de ícone aos marcadores
localAl.setStyle(iconStyle);
local16.setStyle(iconStyle);
local17.setStyle(iconStyle);
local18.setStyle(iconStyle);
local19.setStyle(iconStyle);
local20.setStyle(iconStyle);

localPa.setStyle(iconStyle);
local21.setStyle(iconStyle);
local22.setStyle(iconStyle);
local23.setStyle(iconStyle);
local24.setStyle(iconStyle);
local25.setStyle(iconStyle);

// Criando a fonte de dados para os marcadores
const vectorSource = new VectorSource({
  features: [localAl, local16, local17, local18, local19, local20, localPa, local21, local22, local23, local24, local25],
});

// Criando a camada vetorial para os marcadores
const vectorLayer = new VectorLayer({
  source: vectorSource,
});

// Criando a camada raster (mapa base) usando OSM (OpenStreetMap)
const rasterLayer = new TileLayer({
  source: new OSM({
    crossOrigin: '',
  }),
});

// Criando o mapa com as camadas raster e vetorial
const map = new Map({
  layers: [rasterLayer, vectorLayer],
  target: document.getElementById('map'), // Elemento HTML onde o mapa será renderizado
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
  // Verifica se há uma feature no pixel onde foi feito o clique
  const feature = map.forEachFeatureAtPixel(evt.pixel, function (feature) {
    return feature; // Retorna a feature encontrada
  });

  disposePopover(); // Fecha qualquer popover existente

  // Se não houver feature, sai da função
  if (!feature) {
    return;
  }

  // Define a posição do popup para as coordenadas do clique
  popup.setPosition(evt.coordinate);

  // Cria uma nova instância do popover do Bootstrap
  popover = new bootstrap.Popover(element, {
    placement: 'top', // Define a posição do popover
    html: true, // Permite que o conteúdo do popover seja HTML
    content: feature.get('name'), // Define o conteúdo do popover com o nome da feature
  });

  popover.show(); // Exibe o popover
});

// Mudar o cursor do mouse quando estiver sobre um marcador
map.on('pointermove', function (e) {
  const pixel = map.getEventPixel(e.originalEvent); // Obtém o pixel do evento
  const hit = map.hasFeatureAtPixel(pixel); // Verifica se há uma feature nesse pixel
  // Altera o cursor para 'pointer' se houver uma feature, caso contrário, limpa
  map.getTarget().style.cursor = hit ? 'pointer' : '';
});

// Fecha o popup quando o mapa é movido
map.on('movestart', disposePopover); // Chama a função para dispensar o popover ao iniciar o movimento do mapa

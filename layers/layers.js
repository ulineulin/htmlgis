var wms_layers = [];

var format_BEJI_0 = new ol.format.GeoJSON();
var features_BEJI_0 = format_BEJI_0.readFeatures(json_BEJI_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BEJI_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BEJI_0.addFeatures(features_BEJI_0);
var lyr_BEJI_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BEJI_0, 
                style: style_BEJI_0,
                interactive: true,
    title: 'BEJI<br />\
    <img src="styles/legend/BEJI_0_0.png" /> Beji<br />\
    <img src="styles/legend/BEJI_0_1.png" /> Beji Timur<br />\
    <img src="styles/legend/BEJI_0_2.png" /> Kemirimuka<br />\
    <img src="styles/legend/BEJI_0_3.png" /> Kukusan<br />\
    <img src="styles/legend/BEJI_0_4.png" /> Pondok Cina<br />\
    <img src="styles/legend/BEJI_0_5.png" /> Tanahbaru<br />'
        });
var format_JALAN_1 = new ol.format.GeoJSON();
var features_JALAN_1 = format_JALAN_1.readFeatures(json_JALAN_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JALAN_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JALAN_1.addFeatures(features_JALAN_1);
var lyr_JALAN_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_JALAN_1, 
                style: style_JALAN_1,
                interactive: true,
                title: '<img src="styles/legend/JALAN_1.png" /> JALAN'
            });
var format_KLINIK_2 = new ol.format.GeoJSON();
var features_KLINIK_2 = format_KLINIK_2.readFeatures(json_KLINIK_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KLINIK_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KLINIK_2.addFeatures(features_KLINIK_2);
var lyr_KLINIK_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_KLINIK_2, 
                style: style_KLINIK_2,
                interactive: true,
                title: '<img src="styles/legend/KLINIK_2.png" /> KLINIK'
            });

lyr_BEJI_0.setVisible(true);lyr_JALAN_1.setVisible(true);lyr_KLINIK_2.setVisible(true);
var layersList = [lyr_BEJI_0,lyr_JALAN_1,lyr_KLINIK_2];
lyr_BEJI_0.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'KDEPUM': 'KDEPUM', });
lyr_JALAN_1.set('fieldAliases', {'ID': 'ID', 'NAMA': 'NAMA', });
lyr_KLINIK_2.set('fieldAliases', {'NO': 'NO', 'Y': 'Y', 'X': 'X', 'NAMA': 'NAMA', 'ALAMAT': 'ALAMAT', });
lyr_BEJI_0.set('fieldImages', {'NAMOBJ': 'TextEdit', 'KDEPUM': 'TextEdit', });
lyr_JALAN_1.set('fieldImages', {'ID': 'Range', 'NAMA': 'TextEdit', });
lyr_KLINIK_2.set('fieldImages', {'NO': 'TextEdit', 'Y': 'TextEdit', 'X': 'TextEdit', 'NAMA': 'TextEdit', 'ALAMAT': 'TextEdit', });
lyr_BEJI_0.set('fieldLabels', {'NAMOBJ': 'no label', 'KDEPUM': 'no label', });
lyr_JALAN_1.set('fieldLabels', {'ID': 'no label', 'NAMA': 'no label', });
lyr_KLINIK_2.set('fieldLabels', {'NO': 'no label', 'Y': 'no label', 'X': 'no label', 'NAMA': 'no label', 'ALAMAT': 'no label', });
lyr_KLINIK_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
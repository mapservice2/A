var wms_layers = [];


        var lyr_ESRITopo_0 = new ol.layer.Tile({
            'title': 'ESRI Topo',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://services.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_u_territorial_zonas_metropolitanas_conapo_2010_1 = new ol.format.GeoJSON();
var features_u_territorial_zonas_metropolitanas_conapo_2010_1 = format_u_territorial_zonas_metropolitanas_conapo_2010_1.readFeatures(json_u_territorial_zonas_metropolitanas_conapo_2010_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_u_territorial_zonas_metropolitanas_conapo_2010_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_u_territorial_zonas_metropolitanas_conapo_2010_1.addFeatures(features_u_territorial_zonas_metropolitanas_conapo_2010_1);
var lyr_u_territorial_zonas_metropolitanas_conapo_2010_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_u_territorial_zonas_metropolitanas_conapo_2010_1, 
                style: style_u_territorial_zonas_metropolitanas_conapo_2010_1,
                interactive: true,
                title: '<img src="styles/legend/u_territorial_zonas_metropolitanas_conapo_2010_1.png" /> u_territorial_zonas_metropolitanas_conapo_2010'
            });

lyr_ESRITopo_0.setVisible(true);lyr_u_territorial_zonas_metropolitanas_conapo_2010_1.setVisible(true);
var layersList = [lyr_ESRITopo_0,lyr_u_territorial_zonas_metropolitanas_conapo_2010_1];
lyr_u_territorial_zonas_metropolitanas_conapo_2010_1.set('fieldAliases', {'gid': 'gid', 'cve_sun': 'cve_sun', 'nom_zmetro': 'nom_zmetro', });
lyr_u_territorial_zonas_metropolitanas_conapo_2010_1.set('fieldImages', {'gid': 'Range', 'cve_sun': 'TextEdit', 'nom_zmetro': 'TextEdit', });
lyr_u_territorial_zonas_metropolitanas_conapo_2010_1.set('fieldLabels', {'gid': 'no label', 'cve_sun': 'no label', 'nom_zmetro': 'no label', });
lyr_u_territorial_zonas_metropolitanas_conapo_2010_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
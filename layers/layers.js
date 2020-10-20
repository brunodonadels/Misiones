var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleHybrid_1 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_Departamentos_2 = new ol.format.GeoJSON();
var features_Departamentos_2 = format_Departamentos_2.readFeatures(json_Departamentos_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Departamentos_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Departamentos_2.addFeatures(features_Departamentos_2);
var lyr_Departamentos_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Departamentos_2, 
                style: style_Departamentos_2,
                interactive: true,
                title: '<img src="styles/legend/Departamentos_2.png" /> Departamentos'
            });
var format_PEAINDEC_3 = new ol.format.GeoJSON();
var features_PEAINDEC_3 = format_PEAINDEC_3.readFeatures(json_PEAINDEC_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PEAINDEC_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PEAINDEC_3.addFeatures(features_PEAINDEC_3);
var lyr_PEAINDEC_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PEAINDEC_3, 
                style: style_PEAINDEC_3,
                interactive: true,
    title: 'PEA (INDEC)<br />\
    <img src="styles/legend/PEAINDEC_3_0.png" /> 5.000 - 17.500<br />\
    <img src="styles/legend/PEAINDEC_3_1.png" /> 17.501 - 32.500<br />\
    <img src="styles/legend/PEAINDEC_3_2.png" /> 32.501 - 65.000<br />\
    <img src="styles/legend/PEAINDEC_3_3.png" /> 65.001 - 210.000<br />'
        });
var format_ViviendasruralesINDEC_4 = new ol.format.GeoJSON();
var features_ViviendasruralesINDEC_4 = format_ViviendasruralesINDEC_4.readFeatures(json_ViviendasruralesINDEC_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ViviendasruralesINDEC_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ViviendasruralesINDEC_4.addFeatures(features_ViviendasruralesINDEC_4);
var lyr_ViviendasruralesINDEC_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ViviendasruralesINDEC_4, 
                style: style_ViviendasruralesINDEC_4,
                interactive: true,
    title: 'Viviendas rurales (INDEC)<br />\
    <img src="styles/legend/ViviendasruralesINDEC_4_0.png" /> 1.000 - 2.000<br />\
    <img src="styles/legend/ViviendasruralesINDEC_4_1.png" /> 2.001 - 4.000<br />\
    <img src="styles/legend/ViviendasruralesINDEC_4_2.png" /> 4.001 - 7.000<br />\
    <img src="styles/legend/ViviendasruralesINDEC_4_3.png" /> 7.001 - 11.500<br />'
        });
var format_CabezasdeporcinosMAGyP_5 = new ol.format.GeoJSON();
var features_CabezasdeporcinosMAGyP_5 = format_CabezasdeporcinosMAGyP_5.readFeatures(json_CabezasdeporcinosMAGyP_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CabezasdeporcinosMAGyP_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CabezasdeporcinosMAGyP_5.addFeatures(features_CabezasdeporcinosMAGyP_5);
var lyr_CabezasdeporcinosMAGyP_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CabezasdeporcinosMAGyP_5, 
                style: style_CabezasdeporcinosMAGyP_5,
                interactive: true,
    title: 'Cabezas de porcinos (MAGyP)<br />\
    <img src="styles/legend/CabezasdeporcinosMAGyP_5_0.png" /> 450 - 2.000<br />\
    <img src="styles/legend/CabezasdeporcinosMAGyP_5_1.png" /> 2.001 - 7.250<br />\
    <img src="styles/legend/CabezasdeporcinosMAGyP_5_2.png" /> 7.251 - 13.250<br />\
    <img src="styles/legend/CabezasdeporcinosMAGyP_5_3.png" /> 13.251 o más<br />'
        });
var format_CabezasdeovinosMAGyP_6 = new ol.format.GeoJSON();
var features_CabezasdeovinosMAGyP_6 = format_CabezasdeovinosMAGyP_6.readFeatures(json_CabezasdeovinosMAGyP_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CabezasdeovinosMAGyP_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CabezasdeovinosMAGyP_6.addFeatures(features_CabezasdeovinosMAGyP_6);
var lyr_CabezasdeovinosMAGyP_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CabezasdeovinosMAGyP_6, 
                style: style_CabezasdeovinosMAGyP_6,
                interactive: true,
    title: 'Cabezas de ovinos (MAGyP)<br />\
    <img src="styles/legend/CabezasdeovinosMAGyP_6_0.png" /> 100 - 600<br />\
    <img src="styles/legend/CabezasdeovinosMAGyP_6_1.png" /> 601 - 1.500<br />\
    <img src="styles/legend/CabezasdeovinosMAGyP_6_2.png" /> 1.501 - 2.600<br />\
    <img src="styles/legend/CabezasdeovinosMAGyP_6_3.png" /> 2.601 - 3.750<br />'
        });
var format_CabezasdecaprinosMAGyP_7 = new ol.format.GeoJSON();
var features_CabezasdecaprinosMAGyP_7 = format_CabezasdecaprinosMAGyP_7.readFeatures(json_CabezasdecaprinosMAGyP_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CabezasdecaprinosMAGyP_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CabezasdecaprinosMAGyP_7.addFeatures(features_CabezasdecaprinosMAGyP_7);
var lyr_CabezasdecaprinosMAGyP_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CabezasdecaprinosMAGyP_7, 
                style: style_CabezasdecaprinosMAGyP_7,
                interactive: true,
    title: 'Cabezas de caprinos (MAGyP)<br />\
    <img src="styles/legend/CabezasdecaprinosMAGyP_7_0.png" /> 10 - 150<br />\
    <img src="styles/legend/CabezasdecaprinosMAGyP_7_1.png" /> 151 - 325<br />\
    <img src="styles/legend/CabezasdecaprinosMAGyP_7_2.png" /> 326 - 750<br />\
    <img src="styles/legend/CabezasdecaprinosMAGyP_7_3.png" /> 751 - 1.250<br />'
        });
var format_CabezasdebovinosMAGyP_8 = new ol.format.GeoJSON();
var features_CabezasdebovinosMAGyP_8 = format_CabezasdebovinosMAGyP_8.readFeatures(json_CabezasdebovinosMAGyP_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CabezasdebovinosMAGyP_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CabezasdebovinosMAGyP_8.addFeatures(features_CabezasdebovinosMAGyP_8);
var lyr_CabezasdebovinosMAGyP_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CabezasdebovinosMAGyP_8, 
                style: style_CabezasdebovinosMAGyP_8,
                interactive: true,
    title: 'Cabezas de bovinos (MAGyP)<br />\
    <img src="styles/legend/CabezasdebovinosMAGyP_8_0.png" /> 3.000 - 10.000<br />\
    <img src="styles/legend/CabezasdebovinosMAGyP_8_1.png" /> 10.001 - 22.000<br />\
    <img src="styles/legend/CabezasdebovinosMAGyP_8_2.png" /> 22.001 - 40.000<br />\
    <img src="styles/legend/CabezasdebovinosMAGyP_8_3.png" /> 40.001 o más<br />'
        });
var format_HectreasmandiocaINDEC_9 = new ol.format.GeoJSON();
var features_HectreasmandiocaINDEC_9 = format_HectreasmandiocaINDEC_9.readFeatures(json_HectreasmandiocaINDEC_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HectreasmandiocaINDEC_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HectreasmandiocaINDEC_9.addFeatures(features_HectreasmandiocaINDEC_9);
var lyr_HectreasmandiocaINDEC_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HectreasmandiocaINDEC_9, 
                style: style_HectreasmandiocaINDEC_9,
                interactive: true,
    title: 'Hectáreas mandioca (INDEC)<br />\
    <img src="styles/legend/HectreasmandiocaINDEC_9_0.png" /> 9 - 80<br />\
    <img src="styles/legend/HectreasmandiocaINDEC_9_1.png" /> 81 - 400<br />\
    <img src="styles/legend/HectreasmandiocaINDEC_9_2.png" /> 401 - 1.000<br />\
    <img src="styles/legend/HectreasmandiocaINDEC_9_3.png" /> 1.001 - 1.600<br />'
        });
var format_HectreaslegumbresINDEC_10 = new ol.format.GeoJSON();
var features_HectreaslegumbresINDEC_10 = format_HectreaslegumbresINDEC_10.readFeatures(json_HectreaslegumbresINDEC_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HectreaslegumbresINDEC_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HectreaslegumbresINDEC_10.addFeatures(features_HectreaslegumbresINDEC_10);
var lyr_HectreaslegumbresINDEC_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HectreaslegumbresINDEC_10, 
                style: style_HectreaslegumbresINDEC_10,
                interactive: true,
    title: 'Hectáreas legumbres (INDEC)<br />\
    <img src="styles/legend/HectreaslegumbresINDEC_10_0.png" /> 0<br />\
    <img src="styles/legend/HectreaslegumbresINDEC_10_1.png" /> 1 - 10<br />\
    <img src="styles/legend/HectreaslegumbresINDEC_10_2.png" /> 11 - 200<br />\
    <img src="styles/legend/HectreaslegumbresINDEC_10_3.png" /> 201 - 575<br />'
        });
var format_HectreasmazMAGyP_11 = new ol.format.GeoJSON();
var features_HectreasmazMAGyP_11 = format_HectreasmazMAGyP_11.readFeatures(json_HectreasmazMAGyP_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HectreasmazMAGyP_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HectreasmazMAGyP_11.addFeatures(features_HectreasmazMAGyP_11);
var lyr_HectreasmazMAGyP_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HectreasmazMAGyP_11, 
                style: style_HectreasmazMAGyP_11,
                interactive: true,
    title: 'Hectáreas maíz (MAGyP)<br />\
    <img src="styles/legend/HectreasmazMAGyP_11_0.png" /> 50 - 700<br />\
    <img src="styles/legend/HectreasmazMAGyP_11_1.png" /> 701 - 2.700<br />\
    <img src="styles/legend/HectreasmazMAGyP_11_2.png" /> 2.701 - 5.000<br />\
    <img src="styles/legend/HectreasmazMAGyP_11_3.png" /> 5.001 - 10.000<br />'
        });
var format_HectreastabacoINDEC_12 = new ol.format.GeoJSON();
var features_HectreastabacoINDEC_12 = format_HectreastabacoINDEC_12.readFeatures(json_HectreastabacoINDEC_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HectreastabacoINDEC_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HectreastabacoINDEC_12.addFeatures(features_HectreastabacoINDEC_12);
var lyr_HectreastabacoINDEC_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HectreastabacoINDEC_12, 
                style: style_HectreastabacoINDEC_12,
                interactive: true,
    title: 'Hectáreas tabaco (INDEC)<br />\
    <img src="styles/legend/HectreastabacoINDEC_12_0.png" /> 0<br />\
    <img src="styles/legend/HectreastabacoINDEC_12_1.png" /> 1 - 200<br />\
    <img src="styles/legend/HectreastabacoINDEC_12_2.png" /> 201 - 1.000<br />\
    <img src="styles/legend/HectreastabacoINDEC_12_3.png" /> 1.001 - 5.250<br />\
    <img src="styles/legend/HectreastabacoINDEC_12_4.png" /> 5.251 - 10.500<br />'
        });
var format_HectreasctricosINDEC_13 = new ol.format.GeoJSON();
var features_HectreasctricosINDEC_13 = format_HectreasctricosINDEC_13.readFeatures(json_HectreasctricosINDEC_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HectreasctricosINDEC_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HectreasctricosINDEC_13.addFeatures(features_HectreasctricosINDEC_13);
var lyr_HectreasctricosINDEC_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HectreasctricosINDEC_13, 
                style: style_HectreasctricosINDEC_13,
                interactive: true,
    title: 'Hectáreas cítricos (INDEC)<br />\
    <img src="styles/legend/HectreasctricosINDEC_13_0.png" /> 1 - 120<br />\
    <img src="styles/legend/HectreasctricosINDEC_13_1.png" /> 121 - 600<br />\
    <img src="styles/legend/HectreasctricosINDEC_13_2.png" /> 601 - 1.150<br />'
        });
var format_HectreashortalizasINDEC_14 = new ol.format.GeoJSON();
var features_HectreashortalizasINDEC_14 = format_HectreashortalizasINDEC_14.readFeatures(json_HectreashortalizasINDEC_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HectreashortalizasINDEC_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HectreashortalizasINDEC_14.addFeatures(features_HectreashortalizasINDEC_14);
var lyr_HectreashortalizasINDEC_14 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HectreashortalizasINDEC_14, 
                style: style_HectreashortalizasINDEC_14,
                interactive: true,
    title: 'Hectáreas hortalizas (INDEC)<br />\
    <img src="styles/legend/HectreashortalizasINDEC_14_0.png" /> 1 - 150<br />\
    <img src="styles/legend/HectreashortalizasINDEC_14_1.png" /> 151 - 425<br />\
    <img src="styles/legend/HectreashortalizasINDEC_14_2.png" /> 426 - 1.300<br />\
    <img src="styles/legend/HectreashortalizasINDEC_14_3.png" /> 1.301 - 2.000<br />'
        });
var format_HectreasdeteMAGyP_15 = new ol.format.GeoJSON();
var features_HectreasdeteMAGyP_15 = format_HectreasdeteMAGyP_15.readFeatures(json_HectreasdeteMAGyP_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HectreasdeteMAGyP_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HectreasdeteMAGyP_15.addFeatures(features_HectreasdeteMAGyP_15);
var lyr_HectreasdeteMAGyP_15 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HectreasdeteMAGyP_15, 
                style: style_HectreasdeteMAGyP_15,
                interactive: true,
    title: 'Hectáreas de te (MAGyP)<br />\
    <img src="styles/legend/HectreasdeteMAGyP_15_0.png" /> 0<br />\
    <img src="styles/legend/HectreasdeteMAGyP_15_1.png" /> 1 - 500<br />\
    <img src="styles/legend/HectreasdeteMAGyP_15_2.png" /> 501 - 2.500<br />\
    <img src="styles/legend/HectreasdeteMAGyP_15_3.png" /> 2.501 - 10.000<br />\
    <img src="styles/legend/HectreasdeteMAGyP_15_4.png" /> 10.001 o más<br />'
        });
var format_HectreascaadeazucarINDEC_16 = new ol.format.GeoJSON();
var features_HectreascaadeazucarINDEC_16 = format_HectreascaadeazucarINDEC_16.readFeatures(json_HectreascaadeazucarINDEC_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HectreascaadeazucarINDEC_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HectreascaadeazucarINDEC_16.addFeatures(features_HectreascaadeazucarINDEC_16);
var lyr_HectreascaadeazucarINDEC_16 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HectreascaadeazucarINDEC_16, 
                style: style_HectreascaadeazucarINDEC_16,
                interactive: true,
    title: 'Hectáreas caña de azucar (INDEC)<br />\
    <img src="styles/legend/HectreascaadeazucarINDEC_16_0.png" /> 1 - 150<br />\
    <img src="styles/legend/HectreascaadeazucarINDEC_16_1.png" /> 151 - 550<br />\
    <img src="styles/legend/HectreascaadeazucarINDEC_16_2.png" /> 551 - 1.170<br />'
        });
var format_HectreassojaMAGyP_17 = new ol.format.GeoJSON();
var features_HectreassojaMAGyP_17 = format_HectreassojaMAGyP_17.readFeatures(json_HectreassojaMAGyP_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HectreassojaMAGyP_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HectreassojaMAGyP_17.addFeatures(features_HectreassojaMAGyP_17);
var lyr_HectreassojaMAGyP_17 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HectreassojaMAGyP_17, 
                style: style_HectreassojaMAGyP_17,
                interactive: true,
    title: 'Hectáreas soja (MAGyP)<br />\
    <img src="styles/legend/HectreassojaMAGyP_17_0.png" /> 0<br />\
    <img src="styles/legend/HectreassojaMAGyP_17_1.png" /> 1 - 100<br />\
    <img src="styles/legend/HectreassojaMAGyP_17_2.png" /> 101 - 1.000<br />\
    <img src="styles/legend/HectreassojaMAGyP_17_3.png" /> 1.001 - 2.000<br />'
        });
var format_HectreasYerbaMateMAGyP_18 = new ol.format.GeoJSON();
var features_HectreasYerbaMateMAGyP_18 = format_HectreasYerbaMateMAGyP_18.readFeatures(json_HectreasYerbaMateMAGyP_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HectreasYerbaMateMAGyP_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HectreasYerbaMateMAGyP_18.addFeatures(features_HectreasYerbaMateMAGyP_18);
var lyr_HectreasYerbaMateMAGyP_18 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HectreasYerbaMateMAGyP_18, 
                style: style_HectreasYerbaMateMAGyP_18,
                interactive: true,
    title: 'Hectáreas Yerba Mate (MAGyP)<br />\
    <img src="styles/legend/HectreasYerbaMateMAGyP_18_0.png" /> 500 - 5.500<br />\
    <img src="styles/legend/HectreasYerbaMateMAGyP_18_1.png" /> 5.501 - 10.000<br />\
    <img src="styles/legend/HectreasYerbaMateMAGyP_18_2.png" /> 10.001 - 16.000<br />\
    <img src="styles/legend/HectreasYerbaMateMAGyP_18_3.png" /> 16.001 - 22.000<br />'
        });
var format_Localidades_19 = new ol.format.GeoJSON();
var features_Localidades_19 = format_Localidades_19.readFeatures(json_Localidades_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Localidades_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Localidades_19.addFeatures(features_Localidades_19);
var lyr_Localidades_19 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Localidades_19, 
                style: style_Localidades_19,
                interactive: true,
                title: '<img src="styles/legend/Localidades_19.png" /> Localidades'
            });
var format_BERMisiones_20 = new ol.format.GeoJSON();
var features_BERMisiones_20 = format_BERMisiones_20.readFeatures(json_BERMisiones_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BERMisiones_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BERMisiones_20.addFeatures(features_BERMisiones_20);
var lyr_BERMisiones_20 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BERMisiones_20, 
                style: style_BERMisiones_20,
                interactive: true,
                title: '<img src="styles/legend/BERMisiones_20.png" /> BER Misiones'
            });
var format_BERMisiones_21 = new ol.format.GeoJSON();
var features_BERMisiones_21 = format_BERMisiones_21.readFeatures(json_BERMisiones_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BERMisiones_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BERMisiones_21.addFeatures(features_BERMisiones_21);
var lyr_BERMisiones_21 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BERMisiones_21, 
                style: style_BERMisiones_21,
                interactive: true,
                title: '<img src="styles/legend/BERMisiones_21.png" /> BER Misiones'
            });
var format_DelegacinPosadas_22 = new ol.format.GeoJSON();
var features_DelegacinPosadas_22 = format_DelegacinPosadas_22.readFeatures(json_DelegacinPosadas_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DelegacinPosadas_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DelegacinPosadas_22.addFeatures(features_DelegacinPosadas_22);
var lyr_DelegacinPosadas_22 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DelegacinPosadas_22, 
                style: style_DelegacinPosadas_22,
                interactive: true,
                title: '<img src="styles/legend/DelegacinPosadas_22.png" /> Delegación Posadas'
            });

lyr_GoogleMaps_0.setVisible(true);lyr_GoogleHybrid_1.setVisible(true);lyr_Departamentos_2.setVisible(true);lyr_PEAINDEC_3.setVisible(true);lyr_ViviendasruralesINDEC_4.setVisible(true);lyr_CabezasdeporcinosMAGyP_5.setVisible(true);lyr_CabezasdeovinosMAGyP_6.setVisible(true);lyr_CabezasdecaprinosMAGyP_7.setVisible(true);lyr_CabezasdebovinosMAGyP_8.setVisible(true);lyr_HectreasmandiocaINDEC_9.setVisible(true);lyr_HectreaslegumbresINDEC_10.setVisible(true);lyr_HectreasmazMAGyP_11.setVisible(true);lyr_HectreastabacoINDEC_12.setVisible(true);lyr_HectreasctricosINDEC_13.setVisible(true);lyr_HectreashortalizasINDEC_14.setVisible(true);lyr_HectreasdeteMAGyP_15.setVisible(true);lyr_HectreascaadeazucarINDEC_16.setVisible(true);lyr_HectreassojaMAGyP_17.setVisible(true);lyr_HectreasYerbaMateMAGyP_18.setVisible(true);lyr_Localidades_19.setVisible(true);lyr_BERMisiones_20.setVisible(true);lyr_BERMisiones_21.setVisible(true);lyr_DelegacinPosadas_22.setVisible(true);
var layersList = [lyr_GoogleMaps_0,lyr_GoogleHybrid_1,lyr_Departamentos_2,lyr_PEAINDEC_3,lyr_ViviendasruralesINDEC_4,lyr_CabezasdeporcinosMAGyP_5,lyr_CabezasdeovinosMAGyP_6,lyr_CabezasdecaprinosMAGyP_7,lyr_CabezasdebovinosMAGyP_8,lyr_HectreasmandiocaINDEC_9,lyr_HectreaslegumbresINDEC_10,lyr_HectreasmazMAGyP_11,lyr_HectreastabacoINDEC_12,lyr_HectreasctricosINDEC_13,lyr_HectreashortalizasINDEC_14,lyr_HectreasdeteMAGyP_15,lyr_HectreascaadeazucarINDEC_16,lyr_HectreassojaMAGyP_17,lyr_HectreasYerbaMateMAGyP_18,lyr_Localidades_19,lyr_BERMisiones_20,lyr_BERMisiones_21,lyr_DelegacinPosadas_22];
lyr_Departamentos_2.set('fieldAliases', {'Depto': 'Depto', });
lyr_PEAINDEC_3.set('fieldAliases', {'PEA': 'PEA', });
lyr_ViviendasruralesINDEC_4.set('fieldAliases', {'Viv.Rur': 'Viv.Rur', });
lyr_CabezasdeporcinosMAGyP_5.set('fieldAliases', {'Porcinos': 'Porcinos', });
lyr_CabezasdeovinosMAGyP_6.set('fieldAliases', {'Ovinos': 'Ovinos', });
lyr_CabezasdecaprinosMAGyP_7.set('fieldAliases', {'Caprinos': 'Caprinos', });
lyr_CabezasdebovinosMAGyP_8.set('fieldAliases', {'Bovinos': 'Bovinos', });
lyr_HectreasmandiocaINDEC_9.set('fieldAliases', {'Mandioca': 'Mandioca', });
lyr_HectreaslegumbresINDEC_10.set('fieldAliases', {'Legumbres': 'Legumbres', });
lyr_HectreasmazMAGyP_11.set('fieldAliases', {'Maiz': 'Maiz', });
lyr_HectreastabacoINDEC_12.set('fieldAliases', {'Tabaco': 'Tabaco', });
lyr_HectreasctricosINDEC_13.set('fieldAliases', {'citricos': 'citricos', });
lyr_HectreashortalizasINDEC_14.set('fieldAliases', {'Hortalizas': 'Hortalizas', });
lyr_HectreasdeteMAGyP_15.set('fieldAliases', {'Te': 'Te', });
lyr_HectreascaadeazucarINDEC_16.set('fieldAliases', {'Azucar': 'Azucar', });
lyr_HectreassojaMAGyP_17.set('fieldAliases', {'Soja': 'Soja', });
lyr_HectreasYerbaMateMAGyP_18.set('fieldAliases', {'Yerba-mate': 'Yerba-mate', });
lyr_Localidades_19.set('fieldAliases', {'Localidad': 'Localidad', 'Poblacion': 'Poblacion', });
lyr_BERMisiones_20.set('fieldAliases', {'Nº': 'Nº', 'Localidad': 'Localidad', 'Entidad': 'Entidad', 'Direccion': 'Direccion', 'Admin': 'Admin', });
lyr_BERMisiones_21.set('fieldAliases', {'Nº': 'Nº', 'Localidad': 'Localidad', 'Entidad': 'Entidad', 'Direccion': 'Direccion', 'Admin': 'Admin', });
lyr_DelegacinPosadas_22.set('fieldAliases', {'Delegacion': 'Delegacion', });
lyr_Departamentos_2.set('fieldImages', {'Depto': 'TextEdit', });
lyr_PEAINDEC_3.set('fieldImages', {'PEA': 'TextEdit', });
lyr_ViviendasruralesINDEC_4.set('fieldImages', {'Viv.Rur': 'TextEdit', });
lyr_CabezasdeporcinosMAGyP_5.set('fieldImages', {'Porcinos': 'TextEdit', });
lyr_CabezasdeovinosMAGyP_6.set('fieldImages', {'Ovinos': 'TextEdit', });
lyr_CabezasdecaprinosMAGyP_7.set('fieldImages', {'Caprinos': 'TextEdit', });
lyr_CabezasdebovinosMAGyP_8.set('fieldImages', {'Bovinos': 'TextEdit', });
lyr_HectreasmandiocaINDEC_9.set('fieldImages', {'Mandioca': 'TextEdit', });
lyr_HectreaslegumbresINDEC_10.set('fieldImages', {'Legumbres': 'TextEdit', });
lyr_HectreasmazMAGyP_11.set('fieldImages', {'Maiz': 'TextEdit', });
lyr_HectreastabacoINDEC_12.set('fieldImages', {'Tabaco': 'TextEdit', });
lyr_HectreasctricosINDEC_13.set('fieldImages', {'citricos': 'TextEdit', });
lyr_HectreashortalizasINDEC_14.set('fieldImages', {'Hortalizas': 'TextEdit', });
lyr_HectreasdeteMAGyP_15.set('fieldImages', {'Te': 'TextEdit', });
lyr_HectreascaadeazucarINDEC_16.set('fieldImages', {'Azucar': 'TextEdit', });
lyr_HectreassojaMAGyP_17.set('fieldImages', {'Soja': 'TextEdit', });
lyr_HectreasYerbaMateMAGyP_18.set('fieldImages', {'Yerba-mate': 'TextEdit', });
lyr_Localidades_19.set('fieldImages', {'Localidad': 'TextEdit', 'Poblacion': 'TextEdit', });
lyr_BERMisiones_20.set('fieldImages', {'Nº': 'TextEdit', 'Localidad': 'TextEdit', 'Entidad': 'TextEdit', 'Direccion': 'TextEdit', 'Admin': 'TextEdit', });
lyr_BERMisiones_21.set('fieldImages', {'Nº': 'TextEdit', 'Localidad': 'TextEdit', 'Entidad': 'TextEdit', 'Direccion': 'TextEdit', 'Admin': 'TextEdit', });
lyr_DelegacinPosadas_22.set('fieldImages', {'Delegacion': 'TextEdit', });
lyr_Departamentos_2.set('fieldLabels', {'Depto': 'inline label', });
lyr_PEAINDEC_3.set('fieldLabels', {'PEA': 'inline label', });
lyr_ViviendasruralesINDEC_4.set('fieldLabels', {'Viv.Rur': 'inline label', });
lyr_CabezasdeporcinosMAGyP_5.set('fieldLabels', {'Porcinos': 'inline label', });
lyr_CabezasdeovinosMAGyP_6.set('fieldLabels', {'Ovinos': 'inline label', });
lyr_CabezasdecaprinosMAGyP_7.set('fieldLabels', {'Caprinos': 'inline label', });
lyr_CabezasdebovinosMAGyP_8.set('fieldLabels', {'Bovinos': 'inline label', });
lyr_HectreasmandiocaINDEC_9.set('fieldLabels', {'Mandioca': 'inline label', });
lyr_HectreaslegumbresINDEC_10.set('fieldLabels', {'Legumbres': 'inline label', });
lyr_HectreasmazMAGyP_11.set('fieldLabels', {'Maiz': 'inline label', });
lyr_HectreastabacoINDEC_12.set('fieldLabels', {'Tabaco': 'inline label', });
lyr_HectreasctricosINDEC_13.set('fieldLabels', {'citricos': 'inline label', });
lyr_HectreashortalizasINDEC_14.set('fieldLabels', {'Hortalizas': 'inline label', });
lyr_HectreasdeteMAGyP_15.set('fieldLabels', {'Te': 'inline label', });
lyr_HectreascaadeazucarINDEC_16.set('fieldLabels', {'Azucar': 'inline label', });
lyr_HectreassojaMAGyP_17.set('fieldLabels', {'Soja': 'inline label', });
lyr_HectreasYerbaMateMAGyP_18.set('fieldLabels', {'Yerba-mate': 'inline label', });
lyr_Localidades_19.set('fieldLabels', {'Localidad': 'inline label', 'Poblacion': 'inline label', });
lyr_BERMisiones_20.set('fieldLabels', {'Nº': 'inline label', 'Localidad': 'inline label', 'Entidad': 'inline label', 'Direccion': 'inline label', 'Admin': 'inline label', });
lyr_BERMisiones_21.set('fieldLabels', {'Nº': 'inline label', 'Localidad': 'inline label', 'Entidad': 'inline label', 'Direccion': 'inline label', 'Admin': 'inline label', });
lyr_DelegacinPosadas_22.set('fieldLabels', {'Delegacion': 'inline label', });
lyr_DelegacinPosadas_22.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
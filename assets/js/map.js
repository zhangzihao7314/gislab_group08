// =========================
// 创建图层组
// =========================

const pollutionCAMS2022 = new ol.layer.Group({
    title: "Air Pollution – CAMS Dec 2022",
    layers: [
        new ol.layer.Image({ title: "NO₂ - CAMS Dec 2022", visible: false, source: new ol.source.ImageWMS({ url: 'https://www.gis-geoserver.polimi.it/geoserver/wms', params: { 'LAYERS': 'gisgeoserver_08:01.Portugal_CAMS_no2_2022_12' }, serverType: 'geoserver' }) }),
        new ol.layer.Image({ title: "PM2.5 - CAMS Dec 2022", visible: false, source: new ol.source.ImageWMS({ url: 'https://www.gis-geoserver.polimi.it/geoserver/wms', params: { 'LAYERS': 'gisgeoserver_08:02.Portugal_CAMS_pm2p5_2022_12' }, serverType: 'geoserver' }) }),
        new ol.layer.Image({ title: "PM10 - CAMS Dec 2022", visible: false, source: new ol.source.ImageWMS({ url: 'https://www.gis-geoserver.polimi.it/geoserver/wms', params: { 'LAYERS': 'gisgeoserver_08:03.Portugal_CAMS_pm10_2022_12' }, serverType: 'geoserver' }) })
    ]
});

const annualAvg2022 = new ol.layer.Group({
    title: "Annual Averages 2022",
    layers: [
        new ol.layer.Image({ title: "NO₂ - Annual Avg 2022", visible: false, source: new ol.source.ImageWMS({ url: 'https://www.gis-geoserver.polimi.it/geoserver/wms', params: { 'LAYERS': 'gisgeoserver_08:04.Portugal_average_no2_2022' }, serverType: 'geoserver' }) }),
        new ol.layer.Image({ title: "PM2.5 - Annual Avg 2022", visible: false, source: new ol.source.ImageWMS({ url: 'https://www.gis-geoserver.polimi.it/geoserver/wms', params: { 'LAYERS': 'gisgeoserver_08:05.Portugal_average_pm2p5_2022' }, serverType: 'geoserver' }) }),
        new ol.layer.Image({ title: "PM10 - Annual Avg 2022", visible: false, source: new ol.source.ImageWMS({ url: 'https://www.gis-geoserver.polimi.it/geoserver/wms', params: { 'LAYERS': 'gisgeoserver_08:06.Portugal_average_pm10_2022' }, serverType: 'geoserver' }) })
    ]
});

const map2020 = new ol.layer.Group({
    title: "2020 Maps",
    layers: [
        new ol.layer.Image({ title: "NO₂ - 2020 Map", visible: false, source: new ol.source.ImageWMS({ url: 'https://www.gis-geoserver.polimi.it/geoserver/wms', params: { 'LAYERS': 'gisgeoserver_08:07.Portugal_no2_concentration_map_2020' }, serverType: 'geoserver' }) }),
        new ol.layer.Image({ title: "PM2.5 - 2020 Map", visible: false, source: new ol.source.ImageWMS({ url: 'https://www.gis-geoserver.polimi.it/geoserver/wms', params: { 'LAYERS': 'gisgeoserver_08:08.Portugal_pm2p5_concentration_map_2020' }, serverType: 'geoserver' }) }),
        new ol.layer.Image({ title: "PM10 - 2020 Map", visible: false, source: new ol.source.ImageWMS({ url: 'https://www.gis-geoserver.polimi.it/geoserver/wms', params: { 'LAYERS': 'gisgeoserver_08:09.Portugal_pm10_concentration_map_2020' }, serverType: 'geoserver' }) })
    ]
});

const multiYearAAD = new ol.layer.Group({
    title: "Multi-year AAD Maps",
    layers: [
        new ol.layer.Image({ title: "NO₂ - AAD 2017–2021 Map", visible: false, source: new ol.source.ImageWMS({ url: 'https://www.gis-geoserver.polimi.it/geoserver/wms', params: { 'LAYERS': 'gisgeoserver_08:10.Portugal_no2_2017-2021_AAD_map_2022.tif' }, serverType: 'geoserver' }) }),
        new ol.layer.Image({ title: "PM2.5 – AAD 2017–2021 Map (2022)", visible: false, source: new ol.source.ImageWMS({ url: 'https://www.gis-geoserver.polimi.it/geoserver/wms', params: { 'LAYERS': 'gisgeoserver_08:12.Portugal_pm2p5_2017-2021_AAD_map_2022' }, serverType: 'geoserver' }) }),
        new ol.layer.Image({ title: "PM10 – AAD 2017–2021 Map (2022)", visible: false, source: new ol.source.ImageWMS({ url: 'https://www.gis-geoserver.polimi.it/geoserver/wms', params: { 'LAYERS': 'gisgeoserver_08:14.Portugal_pm10_2017-2021_AAD_map_2022' }, serverType: 'geoserver' }) })
    ]
});

const zonalStats = new ol.layer.Group({
    title: "Zonal Statistics",
    layers: [
        new ol.layer.Image({ title: "NO₂ – Zonal Stats 2013–2022", visible: false, source: new ol.source.ImageWMS({ url: 'https://www.gis-geoserver.polimi.it/geoserver/wms', params: { 'LAYERS': 'gisgeoserver_08:17.Portugal_no2_zozal_statistics_2013-2022' }, serverType: 'geoserver' }) }),
        new ol.layer.Image({ title: "PM2.5 – Zonal Stats 2013–2022", visible: false, source: new ol.source.ImageWMS({ url: 'https://www.gis-geoserver.polimi.it/geoserver/wms', params: { 'LAYERS': 'gisgeoserver_08:18.Portugal_pm2p5_zonal_statistics_2013-2022' }, serverType: 'geoserver' }) }),
        new ol.layer.Image({ title: "PM10 - Zonal Statistics 2013–2022", visible: false, source: new ol.source.ImageWMS({ url: 'https://www.gis-geoserver.polimi.it/geoserver/wms', params: { 'LAYERS': 'gisgeoserver_08:19.Portugal_pm10_zonal_statistics_2013-2022' }, serverType: 'geoserver' }) })
    ]
});

const bivariateMaps = new ol.layer.Group({
    title: "Bivariate Maps",
    layers: [
        new ol.layer.Image({ title: "NO₂ - 2020 Bivariate", visible: false, source: new ol.source.ImageWMS({ url: 'https://www.gis-geoserver.polimi.it/geoserver/wms', params: { 'LAYERS': 'gisgeoserver_08:20.Portugal_no2_2020_bivariate' }, serverType: 'geoserver' }) }),
        new ol.layer.Image({ title: "PM2.5 - 2020 Bivariate", visible: false, source: new ol.source.ImageWMS({ url: 'https://www.gis-geoserver.polimi.it/geoserver/wms', params: { 'LAYERS': 'gisgeoserver_08:21.Portugal_pm2p5_2020_bivariate' }, serverType: 'geoserver' }) }),
        new ol.layer.Image({ title: "PM10 - 2020 Bivariate", visible: false, source: new ol.source.ImageWMS({ url: 'https://www.gis-geoserver.polimi.it/geoserver/wms', params: { 'LAYERS': 'gisgeoserver_08:22.Portugal_pm10_2020_bivariat' }, serverType: 'geoserver' }) })
    ]
});

const landCover = new ol.layer.Group({
    title: "Land Cover",
    layers: [
        new ol.layer.Image({ title: "Land Cover – Reclassified 2022", visible: false, source: new ol.source.ImageWMS({ url: 'https://www.gis-geoserver.polimi.it/geoserver/wms', params: { 'LAYERS': 'gisgeoserver_08:16.Portugal_LC_reclassified_2022' }, serverType: 'geoserver' }) })
    ]
});

// 创建地图
let map = new ol.Map({
    target: 'map', // 与 HTML 中的 div#map 匹配
    view: new ol.View({
        center: ol.proj.fromLonLat([-8.2, 39.6]), // 葡萄牙地理中心，大约位置在里斯本和中部之间
        zoom: 7,// 合适的全国范围缩放级别
        //projection: 'EPSG:4326'
    }),
    layers: [
        new ol.layer.Tile({
            title: 'OpenStreetMap',
            type: 'base',
            source: new ol.source.OSM()
        }),
        pollutionCAMS2022,
        annualAvg2022,
        map2020,
        multiYearAAD,
        landCover,
        zonalStats,
        bivariateMaps
    ],

    controls: [
        new ol.control.Zoom(),
        new ol.control.ScaleLine(),
        new ol.control.FullScreen(),  // ✅ 加入全屏按钮
        new ol.control.MousePosition({
            coordinateFormat: ol.coordinate.createStringXY(4),
            projection: 'EPSG:4326',
            className: 'custom-mouse-position',
            placeholder: 'Move mouse on map'
        })
    ]

});


// 添加图层切换器（LayerSwitcher 控件）
let layerSwitcher = new ol.control.LayerSwitcher({
    tipLabel: 'Legend', // 鼠标悬停提示
    groupSelectStyle: 'children' // 控制样式
});
map.addControl(layerSwitcher);

// =========================
// 创建图层组
// =========================


// Base Layer Group
const baseLayerGroup = new ol.layer.Group({
    title: "Base Maps",
    layers: [
        new ol.layer.Tile({
            title: 'OpenStreetMap',
            type: 'base',
            visible: true,
            source: new ol.source.OSM()
        }),
        new ol.layer.Tile({
            title: 'OpenTopoMap',
            type: 'base',
            visible: false,
            source: new ol.source.XYZ({
                url: 'https://{a-c}.tile.opentopomap.org/{z}/{x}/{y}.png',
                attributions: '© OpenTopoMap (CC-BY-SA)'
            })
        }),
        new ol.layer.Tile({
            title: 'Google Hybrid',
            type: 'base',
            visible: false,
            source: new ol.source.XYZ({
                url: 'http://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}',
                attributions: 'Tiles © Google'
            })
        })
    ]
});

// Pollutant maps (NO2, PM2.5, PM10)-December 2022
const pollutionCAMS2022 = new ol.layer.Group({
    title: "Pollutant maps-December 2022",
    layers: [

        new ol.layer.Image({
            title: "PM10 - CAMS Dec 2022",
            visible: false,
            source: new ol.source.ImageWMS({
                url: 'https://www.gis-geoserver.polimi.it/geoserver/wms',
                params: { 'LAYERS': 'gisgeoserver_08:03.Portugal_CAMS_pm10_2022_12' },
                serverType: 'geoserver'
            })
        }),
        new ol.layer.Image({
            title: "PM2.5 - CAMS Dec 2022",
            visible: false,
            source: new ol.source.ImageWMS({
                url: 'https://www.gis-geoserver.polimi.it/geoserver/wms',
                params: { 'LAYERS': 'gisgeoserver_08:02.Portugal_CAMS_pm2p5_2022_12' },
                serverType: 'geoserver'
            })
        }),
        new ol.layer.Image({
            title: "NO₂ - CAMS Dec 2022",
            visible: false,
            source: new ol.source.ImageWMS({
                url: 'https://www.gis-geoserver.polimi.it/geoserver/wms',
                params: { 'LAYERS': 'gisgeoserver_08:01.Portugal_CAMS_no2_2022_12' },
                serverType: 'geoserver'
            })
        })
    ]
});

//Average pollutant maps (NO2, PM2.5, PM10) -2022
const annualAvg2022 = new ol.layer.Group({
    title: "Average pollutant maps-2022",
    layers: [
        new ol.layer.Image({
            title: "PM10 - Annual Avg 2022",
            visible: false,
            source: new ol.source.ImageWMS({
                url: 'https://www.gis-geoserver.polimi.it/geoserver/wms',
                params: { 'LAYERS': 'gisgeoserver_08:06.Portugal_average_pm10_2022' },
                serverType: 'geoserver'
            })
        }),
        new ol.layer.Image({
            title: "PM2.5 - Annual Avg 2022",
            visible: false,
            source: new ol.source.ImageWMS({
                url: 'https://www.gis-geoserver.polimi.it/geoserver/wms',
                params: { 'LAYERS': 'gisgeoserver_08:05.Portugal_average_pm2p5_2022' },
                serverType: 'geoserver'
            })
        }),
        new ol.layer.Image({
            title: "NO₂ - Annual Avg 2022",
            visible: false,
            source: new ol.source.ImageWMS({
                url: 'https://www.gis-geoserver.polimi.it/geoserver/wms',
                params: { 'LAYERS': 'gisgeoserver_08:04.Portugal_average_no2_2022' },
                serverType: 'geoserver'
            })
        }),
    ]
});

//Concentration pollutant maps (NO2, PM2.5, PM10)-2020
const map2020 = new ol.layer.Group({
    title: "Concentration pollutant maps-2020",
    layers: [
        new ol.layer.Image({
            title: "PM10 - 2020 Map",
            visible: false,
            source: new ol.source.ImageWMS({
                url: 'https://www.gis-geoserver.polimi.it/geoserver/wms',
                params: { 'LAYERS': 'gisgeoserver_08:09.Portugal_pm10_concentration_map_2020' },
                serverType: 'geoserver'
            })
        }),
        new ol.layer.Image({
            title: "PM2.5 - 2020 Map",
            visible: false,
            source: new ol.source.ImageWMS({
                url: 'https://www.gis-geoserver.polimi.it/geoserver/wms',
                params: { 'LAYERS': 'gisgeoserver_08:08.Portugal_pm2p5_concentration_map_2020' },
                serverType: 'geoserver'
            })
        }),
        new ol.layer.Image({
            title: "NO₂ - 2020 Map",
            visible: false,
            source: new ol.source.ImageWMS({
                url: 'https://www.gis-geoserver.polimi.it/geoserver/wms',
                params: { 'LAYERS': 'gisgeoserver_08:07.Portugal_no2_concentration_map_2020' },
                serverType: 'geoserver'
            })
        })
    ]
});

//NO2/PM2.5/PM10 2022 Annual Average Dierence from the 2017-2021 mean
const multiYearAAD = new ol.layer.Group({
    title: "Annual Average-2022 Mean-2017-2021 ",
    layers: [
        new ol.layer.Image({
            title: "PM10 – AAD 2017–2021 Map (2022)",
            visible: false,
            source: new ol.source.ImageWMS({
                url: 'https://www.gis-geoserver.polimi.it/geoserver/wms',
                params: { 'LAYERS': 'gisgeoserver_08:14.Portugal_pm10_2017-2021_AAD_map_2022' },
                serverType: 'geoserver'
            })
        }),
        new ol.layer.Image({
            title: "PM2.5 – AAD 2017–2021 Map (2022)",
            visible: false,
            source: new ol.source.ImageWMS({
                url: 'https://www.gis-geoserver.polimi.it/geoserver/wms',
                params: { 'LAYERS': 'gisgeoserver_08:12.Portugal_pm2p5_2017-2021_AAD_map_2022' },
                serverType: 'geoserver'
            })
        }),
        new ol.layer.Image({
            title: "NO₂ - AAD 2017–2021 Map",
            visible: false,
            source: new ol.source.ImageWMS({
                url: 'https://www.gis-geoserver.polimi.it/geoserver/wms',
                params: { 'LAYERS': 'gisgeoserver_08:10.Portugal_no2_2017-2021_AAD_map_2022.tif' },
                serverType: 'geoserver'
            })
        })

    ]
});

//ReclassiFFied Land Cover-2022
const landCover = new ol.layer.Group({
    title: "ReclassiFFied Land Cover-2022",
    layers: [
        new ol.layer.Image({
            title: "Land Cover – Reclassified 2022",
            visible: false,
            source: new ol.source.ImageWMS({
                url: 'https://www.gis-geoserver.polimi.it/geoserver/wms',
                params: { 'LAYERS': 'gisgeoserver_08:16.Portugal_LC_reclassiffied_2022' },
                serverType: 'geoserver'
            })
        })
    ]
});

//Zonal Statistics-2013-2022
const zonalStats = new ol.layer.Group({
    title: "Zonal Statistics-2013-2022",
    layers: [
        new ol.layer.Image({ title: "PM10 - Zonal Statistics 2013–2022", visible: false, source: new ol.source.ImageWMS({ url: 'https://www.gis-geoserver.polimi.it/geoserver/wms', params: { 'LAYERS': 'gisgeoserver_08:19.Portugal_pm10_zonal_statistics_2013-2022' }, serverType: 'geoserver' }) }),
        new ol.layer.Image({ title: "PM2.5 – Zonal Stats 2013–2022", visible: false, source: new ol.source.ImageWMS({ url: 'https://www.gis-geoserver.polimi.it/geoserver/wms', params: { 'LAYERS': 'gisgeoserver_08:18.Portugal_pm2p5_zonal_statistics_2013-2022' }, serverType: 'geoserver' }) }),
        new ol.layer.Image({ title: "NO₂ – Zonal Stats 2013–2022", visible: false, source: new ol.source.ImageWMS({ url: 'https://www.gis-geoserver.polimi.it/geoserver/wms', params: { 'LAYERS': 'gisgeoserver_08:17.Portugal_no2_zozal_statistics_2013-2022' }, serverType: 'geoserver' }) })
    ]
});

//Bivariate Maps-2020
const bivariateMaps = new ol.layer.Group({
    title: "Bivariate Maps-2020",
    layers: [
        new ol.layer.Image({
            title: "PM10 - 2020 Bivariate",
            visible: false,
            source: new ol.source.ImageWMS({
                url: 'https://www.gis-geoserver.polimi.it/geoserver/wms',
                params: { 'LAYERS': 'gisgeoserver_08:22.Portugal_pm10_2020_bivariat' },
                serverType: 'geoserver'
            })
        }),
        new ol.layer.Image({
            title: "PM2.5 - 2020 Bivariate",
            visible: false,
            source: new ol.source.ImageWMS({
                url: 'https://www.gis-geoserver.polimi.it/geoserver/wms',
                params: { 'LAYERS': 'gisgeoserver_08:21.Portugal_pm2p5_2020_bivariate' },
                serverType: 'geoserver'
            })
        }),
        new ol.layer.Image({
            title: "NO₂ - 2020 Bivariate",
            visible: false,
            source: new ol.source.ImageWMS({
                url: 'https://www.gis-geoserver.polimi.it/geoserver/wms',
                params: { 'LAYERS': 'gisgeoserver_08:20.Portugal_no2_2020_bivariate' },
                serverType: 'geoserver'
            })
        })
    ]
});

//chart-2020
const portugalChart = new ol.layer.Group({
    title: "Portugal Chart-2020",
    layers: [
        new ol.layer.Image({
            title: "Portugal_pm10_2020_chart",
            visible: false,
            source: new ol.source.ImageWMS({
                url: 'https://www.gis-geoserver.polimi.it/geoserver/wms',
                params: { 'LAYERS': 'gisgeoserver_08:25.Portugal_pm10_2020_chart' },
                serverType: 'geoserver'
            })
        }),
        new ol.layer.Image({
            title: "Portugal_pm2p5_2020_chart",
            visible: false,
            source: new ol.source.ImageWMS({
                url: 'https://www.gis-geoserver.polimi.it/geoserver/wms',
                params: { 'LAYERS': 'gisgeoserver_08:24.Portugal_pm2p5_2020_chart' },
                serverType: 'geoserver'
            })
        }),
        new ol.layer.Image({
            title: "Portugal_no2_2020_chart",
            visible: false,
            source: new ol.source.ImageWMS({
                url: 'https://www.gis-geoserver.polimi.it/geoserver/wms',
                params: { 'LAYERS': 'gisgeoserver_08:23.Portugal_no2_2020_chart' },
                serverType: 'geoserver'
            })
        })
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
        baseLayerGroup,
        portugalChart,
        bivariateMaps,
        zonalStats,
        landCover,
        multiYearAAD,
        map2020,
        annualAvg2022,
        pollutionCAMS2022
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

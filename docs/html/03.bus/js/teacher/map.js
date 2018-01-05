var map = new AMap.Map('mapContainer', {
    zoom: 15
});

AMapUI.load(['ui/misc/PathSimplifier', 'lib/$'], function(PathSimplifier, $) {

    var pathSimplifierIns = new PathSimplifier({
        zIndex: 100,
        //autoSetFitView:false,
        map: map, //所属的地图实例
        getPath: function(pathData, pathIndex) {
            return pathData.path;
        },
        renderOptions: {
            renderAllPointsIfNumberBelow: 8 //绘制路线节点，如不需要可设置为-1
        }
    });
  
    window.pathSimplifierIns = pathSimplifierIns;

    //设置数据
    pathSimplifierIns.setData([{
        name: '路线0',
        // 从json获取数据渲染地图
        path: json.am[1].path
    }]);

    //对第一条线路（即索引 0）创建一个巡航器
    var navg1 = pathSimplifierIns.createPathNavigator(0, {
        loop: true, //循环播放
        speed: 500 //巡航速度，单位千米/小时
    });
  
    navg1.start();
});
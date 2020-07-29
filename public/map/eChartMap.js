/**
 * 正文编辑动态变化数量
 * 协议信息管理中曾使用过 目前没有交易被用到
 * 动态添加编辑正文指令
 */
vx.module('ibsapp').directive('eChartMap', ['$timeout', '$compile', "$parse",
    function ($timeout, $compile, $parse) {
        return {
            restrict: 'A',
            replace: true,
            link: function (scope, element, attrs) {
                var timer = null
                var provinces = {
                    '上海': 'shanghai',
                    '河北': 'hebei',
                    '山西': 'shanxi',
                    '内蒙古': 'neimenggu',
                    '辽宁': 'liaoning',
                    '吉林': 'jilin',
                    '黑龙江': 'heilongjiang',
                    '江苏': 'jiangsu',
                    '浙江': 'zhejiang',
                    '安徽': 'anhui',
                    '福建': 'fujian',
                    '江西': 'jiangxi',
                    '山东': 'shandong',
                    '河南': 'henan',
                    '湖北': 'hubei',
                    '湖南': 'hunan',
                    '广东': 'guangdong',
                    '广西': 'guangxi',
                    '海南': 'hainan',
                    '四川': 'sichuan',
                    '贵州': 'guizhou',
                    '云南': 'yunnan',
                    '西藏': 'xizang',
                    '陕西': 'shanxi1',
                    '甘肃': 'gansu',
                    '青海': 'qinghai',
                    '宁夏': 'ningxia',
                    '新疆': 'xinjiang',
                    '北京': 'beijing',
                    '天津': 'tianjin',
                    '重庆': 'chongqing',
                    '香港': 'xianggang',
                    '澳门': 'aomen'
                }
                //初始化圖表
                var myChart = echarts.init(element[0]);
                myChart.on('click', function (resdata) {
                    //console.log(resdata);
                    var secondLevelData = resdata.data;
                    // 地图下钻事件，显示返回按钮
                    // scope.VolumeOfBusiness = null
                    scope.downProviceName = resdata.name
                    scope.isLower = true
                    if (resdata.componentSubType == "scatter") {
                        scope.isscatter = true
                        scope.clickBankName = secondLevelData.name
                        if (secondLevelData.obj) {
                            scope.isDown = false
                            scope.isDownVolumeDeptSeq = secondLevelData.obj.DeptSeq
                            scope.allVolumeGetData(false, secondLevelData.obj.DeptSeq)
                            if (JSON.stringify(scope.dataDate) !== '{}'){
                                scope.VolumeOfBusiness = secondLevelData.obj.value;
                            }
                        } else {
                            // 下钻分行没有数据的情况
                            scope.centerBottom.series[0].data = []
                            scope.centerBottom.xAxis.data = []
                        }
                    } else {
                        // 添加start=====
                        // x轴数据
                        //scope.isDown = false
                        if(secondLevelData && JSON.stringify(scope.dataDate) !== '{}'){
                            scope.VolumeOfBusiness = secondLevelData.value;
                        }
                        var bankListXData = []
                        scope.bankListData.forEach(function (item) {
                            if (resdata.name == item.Province) {
                            //     item.List.forEach(function (item1) {
                            //         console.log(item1);
                            //         bankListXData.push(item1.name)
                            // })
                                scope.centerBottom.series[0].data = item.List.sort(function(a,b){
                                    return b.value - a.value
                                })
                                scope.centerBottom.series[0].data.forEach(function (item1) {
                                    //console.log(item1);
                                    bankListXData.push(item1.name)
                                })
                                scope.centerBottom.xAxis.data = bankListXData
                            }
                        })
                        // scope.centerBottom.series[0].data.forEach(function(item){
                        //     scope.VolumeOfBusiness += item.value;
                        // })                       
                        clearTimeout(timer)
                        timer = $timeout(function () {
                            var name = resdata.name;
                            var mapCode = provinces[name]; //地区的json数据
                            if (!mapCode) return
                            scope.isDownToProvice = false
                            scope.downProvice = resdata.name
                            scope.initMap(mapCode, name).then(function (res) {
                                myChart.setOption(res)
                            })
                        }, 500)
                    }
                })
                //監控option數據變化
                scope.$watch(
                    attrs["eOptionMap"],
                    function () {
                        var option = scope.$eval(attrs.eOptionMap);
                        if (angular.isObject(option)) {
                            //繪製圖表
                            // console.log('mapoption', option);
                            myChart.setOption(option, true);
                        }
                    },
                    true
                );
                scope.getDom = function () {
                    return {
                        height: element[0].offsetHeight,
                        width: element[0].offsetWidth
                    };
                };
                //監控圖表寬高變化，響應式
                scope.$watch(
                    scope.getDom,
                    function () {
                        $timeout(
                            function () {
                                myChart.resize();// resize echarts圖表
                            }
                        )
                    },
                    true
                );
            }
        };
    }]);
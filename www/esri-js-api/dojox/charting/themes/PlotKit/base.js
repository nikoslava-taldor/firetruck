//>>built
define("dojox/charting/themes/PlotKit/base",["dojo/_base/lang","dojo/_base/Color","../../Theme","../common"],function(a,e,c,d){a=a.getObject("PlotKit",!0,d);a.base=new c({chart:{stroke:null,fill:"yellow"},plotarea:{stroke:null,fill:"yellow"},axis:{stroke:{color:"#fff",width:1},line:{color:"#fff",width:0.5},majorTick:{color:"#fff",width:0.5,length:6},minorTick:{color:"#fff",width:0.5,length:3},tick:{font:"normal normal normal 7pt Helvetica,Arial,sans-serif",fontColor:"#999"}},series:{stroke:{width:2.5,
color:"#fff"},fill:"#666",font:"normal normal normal 7.5pt Helvetica,Arial,sans-serif",fontColor:"#666"},marker:{stroke:{width:2},fill:"#333",font:"normal normal normal 7pt Helvetica,Arial,sans-serif",fontColor:"#666"},colors:["red","green","blue"]});a.base.next=function(a,d,f){var b=c.prototype.next.apply(this,arguments);"line"==a?(b.marker.outline={width:2,color:"#fff"},b.series.stroke.width=3.5,b.marker.stroke.width=2):"candlestick"==a?b.series.stroke.width=1:b.series.stroke.color&&b.series.stroke.color.toString()==
(new e(this.colors[(this._current-1)%this.colors.length])).toString()&&(b.series.stroke.color="#fff");return b};return a});
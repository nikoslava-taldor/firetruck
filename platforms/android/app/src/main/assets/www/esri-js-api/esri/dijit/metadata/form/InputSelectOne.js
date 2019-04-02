// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.13/esri/copyright.txt for details.
//>>built
require({cache:{"url:esri/dijit/metadata/form/templates/InputSelectOne.html":'\x3cdiv class\x3d"gxeInput gxeInputSelectOne"\x3e\r\n  \x3cselect class\x3d"gxeEditOnly" data-dojo-attach-point\x3d"focusNode"\r\n  \tdata-dojo-attach-event\x3d"onchange: _onChange"\x3e\x3c/select\x3e\r\n  \x3cinput class\x3d"gxeEditOnly" type\x3d"text" style\x3d"display:none;"\r\n  \tdata-dojo-attach-point\x3d"otherNode"\r\n  \tdata-dojo-attach-event\x3d"onchange: _onOtherChange, onkeyup: _onOtherKeyup"/\x3e\r\n  \x3cdiv class\x3d"gxeViewOnlyText gxeViewOnly" data-dojo-attach-point\x3d"viewOnlyNode"\x3e\x3c/div\x3e\r\n  \x3cdiv data-dojo-attach-point\x3d"containerNode" style\x3d"display:none;"\x3e\x3c/div\x3e\r\n\x3c/div\x3e'}});
define("esri/dijit/metadata/form/InputSelectOne","dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/dom-construct dojo/dom-style dojo/has ../base/InputBase ../base/OptionsMixin dojo/text!./templates/InputSelectOne.html ../../../kernel".split(" "),function(d,f,g,h,c,k,l,m,n,p){d=d([l,m],{_wasValueSet:!1,templateString:n,postCreate:function(){this.inherited(arguments)},startup:function(){this._started||(this.inherited(arguments),this.initializeOptions())},connectXNode:function(a,b){this.inherited(arguments);
var e=a.value;(!b||a.fixed)&&"undefined"!==typeof e&&null!==e&&this.setInputValue(e)},filterOptions:function(a){if(!this.parentXNode||!this.parentXNode.optionsFilter)return a;var b=this.parentXNode.optionsFilter.split(",");return g.filter(a,function(a){return g.some(b,function(b){return a.value===b})})},getDisplayValue:function(){if(this.parentXNode&&(this.parentXNode.gxeDocument&&this.parentXNode.gxeDocument.isViewOnly)&&!this._wasValueSet)return null;var a=this.focusNode,b=this._getSelectedOption();
return b&&!b.xtnIsOther?a.options[a.selectedIndex].label:b&&b.xtnIsOther?this.otherNode.value:null},getInputValue:function(){if(this.parentXNode&&(this.parentXNode.gxeDocument&&this.parentXNode.gxeDocument.isViewOnly)&&!this._wasValueSet)return null;var a=this.focusNode,b=this._getSelectedOption();return b&&!b.xtnIsOther?a.options[a.selectedIndex].value:b&&b.xtnIsOther?this.otherNode.value:null},initializeOptions:function(){this.fetchOptionWidgets().then(f.hitch(this,function(a){a=this.filterOptions(a);
this.populateOptions(a)}),f.hitch(this,function(a){console.error(a)}),f.hitch(this,function(a){}))},_getSelectedOption:function(){var a=this.focusNode.selectedIndex;return-1!==a?this.focusNode.options[a]:null},_onChange:function(a){(a=this._getSelectedOption())?a.xtnIsOther?c.set(this.otherNode,"display",""):c.set(this.otherNode,"display","none"):c.set(this.otherNode,"display","none");this.emitInteractionOccurred()},_onOtherChange:function(a){this.emitInteractionOccurred()},_onOtherKeyup:function(a){this.emitInteractionOccurred()},
populateOptions:function(a){var b=this.focusNode.options,e=!1;g.forEach(a,function(a){var c=null,d=!1,f=!1;!e&&a.selected&&(e=d=f=!0);try{c=new Option(a.label,a.value,d,f),a.isOther&&(c.xtnIsOther=!0),b.add(c)}catch(g){console.error(g)}});var c=this.containerNode;this.destroyDescendants(!1);setTimeout(function(){h.destroy(c)},5E3)},setInputValue:function(a){this._wasValueSet=!0;"undefined"===typeof a&&(a=null);var b=-1,e=-1;g.some(this.focusNode.options,function(c,d){if(c.xtnIsOther)e=d;else if(c.value===
a)return b=d,!0});-1===b&&-1!==e?(this.focusNode.selectedIndex=e,this.otherNode.value=a,c.set(this.otherNode,"display","")):(-1!==b&&(this.focusNode.selectedIndex=b),c.set(this.otherNode,"display","none"));this.applyViewOnly()}});k("extend-esri")&&f.setObject("dijit.metadata.form.InputSelectOne",d,p);return d});
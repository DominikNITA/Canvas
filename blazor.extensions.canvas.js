!function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(r,i,function(e){return t[e]}.bind(null,i));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const r=n(1);var i;!function(t){const e="BlazorExtensions",n={Canvas2d:new r.ContextManager("2d"),WebGL:new r.ContextManager("webgl")};t.initialize=function(){"undefined"==typeof window||window[e]?window[e]=Object.assign({},window[e],n):window[e]=Object.assign({},n)}}(i||(i={})),i.initialize()},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.ContextManager=class{constructor(t){if(this.contexts=new Map,this.webGLObject=new Array,this.webGLContext=!1,this.webGLTypes=[WebGLBuffer,WebGLShader,WebGLProgram,WebGLFramebuffer,WebGLRenderbuffer,WebGLTexture,WebGLUniformLocation],this.add=((t,e)=>{if(!t)throw new Error("Invalid canvas.");if(!this.contexts.get(t.id)){var n;if(!(n=e?t.getContext(this.contextName,e):t.getContext(this.contextName)))throw new Error("Invalid context.");this.contexts.set(t.id,n)}}),this.remove=(t=>{this.contexts.delete(t.id)}),this.setProperty=((t,e,n)=>{const r=this.getContext(t);this.setPropertyWithContext(r,e,n)}),this.getProperty=((t,e)=>{const n=this.getContext(t);return this.serialize(n[e])}),this.call=((t,e,n)=>{const r=this.getContext(t);return this.callWithContext(r,e,n)}),this.callBatch=((t,e)=>{const n=this.getContext(t);for(let t=0;t<e.length;t++){let r=e[t].slice(2);e[t][1]?this.callWithContext(n,e[t][0],r):this.setPropertyWithContext(n,e[t][0],Array.isArray(r)&&r.length>0?r[0]:null)}}),this.callWithContext=((t,e,n)=>this.serialize(this.prototypes[e].apply(t,void 0!=n?n.map(t=>this.deserialize(e,t)):[]))),this.setPropertyWithContext=((t,e,n)=>{t[e]=this.deserialize(e,n)}),this.getContext=(t=>{if(!t)throw new Error("Invalid canvas.");const e=this.contexts.get(t.id);if(!e)throw new Error("Invalid context.");return e}),this.deserialize=((t,e)=>this.webGLContext?e.hasOwnProperty("webGLType")&&e.hasOwnProperty("id")?this.webGLObject[e.id]:Array.isArray(e)&&!t.endsWith("v")?Int8Array.of(...e):e:e),this.serialize=(t=>{if(!this.webGLContext)return t;const e=this.webGLTypes.find(e=>t instanceof e);if(void 0!=e){const n=this.webGLObject.length;return this.webGLObject.push(t),{webGLType:e.name,id:n}}return t}),this.contextName=t,"2d"===t)this.prototypes=CanvasRenderingContext2D.prototype;else{if("webgl"!==t&&"experimental-webgl"!==t)throw new Error(`Invalid context name: ${t}`);this.prototypes=WebGLRenderingContext.prototype,this.webGLContext=!0}}}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL0luaXRpYWxpemVDYW52YXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NhbnZhc0NvbnRleHRNYW5hZ2VyLnRzIl0sIm5hbWVzIjpbImluc3RhbGxlZE1vZHVsZXMiLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwibW9kdWxlSWQiLCJleHBvcnRzIiwibW9kdWxlIiwiaSIsImwiLCJtb2R1bGVzIiwiY2FsbCIsIm0iLCJjIiwiZCIsIm5hbWUiLCJnZXR0ZXIiLCJvIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJlbnVtZXJhYmxlIiwiZ2V0IiwiciIsIlN5bWJvbCIsInRvU3RyaW5nVGFnIiwidmFsdWUiLCJ0IiwibW9kZSIsIl9fZXNNb2R1bGUiLCJucyIsImNyZWF0ZSIsImtleSIsImJpbmQiLCJuIiwib2JqZWN0IiwicHJvcGVydHkiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsInAiLCJzIiwiQ2FudmFzQ29udGV4dE1hbmFnZXJfMSIsIkNhbnZhcyIsImJsYXpvckV4dGVuc2lvbnMiLCJleHRlbnNpb25PYmplY3QiLCJDYW52YXMyZCIsIkNvbnRleHRNYW5hZ2VyIiwiV2ViR0wiLCJpbml0aWFsaXplIiwid2luZG93IiwiYXNzaWduIiwiW29iamVjdCBPYmplY3RdIiwiY29udGV4dE5hbWUiLCJ0aGlzIiwiY29udGV4dHMiLCJNYXAiLCJ3ZWJHTE9iamVjdCIsIkFycmF5Iiwid2ViR0xDb250ZXh0Iiwid2ViR0xUeXBlcyIsIldlYkdMQnVmZmVyIiwiV2ViR0xTaGFkZXIiLCJXZWJHTFByb2dyYW0iLCJXZWJHTEZyYW1lYnVmZmVyIiwiV2ViR0xSZW5kZXJidWZmZXIiLCJXZWJHTFRleHR1cmUiLCJXZWJHTFVuaWZvcm1Mb2NhdGlvbiIsImFkZCIsImNhbnZhcyIsInBhcmFtZXRlcnMiLCJFcnJvciIsImlkIiwiY29udGV4dCIsImdldENvbnRleHQiLCJzZXQiLCJyZW1vdmUiLCJkZWxldGUiLCJzZXRQcm9wZXJ0eSIsInNldFByb3BlcnR5V2l0aENvbnRleHQiLCJnZXRQcm9wZXJ0eSIsInNlcmlhbGl6ZSIsIm1ldGhvZCIsImFyZ3MiLCJjYWxsV2l0aENvbnRleHQiLCJjYWxsQmF0Y2giLCJiYXRjaGVkQ2FsbHMiLCJsZW5ndGgiLCJwYXJhbXMiLCJzbGljZSIsImlzQXJyYXkiLCJwcm90b3R5cGVzIiwiYXBwbHkiLCJ1bmRlZmluZWQiLCJtYXAiLCJkZXNlcmlhbGl6ZSIsImVuZHNXaXRoIiwiSW50OEFycmF5Iiwib2YiLCJ0eXBlIiwiZmluZCIsInB1c2giLCJ3ZWJHTFR5cGUiLCJDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQiLCJXZWJHTFJlbmRlcmluZ0NvbnRleHQiXSwibWFwcGluZ3MiOiJhQUNBLElBQUFBLEtBR0EsU0FBQUMsRUFBQUMsR0FHQSxHQUFBRixFQUFBRSxHQUNBLE9BQUFGLEVBQUFFLEdBQUFDLFFBR0EsSUFBQUMsRUFBQUosRUFBQUUsSUFDQUcsRUFBQUgsRUFDQUksR0FBQSxFQUNBSCxZQVVBLE9BTkFJLEVBQUFMLEdBQUFNLEtBQUFKLEVBQUFELFFBQUFDLElBQUFELFFBQUFGLEdBR0FHLEVBQUFFLEdBQUEsRUFHQUYsRUFBQUQsUUFLQUYsRUFBQVEsRUFBQUYsRUFHQU4sRUFBQVMsRUFBQVYsRUFHQUMsRUFBQVUsRUFBQSxTQUFBUixFQUFBUyxFQUFBQyxHQUNBWixFQUFBYSxFQUFBWCxFQUFBUyxJQUNBRyxPQUFBQyxlQUFBYixFQUFBUyxHQUEwQ0ssWUFBQSxFQUFBQyxJQUFBTCxLQUsxQ1osRUFBQWtCLEVBQUEsU0FBQWhCLEdBQ0Esb0JBQUFpQixlQUFBQyxhQUNBTixPQUFBQyxlQUFBYixFQUFBaUIsT0FBQUMsYUFBd0RDLE1BQUEsV0FFeERQLE9BQUFDLGVBQUFiLEVBQUEsY0FBaURtQixPQUFBLEtBUWpEckIsRUFBQXNCLEVBQUEsU0FBQUQsRUFBQUUsR0FFQSxHQURBLEVBQUFBLElBQUFGLEVBQUFyQixFQUFBcUIsSUFD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SCxFQUFLbEYsS0FDaEJ1RCxHQUFJQSxHQUdOLE9BQU9wQyxJQXBHVGtCLEtBQUtELFlBQWNBLEVBQ0MsT0FBaEJBLEVBQ0ZDLEtBQUtxQyxXQUFhWSx5QkFBeUJqRSxjQUN4QyxJQUFvQixVQUFoQmUsR0FBMkMsdUJBQWhCQSxFQUlsQyxNQUFNLElBQUlrQiwrQkFBK0JsQixLQUh6Q0MsS0FBS3FDLFdBQWFhLHNCQUFzQmxFLFVBQ3hDZ0IsS0FBS0ssY0FBZSIsImZpbGUiOiJibGF6b3IuZXh0ZW5zaW9ucy5jYW52YXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJpbXBvcnQgeyBDb250ZXh0TWFuYWdlciB9IGZyb20gJy4vQ2FudmFzQ29udGV4dE1hbmFnZXInO1xuXG5uYW1lc3BhY2UgQ2FudmFzIHtcbiAgY29uc3QgYmxhem9yRXh0ZW5zaW9uczogc3RyaW5nID0gJ0JsYXpvckV4dGVuc2lvbnMnO1xuICAvLyBkZWZpbmUgd2hhdCB0aGlzIGV4dGVuc2lvbiBhZGRzIHRvIHRoZSB3aW5kb3cgb2JqZWN0IGluc2lkZSBCbGF6b3JFeHRlbnNpb25zXG4gIGNvbnN0IGV4dGVuc2lvbk9iamVjdCA9IHtcbiAgICBDYW52YXMyZDogbmV3IENvbnRleHRNYW5hZ2VyKFwiMmRcIiksXG4gICAgV2ViR0w6IG5ldyBDb250ZXh0TWFuYWdlcihcIndlYmdsXCIpXG4gIH07XG5cbiAgZXhwb3J0IGZ1bmN0aW9uIGluaXRpYWxpemUoKTogdm9pZCB7XG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmICF3aW5kb3dbYmxhem9yRXh0ZW5zaW9uc10pIHtcbiAgICAgIC8vIHdoZW4gdGhlIGxpYnJhcnkgaXMgbG9hZGVkIGluIGEgYnJvd3NlciB2aWEgYSA8c2NyaXB0PiBlbGVtZW50LCBtYWtlIHRoZVxuICAgICAgLy8gZm9sbG93aW5nIEFQSXMgYXZhaWxhYmxlIGluIGdsb2JhbCBzY29wZSBmb3IgaW52b2NhdGlvbiBmcm9tIEpTXG4gICAgICB3aW5kb3dbYmxhem9yRXh0ZW5zaW9uc10gPSB7XG4gICAgICAgIC4uLmV4dGVuc2lvbk9iamVjdFxuICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgd2luZG93W2JsYXpvckV4dGVuc2lvbnNdID0ge1xuICAgICAgICAuLi53aW5kb3dbYmxhem9yRXh0ZW5zaW9uc10sXG4gICAgICAgIC4uLmV4dGVuc2lvbk9iamVjdFxuICAgICAgfTtcbiAgICB9XG4gIH1cbn1cblxuQ2FudmFzLmluaXRpYWxpemUoKTtcbiIsImV4cG9ydCBjbGFzcyBDb250ZXh0TWFuYWdlciB7XG4gIHByaXZhdGUgcmVhZG9ubHkgY29udGV4dHMgPSBuZXcgTWFwPHN0cmluZywgYW55PigpO1xuICBwcml2YXRlIHJlYWRvbmx5IHdlYkdMT2JqZWN0ID0gbmV3IEFycmF5PGFueT4oKTtcbiAgcHJpdmF0ZSByZWFkb25seSBjb250ZXh0TmFtZTogc3RyaW5nO1xuICBwcml2YXRlIHdlYkdMQ29udGV4dCA9IGZhbHNlO1xuICBwcml2YXRlIHJlYWRvbmx5IHByb3RvdHlwZXM6IGFueTtcbiAgcHJpdmF0ZSByZWFkb25seSB3ZWJHTFR5cGVzID0gW1xuICAgIFdlYkdMQnVmZmVyLCBXZWJHTFNoYWRlciwgV2ViR0xQcm9ncmFtLCBXZWJHTEZyYW1lYnVmZmVyLCBXZWJHTFJlbmRlcmJ1ZmZlciwgV2ViR0xUZXh0dXJlLCBXZWJHTFVuaWZvcm1Mb2NhdGlvblxuICBdO1xuXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcihjb250ZXh0TmFtZTogc3RyaW5nKSB7XG4gICAgdGhpcy5jb250ZXh0TmFtZSA9IGNvbnRleHROYW1lO1xuICAgIGlmIChjb250ZXh0TmFtZSA9PT0gXCIyZFwiKVxuICAgICAgdGhpcy5wcm90b3R5cGVzID0gQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELnByb3RvdHlwZTtcbiAgICBlbHNlIGlmIChjb250ZXh0TmFtZSA9PT0gXCJ3ZWJnbFwiIHx8IGNvbnRleHROYW1lID09PSBcImV4cGVyaW1lbnRhbC13ZWJnbFwiKSB7XG4gICAgICB0aGlzLnByb3RvdHlwZXMgPSBXZWJHTFJlbmRlcmluZ0NvbnRleHQucHJvdG90eXBlO1xuICAgICAgdGhpcy53ZWJHTENvbnRleHQgPSB0cnVlO1xuICAgIH0gZWxzZVxuICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIGNvbnRleHQgbmFtZTogJHtjb250ZXh0TmFtZX1gKTtcbiAgfVxuXG4gIHB1YmxpYyBhZGQgPSAoY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudCwgcGFyYW1ldGVyczogYW55KSA9PiB7XG4gICAgaWYgKCFjYW52YXMpIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBjYW52YXMuJyk7XG4gICAgaWYgKHRoaXMuY29udGV4dHMuZ2V0KGNhbnZhcy5pZCkpIHJldHVybjtcblxuICAgIHZhciBjb250ZXh0O1xuICAgIGlmIChwYXJhbWV0ZXJzKVxuICAgICAgY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KHRoaXMuY29udGV4dE5hbWUsIHBhcmFtZXRlcnMpO1xuICAgIGVsc2VcbiAgICAgIGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dCh0aGlzLmNvbnRleHROYW1lKTtcblxuICAgIGlmICghY29udGV4dCkgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIGNvbnRleHQuJyk7XG5cbiAgICB0aGlzLmNvbnRleHRzLnNldChjYW52YXMuaWQsIGNvbnRleHQpO1xuICB9XG5cbiAgcHVibGljIHJlbW92ZSA9IChjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50KSA9PiB7XG4gICAgdGhpcy5jb250ZXh0cy5kZWxldGUoY2FudmFzLmlkKTtcbiAgfVxuXG4gIHB1YmxpYyBzZXRQcm9wZXJ0eSA9IChjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50LCBwcm9wZXJ0eTogc3RyaW5nLCB2YWx1ZTogYW55KSA9PiB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dChjYW52YXMpO1xuICAgIHRoaXMuc2V0UHJvcGVydHlXaXRoQ29udGV4dChjb250ZXh0LCBwcm9wZXJ0eSwgdmFsdWUpO1xuICB9XG5cbiAgcHVibGljIGdldFByb3BlcnR5ID0gKGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQsIHByb3BlcnR5OiBzdHJpbmcpID0+IHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KGNhbnZhcyk7XG4gICAgcmV0dXJuIHRoaXMuc2VyaWFsaXplKGNvbnRleHRbcHJvcGVydHldKTtcbiAgfVxuXG4gIHB1YmxpYyBjYWxsID0gKGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQsIG1ldGhvZDogc3RyaW5nLCBhcmdzOiBhbnkpID0+IHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KGNhbnZhcyk7XG4gICAgcmV0dXJuIHRoaXMuY2FsbFdpdGhDb250ZXh0KGNvbnRleHQsIG1ldGhvZCwgYXJncyk7XG4gIH1cblxuICBwdWJsaWMgY2FsbEJhdGNoID0gKGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQsIGJhdGNoZWRDYWxsczogYW55W11bXSkgPT4ge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoY2FudmFzKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGJhdGNoZWRDYWxscy5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IHBhcmFtcyA9IGJhdGNoZWRDYWxsc1tpXS5zbGljZSgyKTtcbiAgICAgIGlmIChiYXRjaGVkQ2FsbHNbaV1bMV0pIHtcbiAgICAgICAgdGhpcy5jYWxsV2l0aENvbnRleHQoY29udGV4dCwgYmF0Y2hlZENhbGxzW2ldWzBdLCBwYXJhbXMpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5zZXRQcm9wZXJ0eVdpdGhDb250ZXh0KFxuICAgICAgICAgIGNvbnRleHQsXG4gICAgICAgICAgYmF0Y2hlZENhbGxzW2ldWzBdLFxuICAgICAgICAgIEFycmF5LmlzQXJyYXkocGFyYW1zKSAmJiBwYXJhbXMubGVuZ3RoID4gMCA/IHBhcmFtc1swXSA6IG51bGwpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgY2FsbFdpdGhDb250ZXh0ID0gKGNvbnRleHQ6IGFueSwgbWV0aG9kOiBzdHJpbmcsIGFyZ3M6IGFueSkgPT4ge1xuICAgIHJldHVybiB0aGlzLnNlcmlhbGl6ZSh0aGlzLnByb3RvdHlwZXNbbWV0aG9kXS5hcHBseShjb250ZXh0LCBhcmdzICE9IHVuZGVmaW5lZCA/IGFyZ3MubWFwKCh2YWx1ZSkgPT4gdGhpcy5kZXNlcmlhbGl6ZShtZXRob2QsIHZhbHVlKSkgOiBbXSkpO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXRQcm9wZXJ0eVdpdGhDb250ZXh0ID0gKGNvbnRleHQ6IGFueSwgcHJvcGVydHk6IHN0cmluZywgdmFsdWU6IGFueSkgPT4ge1xuICAgIGNvbnRleHRbcHJvcGVydHldID0gdGhpcy5kZXNlcmlhbGl6ZShwcm9wZXJ0eSwgdmFsdWUpO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRDb250ZXh0ID0gKGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQpID0+IHtcbiAgICBpZiAoIWNhbnZhcykgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIGNhbnZhcy4nKTtcblxuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmNvbnRleHRzLmdldChjYW52YXMuaWQpO1xuICAgIGlmICghY29udGV4dCkgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIGNvbnRleHQuJyk7XG5cbiAgICByZXR1cm4gY29udGV4dDtcbiAgfVxuXG4gIHByaXZhdGUgZGVzZXJpYWxpemUgPSAobWV0aG9kOiBzdHJpbmcsIG9iamVjdDogYW55KSA9PiB7XG4gICAgaWYgKCF0aGlzLndlYkdMQ29udGV4dCkgcmV0dXJuIG9iamVjdDsgLy9kZXNlcmlhbGl6YXRpb24gb25seSBuZWVkcyB0byBoYXBwZW4gZm9yIHdlYkdMXG5cbiAgICBpZiAob2JqZWN0Lmhhc093blByb3BlcnR5KFwid2ViR0xUeXBlXCIpICYmIG9iamVjdC5oYXNPd25Qcm9wZXJ0eShcImlkXCIpKSB7XG4gICAgICByZXR1cm4gKHRoaXMud2ViR0xPYmplY3Rbb2JqZWN0W1wiaWRcIl1dKTtcbiAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkob2JqZWN0KSAmJiAhbWV0aG9kLmVuZHNXaXRoKFwidlwiKSkge1xuICAgICAgcmV0dXJuIEludDhBcnJheS5vZiguLi4ob2JqZWN0IGFzIG51bWJlcltdKSk7XG4gICAgfSBlbHNlXG4gICAgICByZXR1cm4gb2JqZWN0O1xuICB9XG5cbiAgcHJpdmF0ZSBzZXJpYWxpemUgPSAob2JqZWN0OiBhbnkpID0+IHtcbiAgICBpZiAoIXRoaXMud2ViR0xDb250ZXh0KSByZXR1cm4gb2JqZWN0OyAvL3NlcmlhbGl6YXRpb24gb25seSBuZWVkcyB0byBoYXBwZW4gZm9yIHdlYkdMXG5cbiAgICBjb25zdCB0eXBlID0gdGhpcy53ZWJHTFR5cGVzLmZpbmQoKHR5cGUpID0+IG9iamVjdCBpbnN0YW5jZW9mIHR5cGUpO1xuICAgIGlmICh0eXBlICE9IHVuZGVmaW5lZCkge1xuICAgICAgY29uc3QgaWQgPSB0aGlzLndlYkdMT2JqZWN0Lmxlbmd0aDtcbiAgICAgIHRoaXMud2ViR0xPYmplY3QucHVzaChvYmplY3QpO1xuXG4gICAgICByZXR1cm4ge1xuICAgICAgICB3ZWJHTFR5cGU6IHR5cGUubmFtZSxcbiAgICAgICAgaWQ6IGlkXG4gICAgICB9O1xuICAgIH0gZWxzZVxuICAgICAgcmV0dXJuIG9iamVjdDtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==
(this["webpackJsonpepic-react"]=this["webpackJsonpepic-react"]||[]).push([[9],{269:function(e,t,r){"use strict";r.r(t);var n,c,i,s,a=r(0),l=r(83),j=r(80),d=r(162),h=r(33),u=r(18),b=r(271),g=r(265),o=r(76),O=r(169),p=r(34),x=(r(52),r(5)),f=g.a.Dragger,v=p.a.div(n||(n=Object(h.a)(["\n  margin-top: 30px;\n  border: 1px dashed #ccc;\n  padding: 20px;\n"]))),m=p.a.h1(c||(c=Object(h.a)(["\n  margin: 20px 0;\n  text-align: center;\n"]))),w=p.a.img(i||(i=Object(h.a)(["\n  max-width: 300px;\n"]))),S=Object(l.a)((function(){var e=Object(j.a)(),t=e.ImageStore,r=e.UserStore,n=Object(a.useRef)(),c=Object(a.useRef)(),i=Object(u.d)((function(){return{width:null,height:null,get widthStr(){return i.width?"/w/".concat(i.width):""},get heightStr(){return i.height?"/h/".concat(i.height):""},get fullStr(){return t.serverFile.attributes.url.attributes.url+"?imageView2/0"+i.widthStr+i.heightStr},setHeight:function(e){i.height=e},setWidth:function(e){i.width=e}}})),s={showUploadList:!1,beforeUpload:function(e){return t.setFile(e),t.setFilename(e.name),null==r.currentUser?(o.b.warning("\u8bf7\u5148\u767b\u9646\u518d\u4e0a\u4f20"),!1):(window.file=e,/(svg$)|(png$)|(jpg$)|(jpeg$)|(gif$)/gi.test(e.type)?e.size>1048576?(o.b.error("\u6700\u5927\u4e0a\u4f201M\u56fe\u7247"),!1):(t.upload().then((function(e){console.log("\u4e0a\u4f20\u6210\u529f")})).catch((function(){return console.log("\u4e0a\u4f20\u5931\u8d25")})),!1):(o.b.error("\u53ea\u80fd\u4e0a\u4f20.png/.gif/.jpg/.svg\u683c\u5f0f\u7684\u56fe\u7247"),!1))}};return Object(x.jsxs)("div",{children:[Object(x.jsx)(O.a,{tip:"\u4e0a\u4f20\u4e2d",spinning:t.isUploading,children:Object(x.jsxs)(f,Object(d.a)(Object(d.a)({},s),{},{children:[Object(x.jsx)("p",{className:"ant-upload-drag-icon",children:Object(x.jsx)(b.a,{})}),Object(x.jsx)("p",{className:"ant-upload-text",children:"\u70b9\u51fb\u6216\u8005\u62d6\u62fd\u4e0a\u4f20\u56fe\u7247"}),Object(x.jsx)("p",{className:"ant-upload-hint",children:"\u4ec5\u652f\u6301.png/.gif/.jpg/.svg\u683c\u5f0f\u7684\u56fe\u7247\uff0c\u56fe\u7247\u6700\u59271M"})]}))}),t.serverFile?Object(x.jsxs)(v,{children:[Object(x.jsx)(m,{children:"\u4e0a\u4f20\u7ed3\u679c"}),Object(x.jsxs)("dl",{children:[Object(x.jsx)("dt",{children:"\u7ebf\u4e0a\u5730\u5740"}),Object(x.jsx)("dd",{children:Object(x.jsx)("a",{target:"_blank",href:t.serverFile.attributes.url.attributes.url,children:t.serverFile.attributes.url.attributes.url})}),Object(x.jsx)("dt",{children:"\u6587\u4ef6\u540d"}),Object(x.jsx)("dd",{children:t.filename}),Object(x.jsx)("dt",{children:"\u56fe\u7247\u9884\u89c8"}),Object(x.jsx)("dd",{children:Object(x.jsx)(w,{src:t.serverFile.attributes.url.attributes.url})}),Object(x.jsx)("dt",{children:"\u66f4\u591a\u5c3a\u5bf8"}),Object(x.jsxs)("dd",{children:[Object(x.jsx)("input",{ref:n,onChange:function(){i.setWidth(n.current.value)},placeholder:"\u6700\u5927\u5bbd\u5ea6\uff08\u53ef\u9009\uff09"}),Object(x.jsx)("input",{ref:c,onChange:function(){i.setHeight(c.current.value)},placeholder:"\u6700\u5927\u9ad8\u5ea6\uff08\u53ef\u9009\uff09"})]}),Object(x.jsx)("dd",{children:Object(x.jsx)("a",{target:"_blank",href:i.fullStr,children:i.fullStr})})]})]}):null]})})),F=p.a.div(s||(s=Object(h.a)(["\n  background: orange;\n  color: #fff;\n  border-radius: 4px;\n  padding: 10px;\n  margin: 30px 0;\n  \n"]))),U=Object(l.a)((function(e){var t=e.children,r=Object(j.a)().UserStore;return Object(x.jsx)(x.Fragment,{children:r.currentUser?null:Object(x.jsx)(F,{children:t})})}));t.default=Object(l.a)((function(){Object(j.a)().UserStore;return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(U,{children:"\u8bf7\u5148\u767b\u9646\u5728\u4e0a\u4f20"}),Object(x.jsx)(S,{})]})}))}}]);
//# sourceMappingURL=9.7ee6c9c5.chunk.js.map
"use strict";(self.webpackChunkapache_streampark_website=self.webpackChunkapache_streampark_website||[]).push([[5826],{969:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>m,contentTitle:()=>i,default:()=>p,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var n=t(86070),r=t(76113);const s={slug:"streampark-usercase-bondex-with-paimon",title:"\u6d77\u7a0b\u90a6\u8fbe\u57fa\u4e8e Apache Paimon + Apache StreamPark\u2122 \u7684\u6d41\u5f0f\u6570\u4ed3\u5b9e\u8df5",tags:["StreamPark","\u751f\u4ea7\u5b9e\u8df5","paimon","streaming-warehouse"]},i=void 0,o={permalink:"/zh-CN/blog/streampark-usercase-bondex-with-paimon",editUrl:"https://github.com/apache/incubator-streampark-website/edit/dev/blog/3-streampark-usercase-bondex-paimon.md",source:"@site/i18n/zh-CN/docusaurus-plugin-content-blog/3-streampark-usercase-bondex-paimon.md",title:"\u6d77\u7a0b\u90a6\u8fbe\u57fa\u4e8e Apache Paimon + Apache StreamPark\u2122 \u7684\u6d41\u5f0f\u6570\u4ed3\u5b9e\u8df5",description:"\u5bfc\u8bfb\uff1a\u672c\u6587\u4e3b\u8981\u4ecb\u7ecd\u4f5c\u4e3a\u4f9b\u5e94\u94fe\u7269\u6d41\u670d\u52a1\u5546\u6d77\u7a0b\u90a6\u8fbe\u5728\u6570\u5b57\u5316\u8f6c\u578b\u8fc7\u7a0b\u4e2d\u91c7\u7528 Paimon + StreamPark \u5e73\u53f0\u5b9e\u73b0\u6d41\u5f0f\u6570\u4ed3\u7684\u843d\u5730\u65b9\u6848\u3002\u6211\u4eec\u4ee5 Apache StreamPark \u6d41\u6279\u4e00\u4f53\u5e73\u53f0\u63d0\u4f9b\u4e86\u4e00\u4e2a\u6613\u4e8e\u4e0a\u624b\u7684\u751f\u4ea7\u64cd\u4f5c\u624b\u518c\uff0c\u4ee5\u5e2e\u52a9\u7528\u6237\u63d0\u4ea4 Flink \u4efb\u52a1\u5e76\u8fc5\u901f\u638c\u63e1 Paimon \u7684\u4f7f\u7528\u65b9\u6cd5\u3002",date:"2024-06-09T15:14:19.000Z",tags:[{label:"StreamPark",permalink:"/zh-CN/blog/tags/stream-park"},{label:"\u751f\u4ea7\u5b9e\u8df5",permalink:"/zh-CN/blog/tags/\u751f\u4ea7\u5b9e\u8df5"},{label:"paimon",permalink:"/zh-CN/blog/tags/paimon"},{label:"streaming-warehouse",permalink:"/zh-CN/blog/tags/streaming-warehouse"}],readingTime:35.015,hasTruncateMarker:!0,authors:[],frontMatter:{slug:"streampark-usercase-bondex-with-paimon",title:"\u6d77\u7a0b\u90a6\u8fbe\u57fa\u4e8e Apache Paimon + Apache StreamPark\u2122 \u7684\u6d41\u5f0f\u6570\u4ed3\u5b9e\u8df5",tags:["StreamPark","\u751f\u4ea7\u5b9e\u8df5","paimon","streaming-warehouse"]},unlisted:!1,prevItem:{title:"\u8054\u901a Flink \u5b9e\u65f6\u8ba1\u7b97\u5e73\u53f0\u5316\u8fd0\u7ef4\u5b9e\u8df5",permalink:"/zh-CN/blog/streampark-usercase-chinaunion"},nextItem:{title:"Apache StreamPark\u2122 \u5728\u987a\u7f51\u79d1\u6280\u7684\u5927\u89c4\u6a21\u751f\u4ea7\u5b9e\u8df5",permalink:"/zh-CN/blog/streampark-usercase-shunwang"}},m={authorsImageUrls:[]},l=[];function c(e){const a={img:"img",li:"li",p:"p",ul:"ul",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.p,{children:(0,n.jsx)(a.img,{src:t(37497).A+"",width:"1080",height:"460"})}),"\n",(0,n.jsx)(a.p,{children:"**\u5bfc\u8bfb\uff1a**\u672c\u6587\u4e3b\u8981\u4ecb\u7ecd\u4f5c\u4e3a\u4f9b\u5e94\u94fe\u7269\u6d41\u670d\u52a1\u5546\u6d77\u7a0b\u90a6\u8fbe\u5728\u6570\u5b57\u5316\u8f6c\u578b\u8fc7\u7a0b\u4e2d\u91c7\u7528 Paimon + StreamPark \u5e73\u53f0\u5b9e\u73b0\u6d41\u5f0f\u6570\u4ed3\u7684\u843d\u5730\u65b9\u6848\u3002\u6211\u4eec\u4ee5 Apache StreamPark \u6d41\u6279\u4e00\u4f53\u5e73\u53f0\u63d0\u4f9b\u4e86\u4e00\u4e2a\u6613\u4e8e\u4e0a\u624b\u7684\u751f\u4ea7\u64cd\u4f5c\u624b\u518c\uff0c\u4ee5\u5e2e\u52a9\u7528\u6237\u63d0\u4ea4 Flink \u4efb\u52a1\u5e76\u8fc5\u901f\u638c\u63e1 Paimon \u7684\u4f7f\u7528\u65b9\u6cd5\u3002"}),"\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsx)(a.li,{children:"\u516c\u53f8\u4e1a\u52a1\u60c5\u51b5\u4ecb\u7ecd"}),"\n",(0,n.jsx)(a.li,{children:"\u5927\u6570\u636e\u6280\u672f\u75db\u70b9\u4ee5\u53ca\u9009\u578b"}),"\n",(0,n.jsx)(a.li,{children:"\u751f\u4ea7\u5b9e\u8df5"}),"\n",(0,n.jsx)(a.li,{children:"\u95ee\u9898\u6392\u67e5\u5206\u6790"}),"\n",(0,n.jsx)(a.li,{children:"\u672a\u6765\u89c4\u5212"}),"\n"]})]})}function p(e={}){const{wrapper:a}={...(0,r.R)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},37497:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/Bondex-b9280a2451e6984d91f7747acaa10b97.png"},76113:(e,a,t)=>{t.d(a,{R:()=>i,x:()=>o});var n=t(30758);const r={},s=n.createContext(r);function i(e){const a=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function o(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),n.createElement(s.Provider,{value:a},e.children)}}}]);
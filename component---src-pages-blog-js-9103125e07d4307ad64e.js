(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"3exm":function(e,t,a){e.exports={bloglist:"BlogListItem-module--bloglist--10q4c",bloglistitem:"BlogListItem-module--bloglistitem--1Dicu",date:"BlogListItem-module--date--1JJLh",subtitle:"BlogListItem-module--subtitle--3PnvN"}},o6A6:function(e){e.exports=JSON.parse('{"data":{"allMarkdownRemark":{"edges":[{"node":{"frontmatter":{"title":"About this blog","subtitle":"Why this blog and what to expect! 🚀","date":"April 29, 2020","author":"Dakshraj Sharma","index":20200429},"timeToRead":1,"fields":{"slug":"20200429"}}}]}}}')},vx99:function(e,t,a){"use strict";a.r(t);var l=a("q1tI"),n=a.n(l),o=(a("Vd3H"),a("o6A6")),r=a("Wbzz"),i=a("ReeX"),m=a("3exm"),s=a.n(m),d=a("9JMG"),u=function(e){var t=e.blog,a=e.timeToRead;return n.a.createElement("div",{className:s.a.bloglistitem},n.a.createElement("h2",null,t.title),n.a.createElement("p",{className:s.a.date},t.date," | ",a," minute read"),n.a.createElement("p",{className:s.a.subtitle},t.subtitle))},c=function(){var e=o.data;return n.a.createElement(d.a,null,n.a.createElement(i.a,{title:"Blog"}),n.a.createElement("div",{className:s.a.bloglist},n.a.createElement("div",null,n.a.createElement("h2",null,"my blog")),n.a.createElement("ul",null,e.allMarkdownRemark.edges.sort((function(e,t){return parseFloat(e.node.frontmatter.index)-parseFloat(t.node.frontmatter.index)})).map((function(e){return n.a.createElement(r.a,{to:"/blog/"+e.node.fields.slug,key:e.node.frontmatter.index},n.a.createElement("li",null,n.a.createElement(u,{blog:e.node.frontmatter,timeToRead:e.node.timeToRead})))}))),e.allMarkdownRemark.edges.length>5?n.a.createElement("div",{style:{height:"5rem"}}):null))};t.default=function(){return n.a.createElement(c,null)}}}]);
//# sourceMappingURL=component---src-pages-blog-js-9103125e07d4307ad64e.js.map
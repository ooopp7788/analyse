webpackJsonp([4],{1:function(e){e.exports=function(e){return 2048>e?e+" bytes":(e/=1024,2048>e?Math.round(e)+" KiB":(e/=1024,Math.round(e)+" MiB"))}},20:function(e,t,i){var s=i(2),a=i(5);e.exports=function(){return document.title="modules",$(".page").html(i(44)({stats:s.stats})),a.show(),a.setNormal(),function(){a.hide()}}},44:function(module,exports,__webpack_require__){var jade=__webpack_require__(3);module.exports=function anonymous(locals,attrs,escape,rethrow,merge){attrs=attrs||jade.attrs,escape=escape||jade.escape,rethrow=rethrow||jade.rethrow,merge=merge||jade.merge;var buf=[];with(locals||{}){buf.push('<table class="table table-condensed"><thead><tr><th>id</th><th>name</th><th>size</th><th>chunks</th><th>flags</th></tr></thead><tbody>'),function(){if("number"==typeof stats.modules.length)for(var e=0,t=stats.modules.length;t>e;e++){var i=stats.modules[e];buf.push("<tr><td><a"),buf.push(attrs({href:"#module/"+i.uid,"class":"btn btn-success"},{href:!0})),buf.push(">");var s=i.id;buf.push(escape(null==s?"":s)),buf.push("</a></td><td><pre><code>");var s=i.name.split("!").join("\n");buf.push(escape(null==s?"":s)),buf.push("</code></pre></td><td>");var s=__webpack_require__(1)(i.size);if(buf.push(escape(null==s?"":s)),buf.push("</td><td>"),function(){if("number"==typeof i.chunks.length)for(var e=0,t=i.chunks.length;t>e;e++){var s=i.chunks[e];buf.push("<a"),buf.push(attrs({href:"#chunk/"+s,"class":"btn btn-info"},{href:!0})),buf.push(">");var a=s;buf.push(escape(null==a?"":a)),buf.push("</a>");var a=" ";buf.push(escape(null==a?"":a))}else{var t=0;for(var e in i.chunks){t++;var s=i.chunks[e];buf.push("<a"),buf.push(attrs({href:"#chunk/"+s,"class":"btn btn-info"},{href:!0})),buf.push(">");var a=s;buf.push(escape(null==a?"":a)),buf.push("</a>");var a=" ";buf.push(escape(null==a?"":a))}}}.call(this),buf.push("</td><td>"),i.built){buf.push('<span class="label label-success">built</span>');var s=" ";buf.push(escape(null==s?"":s))}if(!i.cacheable){buf.push('<span class="label label-warning">not cacheable</span>');var s=" ";buf.push(escape(null==s?"":s))}if(i.prefetched){buf.push('<span class="label label-success">prefetched</span>');var s=" ";buf.push(escape(null==s?"":s))}if(i.failed){buf.push('<span class="label label-danger">failed</span>');var s=" ";buf.push(escape(null==s?"":s))}if(i.warnings){buf.push('<span class="label label-warning">');var s=i.warnings+" warnings";buf.push(escape(null==s?"":s)),buf.push("</span>");var s=" ";buf.push(escape(null==s?"":s))}if(i.errors){buf.push('<span class="label label-danger">');var s=i.errors+" errors";buf.push(escape(null==s?"":s)),buf.push("</span>")}buf.push("</td></tr>")}else{var t=0;for(var e in stats.modules){t++;var i=stats.modules[e];buf.push("<tr><td><a"),buf.push(attrs({href:"#module/"+i.uid,"class":"btn btn-success"},{href:!0})),buf.push(">");var s=i.id;buf.push(escape(null==s?"":s)),buf.push("</a></td><td><pre><code>");var s=i.name.split("!").join("\n");buf.push(escape(null==s?"":s)),buf.push("</code></pre></td><td>");var s=__webpack_require__(1)(i.size);if(buf.push(escape(null==s?"":s)),buf.push("</td><td>"),function(){if("number"==typeof i.chunks.length)for(var e=0,t=i.chunks.length;t>e;e++){var s=i.chunks[e];buf.push("<a"),buf.push(attrs({href:"#chunk/"+s,"class":"btn btn-info"},{href:!0})),buf.push(">");var a=s;buf.push(escape(null==a?"":a)),buf.push("</a>");var a=" ";buf.push(escape(null==a?"":a))}else{var t=0;for(var e in i.chunks){t++;var s=i.chunks[e];buf.push("<a"),buf.push(attrs({href:"#chunk/"+s,"class":"btn btn-info"},{href:!0})),buf.push(">");var a=s;buf.push(escape(null==a?"":a)),buf.push("</a>");var a=" ";buf.push(escape(null==a?"":a))}}}.call(this),buf.push("</td><td>"),i.built){buf.push('<span class="label label-success">built</span>');var s=" ";buf.push(escape(null==s?"":s))}if(!i.cacheable){buf.push('<span class="label label-warning">not cacheable</span>');var s=" ";buf.push(escape(null==s?"":s))}if(i.prefetched){buf.push('<span class="label label-success">prefetched</span>');var s=" ";buf.push(escape(null==s?"":s))}if(i.failed){buf.push('<span class="label label-danger">failed</span>');var s=" ";buf.push(escape(null==s?"":s))}if(i.warnings){buf.push('<span class="label label-warning">');var s=i.warnings+" warnings";buf.push(escape(null==s?"":s)),buf.push("</span>");var s=" ";buf.push(escape(null==s?"":s))}if(i.errors){buf.push('<span class="label label-danger">');var s=i.errors+" errors";buf.push(escape(null==s?"":s)),buf.push("</span>")}buf.push("</td></tr>")}}}.call(this),buf.push("</tbody></table>")}return buf.join("")}}});
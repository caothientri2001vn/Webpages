//tealium universal tag - utag.115 ut4.0.202502140741, Copyright 2025 Tealium.com Inc. All Rights Reserved.
if(typeof utag.ut=="undefined"){utag.ut={};}
utag.ut.libloader2=function(o,a,b,c,l){a=document;b=a.createElement('script');b.language='javascript';b.type='text/javascript';b.src=o.src;if(o.id){b.id=o.id};if(typeof o.cb=='function'){b.hFlag=0;b.onreadystatechange=function(){if((this.readyState=='complete'||this.readyState=='loaded')&&!b.hFlag){b.hFlag=1;o.cb()}};b.onload=function(){if(!b.hFlag){b.hFlag=1;o.cb()}}}
l=o.loc||'head';c=a.getElementsByTagName(l)[0];if(c){if(l=='script'){c.parentNode.insertBefore(b,c);}else{c.appendChild(b)}
utag.DB("Attach to "+l+": "+o.src)}}
try{(function(id,loader,u){u=utag.o[loader].sender[id]={};u.ev={'view':1};u.initialized=false;u.data={};u.data.google_conversion_id="972690427";u.data.google_conversion_label="dGhYCKWPzwUQ-6fozwM";u.data.pagetype="product";u.data.value="";u.data.google_remarketing_only=true;u.data.base_url="//www.googleadservices.com/pagead/conversion_async.js";u.map={"js_page.rtag_hotelid":"custom.hotelid","js_page.rtag_pagetypeid":"custom.pagetypeid","js_page.rtag_hotelid1":"custom.hotelid1","js_page.rtag_cityid":"custom.cityid","js_page.rtag_checkin":"custom.checkin","js_page.rtag_checkout":"custom.checkout","js_page.rtag_langid":"custom.langid","dom.domain":"custom.customdom","js_page.rtag_cid":"custom.cid","dom.url":"custom.customuri","js_page.rtag_totalprice_usd":"custom.totusd","cp._ab50group":"custom.ab5050split","js_page.rtag_country_origin":"custom.originiso2","is_domestic":"custom.hoteloutdom","Hotel_searchLeadTime":"custom.searchLeadTime"};u.extend=[function(a,b){try{if(1){try{b['dom.url']=b['dom.domain']+b['dom.pathname']}catch(e){}}}catch(e){utag.DB(e);}}];u.send=function(a,b){if(u.ev[a]||typeof u.ev.all!="undefined"){for(c=0;c<u.extend.length;c++){try{d=u.extend[c](a,b);if(d==false)return}catch(e){}};var c,d,e,f,g;g={};u.data.google_custom_params={};for(d in utag.loader.GV(u.map)){if(typeof b[d]!="undefined"&&b[d]!=""){e=u.map[d].split(",");for(f=0;f<e.length;f++){if(e[f].indexOf("custom.")==0){u.data.google_custom_params[e[f].substr(7)]=encodeURIComponent(b[d]);}else{u.data[e[f]]=encodeURIComponent(b[d]);}}}}
u.data.google_conversion_id=parseInt(u.data.google_conversion_id);g.google_conversion_id=u.data.google_conversion_id;if(u.data.google_conversion_label){g.google_conversion_label=u.data.google_conversion_label;}
if(b._corder){u.data.pagetype="purchase";}
u.data.prod=u.data.prod||(typeof b._cprod!="undefined"?b._cprod.slice(0):[]);u.data.value=u.data.value||b._csubtotal;u.data.google_custom_params.ecomm_prodid=u.data.prod;u.data.google_custom_params.ecomm_pagetype=u.data.pagetype;u.data.google_custom_params.ecomm_value=u.data.value;u.data.google_custom_params.ecomm_category=u.data.google_custom_params.ecomm_category||(b._ccat!==undefined?b._ccat.slice(0):[]);u.data.google_custom_params.ecomm_pvalue=u.data.google_custom_params.ecomm_pvalue||(b._cprice!==undefined?b._cprice.slice(0):[]);u.data.google_custom_params.ecomm_quantity=u.data.google_custom_params.ecomm_quantity||(b._cquan!==undefined?b._cquan.slice(0):[]);g.google_custom_params=u.data.google_custom_params;if(u.data.google_remarketing_only){g.google_remarketing_only=u.data.google_remarketing_only;}
u.gac_callback=function(){window.google_trackConversion(g);}
if(!u.initialized){u.initialized=true;utag.ut.libloader2({src:u.data.base_url,cb:u.gac_callback});}else{u.gac_callback();}}}
utag.o[loader].loader.LOAD(id);})('115','agoda.main2018');}catch(e){}

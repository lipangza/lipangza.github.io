$(function(){var $url=$("#film-play-url"),$urlMobile=$("#film-play-url-mobile"),isPC=IsPC();function getCurrentVideoUrl(){return(isPC?$url:$urlMobile).val()}$(document).ready(function(){var topValue=$(window).height(),palyerIframeHeight=.7*topValue,topValue=.04*topValue;$("#palyer-iframe").height(palyerIframeHeight),$("#play-box").css("top",topValue)}),$("#play-btn").on("click",function(){var sv,otherWebsiteUrl=getCurrentVideoUrl();otherWebsiteUrl&&(otherWebsiteUrl=otherWebsiteUrl.replace(/\s*/g,""),sv=otherWebsiteUrl,$url.val(sv),$urlMobile.val(sv),playUrl=$("#link-choice").val()+otherWebsiteUrl,$("#palyer-iframe").attr("src",playUrl),$("#current-play-url").text(playUrl),$("#current-play-url").attr("href",playUrl),sv="sv",sv=new RegExp("(^|&)"+sv+"=([^&]*)(&|$)"),null!=(sv=null!=(sv=window.location.search.substr(1).match(sv))?sv[2]:"")&&""!=sv&&0!=sv.length?history.pushState({},"页面标题",ROOT+"mov/s/?sv="+sv+"&url="+otherWebsiteUrl):history.pushState({},"页面标题",ROOT+"mov/s/?url="+otherWebsiteUrl))}),$("#back-website-btn").on("click",function(){var otherWebsiteUrl=getCurrentVideoUrl();otherWebsiteUrl&&(window.location.href=otherWebsiteUrl)})});
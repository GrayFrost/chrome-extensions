// JavaScript Document
$(function(){
	var bgPage =chrome.extension.getBackgroundPage();
	var url = "http://sports.sina.com.cn/nba/";
	bgPage.getNews(url,function(content){
		$("#show").html(content);
		
		removeElement();
		modifyElement();
	});
	
	function removeElement(){
		$("meta,ins,title,noscript,link,iframe,style").remove();
		$(".user-w,.header").remove();
		$("#preload_bookmark").remove();
		$("[class='footer simsun']").remove();//底栏
		$("[class='title clearfix']").remove();
		$("[class='part1 clearfix']").prevAll().remove();
		$("[class='part1 clearfix']").nextAll().remove();
		$(".left").remove();
		$("#template_scoreCard").remove();
		$(".tou_c").nextAll().remove();
	}
	
	function modifyElement(){
		/*创建标题*/
		var title = document.createElement("h2");
		title.innerHTML = "今日新闻";
		$(".wrap").prepend(title);
		
		/*让新闻不换行*/
		$(".main-content").css({
			"width":"300px",
			"whiteSpace":"nowrap"
		});
		
		/*修改链接样式*/
		$("a").css({
			"textDecoration":"none",
			"color":"black"
		});
		
		/*小标题的颜色*/
		$("span.small-icon").css({
			"backgroundColor":"#09f",
			"opacity":"0.6"
		});
	}
});
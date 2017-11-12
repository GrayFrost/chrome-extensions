// JavaScript Document
function getNews(url,callback){
	$.get(url,function(data,status){
		if(status == "success"){
			callback(data);
		}
	});
}
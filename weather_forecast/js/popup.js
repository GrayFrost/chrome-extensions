// JavaScript Document
$(function(){
		var city = localStorage.city;
		city = city?city:"beijing";
		$.ajax({
			type:"GET",
			url:"http://apis.baidu.com/heweather/weather/free?city=" + city,//和风全球天气
			beforeSend:function(request){
				request.setRequestHeader("apikey","5cdddc70156fb9f0993930b071cf56c8");
			},
			success:function(result){
				var daily = result["HeWeather data service 3.0"][0].daily_forecast;//未来七天数组
				var table = "<table class='table table-hover'><thead><tr><th>日期</th><th>白天天气</th><th>夜晚天气</th><th>最高温度(℃)</th><th>最低温度(℃)</th><th>相对湿度(%)</th></tr></thead>";
				table += "<tbody>";
				for(var i=0;i<7;i++){
					table += "<tr>";
					table += "<td>" + daily[i].date + "</td>";
					table += "<td>" + daily[i].cond.txt_d + "</td>";
					table += "<td>" + daily[i].cond.txt_n + "</td>";
					table += "<td>" + daily[i].tmp.max + "</td>";
					table += "<td>" + daily[i].tmp.min + "</td>";
					table += "<td>" + daily[i].hum + "</td>";
					table += "</tr>";
				}
				table +="</tbody></table>";
				document.getElementById("weather").innerHTML = table;
				
				var location = result["HeWeather data service 3.0"][0].basic.city;//所在地
				var temp = result["HeWeather data service 3.0"][0].now.tmp;//实时温度
				
				document.getElementById("nowLocation").innerHTML = "所在地：" + location;
				document.getElementById("nowTemp").innerHTML = "现在温度：" + temp + "℃";
			}
		});
});
// JavaScript Document
var db = openDatabase('bands_db', '1.0', 'bands db', 2 * 1024 * 1024);
var total_stages =0;
var day_arr=[];
var day_name_arr=[];
$(document).ready(function(e) {
    console.log("ready!");
	//setup database if it does not exist
	//if it exists then check date with todays date
	//if date is not a soni date then show message saying when festival starts bands will appear here
	set_up_band_db();
});

function add_to_plan2(e,method){
	var val_text =	$(e).val();
	//console.log(val_text);
	var band_id =	$(e).attr("id");
	band_id = band_id.substring(4,band_id.length);
	//console.log(band_id);
	
	//method is 1 when on fav bands, method is 0 when on lineup
	if(method==1)
	{
		//remove box from screen and reload fav bands
		//load_band_fav();
		
		//$("#fav"+band_id).parent().prev().css("background-color","orange");
		//$("#fav"+band_id).parent().next().css("background-color","red");
		var pre_end = $("#fav"+band_id).parent().parent().prev().find(".band_end_fav").text();
		var next_start = $("#fav"+band_id).parent().parent().next().find(".band_start_fav").text();
		var pre_band = $("#fav"+band_id).parent().parent().prev().find(".band_name_fav").text();
		var next_band = $("#fav"+band_id).parent().parent().next().find(".band_name_fav").text();
		console.log(pre_end+" "+next_start);
		//remove current gaptime
		$("#fav"+band_id).parent().parent().next().find(".gap_time").text("");
		
		if(!pre_band){
			//alert("no pre");
			//check for clash with next with same band name
			//alert("HEY pre");
			//remove clash gaptime if exists or remove clash with next and next next
			//if no pre band then the next band may need clash removing, if gaptime on next next then remove clash, if not then clash with next next band 
			var next_next_band = $("#fav"+band_id).parent().parent().next().next().find(".band_name_fav").text();
			var next_next_gap_time = $("#fav"+band_id).parent().parent().next().next().find(".gap_time").text();
				if(!next_next_gap_time){
					if(next_next_band){
						//no gap time so insert the next next band name into the next band clash banner.
						$("#fav"+band_id).parent().parent().next().find(".clash_banner").text("Clash with "+next_next_band+"!");	
						$("#fav"+band_id).parent().parent().next().find(".lineup_band").addClass("clash_bands");
					}
				}else{
					//current gap time should be okay but need to remove the clash banner from next band
					//also remove class of .clash_bands
					$("#fav"+band_id).parent().parent().next().find(".clash_banner").remove();	
					$("#fav"+band_id).parent().parent().next().find(".lineup_band").removeClass("clash_bands");
				
				}
		}
		if(!next_band){
			//alert("no next");
			//check for clash with pre with same band name
			//gaptime of next, if exists 
			//alert("HEY next");
			//if no next band then the pre band may need clash removing, if gaptime on next then remove clash, if no gaptime then change clash text with next next
			var pre_pre_band = $("#fav"+band_id).parent().parent().prev().prev().find(".band_name_fav").text();
			var pre_pre_gap_time = $("#fav"+band_id).parent().parent().prev().find(".gap_time").text();
				if(!pre_pre_gap_time){
					if(pre_pre_band){
					//no gap time so insert the next next band name into the next band clash banner.
					$("#fav"+band_id).parent().parent().prev().find(".clash_banner").text("Clash with "+pre_pre_band+"!");	
					$("#fav"+band_id).parent().parent().prev().find(".lineup_band").addClass("clash_bands");
					}
				}else{
					//current gap time should be okay but need to remove the clash banner from next band
					//also remove class of .clash_bands
					$("#fav"+band_id).parent().parent().prev().find(".clash_banner").remove();	
					$("#fav"+band_id).parent().parent().prev().find(".lineup_band").removeClass("clash_bands");
				
				}
		}
		
		if(pre_band && next_band){
		if(pre_end>next_start){
			//clash
			console.log("clash "+pre_band+" "+next_band);
			
			//prev band check
			if(!$("#fav"+band_id).parent().parent().prev().find(".lineup_band").hasClass("clash_bands")){
				//if prev does not already have a clash insert clash banner here
				//previous cant really clash !!!!!!!!
				//need to add .clash_bands
				$("#fav"+band_id).parent().parent().prev().find(".lineup_band").append("<span class='clash_banner'>Clash with "+next_band+"!<br/></span>");
				$("#fav"+band_id).parent().parent().next().find(".lineup_band").addClass("clash_bands");
				console.log("ONE CLASH with "+pre_band);
			}else{
				//if has clash then empty the text and replace with this band as old clash could be name of band removed
				$("#fav"+band_id).parent().parent().prev().find(".clash_banner").text("Clash with "+next_band+"!");	
				console.log(pre_band+" MULTI CLASH: "+next_band);
				console.log("COULD BE FAKED");
			}
			
			
			//next band check
			if(!$("#fav"+band_id).parent().parent().next().find(".lineup_band").hasClass("clash_bands")){
				//previous cant really clash !!!!!!!!
				// need to add .clash_bands
				$("#fav"+band_id).parent().parent().next().find(".lineup_band").append("<span class='clash_banner'>Clash with "+pre_band+"!<br/></span>");
				$("#fav"+band_id).parent().parent().next().find(".lineup_band").addClass("clash_bands");
				console.log("ONE CLASH with "+next_band);
			}else{
				//if has clash then empty the text and replace with this band as old clash could be name of band removed
				$("#fav"+band_id).parent().parent().next().find(".clash_banner").text("Clash with "+pre_band+"!");	
				console.log(next_band+" MULTI CLASH: "+pre_band);
			}
			
		}else{
			var gaptime = get_gap_time(pre_end,next_start);
			var content_gap = "<span class='small_text gap_time'><center>|<br/>"+gaptime+"<br/>|</center></span>";
			$(content_gap).insertBefore($("#fav"+band_id).parent().parent().next().find(".fav_bands"));
			
			
			
			
			//check next next for clash, if gaptime exists no clash, no gap time insert the next next band name in the clash banner of next.
			//may not be a next next band so error check that first
			var next_next_band = $("#fav"+band_id).parent().parent().next().next().find(".band_name_fav").text();
			if(!next_next_band){
				//no next next band
				//remove clash banner if no clashes
					$("#fav"+band_id).parent().parent().next().find(".clash_banner").remove();	
					$("#fav"+band_id).parent().parent().next().find(".lineup_band").removeClass("clash_bands");
			}else{
				//there is next next band so check if there is gaptime, if no gaptime insert the next next band name into the clash banner text
				var next_next_gap_time = $("#fav"+band_id).parent().parent().next().next().find(".gap_time").text();
				if(!next_next_gap_time){
					//no gap time so insert the next next band name into the next band clash banner.
					$("#fav"+band_id).parent().parent().next().find(".clash_banner").text("Clash with "+next_next_band+"!");	
					$("#fav"+band_id).parent().parent().next().find(".lineup_band").addClass("clash_bands");
				}else{
					//current gap time should be okay but need to remove the clash banner from next band
					//also remove class of .clash_bands
					$("#fav"+band_id).parent().parent().next().find(".clash_banner").remove();	
					$("#fav"+band_id).parent().parent().next().find(".lineup_band").removeClass("clash_bands");
				}
			}
			
			
			//check pre pre for clash, if gaptime exists no clash, no gap time insert the pre pre band name in the clash banner of next.
			//may not be a next next band so error check that first
			var pre_pre_band = $("#fav"+band_id).parent().parent().prev().prev().find(".band_name_fav").text();
			
			if(!pre_pre_band){
				//no next next band
				//remove clash banner if no clashes
				$("#fav"+band_id).parent().parent().prev().find(".clash_banner").remove();	
				$("#fav"+band_id).parent().parent().prev().find(".lineup_band").removeClass("clash_bands");
			}else{
				//there is next next band so check if there is gaptime, if no gaptime insert the next next band name into the clash banner text
				var pre_pre_gap_time = $("#fav"+band_id).parent().parent().prev().find(".gap_time").text();
				if(!pre_pre_gap_time){
					//no gap time so insert the next next band name into the next band clash banner.
					$("#fav"+band_id).parent().parent().prev().find(".clash_banner").text("Clash with "+pre_pre_band+"!");	
					$("#fav"+band_id).parent().parent().prev().find(".lineup_band").addClass("clash_bands");
				}else{
					//current gap time should be okay but need to remove the clash banner from next band
					//also remove class of .clash_bands
					$("#fav"+band_id).parent().parent().prev().find(".clash_banner").remove();	
					$("#fav"+band_id).parent().parent().prev().find(".lineup_band").removeClass("clash_bands");
				}
			}
			
			
			
		}
		}
		
		
	//remove the band element from screen
		$("#fav"+band_id).animate({height:0},700,function(){
						//load_band_fav();
						$("#fav"+band_id).parent().parent().remove();
					}
				);
		
		
	}
	
	if(val_text == "on"){
		//place band on see list - make band_fav 1
		//console.log("its on");
		
		db.transaction(function (txs) {
				txs.executeSql('UPDATE bands SET band_fav=1 WHERE id='+band_id+'');
		});
		
		
	}else if(val_text == "off"){
		//take band off see list, make band_fav 0
		//console.log("na na na na na");
		db.transaction(function (txs) {
				txs.executeSql('UPDATE bands SET band_fav=0 WHERE id='+band_id+'');
		});
	}
	
}




//defunked function, unused
function set_up_stages(){
	db.transaction(function (txs) {
						txs.executeSql('select max(stage_rank) as total_stages from bands', [], function(txs, results){
							var result = results.rows.item(0);
							
							total_stages = result.total_stages;
							//console.log(total_stages);
						});
	});
}







function set_up_main_page(){
	console.log("setting up...");
	
	var fulldate=getFulldate();
	var time = getFulltime();
	//fulldate=20140706;
	//time=0050;
	//sql to select all unique dates.
	//create array as unknown lenght
	
	db.transaction(function (txs) {
		
		//how many stages?
		txs.executeSql('select DISTINCT stage_rank, stage from bands order by stage_rank ASC', [], function(txs, results){
							var len = results.rows.length, i;
							
							var last_stage=0;
							for(var i=0;i<len;i++){
								
								var result = results.rows.item(i);
								
								
								
								var content = ' <span id=stage'+i+'>'+result.stage+'</span>'+
											'<div class="now_playing_box">'+
											
											'<div class="now_playing_section">Now: <span id=stage'+i+'_now_band></span>'+
											'<br/>Finish: <span id=stage'+i+'_now_finish></span>'+
											'</div>'+
											
										   ' <div class="now_playing_section">Next: <span id=stage'+i+'_next_band></span>'+
											'<br/>Set Time: <span id=stage'+i+'_next_start></span> - <span id=stage'+i+'_next_finish></span>'+
											'</div>'+
											
											'</div>';
											$("#main_page_stages").append(content);
											
											
											//get panel stage names
											var panel_content = '<li><a onClick=set_up_lineup('+i+',"panel")>'+result.stage+'</a></li>';
											$("#panel_stages").append(panel_content);
											
											last_stage=i;
											
							}
							//$("#panel_stages").listview('refresh');
							//total stages counts 0 as number!
							total_stages = last_stage;
							//console.log(total_stages);
							//begin output of now playing boxes.
						});
						
		
		
						//find the days the festival is on for
						//also finds the number of days
						txs.executeSql('select day,day_name from bands group by day order by day asc', [], function(txs, results){
							var len = results.rows.length, i;
							for(i=0;i<len;i++)
								{	
									var BandRecord = results.rows.item(i);
									
									day_arr.push(BandRecord.day);
									day_name_arr.push(BandRecord.day_name);
									
								}
								//if txs is closeed it runs in background and it doesnt add days therefore it skips what would be after
								
								//if today is one of the days bands play pull out the bands
								
								if(day_arr.indexOf(fulldate)!=-1){
									//alert("day found");
									
									txs.executeSql('select * from bands where day = '+fulldate+' and start_time <= '+time+' and finish_time > '+time+' ', [], function(txs, results){
									var len = results.rows.length, i;
									
									for(i=0;i<len;i++)
										{	
										
											var BandRecord = results.rows.item(i);
											
											
											//console.log(BandRecord.band_name+" start time: "+BandRecord.start_time+" stage: "+BandRecord.stage);
											$("#stage"+BandRecord.stage_rank+"_now_band").text(BandRecord.band_name);
											var finish_time = BandRecord.finish_time.toString();
											
											if(finish_time.length<4){
												finish_time=add_zeros(finish_time);
											}
											
											finish_time=finish_time.substring(0,2)+":"+finish_time.substring(2,4);
		
											$("#stage"+BandRecord.stage_rank+"_now_finish").text(finish_time);
											
											if(BandRecord.band_fav==1){
												$("#stage"+BandRecord.stage_rank+"_now_band").css("color","#80FF00");
											}else{
												$("#stage"+BandRecord.stage_rank+"_now_band").css("color","#FFF");
											}
											
											var name_length = BandRecord.band_name.length;
											if(name_length>20){
												$("#stage"+BandRecord.stage_rank+"_now_band").css("fontSize","1em");
											}
											if(name_length>30){
												$("#stage"+BandRecord.stage_rank+"_now_band").css("fontSize","0.8em");
											}
											if(name_length>40){
												var show_name = BandRecord.band_name;
												show_name = show_name.substr(0,30)+"...";
												$("#stage"+BandRecord.stage_rank+"_now_band").text(show_name);
											}
											
										}
										//keep inside transaction as the days will not be known outside due to threading
										//use the day array to count days							
										//if dynamic days then will need to set up plan page and lineup page with tabs
										//set_up_lineup(0,'system');
										
										
										

						});
						
						//main stage = 0
						for(var i = 0; i<=total_stages;i++){
									next_bands(txs,i,fulldate,time);
								}
						
									
								}else{
									set_up_lineup_page();
									$("#not_time").html("Once The Festival Starts Bands Will Appear Here <br/><br/>");
								}
								
						});
			
						 });
	
			
}


function next_bands(txs,StageName,fulldate,time){
	txs.executeSql('select * from bands where day = '+fulldate+' and start_time > '+time+' and stage_rank="'+StageName+'" order by start_time ASC Limit 1', [], function(txs, results){
							var len = results.rows.length, i;
							for(i=0;i<len;i++)
								{			
									var BandRecord = results.rows.item(i);
									//console.log(BandRecord.band_name+" start time: "+BandRecord.start_time+" stage: "+BandRecord.stage);
									$("#stage"+BandRecord.stage_rank+"_next_band").text(BandRecord.band_name);
									var start_time = BandRecord.start_time.toString();
									if(start_time.length<4){
										start_time=add_zeros(start_time);
									}
									start_time=start_time.substring(0,2)+":"+start_time.substring(2,4);
									$("#stage"+BandRecord.stage_rank+"_next_start").text(start_time);
									var finish_time = BandRecord.finish_time.toString();
									if(finish_time.length<4){
										finish_time=add_zeros(finish_time);
									}
									finish_time=finish_time.substring(0,2)+":"+finish_time.substring(2,4);
									$("#stage"+BandRecord.stage_rank+"_next_finish").text(finish_time);
									if(BandRecord.band_fav==1){
										$("#stage"+BandRecord.stage_rank+"_next_band").css("color","#80FF00");
									}else{
										$("#stage"+BandRecord.stage_rank+"_next_band").css("color","#FFF");
									}
									var name_length = BandRecord.band_name.length;
											if(name_length>20){
												$("#stage"+BandRecord.stage_rank+"_next_band").css("fontSize","1em");
											}
											if(name_length>30){
												$("#stage"+BandRecord.stage_rank+"_next_band").css("fontSize","0.8em");
											}
											if(name_length>40){
												var show_name = BandRecord.band_name;
												show_name = show_name.substr(0,30)+"...";
												$("#stage"+BandRecord.stage_rank+"_next_band").text(show_name);
											}
									
								}
								
						});
}


function getFulldate()
	{
		var d = new Date();
		//month plus one - starts at 0 plus if lenght 1 add 0 to start
		//day=date,year=fullyear
		var year = d.getFullYear();
		var month = d.getMonth();
		month++;
		month = month < 10 ? '0'+month : month;
		var day = d.getDate();
		day = day < 10 ? '0'+day : day;
		var fulldate = year+''+month+''+day;
		return fulldate;
	}
	function getFulltime()
	{
		var d = new Date();
		var hour = d.getHours();
		hour = hour < 10 ? '0'+hour : hour;
		var minute = d.getMinutes();
		minute = minute < 10 ? '0'+minute : minute;
		var time = hour+''+minute;
		return time;
	}
	
	function add_zeros(band_time){
		if(band_time.length==1){
			band_time="000"+band_time;
		}
		if(band_time.length==2){
			band_time="00"+band_time;
		}
		if(band_time.length==3){
			band_time="0"+band_time;
		}
		return band_time;
		
	}



function set_up_lineup(stageNum,method){
	//console.log("reading.. lineup");
	//console.log("stage num: "+stageNum);
	//var stageName="Apollo";
	
	
	//at this point we'd already have the page set up, so if we id the boxes using tab_20140706 then we can locate each of them.
	//so create ealier function after db is created which adds all the tabs onto the screen
	//remove content in tabs
	console.log("setting lineup");
	
	$.each(day_arr, function (index,val){
		//empty each tab
		$("#tab_"+val).empty();
	});
	
	 db.transaction(function (txs) {
		 				//how many days is being logged.	
						console.log(day_arr.length);
		
						txs.executeSql('select * from bands where stage_rank = '+stageNum+' order by start_time DESC ', [], function(txs, results){
							var len = results.rows.length, i;
							for(var i=0;i<len;i++)
								{	
								
								var BandRecord = results.rows.item(i);
								$("#stage_name_heading").text(BandRecord.stage);
								var finish_time = BandRecord.finish_time.toString();
								
								
								
									if(finish_time.length<4){
										finish_time=add_zeros(finish_time);
									}						
								
								finish_time=finish_time.substring(0,2)+":"+finish_time.substring(2,4);
									
								var start_time = BandRecord.start_time.toString();
								
									if(start_time.length<4){
										start_time=add_zeros(start_time);
									}
								
								
								start_time=start_time.substring(0,2)+":"+start_time.substring(2,4);
								
								var flip_off = "selected";
								var flip_on = "";
								if(BandRecord.band_fav==1){
									flip_off="";
									flip_on="selected";
									//console.log(BandRecord.band_fav);
								}
								
								var name_length = BandRecord.band_name.length;
								var show_name = BandRecord.band_name;
											if(name_length>20){
												show_name = show_name.substr(0,20)+"...";
											}
								
								
								
									
								var content = '<div class="lineup_band" ><strong>'+show_name+'</strong>'+
														'<br/><span class="darker_text">'+start_time+' - '+finish_time+'</span><br/>'+
													'<form><select name=flip'+BandRecord.id+' id=flip'+BandRecord.id+' data-role="flipswitch" data-mini="true" data-theme="c" onChange="add_to_plan2(this,0)">'+
													'<option value="off" '+flip_off+' >Off</option> <option value="on" '+flip_on+' >On</option></select></form> </div>';
								
								
									
									//if set up tabs using day date as extension to id then something like
									//$("#tab_"+date).append(content);
									//could be used
									
									$("#tab_"+BandRecord.day).append(content);
									
									/*
									if(BandRecord.day==day_arr[0]){
									$("#tab_one").append(content);
									}
									if(BandRecord.day==day_arr[1]){
									$("#tab_two").append(content);
									}
									if(BandRecord.day==day_arr[2]){
									$("#tab_three").append(content);
									}
									*/
										
								}
								$(".lineup_band").trigger('create');
								
								// $('#tabs_lineup').tabs("refresh");
								//$("#tabs_lineup").trigger('updatelayout');
						});
			 });
			 
			 if(method=="panel"){
				$("#stage_panel").panel("close");
			 }
			
}

function bg_chang(day,sel){
	//3D505B -selected
	//D1CCD2 - unactive
	 	
	$.each(day_arr, function (index,val){
		if(val!=day){
			$("#"+sel+"_"+val).css({"background-color":"#D1CCD2","color":"#000"});		
		}else{
			$("#"+sel+"_"+val).css({"background-color":"#3D505B","color":"#FFF"});	
		}
	});
	
	/*
	if(day==1){
	$("#"+sel+"_fri").css("background-color","#3D505B");
	$("#"+sel+"_fri").css("color","#FFF");
	$("#"+sel+"_sat").css("background-color","#D1CCD2");
	$("#"+sel+"_sat").css("color","#000");
	$("#"+sel+"_sun").css("background-color","#D1CCD2");
	$("#"+sel+"_sun").css("color","#000");
	}
	if(day==2){
	$("#"+sel+"_fri").css("background-color","#D1CCD2");
	$("#"+sel+"_fri").css("color","#000");
	$("#"+sel+"_sat").css("background-color","#3D505B");
	$("#"+sel+"_sat").css("color","#FFF");
	$("#"+sel+"_sun").css("background-color","#D1CCD2");
	$("#"+sel+"_sun").css("color","#000");
	}
	if(day==3){
	$("#"+sel+"_fri").css("background-color","#D1CCD2");
	$("#"+sel+"_fri").css("color","#000");
	$("#"+sel+"_sat").css("background-color","#D1CCD2");
	$("#"+sel+"_sat").css("color","#000");
	$("#"+sel+"_sun").css("background-color","#3D505B");
	$("#"+sel+"_sun").css("color","#FFF");
	}
	*/
}


function load_band_fav(){
	
	//ON MAKING A DYNAMIC DAY -- find out number of days, 
	//loop thru and empty them and append <ul>
	//each arrary loop like lineup 
	$.each(day_arr, function (index,val){
		$("#tab_day_"+val).empty();
		$("#tab_day_"+val).append("<ul>");

	});
		//$("#tab_one_day,#tab_two_day,#tab_three_day").empty();
		//$("#tab_one_day,#tab_two_day,#tab_three_day").append("<ul>");
	console.log("loading fav bands...");
	
	//use playdate as extented id of element
	//could do a loop on each again and inside the transaction, use the day in the SQL so no need for multi vars 1-3
	 db.transaction(function (txs) {
		// console.log(day_arr);
		 $.each(day_arr, function (index,val){
						
						txs.executeSql('select * from bands where band_fav=1 and day='+val+' order by start_time ASC ', [], function(txs, results){
							var len = results.rows.length, i;
							
							var preEnd_1 = 0;
							var preBand_1 = "";
							var preId_1 = "";
							var count_1 = 0;
							
							
							for(i=0;i<len;i++)
								{	
								var BandRecord = results.rows.item(i);
																
								
								var finish_time = BandRecord.finish_time.toString();
								if(finish_time.length<4){
												finish_time=add_zeros(finish_time);
											}
								finish_time=finish_time.substring(0,2)+":"+finish_time.substring(2,4);
									
								var start_time = BandRecord.start_time.toString();
								if(start_time.length<4){
												start_time=add_zeros(start_time);
											}
								start_time=start_time.substring(0,2)+":"+start_time.substring(2,4);
								
								var band_stage_show = BandRecord.stage;
									if(BandRecord.stage.length>20)
									{
										band_stage_show = BandRecord.stage.substr(0,28)+"..";
									}
								var name_length = BandRecord.band_name.length;
								var show_name = BandRecord.band_name;
											if(name_length>20){
												show_name = show_name.substr(0,20)+"...";
											}
											
								var content = '<ul><li><div id=fav'+BandRecord.id+' class="lineup_band morehight fav_bands" ><strong class="band_name_fav" >'+show_name+'			                                               </strong>'+'<br/><span class="darker_text"><span class="band_start_fav">'+start_time+'</span> - <span class="band_end_fav">'+finish_time+'		                                               </span><br/>'+band_stage_show+'</span><br/><form><select name=flip'+BandRecord.id+' id=flip'+BandRecord.id+' data-role="flipswitch" data-mini="true" data-theme="c" onChange="add_to_plan2(this,1)"><option value="off" >Off</option> <option value="on" selected >On</option></select></form> </div></li></ul>';
											
											
											
								
									$("#tab_day_"+val).append(content);
									//if there is a prev band
									if(count_1>0){
										if(preEnd_1>BandRecord.start_time)
												{
													//clash
													//console.log("clash");
													var name_length_1 = preBand_1.length;
													var show_name_1 = preBand_1;
																if(name_length_1>20){
																	show_name_1 = show_name_1.substr(0,20)+"...";
																}
													if(!$("#fav"+preId_1).hasClass("clash_bands")){
														$("#fav"+preId_1).append("<span class='clash_banner'>Clash with "+show_name+"!<br/></span>");	
													}else{
														//console.log(show_name_1+" MULTI CLASH: "+show_name);
													}
													$("#fav"+BandRecord.id).append("<span class='clash_banner'>Clash with "+show_name_1+"!<br/></span>");
													$("#fav"+BandRecord.id+", #fav"+preId_1).addClass("clash_bands");
												}else{
													//work out time between bands
													var gaptime = get_gap_time(preEnd_1,start_time);
													var content_gap = "<span class='small_text gap_time'><center>|<br/>"+gaptime+"<br/>|</center></span>";
													$(content_gap).insertBefore($("#fav"+BandRecord.id));
													
												}
											}
									count_1++;
									preBand_1 = BandRecord.band_name;
									var pre_end_time_1 = BandRecord.finish_time.toString();
									if(pre_end_time_1.length<4){
												pre_end_time_1=add_zeros(pre_end_time_1);
											}
									preEnd_1 = pre_end_time_1;
									preId_1 = BandRecord.id;
									
		
								}//forloop
							$(".lineup_band").trigger('create');
							$("#tabs_day").trigger('updatelayout');
						});//exectue
		
		});//eachloop
		
		 
					/*	txs.executeSql('select * from bands where band_fav=1 order by start_time ASC ', [], function(txs, results){
							var len = results.rows.length, i;
							
							//1 fri 2 sat 3 sun
							var preEnd_1 = 0;
							var preEnd_2 = 0;
							var preEnd_3 = 0;
							var preBand_1 = "";
							var preBand_2 = "";
							var preBand_3 = "";
							var preId_1 = "";
							var preId_2 = "";
							var preId_3 = "";
							var count_1 = 0;
							var count_2 = 0;
							var count_3 = 0;
							
							for(i=0;i<len;i++)
								{	
								var BandRecord = results.rows.item(i);
																
								
								var finish_time = BandRecord.finish_time.toString();
								if(finish_time.length<4){
												finish_time=add_zeros(finish_time);
											}
								finish_time=finish_time.substring(0,2)+":"+finish_time.substring(2,4);
									
								var start_time = BandRecord.start_time.toString();
								if(start_time.length<4){
												start_time=add_zeros(start_time);
											}
								start_time=start_time.substring(0,2)+":"+start_time.substring(2,4);
								
								var band_stage_show = BandRecord.stage;
									if(BandRecord.stage.length>20)
									{
										band_stage_show = BandRecord.stage.substr(0,28)+"..";
									}
								var name_length = BandRecord.band_name.length;
								var show_name = BandRecord.band_name;
											if(name_length>20){
												show_name = show_name.substr(0,20)+"...";
											}
									
									
								var content = '<ul class="kevin_ul"><li><div id=fav'+BandRecord.id+' class="lineup_band morehight fav_bands" ><strong class="band_name_fav" >'+show_name+'</strong>'+
														'<br/><span class="darker_text"><span class="band_start_fav">'+start_time+'</span> - <span class="band_end_fav">'+finish_time+'</span><br/>'+band_stage_show+'</span><br/>'+
													'<form><select name=flip'+BandRecord.id+' id=flip'+BandRecord.id+' data-role="flipswitch" data-mini="true" data-theme="c" onChange="add_to_plan2(this,1)">'+
													'<option value="off" >Off</option> <option value="on" selected >On</option></select></form> </div></li></ul>';
									
									
									// could loop thru this with i counter on dynamic day
									//with playdate in ID it will append to correct tab
									//impossible to have varibles on varibles
									if(BandRecord.day==day_arr[0]){
									$("#tab_one_day").append(content);
									if(count_1>0){
										if(preEnd_1>BandRecord.start_time)
												{
													//clash
													//console.log("clash");
													var name_length_1 = preBand_1.length;
													var show_name_1 = preBand_1;
																if(name_length_1>20){
																	show_name_1 = show_name_1.substr(0,20)+"...";
																}
													if(!$("#fav"+preId_1).hasClass("clash_bands")){
														$("#fav"+preId_1).append("<span class='clash_banner'>Clash with "+show_name+"!<br/></span>");	
													}else{
														//console.log(show_name_1+" MULTI CLASH: "+show_name);
													}
													$("#fav"+BandRecord.id).append("<span class='clash_banner'>Clash with "+show_name_1+"!<br/></span>");
													$("#fav"+BandRecord.id+", #fav"+preId_1).addClass("clash_bands");
												}else{
													//work out time between bands
													var gaptime = get_gap_time(preEnd_1,start_time);
													var content_gap = "<span class='small_text gap_time'><center>|<br/>"+gaptime+"<br/>|</center></span>";
													$(content_gap).insertBefore($("#fav"+BandRecord.id));
													
												}
											}
									count_1++;
									preBand_1 = BandRecord.band_name;
									var pre_end_time_1 = BandRecord.finish_time.toString();
									if(pre_end_time_1.length<4){
												pre_end_time_1=add_zeros(pre_end_time_1);
											}
									preEnd_1 = pre_end_time_1;
									preId_1 = BandRecord.id;
									}
									
									
									if(BandRecord.day==day_arr[1]){
									$("#tab_two_day").append(content);
									if(count_2>0){
										if(preEnd_2>BandRecord.start_time)
												{
													//clash
													var name_length_2 = preBand_2.length;
													var show_name_2 = preBand_2;
																if(name_length_2>20){
																	show_name_2 = show_name_2.substr(0,20)+"...";
																}
													
													if(!$("#fav"+preId_2).hasClass("clash_bands")){
														$("#fav"+preId_2).append("<span class='clash_banner'>Clash with "+show_name+"!<br/></span>");	
													}else{
														//console.log(show_name_2+" MULTI CLASH: "+show_name);
													}
													$("#fav"+BandRecord.id).append("<span class='clash_banner'>Clash with "+show_name_2+"!<br/></span>");
													$("#fav"+BandRecord.id+", #fav"+preId_2).addClass("clash_bands");
													
												}else{
													//work out time between bands
													var gaptime = get_gap_time(preEnd_2,start_time);
													var content_gap = "<span class='small_text gap_time'><center>|<br/>"+gaptime+"<br/>|</center></span>";
													$(content_gap).insertBefore($("#fav"+BandRecord.id));
													
												}
											}
									count_2++;
									preBand_2 = BandRecord.band_name;
									var pre_end_time_2 = BandRecord.finish_time.toString();
									if(pre_end_time_2.length<4){
												pre_end_time_2=add_zeros(pre_end_time_2);
											}
									preEnd_2 = pre_end_time_2;
									
									preId_2 = BandRecord.id;
									}
									
									
									if(BandRecord.day==day_arr[2]){
									$("#tab_three_day").append(content);
									if(count_3>0){
										if(preEnd_3>BandRecord.start_time)
												{
													//clash
													var name_length_3 = preBand_3.length;
													var show_name_3 = preBand_3;
																if(name_length_3>20){
																	show_name_3 = show_name_3.substr(0,20)+"...";
																}
													if(!$("#fav"+preId_3).hasClass("clash_bands")){
														$("#fav"+preId_3).append("<span class='clash_banner'>Clash with "+show_name+"!<br/></span>");	
													}else{
														//console.log(show_name_3+" MULTI CLASH: "+show_name);
													}
													$("#fav"+BandRecord.id).append("<span class='clash_banner'>Clash with "+show_name_3+"!<br/></span>");
													$("#fav"+BandRecord.id+", #fav"+preId_3).addClass("clash_bands");
													
												}else{
													//work out time between bands
													var gaptime = get_gap_time(preEnd_3,start_time);
													var content_gap = "<span class='small_text gap_time'><center>|<br/>"+gaptime+"<br/>|</center></span>";
													$(content_gap).insertBefore($("#fav"+BandRecord.id));
													
												}
											}
									count_3++;
									preBand_3 = BandRecord.band_name;
									var pre_end_time_3 = BandRecord.finish_time.toString();
									if(pre_end_time_3.length<4){
												pre_end_time_3=add_zeros(pre_end_time_3);
											}
									preEnd_3 = pre_end_time_3;
									//preEnd_3 = BandRecord.finish_time;
									preId_3 = BandRecord.id;
									}
																
									
									
									
										
								}
									
								$(".lineup_band").trigger('create');
								$("#tabs_day").trigger('updatelayout');
								
								
								
								
						});
						*/
			 });//transaction
	
}

function set_up_lineup_page()
{
	/* 
		get the number of days the festival is on for,
		using the tabs create a dynamic amount of tabs with an ID which inculdes the day e.g. id=tab_20140706
	*/
	/*	
		
		<div data-role="tabs" id="tabs">
			  <div data-role="navbar">
				  <!-- WHEN ADDING DYNAMIC DAYS START CHANGE FROM HERE-->
					
					<ul>
					  <li><a id="lu_fri" href="#tab_one" onFocus="bg_chang(1,'lu')" class="ui-btn-active" data-ajax="false">Friday</a></li>
					  <li><a id="lu_sat" href="#tab_two" onFocus="bg_chang(2,'lu')" data-ajax="false">Saturday</a></li>
					  <li><a id="lu_sun" href="#tab_three" onFocus="bg_chang(3,'lu')" data-ajax="false">Sunday</a></li>
					</ul>
					
				</div>
				  
				<div id="tab_one" class="ui-body-d ui-content">
					<!-- TAB ONE -->	
				</div>
				  
				<div id="tab_two" class="ui-body-d ui-content">
					<!-- TAB TWO -->
				</div>
				  
				<div id="tab_three" class="ui-body-d ui-content">
				  	<!-- TAB THREE -->
			  	</div>
				  
		</div><!-- /TABS -->
	
	
	
	*/ 
	
	//$("#nav_lineup").append();
	//$("#tabs_lineup").append();
	
	//console.log(day_arr);
	//console.log(day_name_arr);
	
	console.log("lineupup");
	$.each(day_arr, function (index,val){
		//append a tab nav bar 
		//apend a tab page
		$("#nav_lineup").append('<li><a id=lu_'+val+' href=#tab_'+val+' onFocus=bg_chang('+val+',"lu") data-ajax="false">'+day_name_arr[index]+'</a></li>');
		$("#tabs_lineup").append('<div id=tab_'+val+' class="ui-body-d ui-content"></div>');
		
	});
	$("#lu_"+day_arr[0]).addClass('ui-btn-active');
	set_up_fav_page();
	//make the first tab the active one
	
	//$("#tabs_lineup").trigger('updatelayout');
	
}

function set_up_fav_page(){
	/*
	 	   <li><a id="day_fri" href="#tab_one_day" onFocus="bg_chang(1,'day')" class="ui-btn-active" data-ajax="false">Friday</a></li>
           <li><a id="day_sat" href="#tab_two_day" onFocus="bg_chang(2,'day')" data-ajax="false">Saturday</a></li>
           <li><a id="day_sun" href="#tab_three_day" onFocus="bg_chang(3,'day')" data-ajax="false">Sunday</a></li>
		   
		     <div id="tab_one_day" class="ui-body-d ui-content">
        <!-- TAB ONE -->
        Loading...
        
      </div>
      <div id="tab_two_day" class="ui-body-d ui-content">
        <!-- TAB TWO -->
         Loading...
      </div>
      <div id="tab_three_day" class="ui-body-d ui-content">
      <!-- TAB THREE -->
      Loading...
      </div>
	*/
	console.log("favfavupup");
	$.each(day_arr, function (index,val){
		//append a tab nav bar 
		//apend a tab page
		$("#navbar_fav").append('<li><a id=day_'+val+' href=#tab_day_'+val+' onFocus=bg_chang('+val+',"day") data-ajax="false">'+day_name_arr[index]+'</a></li>');
		$("#tabs_day").append('<div id=tab_day_'+val+' class="ui-body-d ui-content"></div>');
	});
	$("#day_"+day_arr[0]).addClass('ui-btn-active');
	
}

function get_gap_time(preEnd_time,start_time){
	//console.log(preEnd_time+" formatted with : "+start_time);
	var gap_time = preEnd_time.toString();
	if(gap_time.length<5){
	gap_time=gap_time.substring(0,2)+":"+gap_time.substring(2,4);
	}
	var start_time_band_1 = "01/01/2014 "+gap_time;
	var end_time_band_1 =  "01/01/2014 "+start_time;
	start_time_band_1 = new Date(start_time_band_1);
	end_time_band_1 = new Date(end_time_band_1);
	var diff = end_time_band_1 - start_time_band_1;
	var diffSeconds = diff/1000;
	var HH = Math.floor(diffSeconds/3600);
	var MM = Math.floor(diffSeconds%3600)/60;
	//(condition)?trueval:falseval
	var formatted = ((HH == 0)?(""):HH+":") + ((MM < 10)?("0" + MM):MM) + ((HH>0)?" hrs":" mins");
	//var formatted = ((HH < 10)?("0" + HH):HH) + ":" + ((MM < 10)?("0" + MM):MM);
	return formatted;
	
}

function smaller_band_name(band_name){
	var name_length = band_name.length;
	var show_name = band_name;
	if(name_length>20){
			show_name = show_name.substr(0,20)+"...";
	}
	
	return show_name;
}

function clearplan(){
	//console.log("clear plan");
	db.transaction(function (txs) {
				txs.executeSql('UPDATE bands SET band_fav=0 WHERE band_fav=1');
		});
		//tabs need refreshing but this way should work faster for same result.
		//$("#tab_one_day,#tab_two_day,#tab_three_day").empty();
		$.each(day_arr, function (index,val){

		$("#tabs_day_"+val).empty();
		
	});
}


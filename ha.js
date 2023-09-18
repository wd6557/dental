function getCsv(no){	//Git用
	var data='list.csv';
	let xhr = new XMLHttpRequest(); 
	xhr.open("GET",data,true);
	xhr.onload = function (e) {
		if (xhr.readyState === 4) {
			if (xhr.status === 200) {
				let str = xhr.responseText;
				var strs = str.split('\n');
				var select="<select name='select' onchange='select()'><option value=''>（選択して下さい）</option>"
				var hyou="<div class='scr'><table _fixedhead='rows:1; cols:5' style='table-layout:fixed;width:100%;'><thead><tr class='header' style='background:#FFE4E1'><th class='td2'>check</th><th class='td2'>年</th><th class='td2'>組</th><th class='td2'>番</th><th class='td1'>氏名</th><th class='td2'>右上8</th><th class='td2'>右上7</th><th class='td2'>右上6</th><th class='td2'>右上5</th><th class='td2'>右上4</th><th class='td2'>右上3</th><th class='td2'>右上2</th><th class='td2'>右上1</th><th class='td2'>左上1</th><th class='td2'>左上2</th><th class='td2'>左上3</th><th class='td2'>左上4</th><th class='td2'>左上5</th><th class='td2'>左上6</th><th class='td2'>左上7</th><th class='td2'>左上8</th><th class='td2'>右上E</th><th class='td2'>右上D</th><th class='td2'>左上C</th><th class='td2'>左上B</th><th class='td2'>左上A</th><th class='td2'>右上A</th><th class='td2'>右上B</th><th class='td2'>右上C</th><th class='td2'>右上D</th><th class='td2'>右上E</th><th class='td2'>右下8</th><th class='td2'>右下7</th><th class='td2'>右下6</th><th class='td2'>右下5</th><th class='td2'>右下4</th><th class='td2'>右下3</th><th class='td2'>右下2</th><th class='td2'>右下1</th><th class='td2'>左下1</th><th class='td2'>左下2</th><th class='td2'>左下3</th><th class='td2'>左下4</th><th class='td2'>左下5</th><th class='td2'>左下6</th><th class='td2'>左下7</th><th class='td2'>左下8</th><th class='td2'>右下E</th><th class='td2'>右下D</th><th class='td2'>左下C</th><th class='td2'>左下B</th><th class='td2'>左下A</th><th class='td2'>右下A</th><th class='td2'>右下B</th><th class='td2'>右下C</th><th class='td2'>右下D</th><th class='td2'>右下E</th></tr></thead>"
				//25px*55+氏名50px+border56+1?
				for (let i = 1; i < strs.length-1; i++){
					//console.log(strs[i]);
					var tmp = strs[i].split(',');
					select+="<option value='"+strs[i]+"'>"+tmp[0]+"年"+tmp[1]+"組"+tmp[2]+"番"+tmp[3]+"</option>"
					hyou+="<tr><td class='td2'><input type='radio' name='check' value='"+i+"' onclick='alert(\""+tmp[3]+"\")'></td><td class='td2'>"+tmp[0]+"</td><td class='td2'>"+tmp[1]+"</td><td class='td2'>"+tmp[2]+"</td><td class='td1'>"+tmp[3]+"</td>"
					for(let j = 0; j < 52; j++) {
						hyou+="<td class='td2'>"+tmp[(j+4)]+"</td>"
					}
					hyou+="</tr>"
				}
				select+="</select>"
				hyou+="</table></div>"
				document.querySelector("#selectbox").innerHTML = select
				document.querySelector("#hyou").innerHTML = hyou
				FixedMidashi.create()
			}
		}
	};
	xhr.send(null);
}
function json(responce){
    let jsonArray = [];

    let RowArray = responce.split('\n');
    let items = RowArray[0].split(',');
    for(let i = 1; i < RowArray.length; i++){
        let cellArray = RowArray[i].split(',');
        let line = new Object();
        for(let j = 0; j < items.length; j++){
            line[items[j]] = cellArray[j];
        }
        jsonArray.push(a_line);
    }
    return jsonArray;
}

//-----------------------------------------------
function td_color(obj) {
	var cell = document.getElementById(obj);
	var targetElem = document.getElementsByName(obj)[0];
	if(targetElem.value==""){
		cell.style.backgroundColor = "";
		targetElem.style.backgroundColor = "";
	}else if(targetElem.value >=0){
		cell.style.backgroundColor = "#ffa500 ";
		targetElem.style.backgroundColor = "#ffa500 ";
	}else if(targetElem.value!=""){
		cell.style.backgroundColor = "#ffff00 ";
		targetElem.style.backgroundColor = "#ffff00 ";
	}else{
		cell.style.backgroundColor = "#ff0000";
		targetElem.style.backgroundColor = "#ff0000";
	}
}
//-----------------------------------------------
const selectFile = () => {
	const ary=['年','組','番','氏名','ur8','ur7','ur6','ur5','ur4','ur3','ur2','ur1','ul1','ul2','ul3','ul4','ul5','ul6','ul7','ul8','urE','urD','ulC','ulB','ulA','urA','urB','urC','urD','urE','sr8','sr7','sr6','sr5','sr4','sr3','sr2','sr1','sl1','sl2','sl3','sl4','sl5','sl6','sl7','sl8','srE','srD','slC','slB','slA','srA','srB','srC','srD','srE']
	const selectFiles = document.querySelector("#select-file").files
	const file = selectFiles[0]
	const reader = new FileReader()
	reader.readAsText(file, 'Shift_JIS')
	
	reader.onload = () => {
	//	document.querySelector("#output").innerHTML = reader.result
		let str= reader.result
		var strs = str.split('\r\n');
		var select="<select name='select' onchange='select()'><option value=''>（選択して下さい）</option>"
		var hyou="<div class='scr'><table _fixedhead='rows:1; cols:5' style='table-layout:fixed;width:100%;'><thead><tr class='header' style='background:#FFE4E1'><th class='td2'>check</th><th class='td2'>年</th><th class='td2'>組</th><th class='td2'>番</th><th class='td1'>氏名</th><th class='td2'>右上8</th><th class='td2'>右上7</th><th class='td2'>右上6</th><th class='td2'>右上5</th><th class='td2'>右上4</th><th class='td2'>右上3</th><th class='td2'>右上2</th><th class='td2'>右上1</th><th class='td2'>左上1</th><th class='td2'>左上2</th><th class='td2'>左上3</th><th class='td2'>左上4</th><th class='td2'>左上5</th><th class='td2'>左上6</th><th class='td2'>左上7</th><th class='td2'>左上8</th><th class='td2'>右上E</th><th class='td2'>右上D</th><th class='td2'>左上C</th><th class='td2'>左上B</th><th class='td2'>左上A</th><th class='td2'>右上A</th><th class='td2'>右上B</th><th class='td2'>右上C</th><th class='td2'>右上D</th><th class='td2'>右上E</th><th class='td2'>右下8</th><th class='td2'>右下7</th><th class='td2'>右下6</th><th class='td2'>右下5</th><th class='td2'>右下4</th><th class='td2'>右下3</th><th class='td2'>右下2</th><th class='td2'>右下1</th><th class='td2'>左下1</th><th class='td2'>左下2</th><th class='td2'>左下3</th><th class='td2'>左下4</th><th class='td2'>左下5</th><th class='td2'>左下6</th><th class='td2'>左下7</th><th class='td2'>左下8</th><th class='td2'>右下E</th><th class='td2'>右下D</th><th class='td2'>左下C</th><th class='td2'>左下B</th><th class='td2'>左下A</th><th class='td2'>右下A</th><th class='td2'>右下B</th><th class='td2'>右下C</th><th class='td2'>右下D</th><th class='td2'>右下E</th></tr></thead>"
		//25px*55+氏名50px+border56+1?
		for (let i = 1; i < strs.length-1; i++){
			//console.log(strs[i]);
			var tmp = strs[i].split(',');
			select+="<option value='"+strs[i]+"'>"+tmp[0]+"年"+tmp[1]+"組"+tmp[2]+"番"+tmp[3]+"</option>"
			hyou+="<tr><td class='td2'><input type='radio' name='check' value='"+i+"' onclick='alert(\""+tmp[3]+"\")'></td><td class='td2'>"+tmp[0]+"</td><td class='td2'>"+tmp[1]+"</td><td class='td2'>"+tmp[2]+"</td><td class='td1'>"+tmp[3]+"</td>"
			for(let j = 0; j < 52; j++) {
				hyou+="<td class='td2'>"+tmp[(j+4)]+"</td>"
			}
			hyou+="</tr>"
		}
		select+="</select>"
		hyou+="</table></div>"
		document.querySelector("#selectbox").innerHTML = select
		document.querySelector("#hyou").innerHTML = hyou
		FixedMidashi.create()
	}
	reader.onerror = () => {
		document.querySelector("#selectbox").innerHTML = "file error!"
	}
}
function select(){
	var options  = document.getElementsByName('select')[0].options;
	var str1=options[options.selectedIndex].text;
	var str2=options[options.selectedIndex].value;
	document.querySelector("#namae1").innerHTML =str1;
//	document.querySelector("#kekka").value =str2;
}
function chBxOn(check,s){
	var fg=check;
	for(count = 1; count <=8; count++){
		var str=s+"r"+count;
		var targetElem = document.getElementsByName(str)[0];
		var cell = document.getElementById(str);

		if(targetElem){
			if(fg=='false'){
				targetElem.value ="";
				targetElem.style.backgroundColor = "";
				cell.style.backgroundColor = "";
			}else if(fg=='true'){
				targetElem.value ="0";
				targetElem.style.backgroundColor = "#ffa500 ";
				cell.style.backgroundColor = "#ffa500";
			}
		}
		//------------------------
		var str=s+"l"+count;
		var targetElem = document.getElementsByName(str)[0];
		var cell = document.getElementById(str);
		if(targetElem){
			if(fg=='false'){
				targetElem.value ="";
				targetElem.style.backgroundColor = "";
				cell.style.backgroundColor = "";
			}else if(fg=='true'){
				targetElem.value ="0";
				targetElem.style.backgroundColor = "#ffa500 ";
				cell.style.backgroundColor = "#ffa500";
			}
		}
	}
}
function chBxOnC(check,s){
	const ary = ["","A","B","C","D","E"];
	var fg=check;
	for(count = 1; count <=5; count++){
		var str=s+"r"+count;
		str=str.replace(count,ary[count]);	//console.log(ary[count]);
		var targetElem = document.getElementsByName(str)[0];
		var cell = document.getElementById(str);

		if(targetElem){
			if(fg=='false'){
				targetElem.value ="";
				targetElem.style.backgroundColor = "";
				cell.style.backgroundColor = "";
			}else if(fg=='true'){
				targetElem.value ="0";
				targetElem.style.backgroundColor = "#ffa500 ";
				cell.style.backgroundColor = "#ffa500";
			}
		}
		//------------------------
		var str=s+"l"+count;
		str=str.replace(count,ary[count]);
		var targetElem = document.getElementsByName(str)[0];
		var cell = document.getElementById(str);
		if(targetElem){
			if(fg=='false'){
				targetElem.value ="";
				targetElem.style.backgroundColor = "";
				cell.style.backgroundColor = "";
			}else if(fg=='true'){
				targetElem.value ="0";
				targetElem.style.backgroundColor = "#ffa500 ";
				cell.style.backgroundColor = "#ffa500";
			}
		}
	}
}


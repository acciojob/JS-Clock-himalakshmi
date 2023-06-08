//your code here
function getTime(){
	const time = new Date();
	let dayString = `${time.getMonth()+1}/${time.getDate()}/${time.getFullYear()}`;
	let hr = time.getHours();
	let timeString="";
	if(hr>=12){
		if(hr===12){
			timeString=`${time.getHours()}:${time.getMinutes()}:${time.getSeconds()} PM`
		}
		else{
			h-=12;
			timeString=`${hr}:${time.getMinutes()}:${time.getSeconds()} PM`
		}
	}
	else{
		timeString=`${time.getHours()}:${time.getMinutes()}:${time.getSeconds()} AM`
	}
	return dayString+","+timeString;
}
const p = document.getElementById("timer");
function timer() {
	p.innerText = getTime();
}
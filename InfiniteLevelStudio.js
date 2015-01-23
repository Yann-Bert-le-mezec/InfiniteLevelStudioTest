var fs = require("fs");
var contenu;
var ni=0;
var niIncUrl=0;
var niIncDino=0;
var ninbDino=0;
var dinovalue=0;
var myArray = []; // Tableau primitif
var ArrayUrl=new Array;
var dynnno0=new Array;
var dynnno1=new Array;
var dynnno2=new Array;
var dynnno3=new Array;
var dynnno4=new Array;
var dynnno5=new Array;
var Arraynbrow= [];
var Averagetime= [];
var DinoMax=0;
ArrayUrl[0]='GET /api/users/{user_id}/count_pending_messages';
ArrayUrl[1]='GET /api/users/{user_id}/get_messages';
ArrayUrl[2]='GET /api/users/{user_id}/get_friends_progress';
ArrayUrl[3]='GET /api/users/{user_id}/get_friends_score';
ArrayUrl[4]='GET /api/users/{user_id}';
ArrayUrl[5]='POST /api/users/{user_id}';
Arraynbrow[0]=0;
Arraynbrow[1]=0;
Arraynbrow[2]=0;
Arraynbrow[3]=0;
Arraynbrow[4]=0;
Arraynbrow[5]=0;
Averagetime[0]=0;
Averagetime[1]=0;
Averagetime[2]=0;
Averagetime[3]=0;
Averagetime[4]=0;
Averagetime[5]=0;
//clean array;
niIncDino=0;
while (niIncDino<=14){
	dynnno0[niIncDino]=0;
	niIncDino++;
}	
niIncDino=0;
while (niIncDino<=14){
	dynnno1[niIncDino]=0;
	niIncDino++;
}	
niIncDino=0;
while (niIncDino<=14){
	dynnno2[niIncDino]=0;
	niIncDino++;
}	
niIncDino=0;
while (niIncDino<=14){
	dynnno3[niIncDino]=0;
	niIncDino++;
}	
niIncDino=0;
while (niIncDino<=14){
	dynnno4[niIncDino]=0;
	niIncDino++;
}	
niIncDino=0;
while (niIncDino<=14){
	dynnno5[niIncDino]=0;
	niIncDino++;
}	
//Read the sample file
contenu = fs.readFileSync("sample.log", "UTF-8");


//splite the file in row
var splitted = contenu.split('\n'); // On coupe à chaque fois qu'une virgule est rencontrée

 //while all the row are finish
while (ni<splitted.length){
	//splite between url
	if (splitted[ni].indexOf('GET path=/api/users/') >0)  {
		if (splitted[ni].indexOf('count_pending_messages') >0)  {
			Averagetime[0]+=splitted[ni].substring(splitted[ni].indexOf('connect=')+8, splitted[ni].indexOf('ms service=')) | 0;
			Averagetime[0]+=splitted[ni].substring(splitted[ni].indexOf('service=')+8, splitted[ni].indexOf('ms status=')) | 0;
			dinovalue=splitted[ni].substring(splitted[ni].indexOf('dyno=web.')+9, splitted[ni].indexOf(' connect=')) | 0;
			dynnno0[dinovalue]+=1;
			Arraynbrow[0]+=1;
		} else if (splitted[ni].indexOf('get_messages') >0) {
			Averagetime[1]+=splitted[ni].substring(splitted[ni].indexOf('connect=')+8, splitted[ni].indexOf('ms service=')) | 0;
			Averagetime[1]+=splitted[ni].substring(splitted[ni].indexOf('service=')+8, splitted[ni].indexOf('ms status=')) | 0;
			dinovalue=splitted[ni].substring(splitted[ni].indexOf('dyno=web.')+9, splitted[ni].indexOf(' connect=')) | 0;
			dynnno1[dinovalue]+=1;
			Arraynbrow[1]+=1;	
		}else if (splitted[ni].indexOf('get_friends_progress') >0) {
			Averagetime[2]+=splitted[ni].substring(splitted[ni].indexOf('connect=')+8, splitted[ni].indexOf('ms service=')) | 0;
			Averagetime[2]+=splitted[ni].substring(splitted[ni].indexOf('service=')+8, splitted[ni].indexOf('ms status=')) | 0;
			dinovalue=splitted[ni].substring(splitted[ni].indexOf('dyno=web.')+9, splitted[ni].indexOf(' connect=')) | 0;
			dynnno2[dinovalue]+=1;
			Arraynbrow[2]+=1;	
		}else if (splitted[ni].indexOf('get_friends_score') >0) {
			Averagetime[3]+=splitted[ni].substring(splitted[ni].indexOf('connect=')+8, splitted[ni].indexOf('ms service=')) | 0;
			Averagetime[3]+=splitted[ni].substring(splitted[ni].indexOf('service=')+8, splitted[ni].indexOf('ms status=')) | 0;
			dinovalue=splitted[ni].substring(splitted[ni].indexOf('dyno=web.')+9, splitted[ni].indexOf(' connect=')) | 0;
			dynnno3[dinovalue]+=1;
			Arraynbrow[3]+=1;	
		} else {
			Averagetime[4]+=splitted[ni].substring(splitted[ni].indexOf('connect=')+8, splitted[ni].indexOf('ms service=')) | 0;
			Averagetime[4]+=splitted[ni].substring(splitted[ni].indexOf('service=')+8, splitted[ni].indexOf('ms status=')) | 0;
			dinovalue=splitted[ni].substring(splitted[ni].indexOf('dyno=web.')+9, splitted[ni].indexOf(' connect=')) | 0;
			dynnno4[dinovalue]+=1;
			Arraynbrow[4]+=1;	
		}
	
	}else if (splitted[ni].indexOf('POST path=/api/users/') >0){
		Averagetime[5]+=splitted[ni].substring(splitted[ni].indexOf('connect=')+8, splitted[ni].indexOf('ms service=')) | 0;
		Averagetime[5]+=splitted[ni].substring(splitted[ni].indexOf('service=')+8, splitted[ni].indexOf('ms status=')) | 0;
		dinovalue=splitted[ni].substring(splitted[ni].indexOf('dyno=web.')+9, splitted[ni].indexOf(' connect=')) | 0;
		dynnno5[dinovalue]+=1;
		Arraynbrow[5]+=1;	
	}
	
	
	ni+=1;
}

niIncurl=0;
while (niIncurl<=5){
	niIncDino=1;
	DinoMax=0;
	//max dino per array
	while (niIncDino<=14){
		dinovalue=0
		if (niIncurl==0) {
			dinovalue=dynnno0[niIncDino];
		}else if (niIncurl==1){
			dinovalue=dynnno1[niIncDino];
		}else if (niIncurl==2){
			dinovalue=dynnno2[niIncDino];
		}else if (niIncurl==3){
			dinovalue=dynnno3[niIncDino];
		}else if (niIncurl==4){
			dinovalue=dynnno4[niIncDino];
		}else if (niIncurl==5){
			dinovalue=dynnno5[niIncDino];
		}
		if (dinovalue>=DinoMax) {
			DinoMax=dinovalue;
			ninbDino=niIncDino;
		}
		niIncDino++;
	}
	//display
	console.log('URL : '+ArrayUrl[niIncurl]+' number of time : '+ Arraynbrow[niIncurl]+' average : '+Math.round((Averagetime[niIncurl]/Arraynbrow[niIncurl])*100)/100+' dyno Max : '+ninbDino);
	niIncurl++
}

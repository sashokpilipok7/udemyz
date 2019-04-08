'use strict'

function prakt2(n,m){
	var arr = [];

	for(var i = 0; i < n ;i++){

		for(var j = 0; j < m; j++){

		}

	}

}

11 12 13 14 15 16

21 22 23 24 25 26

31 32 33 34 35 36

41 42 43 44 65 66


/*
function praktuchna(str){
	var arr = str.toLowerCase();
	alert(arr);
	var arr = arr.split("");
	arr.sort();
	arr = arr.join("");
	alert(arr);

}

praktuchna('Pilipenko');



/*
function mutation(arr) {
 var str1=arr[0].toLowerCase();
 var str2=arr[1].toLowerCase();
  str1.split("");
  str2.split("");
  var indicator=0;

  for(var i = 0; i< str2.length;i++){

    for(var j = 0;j < str1.length;j++){
   
      
      if(str2[i] == str1[j]){
        indicator+=1;
        break;
      }
    }

  }
  	alert(str1);
  	alert(str2);
  	alert(indicator);
  if(indicator == str2.length ){
      return true;
    }else{
      return false;
    }

}

mutation(["Mary", "Aarmy"]);

/*
function bouncer(arr) {
  
  var res=[];
  var j = 0;

  for(var i = 0; i < arr.legth ; i++){

    Boolean(arr[i]);
    alert(arr[i]);
    if(!arr[i]){

    }
    else{
      
       res[j] = arr[i];
    
      j++;
      
    }

  }
  alert(res);
  return res;
}

bouncer([7, "ate", "", false, 9]);

/*
function frankenSplice(arr1, arr2, n) {

 arr2.splice(n,0,arr1);
 alert(arr2);
  return arr2;
}

frankenSplice([1, 2], ["a", "b"], 1)



/*
function titleCase(str) {

  var cursor = 0;
  var str2 = str.split("");

  for( var i = 0; i<str2.length; i++ ){

    if(str2[i] != " " && cursor ==0){

      str2[i] = str2[i].toUpperCase();

      cursor=1;

    }
    else if(str2[i]==" " && cursor == 1){

      cursor = 0;

    }
    else if(str2[i] != "" && cursor == 1){

      str2[i] = str2[i].toLowerCase();

    }

  }
  str=str2.join("");
  return str;
}

titleCase("I'm a little tea pot");







/*
function repeatStringNumTimes(str, num) {
  var str2 = "";
  for(var i=0; i<num ;i++){
     str2+=str;
  }
  return str2;
}

repeatStringNumTimes("abc", 3);

*/



/*
function confirmEnding(str, target) {

var str2=str.slice(-target.length);

console.log(str2);

  if(str2 == target){
    
    return true;

  }else{

    return false;

  }

}

confirmEnding("Bastian", "n");*/


/*
function findLongestWordLength(str) {
  var cursor=0;
  var maxlength=0;
 var str2=str.split("");

  for(var i=0;i<str2.length;i++){
    if(str2[i]==" "){

     if(maxlength<cursor)
     maxlength = cursor;
     cursor=0;

    }else if(str2[str2.length] != " "){

    	cursor++;
    	if(maxlength<cursor)
     	maxlength = cursor;

    }else{

    	cursor++;

    }
  }
  console.log(maxlength); 
  return maxlength;
}

findLongestWordLength("What if we try a super-long word such as otorhinolaryngology");*/

/*
function largestOfFour(arr) {
  var max=-99999999999999999;
  var result=[];
  for(var i=0;i<arr.length;i++){
    for(var j=0;j<arr[i].length;j++){
      if(arr[i][j]>max){
        max=arr[i][j];
      }
    }
    result[i] = max;
    max =-99999999999999999;
  }
  return result;
}

largestOfFour([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]]);*/
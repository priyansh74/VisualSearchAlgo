//FRONT PAGE
$(".fadest").click(function(){
    $("#algo").fadeOut(1000).fadeIn(1000);
});
//Linear SEARCH
var key = 0;
var arr = [];
function clearscreen()
 {
   for(var r = 0; r < 10 ; r++)
   {
     var str3 = ".a" + r;
        $(str3).css("background-color","white");
   }
 }
$("#b1").click(function(){

clearscreen();
   for(var i = 0; i< 10 ; i++)
   {
     arr[i] = Math.floor(Math.random()*50);

   }

  for(i=0;i<10;i++){
   var str = ".a" + i;
      $(str ).text(arr[i]);
}
//Now get a key element randomly.
var z = Math.floor(Math.random()*10);
key = arr[z];
$(".hidden").text("Our key Element is : " + key );
$(".hidden").css("display","block");
});
$("#b2").click(function(){
  for(i=0;i<10;i++)
  {
 

   var str1 = ".a" + i;
   $(str1).css("background-color","lightblue");

   if(arr[i] == key)
   {
     $(str1).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
      $(str1).css("background-color","lightgreen");
       $(".hidden").text(" Key ("+ key  + "), Element found at index : " + i);
         $(str1).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
      break;
   }
   else
   {
     $(str1).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    $(str1).css("background-color","#fec8d8")
   }



}
});

//BINARY SEARCH
var arr2 = [];
var key2 = 0;
function clearscreen2()
 {
   for(var r = 0; r < 10 ; r++)
   {
     var str3 = ".b" + r;
        $(str3).css("background-color","white");
   }
 }
$("#b3").click(function(){

clearscreen2();
   for(var i = 0; i< 10 ; i++)
   {
     arr2[i] = Math.floor(Math.random()*50);

   }

arr2.sort(function(a, b){return a - b});
  for(i=0;i<10;i++){
   var str2 = ".b" + i;
      $(str2 ).text(arr2[i]);
}
//Now get a key element randomly.
var z1 = Math.floor(Math.random()*10);
key2 = arr2[z1];
$(".hidden1").text("Our key Element is : " + key2 );
$(".hidden1").css("display","block");
});

$("#b4").click(function(){
  var start=0;
  var end = arr2.length-1;
  var mid = 0;
  var flag = 0;
     while (start<=end && flag == 0){
      mid=Math.floor((start + end)/2);
       var strr = ".b" + mid;
     $(strr).fadeOut(100).fadeIn(1000).fadeOut(100).fadeIn(1000);
        $(strr).css("background-color","#fec8d8");
         if (arr2[mid]==key2)
          {
            $(strr).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);

            $(strr).css("background-color","lightgreen");
            $(".hidden1").text(" Key ("+ key2  + "), Element found at index : " + mid );
            flag = 1;
         }
         else if (arr2[mid] < key2)
            start = mid + 1;
         else
           end = mid - 1;
     }

});

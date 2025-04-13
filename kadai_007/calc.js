let num = 90;
 
//変数（num)が３と5の倍数である時、'３と5の倍数です'で出力する。
if ((num % 3 == 0) && (num % 5 == 0)) {
  console.log('３と5の倍数です');
}

/*if (num % 15 == 0) {
  console.log('3と5の倍数です');
}*/

else if (num % 3 == 0) {
  console.log('3の倍数です');
}

else if (num % 5 == 0) {
  console.log('5の倍数です');
}

else {
  console.log(num);
}
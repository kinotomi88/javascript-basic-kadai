//体重と身長の変数を宣言
let userWeight = 68;
let userHeight = 1.7;

//BMIを計算
let userHeightSquared = userHeight*userHeight //身長の2乗
let userBmi = userWeight　/　userHeightSquared //体重を身長の２乗で割る
 
//コンソールに出力
console.log(userBmi);
const printDate =()=> {
  const today = new Date(); // 今日の日付を取得
  const year = today.getFullYear(); // 年を取得
  const month = today.getMonth() + 1; // 月を取得（0〜11なので+1が必要）
  const day = today.getDate(); // 日を取得

  console.log(`${year}年${month}月${day}日`);
}

printDate(); // 関数を呼び出してコンソールに表示
const today = new Date();

const [month, day, year] = [
  today.getMonth() + 1 ,
  today.getDate(),
  today.getFullYear(),
];

console.log(year + '年' + month + '月' + day + '日');
/* [Quiz 1.] 
다음 요구사항을 만족하는 코드를 작성하세요

변수 num의 모든 약수를 다 찾아서 출력하세요
*/
let num = 100;
let result = [];
for (let i = 0; i < num.length; i++) {
   if (i / 2 === 0){
        result.push(i)
   }
    
}
console.log(result)
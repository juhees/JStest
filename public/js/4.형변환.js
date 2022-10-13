//형변환

//String() - 괄호안의 자료형을 문자형으로 변환
//Number() - 괄호안의 자료형을 숫자형을 변환 (문자가 포함되어 있을 시 NaN 반환)
//Boolean() - 괄호안의 자료형을 불린형으로 변환 (숫자0, 빈 문자열 '', null, undefined, NaN는 모두 false가 되고 그 이외엔 모두 true)


//형변환이 필요한 이유
//문자형 + 문자형 = 문자형
//숫자형 + 숫자형 = 숫자형
//만약 더하는 자료형이 다르다면 의도치않은 동작이 발생할 수 있다.

const mathScore = prompt("수학 몇점?");
const engScore = prompt("영어 몇점?");
const result = (mathScore + engScore) / 2;

console.log(result)
//입력한 두 숫자(90,80-)가 나란히 출력됨 (ex.454)
//prompt로 입력받은 값은 무조건 문자형임 . 그래서 입력받은 숫자 또한 숫자형이 아닌 문자형이었기 때문에 이상하게 출력됨
//그런데 왜 "9080"/2=4540 으로 제대로 계산이 된걸까? 나누기는 숫자형이 아니더라도 숫자형으로 자동변환해서 계산하기 때문
//문자 6 나누기 문자 2 는 3 이 나옴 ("6"/"2"=3)
// 이러한 과정을 "자동 형변환" 이라고 함.
//편리하다고 생각할수 있지만 원인을 찾기 힘든 에러를 발생시킬 수 있으므로 항상 의도를 가지고 원하는 타입으로 변환해주는게 좋음
//원하는 타입으로 변환하는걸 "명시적 형변환"이라고 한다.

//String
console.log(
  String(3),
  String(true),
  String(false),
  String(null),
  String(undefined),
)
//console.log는 쉼표를 이용해 여러가지 값을 한 번에 출력해볼 수 있다.
//출력하면 모두 문자형으로 변환되어 출력됨


//Number
//괄호안의 타입을 숫자형으로 바꿔줌
console.log(
  Number("1234")
)
//콘솔창을 확인해보면 1234로 숫자형으로 변환된걸 확인할 수 있음
console.log(
  Number("1234dsgadfa")
)
//위와 같이 문자형이 섞여 있으면 NaN이 뜸
//BUT 조금 특이하게 true 와 false는 Number로 형변환을 시키면 각각 1과 0이라는 값을 가지므로 기억해두기


//Boolean
//불린형으로 바꿔준다
//false의 케이스만 기억하면 됨
//숫자0, 빈 문자열 '', null, undefined, NaN -> 이 값들은 모두 false가 됨
//나머지는 모두 true가 됨


//주의사항-그냥 외우기
//Number(null) 은 0이 된다
//Number(undefined)는 NaN이 된다

//Number(0) //false
//Number('0') //true
//Number('') //false
//Number(' ') //true


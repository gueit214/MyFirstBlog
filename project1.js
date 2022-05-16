function dog(name,family,age){ //매게변수 name,family,age 받음
    this.name=name;
    this.family=family;
    this.age=age;
    this.type="dog";            //이 property는 모든 dog프로토타입이 가짐
}
var myDog=new dog("gggangdori","말티즈",10); //이 객체는 dog라는 프로토타입 가짐
document.write(myDog.name,myDog.family,myDog.age);
myDog.bark=function(){                      //method 선언
    document.write("War War");              
}
myDog.bark();                               //method 실행
document.write(myDog.type); 
dog.prototype.need="feed";                  //이렇게 property 선언 가능
document.write(myDog.need); 

document.write(Number.parseFloat("12 34 53ㅇㄹㅇㄹ ㅇㄹ"));

var str="abcdefg";
document.write(str[2]);
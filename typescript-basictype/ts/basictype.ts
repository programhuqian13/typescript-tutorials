/**
 * Created by xuanyi on 2017/11/6.
 * TypeScript 基础数据类型
 *      在TypeScript中，提供了很多有用的数据类型：
 *      number  数字
 *          和javascript中一样，typescript中的数字都是浮点数 除了十进制和十六进制意外，es2015还支持二进制和八进制数字
 *      boolean
 *          布尔值(true/false)  和javascript中一样的
 *      strings 字符串
 *          和javascript中的一样，string表示文本数据类型，使用双引号和单引号表示字符串
 *             在typescript中你可以使用模板字符串，他可以定义多行文本和内嵌表达式
 *              使用反单引号将字符串引起来，并且用${expre}这种形式嵌入表达式
 *      structures 结构体
 *      array  数组
 *          有两种方式创建数组：
 *              1.在元素类型后面直接加上[]
 *              2.使用泛型创建数组
 *      Tuple 元组
 *          元组类型允许表示一个已知元素数量和类型的数组，各元素的类型不必相同。
 *      Enum 枚举
 *          是对javascript中类型的一个补充
 *      Any
 *          当我们不知道编译阶段元素的相应的类型就可以用any
 *          与object类似,之恩给你给他父不同的值，但是却不能够在他上面调用任意方法，即便这个方法存在
 *      Void
 *          void和any正好相反，便是没有任何类型，通常用在function上面，元素上面的只能赋值为undefined和null 没有什么用处
 *      Null和Undefined
 *          默认情况下null和undefined是所有类型的子类型。 就是说你可以把 null和undefined赋值给number类型的变量。
 *      never
 *          never类型表示的是那些永不存在的值的类型
 *          never类型是那些总是会抛出异常或根本就不会有返回值的函数表达式或箭头函数表达式的返回值类型；
 *          变量也可能是 never类型，当它们被永不为真的类型保护所约束时。
 *          never类型是任何类型的子类型 也可以赋值给任何类型
 *          然而，没有类型是never的子类型或可以赋值给never类型（除了never本身之外）。 即使 any也不可以赋值给never。
 */

//定义一个boolean对象
let isDone: boolean = false;
console.log(isDone);

//number
let  decNumber: number = 16;
let hexNumber : number = 0xf00d;
let binNumber: number = 0b1010;
let octNumber : number = 0o744;

console.log("十进制数：" + decNumber +",十六进制数：" + hexNumber + ",二进制数：" + binNumber + ",八进制数：" + octNumber);

//string 字符串
let username: string = "tony"
username = "smith";
console.log("字符串：" + username);
let username1 : string = `Gren`;
let age : number = 37;
let sentece :string = `Hello world,my name is ${username1}.
        i'll be ${age + 1} years old next month
    `;
console.log("模板字符串：" + sentece);

//数组
let numArr : number [] = [1,2,3];

let numberArray : Array<number> = [1,2,3];

console.log("使用[]创建数组：" + numArr + ",使用泛型创建数组:" + numberArray+"这两种编译出来的js代码是一样的！");

//元组
//定义一个元组
let tuple : [string,number];  //定义一个元组元素，里面是string和number
tuple = ["hello",1234];  //编译通过
// tuple = [123,"hello"];  //将报错
console.log(tuple);
/***
 * 打印：
 *  0:"hello"
 *  1:1234
 *  有点像map数据
 */
//当访问一个已知索引的元素，会的到正确 的类型
console.log(tuple[0].substr(1));
//当访问一个越界的元素，将会使用联合类型替代
tuple[3] = "world";
// console.log(tuple[5].toString());  //这句报错Cannot read property 'toString' of undefined 但是toString方法number和string都有这个方法
// tuple[6] = true;  //boolean不是string和number类型

//枚举
/***
 * 编译为js
 * (function (Color) {
    Color[Color["RED"] = 0] = "RED";
    Color[Color["GREEN"] = 1] = "GREEN";
    Color[Color["BLUE"] = 2] = "BLUE";
    })(Color || (Color = {}));
 */
enum Color {RED,GREEN,BLUE}
let c : Color = Color.RED;
console.log(c);
//默认情况下是从0开始为元素编号，也可以手动执行成员的值
enum CoustomColor {RED=1,GREEN,BLUE}
let cons: CoustomColor = CoustomColor.RED;
console.log(cons);
//枚举类型提供的一个便利是你可以根据枚举值得到它的名字
enum CoustomColor2 {RED=1,GREEN = 2,BLUE=3}
let consStr: string = CoustomColor2[2]
console.log(consStr);

//Any
let andvalue :any = 4;
andvalue = "string value";
andvalue = false;
console.log(andvalue);
// andvalue.ifItExists();
// andvalue.toFixed();
//console.log(andvalue.ifItExists());//将报错 andvalue.ifItExists is not a function
// console.log(andvalue.toFixed());  //将报错 andvalue.toFixed is not a function
// let obj : object = 4;  //编译有错
//当只知道一部分数据的类型时，any类型也是有用的
let anyList : any[] = [1,"string",false];
anyList[1] = 500;
console.log(anyList);

//void
function waringUser():void{
    console.log("使用void只用于function,表示此函数没有任何返回类型");
}

waringUser();

//never
// 返回never的函数必须存在无法达到的终点
// function error(message: string): never {
//     throw new Error(message);
// }

// 推断的返回值类型为never
// function fail() {
//     return error("Something failed");
// }
// fail();  //Uncaught Error: Something failed
// 返回never的函数必须存在无法达到的终点
// function infiniteLoop(): never {
//     while (true) {
//     }
// }

//类型断言使用<>或者as进行类型转换
let someValue: any = "this is a string";

let strLength: number = (<string>someValue).length;
console.log(strLength)
let someValueas: any = "this is a string";

let strLengthas: number = (someValueas as string).length;
console.log(strLengthas)


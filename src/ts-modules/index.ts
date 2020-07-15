/* import { name } from "./b";
import { name as nameProp } from "./b";

import * as info from "./b";
// console.log(info);

import * as aData from "./a"
console.log(aData)

// 有副作用的导入，希望全局设置一些东西的时候
// import './a'

import cname from './c'

import dname = require('./d')
console.log(dname)

// 引入moment
// import moment from "moment"
// import * as moment from "moment"
import moment = require("moment")
console.log(moment) */

// 引入命名空间, 多个文件中定义的同名命名空间，最后都会合并成一个
/// <reference path="./letter-validation.ts" />
/// <reference path="./number-validation.ts" />
let isLetter = Validation.checkLetter("abc");
let isNumber = Validation.checkNumber("abc");
console.log(Validation)

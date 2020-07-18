// async 函数以及promise
// setTimeout(() => {
//   console.log(1);
// }, 1000);

// console.log(2);

function getIndex(bool: boolean) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(1);
      if (bool) {
        resolve("a");
      } else {
        reject(Error("error"));
      }
    }, 1000);
  });
}
// getIndex(false)
//   .then(() => {
//     console.log(2);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// async function asyncFunction() {
//   try {
//     const res = await getIndex(false);
//     console.log(res);
//   } catch (error) {
//     console.log(error);
//   }
// }
// asyncFunction();

interface Res {
  data: {
    [key: string]: any;
  };
}

namespace axios {
  export function post(url: string, config: object): Promise<Res> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log(`request url: ${url}`);
        let res: Res = { data: {} };
        if (url === "/login") {
          res.data.user_id = 111;
        } else {
          res.data.role = "admin";
        }
        resolve(res);
      }, 1000);
    });
  }
}

interface Info {
  user_name: string;
  password: string;
}
async function loginReq({ user_name, password }: Info) {
  try {
    const res = await axios.post("/login", {
      data: {
        user_name,
        password,
      },
    });
    return res;
  } catch (error) {
    console.log(error);
  }
}
async function getRoleReq(user_id: number) {
  try {
    const res = await axios.post("/user_roles", {
      data: {
        user_id,
      },
    });
    return res;
  } catch (error) {
    throw new Error(error);
  }
}
loginReq({ user_name: "nate", password: "123" }).then((res) => {
  const {
    data: { user_id },
  } = res;
  getRoleReq(user_id).then((res) => {
    const {
      data: { role },
    } = res;
    console.log(role);
  });
});
// tsconfig.json支持注释
// 动态导入表达式
async function getTime(format: string) {
  const moment = await import("moment");
  return moment.default().format(format);
}
getTime("L").then((res) => {
  console.log(res);
});

// 弱类型探测
interface ObjIn {
  name?: string;
  age?: number;
}
let objIn = {
  sex: "male",
};
function printInfo(info: ObjIn) {
  console.log(info);
}
// printInfo(objIn);

// ...操作符
// function mergeOptions(op1: object, op2: object) {
//   return { ...op1, ...op2 };
// }

function mergeOptions<T, U extends string>(op1: T, op2: U) {
  return { ...op1, op2 };
}
// console.log(mergeOptions({ a: "a" }, "name"));

function getExculdeProp<T extends { props: string }>(obj: T) {
  const { props, ...rest } = obj;
  return rest;
}
const obj13 = {
  props: "something",
  name: "nate",
  age: 18,
};
console.log(getExculdeProp(obj13));

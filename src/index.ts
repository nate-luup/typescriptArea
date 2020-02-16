console.log('hello word!')

interface encrypt{
    (key: string, value: string):string;
    (name: number, age: number):string;
}

const md5: encrypt = (key: string, value:string)=>{
    return key + value;
}
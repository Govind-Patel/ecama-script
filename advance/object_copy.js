// let obj = {
//     name :'peter'
// };
// let user = obj;
// user.name = 'jon ena';


// console.warn(obj)

let obj = {
    name:'peter'
};
// let user = Object.assign({},obj);
let user = {...obj};
user.name ="Bruce";

console.warn("object on object",obj);
console.warn("user obj",user)
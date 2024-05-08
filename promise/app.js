// let data = 1;
// console.log(data);

// data = 2;
// setTimeout(() => {
//     console.log("timer",data);
// }, 2000);

// // data = 3;
// console.log("data",data);

// let data = new Promise((resolved,reject) =>{
//     setTimeout(()=>{
//         // resolved("Dove have been excuite")
//         // resolved({name:"Govind",age:"25"})
//         reject("some issue")
//     })
// })

// data.then((data)=>{
//     console.log(data)
// }).catch((err)=>{
//     console.warn("catch block",err)
// })

// console.warn("hello")

// let data = fetch("http://dummy.restapiexample.com/api/v1/employees");
// data.then((item) => {
//   return item.json()
// }).data.then((result)=>{
//     console.warn(result)
// })

// let data = new Promise((resolved,reject) =>{
//     setTimeout(()=>{
        // resolved("Dove have been excuite")
        // resolved({name:"Govind",age:"25"})
        // resolved(10)
//     })
// })
// data.finally((item)=>{
//     console.warn("finally block",item)
// })

// data.then((item)=>{
//     console.warn("This block",item)
// }).catch((err)=>{
//     console.warn("catch block",err)
// })

let data = Promise.all([
    new Promise((resolved,reject)=>{
        setTimeout(() => {
            resolved("2 second")
        }, 2000);
    }),
    new Promise ((resolved,reject)=>{
        setTimeout(()=>{
            resolved("1st second")
        },1000)
    }),
    new Promise((resolved,reject)=>{
        setTimeout(()=>{
            resolved("4th second")
        },4000)
    })
])
data.then((item)=>{
    console.warn("the block",item)
}).catch((err)=>{
    console.warn("catch block",err)
})

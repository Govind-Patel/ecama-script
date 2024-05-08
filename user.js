export default function User(){
    console.log("Hellom User")
}

export function OtherUser(){
    console.warn("Hello other user");
}

export let UserVar = "Hello user var";

export class UserClass{
    test(){
        console.warn("user class the test function");
    }
}

class OtherUserClass{
    test(){
        console.log("other user class test function");
    }
}
export let UOC = new OtherUserClass();
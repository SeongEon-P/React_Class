export function printMe(){
    console.log("Hello World");
}

export const increseCallback=(number, callback)=>{
    setTimeout(()=>{
    const result=number+10;
    if(callback){
        callback(result);
    }
},1000);
} 

export const increasePromise=(number)=>{
    const promise=new Promise((response, reject)=>{
        setTimeout(()=>{
            const result=number+10;
            if(result >= 50){
                const e=new Error('NubmerToBig');
                return reject(e);
            }
            response(result)
        },1000);
    });
    return promise;
}

export const increaseAsync=(number)=>{
    const promise=new Promise((response, reject)=>{
        setTimeout(()=>{
            const result=number+10;
            if(result >= 50){
                const e=new Error('NubmerToBig');
                return reject(e);
            }
            response(result)
        },1000);
    });
    return promise;
}
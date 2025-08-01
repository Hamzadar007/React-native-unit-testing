const fetchData=async(failResponse=false)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
         if(failResponse){
            reject("Data not found")
         }
         else{
            resolve({name:"Hamza"})
         }
        },2000)
    })
}

module.exports=fetchData
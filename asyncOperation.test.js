const fetchData=require("./asyncOperation")

test("fetch data",()=>{
   return fetchData().then((res)=>{
     expect(res).toEqual({name:"Hamza"})
    })
})

test("fetch data async await",async()=>{
   let data= await fetchData()
   expect(data).toEqual({name:"Hamza"})
})

test("Fail fetch data async await",async()=>{
    expect.assertions(1)
    try {
         let data= await fetchData(true)
    } catch (error) {
         expect(error).toBe("Data not found")
    }
  
  
})
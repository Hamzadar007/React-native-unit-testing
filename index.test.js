const {multiply,sum}=require("./index")

//Test Suits



describe("Numbers multiply suit",()=>{
   it("2 into 5 equal 10",async()=>{
    expect(multiply(2,5)).toBe(10)
}) 

  it("2 into 5 not equal 4",async()=>{
    expect(multiply(2,5)).not.toBe(4)
}) 
})

describe("Numbers sum suit",()=>{
   it("2 plus 5 equal 7",async()=>{
    expect(sum(2,5)).toBe(7)
}) 

  it("2 plus 5 not equal 4",async()=>{
    expect(sum(2,5)).not.toBe(4)
}) 
})
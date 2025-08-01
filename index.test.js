const {multiply,sum}=require("./index")

//Test Suits



describe("Numbers multiply suit",()=>{
   it("2 into 5 equal 10",async()=>{
    expect(multiply(2,5)).toBe(10) // Exact equality for premitive data types
}) 

  it("2 into 5 not equal 4",async()=>{
    expect(multiply(2,5)).not.toBe(4)
}) 

})
test("Object equality",()=>{
    let data={alpha:"A"};
     data["beta"]="B"
     expect(data).toEqual({alpha:"A",beta:"B"}) //For object use Deep Equality ( Checks whether two values are structurally equal, even if they are different object instances)
     // const a = { name: 'John', age: 30 };
     // const b = { name: 'John', age: 30 };
     // Even though a !== b (different references), toEqual() sees they have the same content.
})

test("Exception matchers",()=>{
    function errorFunc() {
        throw new Error("File not found");
        
       
    }
     expect(errorFunc).toThrow()
     expect(errorFunc).toThrow("File not found")
})

test("function mocking",()=>{
    const mockFn=jest.fn(()=>true)
     mockFn()
    expect(mockFn).toHaveReturned()
})

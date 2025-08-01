const myModule=require("./spy")

test("spy function",()=>{
    const mySpyFunction=jest.spyOn(myModule,"myFunction")
     myModule.myFunction()
    expect(mySpyFunction).toHaveBeenCalled()
     mySpyFunction.mockRestore()

})
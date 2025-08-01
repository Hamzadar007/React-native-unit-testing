jest.mock("./mathUtils")
const calculator = require("./calculator")
const { add } = require("./mathUtils")



describe("Calcutor function mocking",()=>{
    it("add function mocking",()=>{
        calculator(1,2,"add")
        expect(add).toHaveBeenCalled()
        expect(add).toHaveBeenCalledWith(1,2)
    })
})
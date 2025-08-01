//Setup and TearDown
const arrayUtilModule=require("./arrayUtils")

let tempArray
beforeAll(()=>{
    console.log("Before all : initialize array")
    tempArray=[]
})

afterAll(()=>{
    console.log("After all : clear array")
    tempArray=null
})

beforeEach(()=>{
    console.log("Before each : initialize array")
    tempArray=[]
})

afterEach(()=>{
    console.log("After each : console array")
    console.log(tempArray)
})

test("setup and teardown on array",()=>{
  arrayUtilModule.addInArray(tempArray,"hamza")
  expect(tempArray).toContain("hamza")
})
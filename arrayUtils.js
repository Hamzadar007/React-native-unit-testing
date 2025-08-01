const addInArray=(array,item)=>{
    array.push(item)
    return array
}

const removeFromArray=(array,item)=>{
    const index=array.indexOf(item)
    if(index!=-1){
        array.splice(index,1)
    }
    return array
}

const arrayContain=(array,item)=>{
    return array.includes(item)
}

module.exports={arrayContain,removeFromArray,addInArray}
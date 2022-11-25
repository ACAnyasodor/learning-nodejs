const { readFile, writeFile } = require("fs");

readFile('./02-modules/one.txt','utf8',(err,result) => {
if(err){
    console.log(err)
    return
}
const read = result

const write = writeFile('./02-modules/two.txt',`${read} added this text`,(err,result) =>{
    if(err){
        console.log(err)
        return
    }
})

})




const yargs = require('yargs')


const https = require('https')

yargs.command({
    command:"show",
    builder:{
        url:{
            
            demandOption:true
        }
    },
    handler: function(argv){
        const req=https.request(yargs.url,(res)=>{
            let alldata=""
            res.on("data",(mydata)=>{
                alldata+=mydata.toString()
            })
            res.on("end",()=>{
               console.log(JSON.parse(alldata))
            })
        
        })
        req.on("error",(err)=>console.log(err))
        req.end()
        
    }
})

yargs.argv















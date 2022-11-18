const opSys = require('os')
const deets={
    user:opSys.userInfo(),
    type:opSys.type(),
    uptime:opSys.uptime(),
    release:opSys.release(),
    memory:opSys.totalmem()

}


console.log(deets)

const ws=require('ws').Server;
const wsServer=new ws({port:3000})
wsServer.on("connection",(w)=>{
  console.log("web server Connnected.")
  w.on("message",(msg)=>{
    console.log("Got a messege:",msg)
    w.send(msg)
  })
  w.on('close',()=>{
    console.log("web server connnection closed");
  })
})

wsServer.on('listening',()=>{
  console.log("web server connnected on localhost port 3000.")
})
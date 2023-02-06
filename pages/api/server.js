
const io = require("socket.io")( {
  cors: {
    origin: '*',
    methods: ["GET", "POST"],
  }
});


io.on("connection", (socket) => {

  
  // console.log("connected")

  socket.on("code", (data) => {
    // console.log("Received code from client:", data);
    socket.broadcast.emit("hello from server", { message: data })
  });

});


import { Server } from "socket.io";

const io = new Server();

io.on("connection", (socket) => {
  console.log("New connection");
});

io.listen(3001);

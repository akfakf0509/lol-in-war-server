import { App } from "uWebSockets.js";
import { Server } from "socket.io";

const app = App();
const io = new Server();

io.attachApp(app);

io.on("connection", (socket) => {
  console.log("New connection");
});

app.listen(3001, (token) => {
  if (!token) console.warn("Failed to listen to port 3001");
  console.log("Listening to port 3001");
});

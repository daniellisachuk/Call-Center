// socket init
$(document).ready(function() {
    //socket is global
    socket = io.connect();
    if(socket.connected){
      alert("connected");
    }
});

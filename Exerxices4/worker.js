addEventListener("message", function(event) {
  if (event.data === "start") {
    var now = new Date();
    postMessage(now);
    intervalID = setInterval(function() {
      var now = new Date();
      postMessage(now);
    }, 1000);
  }
  else if (event.data === "stop") {
    clearInterval(intervalID);
    }
});
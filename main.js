second = new Pointer(230, 60, "red", 1);
minute = new Pointer(200, 3600, "gray", 3);
hour = new Pointer(100, 43200, "black", 4);


setInterval(() => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  second.draw();
  minute.draw();
  hour.draw();
}, 1000);
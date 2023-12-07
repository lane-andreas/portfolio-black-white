window.addEventListener(
  "scroll",
  () => {
    document.body.style.setProperty(
      "--scroll",
      window.pageYOffset / (document.body.offsetHeight - window.innerHeight)
    );
  },
  false
);

document.addEventListener("DOMContentLoaded", function () {
  var cursor = document.createElement("div");
  cursor.className = "custom-cursor";
  document.body.appendChild(cursor);

  document.addEventListener("mousemove", function (e) {
    var x = e.clientX;
    var y = e.clientY;
    cursor.style.left = x + "px";
    cursor.style.top = y + "px";
  });
});

document.addEventListener("DOMContentLoaded", function () {
  var cursor = document.createElement("div");
  cursor.className = "custom-cursor-2";
  document.body.appendChild(cursor);

  var mouseX = 0;
  var mouseY = 0;
  var cursorX = 0;
  var cursorY = 0;

  function updateCursor() {
    var dx = mouseX - cursorX;
    var dy = mouseY - cursorY;

    var lagFactor = 0.1;

    cursorX += dx * lagFactor;
    cursorY += dy * lagFactor;

    cursor.style.left = cursorX + "px";
    cursor.style.top = cursorY + "px";

    requestAnimationFrame(updateCursor);
  }

  document.addEventListener("mousemove", function (e) {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  updateCursor();
});

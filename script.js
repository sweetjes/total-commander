var tcItems = document.querySelectorAll('.left_items .item');

document.addEventListener('keydown', function (e) {
  switch (e.keyCode) {
    case 37: // Left arrow 
      tcItems = document.querySelectorAll('.left_items .item');
      tcItems[0].focus();
      break;

    case 39: // Right arrow 
      tcItems = document.querySelectorAll('.right_items .item');
      tcItems[0].focus();
      break;

    case 38: // Up arrow
      for (var i = 0; i < tcItems.length; i++) {
        if (tcItems[i] == document.activeElement) {
          var index = parseInt(tcItems[i].getAttribute('tabindex'));
          index = index - 1;
          for (var j = 0; j < tcItems.length; j++) {
            if (tcItems[j].getAttribute('tabindex') == index.toString()) {
              tcItems[j].focus();
            }
          }
        }
      }
      break;

    case 40: // Down arrow 
      for (var i = tcItems.length; i >= 0; i--) {
        if (tcItems[i] == document.activeElement) {
          var index = parseInt(tcItems[i].getAttribute('tabindex'));
          index = index + 1;
          for (var j = 0; j < tcItems.length; j++) {
            if (tcItems[j].getAttribute('tabindex') == index.toString()) {
              tcItems[j].focus();
            }
          }
        }
      }
      break;
  }
})
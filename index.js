const keyVar = (function () {
    let xPos = 0;
    let yPos = 0;
    document.addEventListener('mousemove', (e) => {
      xPos = e.pageX;
      yPos = e.pageY;
    });
    function getXPos() {
      return xPos;
    }
    function getYPos() {
      return yPos;
    }
    return { getXPos, getYPos }
  })();
  
  window.addEventListener('scroll', () => {
    document.body.style.setProperty('--scroll', Math.min(window.scrollY / (window.innerHeight), 1));
  }, false);
  console.log("Done!");

  Math.max()
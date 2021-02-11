window.addEventListener("scroll", e => {
    // Dealing with Safari difference.
    // look into scrollingElement https://caniuse.com/#feat=document-scrollingelement
    let scrollTop = document.body.scrollTop ? document.body.scrollTop : document.documentElement.scrollTop; 
    let newPos = (scrollTop*-.2) + "px";
    document.documentElement.style.setProperty('--scrollPos', newPos);
    console.log(scrollTop);
  });
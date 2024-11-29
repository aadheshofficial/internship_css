var scroll = window.requestAnimationFrame ||
             function(callback){
                window.setTimeout(callback,1000/60);
             };
var elementToShow = document.querySelectorAll(".show-on-scroll");

function loop(){
    elementToShow.forEach(function(element){
        if(isElementInViewPort(element)){
            element.classList.add("is-visible");
        }
        else{
            element.classList.remove("is-visible");
        }
    });
    scroll(loop)
}
loop();

// Helper function from: http://stackoverflow.com/a/7557433/274826
function isElementInViewPort(el) {
    // special bonus for those using jQuery
    if (typeof jQuery === "function" && el instanceof jQuery) {
      el = el[0];
    }
    var rect = el.getBoundingClientRect();
    return (
      (rect.top <= 0
        && rect.bottom >= 0)
      ||
      (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.top <= (window.innerHeight || document.documentElement.clientHeight))
      ||
      (rect.top >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
    );
  }
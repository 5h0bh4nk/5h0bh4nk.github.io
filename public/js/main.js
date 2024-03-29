const easeOutBounce = (_, t, b, c, d) => {
  if ((t /= d) < 1 / 2.75) {
    return c * (7.5625 * t * t) + b;
  } else if (t < 2 / 2.75) {
    return c * (7.5625 * (t -= 1.5 / 2.75) * t + 0.75) + b;
  } else if (t < 2.5 / 2.75) {
    return c * (7.5625 * (t -= 2.25 / 2.75) * t + 0.9375) + b;
  }
  return c * (7.5625 * (t -= 2.625 / 2.75) * t + 0.984375) + b;
};


document.addEventListener("DOMContentLoaded",function(){
    new SweetScroll({
      duration: 1500
    })});
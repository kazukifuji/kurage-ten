export default {
  close: ( selector, startDelay = 0, endDelay = 0 ) => {
    const loadingScreen = document.querySelector(selector);

    setTimeout(() => {
      loadingScreen.classList.add('-close');
    }, startDelay);

    return new Promise(resolve => {
      setTimeout(() => { resolve(loadingScreen) },  startDelay + endDelay);
    });
  }
}
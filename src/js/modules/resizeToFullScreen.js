export default (selector) => {
  const target = document.querySelector(selector);
  target.style.height = window.innerHeight + 'px';
}
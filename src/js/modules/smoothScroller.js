export default ( anchorSelector, offsetY ) => {
  const anchor = document.querySelector(anchorSelector);
  const targetElem = document.querySelector(anchor.hash);

  anchor.addEventListener( 'click', e => {
    e.preventDefault();
    window.scrollTo({
      top: window.pageYOffset + targetElem.getBoundingClientRect().top + offsetY,
      behavior: 'smooth'
    });
  } );
}
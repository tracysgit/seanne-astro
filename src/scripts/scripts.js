"use strict";

(() => {
  const copyrightYear = new Date().getFullYear();
  const copyrightYearEl = document.querySelector('#copyright-date');

  if (copyrightYearEl) {
    copyrightYearEl.innerHTML = copyrightYear;
  }
})();



//---------- Hamburger Menu ----------//
// document.querySelector('.hamburger').addEventListener('click', () => {
//   document.querySelector('.mainnav-links').classList.toggle('mainnav-expanded');
//   // document.querySelector('.mainnav').classList.toggle('expanded');
// });
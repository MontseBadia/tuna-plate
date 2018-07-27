'use strict';

function main() {
  const claimInner = document.getElementsByClassName('claim-inner');
  const topBanner = document.getElementById('top-banner');

  window.setTimeout(() => {
    claimInner[0].classList.add('s2')
    topBanner.classList.add('bgPink');
  }, 2000);

  window.setTimeout(() => {
    claimInner[0].classList.add('s3')
  }, 4000);

  window.setTimeout(() => {
    claimInner[0].classList.add('s4')
  }, 6000);


  const button = document.getElementById('button');
  button.addEventListener('click', () => { scroll(0, 1000) });

}

window.addEventListener('load', main);
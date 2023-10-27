document.addEventListener('DOMContentLoaded', () => {
  let newBackgroundImageUrl = [
    'https://cdn.shopify.com/s/files/1/0832/6139/1134/files/on_wednesdays.png?v=1698407641',
    'https://cdn.shopify.com/s/files/1/0832/6139/1134/files/milk-flix.png?v=1698407634',
    'https://cdn.shopify.com/s/files/1/0832/6139/1134/files/different.png?v=1698407623',
  ];

  const backgroundElement = document.querySelector('.background');

  let timer;
  let continueTimer = true;
  let currentIndex = 0;

  function imgAndBackgroundChanger() {
    if (!continueTimer) {
      return; // Stop the timer if continueTimer is false
    }

    backgroundElement.style.backgroundImage =
      newBackgroundImageUrl[currentIndex];

    // Wait for the animation to finish and then reset
    setTimeout(() => {
      if (continueTimer) {
        timer = setTimeout(imgAndBackgroundChanger, 3000);
      }
    }, 500); // Adjust the delay to match the animation duration
  }
});

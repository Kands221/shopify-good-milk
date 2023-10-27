document.addEventListener('DOMContentLoaded', () => {
  let newBackgroundImageUrl = [
    'https://cdn.shopify.com/s/files/1/0832/6139/1134/files/in-my-milk-era.png?v=1698407322',
    'https://cdn.shopify.com/s/files/1/0832/6139/1134/files/on_wednesdays.png?v=1698407641',
    'https://cdn.shopify.com/s/files/1/0832/6139/1134/files/milk-flix.png?v=1698407634',
    'https://cdn.shopify.com/s/files/1/0832/6139/1134/files/different.png?v=1698407623',
  ];

  let newBottleImageUrl = [
    "{{'Fresh Milk Bottle.png' | asset_url}}",
    "{{'FRONT_STRAW.png' | asset_url}}",
    "{{'FRONT_CHOC.png' | asset_url}}",
    "{{'FRONT_PAN.png' | asset_url}}",
  ];
  let newButtonImageUrl = [
    "{{'FM_button.png' | asset_url}}",
    "{{'ST_button.png' | asset_url}}",
    "{{'CH_button.png' | asset_url}}",
    "{{'PA_button.png' | asset_url}}",
  ];

  const backgroundElement = document.querySelector('.background');
  const bottleElement = document.querySelector('.bottle');
  const buttonElement = document.querySelector('.fm-button'); // Select the button element by its class

  let timer;
  let continueTimer = true;
  let currentIndex = 0;

  function imgAndBackgroundChanger() {
    if (!continueTimer) {
      return; // Stop the timer if continueTimer is false
    }

    // Change background image
    backgroundElement.style.backgroundImage = `url('${newBackgroundImageUrl[currentIndex]}')`;

    // Change bottle image
    bottleElement.src = newBottleImageUrl[currentIndex];

    // Change button image
    buttonElement.src = newButtonImageUrl[currentIndex];

    // Increment currentIndex for the next images, cycling back to 0 if it exceeds array length
    currentIndex = (currentIndex + 1) % newBackgroundImageUrl.length;

    // Wait for the animation to finish and then reset
    setTimeout(() => {
      if (continueTimer) {
        timer = setTimeout(imgAndBackgroundChanger, 3000);
      }
    }, 500); // Adjust the delay to match the animation duration
  }

  // Call the function to start the background, bottle, and button image changing process
  imgAndBackgroundChanger();
});

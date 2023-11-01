document.addEventListener('DOMContentLoaded', () => {
  // get the list of track images
  const trackImages = document.querySelectorAll('.track-list img');

  // create an object that maps track IDs to their details
  const trackDetails: { [key: string]: string } = {
    software: 'Details for the software track.',
    health: 'Details for the health track.',
    piracy: 'Details for the piracy track.',
    renewable: 'Details for the renewable track.',
    testing: 'Details for the testing track.',
    hygiene: 'Details for the hygiene track.',
    brand: 'Details for the brand track.',
    other: 'Details for the other track.'
  };

  // loop through each image and add a mouseover event listener
  trackImages.forEach((image: HTMLImageElement) => {
    image.addEventListener('mouseover', () => {
      // create the overlay element
      const overlay = document.createElement('div');
      overlay.classList.add('overlay');

      // create the detail element and add it to the overlay
      const detail = document.createElement('div');
      detail.classList.add('detail');
      const trackId = image.getAttribute('id');
      const text = document.createTextNode(trackDetails[trackId]);
      detail.appendChild(text);
      overlay.appendChild(detail);

      // position the overlay on top of the image
      const imageRect = image.getBoundingClientRect();
      overlay.style.position = 'absolute';
      overlay.style.top = `${imageRect.top}px`;
      overlay.style.left = `${imageRect.left}px`;
      overlay.style.width = `${imageRect.width}px`;
      overlay.style.height = `${imageRect.height}px`;

      // append the overlay to the image parent element
      image.parentNode?.appendChild(overlay);
    });

    // add a mouseout event listener to remove the overlay
    image.addEventListener('mouseout', () => {
      const overlay = image.parentNode?.querySelector('.overlay');
      if (overlay) {
        overlay.remove();
      }
    });
  });
});

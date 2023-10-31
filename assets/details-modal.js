class DetailsModal extends HTMLElement {
  constructor() {
    super();
    this.detailsContainer = this.querySelector('details');
    this.summaryToggle = this.querySelector('summary');

    this.detailsContainer.addEventListener(
      'keyup',
      (event) => event.code.toUpperCase() === 'ESCAPE' && this.close(),
    );

    // Change 'click' event to 'mouseover' event
    this.summaryToggle.addEventListener('mouseover', this.open.bind(this));

    // Optional: Close the modal on mouseout
    this.summaryToggle.addEventListener('mouseout', this.close.bind(this));

    this.querySelector('button[type="button"]').addEventListener(
      'click',
      this.close.bind(this),
    );

    this.summaryToggle.setAttribute('role', 'button');
  }

  // Rest of the class remains the same
  open(event) {
    this.onBodyHoverEvent =
      this.onBodyHoverEvent || this.onBodyHover.bind(this);
    event.target.closest('details').setAttribute('open', true);
    document.body.addEventListener('mouseover', this.onBodyHoverEvent);
    document.body.classList.add('overflow-hidden');

    trapFocus(
      this.detailsContainer.querySelector('[tabindex="-1"]'),
      this.detailsContainer.querySelector('input:not([type="hidden"])'),
    );
  }

  close(focusToggle = true) {
    removeTrapFocus(focusToggle ? this.summaryToggle : null);
    this.detailsContainer.removeAttribute('open');
    document.body.removeEventListener('mouseover', this.onBodyHoverEvent);
    document.body.classList.remove('overflow-hidden');
  }

  onBodyHover(event) {
    // Check if the event target is inside the details container
    const isInsideDetails = this.detailsContainer.contains(event.target);

    // If not, close the details container
    if (!isInsideDetails) {
      this.close(false);
    }
  }
}

customElements.define('details-modal', DetailsModal);

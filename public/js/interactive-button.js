  class InteractiveButton extends HTMLElement {
    constructor() {
      super();
      const template = document.getElementById("interactive-button");
      const content = template.content;
      this.attachShadow({ mode: "open" }).appendChild(content.cloneNode(true));
      //this.shadowRoot.querySelector("#interactive-button-content");
    }
  }
  customElements.define("interactive-button", InteractiveButton);

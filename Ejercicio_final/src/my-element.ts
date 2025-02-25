import { LitElement, css, html } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("my-element")
export class MyElement extends LitElement {
  render() {
    return html`<p>Hola, Mundo!</p>`;
  }

  static styles = css``;
}

declare global {
  interface HTMLElementTagNameMap {
    "my-element": MyElement;
  }
}

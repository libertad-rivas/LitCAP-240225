import { css, html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("footer-page")
export class FooterPage extends LitElement {
  static styles = css`
    :host {
      position: fixed;
      bottom: 0;
      left: 0;
      right: 0;
      background-color: pink;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100px;

    }
    :host(:hover) {
      background-color: lightblue;
      box-shadow: 2px 4px 10px black;

    }

    footer {
      text-align: center;
      width: 100%;
      font-family: Verdana, Geneva, Tahoma, sans-serif;
      background-color: #000000;
      color: white;
    }
  `;

  render() {
    return html`
      <footer>
        <h2>Adiós.</h2>
        <h4>Atte: Footer</h4>
      </footer>
    `;
  }
}

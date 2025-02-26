import { css, html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("header-page")
export class HeaderPage extends LitElement {
  static styles = css`
    header {
      text-align: center;
      width: 100%;
      font-family: Verdana, Geneva, Tahoma, sans-serif;
    }

    :host {
      background-color: pink;
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 80px;
    }
    :host(:hover) {
      background-color: lightblue;
      box-shadow: 2px 4px 10px black;
    }
  `;

  render() {
    return html`
      <header>
        <h2>Bienvenidx, soy el header c:</h2>
        <h5>Lorem ipsum que de lo que iría en un header</h5>
      </header>
    `;
  }
}

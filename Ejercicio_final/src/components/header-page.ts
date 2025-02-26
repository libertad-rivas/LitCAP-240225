import { css, html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("header-page")
export class HeaderPage extends LitElement {
  static styles = css`
    header {
        text-align: center;
    }
    
    :host{
        background-color: pink;
        position: absolute;
        top: 0;
        left:0;
        right:0;

    }
  `;

  render() {
    return html`
      <header>
        <h1>Bienvenidx, soy el header c:</h1>
        <h2>Lorem ipsum que de lo que iría en un header</h2>
      </header>
    `;
  }
}

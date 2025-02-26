import { css, html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("footer-page")
export class FooterPage extends LitElement {
  static styles = css`
    :host {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;    
        background-color: pink;

    }

    footer{
        text-align: center;
    }

  `;

  render() {
    return html`
      <footer>
        <h1>Adiós.</h1> 
        <h3> Atte: Footer</h3>
      </footer>
    `;
  }
}

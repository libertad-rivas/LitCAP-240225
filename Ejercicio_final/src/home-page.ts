import { html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";
import "./header-page.ts";
import "./footer-page.ts";
import "./content-page.ts";


@customElement("home-page")
export class HomePage extends LitElement {
  render() {
    return html`
            <header-page></header-page>
            <content-page></content-page>
            <footer-page></footer-page>
        `;
  }
}

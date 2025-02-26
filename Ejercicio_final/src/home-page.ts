import { html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";
import "./components/header-page.ts";
import "./components/article-page.ts";
import "./components/footer-page.ts";


@customElement("home-page")
export class HomePage extends LitElement {
  render() {
    return html`
            <header-page></header-page>
            <article-page></article-page>
            <footer-page></footer-page>
        `;
  }
}

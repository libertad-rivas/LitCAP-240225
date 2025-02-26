import { css, html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("article-page")
export class ArticlePage extends LitElement {
  static styles = css`
    article {
      background-color: #93187bc5;
    }
  `;

  render() {
    return html`
      <article>
        <p>Hola</p>
      </article>
    `;
  }
}

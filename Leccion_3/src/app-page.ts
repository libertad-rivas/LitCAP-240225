import { css, html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("app-page")
class AppPage extends LitElement{

    static styles = css``;

    render() {
        return html`
            <app-header></app-header>
            <app-article></app-article>
            <app-footer></app-footer>

        `;
    }
}
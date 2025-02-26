import { html, LitElement } from "lit";
import { customElement, state } from "lit/decorators.js";
import "./home-page";
import "./login-page";

@customElement("root-page")
export class RootPage extends LitElement{


    @state()
    sesionActiva: boolean = false;

    connectedCallback() {
        super.connectedCallback();
        const user = localStorage.getItem("user");
        this.sesionActiva = !!user;
    }


    render() {
        return html`
        ${this.sesionActiva ? html `<home-page></home-page>` : html `<login-page></login-page>`}
        `;
    }
}
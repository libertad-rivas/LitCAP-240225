import { html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("login-page")
export class LoginPage extends LitElement{

    render() {
        return html`
            <header-page></header-page>
            <form-login></form-login>
            <footer-page></footer-page>
        `;
    }
}
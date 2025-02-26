import { html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";
import "./components/header-page.ts";
import "./components/form-login.ts";
import "./components/footer-page.ts";

@customElement("login-page")
export class LoginPage extends LitElement{

    

    connectedCallback() {
        super.connectedCallback();
        const user = localStorage.getItem("user");

        if(user){
            window.location.reload();
        }
    }

    render() {
        return html`
            <header-page></header-page>
            <form-login></form-login>
            <footer-page></footer-page>
        `;
    }
}
import { css, html, LitElement } from "lit";
import { customElement, state } from "lit/decorators.js";
import "./components/header-page.ts";
import "./components/article-page.ts";
import "./components/footer-page.ts";

@customElement("home-page")
export class HomePage extends LitElement {
  static styles = css`
    button{
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh; 
      width: 10%;
    } 

    :host {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh; 
      width: 100%;
    }

  `;

  @state()
  userEmail: string | null = null;

  connectedCallback() {
    super.connectedCallback();
    const user = localStorage.getItem("user");

    if (!user) {
      window.location.reload();
    } else {
      this.userEmail = JSON.parse(user).email;
    }
  }

  render() {
    return html`
      <header-page></header-page>
      <article-page></article-page>
      <footer-page></footer-page>
    `;
  }
}

import { css, html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("header-page")
export class HeaderPage extends LitElement {
  static styles = css`
    header {
      text-align: left;
      width: 100%;
      font-family: Verdana, Geneva, Tahoma, sans-serif;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 10px 20px;
      background-color: #000000;
      color: white;
    }

    :host {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 80px;
    }

    button {
      background-color: #ff3333;
      border: none;
      padding: 5px 15px;
      color: black;
      border-radius: 5px;
      border: 3px solid white;
    }

    button:hover {
      background-color: #D98324;
      color: white;
      box-shadow: 0px 0px 20px 1px white;
      border: 3px solid black;
    }
  `;

  get username() {
    const user = localStorage.getItem("user");
    return user ? JSON.parse(user).username : null;
  }

  _cerrarSesion() {
    localStorage.removeItem("user");
    window.location.reload();
  }

  render() {
    return html`
      <header>
        <h2>Bienvenidx, soy el header c:</h2>
        <div>
          ${this.username ? html`<p>Hola, ${this.username}!</p>` : ""}
          ${this.username
            ? html`<button @click="${this._cerrarSesion}">
                Cerrar sesión
              </button>`
            : ""}
        </div>
      </header>
    `;
  }
}

import { css, html, LitElement } from "lit";
import { customElement, state } from "lit/decorators.js";
import { emailValido, passwordValida } from "../utils/form-utils";
import "../home-page";

@customElement("form-login")
export class FormLogin extends LitElement {
  static styles = css`
    .cajaForm {
      margin: 130px 120px;
      background-color: #B7B1F2;
      padding: 20px;
      border-radius: 20px;
      width: 30%;
      box-shadow: 2px 4px 10px black;
      text-align: center;
      font-family: Verdana, Geneva, Tahoma, sans-serif;
    }
    input {
      background-color: #efc8ce;
      border-radius: 20px;
      border: 2px solid;
      padding: 5px;
    }
    
    button {
      font-family: Verdana, Geneva, Tahoma, sans-serif;
      background-color: #ffcc32;
      border-radius: 10px;
      padding: 10px;
      border: 2px solid black;
      color: black;
    }

    .error {
      color: red;
      border: 2px solid red;
    }

    .invalid:hover {
      background-color: red;
    }

    .valid:hover {
      background-color: #a7ff95;
    }

    .errorMsg {
      color: red;
      font-size: 12px;
    }

    :host {
      display: flex;
      justify-content: center;
      align-items: center;
      /* height: 100vh;  */
      width: 100%;
    }
  `;

  @state()
  username: string = "";

  @state()
  email: string = "";

  @state()
  password: string = "";

  @state()
  emailError: boolean = false;

  @state()
  passwordError: boolean = false;

  _cambioEmail(e: Event) {
    this.email = (e.target as HTMLInputElement).value;
    this.emailError = !emailValido(this.email);
  }

  _cambioContraseña(e: Event) {
    this.password = (e.target as HTMLInputElement).value;
    this.passwordError = !passwordValida(this.password);
  }

  _cambioUsername(e: Event) {
    this.username = (e.target as HTMLInputElement).value;
  }

  _manejandoLogin() {
    if (
      emailValido(this.email) &&
      passwordValida(this.password) &&
      this.username
    ) {
      localStorage.setItem(
        "user",
        JSON.stringify({ email: this.email, username: this.username })
      );

      window.location.reload();
    }
  }

  render() {
    const formInvalido: boolean =
      !emailValido(this.email) ||
      !passwordValida(this.password) ||
      !this.username;

    return html`
      <div class="cajaForm">
        <p>Username:</p>
        <input
          type="text"
          @change=${this._cambioUsername}
          .value=${this.username}
        />

        <p>Correo:</p>
        <input
          type="text"
          @change=${this._cambioEmail}
          .value=${this.email}
          class=${this.emailError ? "error" : ""}
        />
        ${this.emailError
          ? html` <p class="errorMsg">Ingresa un correo válido</p> `
          : ""}

        <p>Contraseña:</p>
        <input
          type="password"
          @change=${this._cambioContraseña}
          .value=${this.password}
          class=${this.passwordError ? "error" : ""}
        />
        ${this.passwordError
          ? html`<p class="errorMsg">Ingresa una contraseña válida</p>`
          : ""}

        <p>
          <button
            ?disabled=${formInvalido}
            class=${formInvalido ? "invalid" : "valid"}
            @click=${this._manejandoLogin}
          >
            Iniciar sesión
          </button>
        </p>
      </div>
    `;
  }
}

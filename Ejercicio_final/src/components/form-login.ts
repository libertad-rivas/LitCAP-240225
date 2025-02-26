import { css, html, LitElement } from "lit";
import { customElement, state } from "lit/decorators.js";
import { emailValido, passwordValida } from "../utils/form-utils";
import "../home-page";

@customElement("form-login")
export class FormLogin extends LitElement {

  static styles = css`
    input {
      background-color: #b4b0b0;
      border-radius: 20px;
      border: 2px solid;
      padding: 5px;
    }

    button {
      border-radius: 10px;
      padding: 10px;
      border: 2px solid black;
      background-color: #ffcc32;
      color: black;
    }

    .error {
      color: red;
      border: 2px solid red;
    }

    .invalid:hover {
      background-color: red;
    }

    .valid:hover{
        background-color: #a7ff95;
    }

    .errorMsg{
        color: red;
    }

    :host{
      display: flex;
      justify-content: center;
      align-items: center;
      /* height: 100vh;  */
      width: 100%;
    }

    .cajaForm{
      margin: 130px 120px;
      background-color: #e0eedfc5;
      padding: 20px;
      border-radius: 20px;
      width: 30%;
      box-shadow: 2px 4px 10px black;
      text-align: center;
      font-family: Verdana, Geneva, Tahoma, sans-serif;
    }
  `;



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

  _manejandoLogin(){
    if (emailValido(this.email) && passwordValida(this.password)){
      localStorage.setItem("user", JSON.stringify({email : this.email}));

      window.location.href = "../home-page.ts";
    }
  }

  render() {
    const formInvalido: boolean =
      !emailValido(this.email) || !passwordValida(this.password);

    return html`
      <div class="cajaForm">

        <p>Correo:</p>
        <input
          type="text"
          @change=${this._cambioEmail}
          .value=${this.email}
          class=${this.emailError ? "error" : ""}
        />
        ${this.emailError
          ? html` <p class="errorMsg">Ingresa un correo válida</p> `
          : ""}

        <p>Contraseña:</p>
        <input
          type="password"
          @change=${this._cambioContraseña}
          .value=${this.password}
          class=${this.passwordError ? "error" : ""}
        />

        <p>
          <button
            ?disabled=${formInvalido}
            class=${formInvalido ? "invalid" : "valid"}
            @click=${this._manejandoLogin}
          >
            Enviar
          </button>
        </p>
      </div>
    `;
  }
}

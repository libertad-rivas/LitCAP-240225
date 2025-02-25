// Generar un formulario con dos inputs, para correo y contraseña
// Dar feedback a user cuando no ponga correo en el input
// Cuando la info este correcta se habilita el botón login

// Componnete principal del form

import { css, html, LitElement } from "lit";
import { customElement, state } from "lit/decorators.js";
import { emailValido, passwordValida } from "./ej2-form-utils";

@customElement("login-form")
export class MyForm extends LitElement {
  static styles = css`
    .Apunte {
      text-align: center;
      border: 5px solid black;
      border-radius: 20px;
      background-color: #ffe7f7;
      padding: 10px;
      margin: 10px;
      font-family: "Helvetica";
    }

    input {
      background-color: #dbb1c7;
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

  render() {
    const formInvalido :boolean = !emailValido(this.email) || !passwordValida(this.password);

    return html`
      <div class="Apunte">
        <h1>Ejercicio 2</h1>
        <h2>Formulario</h2>

        <p>Correo:</p>
        <input
          type="text"
          @change=${this._cambioEmail}
          .value=${this.email}
          class=${this.emailError ? "error" : ""}
        />
        ${this.emailError? html `
            <p class = "errorMsg" > Ingresa un correo válida </p>
        `
             : ""}

        <p>Contraseña: </p>
        <input
          type="password"
          @change=${this._cambioContraseña}
          .value=${this.password}
          class=${this.passwordError ? "error" : ""}
        />

        <p>
          <button
            ?disabled=${formInvalido}
            class=${formInvalido ? "invalid" : "valid"}>
            Enviar
          </button>
        </p>
      </div>
    `;
  }
}

import { html, LitElement } from "lit";
import { customElement, state } from "lit/decorators.js";
import { emailValido, passwordValida } from "../utils/form-utils";

@customElement("form-login")
export class FormLogin extends LitElement {
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
    const formInvalido: boolean =
      !emailValido(this.email) || !passwordValida(this.password);

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
          >
            Enviar
          </button>
        </p>
      </div>
    `;
  }
}

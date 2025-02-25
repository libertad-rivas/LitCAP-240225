import { css, html, LitElement } from "lit";
import { customElement, property, state } from "lit/decorators.js";

// NOTA
// El nombre de mi componente debe constar de dos o más elementos elemento1-elemento2
@customElement("app-extensions")
export class Extensions extends LitElement {
  static styles = css`
    .btnEj1 {
      color: white;
      background-color: purple;
      padding: 8px;
      border: 2px solid black;
      border-radius : 100px;
    }
    .cajaEj1 {
      padding: 2px;
      margin: 5px;
    
    }
    .Ejercicio1, .Apunte{
      text-align: center;
      border: 5px solid black;
      padding : 30px;
      margin: 30px;
    }
    
:  `;

  @state()
  private numberEjercicio: number = 0;

  Aumentar() {
    this.numberEjercicio++;
  }

  Reducir() {
    this.numberEjercicio--;
  }

  @property({ type: Array })
  animals: Array<string> = ["dog", "cat", "lion"];

  render() {
    return html`
      <div class="Apunte">
        <div class="Ejercicio1">
          <h3>-- Ejercicio 1 --</h3>
          <p>
            Generar un elemento que aumente o disminuya según el botón utilizado
          </p>
          <button class="btnEj1" id="btnReducir" @click="${this.Reducir}">- 1</button>
          <span class="cajaEj1">${this.numberEjercicio}</span>
          <button class="btnEj1" id="btnAumentar" @click="${this.Aumentar}">+1</button>
        </div>
        <div class="Apunte">
          <p>Render list</p>

          <ul>
            ${this.animals.map((animal) => {
              return html` <li>${animal}</li>`;
            })}
          </ul>
        </div>
      </div>
    `;
  }
}

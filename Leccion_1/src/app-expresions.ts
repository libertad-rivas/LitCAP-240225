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

  @property()
  bodyText: string = "Test in child expression.";

  @property()
  label: string = "Cerrar";

  @property({
    type: Boolean,
  })
  editing: boolean = true;

  @property({
    type: Number,
  })
  value: number = 7;

  @property({
    type: Boolean,
  })
  condition: boolean = false;

  eventClick() {
    alert("Felicidades, sabes dar click c:");
  }

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
      <div class="Apunte" id="primerApunte">
        <h3>-- Primera parte del apunte --</h3>
        <div>Child expression: ${this.bodyText}</div>

        <button aria-label=${this.label}>>X<</button>

        <div>
          Boolean expresion.
          <input type="text" ?disabled=${!this.editing} />
        </div>

        <div>
          Property
          <input
            id="example-number"
            type="number"
            .valueAsNumber=${this.value}
          />
        </div>

        <div>
          Event
          <button @click="${this.eventClick}">Click me!</button>
        </div>

        <div>
          Render
          ${this.condition
            ? html`<p>Condition is true</p>`
            : html` <p>Condition is false</p>`}
        </div>
      </div>
      <div class="Ejercicio1">
        <h3>-- Ejercicio 1 --</h3>
        <p>
          Generar un elemento que aumente o disminuya según el botón utilizado
        </p>
        <button class="btnEj1" @click="${this.Reducir}">- 1</button>
        <span class="cajaEj1">${this.numberEjercicio} </span>
        <button class="btnEj1" @click="${this.Aumentar}">+1</button>
      </div>
      <div class="Apunte">
        <p>Render list</p>

        <ul>
          ${this.animals.map((animal) => {
            return html` <li>${animal}</li>`;
          })}
        </ul>
      </div>
    `;
  }
}

import { css, html, LitElement } from "lit";
import { customElement, state } from "lit/decorators.js";
import { fetchCardsTask } from "./ej4-card-utils";
import { map } from "lit/directives/map.js";

@customElement("card-list")
export class CardList extends LitElement {
  static styles = css`
    body {
      font-family: Arial, Helvetica, sans-serif;
    }

    .card {
      border: 2px solid black;
      margin: 10px;
      border-radius: 10px;
      text-align: center;
      box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
      background-color: pink;
      
    }

    .card img {
      max-width: 100%;
      border-radius: 9px 9px 0px 0 px;
    }

    .error {
      color: red;
    }
  `;

  @state()
  private _cardsTask = fetchCardsTask(this);

  render() {
    return html`
      <h1>Lista de tarjetas</h1>
      ${this._cardsTask.render({
        initial: () => html` <span> Esperando datos... </span>`,
        pending: () => html`<span> Cargando tarjetas... </span> `,
        complete: (cards) => html`
          ${map(
            cards,
            (card) => html`
              <div class="card">
                <img src="${card.image}" alt="${card.title}" />
                <h2> ${card.title}</h2>
                <p> ${card.description}</p>
              </div>
            `
          )}
        `,
        error: (e) =>
          html`<span class="error"> Error: ${(e as Error).message}</span>`,
      })}
    `;
  }
}

import { css, html, LitElement } from "lit";
import { customElement, state } from "lit/decorators.js";
import { fetchCardsTask } from "./ej4-card-utils";
import { map } from "lit/directives/map.js";

@customElement("card-list")
export class CardList extends LitElement {
  static styles = css`
    .card {
      border: 2px solid black;
      margin: 10px;
      border-radius: 10px;
      text-align: center;
    }

    .card img{
        height: 300px;
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
                <h2>Autor de la foto: ${card.title}</h2>
                <img src="${card.image}" alt="${card.title}" />
                <p>Medidas: ${card.description}</p>
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

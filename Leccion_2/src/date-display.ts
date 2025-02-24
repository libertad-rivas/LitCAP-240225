import { LitElement, html, PropertyValues } from "lit";
import { customElement, property, query } from "lit/decorators.js";
import { isSameDate } from "./date-utils.ts";

@customElement("date-display")
export class DateDisplay extends LitElement {
  @property({
    attribute: false,
    hasChanged: (value?: Date, oldValue?: Date) => {
      return !isSameDate(value, oldValue);
    },
  })
  date?: Date;

  @query("#datefield")
  datefield!: HTMLSpanElement;

  frames = [
    { backgroundColor: "#fff" },
    { backgroundColor: "#324fff" },
    { backgroundColor: "#fff" },
  ];

  render() {
    return html`<span id="datefield">${this.date?.toLocaleDateString()}</span>`;
  }

  updated(changed: PropertyValues<this>) {
    if (changed.has("date")) {
      this.datefield.animate(this.frames,1000)
    }
  }
  
}
import { css, html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("article-page")
export class ArticlePage extends LitElement {
  static styles = css`
    article {
      margin: 130px 120px;
      background-color: #B7B1F2;
      padding: 20px;
      border-radius: 20px;
      width: 30%;
      box-shadow: 2px 4px 10px black;
      text-align: center;
      font-family: Verdana, Geneva, Tahoma, sans-serif;
      transition: background-color 0.3s ease;
      border: 3px solid black
    }


    article:hover {
      background-color: #dc7cd4;
      box-shadow: 1px 1px 50px 5px #A31D1D;
      border: 3px solid white;
      color: white;
      /* box-shadow: h-offset v-offset blur spread color; */

    }
    
    img {
      width: 200px;
    }

    :host {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh; 
      width: 100%;
    }

  `;

  @property ({type: String, reflect:true})
  userEmail = "";

  render() {
    return html`
      <article>
        <img src="https://http.cat/images/429.jpg" alt="gatitos429" />
        <h2>Gatitos 429</h2>
        <p>Descripción: <br> Gatitos con status code 429: <strong> too many requests</strong></p>
      </article>
    `;
  }
}

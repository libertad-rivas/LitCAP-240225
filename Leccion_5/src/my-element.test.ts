import { expect, fixture } from "@open-wc/testing";
import { MyElement } from "./my-element";
import { html } from "lit";

export const msgError: string = "[001] - Parámetros incorrectos"


describe("Set de pruebas unitarias de MyElement", () => {
  it("should be true", () => {
    expect(true).eqls(true);
  });
  
  it("should be instance", async ()=>{
    let element:MyElement;
    element = await fixture(html `<app-element></app-element>`)
    expect(element).to.be.instanceOf(MyElement);
  });

  it("should add two numbers", async () => {
    let element: MyElement;
    element = await fixture(html `<app-element></app-element>`);

    expect(element.sum(10,5)).eqls(15);
  });

  it("should throw an error", async () => {
    let element: MyElement;
    element = await fixture(html `<app-element></app-element>`)
    let num2: any = "cinco";
    expect(()=> element.sum(10,num2)).to.throw(msgError);
  });

  it("should cotain HTML"), async () =>{
    let element: MyElement;
    element = await fixture(html `<app-element></app-element>`);
    expect(element).shadowDom.equal("<h1>Hola, Mundo!</h1>");
  }



});

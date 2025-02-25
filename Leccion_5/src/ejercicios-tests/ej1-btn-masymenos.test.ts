import { expect, fixture } from "@open-wc/testing";
import { Extensions } from "./ej1-btn-masymenos";
import { html } from "lit";

console.log("Set de pruebas unitarias de componente AppExtensions");

describe("Set de pruebas unitarias de componente AppExtensions", () => {

    it("[P001] - Should be an instance", async()=>{
        let element: Extensions;
        element = await fixture(html `<app-extensions></app-extensions>`);
        expect(element).to.be.instanceOf(Extensions);
    });
    
    it ("[P002] - Should increase numberEjercicio", async () => {
        let element: Extensions;
        element = await fixture(html `<app-extensions></app-extensions>`);
        
        // chechando valor inciial
        let span = element.shadowRoot?.querySelector("span.cajaEj1");
        expect(span?.textContent).to.equal("0");
        
        // click en btn aumentar
        const btnAumentar = element.shadowRoot?.querySelector("#btnAumentar") as HTMLButtonElement;
        btnAumentar.click();

        await element.updateComplete;
        
        // checar valor final
        span = element.shadowRoot?.querySelector("span.cajaEj1");
        expect(span?.textContent).to.equal("1");
    });

    it ("[P003] - Should decrease numberEjercicio", async () => {
        let element: Extensions;
        element = await fixture(html `<app-extensions></app-extensions>`);
        
        // chechando valor inciial
        let span = element.shadowRoot?.querySelector("span.cajaEj1");
        expect(span?.textContent).to.equal("0");
        
        // click en btn reducir
        const btnReducir = element.shadowRoot?.querySelector("#btnReducir") as HTMLButtonElement;
        btnReducir.click();

        await element.updateComplete;
        
        // checar valor final
        span = element.shadowRoot?.querySelector("span.cajaEj1");
        expect(span?.textContent).to.equal("-1");
    });
    
    
    it ("[P004] - Should show an animal list", async () => {
        let element: Extensions;
        element = await fixture(html `<app-extensions></app-extensions>`);

        let animalList = element.shadowRoot!.querySelectorAll("ul li");
        expect(animalList.length).to.equal(3);

        let animalTestList = ["dog", "cat", "lion"];

        animalList.forEach((value, index) =>{
            expect(value.textContent).to.equal(animalTestList[index]);
        });
        
    });


    // it ("", async () => {
    
    // });
});
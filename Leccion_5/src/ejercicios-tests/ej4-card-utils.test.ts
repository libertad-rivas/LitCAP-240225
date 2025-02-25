import { expect, fixture } from "@open-wc/testing";
import { CardList } from "./ej4-card-list";
import { html } from "lit";


describe.skip("Set de pruebas unitarias del componente CardList", () =>{


    it("[P01] - Should be an instance", async () => {
        let element : CardList;
        element = await fixture(html `<card-list></card-list>`)

        expect(element).to.be.instanceOf(CardList);
    })
    
    
}); //Describe


// it("", async () => {})
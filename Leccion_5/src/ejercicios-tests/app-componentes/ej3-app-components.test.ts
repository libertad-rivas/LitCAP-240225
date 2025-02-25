

import { expect, fixture } from '@open-wc/testing';
import { AppPage } from './app-page';
import { html } from 'lit';
import { AppArticle } from './app-article';
import { AppHeader } from './app-header';
import { AppFooter } from './app-footer';

describe("Pruebas unitarias del componente AppPage", () => {

    it("[P01] - should be instance", async () =>{
        let element : AppPage;
        element = await fixture(html `<app-page></app-page>`)
        
        expect(element).to.be.instanceOf(AppPage);
    });
    it("[P02] - should be instance", async () =>{
        let element : AppArticle;
        element = await fixture(html `<app-article></app-article>`)
        
        expect(element).to.be.instanceOf(AppArticle);
    });
    it("[P03] - should be instance", async () =>{
        let element : AppHeader;
        element = await fixture(html `<app-header></app-header>`)
        
        expect(element).to.be.instanceOf(AppHeader);
    });
    it("[P04] - should be instance", async () =>{
        let element : AppFooter;
        element = await fixture(html `<app-footer></app-footer>`)
        
        expect(element).to.be.instanceOf(AppFooter);
    });
    
    it("[P04] - Should render header HTML", async() =>{
        let element : AppHeader;
        element = await fixture(html `<app-header></app-header>`)
        
        expect(element).shadowDom.equal("<header><h1>Cabecera</h1></header>");
    });
    
    it("[P05] - Should render a footer HTML", async () => {
        let element : AppFooter;
        element = await fixture(html `<app-footer></app-footer>`)

        expect(element).shadowDom.equal("<footer></footer>");
    });
    
    it("[P06] - Should render an article HTML", async () => {
        let element : AppArticle;
        element = await fixture(html `<app-article></app-article>`)
      
        const p = element.shadowRoot?.querySelector("p");

        expect(p).exist;
        // expect(p).to.include(text);
    })

    it("[P07] - Should ", async () =>{
        let element : AppPage;
        element = await fixture(html `<app-page></app-page>`)

        expect(element.shadowRoot?.querySelector("app-header")).to.exist;
        expect(element.shadowRoot?.querySelector("app-footer")).to.exist;
        expect(element.shadowRoot?.querySelector("app-article")).to.exist;
        
        // expect(element).shadowDom.equal("<app-header></app-header><app-article></app-article><app-footer></app-footer>");

    })

});//describe
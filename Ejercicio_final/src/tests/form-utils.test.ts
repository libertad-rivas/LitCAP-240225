import { expect, fixture } from "@open-wc/testing";
import { html } from "lit";
import { HomePage } from "../home-page";
import { emailValido, passwordValida } from "../utils/form-utils";

describe("Set de pruebas unitarias del componente MyForm-utils", () => {

    it("[P01] - Should validate an email", async () => {
      let element: HomePage;
      element = await fixture(html`<login-form></login-form>`);
  
      const correctEmail: string = "lrivascedillo@gmail.com";
      const incorrectEmail: string = "lrjd@";
  
      expect(emailValido(correctEmail)).to.equal(true);
      expect(emailValido(incorrectEmail)).to.equal(false);
    });
  
    it("[P02] - Should validate a password", async () => {
      let element: HomePage;
      element = await fixture(html`<login-form></login-form>`);
  
      const correctPassword: string = "Pa$$w0rd";
      const incorrectPassword: string = "password";
  
      expect(passwordValida(correctPassword)).equal(true);
      expect(passwordValida(incorrectPassword)).equal(false);
  
    });
  
  
  }); //describe
import { expect, fixture } from "@open-wc/testing";
import { MyForm } from "./ej2-login-form";
import { html } from "lit";
import { emailValido, passwordValida } from "./ej2-form-utils";


describe.skip("Set de pruebas unitarias del componente MyForm-utils", () => {

  it("[P01] - Should validate an email", async () => {
    let element: MyForm;
    element = await fixture(html`<login-form></login-form>`);

    const correctEmail: string = "lrivascedillo@gmail.com";
    const incorrectEmail: string = "lrjd@";

    expect(emailValido(correctEmail)).to.equal(true);
    expect(emailValido(incorrectEmail)).to.equal(false);
  });

  it("[P02] - Should validate a password", async () => {
    let element: MyForm;
    element = await fixture(html`<login-form></login-form>`);

    const correctPassword: string = "Pa$$w0rd";
    const incorrectPassword: string = "password";

    expect(passwordValida(correctPassword)).equal(true);
    expect(passwordValida(incorrectPassword)).equal(false);

  });


}); //describe

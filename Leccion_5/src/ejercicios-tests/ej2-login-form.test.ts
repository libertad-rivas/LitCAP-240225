import { expect, fixture } from "@open-wc/testing";
import { MyForm } from "./ej2-login-form";
import { html } from "lit";


describe("Set de pruebas unitardias del componente MyForm", () => {

  it("[P01] - Should be a instance", async () => {
    let element : MyForm;
    element = await fixture(html `<login-form></login-form>`)

    expect(element).to.be.instanceOf(MyForm);
  });


  it ("[P02] - Should show an error if the email is invalid", async () => {
    let element : MyForm;
    element = await fixture(html `<login-form></login-form>`)

    element._cambioEmail({target: {value: "incorrecto"}} as unknown as Event)

    expect(element.emailError).equal(true);

  });

  it ("[P03] - Should show an error if the password is invalid", async () => {
    let element : MyForm;
    element = await fixture(html `<login-form></login-form>`)
    
    element._cambioContraseña({target: {value: "incorrecto"}} as unknown as Event)
    
    expect(element.passwordError).equal(true);
    
});

it ("[P04]- Should habilitate the button when email and password are valid", async () => {
      let element : MyForm;
      element = await fixture(html `<login-form></login-form>`)

    //   poniendo correos validos
    element._cambioEmail({target: {value: "lrivascedillo@gmail.com"}} as unknown as Event)
    element._cambioContraseña({target: {value: "Pa$$w0rd"}} as unknown as Event)

    await element.updateComplete; ///si no no se actualiza

    const btnForm = element.shadowRoot!.querySelector("button");
    expect(btnForm!.disabled).equal(false);

  });

  it ("[P05]- Should deshabilitate the button when email and password are not valid", async () => {
    let element : MyForm;
    element = await fixture(html `<login-form></login-form>`)

  //   poniendo correos validos
  element._cambioEmail({target: {value: "lrivasclomail.com"}} as unknown as Event)
  element._cambioContraseña({target: {value: "contras"}} as unknown as Event)

  await element.updateComplete; ///si no no se actualiza

  const btnForm = element.shadowRoot!.querySelector("button");
  expect(btnForm!.disabled).equal(true);

});




}); //describe

// it ("", async () => {});

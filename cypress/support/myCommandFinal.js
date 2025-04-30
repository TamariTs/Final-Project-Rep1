Cypress.Commands.add("registrationFinalP", (Userdatta)=>{
    cy.get('.menu-pop > .rprof').click()
    cy.get('.input-shablon > p > a').should("be.visible")
    cy.get('.input-shablon > p > a').click()
    cy.get(':nth-child(1) > .ismile').type(Userdatta.name)
    cy.get(':nth-child(2) > .imail').type(Userdatta.email).should("have.value", Userdatta.email)
    cy.get('.ipir').type(Userdatta.ID)
    cy.get(':nth-child(4) > .itel').type(Userdatta.phone)
    cy.get(':nth-child(5) > .ipass').type(Userdatta.password)
    cy.get('.reg-form-left > :nth-child(6) > .ipass').type(Userdatta.confirmPassword)
    cy.get('#Path_10302').click()
    //cy.get('.regsub').click()
}

)

Cypress.Commands.add("authorization", (Userdatta)=>{
cy.get('.menu-pop > .rprof').click()
     cy.get(':nth-child(5) > .imail').type(Userdatta.email).should("have.value", Userdatta.email)
     cy.get('.ipass').type(Userdatta.password)
     cy.get('.avtorization > .input-shablon > .form-button').click()
     cy.get('.menu-pop > .iprof > p').click().should("have.text", "პროფილი")}

    )

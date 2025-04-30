//1.დავალება „რეგისტრაცია“
describe('Final project', () => {
  before(()=>{
      cy.fixture("registrationFinal.json").as("Userdatta")
  })
  it('passes', function() {
    cy.visit('https://testzootopia.loremipsum.ge/ka')
    cy.registrationFinalP(this.Userdatta)

  })
})

// 2.დავალება „ავტორიზაცია“
describe('Final project', () => {
  before(()=>{
     cy.fixture("registrationFinal.json").as("Userdatta")  })
     it('passes', function () {
    cy.visit('https://testzootopia.loremipsum.ge/ka')
    cy.authorization(this.Userdatta)

  })})

//3.დავალება "კალათა"
describe('Final project', () => {
    it('passes', () => {
        cy.visit('https://testzootopia.loremipsum.ge/ka')
        cy.get('.pug > .seepro').click()
        cy.get(':nth-child(1) > h2 > a').should("be.visible")
        cy.get(':nth-child(1) > .price-cart > .product-cart').click()
        cy.get('.menu-pop > [href="https://testzootopia.loremipsum.ge/ka/cart"]').click()
        cy.get('.price-p').should("contain", "27 ₾")
        cy.get('.spinner > input').should("have.value", "1")
        cy.get('.sul').should("be.visible")


    })
})
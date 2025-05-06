//1. new user registration with correct details
describe('Registration Feature', () => {
  before(() => {
    cy.fixture("newUserRegistration.json").as("Userdatta")
  })
  it('should register succesfully', function () {
    cy.visit('https://testzootopia.loremipsum.ge/ka')
    cy.registrationFinalP(this.Userdatta)

  })
})

//2.Register User with mismatched password
describe('Registration Feature', () => {
  before(() => {
    cy.fixture("mismatchedPasswords.json").as("Userdata")
  })
  it('shows an error with mismatched Passwords', function () {
    cy.visit('https://testzootopia.loremipsum.ge/ka')
    cy.incorrectRegistration(this.Userdata)

  })
})

 // 3.Log in with correct credentials
describe('Login Feature', () => {
  before(() => {
    cy.fixture("newUserRegistration.json").as("Userdatta")
  })
  it('should log in successfully', function () {
    cy.visit('https://testzootopia.loremipsum.ge/ka')
    cy.authorization(this.Userdatta)

  })
})


//4.Login with invalid password
describe('Login Feature', () => {
  before(() => {
    cy.fixture("logInvalidPassword.json").as("Userdatta")
  })
  it('should show an error with invalid password', function () {
    cy.visit('https://testzootopia.loremipsum.ge/ka')
    cy.Incorrectauthorization(this.Userdatta)

  })
})

//5.add product to the cart
describe('Add to cart Feature', () => {
  it('should add product succesfully', () => {
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

 //6. Verify total price calculation in cart
describe('Add to cart Feature', () => {
  it('should show correct total price', () => {
    cy.visit('https://testzootopia.loremipsum.ge/en')
    cy.get('.pug > .seepro').click()
    cy.get(':nth-child(1) > h2 > a').click()
    cy.get('.plus').click()
    cy.get('.plus').click()
    cy.get('.plus').click()
    cy.get('.add-pro').click()
    cy.get('.menu-pop > [href="https://testzootopia.loremipsum.ge/en/cart"]').click()
    cy.get('.price-p').should("be.visible")
    cy.get('.spinner > input').should("have.value", "4")
    cy.get('.sul').should("be.visible")


  })
})
        
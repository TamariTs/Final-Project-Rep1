//1. new user registration with correct details
// describe('Final project', () => {
//   before(()=>{
//       cy.fixture("registrationFinal.json").as("Userdatta")
//   })
//   it('passes', function() {
//     cy.visit('https://testzootopia.loremipsum.ge/ka')
//     cy.registrationFinalP(this.Userdatta)

//   })
// })

//2.Register User with mismatched password
// describe('Final project', () => {
//   before(()=>{
//     cy.fixture("mismatchedPasswords.json").as("Userdata")
//  })
// it('passes', function() {
//     cy.visit('https://testzootopia.loremipsum.ge/ka')
//  cy.incorrectRegistration(this.Userdata)

//  })
//  })

// // 3.Log in with correct credentials
// describe('Final project', () => {
//   before(()=>{
//      cy.fixture("registrationFinal.json").as("Userdatta")  })
//      it('passes', function () {
//     cy.visit('https://testzootopia.loremipsum.ge/ka')
//     cy.authorization(this.Userdatta)

//   })})


//4.Login with invalid password
// describe('Final project', () => {
//   before(()=>{
//      cy.fixture("logInvalidPassword.json").as("Userdatta")  })
//      it('passes', function () {
//     cy.visit('https://testzootopia.loremipsum.ge/ka')
//     cy.Incorrectauthorization(this.Userdatta)

//    })})

//5.add product to the cart
// describe('Final project', () => {
//     it('passes', () => {
//         cy.visit('https://testzootopia.loremipsum.ge/ka')
//         cy.get('.pug > .seepro').click()
//         cy.get(':nth-child(1) > h2 > a').should("be.visible")
//         cy.get(':nth-child(1) > .price-cart > .product-cart').click()
//         cy.get('.menu-pop > [href="https://testzootopia.loremipsum.ge/ka/cart"]').click()
//         cy.get('.price-p').should("contain", "27 ₾")
//         cy.get('.spinner > input').should("have.value", "1")
//         cy.get('.sul').should("be.visible")


//     })
// })

 //6. Verify total price calculation in cart
// describe('Final project', () => {
//      it('passes', () => {
//         cy.visit('https://testzootopia.loremipsum.ge/en') 
//         cy.get('.pug > .seepro').click()
//         cy.get(':nth-child(1) > h2 > a').click()
//         cy.get('.plus').click()
//         cy.get('.plus').click()
//         cy.get('.plus').click()
//         cy.get('.add-pro').click()
//         cy.get('.menu-pop > [href="https://testzootopia.loremipsum.ge/en/cart"]').click()
//         cy.get('.price-p').should("be.visible")
//         cy.get('.spinner > input').should("have.value", "4")
//         cy.get('.sul').should("be.visible")



      
//       })
//          })
        
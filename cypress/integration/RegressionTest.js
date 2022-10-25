/// <reference types= "cypress" />

describe("Quales online course management Test suite",  () => {

it("Validate that quales online course management app launches successfully",  () => {
 //visiting the quales web app url
    cy.visit("http://tawdry-rule.surge.sh") 

 //assert that training field shows
 cy.contains('Training').should("be.visible")

 //assert that Courses field shows
 cy.contains('Courses').should("be.visible") 

 //assert that contact Us field shows
 cy.get('.css-19wv5ok > :nth-child(3)').should("be.visible")

 it("validate that a user can login successfully")

 //write cypress test
 cy.visit("http://tawdry-rule.surge.sh")
 //spy on the login button
 cy.get('.css-48p1y4 > .MuiButton-root')
 //click the login button
 .click()

 //spy on the email field
 cy.get('[data-testid=EmailAddress]')
 //type the email field
 .type("ayp@mail.com")

 //spy on the password field
 cy.get('[data-testid=Password]')
 //type the password field
 .type("pass1234")

 cy.get('.MuiButton-contained')
 .click()

 //assert login
 cy.get('.Toastify__toast-body > :nth-child(2)')
 .should("be.visible")

it("validate that user cannot login with incorrect details")
 //write cypress test
 cy.visit("http://tawdry-rule.surge.sh")

 //spy on the login button
 cy.get('.css-48p1y4 > .MuiButton-root')
 //click the login button
 .click()

 //spy on the email field
 cy.get('[data-testid=EmailAddress]')
 //type the email field
 .type("xxx@mail.com")

 //spy on the password field
 cy.get('[data-testid=Password]')
 //type the password field
 .type("pass1234")

 cy.get('.MuiButton-contained')
 .click()

 
  //assert login
 //spy login toast message
 cy.contains('Invalid Login Credential').should("be.visible")

 it("validate that user can add course successfully")
 //write cypress test
 cy.visit("http://tawdry-rule.surge.sh")

 //spy on the login button
 cy.get('.css-48p1y4 > .MuiButton-root')
 //click the login button
 .click()

 //spy on the email field
 cy.get('[data-testid=EmailAddress]')
 //type the email field
 .type("ayp@mail.com")

 //spy on the password field
 cy.get('[data-testid=Password]')
 //type the password field
 .type("pass1234")

 cy.get('.MuiButton-contained')
 .click()

 //spy on add course button
 cy.get('.MuiGrid-root > .MuiButton-root')
 .click()
 cy.viewport(1536, 960);


 //Spy on title
 cy.get('[data-testid="Title*"]')
 .type("QA")

 //spy on description
 cy.get('[data-testid="Description*"]')
 .type("cypress")

 //spy on category
 cy.get('#demo-simple-select')
 .click()

 cy.get('[data-value="1"]')
 .click()

 cy.get('[data-testid=isPremium]')
 .click()

 cy.get('[data-testid=offline]')
 .click()

 cy.get('[data-testid="Address*"]')
 .type("Quales learning")

 cy.get('.css-tzsjye > .MuiButton-root')
 .click()

 it("validate that user can logout successfully")
//spy on logout
cy.get('.MuiToolbar-root > .MuiButton-root')
 .click()



  

});

});

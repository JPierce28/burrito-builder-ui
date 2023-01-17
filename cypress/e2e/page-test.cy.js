describe('Full Test', () => {
  beforeEach(() => {
    cy.intercept("GET", 'http://localhost:3001/api/v1/orders', { 
      fixture: "../fixtures/example.json"
    })
    cy.visit("http://localhost:3000/")
  })
  it("Should have a title", () => {
    cy.contains("h1", "Burrito Builder")
  })
  it("Should display two delicious burrito orders with information", () => {
    cy.get(".order-container > :nth-child(1)").contains("Pat")
    cy.get(".order-container > :nth-child(1)").contains("beans")
    cy.get(".order-container > :nth-child(1)").contains("lettuce")
    cy.get(".order-container > :nth-child(1)").contains("carnitas")
    cy.get(".order-container > :nth-child(1)").contains("queso")
    cy.get(".order-container > :nth-child(1)").contains("jalapeno")
    cy.get(".order-container > :nth-child(2)").contains("Sam")
    cy.get(".order-container > :nth-child(2)").contains("steak")
    cy.get(".order-container > :nth-child(2)").contains("pico")
    cy.get(".order-container > :nth-child(2)").contains("lettuce")
    cy.get(".order-container > :nth-child(2)").contains("carnitas")
    cy.get(".order-container > :nth-child(2)").contains("queso")
    cy.get(".order-container > :nth-child(2)").contains("jalapeno")
  })
  it("Should display the form with the proper inputs", () => {
    cy.get(".form").within(() => {
      cy.get(".input-form")
      cy.contains("beans")
      cy.contains("steak")
      cy.contains("carnitas")
      cy.contains("sofritas")
      cy.contains("lettuce")
      cy.contains("queso fresco")
      cy.contains("pico de gallo")
      cy.contains("hot sauce")
      cy.contains("guacamole")
      cy.contains("jalapenos")
      cy.contains("cilantro")
      cy.contains("sour cream")
    })
  })
  it("Should display what the user has typed and the ingredients selected", () => {
    cy.get(".input-form").type("Josh").should("have.value", "Josh")
    cy.get("[name='beans']").click()
    cy.get(".selected-ing").contains("Order: beans")
  })
})
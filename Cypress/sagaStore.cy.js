/// <reference types="cypress" />

describe("Testing Saga Store", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
    cy.wait(3000);
  });
  it("Check Products API", () => {
    cy.request("GET", "http://localhost:3500/products").then((resp) => {
      expect(resp.status).equal(200);
      expect(resp.body.length).eq(8);
      cy.wait(3000);
    });
  });
  it("Check Sales API", () => {
    cy.request("GET", "http://localhost:3500/products_sale").then((resp) => {
      expect(resp.status).equal(200);
      expect(resp.body.length).eq(4);
      cy.wait(3000);
    });
  });
  it("Check Landing Page", () => {
    cy.contains("Saga Store");
    cy.wait(3000);
  });
  it("Check Search Bar Way1", () => {
    cy.get("#search").type("Lap");
    cy.wait(3000);
    cy.get(".searchBtn").click();
    cy.get("#search").clear();
    cy.contains("530 laptop").should("exist");
    cy.wait(3000);
    cy.get("#search").type("Sam");
    cy.wait(3000);
    cy.get(".searchBtn").click();
    cy.get("#search").clear();
    cy.contains("Samsung M 40").should("exist");
    cy.wait(3000);
  });
  it("Check Search Bar Way2", () => {
    cy.get("#search").type("Sam");
    cy.wait(3000);
    cy.get(".dropdown-row").first().click();
    cy.wait(3000);
    cy.get("#search").clear();
    cy.contains("Samsung M 40").should("exist");
    cy.wait(3000);
    cy.get("#search").type("Sam");
    cy.wait(3000);
    cy.get(".dropdown-row").first().next().click();
    cy.wait(3000);
    cy.get("#search").clear();
    cy.contains("Samsung F20").should("exist");
  });
  it("Categories Way1", () => {
    cy.get(".category").each((element, index, list) => {
      cy.wrap(element).trigger("click");
      if (index == 0) {
        cy.contains("Sports Shoes").should("exist");
      } else if (index == 1) {
        cy.contains("Samsung F20").should("exist");
      } else if (index == 2) {
        cy.contains("530").should("exist");
      } else {
        cy.contains("T-shirt").should("exist");
      }
      cy.wait(3000);
    });
  });
  it("Categories Way2", () => {
    cy.get('[ aria-label="Footwear Category"]').click();
    cy.contains("Sports Shoes").should("exist");
    cy.wait(3000);
    cy.get('[ aria-label="Mobile Category"]').click();
    cy.contains("Samsung F20").should("exist");
    cy.wait(3000);
    cy.get('[ aria-label="Laptop Category"]').click();
    cy.contains("530").should("exist");
    cy.wait(3000);
    cy.get('[ aria-label="Clothing Category"]').click();
    cy.contains("T-shirt").should("exist");
    cy.wait(3000);
  });
  it("Sales Page", () => {
    cy.get(".link").click();
    cy.wait(3000);
    cy.contains("Flash Sale");
    cy.log("Go back now");
    cy.get(".link").click();
    cy.wait(3000);
    cy.contains("Exclusive Products");
  });
  it("Add to Cart", () => {
    cy.get('[ aria-label="Add to Cart"]').click({ multiple: true });
    cy.get('[ aria-label="Products Count"]').contains(8);
    cy.wait(3000);
  });
  it("Remove from Cart", () => {
    cy.get('[ aria-label="Add to Cart"]').click({ multiple: true });
    cy.get('[ aria-label="Remove from Cart"]').first().click();
    cy.get('[ aria-label="Remove from Cart"]').last().click();
    cy.get('[ aria-label="Products Count"]').contains(6);
    cy.wait(3000);
  });
  it("Product Details Page", () => {
    cy.get(".product_link").first().click();
    cy.contains("Product details");
    cy.wait(3000);
    cy.get('[ aria-label="Products Count"]').contains(0);
    cy.wait(3000);
    cy.get(".btn2").click();
    cy.get('[ aria-label="Products Count"]').contains(1);
    cy.wait(3000);
  });
  it("Cart Details Page", () => {
    cy.get('[ aria-label="Add to Cart"]').first().click();
    cy.get('[ aria-label="Add to Cart"]').last().click();
    cy.wait(3000);
    cy.get('[ aria-label="Products Count"]').contains(2);
    cy.get('[ aria-label="Cart Img"]').click();
    cy.contains("Cart Details");
    cy.wait(3000);
  });
});

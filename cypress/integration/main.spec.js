describe('Main', () => {
  ['iphone-x', 'macbook-15'].forEach((preset) => {
    it(`successfully loads: ${preset}`, () => {
      cy.viewport(preset);
      cy.visit('/');
      cy.contains('Dmitriy Korneev');

      // github
      cy.get('a[aria-label="link to my github.com account"]')
        .should('have.attr', 'target', '_blank')
        .and('have.attr', 'href', 'https://github.com/Dm1Korneev');

      // freecodecamp
      cy.get('a[aria-label="link to my freecodecamp.org account"]')
        .should('have.attr', 'target', '_blank')
        .and('have.attr', 'href', 'https://www.freecodecamp.org/dm1korneev');

      // codepen
      cy.get('a[aria-label="link to my codepen.io account"]')
        .should('have.attr', 'target', '_blank')
        .and('have.attr', 'href', 'https://codepen.io/Dm1Korneev');

      // stackoverflow
      cy.get('a[aria-label="link to my stackoverflow.com account"]')
        .should('have.attr', 'target', '_blank')
        .and('have.attr', 'href', 'https://stackoverflow.com/users/6358115/Dmitriy-Korneev');

      // linkedin
      cy.get('a[aria-label="link to my linkedin.com account"]')
        .should('have.attr', 'target', '_blank')
        .and('have.attr', 'href', 'https://www.linkedin.com/in/dmitriy-korneev');

      // facebook
      cy.get('a[aria-label="link to my facebook.com account"]')
        .should('have.attr', 'target', '_blank')
        .and('have.attr', 'href', 'https://www.facebook.com/Dm1Korneev');

      // instagram
      cy.get('a[aria-label="link to my instagram.com account"]')
        .should('have.attr', 'target', '_blank')
        .and('have.attr', 'href', 'https://www.instagram.com/DmiKorneev');

      // vk
      cy.get('a[aria-label="link to my vk.com account"]')
        .should('have.attr', 'target', '_blank')
        .and('have.attr', 'href', 'https://vk.com/dmitriykorneev');

      // youtube
      cy.get('a[aria-label="link to my youtube.com account"]')
        .should('have.attr', 'target', '_blank')
        .and('have.attr', 'href', 'https://youtube.com/user/Dmikrneev');

      // email
      cy.get('a[aria-label="link for send email to me"]')
        .and('have.attr', 'href', 'mailto:Dm1Korneev@gmail.com');

      // cy.matchImageSnapshot();
    });
  });
});

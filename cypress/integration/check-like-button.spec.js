/* eslint-disable */

  it('check like button and adding to favorite movies ', () => {
    cy.server()
    cy.route('GET', 'https://api*/3/movie/popular*').as('APIGetPopularMovies')
    cy.route('POST', 'https://www.google*/*/v3/*/getAccountInfo*').as('APISuccessfullyLoggedIn')

    cy.visit('/movies')
      .wait('@APIGetPopularMovies', { timeout: 5000 })
      .then(({ status, response}) => {
        expect(status).to.eq(200, 'should receive popular movies data')
        expect(response.body).to.have.property('results')
      })
    // we check that we can't add movies when are not logged in
    cy.get('.heart-icon')
      .first()
      .click()

    cy.get('.notification.vue-notification.error').should('be.visible')
    // we log in
    cy.get('.user-icon')
      .click()

    cy.get('.login').should('be.visible')

    cy.get('input[type="text"]')
      .type('test@test.io')

    cy.get('input[type="password"]')
      .type('qwe123')

    cy.get('.login__button')
      .click()
    
    cy.wait('@APISuccessfullyLoggedIn')
      .then(({ status }) => {
        expect(status).to.eq(200, 'has succesfully logged in')
      })
    cy.get('.notification.vue-notification.success').should('be.visible')
    // and check again

    cy.get('.heart-icon')
      .first()
      .click()

      cy.get('.user-icon')
      .click()

      cy.get('.modal-body').should('be.visible')

      cy.get('[data-test="personal-cabinet-button"]')
        .click()

      cy.get('.personal-cabinet__options a')
      .click()

      cy.get('.single-movie').should('be.visible')  

      cy.get('.logo__link--medium')
        .click()

      cy.get('.logo__link--medium')
        .click()

      cy.location().should((loc) => {
        expect(loc.pathname).to.eq('/movies')
      })
  })
/* eslint-disable */

describe('popular movies view', () => {
  it('logs user in and out', () => {
    cy.server()
    cy.route('GET', 'https://api*/3/movie/popular*').as('APIGetPopularMovies')
    cy.route('POST', 'https://www.google*/*/v3/*/getAccountInfo*').as('APISuccessfullyLoggedIn')

    cy.visit('/movies')
      .wait('@APIGetPopularMovies', { timeout: 10000 })
      .then(({ status, response}) => {
        expect(status).to.eq(200, 'should receive popular movies data')
        expect(response.body).to.have.property('results')
      })

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

    cy.get('.user-icon') .should('have.class', 'active')

    // now check the log out process

    cy.get('.user-icon')
      .click()

    cy.get('.modal-body').should('be.visible')

    cy.get('button.is-info')
      .click()

    cy.get('.notification.vue-notification.success').should('be.visible')

    cy.get('.user-icon') .should('not.have.class', 'active')
  })
})

/* eslint-disable */

describe('popular movies view', () => {
  it('shows a list of popular movies', () => {
    cy.server()
    cy.route('GET', 'https://api*/3/movie/popular*').as('APIGetPopularMovies')
    cy.route('GET', 'https://api*/3/movie/3*').as('APIGetMovie')
    cy.route('GET', 'https://api*/3/movie/*/videos*').as('APIGetMovieVideo')
    cy.route('GET', 'https://api*/3/movie/*/similar*').as('APIGetSimilarMovies')

    cy.visit('/movies')
      .wait('@APIGetPopularMovies', { timeout: 10000 })
      .then(({ status, response}) => {
        expect(status).to.eq(200, 'should receive popular movies data')
        expect(response.body).to.have.property('results')
      })
    cy.get('[data-test="movie-link"]')
      .first()
      .click()
    
    cy.url('/movie/3*')
      .wait('@APIGetMovie')
      .then(({ status }) => {
        expect(status).to.eq(200, 'should receive single movie info')
      })
      .wait('@APIGetMovieVideo')
      .then(({ status }) => {
        expect(status).to.eq(200, 'should get movie trailer')
      })
      .wait('@APIGetSimilarMovies')
      .then(({ status }) => {
        expect(status).to.eq(200, 'should receive similar movies list')
      })

      cy.get('.logo__link--medium')
        .click()

      cy.location().should((loc) => {
        expect(loc.pathname).to.eq('/movies')
      })
  })
})
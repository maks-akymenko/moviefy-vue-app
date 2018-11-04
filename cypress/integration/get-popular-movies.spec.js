/* eslint-disable */

describe('popular movies view', () => {
  it('shows a list of popular movies', () => {
    cy.server()
    cy.route('GET', 'https://api*/3/movie/popular*').as('APIGetPopularMovies')

    cy.visit('/movies')
      .wait('@APIGetPopularMovies')
      .then(({ status, response}) => {
        expect(status).to.eq(200, 'should receive popular movies data')
        expect(response.body).to.have.property('results')
      })

  })
})

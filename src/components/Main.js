import React from 'react'
import PropTypes from 'prop-types'

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      />
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="Skill"
          className={`${this.props.article === 'Skill' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Skill</h2>
          <span className="image main" />
          <p>
            <ul>
              <li>Html,CSS3</li>
              <li>JavaScript</li>
              <li>Sass</li>
              <li>Linux</li>
              <li>Vue.js</li>
              <li>Laravel</li>
              <li>PHP</li>
              <li>Git</li>
            </ul>
          </p>
          <p />
          {close}
        </article>

        <article
          id="work"
          className={`${this.props.article === 'work' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Work</h2>
          <span className="image main" />
          <p>
            <h2>junior web developpeur</h2>
            <h3>BeCode Liège : 2018 - 2019</h3>
          </p>
          <ul>
            <li>Réalisation de projets de groupe et en autonomie</li>
            <li>
              Apprentissage autodidacte de plusieurs langages web comme JS,
              React.js, HTML, CSS
            </li>
            <li>Gestion de travail d'équipe en méthode SCRUM</li>
          </ul>
          {close}
        </article>

        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">A propos de moi:</h2>
          <span className="image main" />
          <p>
            Après avoir travaillé dans le domaine du bâtiment, j'ai opté pour
            une reconversion professionnelle en développement web. Je me
            passionne pour le front end qui me permet d'exploiter mes qualités
            artistiques et ma créativité. Je suis curieux d'apprendre de
            nouvelles technologies et langages afin de devenir plus polyvalent
            en m'inscrivant dans un projet artistiquement ambitieux.
          </p>
          <h2 className="major">Atouts:</h2>
          <p>
            Ponctuel - Convivial Consciencieux - Autonome Flexible -
            Facilitateur
          </p>
          <h2 className="major">Centre d'intérêt:</h2>
          <p>
            Jeux-vidéo, lecture, cinéma, tatouage, art, technologie web, voyage,
            design, manga, promenade, boxe, jeux de société, écouter de la
            musique.
          </p>
          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Contact</h2>
          <p>
            <strong>Tel</strong> : +32 492 95 02 29
            <br /> <strong>Mail</strong> : andykrausepro@gmail.com
          </p>
          <p />
          <ul className="icons">
            <li>
              <a
                href="https://www.facebook.com/andy.krause.758"
                className="icon fa-facebook"
              >
                <span className="label">Facebook</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/jinroh_ak/"
                className="icon fa-instagram"
              >
                <span className="label">Instagram</span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/krauseAndy"
                className="icon fa-github"
              >
                <span className="label">GitHub</span>
              </a>
            </li>
          </ul>
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main

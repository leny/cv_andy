import React from 'react'
import PropTypes from 'prop-types'

const Header = props => (
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
    <div className="logo">
      <span className="icon fa-laptop" />
    </div>
    <div className="content">
      <div className="inner">
        <h1>Andy Krause</h1>
        <p>
          « Mon propre cerveau m'apparaît comme la plus incompréhensible des
          machines - toujours à bourdonner, vrombir, planer, rugir, plonger, et
          finir embourbé dans la gadoue. Et pour quoi ? Pourquoi tant
          d'exaltation ? » <strong>Virginia Woolf.</strong>
        </p>
      </div>
    </div>
    <nav>
      <ul>
        <li>
          <a
            href="javascript:;"
            onClick={() => {
              props.onOpenArticle('Skill')
            }}
          >
            Skill
          </a>
        </li>
        <li>
          <a
            href="javascript:;"
            onClick={() => {
              props.onOpenArticle('work')
            }}
          >
            Work
          </a>
        </li>
        <li>
          <a
            href="javascript:;"
            onClick={() => {
              props.onOpenArticle('about')
            }}
          >
            About
          </a>
        </li>
        <li>
          <a
            href="javascript:;"
            onClick={() => {
              props.onOpenArticle('contact')
            }}
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
}

export default Header

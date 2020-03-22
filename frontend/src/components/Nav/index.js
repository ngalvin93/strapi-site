import React from "react";
import Query from "../Query";
import { Link } from "react-router-dom";
import UIkit from 'uikit'

import CATEGORIES_QUERY from "../../queries/category/categories";

const Nav = () => {

  const toggleMenu = () => {
    console.log('click')
    const menu = document.getElementById('offcanvas-menu')
    UIkit.offcanvas(menu).show()
  }

  return (
    <>
    {/* Hamburger menu button */}
    <nav className="uk-navbar uk-navbar-container" uk-navbar>
      <div>
        <h1>POST</h1>
      </div>
      <div className="uk-navbar-right">
        <a className="uk-navbar-toggle uk-icon" uk-icon="icon: menu; ratio:4" uk-navbar-toggle-icon uk-toggle href="#offcanvas-menu" onClick={ toggleMenu }></a>
      </div>
    </nav>
    {/* Slide in menu */}
    <div id="offcanvas-menu" uk-offcanvas="flip: true; esc-close: true; bg-close: true">
      <div class="uk-offcanvas-bar">
        <span class="uk-offcanvas-close uk-icon" uk-icon="icon: close; ratio:4" uk-close></span>
        <ul class="uk-nav uk-nav-default">
          <li class="uk-active"><a href="#">Active</a></li>
          <li class="uk-parent">
            <a href="#">Parent</a>
            <ul class="uk-nav-sub">
              <li><a href="#">Sub item</a></li>
              <li><a href="#">Sub item</a></li>
            </ul>
          </li>
          <li class="uk-nav-header">Header</li>
          <li><a href="#"><span class="uk-margin-small-right" uk-icon="icon: table"></span> Item</a></li>
          <li><a href="#"><span class="uk-margin-small-right" uk-icon="icon: thumbnails"></span> Item</a></li>
          <li class="uk-nav-divider"></li>
          <li><a href="#"><span class="uk-margin-small-right" uk-icon="icon: trash"></span> Item</a></li>
        </ul>
      </div>
    </div>
    </>
  );
};

export default Nav;

{/* <div>
      <Query query={CATEGORIES_QUERY} id={null}>
        {({ data: { categories } }) => {
          return (
            <div>
              <nav className="uk-navbar-container" data-uk-navbar>
                <div className="uk-navbar-left">
                  <ul className="uk-navbar-nav">
                    <li>
                      <Link to="/">POST</Link>
                    </li>
                  </ul>
                </div>

                <div className="uk-navbar-right">
                  <ul className="uk-navbar-nav">
                    {categories.map((category, i) => {
                      return (
                        <li key={category.id}>
                          <Link
                            to={`/category/${category.id}`}
                            className="uk-link-reset"
                          >
                            {category.name}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </nav>
            </div>
          );
        }}
      </Query>
    </div> */}

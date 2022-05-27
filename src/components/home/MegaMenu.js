import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class MegaMenu extends Component {
  MenuItemClick = (event) => {
    event.target.classList.toggle("active");
    let panel = event.target.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  };
  render() {
    return (
      <>
        <div className="accordionMenuDiv animated slideInDown">
          <div className="accordionMenuDivInside">
            <button onClick={this.MenuItemClick} className="accordion">
              <img
                alt=""
                className="accordionMenuIcon"
                src="https://cdn-icons-png.flaticon.com/128/7174/7174888.png"
              />{" "}
              Men's Fashion
            </button>
            <div className="panel">
              <ul>
                <li key="1">
                  <Link to="/"> Fashion 1 </Link>
                </li>
                <li key="1">
                  <Link to="/"> Fashion 2 </Link>
                </li>
                <li key="1">
                  <Link to="/"> Fashion 3 </Link>
                </li>
                <li key="1">
                  <Link to="/"> Fashion 4 </Link>
                </li>
              </ul>
            </div>
            <button onClick={this.MenuItemClick} className="accordion">
              <img
                alt=""
                className="accordionMenuIcon"
                src="https://cdn-icons-png.flaticon.com/128/7174/7174888.png"
              />{" "}
              Men's Fashion
            </button>
            <div className="panel">
              <ul>
                <li key="1">
                  <Link to="/"> Fashion 1 </Link>
                </li>
                <li key="1">
                  <Link to="/"> Fashion 2 </Link>
                </li>
                <li key="1">
                  <Link to="/"> Fashion 3 </Link>
                </li>
                <li key="1">
                  <Link to="/"> Fashion 4 </Link>
                </li>
              </ul>
            </div>
            <button onClick={this.MenuItemClick} className="accordion">
              <img
                alt=""
                className="accordionMenuIcon"
                src="https://cdn-icons-png.flaticon.com/128/7174/7174888.png"
              />{" "}
              Men's Fashion
            </button>
            <div className="panel">
              <ul>
                <li key="1">
                  <Link to="/"> Fashion 1 </Link>
                </li>
                <li key="1">
                  <Link to="/"> Fashion 2 </Link>
                </li>
                <li key="1">
                  <Link to="/"> Fashion 3 </Link>
                </li>
                <li key="1">
                  <Link to="/"> Fashion 4 </Link>
                </li>
              </ul>
            </div>
            <button onClick={this.MenuItemClick} className="accordion">
              <img
                alt=""
                className="accordionMenuIcon"
                src="https://cdn-icons-png.flaticon.com/128/7174/7174888.png"
              />{" "}
              Men's Fashion
            </button>
            <div className="panel">
              <ul>
                <li key="1">
                  <Link to="/"> Fashion 1 </Link>
                </li>
                <li key="1">
                  <Link to="/"> Fashion 2 </Link>
                </li>
                <li key="1">
                  <Link to="/"> Fashion 3 </Link>
                </li>
                <li key="1">
                  <Link to="/"> Fashion 4 </Link>
                </li>
              </ul>
            </div>
            <button onClick={this.MenuItemClick} className="accordion">
              <img
                alt=""
                className="accordionMenuIcon"
                src="https://cdn-icons-png.flaticon.com/128/7174/7174888.png"
              />{" "}
              Men's Fashion
            </button>
            <div className="panel">
              <ul>
                <li key="1">
                  <Link to="/"> Fashion 1 </Link>
                </li>
                <li key="1">
                  <Link to="/"> Fashion 2 </Link>
                </li>
                <li key="1">
                  <Link to="/"> Fashion 3 </Link>
                </li>
                <li key="1">
                  <Link to="/"> Fashion 4 </Link>
                </li>
              </ul>
            </div>
            <button onClick={this.MenuItemClick} className="accordion">
              <img
                alt=""
                className="accordionMenuIcon"
                src="https://cdn-icons-png.flaticon.com/128/7174/7174888.png"
              />{" "}
              Men's Fashion
            </button>
            <div className="panel">
              <ul>
                <li key="1">
                  <Link to="/"> Fashion 1 </Link>
                </li>
                <li key="1">
                  <Link to="/"> Fashion 2 </Link>
                </li>
                <li key="1">
                  <Link to="/"> Fashion 3 </Link>
                </li>
                <li key="1">
                  <Link to="/"> Fashion 4 </Link>
                </li>
              </ul>
            </div>
            <button onClick={this.MenuItemClick} className="accordion">
              <img
                alt=""
                className="accordionMenuIcon"
                src="https://cdn-icons-png.flaticon.com/128/1077/1077063.png"
              />{" "}
              Men's Fashion
            </button>
            <div className="panel">
              <ul>
                <li key="1">
                  <Link to="/"> Fashion 1 </Link>
                </li>
                <li key="1">
                  <Link to="/"> Fashion 2 </Link>
                </li>
                <li key="1">
                  <Link to="/"> Fashion 3 </Link>
                </li>
                <li key="1">
                  <Link to="/"> Fashion 4 </Link>
                </li>
              </ul>
            </div>
            <button onClick={this.MenuItemClick} className="accordion">
              <img
                alt=""
                className="accordionMenuIcon"
                src="https://cdn-icons-png.flaticon.com/128/1077/1077063.png"
              />{" "}
              Men's Fashion
            </button>
            <div className="panel">
              <ul>
                <li key="1">
                  <Link to="/"> Fashion 1 </Link>
                </li>
                <li key="1">
                  <Link to="/"> Fashion 2 </Link>
                </li>
                <li key="1">
                  <Link to="/"> Fashion 3 </Link>
                </li>
                <li key="1">
                  <Link to="/"> Fashion 4 </Link>
                </li>
              </ul>
            </div>
            <button onClick={this.MenuItemClick} className="accordion">
              <img
                alt=""
                className="accordionMenuIcon"
                src="https://cdn-icons-png.flaticon.com/128/1077/1077063.png"
              />{" "}
              Men's Fashion
            </button>
            <div className="panel">
              <ul>
                <li key="1">
                  <Link to="/"> Fashion 1 </Link>
                </li>
                <li key="1">
                  <Link to="/"> Fashion 2 </Link>
                </li>
                <li key="1">
                  <Link to="/"> Fashion 3 </Link>
                </li>
                <li key="1">
                  <Link to="/"> Fashion 4 </Link>
                </li>
              </ul>
            </div>
            <button onClick={this.MenuItemClick} className="accordion">
              <img
                alt=""
                className="accordionMenuIcon"
                src="https://cdn-icons-png.flaticon.com/128/1077/1077063.png"
              />{" "}
              Men's Fashion
            </button>
            <div className="panel">
              <ul>
                <li key="1">
                  <Link to="/"> Fashion 1 </Link>
                </li>
                <li key="1">
                  <Link to="/"> Fashion 2 </Link>
                </li>
                <li key="1">
                  <Link to="/"> Fashion 3 </Link>
                </li>
                <li key="1">
                  <Link to="/"> Fashion 4 </Link>
                </li>
              </ul>
            </div>
            <button onClick={this.MenuItemClick} className="accordion">
              <img
                alt=""
                className="accordionMenuIcon"
                src="https://cdn-icons-png.flaticon.com/128/1077/1077063.png"
              />{" "}
              Men's Fashion
            </button>
            <div className="panel">
              <ul>
                <li key="1">
                  <Link to="/"> Fashion 1 </Link>
                </li>
                <li key="1">
                  <Link to="/"> Fashion 2 </Link>
                </li>
                <li key="1">
                  <Link to="/"> Fashion 3 </Link>
                </li>
                <li key="1">
                  <Link to="/"> Fashion 4 </Link>
                </li>
              </ul>
            </div>
            <button onClick={this.MenuItemClick} className="accordion">
              <img
                alt=""
                className="accordionMenuIcon"
                src="https://cdn-icons-png.flaticon.com/128/1077/1077063.png"
              />{" "}
              Men's Fashion
            </button>
            <div className="panel">
              <ul>
                <li key="1">
                  <Link to="/"> Fashion 1 </Link>
                </li>
                <li key="1">
                  <Link to="/"> Fashion 2 </Link>
                </li>
                <li key="1">
                  <Link to="/"> Fashion 3 </Link>
                </li>
                <li key="1">
                  <Link to="/"> Fashion 4 </Link>
                </li>
              </ul>
            </div>
            <button onClick={this.MenuItemClick} className="accordion">
              <img
                alt=""
                className="accordionMenuIcon"
                src="https://cdn-icons-png.flaticon.com/128/1077/1077063.png"
              />{" "}
              Men's Fashion
            </button>
            <div className="panel">
              <ul>
                <li key="1">
                  <Link to="/"> Fashion 1 </Link>
                </li>
                <li key="1">
                  <Link to="/"> Fashion 2 </Link>
                </li>
                <li key="1">
                  <Link to="/"> Fashion 3 </Link>
                </li>
                <li key="1">
                  <Link to="/"> Fashion 4 </Link>
                </li>
              </ul>
            </div>
            <button onClick={this.MenuItemClick} className="accordion">
              <img
                alt=""
                className="accordionMenuIcon"
                src="https://cdn-icons-png.flaticon.com/128/1077/1077063.png"
              />{" "}
              Men's Fashion
            </button>
            <div className="panel">
              <ul>
                <li key="1">
                  <Link to="/"> Fashion 1 </Link>
                </li>
                <li key="1">
                  <Link to="/"> Fashion 2 </Link>
                </li>
                <li key="1">
                  <Link to="/"> Fashion 3 </Link>
                </li>
                <li key="1">
                  <Link to="/"> Fashion 4 </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </>
    );
  }
}

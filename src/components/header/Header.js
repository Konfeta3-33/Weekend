import React, { useState, useCallback } from "react";
import "./Header.css";
import {Collapse} from "react-collapse";
import Menu from "../Menu";
import logo from "./images/logo.png";
import searchIcon from "./icons/search.svg";
import favoriteIcon from "./icons/heart.svg";
import menuIcon from "./icons/bars.svg";
import igIcon from "./icons/ig.svg";
import vkIcon from "./icons/vk.svg";
import fbIcon from "./icons/fb.svg";
import okIcon from "./icons/ok.svg";

const Header = () => {
  const [menuActive, setMenuActive] = useState(false);

  const height = 35;

  const accessibilityIds = {
    button: 'accessible-marker',
    button2: 'accessible-marker2',
    button3: 'accessible-marker3'
  };

  const [isButtonCollapseOpen, setIsButtonCollapseOpen] = useState(false);
  const [isButton2CollapseOpen, setIsButton2CollapseOpen] = useState(false);
  const [isButton3CollapseOpen, setIsButton3CollapseOpen] = useState(false);

  const onClick = useCallback(
    () => setIsButtonCollapseOpen(!isButtonCollapseOpen),
    [isButtonCollapseOpen]
  );

  const onClick2 = useCallback(
    () => setIsButton2CollapseOpen(!isButton2CollapseOpen),
    [isButton2CollapseOpen]
  );

  const onClick3 = useCallback(
    () => setIsButton3CollapseOpen(!isButton3CollapseOpen),
    [isButton3CollapseOpen]
  );

  return (
    <header className="mb-3">
      <div className="flex justify-between">
        <div className="">
          <a href="/">
            <img src={logo} alt="logo" className="justify-self-start" style={{ width: 159 }}/>
          </a>
        </div>
        <div className="my-auto">
          <button
            className="focus:outline-none"
            aria-controls={accessibilityIds.button}
            aria-expanded={isButtonCollapseOpen}
            onClick={onClick}
            type="button">
            <img src={searchIcon} alt="search" className="inline-flex" style={{ width: 20 }}/>
          </button>
          <a href="/favorites" className="">
            <img src={favoriteIcon} alt="favorite" className="ml-4 inline-flex" style={{ width: 20 }}/>
          </a>
          <button
            className="focus:outline-none mr-4"
            onClick={() => setMenuActive(true)}
          >
            <img src={menuIcon} alt="menu" className="ml-4 inline-flex" style={{ width: 20 }}/>
          </button>
          <Menu active={menuActive} setActive={setMenuActive}>
            <ul className="list-none text-left p-5 pb-0">
              <li>
                <button
                className="focus:outline-none"
                aria-controls={accessibilityIds.button2}
                aria-expanded={isButton2CollapseOpen}
                onClick={onClick2}
                type="button">
                  Москва
                </button>
                <Collapse
                  isOpened={isButton2CollapseOpen}>
                  <ul className="list-none" id={accessibilityIds.button2}>
                    <li>
                      <a href="/">Екатеринбург</a>
                    </li>
                  </ul>
                </Collapse>
              </li>
              <li><a href="/">Главная</a></li>
              <li>
                <button
                  className="focus:outline-none"
                  aria-controls={accessibilityIds.button3}
                  aria-expanded={isButton3CollapseOpen}
                  onClick={onClick3}
                  type="button">
                  Категории
                </button>
                <Collapse
                  isOpened={isButton3CollapseOpen}>
                  <ul className="list-none" id={accessibilityIds.button3}>
                    <li>
                      <a href="/">Дома с детьми</a>
                    </li>
                    <li>
                      <a href="/">В город с детьми</a>
                    </li>
                    <li>
                      <a href="/">На природу с детьми</a>
                    </li>
                    <li>
                      <a href="/">День рождения ребенка</a>
                    </li>
                  </ul>
                </Collapse>
              </li>
            </ul>
            <ul className="list-none w-full flex px-5 justify-between items-center">
              <li className="inline-flex">
                <a href="//instagram.com/" target="_blank">
                  <img src={igIcon} alt=""/>
                </a>
              </li>
              <li className="inline-flex">
                <a href="//vk.com/" target="_blank">
                  <img src={vkIcon} alt=""/>
                </a>
              </li>
              <li className="inline-flex">
                <a href="//facebook.com/" target="_blank">
                  <img src={fbIcon} alt=""/>
                </a>
              </li>
              <li className="inline-flex">
                <a href="//ok.ru/" target="_blank">
                  <img src={okIcon} alt=""/>
                </a>
              </li>
            </ul>
          </Menu>
        </div>
      </div>
      <div className="block px-4">
        <Collapse
          isOpened={isButtonCollapseOpen} className="">
          <div style={{height}} id={accessibilityIds.button} className="blob">
            <form className="" action="">
              <input type="text" className="w-full bg-gray-100 rounded-md p-1" placeholder="Поиск"/>
            </form>
          </div>
        </Collapse>
      </div>
    </header>
  );
}

export default Header;

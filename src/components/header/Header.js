import React, {useCallback, useState} from "react";
import {useHistory} from 'react-router-dom';
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
import {ReactComponent as UpArrow} from "./icons/up.svg";
import {ReactComponent as DownArrow} from "./icons/down.svg";
import {ReactComponent as Close} from "./icons/close.svg";
import {useQuery} from 'react-query';
import {getCategories} from '../../helpers/requests';

const Header = ({city, setCity}) => {

  const history = useHistory();
  const [menuActive, setMenuActive] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsButtonCollapseOpen(!isButtonCollapseOpen);
    history.push(`/services/${searchValue}`);
    setSearchValue('');
  }

  const {data: categories} = useQuery("categories", getCategories);

  const accessibilityIds = {
    button: 'accessible-marker',
    button2: 'accessible-marker2',
    button3: 'accessible-marker3'
  };

  const [isButtonCollapseOpen, setIsButtonCollapseOpen] = useState(false);
  const [isButton2CollapseOpen, setIsButton2CollapseOpen] = useState(false);
  const [isButton3CollapseOpen, setIsButton3CollapseOpen] = useState(false);

  const onClick = useCallback(
      () => {
        setIsButtonCollapseOpen(!isButtonCollapseOpen);
      },
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
      <header className="mb-4">
        <div className="flex justify-between">
          <div className="">
            <a href="/">
              <img src={logo} alt="logo" className="justify-self-start" style={{width: 159}}/>
            </a>
          </div>
          <div className="my-auto">
            <button
                className="focus:outline-none"
                aria-controls={accessibilityIds.button}
                aria-expanded={isButtonCollapseOpen}
                onClick={onClick}
                type="button">
              <img src={searchIcon} alt="search" className="inline-flex" style={{width: 20}}/>
            </button>
            <a href={"/favorites"} className="">
              <img src={favoriteIcon} alt="favorite" className="ml-4 inline-flex" style={{width: 20}}/>
            </a>
            <button
                className="focus:outline-none mr-4"
                onClick={() => setMenuActive(true)}
            >
              <img src={menuIcon} alt="menu" className="ml-4 inline-flex" style={{width: 20}}/>
            </button>
            <Menu active={menuActive} setActive={setMenuActive}>
              <Close onClick={() => setMenuActive(false)} className="right-3 top-2 absolute"/>
              <ul className="list-none text-left p-5 pb-0">
                <li>
                  <button
                      className="focus:outline-none inline-flex items-center"
                      aria-controls={accessibilityIds.button2}
                      aria-expanded={isButton2CollapseOpen}
                      onClick={onClick2}
                      type="button">
                    {city ? city : 'Выбрать город'}
                    {isButton2CollapseOpen ? <UpArrow/> : <DownArrow/>}
                  </button>
                  <Collapse
                      isOpened={isButton2CollapseOpen}>
                    <ul className="list-none" id={accessibilityIds.button2}>
                      <li
                          className="ml-2 cursor-pointer"
                          onClick={() => {
                            setCity("Москва");
                            setIsButton2CollapseOpen(false);
                          }}
                      >
                        Москва
                      </li>
                      <li
                          className="ml-2 cursor-pointer"
                          onClick={() => {
                            setCity("Екатеринбург");
                            setIsButton2CollapseOpen(false);
                          }}
                      >
                        Екатеринбург
                      </li>
                    </ul>
                  </Collapse>
                </li>
                <li><a href="/">Главная</a></li>
                <li>
                  <button
                      className="focus:outline-none inline-flex items-center"
                      aria-controls={accessibilityIds.button3}
                      aria-expanded={isButton3CollapseOpen}
                      onClick={onClick3}
                      type="button">
                    Категории
                    {isButton3CollapseOpen ? <UpArrow/> : <DownArrow/>}
                  </button>
                  <Collapse
                      isOpened={isButton3CollapseOpen}>
                    <ul className="list-none" id={accessibilityIds.button3}>
                      {categories?.map((item) => (
                          item.isActive &&
                          <li key={item.id}>
                            <a href={`/categories/${item.id}`}>{item.name}</a>
                          </li>
                      ))}
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
              isOpened={isButtonCollapseOpen}>
            <div style={{height: "35px"}} id={accessibilityIds.button} className="blob">
              <form className="relative"
                    onSubmit={searchValue ? handleSubmit : () => setIsButtonCollapseOpen(!isButtonCollapseOpen)}>
                <input
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                    type="text"
                    className="px-4 py-2 w-full bg-gray-100 rounded-md"
                    placeholder="Поиск"
                    autoFocus={isButtonCollapseOpen}
                />
                <Close className="right-3 top-2 absolute" onClick={() => setSearchValue('')}/>
              </form>
            </div>
          </Collapse>
        </div>
      </header>
  );
}

export default Header;

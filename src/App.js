import React from 'react';
import logo from './logo.svg';
import ncc_logo from './ncc_logo.png';
import css_icon from './css_icon.png';
import html_icon from './html_icon.png';
import url_icon from './url_icon.png';
import menu_icon from './menu_icon.png';
import './App.css';
function useMediaQuery(query) {
  const getMatches = (query ) => {
    // Prevents SSR issues
    if (typeof window !== 'undefined') {
      return window.matchMedia(query).matches
    }
    return false
  }

  const [matches, setMatches] = React.useState(getMatches(query))

  function handleChange() {
    setMatches(getMatches(query))
  }

  React.useEffect(() => {
    const matchMedia = window.matchMedia(query)

    // Triggered at the first client-side load and if query changes
    handleChange()

    // Listen matchMedia
    if (matchMedia.addListener) {
      matchMedia.addListener(handleChange)
    } else {
      matchMedia.addEventListener('change', handleChange)
    }

    return () => {
      if (matchMedia.removeListener) {
        matchMedia.removeListener(handleChange)
      } else {
        matchMedia.removeEventListener('change', handleChange)
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query])

  return matches
}
const MOCK_DATA = [{
  id: 1,
  icon: css_icon,
  title: 'Lorem ipsum dolor sit amet',
  content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non dui sodales, faucibus libero ut, posuere felis. Donec imperdiet suscipit accumsan. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices liquam egestas nunc at ullamcorper ultricies. Donec feugiat velit nulla, vel sodales est ullamcorper id. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices vestibulum mattis.'
},
{
  id: 2,
  icon: html_icon,
  title: 'Lorem ipsum dolor sit amet',
  content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non dui sodales, faucibus libero ut, posuere felis. Donec imperdiet suscipit accumsan. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices liquam egestas nunc at ullamcorper ultricies. Donec feugiat velit nulla, vel sodales est ullamcorper id. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices vestibulum mattis.'
},
{
  id: 3,
  icon: url_icon,
  title: 'Lorem ipsum dolor sit amet',
  content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non dui sodales, faucibus libero ut, posuere felis. Donec imperdiet suscipit accumsan. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices liquam egestas nunc at ullamcorper ultricies. Donec feugiat velit nulla, vel sodales est ullamcorper id. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices vestibulum mattis.'
}]
const Sidebar = () => {
  return (
    <div class="sidebar">
      <ul>
        <li>
          <a href="#" class="active">
            <span class="item">Home</span>
          </a>
        </li>
        <li>
          <a href="#">
            <span class="item">Services</span>
          </a>
        </li>
        <li>
          <a href="#">
            <span class="item">News</span>
          </a>
        </li>
        <li>
          <a href="#">
            <span class="item">Blog</span>
          </a>
        </li>

        <li>
          <a href="#">
            <span class="item">Contact</span>
          </a>
        </li>
      </ul>
    </div>
  )
}
const BottomView = () => {
  return (
    <div className="bottom-content-wrapper" >
      {MOCK_DATA.map(item => {
        return (
          <div class="bottom-content" >
            <h3>{item.title}</h3>
            <div class="img-wrapper" >
              <img src={item.icon} />
            </div>
            <p>{item.content}</p>
          </div>
        )
      })}
    </div>
  )
}
function App() {
  const TMP_TEXT = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tristique consequat placerat. Vestibulum auctor pellentesque sem, eu\nposuere erat hendrerit quis. Maecenas vel consequat turpis. Nam facilisis, ligula in mattis sodales, augue justo tristique nulla, sed lacinia\nante eros ut mi. Morbi vitae diam augue. Aliquam vel mauris a nibh auctor commodo. Praesent et nisi eu justo eleifend convallis. Quisque\nsuscipit maximus vestibulum. Phasellus congue mollis orci, sit amet luctus augue tristique eu. Donec vulputate odio neque, sed semper\nturpis pellentesque a."
  const [isVisible, setIsVisible] = React.useState(true);
  const matches = useMediaQuery('(min-width: 1024px)')
  return (
    <div className="App">
      {(isVisible||matches) && <Sidebar />}
      <img onClick={() => {
        setIsVisible(!isVisible);
      }} src={menu_icon} class="icon-menu" />
      <main class="main-content" >
        <img src={ncc_logo} alt="logo" class="nccLogo" />
        <div class="text-view">
          <h3 class="title">Lorem ipsum dolor sit asmet?</h3>
          <p>{TMP_TEXT}</p>
        </div>
        <BottomView />
      </main>
      <footer className="footer-wrapper" >
        <h3>Copyright © 2021</h3>
      </footer>
    </div>
  );
}

export default App;

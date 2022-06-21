import logo from './logo.svg';
import ncc_logo from './ncc_logo.png';
import css_icon from './css_icon.png';
import html_icon from './html_icon.png';
import url_icon from './url_icon.png';
import './App.css';
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
const BottomView = ()=>{
  return (
    <div className="bottom-content-wrapper" >
    {MOCK_DATA.map(item=>{
      return(
        <div class="bottom-content" >
          <h3>{item.title}</h3>
          <div>
            <img src={item.icon} />
            <p>{item.content}</p>
          </div>
        </div>
      )
    })}
    </div>
  )
}
function App() {
  const TMP_TEXT = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tristique consequat placerat. Vestibulum auctor pellentesque sem, eu\nposuere erat hendrerit quis. Maecenas vel consequat turpis. Nam facilisis, ligula in mattis sodales, augue justo tristique nulla, sed lacinia\nante eros ut mi. Morbi vitae diam augue. Aliquam vel mauris a nibh auctor commodo. Praesent et nisi eu justo eleifend convallis. Quisque\nsuscipit maximus vestibulum. Phasellus congue mollis orci, sit amet luctus augue tristique eu. Donec vulputate odio neque, sed semper\nturpis pellentesque a."
  return (
    <div className="App">
      <Sidebar />
      <main class="main-content" >
        <img src={ncc_logo} alt="logo" class="nccLogo" />
        <div class="text-view">
          <h3 class="title">Lorem ipsum dolor sit asmet?</h3>
          <p>{TMP_TEXT}</p>
        </div>
        <BottomView/>
      </main>
    </div>
  );
}

export default App;

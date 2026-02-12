import './App.css';
import { HashRouter, NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Todo = () => {
  return <p>這是 Todo 頁面</p>;
};
const Login = () => {
  return <p>這是登入頁面</p>;
};
const Register = () => {
  return <p>這是註冊頁面</p>;
};
// LogOut 元件
const LogOut = () => {
  const  navigate = useNavigate();
  return <button onClick={() => {navigate('/login')}}>登出</button>
}
// 在 Todo 元件中引入 LogOut 元件
const Todo = () => {
  return <Fragment>
    <p>Todo</p>
    <LogOut />
  </Fragment>
}

function App() {
  return (
    <div className="container">
      <HashRouter>
        <div className="nav-link">
          <NavLink to="/">
            <p>回到首頁</p>
          </NavLink>
          <NavLink to="/register">
            <p>註冊頁面</p>
          </NavLink>
          <NavLink to="/login">
            <p>登入頁面</p>
          </NavLink>
          <NavLink to="/todo">
            <p>Todo 頁面</p>
          </NavLink>
        </div>
        <Routes>
  <Route path="/register" element={<Register />} />
  <Route path="/login" element={<Login />} />
  <Route path="/todo" element={<Todo />} />
</Routes>
      </HashRouter>
    </div>
  );
}

export default App;

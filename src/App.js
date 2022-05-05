import './sass/index.scss';
import 'bootstrap/dist/css/bootstrap.css';
import UsedTime from './containers/UsedTime/UsedTime';
import TitleTodo from './containers/UsedTime/TitleTodo';
import { ThemeContext } from './contexts/ThemeContext';
import { useContext } from 'react';
function App() {
  const context = useContext(ThemeContext);
  return (
    <div className={context.theme}>
      <TitleTodo />
      <UsedTime />
    </div>
  );
}

export default App;

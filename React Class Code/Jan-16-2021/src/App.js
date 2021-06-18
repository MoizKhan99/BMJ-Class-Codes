import './App.css';
import Todo from "./components/Todo";
import Counter from "./components/Counter";
import DoubleCounter from "./components/DoubleCounter";
import GithubUser from "./components/GithubUser";
//  https://www.youtube.com/watch?v=D2MqT4OEgoE
function App() {
  return (
    <div >
      <h1>My App</h1>
      {/* <Counter />
      <DoubleCounter /> */}
      <GithubUser />
    </div>
  );
}

export default App;

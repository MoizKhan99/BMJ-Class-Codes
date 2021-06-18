import './App.css';
import Todo from "./components/Todo";
import Counter from "./components/Counter";
import DoubleCounter from "./components/DoubleCounter";
import GithubUser from "./components/GithubUser";
import Appbar from "./components/Appbar";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid"

//  https://www.youtube.com/watch?v=D2MqT4OEgoE
function App() {
  return (
    <div >
      <Appbar />
      <Container>

        <Grid container>
          <Grid item xs={12} sm={6}>
            <Counter />
          </Grid>
          <Grid item xs={12} sm={6}>
            <DoubleCounter />
          </Grid>
        </Grid>
      </Container>
      {/* <GithubUser /> */}
    </div>
  );
}

export default App;

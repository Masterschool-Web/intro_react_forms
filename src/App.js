import "./App.css";
import { UncontrolledForm } from "./components/UncontrolledForm";
import ControlledForm from "./components/ControlledForm";
//First, let's write an uncontrolled form component.

function App() {
  return (
    <div className="App">
      {/* <UncontrolledForm /> */}
      <ControlledForm />
    </div>
  );
}

export default App;

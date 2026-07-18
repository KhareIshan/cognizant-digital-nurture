import CalculateScore from "./Components/CalculateScore";

function App() {

  return (
    <div>

      <CalculateScore
        name="Ishan"
        school="Bishop Johnson School"
        total={500}
        goal={5}
      />

    </div>
  );
}

export default App;
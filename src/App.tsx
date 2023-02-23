import { config } from "./config";
import Render from "./RenderComponent";

function App() {
  return (
    <div className="App container mt-4">
      {config.map((config) => Render(config) as any)}
    </div>
  );
}

export default App;

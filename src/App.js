import "./styles.css";
import { data } from "./data.js";
import { Folder } from "./Folder";

export default function App() {
  return (
    <div className="App">
      <Folder data={data} />
    </div>
  );
}

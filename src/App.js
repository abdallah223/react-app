import Gallery from "./Gallery";
import Profile from "./Profile";
import { Statics, NewCard, Downloading } from "./Components";

export default function App() {
  return (
    <div>
      <h1>Task 1</h1>
      <p>Display Gallery and Profile Components</p>
      <br />
      <hr />
      <br />
      <Gallery />
      <Profile />
      <br />
      <hr />
      <br />
      <h1>Task 2</h1>
      <p>Make 3 Components and display them</p>
      <br />
      <hr />
      <br />
      <Statics />
      <NewCard />
      <Downloading />
    </div>
  );
}

import "./App.css";
import image1 from "./images/1.jpg";
import image2 from "./images/2.jpg";
import image3 from "./images/3.jpg";
import Aboutme from "./Aboutme";
import Likes from "./Likes";

function App() {
  return (
    <div class="container">
      <div class="textt">
        <h3>IMAGES</h3>
      </div>

      <div class="image-container">
        <div class="image">
          <img src={image1} height={200} width={200} alt="/" />
        </div>
        <div class="image">
          <img src={image2} height={200} width={200} alt="/" />
        </div>
        <div class="image">
          <img src={image3} height={200} width={200} alt="/" />
        </div>
      </div>

      <div class="text-box">
        <div class="row">
          <Aboutme />

          <Likes />
        </div>
      </div>
    </div>
  );
}
export default App;

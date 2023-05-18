import "./App.css";
import image1 from "./images/1.jpg";
import image2 from "./images/2.jpg";
import image3 from "./images/3.jpg";

function App() {
  return (
    <div class="container">
      <div class="textt">
        <h3>IMAGES</h3>
      </div>

      <div class="image-container">
        <div class="image">
          <img src={image1} height={200} width={200} />
        </div>
        <div class="image">
          <img src={image2} height={200} width={200} />
        </div>
        <div class="image">
          <img src={image3} height={200} width={200} />
        </div>
      </div>

      <div class="text">
        <h3></h3>
      </div>

      <div class="text-box">
        <div class="row">
          <div class="column">
            <h2>About Me</h2>

            <p>
              Hello there! I am Auragail Jamaica Janoba, and I am currently 22
              years old. My hometown is Sugod, Bacon District, Sorsogon City,
              where I have spent my academic years from elementary school to
              senior high school. I am adaptable and always willing to learn and
              grow from my experiences. In my free time, I enjoy reading,
              writing, and spending time indoors. Currently, I am studying at
              The Lewis College, pursuing a degree in BSIT, and I am looking
              forward to finish this semester soon.
            </p>
          </div>

          <div class="column">
            <h2>Likes:</h2>
            <p>1. Spending time with loved ones </p>
            <p>2. Relaxing at home and Listening to music </p>
            <p>3. Watching movies and kdrama series</p>
            <p>4. making art and craft at home</p>
            <p>5. Gardening</p>
            <p>6. Traveling and going on road trips</p>
            <p>7. Playing gadgets with my cousins</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;

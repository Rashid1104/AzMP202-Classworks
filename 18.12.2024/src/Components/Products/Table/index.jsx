import controller from "../../services";
import { endpoints } from "../../services/constants";
import "./index.scss";
import "./grid.css"

const Card = ({ recipes, setRecipes }) => {

  return (
    <div className="container">
      <div className="row">
        {recipes.length &&
          recipes.map((r) => {
            let difficultyColor;
            if (r.difficulty === 'Easy') {
              difficultyColor = 'green';
            } else if (r.difficulty === 'Medium') {
              difficultyColor = 'yellow';
            } else {
              difficultyColor = 'red';
            }
            return (
              <div key={r.id} className="cards col-2">
                <img className="img" src={r.image} alt="" width={"300"} />
                <h1>{r.name}</h1>
                <p>{r.instructions}</p>
                <div>
                  <h4>{r.ingredients
                  }</h4>
                </div>
                <strong>{r.cookTimeMinutes}-{r.prepTimeMinutes}</strong>
                <p style={{ color: difficultyColor }}>difficulty: {r.difficulty}</p>
                <button className="btns">Submit</button>
              </div>
            );
          })
        }
      </div>

    </div>
  );
};

export default Card
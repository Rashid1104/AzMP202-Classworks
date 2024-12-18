import { useEffect, useState } from "react";
import controller from "../services";
import { endpoints } from "../services/constants";
import Card from "./Table";

const Recipes = () => {
    const [recipes, setRecipes] = useState([])

    const getRecipes = async () => {
        const data = await controller.getAllData(endpoints.recipes);
        setRecipes(data);
    };
    useEffect(() => {
        getRecipes();
    }, [])

    return (
        <div>
            <Card  recipes={recipes} setRecipes={setRecipes}/>
        </div>
    );
};


export default Recipes;
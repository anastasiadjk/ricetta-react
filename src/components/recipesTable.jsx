import React from 'react';
import { Link } from 'react-router-dom';


const RecipesTable = (props) => {
    const { recipes, onDelete } = props;
    return (
        <table className='table'>
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Category</th>
                    <th></th>
                    <th></th>
                    <th></th>
                </tr>
            </thead>

            <tbody>
                {recipes.map(recipe =>
                    <tr key={recipe._id}>
                        {/* <td>{recipe.title}</td> */}
                        <td><Link className='recipeTitle' to={`/page/${recipe._id}`}>{recipe.title}</Link></td>
                        <td >{recipe.category.name}</td>
                        <td><Link className="btn btn-primary btn-sm" to={`/recipes/${recipe._id}`}>Edit</Link></td>
                        <td> <Link className="btn btn-warning btn-sm" to={`/page/${recipe._id}`}>Read</Link></td>
                        <td><button onClick={() => onDelete(recipe)} className="btn btn-danger btn-sm">Delete</button></td>
                    </tr>)}
            </tbody>
        </table>
    );
}

export default RecipesTable;
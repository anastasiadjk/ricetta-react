import React, { Component } from 'react';
import { getRecipe } from '../services/recipeService';

class RecipePage extends Component {
    state = {
        recipe: []
    }


    async componentDidMount() {
        const recipeId = this.props.match.params.id;
        try {
            const { data: recipe } = await getRecipe(recipeId);
            this.setState({ recipe: recipe });
        } catch (ex) {
            if (ex.response && ex.response.status === 404)
                return this.props.history.replace('/not-found');
        }
    };

    render() {
        return (
            <>
                <div className='border border-warning ml-4'>
                    <h2 className='recipeHeading m-5 text-left'> {this.state.recipe.title}</h2>
                    <p className='recipeText m-5'>{this.state.recipe.description}</p>
                </div>

            </>

        );
    }
}

export default RecipePage;



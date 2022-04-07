import React, { Component } from 'react';
import Joi from 'joi-browser';
import Form from '../common/form';
import { getCategories } from '../services/categoryService';
import { getRecipe, saveRecipe } from '../services/recipeService';


class RecipeForm extends Form {
    state = {
        data: {
            title: "",
            categoryId: "",
            description: ""
        },
        categories: [],
        errors: {}
    };

    schema = {
        _id: Joi.string(),
        title: Joi.string()
            .required()
            .label("Title"),
        categoryId: Joi.string()
            .required()
            .label("Category"),
        description: Joi.string()
            .required()
            .label("Description"),

    };

    async componentDidMount() {
        const { data: categories } = await getCategories();
        this.setState({ categories: categories });
        const recipeId = this.props.match.params.id;
        if (recipeId === 'new') return;
        try {
            const { data: recipe } = await getRecipe(recipeId);
            this.setState({ data: this.mapToViewModel(recipe) });
        } catch (ex) {
            if (ex.response && ex.response.status === 404)
                return this.props.history.replace('/not-found');
        }

    }

    mapToViewModel(recipe) {
        return {
            _id: recipe._id,
            title: recipe.title,
            categoryId: recipe.category._id,
            description: recipe.description
        };
    }

    doSubmit = async () => {
        console.log('Im here')
        await saveRecipe(this.state.data);
        this.props.history.push("/");
    };

    render() {
        return (
            <div>
                <h1>New Recipe</h1>
                <form onSubmit={this.handleSubmit}>
                    {this.renderInput("title", "Title")}
                    {this.renderSelect("categoryId", "Category", this.state.categories)}
                    {/* {this.renderInput("description", "Description")} */}
                    {this.renderTextbox("description", "Description")}
                    {this.renderButton("Save")}
                </form>
            </div>
        );
    }
}

export default RecipeForm;

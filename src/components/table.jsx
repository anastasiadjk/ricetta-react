import React, { Component } from 'react';
import { getRecipes, deleteRecipe } from '../services/recipeService';
import { getCategories } from '../services/categoryService';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import Pagination from './pagination';
import { paginate } from './paginate';
import ListGroup from './listGroup';
import RecipesTable from './recipesTable';


class Table extends Component {
    state = {
        recipes: [],
        categories: [],
        pageSize: 4,
        currentPage: 1
    };

    async componentDidMount() {
        const { data: recipes } = await getRecipes();
        this.setState({ recipes });
        const { data } = await getCategories();
        const categories = [{ _id: '', name: 'ALL RECIPES' }, ...data];
        this.setState({ categories });
    }

    handleDelete = async (recipe) => {
        const originalRecipes = this.state.recipes;
        const recipes = this.state.recipes.filter(r => r._id !== recipe._id);
        this.setState({ recipes });
        try {
            await deleteRecipe(recipe._id);
        }
        catch (ex) {
            if (ex.response && ex.response.status === 404)
                toast.error('this recipe has already been deleted');
            this.state.recipes = originalRecipes;
        }
    };

    handlePageChange = page => {
        this.setState({ currentPage: page });
    };

    handleCategorySelect = category => {
        this.setState({ selectedCategory: category, currentPage: 1 });
    };

    render() {
        const { pageSize, currentPage, selectedCategory, recipes: allRecipes } = this.state;


        //filtering
        const filtered = selectedCategory && selectedCategory._id
            ? allRecipes.filter(r => r.category._id === selectedCategory._id)
            : allRecipes;

        //pagination
        const recipes = paginate(filtered, currentPage, pageSize);
        return (
            <>
                <div className='row'>

                    <div className='col-2 category'>
                        <ListGroup
                            categories={this.state.categories}
                            selectedCategory={this.state.selectedCategory}
                            onCategorySelect={this.handleCategorySelect} />
                    </div>

                    <div className='col'>
                        <Link className="btn btn-success sm" to="/recipes/new" >
                            New Recipe
                        </Link>

                        <p> There are {filtered.length} recipes  </p>

                        <RecipesTable
                            recipes={recipes}
                            onDelete={this.handleDelete}
                        />

                        <Pagination
                            itemsCount={filtered.length}
                            pageSize={pageSize}
                            currentPage={currentPage}
                            onPageChange={this.handlePageChange}
                        />

                    </div>

                </div>
            </>

        );
    }
}

export default Table;

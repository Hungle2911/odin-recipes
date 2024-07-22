class Api::V1::RecipesController < ApplicationController
  before_action :authenticate_user!
  before_action :set_recipe, only: [:show, :destroy]
   # GET /api/v1/recipes
   def index
    @recipes = Recipe.all
    render json: @recipes
  end

  def create
  end

  # GET /api/v1/recipes/1
  def show
    render json: @recipe
  end

  # DELETE /api/v1/recipes/1
  def destroy
    @recipe.destroy
  end
  private
        # Use callbacks to share common setup or constraints between actions.
        def set_recipe
          @recipe = Recipe.find(params[:id])
        end

        # Only allow a trusted parameter "white list" through.
        def recipe_params
          params.require(:recipe).permit(:title, :description, :instructions)
        end
end

class TodosController < ApplicationController
  def index
    todos = Todo.order("created_at DESC")
    render json: todos
  end

  def create
    todo = Todo.create(allowed_params)
    render json: todo
  end

  def update
  end

  def destroy
  end

  private

  def allowed_params
    params.require(:todo).permit(:title, :done, :important)
  end
end

Rails.application.routes.draw do
 
 # get 'todos/create'
 # get 'todos/update'
  # get 'todos/destroy'
  root :to => "manageme#index"
  scope 'api/v1' do
    resources :todos
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end

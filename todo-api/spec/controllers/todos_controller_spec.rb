require 'rails_helper'

RSpec.describe TodosController, type: :controller do

  describe "GET #index" do
    it "returns http success" do
      get :index
      expect(response).to have_http_status(:success)
    end
  end

  describe "Create Todo", :type => :request do
    context "with valid parameters" do
      let(:valid_params) do
        {
          title: "Water the garden",
          done: false,
          important: false
        }
      end

      it "creates new todo" do
        expect {post '/api/v1/todos', params: valid_params}
        expect(response).to have_http_status(:success)
      end
    end
  end
  

  describe "Update Todo", type: 'request' do
    context "with valid parameters" do
      let(:valid_params) do
        {
          title: "Water the garden",
          done: false,
          important: false
        }
      end

      it "updates an existing todo" do
        expect {post '/api/v1/todos', params: valid_params}
        expect(response).to have_http_status(:success)

        expect {patch 'api/v1/todos/1', params: {"done": true}}
        expect(response).to have_http_status(:success)
      end
    end
    
  end

  describe "destroy todo" do
    context "with valid paramaters" do
      let(:valid_params) do
         {
          title: "Water the garden",
          done: false,
          important: false
         }
      end

      it "destroys todo" do
         expect {post '/api/v1/todos', params: valid_params}
         expect(response).to have_http_status(:success)

         expect { delete '/api/v1/#{response.id}}'}
         expect(response).to have_http_status(:ok)
      end
    end
  end

  #describe "mark a todo as important" do

   # before do
    #  post '/api/v1/todos', params: { :title => "Water the garden", :done => false, :important => false } 
    #end
    
    #it "should mark as important" do 
    #end
 # end

end

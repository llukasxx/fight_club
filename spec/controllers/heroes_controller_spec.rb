require 'rails_helper'

RSpec.describe HeroesController, type: :controller do

  describe "GET #index" do
    it "returns http success" do
      get :index
      expect(response).to have_http_status(:success)
    end
  end

  describe "GET #new" do
    it "returns http success" do
      get :new
      expect(response).to have_http_status(:success)
    end
  end

  describe "GET #show" do
    before(:each) do
      @hero = build(:hero_with_skills)
      @hero.save!
    end
    it "returns http success" do
      get :show, id: @hero.id
      expect(response).to have_http_status(:success)
    end
  end

end

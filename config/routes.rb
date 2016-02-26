Rails.application.routes.draw do

  root 'fights#index'
  get '/fights/rules', to: 'fights#rules'
  resources :heroes, only: [:index, :new, :show, :create]
  resources :fights, only: [:index, :new]
end

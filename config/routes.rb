Rails.application.routes.draw do

  root 'fights#index'
  resources :heroes
  resources :fights
end

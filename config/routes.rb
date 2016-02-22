Rails.application.routes.draw do

  root 'heroes#index'
  resources :heroes

end

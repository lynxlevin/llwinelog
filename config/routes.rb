Rails.application.routes.draw do
  devise_for :users
  root to: "home#index"
  get "about", to: "home#about", as: :about
  resources :winelogs, except: :index
end

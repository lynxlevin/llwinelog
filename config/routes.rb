Rails.application.routes.draw do
  devise_for :users, controllers: { registrations: "users/registrations" }
  root to: "home#index"
  get "about", to: "home#about", as: :about
  resources :winelogs
end

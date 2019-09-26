Rails.application.routes.draw do

  resources :apartments
  devise_for :users
  root to: 'pages#homepage'
  get '*path', to: 'pages#homepage', constraints: ->(request){ request.format.html? }
end

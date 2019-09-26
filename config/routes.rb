Rails.application.routes.draw do

  devise_for :users
  root to: 'pages#homepage'
  get '*path', to: 'pages#homepage', constraints: ->(request){ request.format.html? }
  resources :apartments
end

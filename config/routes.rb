Rails.application.routes.draw do
  root :to => 'welcome#index'
  get "welcome" => "welcome#index"

  resources :ideas
  resources :teams
  resources :help_pwds

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end

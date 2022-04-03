Rails.application.routes.draw do
  root 'play#home'
  get 'play/level1'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end

Rails.application.routes.draw do
  get '/practice-1' => 'pages#practice_1'
  get '/jquery-2' => 'pages#jquery_2'
  get '/jquery-3' => 'pages#jquery_3'
  get '/jquery-4' => 'pages#jquery_4'
  get '/jquery-5' => 'pages#jquery_5'

  root "pages#index"
end

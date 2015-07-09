# gem 'sinatra'
require 'sinatra'
require "sinatra/reloader" if development?

class FiveStarApp < Sinatra::Base
	get '/' do
	  erb :welcome
	end

	get '/about' do
	  erb :about
	end

	get '/services' do
	  erb :services
	end

	get '/clients' do
	  erb :clients
	end

	get '/contact' do
	  erb :contact
	end
end

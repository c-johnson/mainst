class MainController < ApplicationController
  def send_message
    send_simple_message(params[:name], params[:email], params[:message])
  end

  def send_simple_message(name, email, message)
    RestClient.post "https://api:key-3ax6xnjp29jd6fds4gc373sgvjxteol0"\
    "@api.mailgun.net/v2/samples.mailgun.org/messages",
    :from => "#{name} <#{email}>",
    :to => "ckjohnson7@gmail.com",
    :subject => "Inquiry about website",
    :text => "#{message}"
  end
end
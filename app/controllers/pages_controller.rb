class PagesController < ApplicationController
  def home
  end

  def text_off
  end
   
  def hiw
  end

  def carousel_html
    key = params[:key].to_s
    @photos = Photo.where("key = ?", key)
    render :layout => false
  end

  def upload

  end
  
  def ms
    render :layout => false
  end
  def cmu
    render :layout => false
  end
  def chm
    render :layout => false
  end
  
end

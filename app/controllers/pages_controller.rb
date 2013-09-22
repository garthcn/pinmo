class PagesController < ApplicationController
  def text_off
  end

  def carousel_html
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

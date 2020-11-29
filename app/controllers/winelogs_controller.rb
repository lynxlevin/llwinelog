class WinelogsController < ApplicationController
  def new
    @winelog = Winelog.new
  end

  def create
    @winelog = Winelog.new(winelog_params)
    if @winelog.save
      redirect_to root_path
    else
      render :new
    end
  end

  def show
  end

  def edit
  end

  def update
  end

  def destroy
  end

  private
  def winelog_params
    params.require(:winelog).permit(
      :wine_name, :tasted_date, :type_id, :country_id,
      :region1_id, :region2, :region3, :producer, :class_id,
      :vintage, :grape1, :grape2, :grape3, :grape4, :grape5,
      :price, :shop, :rating_id, :comment, :alcohol, :importer_name
    ).merge(user_id: current_user.id)
  end
end

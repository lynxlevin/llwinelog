class WinelogsController < ApplicationController
  before_action :authenticate_user!
  before_action :prepare_class_select, only: [:new, :edit]
  before_action :find_winelog, only: [:show, :edit, :update, :destroy]
  before_action :redirect_ileligible_user, only: [:destroy, :edit, :update, :show]

  def index
    @winelogs = Winelog.where(user_id: current_user).order('tasted_date DESC')
    redirect_to root_path unless user_signed_in? && current_user.id == @winelogs[0].user_id
  end

  def new
    @winelog = Winelog.new
  end

  def create
    @winelog = Winelog.new(winelog_params)
    if @winelog.save
      redirect_to winelogs_path
    else
      render :new
    end
  end

  def show
  end

  def edit
  end

  def update
    if @winelog.update(winelog_params)
      redirect_to winelogs_path
    else
      render :edit
    end
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

  def prepare_class_select
    class_ids = DefaultClass.all.ids
    class_ids.each_with_index do |id, i|
      class_ids[i] = id / 100 unless id == 1
    end
    @region1s_with_classes = DefaultRegion1.where(id: class_ids.uniq)
  end

  def find_winelog
    @winelog = Winelog.find(params[:id])
  end

  def redirect_ileligible_user
    redirect_to root_path unless user_signed_in? && current_user.id == @winelog.user_id
  end

end

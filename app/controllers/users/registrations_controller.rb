# frozen_string_literal: true

class Users::RegistrationsController < Devise::RegistrationsController
  # before_action :configure_sign_up_params, only: [:create]
  # before_action :configure_account_update_params, only: [:update]

  # GET /resource/sign_up
  # def new
  #   super
  # end

  # POST /resource
  def create
    super
    require "csv"
    CSV.foreach('db/seeds/default_templates.csv', headers: true) do |row|
      OriginalTemplate.create(
        id: row['id'],
        template_name: row['template_name'],
        sort_order: row['sort_order'],
        type_id_value: row['type_id_value'],
        country_id_value: row['country_id_value'],
        region1_id_value: row['region1_id_value'],
        region2_value: row['region2_value'],
        region3_value: row['region3_value'],
        producer_value: row['producer_value'],
        class_id_value: row['class_id_value'],
        vintage_value: row['vintage_value'],
        grape1_value: row['grape1_value'],
        grape2_value: row['grape2_value'],
        grape3_value: row['grape3_value'],
        grape4_value: row['grape4_value'],
        grape5_value: row['grape5_value'],
        shop_value: row['shop_value'],
        comment_value: row['comment_value'],
        alcohol_value: row['alcohol_value'],
        importer_name_value: row['importer_name_value'],
        user_id: resource.id
      )
    end
  end

  # GET /resource/edit
  # def edit
  #   super
  # end

  # PUT /resource
  # def update
  #   super
  # end

  # DELETE /resource
  # def destroy
  #   super
  # end

  # GET /resource/cancel
  # Forces the session data which is usually expired after sign
  # in to be expired now. This is useful if the user wants to
  # cancel oauth signing in/up in the middle of the process,
  # removing all OAuth session data.
  # def cancel
  #   super
  # end

  # protected

  # If you have extra params to permit, append them to the sanitizer.
  # def configure_sign_up_params
  #   devise_parameter_sanitizer.permit(:sign_up, keys: [:attribute])
  # end

  # If you have extra params to permit, append them to the sanitizer.
  # def configure_account_update_params
  #   devise_parameter_sanitizer.permit(:account_update, keys: [:attribute])
  # end

  # The path used after sign up.
  # def after_sign_up_path_for(resource)
  #   super(resource)
  # end

  # The path used after sign up for inactive accounts.
  # def after_inactive_sign_up_path_for(resource)
  #   super(resource)
  # end
end

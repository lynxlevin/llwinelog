class Winelog < ApplicationRecord
  belongs_to :user

  validates :wine_name, presence: true
  with_options numericality: { greater_than: -1,
                               less_than: 1_000_000,
                               only_integer: true },
               length: { maximum: 7 } do
    validates :type_id
    validates :country_id
    validates :region1_id
    validates :class_id
    validates :vintage
    validates :rating_id
    validates :price
  end

  validates :alcohol, numericality: { greater_than: 0,
                                      less_than: 101}
end

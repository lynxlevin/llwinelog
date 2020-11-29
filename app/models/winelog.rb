class Winelog < ApplicationRecord
  belongs_to :user

  validates :wine_name, presence: true
  with_options numericality: { greater_than: 0,
                               less_than: 10_000,
                               only_integer: true },
               length: { maximum: 4 } do
    validates :type
    validates :country
    validates :region1
    validates :class
    validates :vintage
    validates :rating
  end
  validates :price, numericality: { greater_than: 0,
                                    less_than: 10_000_000,
                                    only_integer: true },
                    length: { maximum: 7 }

  validates :alcohol, numericality: { greater_than: 0,
                                      less_than: 101,
                                      only_integer: true },
                      length: { maximum: 3 }
end

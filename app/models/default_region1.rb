class DefaultRegion1 < ApplicationRecord
  belongs_to :default_country
  has_many :default_classes
end

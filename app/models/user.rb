class User < ApplicationRecord
  has_many :winelogs
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  validates :username,
            presence: true,
            uniqueness: { case_sensitive: true },
            format: { with: /\A[ぁ-んァ-ン０-９a-zA-Z0-9一-龥]+\z/ },
            length: { maximum: 50 }

  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
end

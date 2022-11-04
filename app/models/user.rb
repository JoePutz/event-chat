class User < ApplicationRecord
    has_many :comments, foreign_key: :com_user_id, dependent: :destroy
    has_secure_password

    validates :username, uniqueness: true
    validates :email, uniqueness: true
end

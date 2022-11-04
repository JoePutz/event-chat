class Event < ApplicationRecord
    has_many :comments, foreign_key: :com_event_id, dependent: :destroy

    validates :title, uniqueness: true
end

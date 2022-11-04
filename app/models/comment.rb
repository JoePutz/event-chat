class Comment < ApplicationRecord
    belongs_to :com_event, foreign_key: :com_event_id, class_name: "Event"
    belongs_to :com_user, foreign_key: :com_user_id, class_name: "User"
end

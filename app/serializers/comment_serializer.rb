class CommentSerializer < ActiveModel::Serializer
  attributes :id, :text, :com_user_id, :user
  belongs_to :com_user
  belongs_to :com_event

  def user
    self.object.com_user.username
  end
end

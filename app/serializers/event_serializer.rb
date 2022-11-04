class EventSerializer < ActiveModel::Serializer
  attributes :id, :title, :public, :key, :description, :tags
end

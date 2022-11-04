class CreateEvents < ActiveRecord::Migration[6.1]
  def change
    create_table :events do |t|
      t.string :title
      t.boolean :public
      t.string :key
      t.string :description
      t.string :tags

      t.timestamps
    end
  end
end

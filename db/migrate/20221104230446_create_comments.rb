class CreateComments < ActiveRecord::Migration[6.1]
  def change
    create_table :comments do |t|
      t.string :text
      t.references :com_event, foreign_key: { to_table: 'events'}
      t.references :com_user, foreign_key: { to_table: 'users'}

      t.timestamps
    end
  end
end

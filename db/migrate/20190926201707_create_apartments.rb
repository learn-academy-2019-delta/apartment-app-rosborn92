class CreateApartments < ActiveRecord::Migration[6.0]
  def change
    create_table :apartments do |t|
      t.string :address
      t.string :city
      t.string :zip
      t.string :country
      t.string :manager
      t.string :man_phone
      t.string :hours

      t.timestamps
    end
  end
end

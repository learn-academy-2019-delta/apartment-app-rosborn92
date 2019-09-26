class Apartment < ApplicationRecord
    validates :address, :city, :zip, :country, :manager, :man_phone, :hours, presence: true
end

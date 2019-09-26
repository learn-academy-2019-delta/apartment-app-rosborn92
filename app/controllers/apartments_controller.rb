class ApartmentsController < ApplicationController
    def index
        apartments = Apartment.all
        render json: apartments
    end

    def create
        apartment = Apartment.create(apartment_params)
        if apartment.valid?
            render json: apartment
        else
            render json: apartment.errors, status: :unprocessable_entity
        end
    end

    private
    
    def apartment_params
        params.require(:apartment).permit(:address, :city, :zip, :country, :manager, :man_phone, :hours)
    end

end

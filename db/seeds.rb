apartment_attributes = [
  {
    address: '123 Low Tree St.',
    city: 'Lodi',
    zip: '23184',
    country: 'USA',
    manager: 'Cory Lory',
    man_phone: '(213)848-2133',
    hours: '9:00am-3:00pm'
  },
  {
    address: '98 Yes Plc.',
    city: 'Yesville',
    zip: '78654',
    country: 'USA',
    manager: 'Jim Carrey',
    man_phone: '(787)878-7878',
    hours: '7:00am-8:00am'
  }
]

apartment_attributes.each do |attributes|
  Apartment.create(attributes)
end

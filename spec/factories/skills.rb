FactoryGirl.define do
  factory :skill do
    name "Super punch"
    level rand(0..5)
  end
end

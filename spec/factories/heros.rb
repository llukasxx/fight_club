FactoryGirl.define do
  factory :hero do
    first_name "John"
    last_name "Doe"
    description "Live to fight another day."
    factory :hero_with_skills do
      3.times do
        after(:build) do |hero,evaluator|
          hero.skills.new(name: 'Super punch', level: 3, element: "water")
        end
      end
    end
  end
end

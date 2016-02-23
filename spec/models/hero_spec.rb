require 'rails_helper'
require 'ffaker'

RSpec.describe Hero, type: :model do
  it { should validate_presence_of(:first_name) }
  it { should validate_presence_of(:last_name) }
  it { should validate_presence_of(:description) }
  it { should have_many(:skills) }

  describe 'skills' do

    context "count" do

      before(:each) do
        @hero = build(:hero)
      end

      it "is invalid without skills" do
        expect(@hero).to be_invalid
      end

      it "is invalid with one skill" do
        @hero.skills.new(name: FFaker::Skill, level: rand(0..5), element: "water")
        expect(@hero).to be_invalid
      end

      it "is valid with 3..10 skills" do
        rand(3..10).times { @hero.skills.new(name: FFaker::Skill, level: rand(0..5), element: "fire") }
        expect(@hero).to be_valid
      end

      it "is invalid with eleven skills" do
        11.times { @hero.skills.new(name: FFaker::Skill, level: rand(0..5), element: "earth") }
        expect(@hero).to be_invalid
      end
    end

  end

end

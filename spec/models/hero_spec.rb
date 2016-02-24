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

      it "is valid with 4 skills" do
        4.times { @hero.skills.new(name: FFaker::Skill, level: 2, element: "fire") }
        expect(@hero).to be_valid
      end

      it "is invalid with eleven skills" do
        11.times { @hero.skills.new(name: FFaker::Skill, level: 1, element: "earth") }
        expect(@hero).to be_invalid
      end
    end

    context "total power" do
      before(:each) do
        @hero = build(:hero)
      end

      it "is invalid with not enough power" do
        3.times { @hero.skills.new(name: "power punch", level: 1, element: "fire") }
        expect(@hero).to be_invalid
      end

      it "is invalid with overpowered skills" do
        3.times { @hero.skills.new(name: "power punch", level: 5, element: "fire") }
        expect(@hero).to be_invalid
      end

      it "is valid with total power of 5..10" do
        3.times { @hero.skills.new(name: "power punch", level: rand(2..3), element: "fire") }
        expect(@hero).to be_valid
      end
    end

  end

  describe '#total_power' do

    before(:each) do
      @hero = build(:hero)
      3.times { @hero.skills.new(name: "power punch", level: 2, element: "water") }
      @hero.save!
    end

    it "returns total power" do
      expect(@hero.total_power).to eq 6
    end
    
  end

end

require 'rails_helper'
require 'ffaker'

RSpec.describe Hero, type: :model do
  it { should validate_presence_of(:first_name) }
  it { should validate_presence_of(:last_name) }
  it { should validate_presence_of(:description) }
  it { should have_many(:skills) }
  it { should have_many(:wins) }
  it { should have_many(:loses) }

  describe 'skills' do

    context "count" do

      before(:each) do
        @hero = FactoryGirl.build(:hero)
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
        @hero = FactoryGirl.build(:hero)
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
      @hero = FactoryGirl.build(:hero)
      3.times { @hero.skills.new(name: "power punch", level: 2, element: "water") }
      @hero.save!
    end

    it "returns total power" do
      expect(@hero.total_power).to eq 6
    end
    
  end

  describe '#level' do
    before(:each) do
      @hero = create(:hero_with_skills)
    end

    context "newly created hero" do
      it "has level 1" do
        expect(@hero.level).to eq 1
      end

      it "has no experience" do
        expect(@hero.experience).to eq 0
      end
    end

    context "with some experience" do

      it "has 3 level with 90 point of experience" do
        @hero.experience += 90
        @hero.save!

        expect(@hero.level).to eq 3
      end
    end
  end

  describe "#current_level_percentage" do
    it "returns proper percentage" do
      @hero = create(:hero_with_skills, experience: 45)
      expect(@hero.current_level_percentage).to eq 50
    end
  end

end

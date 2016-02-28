require 'rails_helper'


describe Calculations do
  let(:test) { Class.new {include Calculations} }

  describe "#calc_gained_exp" do
    before(:each) do
      @instance = test.new
    end

    it "returns proper value" do
      expect(@instance.calc_gained_exp(69)).to eq 4
    end

    it "raises argument error when chances > 100" do
      expect {@instance.calc_gained_exp(101)}.to raise_error(ArgumentError)
    end
  end

  describe "#calculate_chances" do
    before(:each) do
      @instance = test.new
      @hero1 = build(:hero)
      @hero2 = build(:hero, first_name: "Valery", last_name: "Vam")
      3.times { @hero1.skills.new(name: "Power", level: 2, element: "water") }
      3.times { @hero2.skills.new(name: "Power", level: 2, element: "water") }
      @hero1.save!
      @hero2.save!
    end

    it "returns proper chances for same lvl heroes" do
      expect(@instance.calculate_chances(@hero1, @hero2)[:host]).to eq 53
    end

    it "returns 3% more for 1 lvl higher hero" do
      @hero1.experience += 30
      @hero1.save!
      expect(@instance.calculate_chances(@hero1, @hero2)[:host]).to eq 56
    end

    it "returns 6% more for 2 lvl higher hero" do
      @hero1.experience += 100
      @hero1.save!
      expect(@instance.calculate_chances(@hero1, @hero2)[:host]).to eq 59
    end
  end
end
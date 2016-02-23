require 'rails_helper'

RSpec.describe Skill, type: :model do
  it { should validate_presence_of(:name) }
  it { should validate_presence_of(:element) }
  it { should validate_presence_of(:level) }
  it { should validate_numericality_of(:level) }
  it { should belong_to(:hero) }

  describe "element" do
    before(:each) do
      @skill = build(:skill)
    end
    context "without element" do
      it "is invalid" do
        @skill.element = nil
        expect(@skill).to be_invalid
      end
    end
    context "with bad element" do
      it "is invalid" do
        @skill.element = "wrong element"
        expect(@skill).to be_invalid
      end
    end
    context "with proper element" do
      it "is valid" do
        @skill.element = "earth"
        expect(@skill).to be_valid
      end
    end
  end
end

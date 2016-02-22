require 'rails_helper'

RSpec.describe Skill, type: :model do
  it { should validate_presence_of(:name) }
  it { should validate_presence_of(:level) }
  it { should validate_numericality_of(:level) }
end

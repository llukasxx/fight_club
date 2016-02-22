require 'rails_helper'

RSpec.describe Hero, type: :model do
  it { should validate_presence_of(:first_name) }
  it { should validate_presence_of(:last_name) }
  it { should validate_presence_of(:description) }
end

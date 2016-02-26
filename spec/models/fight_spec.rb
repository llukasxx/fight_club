require 'rails_helper'

RSpec.describe Fight, type: :model do
  it { should validate_presence_of(:winner_id) }
  it { should validate_presence_of(:loser_id) }
  it { should validate_presence_of(:weather) }
  it { should validate_presence_of(:gained_exp) }
  it { should validate_presence_of(:winner_chance) }
  it { should belong_to(:winner) }
  it { should belong_to(:loser) }
end

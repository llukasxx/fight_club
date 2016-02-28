feature "New fight", js: true do

  scenario "sending fighters to battleground" do
    hero1 = create(:hero_with_skills)
    hero2 = create(:hero_with_skills)
    hero3 = create(:hero_with_skills)
    visit new_fight_path
    expect(page).to have_content hero1.first_name
    expect(page).to have_button 'Fight', disabled: true
    expect(page).to have_button 'Send as a host', disabled: false
    expect(page).to have_button 'Send as a guest', disabled: false
    click_button("#{hero1.id}", text: "Send as a host")
    expect(page).to have_button 'Send as a host', disabled: true
    expect(page).to have_button 'Send as a guest', disabled: false
    click_button("#{hero2.id}", text: "Send as a guest")
    expect(page).to have_button 'Fight', disabled: false
    expect(page).to have_button 'Send as a host', disabled: true
    expect(page).to have_button 'Send as a guest', disabled: true
  end

  scenario "performing fight" do
    hero1 = create(:hero_with_skills)
    hero2 = create(:hero_with_skills)
    visit new_fight_path
    click_button("#{hero1.id}", text: "Send as a host")
    click_button("#{hero2.id}", text: "Send as a guest")
    click_button("Fight!")
    expect(page).to have_content "#{hero1.first_name} #{hero1.last_name} has won the fight"
  end

end
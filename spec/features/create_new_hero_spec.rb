feature "Creating new hero", js: true do

  ## TO BE REAFACTORED DUE TO DUPLICATIONS!!!
  scenario "without provinding enough informations" do
    visit "/heroes/new"
    fill_in 'firstName', with: "Jonny"
    fill_in 'lastName', with: "Bravo"
    expect(page).to have_button 'Sign new Hero', disabled: true
  end

  scenario "with provinding enough information" do
    visit "/heroes/new"
    fill_in 'firstName', with: "Jonny"
    fill_in 'lastName', with: "Bravo"
    fill_in 'description', with: "Very brave hero."
    click_button 'Add skill'
    fill_in 'skill-name', with: "Power punch"
    select "4", from: "power"
    select "fire", from: "element"
    click_button "Confirm"
    click_button 'Add skill'
    fill_in 'skill-name', with: "High kick"
    select "3", from: "power"
    select "earth", from: "element"
    click_button "Confirm"
    click_button 'Add skill'
    fill_in 'skill-name', with: "Low kick"
    select "3", from: "power"
    select "wind", from: "element"
    click_button "Confirm"
    expect(page).to have_button 'Sign new Hero', disabled: false
  end

  scenario "with provinding too much information" do
    visit "/heroes/new"
    fill_in 'firstName', with: "Jonny"
    fill_in 'lastName', with: "Bravo"
    fill_in 'description', with: "Very brave hero."
    click_button 'Add skill'
    fill_in 'skill-name', with: "Power punch"
    select "4", from: "power"
    select "fire", from: "element"
    click_button "Confirm"
    click_button 'Add skill'
    fill_in 'skill-name', with: "High kick"
    select "3", from: "power"
    select "earth", from: "element"
    click_button "Confirm"
    click_button 'Add skill'
    fill_in 'skill-name', with: "Low kick"
    select "3", from: "power"
    select "wind", from: "element"
    click_button "Confirm"
    click_button 'Add skill'
    fill_in 'skill-name', with: "Medium kick"
    select "3", from: "power"
    select "wind", from: "element"
    click_button "Confirm"
    expect(page).to have_button 'Sign new Hero', disabled: true
    expect(page).to have_content 'Danger: power overwhelmed, please remove some skill.'
  end

  scenario "successfully" do
    visit "/heroes/new"
    fill_in 'firstName', with: "Jonny"
    fill_in 'lastName', with: "Bravo"
    fill_in 'description', with: "Very brave hero."
    click_button 'Add skill'
    fill_in 'skill-name', with: "Power punch"
    select "4", from: "power"
    select "fire", from: "element"
    click_button "Confirm"
    click_button 'Add skill'
    fill_in 'skill-name', with: "High kick"
    select "3", from: "power"
    select "earth", from: "element"
    click_button "Confirm"
    click_button 'Add skill'
    fill_in 'skill-name', with: "Low kick"
    select "3", from: "power"
    select "wind", from: "element"
    click_button "Confirm"
    click_button "Sign new Hero"
    expect(page).to have_content "Hero has been successfully recruited!"
  end

end
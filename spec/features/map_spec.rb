require 'rails_helper'

describe "Map" do
  describe "User can view map" do
    it "by visiting homepage" do
      visit map_url
      expect(page).to have_css("#map-container")
    end
  end
  describe "User can see a trends list" do
    it "by visiting the home page"  do
      visit map_url
      expect(page).to have_content("Pick a trend")
      expect(page).to have_css('.trend-list')
    end
  end
  describe "User can click on a trend" do
    it "when viewing the trends list" do
      visit map_url
      expect(page).to have_content(trend.trend) # refers to factory
    end
  end
  describe "User can read about map data" do
    it "by clicking on about link" do
      visit map_url
      click('About')
      expect(page).to have_content('About EmotionAll')
    end
  end
end

require 'rails_helper'

RSpec.describe Category, type: :model do
  describe "validations" do
    it "requires a name" do
      category = Category.new(name: "")
      expect(category).not_to be_valid
      expect(category.errors[:name]).to include("can't be blank")
    end

    it "rejects names longer than 100 characters" do
      category = Category.new(name: "a" * 101)
      expect(category).not_to be_valid
      expect(category.errors[:name]).to include("is too long (maximum is 100 characters)")
    end

    it "rejects duplicate names case-insensitively" do
      Category.create!(name: "Food")
      category = Category.new(name: "food")
      expect(category).not_to be_valid
      expect(category.errors[:name]).to include("has already been taken")
    end
  end
end

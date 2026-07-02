class Expense < ApplicationRecord
  belongs_to :category

  validates :date, presence: true, comparison: { less_than_or_equal_to: -> { Date.today } }
end

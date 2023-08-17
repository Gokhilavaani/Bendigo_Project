Feature:Check eligibility for a credit card application
  As a user
  I want to check eligibility for a Bendigo Bright® Credit Card

    
    Scenario Outline: Check eligibility for a credit card application
    Given I am on the bendigo bank Website <Url>
    When I apply for credit card 
    Then I should see the credit card eligibilty criteria form <maximumLimit> <maritalStatus> <branchSearch> <EmpStatus> <Occupation> <IncomeAmt> <IncomeFrq> <ExpenseAmt> <Frequency>
    And I cancel credit card application form to validate the cancellation message
    
    Examples
    | Url | maximumLimit | maritalStatus | branchSearch | EmpStatus | Occupation | IncomeAmt | IncomeFrq | ExpenseAmt | Frequency |
    | https://www.bendigobank.com.au/ | 1000 | Single | Melbourne | Casual | Professional | 20000 | Annual | 6000 | Monthly |
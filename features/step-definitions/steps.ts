import { Given, When, Then } from '@wdio/cucumber-framework';
import BendigoHomePage from '../pageobjects/BendigoHomePage'
import creditCardsEligibilityPage from '../pageobjects/creditCardsEligibilityPage';
import ProductdetailsPage from '../pageobjects/ProductdetailsPage';
import CommonFunctions from '../pageobjects/CommonFunctions';

Given(/^I am on the bendigo bank Website$/, async (url) => {
    await CommonFunctions.LaunchUrl(url)
    await BendigoHomePage.ClickonBanking()
    await BendigoHomePage.ValidateLinks()
    await BendigoHomePage.ApplyCreditCard()
});

When(/^I apply for credit card$/, async () => {
    await creditCardsEligibilityPage.applyForCreditCard()
});

Then(/^I should see the credit card eligibilty criteria form$/, async (maximumLimit, maritalStatus, branchSearch, EmpStatus, Occupation, IncomeAmt, incomeFrequency, ExpenseAmt, Frequency) => {
    await ProductdetailsPage.fillFormProduct(maximumLimit)
    await ProductdetailsPage.fillFormApplication(maritalStatus)
    await ProductdetailsPage.fillTimeEligibilityDetails()
    await ProductdetailsPage.fillBranchDetails(branchSearch)
    await ProductdetailsPage.fillEmploymentStatus(EmpStatus, Occupation, IncomeAmt, incomeFrequency, ExpenseAmt, Frequency)

});

Then(/^I cancel credit card application form to validate the cancellation message$/, async () => {
    await ProductdetailsPage.validateCancelMessage()
});
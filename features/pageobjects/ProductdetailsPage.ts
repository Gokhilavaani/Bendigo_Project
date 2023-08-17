import CommonFunctions from "./CommonFunctions"

class FillEligibiltyForm {

    get maximumlimit() {
        return $('[name=maximumLimit]')
    }
    get generalpurposebutton() {
        return $("//*[@name=\"creditCardUsage\"][contains(text(),'General purpose')]")
    }
    get maritalstatusdrpdwn()
    {
        return $("//*[@name=\"maritalStatus\"]")
    }

    get promocodeNoButton() {
        return $("//button[@name=\"hasPromoCode\"]/span[text()=\"No\"]")
    }

    get branchsearchtxt() {
        return $("//input[@name=\"branchSearch\"]")
    }

    get branchsearchbutton() {
        return $("#branchSearch")
    }

    get branchaddressLink() {
        return $("//*[@ng-click=\"selectBranch(branch)\"][contains(text(),'Clifton Hill')]")
    }

    get empStatusbox() {
        return $("[name=employmentStatus]")
    }
    get Occupationbox() {
        return $("[name=occupationSearch][ng-model=searchInputValue]")
    }

    get IncomeTypebox() {
        return $("[name=incomeSource]")
    }

    get incomeAmtbox() {
        return $("[name=\"incomeAmount\"]")
    }

    get incomeFrqbox() {
        return $("[name=incomeFrequency]")
    }

    get expenseTypebox() {
        return $("[name=\"expenseType\"]")
    }

    get expenseAmtbox() {
        return $("[name=\"expenseAmount\"]")
    }

    get expensefreqbox() {
        return $("[name=\"frequency\"]")
    }

    get cancelbtn() {
        return $("button[name=\"cancelBtn\"]")
    }

    get TimEligibYesBtn() {
        return $("//button[@name=\"hasApplicantConformToEligibilityCriteria\"][text()=\"Yes\"]")
    }
    get confirmYesbtn() {
        return $("button[name=\"confirmYes\"]")
    }
    public async fillFormProduct(maximumLimit: any) {

        var pTitle = await browser.getTitle()
        if (pTitle == "Product Details | Bendigo Bank Apply Online | Credit Card") {
            await this.maximumlimit.setValue(maximumLimit)
            await this.generalpurposebutton.click()
            CommonFunctions.clickoncontinue()
        }
    }
    public async fillFormApplication(maritalStatus: any) {
        var aTitle = await browser.getTitle()
        if (aTitle == "Application Details | Bendigo Bank Apply Online | Credit Card") {
            this.maritalstatusdrpdwn.click()
            this.maritalstatusdrpdwn.selectByVisibleText(maritalStatus)
            await this.promocodeNoButton.click()
            CommonFunctions.clickoncontinue()
        }
    }

    public async fillTimeEligibilityDetails() {
        await this.TimEligibYesBtn.click()
        CommonFunctions.clickoncontinue()
    }

    public async fillBranchDetails(branchSearch: any) {
        await this.branchsearchtxt.setValue(branchSearch)
        await this.branchsearchbutton.click()
        await this.branchaddressLink.click()
        CommonFunctions.clickoncontinue()
    }

    public async fillEmploymentStatus(EmpStatus: any, Occupation: any, IncomeAmt: any, IncomeFrq: any, ExpenseAmt: any, Frequency: any) {
        this.empStatusbox.click()
        this.empStatusbox.selectByVisibleText(EmpStatus)
        await this.Occupationbox.setValue(Occupation)
        await this.Occupationbox.click()
        await this.IncomeTypebox.click()
        await this.IncomeTypebox.selectByVisibleText("Base Salary (exclude super)")
        await this.incomeAmtbox.setValue(IncomeAmt)
        await this.incomeFrqbox.click()
        await this.incomeFrqbox.selectByVisibleText(IncomeFrq)
        CommonFunctions.clickoncontinue()
        const expenseVal = await this.expenseTypebox.getText()
        if (expenseVal != null) {
            await this.expenseAmtbox.setValue(ExpenseAmt)
            await this.expensefreqbox.click()
            await this.expensefreqbox.selectByVisibleText(Frequency)
        }
        await this.cancelbtn.click()
        await this.confirmYesbtn.click()

    }
    public async validateCancelMessage() {
        var cancelTitle = await browser.getTitle()
        if (cancelTitle == "Application Cancelled | Bendigo Bank Apply Online | Credit Card") {
            const cancelMessage = await browser.$('h1').getText()
            var sTemp = cancelMessage.split("application")
            var applicationNumber = sTemp[1].split("has")
            console.log(applicationNumber)
        }

    }
}
export default new FillEligibiltyForm

class CreditCardSEligibilityPage {

  get continuetoApplyLink() {
    return $("//div[@class='col-12 text-left']/child::button")
  }
  get cntntoApplyPopLink() {
    return $("//div[@aria-label='Close dialog']/parent::div/child::section/child::div[4]/child::div[2]/child::a")
  }
  public async applyForCreditCard() {
    var sTitle = await browser.getTitle()
    if (sTitle == "Check my credit card eligibility | Bendigo Bank") {
      await this.continuetoApplyLink.click()
      await this.cntntoApplyPopLink.click()
    }
  }
}

export default new CreditCardSEligibilityPage();
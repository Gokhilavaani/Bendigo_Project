import { $ } from '@wdio/globals'


class BendigoHomePage {
  get BankaccountsLink() {
    return $('=Bank accounts')
  }
  get PersonalLoanLink() {
    return $('=Personal Loans')
  }
  get TravelandInternatioanalPaymentsLink() {
    return $('=Travel and International Payments')
  }
  get creditcardsLink() {
    return $('=Credit Cards')
  }
  get BankingLink() {
    return $('button[name="banking"]')
  }

  get applyBreightCreditCardLink() {
    return $("//h5[contains(.,\"Bendigo Bright® Credit Card\")]/parent::div/following-sibling::div[2]/child::a[2]")
  }
  
  public async ClickonBanking() {
    await this.BankingLink.click()
  }
  public async ValidateLinks() {
    await expect(this.BankaccountsLink).toHaveText('Bank accounts')
    await expect(this).toHaveText('Personal Loans')
    await expect(this.TravelandInternatioanalPaymentsLink).toHaveText('Travel and International Payments')
    await expect(this.creditcardsLink).toHaveText('Credit Cards')
  }
  public async ApplyCreditCard() {
    if (expect(await this.creditcardsLink).toHaveText('Credit Cards')) {
      await this.creditcardsLink.click()
    }
    else {
      this.ClickonBanking()
      await this.creditcardsLink.click()
    }
    await expect(browser).toHaveAttribute('href', '/personal/credit-cards/check-my-eligibility/?ccproduct=brighthttps')
    await this.applyBreightCreditCardLink.scrollIntoView()
    await this.applyBreightCreditCardLink.click()
  }

}

export default new BendigoHomePage();
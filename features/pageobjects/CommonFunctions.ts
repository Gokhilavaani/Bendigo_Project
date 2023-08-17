class Commonfunctions {
    async LaunchUrl(Bankurl: any) {
        return await browser.url(Bankurl)
        await browser.maximizeWindow()
    }

    public async clickoncontinue() {
        await browser.$('button[name=contBtn]').click()
    }
}

export default new Commonfunctions 
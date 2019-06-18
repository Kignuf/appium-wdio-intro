const fs = require('fs')

// https://webdriver.io/docs/api/mjsonwp.html
describe('Exercice 4', function() {
	it('Can deal with webviews', function() {
		// open webview
		$('~Webview Demo').click()

		// get context info
		const currentContext = driver.getContext()
		console.log('Current context:', currentContext)
		const availableContexts = driver.getContexts()
		console.log('Available contexts:', JSON.stringify(availableContexts))

		// type url and submit
		$('~urlInput').setValue('https://appiumpro.com')
		$('~navigateBtn').click()

		// save app source (xml)
		const xml = driver.getPageSource()
		fs.writeFileSync('./app.xml', xml)

		// set context to webview
		driver.switchContext(availableContexts.find(context => context.toLowerCase().includes('webview')))

		// save webview source (html)
		const html = driver.getPageSource()
		fs.writeFileSync('./website.html', html)

	})
})
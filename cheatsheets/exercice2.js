function scrollTo(selector) {
	driver.waitUntil(() => {
		driver.touchAction([
			{
				action: 'press',
				x: 150,
				y: 500,
			},
			{
				action: 'wait',
				ms: 500
			},
			{
				action: 'moveTo',
				x: 150,
				y: 100
			},
			'release'
		])
		return $(selector).isExisting()
	})
}

describe('Exercice 2', function() {
	it('Can accept sms authorization popup', function() {
		const smsScreenSelector = "~Verify Phone Number"

		// Open sms screen
		scrollTo(smsScreenSelector)
		$(smsScreenSelector).click()

		// Authorize permission
		// $('#com.android.packageinstaller:id/permission_allow_button').click()
		$('android=new UiSelector().resourceId("com.android.packageinstaller:id/permission_allow_button")').click()
		expect($('~waiting').isExisting()).toBe(true)
	})
})
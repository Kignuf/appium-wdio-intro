describe('Exercice 5', function() {
	it('Can automate settings app', function() {
		// open settings app (could be moved into caps)
		driver.startActivity('com.android.settings', 'com.android.settings.Settings')

		// open apps section
		$$('android=new UiSelector().resourceId("com.android.settings:id/dashboard_tile")')[2].click()

		// get list of all recent apps
		const recentApps = $$('android=new UiSelector().resourceId("android:id/title").className("android.widget.TextView")')

		// find theapp and click it
		const theApp = recentApps.find(app => app.getText() === "TheApp")
		theApp.click()

		// find "Permissions" section and click it
		$$('android=new UiSelector().resourceId("android:id/title")')
			.find(el => el.getText() === 'Permissions')
			.click()

		// click all off switches
		$$('android=new UiSelector().resourceId("android:id/switch_widget")')
			.filter(el => el.getAttribute('checked') !== 'true') // ios: 'value'
			.forEach(el => el.click())

		driver.back()
	})
})
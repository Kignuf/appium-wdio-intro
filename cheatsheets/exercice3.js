// https://webdriver.io/docs/api/appium.html

describe('Exercice 3', function() {
	it('Can open notifications center', function() {
		driver.openNotifications()
		driver.pause(3000)
	})

	it('Can lock device', function() {
		driver.lock()
		driver.pause(3000)
		expect(driver.isLocked()).toBe(true)
		driver.unlock()
	})

	it('Can open settings app', function() {
		// android
		// adb shell dumpsys window windows | grep -E 'mCurrentFocus'
		driver.startActivity('com.android.settings', 'com.android.settings.Settings')
		driver.pause(3000)

		// ios
		// https://emm.how/t/ios-12-list-of-default-apps-and-bundle-id-s/790
		// driver.launchApp({ bundleId: "com.apple.Preferences" })
	})
})
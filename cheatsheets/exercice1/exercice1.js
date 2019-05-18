it('Can scroll and find element', function() {
	$('~List Demo').click()

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
		return $("~Stratocumulus").isExisting()
	})

	$('~Stratocumulus').click()
	$('android=new UiSelector().resourceId("android:id/button1")').click()
})
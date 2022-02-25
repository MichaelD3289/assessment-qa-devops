
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
   await driver.get('http://localhost:3000/')
})

afterAll(async () => {
   await driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
})

test('Clicking See all bots ', async () => {
    const seeAllBtn = await driver.findElement(By.id('see-all'))
    
    await seeAllBtn.click()
    await driver.sleep(2000);

    const allBotCards = await (await driver.findElements(By.id('bot-card'))).length;

   

    expect(allBotCards).toBe(9);
})
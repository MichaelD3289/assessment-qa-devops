
import { Builder, Capabilities, By, until } from "selenium-webdriver"

require('chromedriver');

const driver = new Builder().withCapabilities(Capabilities.chrome()).build();

beforeEach(async () => {
  driver.get('http://localhost:3000/');
})

afterAll(async () => {
  driver.quit();
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

test('Clicking Draw displays 5 bot cards', async () => {
    const drawBtn = await driver.findElement(By.id('draw'))
    await drawBtn.click();
    await driver.sleep(1000);
    const botCards = await driver.findElements(By.className('bot-card'))

    const numberOfBots = botCards.length;

    expect(numberOfBots).toEqual(5);

})
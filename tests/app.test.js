// Plan
import { test, expect } from "@playwright/test";


// check the url opens
const url = 'http://localhost:3000/';
// await page.goto('http://localhost:3000/');

test("input field", async( {page}) => {
await page.goto(url);

// check if input is empty
//  locate input
//  check input text value
const input =  page.getByRole('textbox',{ name: 'New Todo:' })


await expect(input).toBeEmpty();

})


// write something into input
test("input added", async( {page}) => {
    await page.goto(url);

    const input =  page.getByRole('textbox',{ name: 'New Todo:' })

    // await page.getByRole('textbox').fill("gym");
    await input.fill("gym");
    // await expect(await page.getByRole('textbox').fill("gym")).toHaveText("gym")
    await expect(input).toHaveText("gym");
});

// click the add button
// check if list adds the input

// check the list item is not ticked
// check the input field is empty

// click the box, check if it gets ticked
// click the box, check if it gets unticked

// click the delete button
// check if item gets deleted



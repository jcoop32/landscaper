/* 
Landscaper browser game
Game Description:
You are starting a landscaping business, but all you have are your teeth. Using just your teeth, you can spend the day cutting lawns and make $1. You can do this as much as you want.

At any point, if you are currently using your teeth, you can buy a pair of rusty scissors for $5. You can do this once, assuming you have enough money.
Using the rusty scissors, you can spend the day cutting lawns and make $5. You can do this as much as you want.
At any point, if you are currently using rusty scissors, you can buy an old-timey push lawnmower for $25. You can do this once, assuming you have enough money.
I then did the same for each tool upgrade, with the same process.

Game Flow:
Menu will display 4 button options including:
Cut Grass -> by clicking cut button on screen user will execute the cutGrass() function.
Upgrade Tool -> by clicking the upgrade tool button user can check and see if they are eligible to upgrade their tool.
Check Balance -> Current balance will be displayed on the screen and change based on users interactions.
Reset -> by clicking reset button user will reset their current game.
Exit -> by clicking Exit button user can end and exit the game, this will show stats of the previous game.

need to add:
- menu container with 4 buttons
- container for tools unlocked and tools to shop
- balance text
- Lawn cut count

using bootstrap for styling and positioning


future features:
once user clicks on cut button they get redirected to a new page
with a bunch of green squares (grass), once a grass block is clicked it removes it and increases balance amount by 
current tool earnings.

Balance is shown on both cut page and main page.
*/

// function to display buttons
const $menu = $('<div>')
  .addClass('menu container text-center')
  .attr('id', 'menu-container');
const $btnContainer = $('<div>').addClass('row align-items-center');
const $cutBtn = $('<button>')
  .attr('type', 'button')
  .attr('id', 'cutBtn')
  .addClass('col btn btn-success')
  .text('Cut');
const $upgradeBtn = $('<button>')
  .attr('type', 'button')
  .attr('id', 'upgradeBtn')
  .addClass('col btn btn-primary')
  .text('Uprgrade');
const $resetBtn = $('<button>')
  .attr('type', 'button')
  .attr('id', 'resetBtn')
  .addClass('col btn btn-warning')
  .text('Reset Game');
const $endBtn = $('<button>')
  .attr('type', 'button')
  .attr('id', 'endBtn')
  .addClass('col btn btn-danger')
  .text('End Game');

const $statsContainer = $('<div>')
  .addClass('container text-center')
  .attr('id', 'stats-container')
  .css('border', '1px solid black')
  .css('border-radius', '0px');

const $divRowContainer = $('<div>')
  .addClass('row row-cols-2')
  .attr('id', 'row-container');
const $balanceText = $('<div>')
  .addClass('col')
  .text('Current Balance: ')
  .css('border', '1px solid black')
  .css('border-radius', '0px');
const $balanceAmount = $('<div>')
  .addClass('col')
  .text('$0')
  .css('border', '1px solid black')
  .css('border-radius', '0px');
const $lawnAmountText = $('<div>')
  .addClass('col')
  .text('Lawn Count:')
  .css('border', '1px solid black')
  .css('border-radius', '0px');
const $lawnAmount = $('<div>')
  .addClass('col')
  .text('0')
  .css('border', '1px solid black')
  .css('border-radius', '0px');

function displayStats() {
  $('body').append($statsContainer);
  $statsContainer.append($divRowContainer);
  $divRowContainer.append(
    $balanceText,
    $lawnAmountText,
    $balanceAmount,
    $lawnAmount
  );
}
function displayMenu() {
  $menu.append($btnContainer);
  $btnContainer.append($cutBtn);
  $btnContainer.append($upgradeBtn);
  $btnContainer.append($resetBtn);
  $btnContainer.append($endBtn);
  //appends
  $('body').append($menu);
}

$(() => {
  const $h1 = $('<h1>').text('Landscaper').addClass('title');
  $('body').append($h1);

  displayMenu();
  displayStats();
});

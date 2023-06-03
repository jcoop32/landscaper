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
- menu container with 4 buttons ✅
- container for tools unlocked and tools to shop
- balance text ✅
- Lawn cut count ✅
- object for user
  -key:value pairs:
    -money
    -lawncount
    -currentTool
    -hasTeeth
    -hasScissors
    -hasPushMower
    -hasPowerMower
    -hasStudents
    -hasRobots


using bootstrap for styling and positioning


future features:
once user clicks on cut button they get redirected to a new page
with a bunch of green squares (grass), once a grass block is clicked it removes it and increases balance amount by 
current tool earnings.

Balance is shown on both cut page and main page.
*/

//menu container
const $menu = $('<div>')
  .addClass('menu container text-center my-3')
  .attr('id', 'menu-container');
const $btnContainer = $('<div>').addClass('row align-items-center');
const $cutBtn = $('<button>')
  .attr('type', 'button')
  .attr('id', 'cutBtn')
  .addClass('col btn btn-success m-1')
  .text('Cut');
const $upgradeBtn = $('<button>')
  .attr('type', 'button')
  .attr('id', 'upgradeBtn')
  .addClass('col btn btn-primary m-1')
  .text('Uprgrade');
const $resetBtn = $('<button>')
  .attr('type', 'button')
  .attr('id', 'resetBtn')
  .addClass('col btn btn-warning m-1')
  .text('Reset Game');
const $endBtn = $('<button>')
  .attr('type', 'button')
  .attr('id', 'endBtn')
  .addClass('col btn btn-danger m-1')
  .text('End Game');

//stats container
const $statsContainer = $('<div>')
  .addClass('container text-center pt-3')
  .attr('id', 'stats-container');
const $divRowContainer = $('<div>')
  .addClass('row row-cols-2')
  .attr('id', 'row-container')
  .css('border', '1px solid black')
  .css('border-radius', '10px');
//items in row container
const $balanceText = $('<div>').addClass('col').text('Current Balance: ');

const $balanceAmount = $('<div>').addClass('col').text('$0');

const $lawnAmountText = $('<div>').addClass('col').text('Lawn Count:');

const $lawnAmount = $('<div>').addClass('col').text('0');

// function to display stats container
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
// function to display buttons
function displayMenu() {
  $menu.append($btnContainer);
  $btnContainer.append($cutBtn, $upgradeBtn, $resetBtn, $endBtn);
  //appends
  $('body').append($menu);
}

//game variables and logic
//obj for user info
const userStats = {
  balance: 0,
  lawncount: 0,
  currentTool: cutGrass,
  hasTeeth: true,
  hasScissors: false,
  hasPushMower: false,
  hasPowerMower: false,
  hasStudents: false,
  hasRobots: false,
};

function cutGrass() {
  userStats.balance += 1;
  userStats.lawncount += 1;
  $balanceAmount.text(`$${userStats.balance}`);
  $lawnAmount.text(`${userStats.lawncount}`);
}

//jquery
$(() => {
  const $h1 = $('<h1>').text('Landscaper').addClass('title');
  $('body').append($h1);

  $cutBtn.on('click', cutGrass);

  displayMenu();
  displayStats();
});

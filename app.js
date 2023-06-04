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
- object for user ✅
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

// const $upgradeContainer = $('<div>')
//   .addClass('btn-group')
//   .attr('role', 'group');

const $upgradeBtn = $('<button>')
  .attr('type', 'button')
  .attr('id', 'upgradeBtn')
  .addClass('col btn btn-primary m-1')
  .text('Upgrade');

// const $downdownMenuUl = $('<ul>').addClass('dropdown-menu');
// const $dropDownItem = $('<li>').addClass('dropdown-item').text('Scissors');

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

// function to display buttons
function displayMenu() {
  $menu.append($btnContainer);
  $btnContainer.append($cutBtn, $upgradeBtn, $resetBtn, $endBtn);
  // $upgradeContainer.append($upgradeBtn);
  // $upgradeBtn.append($downdownMenuUl);
  // $downdownMenuUl.append($dropDownItem);
  //appends
  $('body').append($menu);
}

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
const $toolboxTitle = $('<h2>')
  .text('Tools')
  .addClass('toolTitle mt-3 container');
const $toolsContainer = $('<div>')
  .addClass('container btn-group')
  .attr('role', 'group')
  .attr('aria-label', 'Basic radio toggle button group')
  .attr('id', 'tool-container');

//teeth
const $teethInput = $('<input>')
  .addClass('btn-check')
  .attr('type', 'radio')
  .attr('name', 'btnradio')
  .attr('checked', '')
  .attr('autocomplete', 'off')
  .attr('id', 'teeth-input');
const $teethLabel = $('<label>')
  .addClass('btn btn-outline-primary')
  .attr('for', 'teeth-input')
  .text('Teeth');

//scissors
const $scissorsInput = $('<input>')
  .addClass('btn-check')
  .attr('type', 'radio')
  .attr('name', 'btnradio')
  .attr('autocomplete', 'off')
  .attr('id', 'scissors-input');
const $scissorsLabel = $('<label>')
  .addClass('btn btn-outline-primary')
  .attr('for', 'scissors-input')
  .text('Scissors');

//push mower
const $pushMowerInput = $('<input>')
  .addClass('btn-check')
  .attr('type', 'radio')
  .attr('name', 'btnradio')
  .attr('autocomplete', 'off')
  .attr('id', 'pushMower-input');
const $pushMowerLabel = $('<label>')
  .addClass('btn btn-outline-primary')
  .attr('for', 'pushMower-input')
  .text('Push Mower');

//power mower
const $powerInput = $('<input>')
  .addClass('btn-check')
  .attr('type', 'radio')
  .attr('name', 'btnradio')
  .attr('autocomplete', 'off')
  .attr('id', 'power-input');
const $powerLabel = $('<label>')
  .addClass('btn btn-outline-primary')
  .attr('for', 'power-input')
  .text('Power Mower');

//student
const $studentInput = $('<input>')
  .addClass('btn-check')
  .attr('type', 'radio')
  .attr('name', 'btnradio')
  .attr('autocomplete', 'off')
  .attr('id', 'student-input');
const $studentLabel = $('<label>')
  .addClass('btn btn-outline-primary')
  .attr('for', 'student-input')
  .text('Hire Students');

//robot
const $robotInput = $('<input>')
  .addClass('btn-check')
  .attr('type', 'radio')
  .attr('name', 'btnradio')
  .attr('autocomplete', 'off')
  .attr('id', 'robot-input');
const $robotLabel = $('<label>')
  .addClass('btn btn-outline-primary')
  .attr('for', 'robot-input')
  .text('Robot');

//display tool radio container
function displayTools() {
  $('body').append($toolboxTitle, $toolsContainer);
  $toolsContainer.append(
    $teethInput,
    $teethLabel,
    $scissorsInput,
    $scissorsLabel,
    $pushMowerInput,
    $pushMowerLabel,
    $powerInput,
    $powerLabel,
    $studentInput,
    $studentLabel,
    $robotInput,
    $robotLabel
  );
}

const $messageContainer = $('<div>').addClass('container');
const $gameMessage = $('<p>').addClass('message');
function displayMessage() {
  $('body').append($messageContainer);
  $messageContainer.append($gameMessage);
}

//ran num for game message
function ranNum(MAX_NUM, MIN_NUM) {
  return Math.floor(Math.random() * (MAX_NUM - MIN_NUM) + MIN_NUM);
}

//game variables and logic
//obj for user info
const userStats = {
  balance: 0,
  lawncount: 0,
  currentTool: cutGrass,
  teeth: {
    toolName: 'Teeth',
    own: true,
    profit: 1,
    cost: 0,
  },
  scissors: {
    toolName: 'Scissors',
    own: false,
    profit: 5,
    cost: 10,
  },
  pushMower: {
    toolName: 'Push Mower',
    own: false,
    profit: 25,
    cost: 50,
  },
  powerMower: {
    toolName: 'Power Mower',
    own: false,
    profit: 50,
    cost: 250,
  },
  students: {
    toolName: 'Students',
    own: false,
    profit: 100,
    cost: 500,
  },
  robots: {
    toolName: 'Robots',
    own: false,
    profit: 250,
    cost: 5000,
  },
};

function cutGrass() {
  userStats.lawncount += 1;
  toolSelected();
  $balanceAmount.text(`$${userStats.balance}`);
  $lawnAmount.text(`${userStats.lawncount}`);
  const $selectedBtn = $('input[type=radio]:checked').attr('id');
  // console.log(userStats);
  //   console.log(`current tool: ${userStats.currentTool}`);
}

//function to check which radio button is selected
function toolSelected() {
  const $selectedBtn = $('input[type=radio]:checked').attr('id');
  switch ($selectedBtn) {
    case 'scissors-input':
      userStats.scissors.own = true;
      cutGrassScissors();
      break;
    case 'pushMower-input':
      userStats.pushMower.own = true;
      cutGrassPushMower();
      break;
    case 'power-input':
      userStats.powerMower.own = true;
      cutGrassPowerMower();
      break;
    case 'student-input':
      userStats.students.own = true;
      cutGrassStudents();
      break;
    case 'robot-input':
      userStats.robots.own = true;
      cutGrassRobots();
      break;
    default:
      cutGrassTeeth();
      break;
  }
}

//fucntions for different tools
function cutGrassTeeth() {
  userStats.balance += userStats.teeth.profit;
  $gameMessage.text(
    `You spent ${ranNum(
      70,
      35
    )} hours cutting a customers lawn with yout teeth and made $${
      userStats.teeth.profit
    }!`
  );
}
function cutGrassScissors() {
  userStats.balance += userStats.scissors.profit;
  $gameMessage.text(
    `You spent ${ranNum(
      35,
      17
    )} hours cutting a customers lawn with a pair of scissors and made $${
      userStats.scissors.profit
    }!`
  );
}
function cutGrassPushMower() {
  userStats.balance += userStats.pushMower.profit;
  $gameMessage.text(
    `You spent ${ranNum(
      10,
      6
    )} hours cutting a customers lawn with your push mower and made $${
      userStats.pushMower.profit
    }!`
  );
}
function cutGrassPowerMower() {
  userStats.balance += userStats.powerMower.profit;
  $gameMessage.text(
    `You spent ${ranNum(
      6,
      4
    )} hours cutting a customers lawn with your power mower and made $${
      userStats.powerMower.profit
    }!`
  );
}
function cutGrassStudents() {
  userStats.balance += userStats.students.profit;
  $gameMessage.text(
    `You spent ${ranNum(
      3,
      1
    )} hour(s) watching the students you hired cut a customers lawn made $${
      userStats.students.profit
    }!`
  );
}
function cutGrassRobots() {
  userStats.balance += userStats.robots.profit;
  $gameMessage.text(
    `Your Robots spent ${ranNum(
      55,
      35
    )} minutes cutting a customers lawn and made you $${
      userStats.robots.profit
    }!`
  );
}

//jquery
$(() => {
  const $h1 = $('<h1>').text('Landscaper').addClass('title');
  $('body').append($h1);
  $('body').addClass('container');

  $cutBtn.on('click', userStats.currentTool);

  // $scissorsInput.on('click', () => {
  //   userStats.currentTool = cutGrassScissors;
  // });

  // $('#tool-container input').on('change', () => {
  //   console.log(
  //     `${$('input[name=btnradio]:checked', '#tool-container').val()}`
  //   );
  // });

  // $('.btn-check').on('change', function () {
  //   console.log($('input[name="btnradio"]:checked').attr('id'));
  // });

  displayMenu();
  displayStats();
  displayTools();
  displayMessage();
});

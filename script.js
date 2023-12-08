/* 
    TODO for students
        General Setup:
            - This object is framed for you to fill out the values to help customize your game.
            - This will alter the browser to display your game title. The "Quick Notes" modal will also detail your information along with the description (desc) of what your game is about. It is important to highlight key commands that you want the player to use.
            - The startingRoomDescription will display what the player sees upon coming to your project.

        Do NOT alter the name of this object.

        Both exports are required in order for this project to run.

        - index.html should be running in your browser through the build process.
            - use your browsers console throughout testing.
*/

//changed properties of the gameDetails object to store my own values
export const gameDetails = {
  title: "My Version of Zorkington",
  desc: "Welcome to the world of grocery store. Here are some quick rules & concepts. You can enter aisles; view items, check_price, pickup them, put_back items. Each aisle has items that cannot be picked up. Finally, you can exit the store.",
  author: "Irina Startseva",
  cohort: "SBPT-2023",
  startingRoomDescription:
    "What you see before you is a grocery store entrance. You see large carts, small carts, and baskets.  You already have a cart to put items in. There are also promo stands notifiying shoppers which products are currently on sale. You start at the produce aisle. You can pickup lettuce, cucumbers, and broccoli from the shelves. You can enter bakery aisle from here.",
  playerCommands: [
    // replace these with your games commands as needed
    //'inspect', 'view', 'look', 'pickup', 'enter'
    "view",
    "pickup",
    "check_price",
    "put_back",
    "view_cart",
    "exit",
  ],
  // Commands are basic things that a player can do throughout the game besides possibly moving to another room. This line will populate on the footer of your game for players to reference.
  // This shouldn't be more than 6-8 different commands.
};
//created class Aisle
class Aisle {
  constructor({ items, aisle_description, exits }) {
    this.items = items;
    this.aisle_description = aisle_description;
    this.exits = exits;
  }
}

//created instance of class Aisle
let produce = new Aisle({
  items: ["lettuce", "cucumbers", "broccoli"],
  aisle_description:
    "You are in produce aisle. You can pickup lettuce, cucumbers, and broccoli from the shelves. You can enter bakery aisle from here",
  exits: ["bakery"],
});

//another instance of class Aisle
let bakery = new Aisle({
  items: ["dougnuts", "cookies"],
  aisle_description:
    "You are in bakery aisle. You can pickup doughnuts or cookies. You can enter produce or dairy aisle from here",
  exits: ["produce", "dairy"],
});

let dairy = new Aisle({
  items: ["milk", "butter"],
  aisle_description:
    "You are in dairy aisle. You can pickup milk and butter. You can enter bakery or meat aisles from here.",
  exits: ["bakery", "meat"],
});

let meat = new Aisle({
  items: ["chicken", "beef"],
  aisle_description:
    "You are in meat aisle. You can pickup chicken or beef. You can enter dairy, bakery, or chcekout from here",
  exits: ["dairy", "bakery", "checkout"],
});

let checkout = new Aisle({
  items: ["self_checkout", "cashier_register"],
  aisle_description: "You are at checkout aisle.",
  exits: ["produce"],
});

//Array to store picked up items
let cart = [];

//created class Item
class Item {
  constructor({ item_name, item_description, item_location, can_pickup }) {
    this.item_name = item_name;
    this.item_description = item_description;
    this.item_location = item_location;
    this.can_pickup = can_pickup;
  }

  addToCart() {
    //this.can_pickup ? cart.push(this.item_name) :  "Cannot add this item to cart";

    cart.push(this.item_name);
  }
}

let lettuce = new Item({
  item_name: "lettuce",
  item_description: "fresh iceberg lettuce",
  item_location: produce,
  can_pickup: true,
});

let cucumber = new Item({
  item_name: "cucumber",
  item_description: "Organic English cucumbers, Made in Mexico",
  item_location: produce,
  can_pickup: true,
});

let broccoli = new Item({
  item_name: "brocoli",
  item_description: "Organic broccoli crowns",
  item_location: produce,
  can_pickup: true,
});

let shelf = new Item({
  item_name: "shelf",
  item_description: "a shelf to display products",
  item_location: produce,
  can_pickup: false,
});

let doughnuts = new Item({
  item_name: "doughnuts",
  item_description: "plain, glazed, and chocolate doughnuts",
  item_location: bakery,
  can_pickup: true,
});

let cookies = new Item({
  item_name: "cookies",
  item_description: "raspberry jelly, peach jelly, chocolate cookies",
  item_location: bakery,
  can_pickup: true,
});

let dispaly_stand = new Item({
  item_name: "dispaly_stand",
  item_description: "display stand with mockup of sweet treats",
  item_location: bakery,
  can_pickup: false,
});

let milk = new Item({
  item_name: "milk",
  item_description: "a cart of milk",
  item_location: dairy,
  can_pickup: true,
});

let butter = new Item({
  item_name: "butter",
  item_description: "Kerrygold Grass-Fed Pure Irish Unsalted Butter - 8oz Foil",
  item_location: dairy,
  can_pickup: true,
});

let refregirator = new Item({
  item_name: "refregirator",
  item_description: "A refregirator with dairy items",
  item_location: dairy,
  can_pickup: false,
});

let chicken = new Item({
  item_name: "chicken",
  item_description: "Organic chicken breast",
  item_location: meat,
  can_pickup: true,
})

let beef = new Item({
  item_name: "beef",
  item_description: "Angus beef",
  item_location: meat,
  can_pickup: true,
})

let wet_floor_sign = new Item({
  item_name: "wet_floor_sign",
  item_description: "A yellow 'Caution! Wet floor' sign",
  item_location: meat,
  can_pickup: false,
})

let self_checkout = new Item({
  item_name: "self-checkout",
  item_description: "A self-checkout register",
  item_location: checkout,
  can_pickup: false,
});

let cashier_register = new Item({
  item_name: "cashier-register",
  item_description: "A cashier-register with a moving belt",
  item_location: checkout,
  can_pickup: false,
});

// Your code here
//machine state to create rules how a player can move between aisle
let state = {
  produce: produce,
  bakery: bakery,
  dairy: dairy,
  meat: meat,
  checkout: checkout,
};

let itemState = {
  lettuce: lettuce,
  cucumber: cucumber,
  broccoli: broccoli,
  shelf: shelf,
  refregirator: refregirator,
  self_checkout: self_checkout,
  cashier_register: cashier_register,
  dispaly_stand: dispaly_stand,
  cookies: cookies,
  doughnuts: doughnuts,
  milk: milk,
  butter: butter,
  chicken: chicken,
  beef: beef
};

let items_array = [
  "lettuce",
  "cucumber",
  "broccoli",
  "doughnuts",
  "cookies",
  "milk",
  "butter",
  "chicken",
  "beef",
  "shelf",
  "self_checkout",
  "cashier_register",
  "refregirator",
];

//dictionary of prices
let prices_dictionary = new Map([
  ["lettuce", "$2.00 each"],
  ["cucumber", "$1,75 each"],
  ["broccoli", "$2.50 per pound"],
  ["cookies", "$1.49 each"],
  ["doughnuts", "$2.00 each"],
  ["milk", "$1.87 for half gallon"],
  ["butter", "$2.80 each"],
  ["chicken", "$3.65 per pound"],
  ["beef", '$4.00 per pound']
]);

//initial state
let currentState = produce;

export const domDisplay = (playerInput) => {
  //split user input
  const [action, target] = playerInput.split(" ");

  //conditional to check if user input is valid action and target
  if (action == "enter" && currentState.exits.includes(target)) {
    currentState = state[target];
    return currentState.aisle_description;
  } else if (action == "exit") {
    return "Thanks for playing";
  }

  //view action doesn't work
  else if (action == "view" && items_array.includes(target)) {
    //console.log(itemState[target]);
    return itemState[target].item_description;
  }

  //doesn't work
  else if (action == "pickup" && items_array.includes(target)) {
    //target=='lettuce'||'cucumber'||'broccoli'||'doughnuts'||'cookies'||'milk'||'butter'||'chicken'||'meat')
    //doesn't work
    /*console.log(itemState[target].can_pickup);
    itemState[target].addToCart();
    return `${target} has been added to cart`;
    */

    if (itemState[target].can_pickup == true) {
      itemState[target].addToCart();
      return `${target} has been added to the cart`;
    } else {
      return "You cannot pick this up";
    }
  } else if (action == "check_price" && items_array.includes(target)) {
    return prices_dictionary.get(target);
  } else if (action == "put_back") {
    let index = cart.indexOf(target);
    cart.splice(index, 1);
    return `Updated cart: ${cart}`;
  } else if (action == "view_cart") {
    return `Your cart has: ${cart} \nYou can put an item back, pick another item or enter another aisle`;
  }
  //if user input is invalid
  else return `I don\'t know how to ${playerInput}`;

  /* 
        TODO: for students
        - This function must return a string. 
        - This will be the information that is displayed within the browsers game interface above the users input field.

        - This function name cannot be altered. 
        - "playerInput" is whatever text the user is typing within the input field in the browser after hitting the ENTER key.
            - test this out with a console log.

        What your player should be able to do (checklist):
            - move between rooms
            - view current room
            - pickup moveable items
                - there should be at least 2 items that cannot be moved.
            - view player inventory
        
        Stretch Goals:
            - drop items in "current room" (if a player picks up an item in one room and moves to another, they should be able to remove it from their inventory)
            - create win/lose conditions.
                - this could be a puzzle that may require an item to be within the players inventory to move forward, etc.

        HINTS:
            - consider the various methods that are available to use.
            - arrays are a great way to hold "lists".
            - You are not limited to just the exported function. Build additional functions and don't forget to hold the return within a variable.
            - Review notes!
                - Have them open as you build.
                - break down each problem into small chunks
                    - What is the process of picking up an item exactly? ex: Look. Pick from a list of items. Put into players list of items... 
    */

  // Your code here
};

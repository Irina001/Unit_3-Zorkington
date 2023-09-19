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
    title: 'My Version of Zorkington',
    desc: 'Welcome to the world of grocery store. Here are some quick rules & concepts. You can move along aisles, check products expiration dates, put items back or in your cart. Finally, you can pay and exit the store',
    author: 'Irina Startseva',
    cohort: 'SBPT-2023',
    startingRoomDescription: 'What you see before you is a grocery store entrance. You see large carts, small carts, and baskets.  You already have a cart. There are also promo stands notifiying shoppers which products are currently on sale. You can enter the produce aisle from here. You can exit the store right away, too.',
    playerCommands: [
        // replace these with your games commands as needed
       //'inspect', 'view', 'look', 'pickup', 'enter'
       'enter', 'view', 'pickup', 'check_expiration_date', 'put_back', 'put_in_cart', 'pay', 'exit'
    ]
    // Commands are basic things that a player can do throughout the game besides possibly moving to another room. This line will populate on the footer of your game for players to reference. 
    // This shouldn't be more than 6-8 different commands.
}

// Your code here
/*
let aisle = {
    entrance:['produce_aisle'],
    produce_aisle:['bakery_aisle'],
    bakery_aisle: ['dairy_aisle', 'meat_asile'],
    dairy_aisle: ['meat_asile','bakery_asile'],
    meat_asile: ['dairy_asile','bakery_asile'],
    chekout_aisle:['entrance']
};
*/

//let currentState = 'entrance';

export const domDisplay = (playerInput) => {
return playerInput;

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
} 

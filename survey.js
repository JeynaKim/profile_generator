const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("What's your name? Nicknames are also acceptable ", (name) => {
  console.log(`Oh, so your name is: ${name}`); 

  rl.question("What's an activity you like doing? ", (activity) => {
    console.log(`Oh, so your favourite acitivity is: ${activity}`);
    
    rl.question("Which meal is your favourite (eg: dinner, brunch, etc.) ", (mealtype) => {
      console.log(`Oh, so your favourite mealtype is: ${mealtype}`);

      rl.question("What's your favourite thing to eat for that meal? ", (meal) => {
        console.log(`Oh, so your favourite meal is:  ${meal}`);
      
        rl.question("What is your superpower? In a few words, tell us what you are amazing at! ", (superpower) => {
          console.log(`Oh, so your superpower is: ${superpower}`);

            console.log(`Thanks for your information ${name}! So your favourite activity is ${activity} and your favourit mealtype is ${mealtype} and you love ${meal}. And you have a superpower of ${superpower}!`);
      
          rl.close();
        });
      });
    });
  });
});





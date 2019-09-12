## Link to Live Site:

Front End: https://diamond-calculator.herokuapp.com/

#### Back End:

Express.js and Postgres:
Used Nodemon, Sequelize, Morgan Parser, cors, with a Postgres database.
You will need to set up your local Postgres database.

1. Clone Repo
2. npm install.
3.

#### Front-end:

React with Vanilla CSS:

1. Clone Repo.
2. npm install.
3. npm start.

## Disclaimer:

I have learned the diamond industry has a ton of variation. Although my program can produce calculations, no way are they 100% accurate. But also, the variation between different diamond calculation platforms is astonishing. So I don't feel so bad. There are an insane (and exiting) amount of factors to take into account with this type of price generator. One that is constantly adjusting. And it makes me ponder machine learning implementation, or if it's best left up to the human eye.

Alot of my calculations are close to similar calculations given by https://www.diamonds.pro/education/diamond-prices/, which I am proud of. There are a lot of factors to take into account!

## Resources:

1. https://www.diamonds.pro/education/diamond-prices/

   - I used the Rapaport list of comparing clarity and color values. Thus making up my percentIncrease Arrays which I used to multiply my baseCase value by. I used their calcualtion tool as a reference to see how accurate my algorithms is.

2. https://www.gemsociety.org/article/diamond-shapes-price-size/

   - I used this to determine differences in cut. The difference in value between them make up my cutPercentIncrease Array. Although some of the low to high values are different than what was instructed, I switch value increases accordingly. (Ex. in this list it shows Cushion costing less than Pricess, so I switched them to fit the instructions)

3. https://www.pricescope.com/diamond-prices/emerald

- I used this chart to try to get a good idea of what a baseCase value would be.

6. https://www.diamondkarma.com/diamond_calculator

- I used this to get an idea of what a baseCase value would be, as well as testing the accuracy of my calculations.

7. https://beyond4cs.com/clarity/if-and-fl/

- I used this to determine the difference in value between a FL and IF diamond.

## Implementation:

#### Data is located in the db.json file, alternatively you can view all data on the front end side.

1. I have a functioning front end where a user fills out a form, and can send a post request to my express back end. I intercept this postin my controller, execute my calculation functions (based on the data in the post request of course), to output a "soldFor" integer, add a soldFor key to my object with the calculated value , then save this in my database. The asynch response is sent back to the front end for the user to see the value of their diamond.

2. I start with a lowest case scenario(aka. baseCase value). Which is the least valuable 1 carat diamond option (emerald, Fancy, I3 = \$275). I used the Rapaport list to find the percent value increase for each color and clarity value. I was originally going to have each value have it's own custom array based on the Rapaport scale of grading (these values are located in my "Adapters" folder but commented out). I ended up doing an average of the increase (using a single clarity array that is averaged, and a single color array that is the average) for my first two functions. I use GemSociety to find percent increases of different cuts. And a generalized carat increase formula to mimic what is kind of an exponential increase.

3. I have created a function for each calculation. I begin the valuation with clarity, by looping through the clarityPercentIncrease array, where each iteration percent is multiplied by the previous value, thus compounding. Then I move on to color and cut in the same fashion. Finally I arrive at carat. Each functions return value is passed to the next in the above order, and the final function returns the final value, then it's saved to the database in my controller.

## Assumptions:

1. Generally, the assumption for my calculations (can be dialed in with more time) are that a diamond valuation starts with clarity, then color, then cut, and finally carat.

2. Some of my informational resources differ from the instruction (the low's to high's for cut are different in my research) so I have switched values to meet my needs.

3. That the base value of a 1 carat diamond within the constraints given to me are \$275. This is from https://www.diamondkarma.com/diamond_calculator, and some data from Worthy.com.

4. All percent calculations are rounded to the 1000th.

5. You don't care all that much about M-N, so I made it one value.

## Improvements:

Conditional carat value increases base on cut, color, and clarity factors. This would require a lot more research than I can put in for this 3 day project.

## Conclusion:

This was a really fun exercise that is really easy to nerd out on and get deep into. I know more about diamonds than I ever thought I would.

# Wardley Maps BattleCamp

A Wardley Map BattleCamp is an advanced Wardley Map workshop dedicated to teaching and training people (and robots!) to do Gameplay. Its purpose is to show that there are other important phases of the Wardley Map Strategy Cycle, such as "Climatic Patterns", "Doctrine" and "Gameplay".

The **focus** of this workshop is **on playing the "game"**. Its goal is to help attendees to utilize all of the phases of Wardley Map Strategy Cycle and understand that you will be doing all of the phases in a real-life scenario.

**You should do all of the phases**.

Not:

- "I'm just going to do a gameplay move"
- "I'm just going to do a map"
- "I'm just going to predict based on a map and some climatic patterns"
- "I'm just going to optimize a bit my company using the Doctrines"

The purpose is to do all of the phases and to practice them.

*Note:* This workshop is a "simulation" of a real-life scenario. Consider it as such, a simulation.

## Requirements to Attend

In order to attend a workshop, you should at least have read the book / created several Wardley Maps yourself, read and learned some of the Climatic Patterns, Doctrine and Gameplay. This is an advanced workshop which expects attendees to have at least some real-life experience with Wardley Maps.

## Requirements to Organize

In order to organize a workshop yourself, you must have at least played two BattleCamps in the past.
It's not mandatory, though the rules and the game are complex and require experience with Wardley Maps.

Public and community events must be free, in case you're doing something privately, you are free to charge for your time.

## Workshop Structure

### The Goal

To Win. To be the dominant company in the given market, meaning around 60% of the marketshare.

### Your role and the attendee structure

You are a company board member.

Attendees are divided into two teams with random team members.
*(In real life, you will rarely have the choice over who you work with, so it's better to learn to cooperate and create a team atmosphere focusing on a common goal)*

**There needs to be a team of at least two judges which keep track of the workshop statistics and gameplay.**

Each company team belongs to a single company, which is doing business in a single market. Each company has a different scenario.

**Two or three teams of random team members. Minimum 3 members per team. Equal members per team.**

### Game structure

Turn based. Max 40 rounds. Each round lasts for 5 minutes (simultaneous rounds). The teams need to be in different rooms.

After the 5 minute time limit, the judges then enter the separate rooms and without sharing any info get the plays from the teams.

In the next 1-2 minutes, the judges evaluate the gameplays and approve or deny (if the move is just a card play without describing the move its immediatelly rejected.)

### Structure

Each company has three main resources.

1. Time (represented in points, each team has 10 time points per round.)
2. Capital (represented in cash, e.g. dollars)
3. Market share (represented in percentages)

All companies operate in a single market developing a single product. 

### Scenario

The judges choose a single market along with a single product the companies are competing in. They define the market price of the product (e.g. $50) and they draw a Wardley Map based on the Customer need, the product that fulfills that Customer need and its value chain.

#### Example scenario from the first BattleCamp

For example, the first BattleCamp, organized by Map Meetup Belgrade, chose the healthcare industry, more specifically flue vaccinations. Defined a market without a public healthcare system and two teams that were playing the BattleCamp were two healtcare clinics that were administering and selling a flu vaccine with an average market cost of $100.

The first company was long-running business, with over 50 years. Family made business, with their own "custom built" offices and laboratories. They have hired nurses, lab assistants and doctors. They also have bought an application on the market for the clinic, to schedule vaccination appointments, communicate with the customers and so on. Charging $120 per flue therapy, with a product cost of $70. Their market share is 18%.

The second company is a recently started business, a clinic with about 5 years on the market. Rents its office space and lab space. Has hired nurses, lab assistants and doctors. Have developed their own application for the clinic with similar options as their competitor, they "believe they are a healtcare tech startup". Charging $100 per flue therapy, with a cost of $55. Their marketshare is 7%.

#### Market and Income

The market size is 100,000 total units sold per quarter (round).

`Market share` * `the total market size` * `your product price` = `your revenue you have made`.

*Example:*
Your market share = 8% ~ `0.08`
Your product price = `$100`

`0.08` * `100,000` * `$100` = `$800,000` revenue / round.

But **this isn't your income.** :) You must subtract the product cost (which is calculated by using the capital flows of your Wardley Map, if you don't have a map, well, you won't know which components cost the most).
If your product cost is `$80` per product sold, your income would be `$160,000`.

The judges **must** calculate the income each round for each company. The judges **must not** share data between teams.
_(A good team will understand that they should calculate the other team's income too)_

### Product Cost

Product cost is calculated using the Capital Flows of your Wardley Map.

![Capital Flow Example](https://github.com/simalexan/battlecamp/images/capital-flow.png "Example Capital Flow")

### Product Price Elasticity

The price is elastic in an easy setting.

### Evolution versus Adoption

_"Everything evolves"_ - one of Simon's Climactic Patterns.

Depending on your position on the market, you may want to either evolve or adopt a newly evolved product. Being a first (and fast) follower might be good enough. (e.g. Microsoft following Amazon's lead).

If a certain component is in its Product phase, you may want to evolve it to Utility first and gain competitive advantage, build a tower of income around it ("Tower and Moat") or you may want to wait for someone to evolve it first and then focus on building on top ("Building Higher Order Value").

Evolving a component always costs more and takes more effort than adopting.

## BattleCamp Cards

**BattleCamp Gameplay cards are guides for gameplay and should be only viewed as such.** In real life there is no "do a play and gain 5% of marketshare". That doesn't exist and never look at it like that. If someone asks or tells that they tried "the play and didn't get that 5% of the marketshare" shouldn't ever play games.

Cards from the first, initial BattleCamp are going to be open source and in the folder `cards`. We will be slowly adding them.

The card data is contained in the `src/cards.json`. You can change the data there and then use `generate-cards.js` to generate a new set of cards with the updated information and in different colors, text, effects and so on.

Any constructive suggestion in improving the balance or demonstrating a higher / lower value of a card gameplay is always welcome and appreciated.

## Rights

Wardley Maps belong to Simon Wardley.

Battle Camp is following the licenses defined by the Wardley Maps, and is under the CC by SA 4.0 license.

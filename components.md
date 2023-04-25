# Data layer

## Data

- A list of characters --> CharactersStructure[]
- Each character <-- object with interface CharacterStructure
  - name
  - picture
  - weight
  - mass
  - creation date

## Data modifications

- Load list of characters
- Delete character

# Components

## App

- Render the card-list
- Show the header

## Button

- Receives a prop with the text of the button
- Receives a prop with the action on click
- Calls the function that deletes the character

## CharactersList

- State: the collection of gentlemen
- Render characters

## Character

- Receives a prop with a character
- Render the character
- Receives a prop with the action on click
- Render the button component

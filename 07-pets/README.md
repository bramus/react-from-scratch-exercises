# React From Scratch Exercise: State and `useState`: Complex State

## Before you begin

1. Create new React App using `create-react-app`
2. Replace the `src/` folder from your fresh app, and replace it with the `src` folder from this exercise
3. Start the dev server and verify the contents on screen. It should show you a list of pets.
4. Familiarize yourself with the app structure

## Assignment

### The Form itself

1. Adjust the form so that `<Pets />` includes the `<PetForm />`
2. Adjust `<PetForm />` so that its field values are stored in State.
    - 💡 TIP: Begin with `useState` for each field
    - Once that works adjust your state so that it uses a single state Object
3. 💪 EXTRA: Extend the form so that is also contains a `birthyear` field (`input type="number"`)

### Saving and Removing Pets

1. Implement the actual saving of the form by implementing `handleSubmit`
    - Have it call `setPets` to manipulate the `pets`
    - 💡 TIP: use the contained `genUuid()` to generate a UUID.
    - 💪 EXTRA: Check validity of the data before storing it
2. 💪 EXTRA: Adjust the list of pets and add an option to remove a pet
    - 💡 TIP: The CSS already caters for three DOM Nodes inside `.c-pet`
3. 💪 EXTRA: Persist the pets in [LocalStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage) using Effects

## Goals

- Gain more familiarity with Components and Passing Props
- Gain more familiarity with State and the `useState` Hook
- Gain familiarity with Complex State
- Gain familiarity with Immutability

### References

- [Immutable Objects (dynamic keys)](https://react-from-scratch-slides.netlify.com/extras/recipes#13)
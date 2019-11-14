# React From Scratch Exercise: 01: Animalas

## Assignment

- Given is a list of `animals.json`, a set of images, and some CSS.

- Create a local React app using `create-react-app` named `01-animals` and start the development server

- Overwrite the `App.css` with the one contained in this repo.

- Adjust `App.js` so that it:

    - Imports the `animals.json`

    - Loop over all animals and renders some HTML per animal:

        - Animals with `min` and `max` set:

            ```html
            <div class="animal">
                <h2 class="animal_name">African Wild Dog</h2>
                <img class="animal_image" src="/images/african-wild-dog.jpg" alt="African Wild Dog" title="African Wild Dog">
                <p class="animal_estimate">Estimate: Between 3000 and 5000</p>
            </div>
            ```

        - Animals with only `max` set:

            ```html
            <div class="animal">
                <h2 class="animal_name">Amur Leopard</h2>
                <img class="animal_image" src="/images/amur-leopard.jpg" alt="Amur Leopard" title="Amur Leopard">
                <p class="animal_estimate">Estimate: About 60 remain</p>
            </div>
            ```

        - 💡 Images can be placed in the `./public` folder, as they don't need to be precompiled

        - 💡 There's a wrapping `<div class="animals">` required around each `<div class="animal">`

## Goals

- Set up your local dev environment
- Gain familiarity with NPM/Yarn
- Find your way around the `create-react-app` folder structure

- Gain familiarity with ES2015 Template Literals
- Gain familiarity with JSX
- Gain familiarity with Arrow Functions
- Gain familiarity with Array Loops

## References

- /extras/dev-environment
- https://create-react-app.dev/docs/getting-started

- /extras/esnext#const-let-var
- /extras/esnext#arrow-functions
- /extras/esnext#string-interpolation
- /extras/esnext#imports-exports
- /extras/recipes#jsx-tricks-loops-array
- /extras/esnext#array-functions

- https://imgur.com/gallery/NVNsyel
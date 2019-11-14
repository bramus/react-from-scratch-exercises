# React From Scratch Exercise: 01: Animalas

## Assignment

- Given is a list of `animals.json`, a set of images, and some CSS.

- Create a local React app using `create-react-app` named `01-animals` and start the development server

- Overwrite the `App.css` with the one contained in this repo.

- Adjust `App.js` so that it:

    - Imports the `animals.json` into a variable `animals`

    - Uses one wrapping `<div className="animals">`

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

## Goals

- Set up your local dev environment
- Gain familiarity with NPM/Yarn
- Find your way around the `create-react-app` folder structure

- Gain familiarity with ES2015 Template Literals
- Gain familiarity with JSX
- Gain familiarity with Arrow Functions
- Gain familiarity with Array Loops

## References

### Dev Environment

- [https://react-from-scratch-slides.netlify.com/extras/dev-environment](https://react-from-scratch-slides.netlify.com/extras/dev-environment)
- [https://create-react-app.dev/docs/getting-started](https://create-react-app.dev/docs/getting-started)

### Assignment

- [https://react-from-scratch-slides.netlify.com/extras/esnext#const-let-var](https://react-from-scratch-slides.netlify.com/extras/esnext#const-let-var)
- [https://react-from-scratch-slides.netlify.com/extras/esnext#arrow-functions](https://react-from-scratch-slides.netlify.com/extras/esnext#arrow-functions)
- [https://react-from-scratch-slides.netlify.com/extras/esnext#string-interpolation](https://react-from-scratch-slides.netlify.com/extras/esnext#string-interpolation)
- [https://react-from-scratch-slides.netlify.com/extras/esnext#imports-exports](https://react-from-scratch-slides.netlify.com/extras/esnext#imports-exports)
- [https://react-from-scratch-slides.netlify.com/extras/recipes#jsx-tricks-loops-array](https://react-from-scratch-slides.netlify.com/extras/recipes#jsx-tricks-loops-array)
- [https://react-from-scratch-slides.netlify.com/extras/esnext#array-functions](https://react-from-scratch-slides.netlify.com/extras/esnext#array-functions)

### Image Resources

- [https://imgur.com/gallery/NVNsyel](https://imgur.com/gallery/NVNsyel)
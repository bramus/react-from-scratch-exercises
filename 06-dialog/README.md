# React From Scratch Exercise: Referencing DOM Nodes with `useRef`

## Assignment

1. Create a new React app using `create-react-app`
2. Replace the CSS with the CSS contained in the `src` folder of this assignment
3. Adjust `<App />` so that it returns a `<button>` and a `<dialog>`
    
    ```jsx
    <>
        <button>Show Dialog</button>
        <dialog>
            {showDialog && (
                <>
                    <p>I am the contents of the dialog!</p>
                    <a href="#" className="dialog_close">&times;</a>
                </>
            )}
        </dialog>
    </>
    ```

4. Implement the functionality:

    - Pressing “Show Dialog” shows the dialog (`$dialog.showModal()`)
    - Pressing `a.dialog_close` closes the dialog (`$dialog.close()`)



## Goals

- Gain familiarity with the `useRef` Hook

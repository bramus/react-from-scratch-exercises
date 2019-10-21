# React From Scratch Exercise: Responding to State changes with `useEffect`

## Before you begin

1. Sign up for a Giphy API Key at https://developers.giphy.com/dashboard/?create=true
2. Familiarize yourself with the [Giphy Search Endpoint](https://developers.giphy.com/docs/api/endpoint/#search)

## Assignment

1. Adjust the solution from `03-simpleform` so that it queries the Giphy Search Endpoint for the term entered

    - 💡 TIP: Prevent multiple searches by keeping track of a `isSearching` flag, which you clear when the effect is done.
    - ⚠️ CAUTION: Keep an eye on your browser's DevTools' Connections panel to prevent you from hammering the Giphy API
    - 🗑 Remove the “Search!" button, it is no longer needed

2. Output the results in the following HTML structure

    ```html
    <div class="gifs">
        <div class="gif">
            <img src="…" height="…" width="…" alt="…" title="…" />
        </div>
    </div>
    ```

3. 💪 EXTRA: Implement Pagination

## Goals

- Gain more familiarity with the `useEffect` Hook
- Gain familiarity with the `fetch` API
- Gain familiarity with Async Functions and `await`
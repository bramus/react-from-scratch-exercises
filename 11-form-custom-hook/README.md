# React From Scratch Exercise: Custom Hooks

## Assignment

1. Create a new React app
2. Adjust the `<App />` so that it outputs a form asking for a `username` and a `password` 
3. Create a Custom Hook to more easily work with the form data

## Potential Routes to take

1. One hook `useFormData` to store and handle all data:

    ```js
    const { formData, onChange } = useFormData({
        username: 'bramus',
        password: '',
    });
    ```

2. One hook `useFormField` per field:

    ```js
    const usernameProps = useFormField({ type: 'text', name: 'username', value: 'bramus' });
    const passwordProps = useFormField({ type: 'password', name: 'password', value: '' });
    ```

## Goals

- Gain more familiarity with Custom Hooks
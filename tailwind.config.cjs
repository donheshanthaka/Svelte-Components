/** @type {import('tailwindcss').Config}*/
module.exports = {
    mode: "jit",
    purge: ["./src/**/*.svelte"],
    theme: {
        extend: {
            colors: {
                primary: '#3b71ca', // Replace with your desired color value
            },
            aspectRatio: {
                'h-1': '1',
                'w-1': '1',
                'w-2': '2',
            },
        },
    },
    plugins: [
        // require('@tailwindcss/aspect-ratio'),
    ],
};


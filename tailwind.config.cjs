/** @type {import('tailwindcss').Config}*/
module.exports = {
    mode: "jit",
    purge: ["./src/**/*.svelte"],
    theme: {
        extend: {
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


/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/pages/**/*.{js,jsx,ts,tsx}",
        "./src/components/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            typography: {
                DEFAULT: {
                    css: {
                        a: {
                            '&:hover': {
                                color: '#2c5282',
                            },
                        },
                    },
                },
            }
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
    ],
}

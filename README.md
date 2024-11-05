# Meme Generator

A React-based application that lets users create custom memes by adding top and bottom text to a random meme image.

![Meme Generator Screenshot](/public/images/memeGenerator.png)

[Live Demo](your-live-demo-url-here)

## Description

The Meme Generator is a simple yet fun application built with React. Users can create their own memes by selecting a random image from a database of popular meme templates, and adding custom top and bottom text. The generated meme is then displayed with the text overlaid on the image.

## Features

- Fetches a list of meme images from the Imgflip API
- Allows users to input custom text for the top and bottom of the meme
- Displays the generated meme with the text overlaid on the image
- Provides a "Get a new meme image" button to generate a random meme
- Responsive and visually appealing design with Tailwind CSS

## Technologies Used

- React
- Tailwind CSS
- Imgflip API
- JavaScript (ES6+)

## Project Structure

- `App.jsx`: The main component that renders the `Card` component
- `Card.jsx`: The main component that handles meme generation and rendering
- `index.css`: Includes global styles and font imports

## Getting Started

To run this project locally:

1. Clone the repository
2. Install dependencies with `npm install`
3. Start the development server with `npm start`

## How it Works

The `Card` component is responsible for the core functionality of the Meme Generator. It fetches a list of meme images from the Imgflip API using the `useEffect` hook and stores them in the `allMemes` state. When the user clicks the "Get a new meme image" button, the `getMeme` function selects a random meme from the list and updates the `meme` state with the new image URL.

The component also handles the user input for the top and bottom text using the `handleChange` function, which updates the `meme` state accordingly. The generated meme is then displayed with the text overlaid on the image.
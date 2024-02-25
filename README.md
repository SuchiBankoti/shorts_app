# React Video Player App

This is a React application that features a video player with interactive controls. Users can navigate through a list of videos using arrow keys, and each video comes with a like button and title.

## Table of Contents
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Keyboard Shortcuts](#keyboard-shortcuts)
- [Components](#components)

## Features

- **Interactive Video Player:** Users can scroll through a list of videos using the arrow keys.
- **Like Button:** Each video has a like button that users can click to toggle the like status.
- **Title Display:** Video titles become visible when hovering over the video.
- **Welcome Screen:** A welcome screen is displayed initially, and users can dismiss it to access the video player.

## Installation

Ensure you have Node.js and npm installed on your machine.

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/react-video-player.git
Navigate to the project directory:

bash
Copy code
cd react-video-player
Install dependencies:

bash
Copy code
npm install
Usage
Start the development server:

bash
Copy code
npm start
Open your browser and visit http://localhost:3000.

Use the arrow keys to navigate through the videos. The like button and video title become visible when hovering over a video.

Keyboard Shortcuts
Scroll Up (ArrowUp): Move to the previous video.
Scroll Down (ArrowDown): Move to the next video.
Components
App Component
State:

open: Manages the display of the welcome screen.
current: Tracks the index of the currently displayed video.
Effects:

useEffect with handleKeyDown: Listens for arrow key events to scroll through videos.
Cleanup function removes the event listener on component unmount.
Short Component
Props:

src: Video source URL.
i: Index of the video.
current: Index of the currently displayed video in the parent component.
Ref:

videoRef: Ref for the video element.
videoBoxRef: Ref for the video box element.
State:

like: Tracks the like status of the video.
controlsVisible: Manages the visibility of video controls.
Effects:

useEffect with handleMouseOver and handleMouseOut: Listens for mouseover and mouseout events to toggle control visibility.
useEffect with video playback logic based on the current index.





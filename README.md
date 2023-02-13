# react-music-player

A react proyect that includes react-router-dom and context management.

## APP DESCRIPTION

### ROUTES

The application implement a very simple routes management with react-router-dom. You can navigate through the navbar component, the current page navbar title will be highlighted. 

### MUSIC PLAYER

This application allows you to browse through a list of songs and has the following behaviour:

- In case no song has been hit play, the buttons will not perform any function, and the song title remains without highlighting. 

- When the user clicks play on a song, the title of the song is highlighted, and the title and author appear at the bottom, where the song controller appears. 

---

- There is a special button that allows you to change the operation of the next and previous buttons, it has three modes: 


1. Not replaying - Songs are not replayed, if you are on the first song you cannot go backwards, and if you get to the last song you cannot go forwards. 

2. Replaying all - The list of songs is repeated, if the user is on the last song and presses the next button, the first song in the list will be re-selected, in the same way if the user is on the first song and presses the previous button, the last song in the list will be selected. 

3. Replaying one - Pressing the next or previous button will keep the song that was selected.

---

## GET STARTED 

This app allow to navigate though 

1. Clone the project
2. ``npm install``
3. ``npm run dev``

# Screenshot

![musicPlayer](https://user-images.githubusercontent.com/61117650/218341035-90b4e92f-db9f-4039-b77a-ccfbb3f693fc.png)

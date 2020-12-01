# Advents Calendar Project Manual

## Introduction and Purpose

This project aims to create a web page, which represents an advents calendar. The purpose of this project is for my personal exercise and entertainment and, of course, for spreading the christmas spirit and sending an advents calendar to our close ones, that are not near us at the moment.

## Manual Structure
This document consists of the following chapters:

1. Idea
   1. Design
   2. Requirements derived from the Idea
   3. Software Requirements
2. Tech Stack


## Idea 
Creation of an advents calendar webpage, which holds wishes, wisdom, anecdotes and media for each day of 1. December to 25. December. The lucky recepient of the calendar can open one wish per day and can browse through all past wishes.

### Design
There is no design template for this project. The idea are to have a snowy gif in the background. Each wish is to be represented by a light and according to it's color, the user would know if the light is available for opening, has been opened or is locked. Opening a light shall display a dialog, containig the text for the day and a media file. The list of wishes, shall display all wishes, which will be displayed accordingly to their status (opened, available to open and locked).

### Requirements derived from the Idea

1. The webpage shall have a gif as  backrground.
2. The webpage shall display 25 day's wishes.
3. Each wish shall contain text and a media file (video or a picture).
4. Each wish shall be displayed in window fashion.
5. The window shall show the possibility for opening a list of all wishes.
6. Elements in the list and in the opening page shall be displayed according to their status (opened, available for opening and locked).
7. An elements status is assigned according to the current day and the user's interaction with the website.

### Software requirements extracted from the Idea requirements

1. The webpage shall display a gif as it's background.
2. The webapge shall use JS and React to generate the wishes
   1. Wishes shall be defined JS objects.
   2. Wishes position shall be either defined or calculated.
3. The properties of the JS objects shall be the following.
   1. A string property named "text" holding the message for the current day.
   2. A string property namer "url" holding the url to the media file for the day.
4. The page shall display a window with the wish's contents.
   1. The window shall display the text.
   2. The window shall display the media file.
5. The window shall give the possibility to open a list with all wishes.
6. Elements in the list and in the initial view of the page shall be displayed according to their status.
   1. The elements can have a "Viewed" status, indicating that the wish has already been viewed.
   2. The elements can have a "AvailableForViewing" status, indicating that the wish can be viewed.
   3. The elements can have a "Locked" status, indicating that the wish cannot be opened.
7. Statuses are determined according to user interaciton and the current day.
   1. Elements are "Locked" as long as the day their intended for has not come.
   2. Elements are "AvailableForViewing" if it is passed their intended day and the user hasn't opened them yet.
   3. Elements are "Viewed" if the user has opened their content.

## Tech Stack
This project shall be achieved with the help of CSS, React, Typescript and Webpack.



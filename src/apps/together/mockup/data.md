---
layout: layout.hbs
---

# Data Models

The data model for this app can be divided into three types

 * Chatting messages
 * Drawing lines
 * Users information

To be more specific, the structure of each type is the following:

 * Chatting messages
    * Username
    * Message

 * Drawing lines
    * Key - x:y
    * Values
        * Current Color
        * Current Tool
        * Current Size

 * Users
    * Status
    * Username

# Revision

 To improve iPad user's experience, the next step is to adjust the size of chatting area so that user doesn't need to scroll down.
 The chatting area has already implemented with a scrolling bar so that once there are too much messages, user can scroll up to
 see history. The next step to do is adjust the size the whole chatting area or fit the input area in a smaller size, or rearrange
  elements in the page to make sure everything will display in an iPad screen.

 In this app, other users can see one player drawing in real time. And they can see who is typing just like
 slack. Real time drawing has been implemented but needs to be refine: display different effect of different tools used by the main player. Currently only main player has the effect.


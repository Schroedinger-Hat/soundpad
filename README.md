# OBS Sound Pad

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/Schrodinger-Hat/obs-sound-pad/tree/master)

## Why

We run a [live and podcast](https://www.youtube.com/channel/UC1QLLgrGrPmlaFhS0orykCA) setup on OBS and we wanted to make a tv/radio show with some sound fx.

We usually use Google Meet, because we do not have a studio, and the requirements was that the sound should be hear from me, from the othere guys in meet and from the live stream.

And here it comes the socket.io library with some custom effects.

## How it works

The `mp3` files must be placed in the folder:`public/assets/sounds/`.

To map an mp3 file and a key you will need to edit the `index.html` file.
The edit is simple: the `data-src` attribute of the relative key must be defined. The value to insert is the name of our audio, without indicating the format (mp3, by default).

Note: actually the mp3 extension is hard coded inside.

## Local development

Run `npm install`.

Run node server with `node index.js`.

Visit: `localhost:3000`

Yay.

## Resources

[Freesound](https://freesound.org/)

## Authors

[thejoin](https://github.com/thejoin95) & [wabri](https://github.com/wabri)
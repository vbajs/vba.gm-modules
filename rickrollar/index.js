import * as webpackModules from '@goosemod/webpack';
import { inject, uninject } from '@goosemod/patcher';
import { createItem, removeItem } from '@goosemod/settings';
import { version } from './goosemodModule.json';

const Message = webpackModules.find((m) => m.type && m.type.displayName === 'MessageContent');
let Settings = {
    VIDEO_URL: 'https://cdn.discordapp.com/attachments/858899085159563265/860672912062939166/rickrolledin4k.mp4',
    YT_EMBED_URL: 'https://www.youtube.com/embed/o-YBDTqX_ZU',
};


export default {
    goosemodHandlers: {
        onImport: () => {
            inject('rickastley', Message, 'type', () => {
                const video = (document.getElementsByTagName('video') && document.getElementsByClassName('video-8eMOth'));
                for (let i = 0; i < video.length; i++) {
                    const element = video[i];
                    const videolink = element.getAttribute('src');
                    // Needed so that it doesn't inject ontop of an already injected video (now uses the classname that videos have so no more checking if gif)
                    if (videolink != Settings.VIDEO_URL) {
                        element.setAttribute('src', Settings.VIDEO_URL)
                    };
                };

                const embed = document.getElementsByTagName('iframe');
                for (let i = 0; i < embed.length; i++) {
                    const element = embed[i];
                    const embedlink = element.getAttribute('src');
                    // Same second reason as above and to insure it only injects to only youtube embeds
                    if (embedlink.startsWith('https://www.youtube.com') && embedlink != (Settings.YT_EMBED_URL + '?autoplay=1&auto_play=1')) {
                        element.setAttribute('src', Settings.YT_EMBED_URL)
                    };
                };
            });

            createItem('RickRollar', [
                version,

                {
                    type: 'header',
                    text: 'Direct streamable URL of the video to replace all videos with.',
                },
                {
                    type: 'text-input',
                    text: 'VIDEO URL',
                    initialValue: () => Settings.VIDEO_URL,
                    oninput: (value) => {
                        Settings.VIDEO_URL = value
                    },
                },
                {
                    type: 'header',
                    text: 'Youtube video embed URL to replace all youtube embeds. (To get emebed link, just click share>embed and copy the yt link in the src tag)'
                },
                {
                    type: 'text-input',
                    text: 'YT EMBED URL',
                    initialValue: () => Settings.YT_EMBED_URL,
                    oninput: (value) => {
                        Settings.YT_EMBED_URL = value
                    },
                }
            ]);
        },

        getSettings: () => [Settings],

        onRemove: () => {
            uninject('rickastley');
            removeItem('RickRollar');
        },
    },
}
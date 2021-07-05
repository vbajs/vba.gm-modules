import * as webpackModules from '@goosemod/webpack';
import { inject, uninject } from '@goosemod/patcher';
import { createItem, removeItem } from '@goosemod/settings';
import { version } from './goosemodModule.json';

const Message = webpackModules.find((m) => m.type && m.type.displayName === 'MessageContent');
let Settings = {
    VIDEO_URL: 'https://cdn.discordapp.com/attachments/858899085159563265/860672912062939166/rickrolledin4k.mp4',
}

export default {
    goosemodHandlers: {
        onImport: () => {
            inject('rickastley', Message, 'type', () => {
                const video = document.getElementsByTagName('video');
                for (let i = 0; i < video.length; i++) {
                    const element = video[i];
                    // Needed so that it doesn't: inject into a gif (yes, thats not a feature) and inject ontop of an already injected video
                    if (!!element.getAttribute('src').includes('.gif') || !element.getAttribute('src').startsWith('https://media.tenor.co/videos')) {
                        if (element.getAttribute('src') != Settings.VIDEO_URL) {
                            element.setAttribute('src', Settings.VIDEO_URL)
                        };
                    };
                };
            });

            createItem('RickRollar', [
                version,

                {
                    type: 'header',
                    text: 'Direct streamable URL of the video to replace all videos with (Default is 4K60fps rickroll)',
                },
                {
                    type: 'text-input',
                    text: 'VIDEO URL',
                    initialValue: () => Settings.VIDEO_URL,
                    oninput: (value) => {
                        Settings.VIDEO_URL = value
                    },
                },
            ]);
        },

        onRemove: () => {
            uninject('rickastley'),
                removeItem('RickRollar')
        },
    },
}
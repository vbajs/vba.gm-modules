import * as webpackModules from '@goosemod/webpack';
import { inject, uninject } from '@goosemod/patcher';

let Message = webpackModules.find((m) => m.type && m.type.displayName === 'MessageContent');

export default {
    goosemodHandlers: {
        onImport: () => {
            inject('rickastley', Message, 'type', () => {
                const video = document.getElementsByTagName('video');
                for (let i = 0; i < video.length; i++) {
                    const element = video[i];
                    // Needed so that it doesn't inject ontop of an already injected video
                    if (element.getAttribute('src') != 'https://cdn.discordapp.com/attachments/858899085159563265/860672912062939166/rickrolledin4k.mp4') {
                        element.setAttribute('src', 'https://cdn.discordapp.com/attachments/858899085159563265/860672912062939166/rickrolledin4k.mp4')
                    };
                }
            });
        },

        onRemove: () => {
            uninject('rickastley')
        },
    },
}
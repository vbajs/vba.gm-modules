import { commands } from '@goosemod/patcher';
import * as webpackModules from '@goosemod/webpack';
let messageHandler;
let channelID;

export default {
    goosemodHandlers: {
        onImport: () => {
            messageHandler = webpackModules.findByProps('sendMessage');

            function send(text) {
                channelID = webpackModules.findByProps('getChannelId', 'getLastSelectedChannelId').getChannelId() + '';
                messageHandler.sendMessage(channelID, { content: text });
            }

            function annoilText(input) {
                input = (input).split('').map((char) => {
                    return `||${char}||`
                }).join('');
                return input;
            }

            commands.add(
                'annoil',
                'Makes you send messages with spoilers around every single character.',
                ([ { value } ]) => send(annoilText(value)),
                [{ name: 'message', type: 3, required: true }]
            );
        },

        onRemove: () => {
            commands.remove('annoil');
        }
    }
}

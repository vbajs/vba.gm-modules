import { commands } from '@goosemod/patcher';
import * as webpackModules from '@goosemod/webpack';
let messageHandler;
let channelID;

export default {
    goosemodHandlers: {
        onImport: () => {
            messageHandler = webpackModules.findByProps('sendMessage');

            function send(text) {
                channelID = webpackModules.findByProps('getChannelId').getChannelId() + '';
                messageHandler.sendMessage(channelID, { content: text });
            }

            function annoilText(input) {
                input = (input).split('').map((char) => {
                    return `||${char}||`
                }).join('');
                return input;
            }

            commands.add(
                'annoiler',
                'Makes you send messages with spoilers around every single character.',
                (args) => send(annoilText(args['message'][0]['text'])),
                [{ name: 'message', type: 3, required: true }]
            );
        },

        onRemove: () => {
            commands.remove('annoiler');
        }
    }
}

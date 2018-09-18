// botkit official https://botkit.ai/docs/core.html
var viberBotkit = require('./ViberBotkit')

// for more info see  https://developers.viber.com/docs/api/rest-bot-api/
var viberMessageTypes = require('./ViberMessageTypes');

var controller = viberBotkit({
    viberToken: 'your-viber-token',
    webhookUri: 'your-webhook-uri',
    serverPort: '80',
    botName: "Bot name",
    botAvatar: "Url-to-your-bot-avatar"
});

// this is the way you can subscribe to viber events
controller.on('webhook', function (bot, message) {
    console.log('Webhook has been set.');
});

// give the bot something to listen for.
controller.hears(
    ['hello'],
    'message',
    function (bot, message) {
        bot.createConversation(message, function (err, convo) {

            convo.addMessage(new viberMessageTypes.TextMessage("Giddy up, I’m right behind ya’"), 'yes_thread');

            convo.addMessage(new viberMessageTypes.TextMessage("Well, more for me then :) "), 'no_thread');

            convo.addQuestion(new viberMessageTypes.TextMessage("Howdy partner, Are you going down to wet your whistle at the saloon tonight?"), [
                {
                    pattern: 'yes',
                    callback: function (response, convo) {
                        convo.gotoThread('yes_thread');
                    },
                },
                {
                    pattern: 'no',
                    callback: function (response, convo) {
                        convo.gotoThread('no_thread');
                    },
                },
                {
                    default: true,
                    callback: function (response, convo) {
                        convo.gotoThread('default');
                    },
                }
            ], {}, 'default');

            convo.activate();
        });
    });
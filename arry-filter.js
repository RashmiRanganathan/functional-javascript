function getShortMessages(messages) {
    console.log('sgsd');
    var filteredMessage = messages.filter(function isMessageShort(element) {
    return element.message.length < 50;
});
    //console.log(FilteredMessage)
    return filteredMessage;
}
module.exports = getShortMessages;
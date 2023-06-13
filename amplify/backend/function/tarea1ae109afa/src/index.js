/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */

exports.handler = async (event) => {
    const accountSid = 'ACca5ee35fd6383cbd3d343053babab650';
    const authToken = 'b3196bd71956217afd000e0f3f0761d2';
    const client = require('twilio')(accountSid, authToken);
    const number = event.pathParameters.number;
    const destiny = 'whatsapp:+521' + number;
    
    client.messages
        .create({
            body: 'Your appointment is coming up on July 21 at 3PM',
            from: 'whatsapp:+14155238886',
            to: `whatsapp:+521${number}`
        })
        .then(message => console.log(message.sid))
        .done();
    return "exito"
};


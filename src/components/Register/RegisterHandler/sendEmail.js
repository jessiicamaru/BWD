export default function sendEmail({ firstName, lastName, email }) {
    let number = Math.floor(Math.random() * 100000);
    let formattedNumber = String(number).padStart(5, '0');
    (() => {
        emailjs.init('2ocCChW_zvIqTSguc');
    })();

    let params = {
        toName: firstName + ' ' + lastName,
        message: formattedNumber,
        to: email,
    };

    let serviceID = 'service_p2drrwj';
    let templateID = 'template_yaca7w9';

    emailjs
        .send(serviceID, templateID, params)
        .then((res) => console.log('successfully sent email'))
        .catch();

    return formattedNumber;
}

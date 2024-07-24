import 'dotenv/config';

import { actions } from '@/store/chatbotStore';
import { v4 as uuidv4 } from 'uuid';

const API_KEY = process.env.NEXT_PUBLIC_CHATBOT_API_KEY;
const API_URL = process.env.NEXT_PUBLIC_CHATBOT_API_URI;

function formatTextWithLinksAndNewLines(text) {
    let formattedText = text.replace(/\[([^\]]+)\]\((https?:\/\/[^\s\)]+)\)/g, (url) => {
        url = url.slice(0, -1);
        return `<a href="${url}" target="_blank">Tại đây</a>`;
    });

    formattedText = formattedText.replace(/\[.*?\]\(/g, '');

    let paragraphs = formattedText.split('\n\n').map((paragraph) => `<p>${paragraph.trim()}</p>`);

    return paragraphs.join('');
}

const getResponse = async (question, dispatch) => {
    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${API_KEY}`,
            Accept: '*/*',
            Host: 'api.coze.com',
            Connection: 'keep-alive',
        },
        body: JSON.stringify({
            bot_id: process.env.NEXT_PUBLIC_CHATBOT_ID,
            user: '123333333',
            query: question,
            stream: false,
        }),
    };

    const res = await fetch(API_URL, requestOptions);
    const data = await res.json();

    const id = uuidv4();

    if (data) {
        // console.log(data);

        const response = data.messages.find((res) => res.type === 'answer');

        const formarttedRes = formatTextWithLinksAndNewLines(response.content);

        // console.log(formarttedRes);

        dispatch(
            actions.setChatHistory({
                question: question,
                response: formarttedRes,
                id,
            })
        );
    }

    return data;
};

export const chatbotHandler = (options) => {
    const question = options.question;
    let response = getResponse(question, options.dispatch);
    // console.log(response);
};

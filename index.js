import { Configuration, OpenAIApi } from 'openai'
import { process } from './env'

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
})

const openai = new OpenAIApi(configuration)

const chatbotConversation = document.getElementById('chatbot-conversation')

// const conversationArr = [
//     {
//         role: 'system',
//         content: 'You are a highly knowledgeable assistant that keeps its answers short.'
//     }
// ] 

let conversationStr = ''

document.addEventListener('submit', (e) => {
    e.preventDefault()
    const userInput = document.getElementById('user-input')

    // conversationArr.push({ 
    //     role: 'user',
    //     content: userInput.value
    // }) 

    //conversationStr += ' ' + userInput.value + ' ->'
    conversationStr += ` ${userInput.value} ->`

    fetchReply()
    const newSpeechBubble = document.createElement('div')
    newSpeechBubble.classList.add('speech', 'speech-human')
    chatbotConversation.appendChild(newSpeechBubble)
    newSpeechBubble.textContent = userInput.value
    userInput.value = ''
    chatbotConversation.scrollTop = chatbotConversation.scrollHeight
})

async function fetchReply() {
    // const response = await openai.createChatCompletion({
    //     model: 'gpt-3.5-turbo',
    //     messages: conversationArr,
    //     presence_penalty: 0,
    //     frequency_penalty: 0.3
    // }) 
    // conversationArr.push(response.data.choices[0].message)
    //renderTypewriterText(response.data.choices[0].message.content)

    const response = await openai.createCompletion({
        model: "davinci:ft-personal-2023-06-05-04-44-00",
        prompt: conversationStr,
        presence_penalty: 0,
        frequency_penalty: 0.3,
        max_tokens: 100,
        temperature: 0,
        stop: ['\n', '->']
    })

    //Added a white space in the beginning of the completion
    conversationStr += ` ${response.data.choices[0].text} \n`
    renderTypewriterText(response.data.choices[0].text)

    console.log(conversationStr)


}

function renderTypewriterText(text) {
    const newSpeechBubble = document.createElement('div')
    newSpeechBubble.classList.add('speech', 'speech-ai', 'blinking-cursor')
    chatbotConversation.appendChild(newSpeechBubble)
    let i = 0
    const interval = setInterval(() => {
        newSpeechBubble.textContent += text.slice(i - 1, i)
        if (text.length === i) {
            clearInterval(interval)
            newSpeechBubble.classList.remove('blinking-cursor')
        }
        i++
        chatbotConversation.scrollTop = chatbotConversation.scrollHeight
    }, 50)
}
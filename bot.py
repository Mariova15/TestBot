# bot.py
import requests
import os
import base64
from flask import Flask, request
from random import randint
# Add your telegram token as environment variable
BOT_URL = f'https://api.telegram.org/bot{os.environ["BOT_KEY"]}/'


app = Flask(__name__)


@app.route('/', methods=['POST'])
def main():
    data = request.json

    print(data)  # Comment to hide what Telegram is sending you
    chat_id = data['message']['chat']['id']

    file = open('anticuao.mp3', 'rb')

    json_data = {
        "chat_id": chat_id,
        "audio": (file),
    }

    message_url = BOT_URL + 'sendAudio'
    requests.post(message_url, json=json_data)

    return ''


if __name__ == '__main__':
    port = int(os.environ.get('PORT', 5000))
    app.run(host='0.0.0.0', port=port, debug=True)

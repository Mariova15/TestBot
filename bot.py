# bot.py
import requests
import os
import base64
import json
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

    json_data = {
        "chat_id": chat_id,
    }

    files = {
         'json': (None, json.dumps(json_data), 'application/json'),
         'file': (open('anticuao.mp3', 'rb'), 'audio/mp3')
    }

    message_url = BOT_URL + 'sendAudio'
    requests.post(message_url, files=files)

    return ''


if __name__ == '__main__':
    port = int(os.environ.get('PORT', 5000))
    app.run(host='0.0.0.0', port=port, debug=True)

from flask import Flask, jsonify, render_template, request
import requests as rq
from datetime import datetime
import json
import urllib
from pymongo import MongoClient

app = Flask(__name__)

client = MongoClient('mongodb://localhost:27017/')
db = client['weather_db']
todos = db.todos

@app.route('/weather_data', methods = ['GET'])
def get_data():
    try:
        data = {}
        data['q'] = request.args.get('search')
        data['appid'] = '51930520c9cf0eb360ae6181e5a25c8c'
        data['units'] = 'metric'
        
        url_values = urllib.parse.urlencode(data)
        url = 'http://api.openweathermap.org/data/2.5/weather'
        full_url = url + '?' + url_values
        data = urllib.request.urlopen(full_url)
        api_data = data.read().decode('utf-8')
        json_data = json.loads(api_data)

        # clearing database documents

        # for delete in db.list_collection_names():
        #     collection = db[delete]
        #     collection.delete_many({})
        #     print('db cleared!')

        count = {'dt': json_data['dt']}
        document_count = todos.count_documents(count)
        if document_count == 0:

            #inserting data to database
            date = datetime.now().strftime('%Y-%m-%d')
            todos.insert_one(json_data)
            todos.update_many({'datetime':{'$exists': False}},{'$set': {'datetime': date}}, upsert=False)



        #now fetching data from db and returning it
        response = todos.find()
        ls = []
        for item in response:
            ls.clear()
            item['_id'] = str(item['_id'])
            ls.append(item)
        return jsonify(ls)
    except Exception as e:
        return f'error generated is: {e}'

@app.route('/weather_by_date', methods = ['GET'])
def weather_by_date():
    try:
        date = request.args.get('datetime')

        response = todos.find({'datetime':date})
        ls = []
        for item in response:
            ls.clear()
            item['_id'] = str(item['_id'])
            ls.append(item)    
        return jsonify(ls)
    except Exception as e:
        return f'error generated is: {e}'

if __name__ == '__main__':
    app.run(debug = True, port = 5020)
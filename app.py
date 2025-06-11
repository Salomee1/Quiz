from flask import Flask, render_template
import requests

app = Flask(__name__)

@app.route('/')
def home():
    
    url = "https://fakestoreapi.com/products?limit=8"
    response = requests.get(url)
    products = response.json()  

    return render_template('index.html', products=products)

if __name__ == '__main__':
    app.run(debug=True)

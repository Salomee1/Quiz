from flask import Flask, render_template, json
import os

app = Flask(
    __name__,
    template_folder='catalog_templates',
    static_folder='catalog_static'
)

@app.route('/')
def catalog():
    with open('product_data.json') as f:
        products = json.load(f)
    return render_template('catalog_page.html', products=products)

if __name__ == '__main__':
    app.run(debug=True)

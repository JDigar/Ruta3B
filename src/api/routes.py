"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Locales, Direccion, Favoritos, Comentarios
from api.utils import generate_sitemap, APIException

api = Blueprint('api', __name__)


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200


@api.route('/', methods=['GET'])
def handle_home():

    response_body = {
        "message": "Este es el get de home"
    }

    return jsonify(response_body), 200

#GET de restaurantes 

@api.route('/restaurantes', methods=['GET'])
def get_restaurantes():
    
    restaurantes = Locales.query.all()
    all_restaurantes = list(map(lambda x: x.serialize(), restaurantes))

    return jsonify(all_restaurantes), 200

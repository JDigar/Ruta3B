"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Locales, Direccion, Favoritos, Comentarios
from api.utils import generate_sitemap, APIException

api = Blueprint('api', __name__)


@api.route('/hello', methods=['GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200

@api.route('/user', methods=['GET'])
def handle_user():

    response_body = {
        "message": "Hello! endpoint user"
    }

    return jsonify(response_body), 200



#NUEVO USUARIO
# @api.route('/user', methods=['POST'])   
# def create_new_user():
#     body = json.loads(request.data)
#     new_user = User(nombre=body["nombre"],apellido=body["apellido"],email=body["email"], password=body["password"], is_active=True)
#     db.session.add(new_user)
#     db.session.commit()
#     response_body={
#         "msg": ("usuario creado", new_user)
#     }
#     access_token = create_access_token(identity=body["email"])
#     return jsonify(access_token=access_token) 
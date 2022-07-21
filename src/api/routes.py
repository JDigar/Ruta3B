"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Locales, Direccion, Favoritos, Comentarios
from api.utils import generate_sitemap, APIException
import json

# # flask jwt paquete de instalacion
from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required

api = Blueprint('api', __name__)


@api.route('/hello', methods=['GET'])
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


# # Create a route to authenticate your users and return JWTs. The
# # create_access_token() function is used to actually generate the JWT.
@api.route("/login", methods=["POST"])
def login():
    # email = request.json.get("email", None)
    # password = request.json.get("password", None)
    # type = request.json.get("type", None)

    email, password, type = request.json.get('email', None), request.json.get('password', None), request.json.get('type', None)

    if not (email and password):
        return jsonify({'message': 'Data not provided'}), 400

    # traer de mi base de datos un usuario por su email
    user = None
    if type:
        # restaurante
        user = Shelter.query.filter_by(email=email).one_or_none()
    else:
        # usuario
        user = User.query.filter_by(email=email).one_or_none()

    if not user:
        return jsonify({'message': 'Email is not valid'}), 404


    user = User.query.filter_by(email=email).first()

    print(user)
    if email != user.email or password != user.password:
        return jsonify({"msg": "Bad username or password"}), 401

    access_token = create_access_token(identity=email)
    return jsonify(access_token=access_token)

# Protect a route with jwt_required, which will kick out requests
# without a valid JWT present.
@api.route("/profile", methods=["GET"])
@jwt_required()
def protected():
    # Access the identity of the current user with get_jwt_identity
    current_user = get_jwt_identity()
    user = User.query.filter_by(email=current_user).first()
    
    return jsonify(user.serialize()), 200


# @api.route("/gettingSubscribe", methods=["GET"])
# @jwt_required()
# def protected():
#     # Access the identity of the current user with get_jwt_identity
#     current_user = get_jwt_identity()
#     return jsonify(logged_in_as=current_user), 200

# #NUEVO USUARIO
@api.route('/user', methods=['POST'])   
def create_new_user():
    body = json.loads(request.data)
    new_user = User(nombre=body["nombre"],apellido=body["apellido"],email=body["email"], password=body["password"], is_active=True)
    db.session.add(new_user)
    db.session.commit()
    response_body={
        "msg": ("usuario creado", new_user)
    }
    access_token = create_access_token(identity=body["email"])
    return jsonify(access_token=access_token) 

@api.route('/favoritos', methods=['GET'])
def get_favoritos():

    favoritos = Favorites.query.all()
    favoritosList = list(map(lambda obj: obj.serialize(), favoritos))
    response_body = {
        "results": favoritosList
    }

    return jsonify(response_body), 200

# #NUEVO USUARIO LOCAL
@api.route('/locales', methods=['POST'])   
def create_new_user_locales():
    body = json.loads(request.data)
    new_user_local = Locales(nombre=body["nombre"],email=body["email"], password=body["password"], tipo_local=body["tipo_local"], descripcion=body["descripcion"], is_active=True)
    db.session.add(new_user_local)
    db.session.commit()
    response_body={
        "msg": ("usuario de local creado", new_user_local)
    }
    access_token = create_access_token(identity=body["email"])
    return jsonify(access_token=access_token) 

@api.route("/comentarios", methods=["GET"])
@jwt_required()
def comentarios():
    # Access the identity of the current user with get_jwt_identity
    current_user = get_jwt_identity()
    favoritos = Favoritos.query.all()
    favoritosList = list(map(lambda obj: obj.serialize(), favoritos))
    response_body = {
        "results":favoritosList
    }
    
    return jsonify(response_body), 200



@api.route('/favoritos', methods=['GET'])
@jwt_required()
def get_favorites():

    favorites = Favorites.query.all()
    favoritesList = list(map(lambda obj: obj.serialize(), favorites))
    response_body = {
        "results": favoritesList
    }

    return jsonify(response_body), 200


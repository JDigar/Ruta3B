from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

# TABLA PARA REGISTRO DE USUARIO

class User(db.Model):
    __tablename__ = 'user'
    id = db.Column(db.Integer, primary_key=True)
    nombre = db.Column(db.String(120), nullable=False)
    apellido = db.Column(db.String(120), nullable=False)
    email = db.Column(db.String(120),  nullable=False)
    foto_user = db.Column(db.String(200), nullable=True)
    password = db.Column(db.String(80), nullable = False)
    is_active = db.Column(db.Boolean, nullable=False)
    favoritos = db.relationship('Favoritos', backref='user', lazy=True)

    def __repr__(self):
        return f'<User {self.id}>'

    def serialize(self):
        return {
            "id": self.id,
            "nombre": self.nombre,
            "apellido": self.apellido,
            "email": self.email,
            "foto_user": self.foto_user
            # do not serialize the password, its a security breach
        }

# TABLA PARA REGISTRO DE RESTAURANT
class Locales(db.Model):
    __tablename__ = 'locales'
    id = db.Column(db.Integer, primary_key=True)
    nombre = db.Column(db.String(120), unique=True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    tipo_local = db.Column(db.String(80), unique=False, nullable=False)
    descripcion = db.Column(db.String(250), unique=False, nullable=False)
    is_active = db.Column(db.Boolean, unique=False, nullable=False)
    favoritos = db.relationship('Favoritos', backref='locales', lazy=True)

    def __repr__(self):
        return f'<Locales {self.id}>'

    def serialize(self):
        return {
            "id": self.id,
            "nombre": self.nombre,
            "email": self.email,
            "tipo_local": self.tipo_local,
            "descripcion": self.descripcion
            # do not serialize the password, its a security breach
        }

# TABLA DE DIRECCIÓN
class Direccion(db.Model):
    __tablename__ = 'direccion'
    id = db.Column(db.Integer, primary_key=True)
    barrio = db.Column(db.String(120), nullable=False)
    calle = db.Column(db.String(120), nullable=False)
    numero = db.Column(db.Integer,  nullable=False)
    

    def __repr__(self):
        return f'<Direccion {self.id}>'

    def serialize(self):
        return {
            "id": self.id,
            "barrio": self.barrio,
            "calle": self.calle,
            "numero": self.numero,
            # do not serialize the password, its a security breach
        }

# TABLA DE FAVORITOS DE USUARIOS
class Favoritos(db.Model):
    __tablename__ = 'favoritos'
    id = db.Column(db.Integer, primary_key=True)
    id_user = db.Column(db.Integer, db.ForeignKey('user.id'))
    id_local = db.Column(db.Integer, db.ForeignKey('locales.id'))
    
    
    def __repr__(self):
        return f'<Favoritos {self.id}>'

    def serialize(self):
        return {
            "id": self.id,
            "id_user": self.id_user,
            "id_local": self.id_restaurant,
        }

# TABLA DE COMENTARIOS

class Comentarios(db.Model):
    __tablename__ = 'comentarios'
    id = db.Column(db.Integer, primary_key=True)
    id_user = db.Column(db.Integer, db.ForeignKey('user.id'))
    id_local = db.Column(db.Integer, db.ForeignKey('locales.id'))
    comentario = db.Column(db.String(300))
    # ffff
    def __repr__(self):
        return f'<Favoritos {self.id}>'

    def serialize(self):
        return {
            "id": self.id,
            "id_user": self.id_user,
            "id_local": self.id_local,
            "comentario": self.comentario,
        }
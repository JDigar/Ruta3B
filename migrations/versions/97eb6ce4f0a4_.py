"""empty message

Revision ID: 97eb6ce4f0a4
Revises: 
Create Date: 2022-08-06 09:02:24.874136

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '97eb6ce4f0a4'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('direccion',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('barrio', sa.String(length=120), nullable=False),
    sa.Column('calle', sa.String(length=120), nullable=False),
    sa.Column('numero', sa.Integer(), nullable=False),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('locales',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('nombre', sa.String(length=120), nullable=False),
    sa.Column('email', sa.String(length=120), nullable=False),
    sa.Column('password', sa.String(length=80), nullable=False),
    sa.Column('tipo_local', sa.String(length=80), nullable=False),
    sa.Column('descripcion', sa.String(length=250), nullable=False),
    sa.Column('precio', sa.Integer(), nullable=True),
    sa.Column('foto', sa.String(length=500), nullable=True),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('email'),
    sa.UniqueConstraint('nombre')
    )
    op.create_table('user',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('nombre', sa.String(length=120), nullable=False),
    sa.Column('apellido', sa.String(length=120), nullable=False),
    sa.Column('email', sa.String(length=120), nullable=False),
    sa.Column('foto_user', sa.String(length=200), nullable=True),
    sa.Column('password', sa.String(length=80), nullable=False),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('likes',
    sa.Column('user_id', sa.Integer(), nullable=False),
    sa.Column('locales_id', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['locales_id'], ['locales.id'], ),
    sa.ForeignKeyConstraint(['user_id'], ['user.id'], ),
    sa.PrimaryKeyConstraint('user_id', 'locales_id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('likes')
    op.drop_table('user')
    op.drop_table('locales')
    op.drop_table('direccion')
    # ### end Alembic commands ###

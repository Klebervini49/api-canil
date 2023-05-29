import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../instances/mysql';

export interface AnimalInstance extends Model {
  id: number;
  nome: string;
  cor: string;
  genero: string;
  img: string;
  tipo: string;
}

export const Animal = sequelize.define<AnimalInstance>('User', {
  id: {
    primaryKey: true,
    autoIncrement: true,
    type: DataTypes.INTEGER,
  },
  nome: {
    type: DataTypes.STRING(100),
  },
  cor: {
    type: DataTypes.STRING(50),
  },
  genero: {
    type: DataTypes.STRING(50),
  },
  img: {
    type: DataTypes.STRING(200),
  },
  tipo: {
    type: DataTypes.STRING(50),
  },
}, {
  tableName: 'animais',
  timestamps: true,
})
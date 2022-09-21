export const drawStatusTypes = {
  IDLE: 'IDLE',
  DRAWING: 'DRAWING',
  SELECT: 'SELECT'
};

export const labelStatusTypes = {
  IDLE: 'IDLE',
  CREATE: 'CREATE',
  UPDATE: 'UPDATE'
};

export const shapeTypes = {
  RECTANGLE: 'rectangle',
  POLYGON: 'polygon'
};
export const shapeTypeOptions = [
  { value: shapeTypes.RECTANGLE, label: '矩形' },
  { value: shapeTypes.POLYGON, label: '多边形' }
];

export const defaultSaveFolder = 'labels';

export const imageTypes = ['jpg', 'jpeg', 'png'];

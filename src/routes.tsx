export const ID_PATH_PARAM = ':id';

const ROOT_PATH = '/';
const USERS_PATH = '/users';
const PROPERTIES_PATH = '/properties';
const NEW_PROPERTY_PATH = `${PROPERTIES_PATH}/new`;

const locations = {
  root: () => ROOT_PATH,
  users: () => USERS_PATH,
  properties: () => PROPERTIES_PATH,
  newProperty: () => NEW_PROPERTY_PATH,
  showProperty: (id: number | string) => `${PROPERTIES_PATH}/${id}`,
};

export default locations;

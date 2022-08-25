import products from "../dataBase";

const Api = {
  get: get(),
};

function get() {
  return products;
}

export default Api;

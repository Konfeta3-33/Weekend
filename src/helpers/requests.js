import { baseUrl } from "../constants";

const getData = async (url) => {
  return await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((data) =>
    data.json()
      .then(({ data }) => data)
      .catch((err) => console.log(err)),
  );
};

const postData = async (url, data) => {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  const result = await response.json();

  return result;
};

export const getCategories = () => getData(`${baseUrl}/api/categories`);
export const getCategoryById = (id) => getData(`${baseUrl}/api/categories/${id}`);
export const getSubCategories = () => getData(`${baseUrl}/api/subcategories`);
export const getSubCategoryById = (id) => getData(`${baseUrl}/api/subcategories/${id}`);
export const getServiceById = (id) => getData(`${baseUrl}/api/services/${id}`);
export const getTagById = (id) => getData(`${baseUrl}/api/tags/${id}`);
export const getGroups = () => getData(`${baseUrl}/api/groups`);
export const getSubCategoriesFull = (arrIds) => {
  return Promise.all(arrIds.map(async (itemId) => {
    return await getSubCategoryById(itemId);
  }));
};
export const getServices = () => getData(`${baseUrl}/api/services`);

export const postOrder = async (data) => {
  const query = {
    name: data.name,
    status: "new",
    phone: data.phone,
    date: data.date,
    persons: data.persons,
    email: data.email,
    description: data.parents,
  };

  const result = await postData(`${baseUrl}/api/invoices`, query);
  return result;
};

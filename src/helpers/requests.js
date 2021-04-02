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
  if (response.ok) {
    return await response.json();
  } else {
    return response.json();
  }
};

export const getCategories = () => getData(`${baseUrl}/api/categories`);
export const getCategoryById = (id) => getData(`${baseUrl}/api/categories/${id}`);
export const getSubCategories = () => getData(`${baseUrl}/api/subcategories`);
export const getSubCategoryById = (id) => getData(`${baseUrl}/api/subcategories/${id}`);
export const getServiceById = (id) => getData(`${baseUrl}/api/services/${id}`);
export const getTags = () => getData(`${baseUrl}/api/tags`);
export const getTagById = (id) => getData(`${baseUrl}/api/tags/${id}`);
export const getGroups = () => getData(`${baseUrl}/api/groups`);
export const getSubCategoriesFull = (arrIds) => {
  return Promise.all(arrIds.map(async (itemId) => {
    return await getSubCategoryById(itemId);
  }));
};
export const getServices = () => getData(`${baseUrl}/api/services`);
export const searchByName = (name) => getData(`${baseUrl}/api/services/?name=${name}`);

export const postOrder = async (data, id) => {
  const query = {
    name: data.name,
    status: "new",
    persons: data.children || null,
    description: data.adults || null,
    ServiceId: Number(id),
    phone: data.phone,
    date: data.date || new Date(),
    email: data.email || null,
    address: data.address || null,
  };

  const result = await postData(`${baseUrl}/api/invoices`, query);
  return result;
};

export const postCollaborationForm = async (data) => {
  const queryCollaborationForm = {
    company: data.company,
    name: data.name,
    status: "new",
    phone: data.phone,
    email: data.email,
  };

  const result = await postData(`${baseUrl}/api/sendmail`, queryCollaborationForm);
  return result;
};

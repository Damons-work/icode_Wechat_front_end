import request from "./request";
export const personList = data => {
  return request({
    url: "/project/person/list",
    method: "POST",
    data: {}
  });
};
export const getPerson = data => {
  return request({
    url: "/project/person/list",
    method: "GET",
    params: {
      id: data.id
    }
  });
};
export const proList = data => {
  return request({
    url: "/project/projectx/list",
    method: "POST",
    data: {}
  });
};
export const getProgramList = data => {
  return request({
    url: "/project/projectx/list",
    method: "GET",
    params: {
      id: data.id
    }
  });
};

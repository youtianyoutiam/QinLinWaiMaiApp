import service from "../utils/request";

const link = (url, method = 'GET', data, param) => {
  return new Promise((resolve, params) => {
    service.request({
      url,
      method,
      data,
      params: param
    }).then((ok) => {
      resolve(ok)
      // console.log(ok);
    }).catch((err) => {
      params(err)
    })
  })
}

export default link 
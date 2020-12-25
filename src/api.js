const baseAPI = 'https://tiny-list.herokuapp.com/';
const apiMethod = {POST: 'POST', DELETE: 'DELETE', GET: 'GET', PUT: 'PUT'};

/**Hardcoded value (As required)*/
const userGuille = {
  id: 16,
  first_name: 'Guillermo',
  last_name: 'Sierra',
  email: 'gsierra@guillesierra.com',
  phone: '692842705',
  created_at: '2020-12-14T15:37:09.238Z',
  updated_at: '2020-12-14T15:37:09.238Z',
};

/**We default the current hardcoded user*/
export const endpoints = (
  taskId = 1,
  isCompleted = false,
  user = userGuille,
) => ({
  task: {
    create: {
      endpoint: 'api/v1/users/' + user.id + '/tasks',
      method: apiMethod.POST,
    },
    update: {
      endpoint: 'api/v1/users/' + user.id + '/tasks/' + taskId,
      method: apiMethod.PUT,
    },
    destroy: {
      endpoint: 'api/v1/users/' + user.id + '/tasks/' + taskId,
      method: apiMethod.DELETE,
    },
    list: {
      endpoint: 'api/v1/users/' + user.id + '/tasks',
      method: apiMethod.GET,
    },
    complete: {
      endpoint:
        'api/v1/users/' +
        user.id +
        '/tasks/' +
        taskId +
        (isCompleted ? '/uncompleted' : '/completed'),
      method: apiMethod.PUT,
    },
  },
  user: {
    create: {
      endpoint: 'api/v1/users',
      method: apiMethod.POST,
      body: {
        user: {
          first_name: 'Guillermo',
          last_name: 'Sierra',
          email: 'gsierra@guillesierra.com',
          phone: '692842705',
        },
      },
    },
  },
});

export const fetchAPI = async ({endpoint, method = apiMethod.GET}, body) => {
  const url = baseAPI + endpoint;
  console.log('fetching', url, method, body);
  const resJSON = await fetch(url, {
    method: method,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });
  if (resJSON.status === 200 || resJSON.status === 201) {
    const response = await resJSON.json();
    console.log('fetch resp', method, url, body, response);
    return response;
  }
};

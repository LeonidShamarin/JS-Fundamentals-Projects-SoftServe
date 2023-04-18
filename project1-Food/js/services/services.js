//робота з сервером
const postData = async (url, data) => {
  let res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: data,
  });

  return await res.json();
};
//ф-ція отримання ресурсів
async function getResource(url) {
  let res = await fetch(url);

  if (!res.ok) {
    throw new Error(`Could not fetch ${url}, status:${res.status}`);
  }

  return await res.json();
}

export { postData };
export { getResource };

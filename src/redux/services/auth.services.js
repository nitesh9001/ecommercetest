const auth = (apiUrl) => ({
  login(payload) {
    return fetch(`${apiUrl}/authentication/token/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((response) => response.json())
      .then((response) => {
        if (response.statusCode > 299) throw new Error(response.errors);
        return response;
      })
      .catch((error) => {
        throw new Error(error);
      });
  },
});

const handleLogin = function (e) {
  e.preventDefault();
  setLoading(true);
  const config = {
    headers: {
      "content-type": "application/json",
      accept: "application/json",
    },
    withCredentials: true,
  };
  axios
    .post(
      `${backendUrl}/login`,
      {
        username,
        password,
      },
      config
    )
    .then((res) => {
      dispatch(authLogin(res?.data?.data.msg));
    })
    .catch((error) => {
      toast.error(error?.response?.data?.message || "server is not connected");
    })
    .finally(() => {
      setLoading(false);
      setPassword("");
    });
};

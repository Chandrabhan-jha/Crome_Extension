export const flip_user_status = (signIn, user_info) => {
  if (signIn) {
    return fetch("http://192.168.10.134:3000/api/v1/authenticate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: user_info?.userName.trim(),
        password: user_info?.password,
      }),
    })
      .then((res) => {
        return new Promise((resolve) => {
          if (res.status !== 200) resolve("fail");
          chrome.storage.local.set({ userStatus: signIn }, function (response) {
            if (chrome.runtime.lastError) resolve("fail");

            // user_signed_in = signIn;
            resolve("success");
          });
          chrome.storage.local.set({ userDetails: res?.response });
        });
      })
      .catch((err) => console.log(err));
  }
};

const CLIENT_URL =
  "http://192.168.10.134:3000/api/v1/client/requirement/find/userId";
const token =
  "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhbmtpdCIsImV4cCI6MTcxMDA4MjAwMiwiaWF0IjoxNzEwMDc4NDAyfQ.votLW_N6lJ43sB_LSROrqKTfi-S3ReDvhgn48n8ts2tg0RjJTnMkoPSvL26zMDYbTdApgdub9SrAk7NGKnVcyw";
const userId = "143";
export const fetchClient = () => {
  fetch(CLIENT_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
    body: JSON.stringify([userId]),
  })
    .then((response) => response.json())
    .then((data) => {
      const fetchedData = Object?.keys(data?.response)?.map((client) => {
        return {
          label: client,
          value: client,
          clientName: client,
        };
      });
      fetchedData?.sort((a, b) => a.value.localeCompare(b.value));
      chrome.storage.local.set({ client: fetchedData });
    })
    .catch((error) => console.error(error));
};

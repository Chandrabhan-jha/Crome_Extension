const client = document.getElementById("client");

chrome.storage.local.get(["client"], (result) => {
  const { client } = result;
  setClientOptions(client);
});

const setClientOptions = (clients) => {
  client.innerHTML = "";

  let defaultOption = document.createElement("option");
  defaultOption.value = "";
  defaultOption.innerHTML = "Select Client";
  client.appendChild(defaultOption);

  clients.forEach((element) => {
    let optionElement = document.createElement("option");
    optionElement.value = element.value;
    optionElement.innerHTML = element.label;
    client.appendChild(optionElement);
  });
};

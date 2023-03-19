import { Client } from "@hubspot/api-client";
import { _categories } from "./database";
interface Iresult {
  statement: string;
  categories: _categories;
  value: number;
}

export const createContact = async (result: Iresult[], mail: string) => {
  try {
    const response = await fetch("https://agile-sigma.vercel.app/api/hubspot", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ result, mail }),
    });
    console.log(response);
    return response.json();
  } catch (error) {
    console.log(error);
  }
};

export const getContacts = () => {
  fetch("https://agile-sigma.vercel.app/api/hubspot")
    .then((response) => {
      if (!response) {
        throw new Error("Response Not OK");
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
    });
};
export const shortCut = async () => {
  const accessToken = process.env.NEXT_PUBLIC_HUB_ACCESS_TOKEN;
  const hubspotApiUrl = "https://api.hubapi.com/crm/v3/objects/contacts";
  const hubspotClient = new Client({ accessToken: accessToken });
  const allContacts = await hubspotClient.crm.contacts.getAll();
  console.log(allContacts);
};

/* fetch(hubspotApiUrl, options)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => console.log(data))
    .catch((error) => console.error(error)); */

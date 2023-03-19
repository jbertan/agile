import console from "console";
import { NextApiRequest, NextApiResponse } from "next";
import { Client } from "@hubspot/api-client";
interface IresultItem {
  statement: string;
  value: number;
}
const HubSpot = async (req: NextApiRequest, res: NextApiResponse) => {
  const accessToken = process.env.HUB_ACCESS_TOKEN;
  const hubspotApiUrl = "https://api.hubapi.com/crm/v3/objects/contacts";
  const hubspotClient = new Client({ accessToken: accessToken });
  console.log(process.env.HUB_ACCESS_TOKEN);
  console.log("No process Token from env");

  if (req.method === "POST") {
    console.log(req.body);
    const { result, mail } = req.body;
    /* result.map((item: IresultItem) => {
      item && console.log(`soru: ${item.statement} değer: ${item.value}`);
    }); */
    const survey = result.map((item: IresultItem, i: number) => {
      return (
        item !== null &&
        `SORU ${i}: ${item.statement} değer: ${item.value} \r\n ’`
      );
    });
    console.log(survey);
    /*  const survey = result.map((item: IresultItem) => {
      console.log(`soru: ${item.statement} değer: ${item.value}`);
    }); */
    //console.log(survey);
    const postData = {
      properties: {
        email: mail,
        /*  firstname: "Bedasdsdadrtan",
        lastname: "Akadsarsu",
        phone: "1234567890", */
        survey: survey.toString(),
      },
    };

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify(postData),
    };

    fetch(hubspotApiUrl, options)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        console.log("resp");
        return response.json();
      })
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
  } else if (req.method === "GET") {
    console.log("get");
    /* 
    try {
      const response = await fetch(hubspotApiUrl, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
      });
      //const result = await response.json();
      res.status(200).json(response);
    } catch (error) {
      console.log(error);
    } */
    const allContacts = await hubspotClient.crm.contacts.getAll();
    const result = JSON.stringify(allContacts);
    res.status(200).send(result);
    console.log(result);
  } else {
    return;
  }
};

export default HubSpot;

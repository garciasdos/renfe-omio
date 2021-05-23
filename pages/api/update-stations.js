import { createStation } from "@/lib/db-admin";
import { v4 as uuidv4 } from "uuid";

export default (req, res) => {
  try {
    fetch(
      "https://www.renfe.com/content/dam/renfe/es/General/buscadores/javascript/estacionesEstaticas.js"
    )
      .then((response) => response.text())
      .then((rawResponse) => {
        rawResponse = rawResponse.replace("var estacionesEstatico=", "");
        rawResponse = rawResponse.replace(";", "");

        return JSON.parse(rawResponse);
      })
      .then((stations) => {
        stations.forEach((station) => {
          // createStation(uuidv4(), station);
        });
        res.json(stations);
      });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error });
  }
};

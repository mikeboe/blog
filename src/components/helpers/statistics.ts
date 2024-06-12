import { Octokit, App } from "octokit";
import fs from "fs";
import colors from "./colors.json"
import dotenv from "dotenv";

dotenv.config();

interface Colors {
  [key: string]: {
    color: string | undefined | null;
    url: string;
  };
}

const getStats = async () => {
  const octokit = new Octokit({
    auth: process.env.GH_TOKEN,
  });

  const data = await octokit
    .request("GET /user/repos", {
      per_page: 100,
      headers: {
        "X-GitHub-Api-Version": "2022-11-28",
      },
    })
    .then((response) => {
      // console.log(response.data[0])
      return response.data.filter((item: any) => item.owner.login !== "logiccloudag")
    });

  let languagesData: { name: string, value: number, percentage?: string | undefined, colour?: string | null | undefined}[] = [];

  for (let i = 0; i < data.length; i++) {
    console.log(data[i].full_name)
    await octokit.rest.repos
      .listLanguages({
        owner: data[i].owner.login,
        repo: data[i].name,
        headers: {
          "X-GitHub-Api-Version": "2022-11-28",
        },
      })
      .then((response) => {
        cumulateLanguages(response.data)
       
        // sleep for 0,5s
        console.log(i + "/" + data.length + " done");
      });
  }

  function cumulateLanguages(data: any) {
    for (let key in data) {
      
      const index = languagesData.findIndex((item: any) => item.name === key)
     

      if(index !== -1) {
        
        languagesData[index].value += data[key]

      } else {
        languagesData.push({
          name: key,
          value: data[key]
        })
      }
    }
  }

  const totalSize = languagesData.reduce((acc, item) => acc + item.value, 0)

  languagesData = languagesData.map((item) => {
    return {
      name: item.name,
      value: item.value,
      percentage: ((item.value / totalSize) * 100).toFixed(2),
      colour: (colors as Colors)[item.name].color
    }
  })

  languagesData.sort((a, b) => b.value - a.value)

  

  console.log(languagesData)

  const dataToSave = {
    languages: languagesData,
    totalSize,
    date: new Date(),
  };
  

  // save the data to a file
  fs.writeFileSync("./src/components/helpers/data.json", JSON.stringify(dataToSave, null, 2));

  /* await octokit.request('GET /repos/{owner}/{repo}/languages', {
      owner: 'rcktsftwr',
      repo: 'rcktcrm',
      headers: {
        'X-GitHub-Api-Version': '2022-11-28'
      }
    }).then((response) => {
      console.log(response.data);
    }) */
};

getStats().catch((error) => {
  console.error(error);
});

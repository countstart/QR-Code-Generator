import inquirer from 'inquirer';
import qr from "qr-image";
import fs from "fs";

inquirer
  .prompt([
    {
        message : "Type in your URL: ",
        name : "URL"
    }
  ])
  .then((answers) => {
    const url = answers.URL;
    console.log(url)

    // var qr_svg = qr.image("hello everyone this is mohit mahor how are you i am fine thank you good night so jaao bss bhot hua ");
    var qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream('qr_img.png'));

    fs.writeFile("URL.txt",url,(err)=>{
        if(err) throw err;
        console.log("this file has been saved");
    })
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
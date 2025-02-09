import express from "express";
import bodyParser from "body-parser";



const app = express();
const port = 3000;

app.use(express.static("public"));


app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.post("/submit", (req, res) => {
  const randomfname = First[Math.floor(Math.random() * First.length)];
  const  randomlname = Last[Math.floor(Math.random() * Last.length)];
  res.render("index.ejs", {
    fName: randomfname,
    lName : randomlname,
  });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

const First = [
  "Ahmed", "Ayaan", "Abdullah", "Aamir", "Ali", "Arham", "Azeem", "Azhar", "Bilal", "Bashir",
  "Daniyal", "Ehsan", "Emad", "Faheem", "Farhan", "Faisal", "Feroz", "Ghazi", "Habib", "Hamza",
  "Haroon", "Hassan", "Hidayat", "Huzaifa", "Ibrahim", "Idris", "Imran", "Iqbal", "Ishtiaq", "Ilyas",
  "Jameel", "Junaid", "Kabeer", "Kashif", "Kamran", "Khalid", "Khurram", "Luqman", "Mahmood", "Mansoor",
  "Maaz", "Mehdi", "Moin", "Mujtaba", "Mustafa", "Nadeem", "Naseem", "Nasir", "Nawaz", "Numan",
  "Owais", "Qasim", "Rafiq", "Rahim", "Raheel", "Rashid", "Rayyan", "Rehan", "Saad", "Sadiq",
  "Sajid", "Salman", "Sameer", "Shafiq", "Shahbaz", "Shahid", "Sharjeel", "Shayan", "Shoaib", "Sohail",
  "Subhan", "Sufyan", "Tahir", "Talal", "Tariq", "Touqeer", "Ubaid", "Umar", "Usama", "Waheed",
  "Waleed", "Wasiq", "Wasim", "Xavier", "Yahya", "Yasir", "Younus", "Zaeem", "Zafar", "Zaid",
  "Zaheer", "Zakir", "Zaman", "Zarar", "Zeeshan", "Zia", "Zubair", "Zuhair"
]

const Last = [
  "Abbasi", "Abidi", "Afzal", "Ahmad", "Ahsan", "Akhtar", "Alam", "Ali", "Amin", "Ansari",
  "Ashraf", "Asif", "Azhar", "Baig", "Bashir", "Bukhari", "Chaudhry", "Chishti", "Dar", "Dawood",
  "Ehsan", "Farooq", "Faruqi", "Faheem", "Feroz", "Ghani", "Ghazi", "Habib", "Hameed", "Hamid",
  "Hassan", "Hashmi", "Hayat", "Hussain", "Ibrahim", "Idrees", "Iqbal", "Ishtiaq", "Jahangir", "Jamil",
  "Javed", "Junaid", "Kamil", "Kamran", "Kazmi", "Khan", "Khalid", "Khanum", "Khattak", "Khurram",
  "Lodhi", "Luqman", "Mahmood", "Malik", "Mansoor", "Masood", "Mazhar", "Mehmood", "Mir", "Mirza",
  "Moazzam", "Moin", "Mujtaba", "Munir", "Mustafa", "Nadeem", "Naseem", "Nasir", "Naqvi", "Nawaz",
  "Numan", "Owaisi", "Parvez", "Qadir", "Qaisar", "Qazi", "Qureshi", "Rafiq", "Rahman", "Raheel",
  "Rashid", "Raza", "Rehman", "Sabir", "Sadiq", "Sajid", "Salman", "Sarfraz", "Shafi", "Shah",
  "Shahbaz", "Shaikh", "Sharif", "Siddiqui", "Sohail", "Subhani", "Syed", "Tahir", "Tariq", "Usmani",
  "Waheed", "Waleed", "Yasir", "Zaheer", "Zaman", "Zubair"
]

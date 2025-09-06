// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const Product = require('./models/Product');

// const app = express();
// const PORT = 5000;

// // 🔌 Middleware
// app.use(cors());
// app.use(express.json());

// // ✅ MongoDB Connection
// mongoose.connect('mongodb://127.0.0.1:27017/crackerShop')
//   .then(() => console.log('✅ Connected to MongoDB'))
//   .catch((err) => console.error('❌ MongoDB connection error:', err));

// // Real products list (with real image names and categories)
// const products = [
//   {
    // _id: "1",
//     name: "30cm Green Sparkler",
//     price: 130,
//     category: "30 cm Sparklers",
//     image: "/images/30cmGreen.jpg",
//   },
//   {
    // _id: "2",
//     name: "30cm Red Sparkler",
//     price: 150,
//     category: "30 cm Sparklers",
//     image: "/images/30cmRed.jpg",
//   },
//   {
    // _id: "3",
//     name: "30cm Electric Sparkler",
//     price: 110,
//     category: "30 cm Sparklers",
//     image: "/images/30cmElectric.jpg",
//   },
//   {
    // _id: "4",
//     name: "30cm Color Sparkler",
//     price: 120,
//     category: "30 cm Sparklers",
//     image: "/images/30cmColor.jpg",
//   },
//    {
    // _id: "5",
//     name: "15cm Red Sparkler",
//     price: 150,
//     category: "15 cm Sparklers",
//     image: "/images/15cmRed.jpg",
//   },
//    {
    // _id: "6",
//     name: "15cm Electric Sparkler",
//     price: 110,
//     category: "15 cm Sparklers",
//     image: "/images/15cmElectric.jpg",
//   },
//    {
    // _id: "7",
//     name: "15cm Green Sparkler",
//     price: 130,
//     category: "15 cm Sparklers",
//     image: "/images/15cmGreen.jpg",
//   },
//    {
    // _id: "8",
//     name: "15cm Color Sparkler",
//     price: 120,
//     category: "15 cm Sparklers",
//     image: "/images/15cmColor.jpg",
//   },
//     {
    // _id: "9",
//     name: "12cm Golden Sparkler",
//     price: 100,
//     category: "12 cm Sparklers",
//     image: "/images/12cmGolden.jpg",
//   },
//     {
//     _id: "10",
//     name: "12cm Red Sparkler",
//     price: 130,
//     category: "12 cm Sparklers",
//     image: "/images/12cmRed.jpg",
//   },
//     {
//     _id: "11",
//     name: "10cm Color Sparkler",
//     price: 60,
//     category: "10 cm Sparklers",
//     image: "/images/10cmColor.jpg",
//   },
//     {
//     _id: "12",
//     name: "10cm Electric Sparkler",
//     price: 55,
//     category: "10 cm Sparklers",
//     image: "/images/10cmElectric.jpg",
//   },
//     {
//     _id: "13",
//     name: "10cm Green Sparkler",
//     price: 65,
//     category: "10 cm Sparklers",
//     image: "/images/10cmGreen.jpg",
//   },
//    {
//     _id: "14",
//     name: "50cm Electric Sparkler",
//     price: 400,
//     category: "50 cm Sparklers",
//     image: "/images/50cmElectric.jpg",
//   },
//    {
//     _id: "15",
//     name: "7cm Electric Sparkler",
//     price: 25,
//     category: "7 cm Sparklers",
//     image: "/images/7cmElectric.jpg",
//   },
//    {
//     _id: "16",
//     name: "7cm Color Sparkler",
//     price: 30,
//     category: "7 cm Sparklers",
//     image: "/images/7cmColor.jpg",
//   },
  
//    {
//     _id: "17",
//     name: "Flower Pots Small",
//     price: 95,
//     category: "Flower Pots",
//     image: "/images/FlowerPotsSmall.jpg",
//   },
//    {
//     _id: "18",
//     name: "Flower Pots Big",
//     price: 130,
//     category: "Flower Pots",
//     image: "/images/FlowerPotsBig.jpg",
//   },
//    {
//     _id: "19",
//     name: "Flower Pots Special",
//     price: 170,
//     category: "Flower Pots",
//     image: "/images/FlowerPotsSpecial.jpg",
//   },
//    {
//     _id: "20",
//     name: "Flower Pots Ashoka",
//     price: 250,
//     category: "Flower Pots",
//     image: "/images/FlowerPotsAsoka.jpg",
//   },
//    {
//     _id: "21",
//     name: "Flower Pot Giant",
//     price: 510,
//     category: "Flower Pots",
//     image: "/images/FlowerPotsGiant.jpg",
//   },
//    {
//     _id: "22",
//     name: "Flower Pots Super Deluxe(5 Pcs)",
//     price: 340,
//     category: "Flower Pots",
//     image: "/images/FlowerPotsSuperDeluxe.jpg",
//   },
//    {
//     _id: "23",
//     name: "Colour Blooming",
  
//     price: 660,
//     category: "Flower Pots",
//     image: "/images/ColorBloomy.jpg",
//   },
//    {
//     _id: "24",
//     name: "Green Koti(5 Pcs)",
//     price: 280,
//     category: "Flower Pots",
//     image: "/images/GreenKoti.jpg",
//   },
//    {
//     _id: "25",
//     name: "Green Bouquet",
//     price: 480,
//     category: "Flower Pots",
//     image: "/images/GreenBouquet.jpg",
//   },
//   {
//     _id: "26",
//     name: "Tri Color(5 Pcs)",
//     price: 625,
//     category: "Flower Pots",
//     image: "/images/TriColor.jpg",
//   },
//    {
//     _id: "27",
//     name: "Ground Chakkar Big(10 Pcs)",
//     price: 70,
//     category: "Chakkars",
//     image: "/images/GroundChakkar.jpg",
//   },
//    {
//     _id: "28",
//     name: "Ground Chakkar Big(25 Pcs)",
//     price: 165,
//     category: "Chakkars",
//     image: "/images/GroundChakkarBig25.jpg",
//   },
//    {
//     _id: "29",
//     name: "Ground Chakkar Deluxe",
//     price: 260,
//     category: "Chakkars",
//     image: "/images/GroundChakkarDeluxe.jpg",
//   },
//    {
//     _id: "30",
//     name: "Ground Chakkar Special",
//     price: 145,
//     category: "Chakkars",
//     image: "/images/GroundChakkarSpecial.jpg",
//   },
//    {
//     _id: "31",
//     name: "Chakkar Spinner Special",
//     price: 240,
//     category: "Chakkars",
//     image: "/images/ChakkarSpinnerSpecial.jpg",
//   },
//    {
//     _id: "32",
//     name: "Flora Wheel(5 Pcs)",
//     price: 270,
//     category: "Chakkars",
//     image: "/images/FloraWheel.jpg",
//   },
//      {
//     _id: "33",
//     name: "4X4 Wheel",
//     price: 330,
//     category: "Chakkars",
//     image: "/images/4X4Wheel.jpg",
//   },
//      {
//     _id: "34",
//     name: "Dancing Wheel",
//     price: 190,
//     category: "Chakkars",
//     image: "/images/DancingWheel.jpg",
//   },
//        {
//     _id: "35",
//     name: "Baby Rockets",
//     price: 100,
//     category: "Rockets",
//     image: "/images/BabyRocket.jpg",
//   },
//        {
//     _id: "36",
//     name: "Rocket Bomb",
//     price: 130,
//     category: "Rockets",
//     image: "/images/RocketBomb.jpg",
//   },
//        {
//     _id: "37",
//     name: "Lunik Rocket",
//     price: 230,
//     category: "Rockets",
//     image: "/images/LunikRocket.jpg",
//   },
//          {
//     _id: "38",
//     name: "Zig Zag",
//     price: 60,
//     category: "Fancy Novelties",
//     image: "/images/ZigZag.jpg",
//   },
//          {
//     _id: "39",
//     name: "Stunner",
//     price: 260,
//     category: "Fancy Novelties",
//     image: "/images/Stunner.jpg",
//   },
//            {
//     _id: "40",
//     name: "Photo Flash",
//     price: 210,
//     category: "Fancy Novelties",
//     image: "/images/PhotoFlash.jpg",
//   },
//            {
//     _id: "41",
//     name: "Musical Siren",
//     price: 425,
//     category: "Fancy Novelties",
//     image: "/images/MusicalSiren.jpg",
//   },
//            {
//     _id: "42",
//     name: "Mini Siren",
//     price: 350,
//     category: "Fancy Novelties",
//     image: "/images/MiniSiren.jpg",
//   },
//            {
//     _id: "43",
//     name: "Magic Stone",
//     price: 45,
//     category: "Fancy Novelties",
//     image: "/images/MagicStone.jpg",
//   },
//            {
//     _id: "44",
//     name: "Magic Star",
//     price: 50,
//     category: "Fancy Novelties",
//     image: "/images/MagicStar.jpg",
//   },
//            {
//     _id: "45",
//     name: "Assorted Cartoons(10 Pcs)",
//     price: 70,
//     category: "Fancy Novelties",
//     image: "/images/AssortedCartoons.jpg",
//   },
//            {
//     _id: "46",
//     name: "Bambaram",
//     price: 180,
//     category: "Fancy Novelties",
//     image: "/images/Bambaram.jpg",
//   },
//            {
//     _id: "47",
//     name: "Bimboo(20 Pcs)",
//     price: 345,
//     category: "Fancy Novelties",
//     image: "/images/Bimboo.jpg",
//   },
//            {
//     _id: "48",
//     name: "ButterFly",
//     price: 230,
//     category: "Fancy Novelties",
//     image: "/images/Butterfly.jpg",
//   },
//            {
//     _id: "49",
//     name: "Doobys(20 Pcs)",
//     price: 345,
//     category: "Fancy Novelties",
//     image: "/images/Doobys.jpg",
//   },
//            {
//     _id: "50",
//     name: "Ganga Jamuna(5 Pcs)",
//     price: 150,
//     category: "Fancy Novelties",
//     image: "/images/GangaJamuna.jpg",
//   },
//            {
//     _id: "51",
//     name: "Helicopter(5 Pcs)",
//     price: 250,
//     category: "Fancy Novelties",
//     image: "/images/Helicopter.jpg",
//   },
//              {
//     _id: "52",
//     name: "Peacock Meena",
//     price: 490,
//     category: "Fountains",
//     image: "/images/PeacockMeena.jpg",
//   },
//              {
//     _id: "53",
//     name: "Bada Peacock",
//     price: 960,
//     category: "Fountains",
//     image: "/images/BadaPeacock.jpg",
//   },
//              {
//     _id: "54",
//     name: "Holi",
//     price: 300,
//     category: "Fountains",
//     image: "/images/Holi.jpg",
//   },
//              {
//     _id: "55",
//     name: "Gold Rush",
//     price: 260,
//     category: "Fountains",
//     image: "/images/GoldRush.jpg",
//   },
//              {
//     _id: "56",
//     name: "Kinder Joy",
//     price: 260,
//     category: "Fountains",
//     image: "/images/KinderJoy.jpg",
//   },
//              {
//     _id: "57",
//     name: "Popcorn",
//     price: 500,
//     category: "Fountains",
//     image: "/images/Popcorn.jpg",
//   },
//              {
//     _id: "58",
//     name: "Lollipop",
//     price: 525,
//     category: "Fountains",
//     image: "/images/Lollopop.jpg",
//   },
//              {
//     _id: "59",
//     name: "PUBG Gun",
//     price: 400,
//     category: "Fountains",
//     image: "/images/PubgGun.jpg",
//   },
//                {
//     _id: "60",
//     name: "Wonder Bees",
//     price: 630,
//     category: "Mega Fountains",
//     image: "/images/WonderBees.jpg",
//   },
//                {
//     _id: "61",
//     name: "Silver Bees",
//     price: 630,
//     category: "Mega Fountains",
//     image: "/images/SilverBees.jpg",
//   },
//                {
//     _id: "62",
//     name: "Blooming Volcano",
//     price: 730,
//     category: "Mega Fountains",
//     image: "/images/BloomingVolcano.jpg",
//   },
//                {
//     _id: "63",
//     name: "Sizzle Pots",
//     price: 400,
//     category: "Mega Fountains",
//     image: "/images/SizzlePots.jpg",
//   },
//                {
//     _id: "64",
//     name: "Golden & Silver Stars(2 Pcs)",
//     price: 425,
//     category: "Mega Fountains",
//     image: "/images/SilverStar.jpg",
//   },
//                {
//     _id: "65",
//     name: "Mojito,Jigarthanda",
//     price: 250,
//     category: "Mega Fountains",
//     image: "/images/MojitoJigarthanda.jpg",
//   },
//                {
//     _id: "66",
//     name: "7 cm Magic Pencil",
//     price: 65,
//     category: "Candles & Twinkling Star",
//     image: "/images/7cmMagicPencil.jpg",
//   },
//                  {
//     _id: "67",
//     name: "12 cm Pencil",
//     price: 165,
//     category: "Candles & Twinkling Star",
//     image: "/images/12cmPencil.jpg",
//   },
//                  {
//     _id: "68",
//     name: "15 cm Pencil(3 Pcs)",
//     price: 180,
//     category: "Candles & Twinkling Star",
//     image: "/images/15cmPencil.jpg",
//   },
//                  {
//     _id: "69",
//     name: "Fuji Candles",
//     price: 330,
//     category: "Candles & Twinkling Star",
//     image: "/images/Fujicandles.jpg",
//   },
//                  {
//     _id: "70",
//     name: "1 1/2\" Twinkling Star",
//     price: 70,
//     category: "Candles & Twinkling Star",
//     image: "/images/1.5TwinklingStar.jpg",
//   },
//                  {
//     _id: "71",
//     name: "4\"Twinkling Star",
//     price: 180,
//     category: "Candles & Twinkling Star",
//     image: "/images/4TwinklingStar.jpg",
//   },
//                  {
//     _id: "72",
//     name: "Green Twinkling Star",
//     price: 110,
//     category: "Candles & Twinkling Star",
//     image: "/images/GreenTwinklingStar.jpg",
//   },
//                    {
//     _id: "73",
//     name: "Pringles Mix & 5 Colors",
//     price: 70,
//     category: "Elite Series",
//     image: "/images/PringlesMix.jpg",
//   },
//                    {
//     _id: "74",
//     name: "Oreo",
//     price: 135,
//     category: "Elite Series",
//     image: "/images/Oreo.jpg",
//   },
//                    {
//     _id: "75",
//     name: "Wizz",
//     price: 260,
//     category: "Elite Series",
//     image: "/images/Wizz.jpg",
//   },
//                    {
//     _id: "76",
//     name: "Rainbow Color Smoke(Hand Held)",
//     price: 375,
//     category: "Elite Series",
//     image: "/images/GreenTwinklingStar.jpg",
//   },
//                    {
//     _id: "77",
//     name: "Robo(5 Pcs)(Green)",
//     price: 190,
//     category: "Elite Series",
//     image: "/images/RoboGreen.jpg",
//   },
//                    {
//     _id: "78",
//     name: "Rio,Shrek(Red,Green Shower)",
//     price: 275,
//     category: "Elite Series",
//     image: "/images/Rio.jpg",
//   },
       

//   // 🔽 Add more real products here
// ];

// // ⚠️ One-time insert route — only run once
// app.get('/api/insert-products', async (req, res) => {
//   try {
//     const existing = await Product.countDocuments();
//     if (existing >= 78) {
//       return res.send('✅ Products already inserted.');
//     }

//     await Product.insertMany(products);
//     res.send('✅ Inserted 78 products!');
//   } catch (err) {
//     console.error(err);
//     res.status(500).send('❌ Error inserting products.');
//   }
// });

// // ✅ Get all products
// app.get('/api/products', async (req, res) => {
//   try {
//     const items = await Product.find();
//     res.json(items);
//   } catch (err) {
//     console.error('❌ Error fetching products:', err);
//     res.status(500).send('Server error');
//   }
// });

// // ✅ Count products
// app.get('/api/count', async (req, res) => {
//   try {
//     const count = await Product.countDocuments();
//     res.send(`Total products in DB: ${count}`);
//   } catch (err) {
//     res.status(500).send("Error counting products");
//   }
// });

// // 🚀 Start Server
// app.listen(PORT, () => {
//   console.log(`✅ Server running on http://localhost:${PORT}`);
// });
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const bcrypt = require("bcryptjs");

const Product = require('./models/Product');
const User = require("./models/User");

const app = express();

// ================== MIDDLEWARE ==================
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use('/images', express.static(path.join(__dirname, 'public/images')));

// Ensure uploads folder exists
const uploadsPath = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadsPath)) fs.mkdirSync(uploadsPath);

// ================== MONGODB CONNECTION ==================
mongoose.connect('mongodb://localhost:27017/crackerShop', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(async () => {
  console.log('✅ MongoDB connected');
  const count = await Product.countDocuments();
  if (count === 0) {
    console.log('🌱 Seeding products...');
    await addRealProducts();
  } else {
    console.log(`📦 ${count} products already in database`);
  }
})
.catch(err => console.error('❌ MongoDB error:', err));

// ================== MULTER ==================
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, uploadsPath),
  filename: (req, file, cb) => cb(null, Date.now() + '-' + file.originalname.replace(/\s+/g, '_')),
});
const upload = multer({ storage });

// ================== ORDER UPLOAD API ==================
app.post('/api/order-upload', upload.fields([
  { name: 'bill', maxCount: 1 },
  { name: 'screenshot', maxCount: 1 }
]), (req, res) => {
  const { name, phone, place, landmark } = req.body;
  if (!req.files.bill || !req.files.screenshot) {
    return res.status(400).json({ success: false, message: 'Bill or screenshot missing' });
  }

  const billUrl = `http://localhost:5000/uploads/${req.files.bill[0].filename}`;
  const screenshotUrl = `http://localhost:5000/uploads/${req.files.screenshot[0].filename}`;

  const whatsappMessage = `🧨 New CrackerMart Order 🚀

👤 Name: ${name}
📞 Phone: ${phone}
📍 Place: ${place}
📌 Landmark: ${landmark}

🧾 Bill: ${billUrl}
💵 Payment Screenshot: ${screenshotUrl}

Please confirm this order.`;

  res.json({
    success: true,
    whatsappURL: `https://wa.me/8148842731?text=${encodeURIComponent(whatsappMessage)}`
  });
});

// ================== PRODUCT APIs ==================
app.get('/api/products', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch products' });
  }
});

app.post('/api/products', async (req, res) => {
  try {
    const { name, price, category, image } = req.body;
    if (!name || !price || !category || !image) {
      return res.status(400).json({ error: 'Missing fields' });
    }
    const product = new Product({ name, price, category, image });
    await product.save();
    res.status(201).json({ message: 'Product added', product });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

// ================== AUTH ROUTES ==================
// Signup (alias: /register)
app.post(["/signup", "/register"], async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "Email and password required" });
    }

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ message: "User already exists" });

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({ email, password: hashedPassword });
    await newUser.save();

    res.json({ message: "Signup successful" });
  } catch (err) {
    console.error("Signup error:", err);
    res.status(500).json({ message: "Server error", error: err.message });
  }
});

// Login
app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "User not found" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: "Invalid password" });

    res.json({ message: "Login successful" });
  } catch (err) {
    console.error("Login error:", err);
    res.status(500).json({ message: "Server error", error: err.message });
  }
});

// ================== SEED PRODUCTS ==================
const addRealProducts = async () => {
  const products = [
    // your product list here...
  ];
  try {
    await Product.insertMany(products, { ordered: false });
    console.log('✅ Real products added to MongoDB');
  } catch (err) {
    console.error('❌ Failed to add real products:', err);
  }
};

// ================== START SERVER ==================
const PORT = 5000;
app.listen(PORT, () => console.log(`🚀 Server running at http://localhost:${PORT}`));

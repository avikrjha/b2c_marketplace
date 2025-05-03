# 🛍️ B2C Marketplace Backend

## Project Information
This project is a **B2C Market Place** built using:
- **Node.js** for the backend
- **Express.js** for handling API requests
- **Mongoose** for database management
- **Mongo Db** as the database


## Features

- 🎯 Featured Categories  
- 📈 Trending Products  
- 🔥 Best-Selling Products  
- 🖼️ Banners / Ads 

## API Endpoints

- **Featured Categories ** (GET `/api/v1/Products/featured-categories`)
- **Trending Products** (POST `/api/v1/Products/trending-products`)
- **Best-Selling Products** (GET `/api/v1/Products/best-selling-products`)
- **Banners** (GET `/api/v1/Products/banners`)


## Installation & Setup
1. Clone the repository:
   ```sh
   git clone https://github.com/avikrjha/b2c_marketplace.git
   cd b2c_marketplace.git
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Set up environment variables in `.env` file:
   ```sh
   MONGO_HOST=your_database_host
   MONGO_PORT=your_port
   PORT =5000
   DB='marketplace'
   MONGODB_URI="your uri"
   ```

4. Start the server:
   ```sh
   npm run dev
   ```


## Contributing
1. Fork the repository.
2. Create a new branch: `git checkout -b feature-branch`
3. Commit your changes: `git commit -m "Add new feature"`
4. Push the changes: `git push origin feature-branch`
5. Open a pull request.

## License
This project is licensed under Avinash Jha.

---
🚀 Happy Coding! Let us know if you have any issues or suggestions.



# Mess Bill Management System

The Mess Bill Management System is designed to simplify the process of managing student mess bills by allowing administrators to upload Excel sheets containing bill records, which are then updated in the system's MySQL database.

## Frontend UI
![Mess Bill Management UI](https://github.com/gopalkatiyar/mess-bill/blob/main/frontend/public/image.png)


## Features

- **Excel File Upload**: Upload Excel sheets to update student bill records.
- **MySQL Database Integration**: All bill records are stored and managed in a MySQL database using SQL queries.
- **Backend**: Built using **Node.js** and **Express** to handle requests and file uploads.
- **Frontend**: User-friendly interface built with **React.js**.
- **Data Parsing**: Parses Excel files using the **xlsx** library to extract and validate records before updating the database.
- **Error Handling**: Built-in error handling for data validation and database operations.

## Technologies Used

- **Frontend**: React.js
- **Backend**: Node.js, Express
- **Database**: MySQL
- **File Upload**: Multer (for file uploads)
- **Excel Parsing**: xlsx (to parse Excel files)
- **Environment Variables**: dotenv (for secure configuration)

## Installation and Setup

### Step 1: Clone the repository

```bash
git clone https://github.com/gopalkatiyar/mess-bill
cd mess-bill-management-system
```

### Step 2: Install dependencies

```bash
cd backend
npm install
```

## navigate to root directory
```bash
cd ../frontend
npm install
```

### Step 3: Set up the `.env` file

Create a `.env` file in the root of your project and configure the database and server:

```bash
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your-password
DB_DATABASE=mess
```

### Step 4: Set up the MySQL database

Run the following commands in your MySQL client to create the necessary database and tables:

```sql
CREATE DATABASE mess;

USE mess;

CREATE TABLE users (
    SrNo INT AUTO_INCREMENT PRIMARY KEY, 
    Namee VARCHAR(255),   
    RoomNo VARCHAR(5),            
    Extra DECIMAL(10, 2),   
    offPt DECIMAL(10, 2),     
    offRs DECIMAL(10, 2),    
    Main DECIMAL(10, 2), 
    Bill DECIMAL(10, 2),     
    Diposit DECIMAL(10, 2),  
    Balance DECIMAL(10, 2)            
);
```

### Step 5: Start the server

Run the following command to start the server:

```bash
npm run server
```

By default, the server will run on `http://localhost:3000`.

## API Endpoints

### 1. **Upload Excel File**

```bash
POST /api/upload
```

- **Description**: Upload an Excel file to update student bill records in the database.
- **Request Body**: Form-data containing the Excel file with the key `file`.

### 2. **Fetch Student Data**

```bash
GET /api/data?roomNo={roomNo}
```

- **Description**: Fetches bill records of a specific student by room number.
- **Parameters**: `roomNo` – The student's room number.

## Excel File Format

The Excel sheet should have the following structure:

| MESS BILL | Name  | RoomNo | Extra | offPt | offRs | Main | Bill | Deposit | Balance |
|-----------|-------|--------|-------|-------|-------|------|------|---------|---------|
| 1         | John  | A101   | 100   | 50    | 25    | 300  | 475  | 400     | 75      |

Make sure the data is correctly formatted for successful uploads.

## License

This project is licensed under the MIT License.

# 🧩 Onboarding & Dashboard Interface
A responsive and user-friendly React application built to streamline user onboarding and provide a personalized dashboard experience.

# 👩‍💻 Created by: PESALAVARI PALLAVI

## 📌 Project Overview
This project features a 3-step onboarding wizard and a dashboard interface. After completing onboarding, the user is redirected to a dashboard that displays their data along with key insights in an interactive and visually appealing layout.

## 🚀 Technologies Used
    React – Frontend library

    Tailwind CSS – Utility-first CSS framework

    Axios – For API calls (mock/dummy data)

    localStorage / React Context – For state persistence

    Recharts (Optional) – For displaying weekly progress with a chart

## 🧱 Features

### 1. ✅ Onboarding Wizard (Multi-Step Form)

**Step 1:**  Personal Info
Name, Email

**Step 2:** Business Info
Company Name, Industry, Size

**Step 3:** Preferences
Theme, Default Dashboard Layout

**Functionalities:**
Progress bar at the top

Navigation with **“Next”**, **“Back”**, and **“Submit”** buttons

Input validation for required fields

Smooth UI transitions between steps

### 2. 📊 Dashboard Page
Automatic redirect to the dashboard after onboarding completion

Displays user info submitted in the onboarding process

#### Shows 3 informative cards:

##### 👥 Team Members Count

##### 📁 Active Projects

##### 🔔 Notifications

(Optional) Weekly progress chart using Recharts

## ✨ Bonus Features
Data is persisted using localStorage or dummy API (mocked backend)

Fully responsive across mobile and desktop devices

Smooth animations between onboarding steps for better UX

## 📁 Project Structure


    src/

    ├── components/

    │   ├── Onboarding/

    │   │   ├── Step1.jsx

    │   │   ├── Step2.jsx

    │   │   ├── Step3.jsx

    │   │   └── ProgressBar.jsx

    │   ├── Dashboard/

    ├── context/ # (Optional state management)

    ├── utils/   # Input validation and helpers

    ├── App.jsx

    ├── main.jsx

    └── index.css

## 🛠 Getting Started
### 1. Clone the repository

git clone https://github.com/Pallavipesalavari/PESALAVARI-PALLAVI-Etailed-First-Project.git
cd onboarding-dashboard
### 2. Install dependencies
    npm install

### 3. Start the development server
    npm run dev
    Or, if using Create React App:

    npm start

## 🖼 Screenshots
### Step-1 :
![Reference Image](/my-project/Screenshots/Step-1%20Personal%20Info.png)

### Step-2:
![Reference Image](/my-project/Screenshots/Step%202%20Business%20Info.png)

### Step-3:
![Reference Image](/my-project/Screenshots/Step%203%20Preferences.png)

### Step-3 (1) :
![Reference Image](/my-project/Screenshots/Step%203%20Preferences%20%20(1).png)

### DashBoard :
![Reference Image](/my-project/Screenshots/Dashboard.png)

## 📜 License
This project is open-source and available under the MIT License.

## 🙌 Author
Made with 💡 and 💻 by **PESALAVARI PALLAVI**

## GitHub Link :
### https://github.com/Pallavipesalavari/PESALAVARI-PALLAVI-Etailed-First-Project.git

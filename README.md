# E-Commerce SPA with Commercetools API Integration
## :mega: Project Overview
This project aims to create a Single Page Application (SPA) for an e-commerce platform. The application will allow users to browse and purchase products from various categories. It will incorporate essential e-commerce functionalities like user authentication, product listing, product details, shopping cart management, and user profiles. The project will use the Commercetools API for product data retrieval and management.

### Key Features:

#### 1. Authentication:

- Users can register and log in securely using the authentication service.
- Proper input validation will be implemented for registration and login forms.

#### 2. Main Pages:

- The application will have Login, Registration, and Main (Product Listing) pages.
- Users can navigate seamlessly between the login and registration pages.
  
#### 3. Product Listing (Catalog) Page:

- Fetching and displaying a list of products with essential details from the Commercetools API.
- Implementing filtering, sorting, and searching functionalities for a better user experience.
- Interactive product cards with navigation between product categories.
  
#### 4. Detailed Product Page:

- Displaying comprehensive product information, including product images, descriptions, and specifications.
- Image slider to showcase multiple product images.
- Modal window for enlarged product images.
- Breadcrumb navigation for easy navigation back to the catalogue page.
- Widgets for selecting product options.
  
#### 5. User Profile Page:

- Displaying the user's personal information such as first name, last name, and date of birth.
- Listing the user's addresses for easy reference.
- Providing an edit mode to update personal details, email, and addresses.
  
#### 6. Shopping Cart (Basket) Page:

- Displaying a list of items added to the cart.
- Allowing users to increase or decrease the quantity of each item in the cart.
- Removing items from the cart.
- Displaying subtotal and total prices.
- A button to proceed to the checkout page.

## :fire: Technology Stack:

- HTML
- CSS
- TypeScript
- API Integration: Commercetools API

## :ok_hand: Available Scripts

### 1. ESLint

- #### Usage:
```
npm run
```
- #### Description:
The ESLint script is used to run code linting on all the TypeScript files in the project. ESLint helps enforce coding standards and identifies potential issues or errors in the code.

- #### Usage Instructions:
  - Run this script regularly to ensure that the code adheres to the defined coding standards and best practices.
  - ESLint will display linting errors and warnings in the console output, along with the file names and line numbers where issues are found.

### 2. Prettier 
- #### Usage:
```
npm run
```
- #### Description:
The Prettier script is used to automatically format the code based on the project's Prettier configuration. Prettier helps maintain a consistent code style throughout the project.

- #### Usage Instructions:
  - Run this script before committing or pushing code changes to ensure consistent code formatting across the entire project.
  - Prettier will automatically format the code in place and show the changes made in the console output.
    
### 3. Jest Test 
- #### Usage:
```
npm run test
```
- #### Description:
The Jest Test script is used to run unit tests on the project using the Jest testing framework. These tests help ensure that individual units or components of the code are working correctly.
- #### Usage Instructions:
  - Run this script to execute all the unit tests in the project.
  - Jest will run the tests and display the results in the console output, including the number of tests passed and failed, and the code coverage.

## :star: Local Setup and Running Instructions
Follow the step-by-step instructions below to set up and run the project locally on your machine. This guide assumes you have Node.js and npm (Node Package Manager) installed on your system.

#### :exclamation: Prerequisites: Node.js and npm
- Ensure you have Node.js and npm installed on your machine. You can download and install them from the official Node.js [website](https://nodejs.org).

### Step 1: Clone the Repository
- Open your terminal or command prompt.
- Change the current working directory to the location where you want to clone the project.
- Run the following command to clone the repository:
```
git clone https://github.com/SoloSoft2000/eCommerce-Application.git
```
### Step 2: Install Dependencies

- Change the current working directory to the cloned project folder.
- Install the project dependencies using npm:
```
npm install
```
### Step 4: Start the Development Server
- Run the following command to start the development server:
```
npm start
```
- The development server will compile the code and launch the application. It will also open the application in your default web browser.

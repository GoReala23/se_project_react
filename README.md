# WTWR (What To Wear) Application

The "What To Wear" (WTWR) application is a dynamic, user-friendly web platform developed with React. It leverages live weather data to recommend the most suitable clothing options for current weather conditions, ensuring users are appropriately dressed for any weather.

## Key Features

- **Live Weather Updates**: Utilizes the OpenWeather API to display real-time weather information, including temperature, condition, and the user's location.

- **Automated Clothing Recommendations**: Dynamically suggests clothing items from a predefined list based on the live weather data, aiding users in making quick and efficient outfit decisions.

- **Interactive Clothing Catalog**: Features an interactive catalog where users can explore different clothing options. Clicking on a clothing item brings up a detailed view in a modal, enhancing user interaction.

- **Custom Clothing Addition**: Allows users to contribute to the platform by adding new clothing items, complete with name, image, and associated weather condition, enriching the application's database and community engagement.

- **Temperature Unit Conversion**: Offers the flexibility to switch between Celsius and Fahrenheit units, accommodating user preferences across different geographic locations.

## Setup and Installation

To get the WTWR application up and running on your local machine for development and testing purposes, follow these steps:

1. **Clone the repository**: Obtain a copy of the repo using the clone command with Git.

2. **Install dependencies**: Navigate to the project directory and run `npm install` to install the necessary dependencies.

3. **Start the application**: Launch the app by running `npm start`. This command will open the application in your default web browser.

### Backend Repository

You can find the backend repository here: [Backend Repository](https://github.com/GoReala23/se_project_express)

### How to Run the Backend

1. **Clone the backend repository:**

   git clone https://github.com/GoReala23/se_project_express.git

2. **Navigate to the project directory:**
   cd se_project_express

3 **Install the dependencies:**
npm install

4 **Set up environment variables:**

- Create a .env file in the root of the project.
- Add the necessary environment variables (e.g., database connection string).

env

MONGO_URI=your-mongodb-connection-string
PORT=5000
JWT_SECRET=your-jwt-secret

5 **Start the backend server:**

npm run start
The server should be running on http://localhost:5000

## Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Hat tip to anyone whose code was used
- Inspiration
- etc.
  This README omits specific file references, focusing instead on the application's features, setup instructions, contribution guidelines, and licensing information, providing a clear and concise overview suitable for a GitHub project repository.

## Access Information

- Frontend URL: https://your-frontend-domain.com

# IoT Smart Parking System
Use wireless metal sensors to track the presence of vehicles that communicate on Wi-Fi network and data is transmitted to ESP32 microcontroller act as a parking central server
## Overview
The IoT Smart Parking System is a smart solution designed to optimize parking space management using wireless metal sensors and ESP32 microcontroller. This system aims to enhance the efficiency of parking spaces in urban environments by providing real-time occupancy information by constantly updated information on a web browser via a web server address, and improving the overall parking experience for users.
## Key Features
* Real-Time Monitoring: Utilizes wireless metal sensors to detect the presence of vehicles in parking spaces and provide real-time occupancy updates.
* Centralized Management: Employs ESP32 as a central server to aggregate and process sensor data, serving an interactive web-based dashboard for users to view parking availability.
* User-Friendly Interface: Presents parking space status through a dynamic HTML interface that visually indicates occupied and available spaces.
* Scalable Architecture: Designed to easily scale with additional sensors and parking spaces, accommodating various sizes of parking facilities.
## Technologies Used
* Microcontroller: ESP32 for handling sensor data and serving as the central server.
* Wireless Sensors: Metal sensors to detect vehicle presence and communicate wirelessly to the central server.
* Networking: Wi-Fi for connecting sensors to the central server and serving the web interface.
* Web Technologies: HTML, and JavaScript for creating the user interface and dynamically updating parking space status.
* Programming Languages: JavaScript for server-side logic and sensor data handling.
## How it works
1. Sensor Deployment: Metal sensors are installed in each parking space to detect the presence of vehicles. These sensors transmit data wirelessly.
2. Data Collection: The central microcontroller (ESP32) receives data from the sensors, processes it, and updates the parking space status.
3. User Interface: A web server running on the ESP32 serves an HTML page that displays the status of each parking space. The page is updated periodically to reflect real-time changes.
4. Visualization: The web interface uses color-coded indicators to show whether a parking space is occupied (red) or available (green), providing clear and immediate feedback to users.
## Configuration and Setup
1. 

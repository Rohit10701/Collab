
# Collab CodeShare Website
This repository contains the source code for Collab, a CodeShare website developed using Next.js and Socket.io. Collab allows users to collaborate on coding projects in real-time, supporting both anonymous and login modes. In the anonymous mode, users can start coding without logging in and share their code through generated links. In the login mode, users can create an account, log in, and access their saved files.
https://admirable-macaron-282c5d.netlify.app/

## Features



### Two modes: anonymous and login

`Anonymous mode:`


Start coding without logging in

Share code through generated links

Real-time collaboration with others

Code compilation using APIs

Supports `Python`, `C`, `C++`, and `Java`


`Login mode:`

Create an account and log in

Access and manage saved file

Real-time collaboration with others

Code compilation using APIs

Supports `Python`, `C`, `C++`, and `Java`


## Technologies Used

`Next.js` `Socket.io` `HTML/CSS` `JavaScript`

APIs for code compilation:

Python: Python Compiler API

C/C++: C/C++ Compiler API

Java: Java Compiler API

## Getting Started

To run the Collab CodeShare website locally, follow these steps:


### Clone the repository:
```bash
git clone https://github.com/Rohit10701/CollbC.git
```
## Navigate to the project directory:
```bash
cd <repository>
```
## Install the dependencies:
```bash
npm install
```
Configure the API endpoints:


Open the .env.local file.

Replace the placeholders with the actual API endpoints for code compilation.

Save the file.

**Start the development server:**
```bash
npm run dev
```
Open your browser and visit http://localhost:3000 to access the Collab CodeShare website.


Collaborate with others in real-time by sharing the file link.

## Contributing
Contributions to the Collab CodeShare website are welcome! If you encounter any issues or have any suggestions, feel free to open an issue or submit a pull request.


## License

This project is licensed under the MIT License.


## Acknowledgements
The Collab CodeShare website is built using the Next.js framework, which simplifies the development of server-side rendered and static websites.

Socket.io enables real-time collaboration between users, facilitating a seamless coding experience.

The APIs used for code compilation provide the necessary tools to execute code in various programming languages.

Please feel free to contribute to this project and help improve its functionality. If you have any questions or need assistance, please refer to the documentation or create an issue in the repository.

# 🌊 NEMO - Mental Health Chatbot 🧠

NEMO is a cutting-edge AI-powered chatbot designed to provide on-demand mental health and emotional support to students. Leveraging the power of Google's `gemini-1.5-flash` Generative AI model, NEMO delivers engaging and supportive conversations through a user-friendly web interface.

## ✨ Key Features

- **🤖 AI-Driven Conversations:** Powered by Google's `gemini-1.5-flash`, offering dynamic and context-aware dialogues.
- **💻 User-Friendly Web Interface:** Built with EJS, HTML, CSS, and JavaScript for a seamless and intuitive experience.
- **💬 Real-Time Interaction:** Facilitates fluid conversations with maintained chat history, ensuring context preservation.
- **🖼️ Engaging UI/UX:** Integrated animated GIFs and subtle visual cues to enhance user engagement and provide a more empathetic interface.
- **🔒 Secure API Key Management:** Employs `.env` files to protect sensitive API keys, promoting secure coding practices.
- **📱 Responsive Design:** Ensures accessibility and optimal performance across diverse devices, from desktops to mobile phones.

## 🛠️ Tech Stack

- **Backend:**
    - **Node.js:** Runtime environment for server-side JavaScript.
    - **Express.js:** Fast, unopinionated, minimalist web framework for Node.js.
- **Frontend:**
    - **EJS:** Templating engine for dynamic HTML generation.
    - **HTML:** Markup language for structuring web content.
    - **CSS:** Styling language for visual presentation.
    - **JavaScript:** Programming language for interactivity and DOM manipulation.
- **Artificial Intelligence:**
    - **Google Generative AI (`gemini-1.5-flash`):** Advanced language model providing conversational capabilities.
- **Environment Management:**
    - **dotenv:** Zero-dependency module that loads environment variables from a `.env` file.
- **Styling:**
    - **Custom CSS:** Tailored styles for a unique visual identity.

## 🚀 Installation Guide

Follow these steps to get NEMO up and running on your local machine:

1.  **Clone the Repository:**

    ```bash
    git clone https://github.com/yourusername/your-repository.git
    cd your-repository
    ```

2.  **Install Dependencies:**

    ```bash
    npm install
    ```

3.  **Configure Environment Variables:**

    -   Create a `.env` file in the root directory:

        ```bash
        touch .env
        ```

    -   Add your Google Generative AI API key to the `.env` file.  **Important:** Never commit API keys directly to the repository!

        ```env
        GEMINI_API_KEY="your_apikey"
        ```

        You can use this command for quick setup:

        ```bash
        echo 'GEMINI_API_KEY="your_apikey"' > .env
        ```

        *Replace `"your_apikey"` with your actual Gemini API key.*

4.  **Start the Server:**

    ```bash
    node server.js
    ```

    This will launch the server, accessible at `http://localhost:3000` in your browser.

## 📐 Architecture Diagram

```mermaid
graph LR
    A[User] --> B(Web Browser);
    B --> C{Nginx/Reverse Proxy (Optional)};
    C --> D(Node.js/Express Server);
    B --> D;
    D --> E((Gemini 1.5 Flash API));
    E --> D;
    D --> F[Database (Future - Persistent Chat History)];
    style A fill:#f9f,stroke:#333,stroke-width:2px
    style B fill:#ccf,stroke:#333,stroke-width:2px
    style C fill:#ccf,stroke:#333,stroke-width:2px
    style D fill:#9cf,stroke:#333,stroke-width:2px
    style E fill:#fcc,stroke:#333,stroke-width:2px
    style F fill:#cfc,stroke:#333,stroke-width:2px
content_copy
download
Use code with caution.
Markdown
📂 Project Structure
nemo-chatbot/
├── .env                 # Sensitive environment variables (API keys) - **DO NOT COMMIT**
├── index.html           # Main HTML structure and UI elements
├── node_modules/        # Managed dependencies from npm
├── package-lock.json    # Tracks exact dependency versions
├── package.json         # Project metadata and dependency declarations
├── README.md            # Project documentation (this file)
├── server.js            # Node.js server application logic
├── styles.css           # CSS rules for styling components
├── public/              # Static assets directory
│   ├── bot.gif          # Animation for bot's welcome message
│   ├── reply.gif        # Animation for "thinking" state
│   └── send-icon.png    # Icon for send button
└── views/               # EJS templates directory
│   └── index.ejs         # Main EJS template for dynamic content
content_copy
download
Use code with caution.
🎮 Usage

Open your web browser and navigate to http://localhost:3000.

Enter your message in the input field.

Click the send button (or press Enter) to send the message to NEMO.

Review the chatbot's response displayed in the chat window.

🎨 Customization

🤖 Chatbot Persona: Modify the systemInstruction in server.js to redefine NEMO's role and conversational style.

🎨 Visual Design: Tweak the styles.css file to personalize the interface with your own branding and aesthetic.

🖼️ UI Enhancements: Customize animations, add new UI elements, or improve existing components by editing the index.html and associated JavaScript.

⚙️ API Configuration: Fine-tune the generationConfig object in server.js to control factors like temperature, topP, and output token limits, impacting the chatbot's responses.

⚠️ Important Considerations

🔒 API Key Security: Treat your Gemini API key with extreme care. Store it securely using environment variables and never commit it to version control.

🐞 Error Handling: Implement comprehensive error handling to gracefully manage exceptions and provide informative feedback to users.

💾 Persistent Storage: Integrate a database solution for persistent storage of chat history, enabling long-term context and personalized experiences.

🚦 Rate Limiting: Be aware of API usage limits and implement strategies to avoid exceeding them, ensuring continuous service availability.

⚖️ Ethical AI: Prioritize ethical considerations when developing mental health applications. Ensure responses are empathetic, non-judgmental, and never offer medical advice.

Disclaimer: NEMO is designed to provide emotional support and is not a substitute for professional medical or mental health advice.

🤝 Contributing

Contributions are highly encouraged! Feel free to submit pull requests to address bugs, add new features, or enhance documentation.

📜 License

MIT License (Replace with your chosen license if applicable)

content_copy
download
Use code with caution.

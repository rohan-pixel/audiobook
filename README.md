# 📚 Audiobook App — Expo + Firebase + React Native

Welcome to the Audiobook App, a cross-platform mobile application built using Expo, React Native, and Firebase.
This project provides a modern, fast, and scalable solution for listening to, uploading, and managing audiobooks on Android, iOS, and Web

## 🚀 Features

### 🎧 Audiobook Playback

* Stream or play downloaded audiobook files
* Built with `expo-av` for smooth playback
* Background audio support (configurable)

### 📤 Upload & File Management

* Supports audio file uploads (MP3, WAV, etc.)
* Integrated with:


  * `expo-document-picker`
  * `expo-file-system`
  * `react-native-fs`

### 🔐 User Authentication

* Login & Register using Firebase Authentication
* Secure credential handling with `expo-secure-store`

### ☁️ Cloud Sync

* Store audiobook metadata using:

  * Firebase Firestore
  * Firebase Realtime Database

### 💾 Local Storage

* Offline audiobook metadata stored using:

  * `expo-sqlite`
  * `react-native-sqlite-storage`

### 📱 Modern Navigation

* Built using `expo-router` (file-based routing)
* Smooth transitions & stack navigation via React Navigation

### 🎨 UI & Icons

* Clean UI with `@expo/vector-icons`
* Optimized layout with `react-native-safe-area-context`


## 🏗️ Tech Stack

### Core

* Expo 51
* React Native 0.74
* React 18

### Firebase (Modular SDK)

* Authentication
* Firestore
* Realtime Database
* Firebase App

### Device Features

* Audio playback (`expo-av`)
* File handling (`expo-file-system`)
* Media library (`expo-media-library`)
* Secure storage (`expo-secure-store`)

### Navigation

* Expo Router
* React Navigation (Native & Stack)

## 📁 Project Structure

```
app/
│── (auth)/         # Auth screens
│── (tabs)/         # Main app navigation
│── components/     # Shared UI components
│── services/       # Firebase & Local DB helpers
│── utils/          # Helper functions
│── assets/         # Images, fonts, audio samples
│── scripts/        # Utility scripts (reset, etc.)
package.json
```

## 🧩 Scripts

| Command                 | Description                  |
| ----------------------- | ---------------------------- |
| `npm install`           | Install dependencies         |
| `npx expo start`        | Start development server     |
| `npm run android`       | Run on Android               |
| `npm run ios`           | Run on iOS                   |
| `npm run web`           | Run on Web                   |
| `npm run reset-project` | Reset the Expo app structure |
| `npm test`              | Run Jest tests               |


## ▶️ Getting Started

### 1️⃣ Install dependencies

```bash
npm install
```

### 2️⃣ Start the development server

```bash
npx expo start
```

You can then open the app in:

* 📱 Android Emulator
* 📱 iOS Simulator
* 🌐 Web Browser
* 📱 Expo Go App (limited capabilities)


## 🧰 Development Workflow

### Start with file-based routing

All screens live inside the `app/` folder and auto-register as routes.

### Firebase Setup

Add your Firebase config inside a helper such as:

```
services/firebaseConfig.js
```

### Audio Content

Use `expo-av` to load, play, pause, seek, and stop audio files.

## 🧽 Reset Project

If you want a fresh directory structure:

```bash
npm run reset-project
```

This moves default files to **app-example/** and creates a clean **app/** for your development.

## 📚 Learn More

* Expo Docs → [https://docs.expo.dev/](https://docs.expo.dev/)
* Firebase Docs → [https://firebase.google.com/docs](https://firebase.google.com/docs)
* React Navigation → [https://reactnavigation.org/docs/getting-started/](https://reactnavigation.org/docs/getting-started/)

## 🤝 Community

* Expo GitHub — [https://github.com/expo/expo](https://github.com/expo/expo)
* Expo Discord — [https://chat.expo.dev](https://chat.expo.dev)



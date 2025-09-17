import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function MyButton() {
  return (
    <button>I'm a button</button>
  );
}

function AboutPage() {
  return (
    <>
      <h1>About</h1>
      <p>Hello there.<br />How do you do?</p>
    </>
  );
}

function Avatar() {
  return (
    <div>
      <img 
        src="C:\Users\Admin\Pictures\avatar.jpg"
        alt="Avatar"
        style={{
          borderRadius: "50%"
        }}
      />
    </div>
  );
}

const user = {
  name: 'Hedy Lamarr',
  imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
  imageSize: 90,
};

function Profile() {
  return (
    <>
      <h1>{user.name}</h1>
      <img
        className="avatar"
        src={user.imageUrl}
        alt={'Photo of ' + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize
        }}
      />
    </>
  );
}

let content;
const isLoggedIn = false;

if (isLoggedIn) {
  content = <AdminPanel />;
} else {
  content = <LoginForm />;
}
function AdminPanel() {
  return <h1>Welcome, Admin!</h1>;
}

function LoginForm() {
  return (
    <h1>Welcome to Login Form</h1>
  );
}


export default function App() {
  return (
    <div>
      <h1>Welcome to my app</h1>
      <MyButton />
      <AboutPage />
      <Avatar />
      <Profile />
      {content}
    </div>
  );
}

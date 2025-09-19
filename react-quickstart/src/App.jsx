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

const products = [
  { title: 'Cabbage', isFruit: false, id: 1 },
  { title: 'Garlic', isFruit: false, id: 2 },
  { title: 'Apple', isFruit: true, id: 3 },
];

function ShoppingList() {
  const listItems = products.map(product =>
    <li
      key={product.id}
      style={{
        color: product.isFruit ? 'magenta' : 'darkgreen'
      }}
    >
      {product.title}
    </li>
  );

  return (
    <ul>{listItems}</ul>
  );
}

function Button({ count, onClick }) {
  return (
	<button onClick={onClick}>
  	Clicked {count} times
	</button>
  );
}



export default function App() {
   const [count, setCount] = useState(0);

 function handleClick() {
   setCount(count + 1);
 }

  return (
    <div>
      <h1>Welcome to my app</h1>
      <MyButton />
      <AboutPage />
      <Avatar />
      <Profile />
      {content}
      <ShoppingList />
      <h1>Counters that update together</h1>
  	 <Button count={count} onClick={handleClick} />
  	 <Button count={count} onClick={handleClick} />

    </div>
  );
}

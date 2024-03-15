
'use client';
import { Button, Navbar } from 'flowbite-react';

export default function NavbarComponent() {
  return (
    <div className='container w-full max-auto border rounded-lg justify-center p-5'>
    <Navbar fluid rounded>
      <Navbar.Brand href="https://i.pinimg.com/564x/b9/c5/34/b9c5344544ba5f44997f4190dfdf273d.jpg">
        <img src="https://i.pinimg.com/564x/b9/c5/34/b9c5344544ba5f44997f4190dfdf273d.jpg" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Flowbite React</span>
      </Navbar.Brand>
      <Navbar.Collapse>
        <Navbar.Link href="#" active>
          Home
        </Navbar.Link>
        <Navbar.Link href="#">About</Navbar.Link>
        <Navbar.Link href="#">Services</Navbar.Link>
        <Navbar.Link href="#">Pricing</Navbar.Link>
        <Navbar.Link href="#">Contact</Navbar.Link>
      </Navbar.Collapse>
      <div className="flex md:order-2">
        <Button>Get started</Button>
        <Navbar.Toggle />
      </div>
    </Navbar>
    </div>
  );
}

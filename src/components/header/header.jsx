import logo from '../../assets/logo.svg';

export function Header() {
  return (
    <header className="sm:absolute">
      <img className="pt-5 sm:pt-10 sm:pl-10 pl-4 w-40 sm:w-96" src={logo} alt="huddle" />
    </header>
  )
}
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowUpRight, Menu, X } from 'lucide-react';

export const Header = () => {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);
  const home = pathname === '/';
  const links = [['Home', '#home'], ['About', '#about'], ['Projects', '#work'], ['Experience', '#experience'], ['Contact', '#contact']];
  return <header className={`reference-header ${home ? '' : 'inner-header'}`}><Link className="brand" to="/" onClick={() => setOpen(false)}>Adhil Haris <span /></Link><nav className={open ? 'header-nav is-open' : 'header-nav'} aria-label="Main navigation">{links.map(([label, hash]) => { const isActive = home ? label === 'Home' : label === 'About'; return <a key={label} className={isActive ? 'active' : undefined} aria-current={isActive ? 'page' : undefined} href={home ? hash : `/${hash}`} onClick={() => setOpen(false)}>{label}</a>; })}</nav><a className="pill header-hire" href={home ? '#contact' : '/#contact'}>Hire Me <ArrowUpRight /></a><button className="mobile-menu" aria-label={open ? 'Close navigation' : 'Open navigation'} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button></header>;
};

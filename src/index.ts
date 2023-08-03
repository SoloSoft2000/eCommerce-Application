import './styles/style.scss';

console.log('Start application');
const h1 = document.createElement('h1');
h1.textContent = 'eCommerce-Application';
document.body.append(h1);

export default function pifagor(a: number, b: number): number {
  const res = a ** 2 + b ** 2;
  return Math.sqrt(res);
}

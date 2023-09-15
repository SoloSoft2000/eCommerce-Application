export interface QuantitySpinnerProps {
  min: number;
  max: number;
  quantity: number;
  whenQuantityChange: (newQuantity: number) => void;
}

/*
 * Complete the 'solve' function below.
 *
 * The function accepts following parameters:
 *  1. DOUBLE meal_cost
 *  2. INTEGER tip_percent
 *  3. INTEGER tax_percent
 */

type SolveProps = {
    meal_cost: number;
    tip_percent: number;
    tax_percent: number;
};
  
  function solve({ meal_cost, tip_percent, tax_percent }: SolveProps) {
    const tip = (meal_cost * tip_percent) / 100;
    const tax = (meal_cost * tax_percent) / 100;
    const finalPrice = meal_cost + tip + tax;
    const roundFinalPrice = Math.round(finalPrice);
  
    console.log(roundFinalPrice);
}
  
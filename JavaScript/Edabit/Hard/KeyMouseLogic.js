/*
Key - Mouse (Logic)
A keyboard and a mouse cost in total x, knowing that the keyboard costs y more
than the mouse, calculate the price of the mouse. Round the price of the mouse.

Examples
KM({"Total": "10.00$", "Difference": "0.40$", "Mouse": "?"})
➞ {"Total": "10.00$", "Difference":"0.40$", "Mouse": "4.8$"}

KM({"Total": "90.00$", "Difference": "5.40$", "Mouse": "?"})
➞ {"Total": "90.00$", "Difference": "5.40$", "Mouse": "42.3$"}

KM({"Total": "1.30$", "Difference": "0.80$", "Mouse": "?"})
➞ {"Total": "1.30$", "Difference": "0.80$", "Mouse": "0.25$"}
Notes
If you get stuck, check the Resources tab.
*/

function KM(table) {
  let [y, t] = [table.Difference, table.Total];
  table.Mouse = Math.round((parseFloat(t) - parseFloat(y)) * 100 / 2) / 100 + '$';
  return table;
}
// Testing
console.log(KM({"Total": "1.90$", "Difference": "0.90$", "Mouse": "?"}), {"Total": "1.90$", "Difference":"0.90$", "Mouse": "0.5$"})
console.log(KM({"Total": "1.30$", "Difference": "0.80$", "Mouse": "?"}), {"Total": "1.30$", "Difference":"0.80$", "Mouse": "0.25$"})
console.log(KM({"Total": "3.90$", "Difference": "0.20$", "Mouse": "?"}), {"Total": "3.90$", "Difference":"0.20$", "Mouse": "1.85$"})
console.log(KM({"Total": "0.801$", "Difference": "0.40$", "Mouse": "?"}), {"Total": "0.801$", "Difference":"0.40$", "Mouse": "0.2$"})
console.log(KM({"Total": "10.00$", "Difference": "0.40$", "Mouse": "?"}), {"Total": "10.00$", "Difference":"0.40$", "Mouse": "4.8$"})
console.log(KM({"Total": "20.00$", "Difference": "1.40$", "Mouse": "?"}), {'Total': '20.00$', 'Difference': '1.40$', 'Mouse': '9.3$'})

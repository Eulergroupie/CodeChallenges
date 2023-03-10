/* Edabit
Given a class for a BasicPlan, write the classes for StandardPlan and 
PremiumPlan which have class properties of the following:

BasicPlan	StandardPlan	PremiumPlan
✓	✓	✓	canStream
✓	✓	✓	canDownload
✓	✓	✓	hasSD
✓	✓	hasHD
✓	hasUHD
1	2	4	numOfDevices
$8.99	$12.99	$15.99	price
Examples
BasicPlan.hasSD ➞ true 

PremiumPlan.hasSD ➞ true

BasicPlan.hasUHD ➞ false

BasicPlan.price ➞ '$8.99'

PremiumPlan.numOfDevices ➞ 4
Notes
Try to extend the classes to complete the challenge! If you're unsure what that
 means, try checking out the JavaScript class tutorials in the Resources tab.
*/
class BasicPlan {
	static canStream = true;
	static canDownload = true;
	static numOfDevices = 1;
	static hasSD = true;
	static hasHD = false;
	static hasUHD = false;
	static price = '$8.99';
}

// Write the classes for StandardPlan and PremiumPlan here!
class StandardPlan extends BasicPlan {
  static hasHD = true;
  static numOfDevices = 2;
  static price = '$12.99';
}

class PremiumPlan extends StandardPlan {
  static hasUHD = true;
  static numOfDevices = 4;
  static price = '$15.99';
}

// Testing
console.log(BasicPlan.canStream);
console.log(StandardPlan.hasHD);
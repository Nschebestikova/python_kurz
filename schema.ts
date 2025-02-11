//Business kontext

import { DateUtilMain } from "./git-demo/schema2";

//Očekávané chování

//```jsx
// Příklad použití, kterého chceme dosáhnout
//const formattedDate = DateUtil.formatDate(new Date(), 'YYYY-MM-DD');
//const parsedDate = DateUtil.parseDate('2024-03-10', 'YYYY-MM-DD');
//```

//

export enum TimeUnit {
    DAYS = 'days',
    MONTHS = 'months',
    YEARS = 'years',
    MINUTES = 'minutes',
    HOURS = 'hours',
    WEEKS = 'weeks'
}

// Example usage
const formattedDate1 = DateUtil.formatDate(new Date(), 'YYYY-MM-DD');
console.log(formattedDate1);

const formattedDate2 = DateUtil.formatDate(new Date(), 'MM/DD/YYYY');
console.log(formattedDate2);

const formattedDate3 = DateUtil.formatDate(new Date(), 'DD-MM-YYYY');
console.log(formattedDate3);

const parsedDate1 = DateUtil.parseDate('2024-03-10', 'YYYY-MM-DD');
console.log(parsedDate1);

const parsedDate2 = DateUtil.parseDate('03/10/2024', 'MM/DD/YYYY');
console.log(parsedDate2);

const parsedDate3 = Date

// Example usage
const today = new Date();
const futureDate = DateUtil.addTime(today, 2, TimeUnit.MONTHS);
const pastDate = DateUtil.subtractTime(today, 1, TimeUnit.YEARS);
const daysBetween = DateUtil.getDateDiff(today, futureDate, TimeUnit.DAYS);
const isGreater = DateUtil.compare(futureDate, today) > 0;

// Example usage:
const pastDateExample = new Date('2024-01-01');
console.log(DateUtilMain.formatRelativeTime(pastDateExample)); // e.g. "2 months ago"



function formatRelativeTime(Date: DateConstructor, Date1: DateConstructor) {
    throw new Error("Function not implemented.");
}
//´´´´
//pokus o debbug:

 //Let me help you debug the selected code in schema.ts. Here's a debugged and improved version:

 // Example usage with error handling
//try {
  //  const today = new Date();
    
    // Add validation for today
    //if (!(today instanceof Date) || isNaN(today.getTime())) {
      //  throw new Error('Invalid date');
    //}
    
    // Add time
    //const futureDate = DateUtil.addTime(today, 2, TimeUnit.MONTHS);
    
    // Subtract time
    //const pastDate = DateUtil.subtractTime(today, 1, TimeUnit.YEARS);
    
    // Get difference between dates
    //const daysBetween = DateUtil.getDateDiff(today, futureDate, TimeUnit.DAYS);
    
    // Compare dates
    //const isGreater = DateUtil.compare(futureDate, today) > 0;
    
    // Log results for debugging
    //console.log({
    //    today: today.toISOString(),
    //    futureDate: futureDate.toISOString(),
    //    pastDate: pastDate.toISOString(),
    //    daysBetween,
    //    isGreater
    //});
//} catch (error) {
//    console.error('Error in date operations:', error);
//}

// Key improvements:

// Added try-catch block to handle potential errors
// Added date validation for the initial date
// Added logging of results for debugging purposes
// Used DateUtil methods from your codebase properly
// Properly handled the TimeUnit enum values
// The code should now be more robust and easier to debug if issues occur.
//´´´´
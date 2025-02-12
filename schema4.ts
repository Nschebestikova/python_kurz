
// Implement dateUtil class
export class DateUtil {
  // Method to get current date
  getCurrentDate() {
    return new Date();
  }
}

// Implement controler class for date utilities
export class DateUtilController {
  // Method to get current date
  getCurrentDate() {
    const dateUtil = new DateUtil();
    return dateUtil.getCurrentDate();
  }
}

// Implement main class for date utilities
export class DateUtilMain {
  // Method to get current date
  getCurrentDate() {
    const dateUtilController = new DateUtilController();
    return dateUtilController.getCurrentDate();
  }
}

// Example usage
const dateUtilMain = new DateUtilMain();
const currentDate = dateUtilMain.getCurrentDate();
console.log(currentDate);
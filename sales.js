function sales(CustomerName, CustomerType, TotalAmount) {

    let discount = 0;
    let AddGST = 0;
    let FinalBillAmount = 0;

    console.log("Customer Name: " + CustomerName);
    console.log("Customer Type: " + CustomerType);
    console.log("Total Amount: ₹" + TotalAmount);

    // Calculate Discount
    if (CustomerType == "Premium") {
        discount = TotalAmount >= 5000 ? TotalAmount * 0.20 : TotalAmount * 0.10;
    } else if (CustomerType == "Regular") {
        discount = TotalAmount >= 5000 ? TotalAmount * 0.10 : TotalAmount * 0.05;
    }

    console.log("Discount: ₹" + discount);

    // Add GST
    AddGST = TotalAmount * 0.18;
    console.log("GST Amount: ₹" + AddGST);

    // Final Bill
    FinalBillAmount = TotalAmount + AddGST - discount;
    console.log("Final Bill Amount: ₹" + FinalBillAmount);

    // Payment Method
    let paymentMethod = "UPI";

    switch (paymentMethod) {
        case "Cash":
            console.log("Cash Payment Selected");
            break;
        case "UPI":
            console.log("UPI Payment Selected");
            break;
        case "Card":
            console.log("Card Payment Selected");
            break;
        default:
            console.log("Invalid Payment Method");
    }
}

sales("John", "Premium", 1000);

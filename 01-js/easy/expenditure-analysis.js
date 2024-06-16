/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions = []) {
  const totalSpentByCategory = transactions.reduce(
    (transactionsByCategory, currentTransaction) => {
      const matchedTransaction = transactionsByCategory?.findIndex(
        (existingTransaction) =>
          existingTransaction.category === currentTransaction.category
      );
      if (matchedTransaction !== -1)
        transactionsByCategory[matchedTransaction].totalSpent +=
          currentTransaction.price;
      else
        transactionsByCategory?.push({
          category: currentTransaction.category,
          totalSpent: currentTransaction.price,
        });
      return transactionsByCategory;
    },
    []
  );
  return totalSpentByCategory;
}

// alt approach

/**
 * function calculateTotalSpentByCategory(transactions = []) {
  const categoryTotals = {};
  for (const transaction of transactions) {
    const category = transaction.category;
    if (categoryTotals[category]) {
      categoryTotals[category] += transaction.price;
    } else {
      categoryTotals[category] = transaction.price;
    }
  }
  return Object.entries(categoryTotals).map(([category, totalSpent]) => ({
    category,
    totalSpent,
  }));
}
 */

module.exports = calculateTotalSpentByCategory;

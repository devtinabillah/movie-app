const operation = (list1, list2, comparer, isUnion = false) =>
	list1.filter(a => isUnion === list2.some(b => comparer(a, b)))

export const inBoth = (list1, list2, comparer) => operation(list1, list2, comparer, true)

export const inFirstOnly = operation

export const inSecondOnly = (list1, list2, comparer) => operation(list2, list1, comparer)
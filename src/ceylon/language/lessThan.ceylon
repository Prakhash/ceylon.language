"Returns a partial function that will compare an element
 to any other element and returns true if the compared
 element is less than its element.
 This is useful in conjunction with methods that receive
 a predicate function."
deprecated ("use [[Comparable.largerThan]]")
shared Boolean lessThan<Element>(Element val)(Element element)
        given Element satisfies Comparable<Element> => 
                element<val;


"Create an array of the specified [[size]], populating every 
 index with the given [[element]]. The specified `size` must
 be in the range `0..runtime.maxArraySize`."
throws (`class AssertionException`, 
        "if `size<0` or `size>runtime.maxArraySize`")
//see (`value runtime.maxArraySize`)
shared native Array<Element> arrayOfSize<Element>(
        "The size of the resulting array. If the size is 
         non-positive, an empty array will be created."
        Integer size,
        "The element value with which to populate the array.
         All elements of the resulting array will have the 
         same value." 
        Element element);


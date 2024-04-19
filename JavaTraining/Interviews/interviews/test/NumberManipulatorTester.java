import org.junit.Assert;
import org.junit.Test;

public class NumberManipulatorTester {
    
    /**
     * Question 9:
     
        Write a Java method to find all prime numbers up to a given number.
     
        Test Cases:
     
        Input: 10
        Expected Output: [2, 3, 5, 7]
        Input: 20
        Expected Output: [2, 3, 5, 7, 11, 13, 17, 19]
        Input: 5
        Expected Output: [2, 3, 5]
     */
    @Test
    public void TestGetPrimeNumbers()
    {
        NumberManipulator manipulator = new NumberManipulator();
        int[] numbers5 = {2, 3, 5};
        Assert.assertArrayEquals(numbers5, manipulator.GetPrimeNumbers(5));
        
        int[] numbers10 = {2, 3, 5, 7};
        Assert.assertArrayEquals(numbers10, manipulator.GetPrimeNumbers(10));

        int[] numbers20 = {2, 3, 5, 7, 11, 13, 17, 19};
        Assert.assertArrayEquals(numbers20, manipulator.GetPrimeNumbers(20));
    }

    /**Question 10:
        Implement a Java method to check if a given number is a palindrome.

        Test Cases:

        Input: 121
        Expected Output: true
        Input: 12321
        Expected Output: true
        Input: 12345
        Expected Output: false 
    */
    @Test
    public void TestCheckPalindromeNumber()
    {
        NumberManipulator manipulator = new NumberManipulator();
        Assert.assertTrue(manipulator.CheckPalindromeNumber(121));
        Assert.assertTrue(manipulator.CheckPalindromeNumber(12321));
        Assert.assertFalse(manipulator.CheckPalindromeNumber(12345));
        Assert.assertTrue(manipulator.CheckPalindromeNumber(11111));
        Assert.assertFalse(manipulator.CheckPalindromeNumber(12));
        Assert.assertFalse(manipulator.CheckPalindromeNumber(1234324));
        Assert.assertTrue(manipulator.CheckPalindromeNumber(789987));
    }

    /**
     * Question 13:
        Implement a Java method to perform a binary search on a sorted array.

        Test Cases:

        Input: [1, 3, 5, 7, 9], 5
        Expected Output: 2
        Input: [2, 4, 6, 8, 10], 7
        Expected Output: -1
        Input: [10, 20, 30, 40, 50], 40
        Expected Output: 3
     */
    @Test
    public void TestBinarySearch()
    {
        NumberManipulator manipulator = new NumberManipulator();
         int[] tsc = {1, 3, 5, 7, 9,10,23};
        Assert.assertEquals(2, manipulator.BinarySearch(tsc, 5));  
        int[] tsc1 = {1, 3, 5, 7, 9};
        Assert.assertEquals(2, manipulator.BinarySearch(tsc1, 5));  
        int[] tsc4 = {-10, 0, 10, 20, 30, 40, 50, 60}; 
        Assert.assertEquals(1, manipulator.BinarySearch(tsc4, 0));
        int[] tsc3 = {10, 20, 30, 40, 50};
        Assert.assertEquals(3, manipulator.BinarySearch(tsc3, 40)); 

        int[] tsc21 = {2, 4, 6, 8, 10};
        Assert.assertEquals(-1, manipulator.BinarySearch(tsc21, 7)); 
        int[] tsc22 = {2, 4, 6, 8, 10, 12};
        Assert.assertEquals(-1, manipulator.BinarySearch(tsc22, 7));

    }

}

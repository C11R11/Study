import org.junit.Assert;
import org.junit.Test;

public class StringManipulatorTester
{
    /**
     * Question 6:

    Write a Java method to remove duplicate characters from a string.

    Test Cases:

    Input: "hello"
    Expected Output: "helo"
    Input: "javadeveloper"
    Expected Output: "javdeolpr"
    Input: "banana"
    Expected Output: "ban"
    */
    @Test
    public void testDuplicatedStringRemover()
    {
        StringManipulator manipulator = new StringManipulator();
        Assert.assertEquals("helo", manipulator.DuplicatedStringRemover("hello"));
        Assert.assertEquals("lheo", manipulator.DuplicatedStringRemover("lhelol"));
        Assert.assertEquals("javdelopr", manipulator.DuplicatedStringRemover("javadeveloper"));
        Assert.assertEquals("ban", manipulator.DuplicatedStringRemover("banana"));
    }

    /**
     * Question 7:
    Implement a Java method to check if two strings are anagrams of each other.

    Test Cases:

    Input: "listen", "silent"
    Expected Output: true
    Input: "hello", "world"
    Expected Output: false
    Input: "rail safety", "fairy tales"
    Expected Output: true
    */
    @Test
    public void testAnagramsChecker()
    {
        StringManipulator manipulator = new StringManipulator();
        Assert.assertTrue(manipulator.CheckAnagram("listen", "silent"));
        Assert.assertFalse(manipulator.CheckAnagram("hello", "world"));
        Assert.assertTrue(manipulator.CheckAnagram("rail safety", "fairy tales"));
    }

    /**
     * Question 8:
        Create a Java method to reverse the order of words in a sentence.

        Test Cases:

        Input: "Hello world"
        Expected Output: "world Hello"
        Input: "Java is fun"
        Expected Output: "fun is Java"
        Input: "Coding is great"
        Expected Output: "great is Coding"
     */
    @Test
    public void testStringReverser()
    {
        StringManipulator manipulator = new StringManipulator();
        Assert.assertEquals("world Hello", manipulator.StringReverser("Hello world"));
        Assert.assertEquals("fun is Java", manipulator.StringReverser("Java is fun"));
        Assert.assertEquals("great is Coding", manipulator.StringReverser("Coding is great"));
    }

    /**
     * Question 12:
        Create a Java method to find the longest common prefix string amongst an array of strings.

        Test Cases:

        Input: ["flower", "flow", "flight"]
        Expected Output: "fl"
        Input: ["dog", "racecar", "car"]
        Expected Output: ""
        Input: ["apple", "ape", "april"]
        Expected Output: "ap"
     */
    @Test
    public void TestCommonPrefix()
    {
        StringManipulator manipulator = new StringManipulator();
        
        String[] tc1 = {"flower", "flow", "flight"};
        Assert.assertEquals("fl", manipulator.CommonPrefix(tc1));
        
        String[] tc2 = {"dog", "racecar", "car"};
        Assert.assertEquals("", manipulator.CommonPrefix(tc2));

        String[] tc3 = {"apple", "ape", "april"};
        Assert.assertEquals("ap", manipulator.CommonPrefix(tc3));

        String[] tc4 = {"alle", "ape", "april"};
        Assert.assertEquals("a", manipulator.CommonPrefix(tc4));
    }

}

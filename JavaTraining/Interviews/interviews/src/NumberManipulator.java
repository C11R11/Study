import java.util.ArrayList;
import java.util.List;

public class NumberManipulator {

    public int[] GetPrimeNumbers(int n) {
        List<Integer> num = new ArrayList<>();

        for (int i = 2; i <= n; i++) {
            boolean primeCheck = true;
            for (int j = 2; j <= i; j++) {
                if(i%j == 0 && i !=j){
                 primeCheck = false;
                 break;
                }
            }
            if (primeCheck) num.add(i);
        }

        int[] res = new int[num.size()];
        for (int i = 0; i < res.length; i++) {
            res[i] = num.get(i);
        }

        return res;
    }

	public boolean CheckPalindromeNumber(int n) {
        String numStr = String.valueOf(n);
        char[] result = numStr.toCharArray();
        
        boolean checkPalindrome = true;
        for (int i = 0,  j = result.length -1; j >= i ; j--, i++) 
        {
            if (result[i] != result[j]){
                checkPalindrome = false;
                break;
            }
        }

        return checkPalindrome;
    }

    public int BinarySearch(int[] tsc1, int n) {
        
        boolean found = false;
        int binaryArrayLenght = tsc1.length;
        int binaryArrayZero = 0;
        int idx = binaryArrayLenght/2;

        while(!found)
        {
            //we found it :)
            if (tsc1[idx] == n){
                found = true;
                break;
            }

            //We're stuck
            if (binaryArrayLenght - binaryArrayZero == 1)
            {
                found = true;
                idx = -1;
                break;
            }

            if(tsc1[idx] > n )
            {
                binaryArrayLenght = idx;
                idx = binaryArrayLenght/2;

            }
            else
            {
                binaryArrayZero = idx;
                idx = binaryArrayZero + (binaryArrayLenght - binaryArrayZero) / 2;
            }
        }

        return idx;

    }

}

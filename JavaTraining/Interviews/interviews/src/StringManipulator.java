public class StringManipulator {

    public String DuplicatedStringRemover(String str) {

        char[] c1 = str.toCharArray();
        String c2 = "";

        for(int i = 0; i < c1.length; i++)
        {
            //check if its on the final string
            boolean existOnReturnString = c2.indexOf(c1[i]) != -1;
            if(!existOnReturnString) c2 = c2 + c1[i];
        }
        return c2;
    }

	public boolean CheckAnagram(String string, String string2) {
	
        char[] c1 = string.toCharArray();

        boolean existOnOtherString = false;

        for(int i = 0; i < c1.length; i++)
        {
            existOnOtherString = string2.indexOf(c1[i]) != -1;
            if(!existOnOtherString) break;
        }

        if(!existOnOtherString) return false;
        return true;
    }

    public String StringReverser(String string) {
        String[] splitted = string.split(" ");
        String reversed = "";

        for (int i = splitted.length -1; i >= 0; i--) 
        {
            if (i == splitted.length -1) reversed = reversed + splitted[i]; 
            else reversed = reversed + " " + splitted[i]; 
        }

        return reversed;     
    }

    public String CommonPrefix(String[] tc1) {

        String res = "";
        char[][] c = new char[tc1.length][];

        for (int i = 0; i < tc1.length; i++)
        {
            c[i] = tc1[i].toCharArray();
        }

        for (int j = 0; j < c.length; j++) {

            boolean charsAreEquals = true;
            char currentChar = c[0][j];
            
            for (int k = 1; k < c.length; k++) {
            
                if (currentChar != c[k][j]) charsAreEquals = false;

            }

            if (!charsAreEquals) break;
            else
            {
                res = res + currentChar;
            }    
        }

        return res;
    }


}

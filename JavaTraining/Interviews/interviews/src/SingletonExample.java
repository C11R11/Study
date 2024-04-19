/*
 * Question 16:
Explain the Singleton design pattern and provide a Java implementation of it.

A: The singleton design pattern is used to protect the object creation for an specific class. 
*/

import java.time.Instant;

public class SingletonExample {

    private static int currentUser = 0;
    private static SingletonExample singleton = null;
    private Instant creation;

    private SingletonExample()
    {
        System.out.println("Hello :=)");
        this.creation = Instant.now();
    }

    public void SaySomething()
    {
        Instant today = Instant.now();
        System.out.println(today.toString() + ": " + "Something :)" + " Users: " + currentUser + " Objects");
        PrintInfoSingleton();
    }

    public void PrintInfoSingleton()
    {
        System.out.println("Creation Info: " + this.creation);
    }

    public static SingletonExample CreateSingletonExample()
    {
        if (singleton == null)
        {
            singleton = new SingletonExample();
        }

        currentUser++;
        System.out.println("Another user asking for object, total of" + currentUser);

        return singleton;
    }

    public static void main(String[] args) {
     
        SingletonExample x = CreateSingletonExample();
        x.SaySomething();

        CreateSingletonExample().SaySomething();
        ;
    }
    
}

/*
 * Question 17:
 * Describe the Observer design pattern and provide a scenario where it could be applied. Then, provide a Java implementation.
 * 
 * A: The observer pattern is common used when you have objects that have related information with another ones. For this the pattern
 *    defines a subscription mechanism to keep all the interested object uptdate to the changes in its internal state.
 * 
 *    An scenario when this can be applied is when you have a centralized class having all the server status information. All the other
 *    classes that their behaviour depends on the server health may need to be updated for this information.  
 * 
 */

import java.util.ArrayList;
import java.util.List;

public class ObserverExample {

    public static void main(String[] args) {
        LedScreen led = new LedScreen();
        Keyboard keyboard = new Keyboard(led);
        FingerprintSensor sensor = new FingerprintSensor(led);        

        keyboard.Write("hello from keyboard");
    }  
}

interface Observable {

    public void Subcribe(Observer o);
    public void Unsubscribe(Observer o);
    public void Notify();

}

interface Observer
{
    public void Update(String str);
    public String GetState();
}

class LedScreen implements Observable
{
    private List<Observer> observers;
    private String state = "ready to print :)";

    public LedScreen()
    {
        observers = new ArrayList<>();
    }

    public void Notify()
    {
        for (Observer observer : observers) {
            System.out.println("notify " + observer.toString());
            observer.Update(state);
        }
    }

    public void PrintState()
    {
        System.out.println("State->" + state);
    }

    public String getState() {
        return state;
    }

    public void setState(String state) {
        this.state = state;
        Notify();
    }

    @Override
    public void Subcribe(Observer o) {
        observers.add(o);
        System.err.println("New Subscriber: " + o.GetState());
    }

    @Override
    public void Unsubscribe(Observer o) {
        observers.remove(o);
        System.err.println("Removing Subscriber: " + o.GetState());
    }
}

class Keyboard implements Observer
{
    private String state = "";
    private LedScreen led;

    public Keyboard(LedScreen led)
    {
        state = "new Keyboard";
        //here's when the subscribing happens
        led.Subcribe(this);
        this.led = led;
        this.led.PrintState();
    }

    public void Write(String str)
    {
        System.out.println("New keyboard command " + str);
        this.led.setState(str);
    }

    @Override
    public void Update(String str) {
        System.out.println("Keyboard, Getting a change notification: from -->" + this.state + " to -->" + str);
        this.state = str;
    }

    @Override
    public String GetState() {
        return this.state;
    }
}

class FingerprintSensor implements Observer
{
    private String state = "";

    public FingerprintSensor(LedScreen led)
    {
        state = "new FingerprintSensor";
        //here's when the subscribing happens
        led.Subcribe(this);
    }

    @Override
    public void Update(String str) {
        System.out.println("FingerprintSensor, Getting a change notification: from -->" + this.state + " to -->" + str);
        this.state = str;
    }

    @Override
    public String GetState() {
        return this.state;
    }
}